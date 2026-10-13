
import heic2any from "heic2any";
import { FFmpeg } from "@ffmpeg/ffmpeg";
import { fetchFile, toBlobURL } from "@ffmpeg/util";

let ffmpegInstance = null;
let ffmpegLoadPromise = null;

// ==========================================
// FFMPEG INITIALIZATION WITH DEBUG LOGS
// ==========================================
const getFFmpeg = async () => {
  if (ffmpegInstance) {
    console.log("[FFmpeg] Existing instance found");
    return ffmpegInstance;
  }

  if (!ffmpegLoadPromise) {
    ffmpegLoadPromise = (async () => {
      const ffmpeg = new FFmpeg();

const baseURL =
  "https://cdn.jsdelivr.net/npm/@ffmpeg/core@0.12.10/dist/esm";

  ffmpeg.on("log", ({ message }) => {
  console.log("[FFmpeg Core]", message);
});

      try {
        console.log("[FFmpeg] Loading engine...");

        const coreURL = await toBlobURL(
          `${baseURL}/ffmpeg-core.js`,
          "text/javascript",
        );

        const wasmURL = await toBlobURL(
          `${baseURL}/ffmpeg-core.wasm`,
          "application/wasm",
        );

        console.log("[FFmpeg] Core and WASM ready");
        console.log("[FFmpeg] Calling load()");

        await Promise.race([
          ffmpeg.load({ coreURL, wasmURL }),
          new Promise((_, reject) => {
            setTimeout(() => {
              reject(
                new Error(
                  "FFmpeg initialization timed out after 30 seconds",
                ),
              );
            }, 30000);
          }),
        ]);

        ffmpegInstance = ffmpeg;

        console.log("[FFmpeg] Engine loaded successfully");

        return ffmpeg;
      } catch (error) {
        console.error("[FFmpeg] Engine initialization error:", error);
        throw error;
      }
    })().catch((error) => {
      ffmpegLoadPromise = null;
      throw error;
    });
  }

  return ffmpegLoadPromise;
};

// ==========================================
// HEIC / HEIF IMAGE TO PNG
// ==========================================
export const convertHeicToPng = async (file) => {
  console.group("[Image Conversion]");
  console.log("File:", file?.name);
  console.log("Type:", file?.type);
  console.log("Size:", file?.size);

  try {
    const fileType = (file.type || "").toLowerCase();

    const isHeic =
      /\.(heic|heif)$/i.test(file.name) ||
      ["image/heic", "image/heif"].includes(fileType);

    if (!isHeic) {
      console.log("Conversion not required");
      return file;
    }

    console.log("HEIC/HEIF detected. Converting to PNG...");

    const converted = await heic2any({
      blob: file,
      toType: "image/png",
    });

    const pngBlob = Array.isArray(converted)
      ? converted[0]
      : converted;

    const pngName = file.name.replace(
      /\.(heic|heif)$/i,
      ".png",
    );

    const pngFile = new File([pngBlob], pngName, {
      type: "image/png",
      lastModified: Date.now(),
    });

    console.log("Image conversion successful:", {
      name: pngFile.name,
      type: pngFile.type,
      size: pngFile.size,
    });

    return pngFile;
  } catch (error) {
    console.error("[Image Conversion] Failed:", error);
    throw error;
  } finally {
    console.groupEnd();
  }
};

// ==========================================
// VIDEO COMPRESSION WITH DETAILED LOGS
// ==========================================
export const compressVideo = async (file, onProgress) => {
  const startedAt = Date.now();

  const uniqueId = `${Date.now()}_${Math.random()
    .toString(36)
    .slice(2, 8)}`;

  const extension =
    file.name.split(".").pop()?.toLowerCase() || "mp4";

  const inputName = `input_${uniqueId}.${extension}`;
  const outputName = `output_${uniqueId}.mp4`;

  let ffmpeg = null;
  let progressHandler = null;

  console.group("[Video Compression]");
  console.log("1. Original file:", {
    name: file.name,
    type: file.type,
    sizeMB: (file.size / (1024 * 1024)).toFixed(2),
  });

  try {
    if (!file || !file.size) {
      throw new Error("Selected video file is empty.");
    }

    // --------------------------------------
    // STEP 1: LOAD FFMPEG
    // --------------------------------------
    onProgress?.({
      stage: "Loading video engine",
      progress: 0,
    });

    console.log("2. Loading FFmpeg engine...");
    ffmpeg = await getFFmpeg();
    console.log("3. FFmpeg engine ready");

    // --------------------------------------
    // STEP 2: LISTEN FOR PROGRESS
    // --------------------------------------
    progressHandler = ({ progress, time }) => {
      const percent = Math.min(
        100,
        Math.max(0, Math.round((progress || 0) * 100)),
      );

      console.log("[FFmpeg Progress]", {
        percent,
        processedTime: time,
      });

      onProgress?.({
        stage: "Compressing video",
        progress: percent,
      });
    };

    ffmpeg.on("progress", progressHandler);

    // --------------------------------------
    // STEP 3: READ INPUT FILE
    // --------------------------------------
    console.log("4. Reading original video...");
    onProgress?.({
      stage: "Preparing video",
      progress: 0,
    });

    const inputData = await fetchFile(file);

    console.log("5. Input file read successfully:", {
      bytes: inputData.length,
      sizeMB: (inputData.length / (1024 * 1024)).toFixed(2),
    });

    // --------------------------------------
    // STEP 4: WRITE INPUT TO FFMPEG
    // --------------------------------------
    console.log("6. Writing input file into FFmpeg...");

    await ffmpeg.writeFile(inputName, inputData);

    console.log("7. Input file written successfully");

    // --------------------------------------
    // STEP 5: COMPRESS VIDEO
    // --------------------------------------
    console.log("8. Starting FFmpeg compression...");
    console.log("Input:", inputName);
    console.log("Output:", outputName);

    onProgress?.({
      stage: "Compressing video",
      progress: 0,
    });

    await ffmpeg.exec([
      "-i",
      inputName,
      "-vf",
      "scale=w='min(1280,iw)':h='min(720,ih)':force_original_aspect_ratio=decrease",
      "-c:v",
      "libx264",
      "-preset",
      "ultrafast",
      "-crf",
      "23",
      "-pix_fmt",
      "yuv420p",
      "-c:a",
      "aac",
      "-b:a",
      "96k",
      "-movflags",
      "+faststart",
      outputName,
    ]);

    console.log("9. FFmpeg compression completed");

    // --------------------------------------
    // STEP 6: READ COMPRESSED FILE
    // --------------------------------------
    console.log("10. Reading compressed output...");

    const output = await ffmpeg.readFile(outputName);

    if (!output || output.length === 0) {
      throw new Error("Compressed video output is empty.");
    }

    console.log("11. Compressed output read successfully:", {
      bytes: output.length,
      sizeMB: (output.length / (1024 * 1024)).toFixed(2),
    });

    // --------------------------------------
    // STEP 7: CREATE FINAL VIDEO FILE
    // --------------------------------------
    const compressedFile = new File(
      [new Uint8Array(output)],
      file.name.replace(/\.[^.]+$/, ".mp4"),
      {
        type: "video/mp4",
        lastModified: Date.now(),
      },
    );

    console.log("12. Final video file created:", {
      name: compressedFile.name,
      type: compressedFile.type,
      sizeMB: (
        compressedFile.size /
        (1024 * 1024)
      ).toFixed(2),
    });

    onProgress?.({
      stage: "Compression complete",
      progress: 100,
    });

    console.log(
      "Total compression time:",
      `${((Date.now() - startedAt) / 1000).toFixed(2)} seconds`,
    );

    return compressedFile;
  } catch (error) {
    console.error("[Video Compression] FAILED:", error);
    console.error("Error message:", error?.message);
    console.error("Error stack:", error?.stack);

    throw error;
  } finally {
    // --------------------------------------
    // STEP 8: CLEANUP
    // --------------------------------------
    if (ffmpeg && progressHandler) {
      ffmpeg.off("progress", progressHandler);
    }

    if (ffmpeg) {
      console.log("13. Cleaning up temporary files...");

      await ffmpeg.deleteFile(inputName).catch((error) => {
        console.warn("Input cleanup warning:", error?.message);
      });

      await ffmpeg.deleteFile(outputName).catch((error) => {
        console.warn("Output cleanup warning:", error?.message);
      });

      console.log("14. Cleanup completed");
    }

    console.groupEnd();
  }
};