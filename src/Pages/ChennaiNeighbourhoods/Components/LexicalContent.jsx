// const FORMAT = {
//   BOLD: 1,
//   ITALIC: 1 << 3,
//   UNDERLINE: 1 << 1,
// };

// const renderTextChildren = (children) => {
//   if (!Array.isArray(children)) return null;

//   return children.map((child, i) => {
//     if (child.type === "text") {
//       let el = child.text;

//       if (child.format & FORMAT.BOLD) el = <strong>{el}</strong>;
//       if (child.format & FORMAT.ITALIC) el = <em>{el}</em>;
//       if (child.format & FORMAT.UNDERLINE) el = <u>{el}</u>;

//       return <span key={i}>{el}</span>;
//     }

//     if (child.type === "linebreak") return <br key={i} />;

//     if (child.children) {
//       return (
//         <span key={i}>
//           {renderTextChildren(child.children)}
//         </span>
//       );
//     }

//     return null;
//   });
// };

// export default function LexicalContent({ content }) {
//   if (!content?.root?.children) return null;

//   return (
//     <div className="blog-content">
//       {content.root.children.map((node, idx) => {
//         switch (node.type) {

//           case "paragraph":
//             return (
//               <p key={idx} className="mb-5 text-gray-700 leading-relaxed">
//                 {renderTextChildren(node.children)}
//               </p>
//             );

//           case "heading": {
//             const Tag = node.tag || "h2";
//             return (
//               <Tag key={idx} className="text-2xl font-bold mb-4">
//                 {renderTextChildren(node.children)}
//               </Tag>
//             );
//           }

//           default:
//             return null;
//         }
//       })}
//     </div>
//   );
// }

const API_BASE = "https://dev-cms.superchennai.com";

const FORMAT = {
  BOLD: 1,
  ITALIC: 1 << 3,
  UNDERLINE: 1 << 1,
};

const renderText = (children) => {
  if (!children) return null;

  return children.map((child, i) => {
    if (child.type === "text") {
      let el = child.text;

      if (child.format & FORMAT.BOLD) el = <strong>{el}</strong>;
      if (child.format & FORMAT.ITALIC) el = <em>{el}</em>;
      if (child.format & FORMAT.UNDERLINE) el = <u>{el}</u>;

      return <span key={i}>{el}</span>;
    }

    if (child.type === "linebreak") {
      return <br key={i} />;
    }

    if (child.children) {
      return <span key={i}>{renderText(child.children)}</span>;
    }

    return null;
  });
};

export default function LexicalContent({ content }) {
  if (!content?.root?.children) return null;

  return (
    <div className="blog-content">
      {content.root.children.map((node, idx) => {

        /* PARAGRAPH */
        if (node.type === "paragraph") {
          return (
            <p key={idx} className="mb-5 text-gray-700 leading-relaxed">
              {renderText(node.children)}
            </p>
          );
        }

        /* HEADINGS */
        if (node.type === "heading") {
          const Tag = node.tag || "h2";

          return (
            <Tag key={idx} className="font-bold my-4">
              {renderText(node.children)}
            </Tag>
          );
        }

        /* BLOCKS */
        if (node.type === "block") {
          const blockType = node.fields?.blockType;

          /* IMAGE BLOCK */
          if (blockType === "mediaBlock") {
            const media = node.fields?.media;
            if (!media?.url) return null;

            return (
              <div key={idx} className="my-8">
                <img
                  src={API_BASE + media.url}
                  className="w-full rounded-lg"
                />
              </div>
            );
          }

          /* VIDEO BLOCK */
          if (blockType === "videoBlock") {
            const url = node.fields?.url;
            const source = node.fields?.source;

            if (!url) return null;

            if (source === "youtube") {
              let videoId = "";

              if (url.includes("youtube.com/watch")) {
                videoId = url.split("v=")[1]?.split("&")[0];
              }

              if (url.includes("youtu.be")) {
                videoId = url.split("youtu.be/")[1];
              }

              const embed = `https://www.youtube.com/embed/${videoId}`;

              return (
                <div key={idx} className="my-10">
                  <iframe
                    src={embed}
                    className="w-full aspect-video rounded"
                    allowFullScreen
                  />
                </div>
              );
            }

            return (
              <video
                key={idx}
                src={url}
                controls
                className="w-full rounded"
              />
            );
          }
        }

        return null;
      })}
    </div>
  );
}