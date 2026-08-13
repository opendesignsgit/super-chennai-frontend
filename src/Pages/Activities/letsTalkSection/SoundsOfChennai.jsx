import React, { useState, useRef } from "react";
import { Volume2, VolumeX, Music, Disc, Sparkles } from "lucide-react";

export default function SoundsOfChennai() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);

  // Free Royalty-Free Chennai Ambient Sound Tracks
  const tracks = [
    {
      name: "Marina Beach Waves",
      tag: "🌊 Ocean Calm",
      // Soft relaxing ocean sound
      url: "https://assets.mixkit.co/active_storage/sfx/2513/2513-preview.mp3",
    },
    {
      name: "Filter Coffee Pour & Morning Vibe",
      tag: "☕ Morning Coffee",
      // Gentle pouring & cafe ambience
      url: "https://assets.mixkit.co/active_storage/sfx/112/112-preview.mp3",
    },
    {
      name: "Veena & Coastal Breeze",
      tag: "🎵 Carnatic Soft Fusion",
      // Soft relaxing Indian instrument ambience
      url: "https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=indian-instrumental-11234.mp3",
    },
  ];

  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch((err) => console.log("Audio autoplay prevented:", err));
    }
  };

  const changeTrack = (index) => {
    setCurrentTrack(index);
    if (audioRef.current) {
      audioRef.current.src = tracks[index].url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 font-sans">
      {/* Audio Element */}
      <audio
        ref={audioRef}
        src={tracks[currentTrack].url}
        loop
        preload="metadata"
      />

      {/* Expanded Track Selector Card */}
      {isOpen && (
        <div className="bg-slate-900/95 text-white backdrop-blur-md p-4 rounded-2xl shadow-2xl border border-white/10 w-72 animate-in fade-in slide-in-from-bottom-5 duration-200">
          <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-3">
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5" /> Sounds of Chennai
            </span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs text-slate-400 hover:text-white"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2">
            {tracks.map((track, idx) => (
              <button
                key={idx}
                onClick={() => changeTrack(idx)}
                className={`w-full text-left p-2.5 rounded-xl text-xs transition-all flex items-center justify-between ${
                  currentTrack === idx
                    ? "bg-[#8b3c82] text-white font-semibold shadow-md"
                    : "bg-white/5 hover:bg-white/10 text-slate-300"
                }`}
              >
                <div className="truncate pr-2">
                  <p className="truncate">{track.name}</p>
                  <span className="text-[10px] opacity-75">{track.tag}</span>
                </div>
                {currentTrack === idx && isPlaying && (
                  <span className="flex gap-0.5 items-end h-3">
                    <span className="w-0.5 bg-amber-300 animate-[bounce_1s_infinite_100ms] h-full" />
                    <span className="w-0.5 bg-amber-300 animate-[bounce_1s_infinite_300ms] h-2/3" />
                    <span className="w-0.5 bg-amber-300 animate-[bounce_1s_infinite_200ms] h-full" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Floating Action Button */}
      <div className="flex items-center gap-2">
        {/* Track Menu Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-3 bg-slate-900 text-white border border-white/20 rounded-full shadow-lg hover:bg-slate-800 transition-transform active:scale-95"
          title="Change Sound"
        >
          <Disc className={`w-5 h-5 ${isPlaying ? "animate-spin" : ""}`} />
        </button>

        {/* Play/Pause Button */}
        <button
          onClick={togglePlay}
          className={`flex items-center gap-2.5 px-4 py-3 rounded-full text-sm font-bold shadow-xl border transition-all active:scale-95 ${
            isPlaying
              ? "bg-[#8b3c82] text-white border-purple-400/30 animate-pulse"
              : "bg-amber-400 text-slate-950 border-amber-300 hover:bg-amber-300"
          }`}
        >
          {isPlaying ? (
            <>
              <Volume2 className="w-5 h-5 animate-bounce" />
              <span className="hidden sm:inline">Playing Vibe</span>
            </>
          ) : (
            <>
              <VolumeX className="w-5 h-5" />
              <span>Chennai Vibe 🎵</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}