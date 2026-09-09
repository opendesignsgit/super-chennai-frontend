import React, { useState, useEffect } from "react";

export default function GoluBannerFestiveOverlay() {
  const [mousePos, setMousePos] = useState({ x: -500, y: -500 });
  const [lights, setLights] = useState([]);

  // Mouse tracking for interactive spotlight
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  useEffect(() => {
    // 8 நுட்பமான ஒளிரும் புள்ளிகள் (Static Golden Lights)
    const initialLights = Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: `${10 + i * 12 + Math.random() * 5}%`,
      top: `${20 + Math.random() * 60}%`,
      delay: `${i * 0.4}s`,
    }));
    setLights(initialLights);
  }, []);

  return (
    <div
      onMouseMove={handleMouseMove}
      className="absolute inset-0 pointer-events-auto overflow-hidden z-20 group"
    >
      {/* 1. Interactive Mouse Spotlight Glow (மவுஸ் நகரும் இடத்தில் பொன்னிற ஒளி) */}
      <div
        className="pointer-events-none absolute w-80 h-80 rounded-full bg-amber-400/15 blur-3xl transition-transform duration-100 ease-out transform -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* 2. Premium Shimmer Light Sweep (மெதுவாகக் கடக்கும் ஒளிக்கீற்று) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-transparent via-amber-200/10 to-transparent animate-shimmer-sweep" />

      {/* 3. Festive Ambient Glow Points (மின்னும் பொன்னிற புள்ளிகள்) */}
      {lights.map((light) => (
        <div
          key={light.id}
          className="pointer-events-none absolute w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_12px_4px_rgba(251,191,36,0.8)] animate-pulse-glow"
          style={{
            left: light.left,
            top: light.top,
            animationDelay: light.delay,
          }}
        />
      ))}

      {/* 4. Bottom Luxury Glowing Line (கீழ் பகுதியில் மின்னும் தங்க நிற கோடு) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-amber-400 to-transparent shadow-[0_0_10px_2px_rgba(245,158,11,0.6)]" />

      {/* Animation Styles */}
      <style>{`
        @keyframes shimmerSweep {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(0.8);
          }
          50% {
            opacity: 1;
            transform: scale(1.4);
          }
        }

        .animate-shimmer-sweep {
          animation: shimmerSweep 7s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulseGlow 2.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
