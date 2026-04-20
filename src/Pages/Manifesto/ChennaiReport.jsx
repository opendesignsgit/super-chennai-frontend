import { Helmet } from "react-helmet-async";

export default function ChennaiReport() {
  return (
    <>
      <Helmet>
        <title>Chennai Infrastructure Intelligence Report 2026</title>
        <meta
          name="description"
          content="Explore Chennai's ₹90,000+ crore infrastructure boom including metro, roads, and smart city development."
        />
        <link
          rel="canonical"
          href="https://www.superchennai.com/chennai-infrastructure-intelligence-report"
        />
      </Helmet>

      <div className="relative overflow-hidden bg-gradient-to-b from-[#8b3c82] via-[#a34493]/90 to-[#8b3c82] pt-20 pb-20 px-6">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2b3284_0%,#b10f92_50%,#2b3284_100%)]"></div>

        <div className="relative bg-gradient-to-b  p-10 max-w-4xl mx-auto ">
          <div className="text-center">
            <div className="accodoamationBannerContainer">
              <div className="accodoamationBannerText">
                <h3> Chennai Infrastructure</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      {/* <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white -mt-8 pt-12 pb-12 px-4 md:px-8">
        <div className="max-w-8xl mx-auto">
          <iframe
            src="/pdfs/explore_more_chennai.pdf"
            title="Chennai Report"
            className="w-full h-[85vh] md:h-[90vh] border-0 rounded-3xl shadow-2xl shadow-gray-200/50 bg-white"
            frameBorder="0"
          />
        </div> */}

      {/* </div> */}
  <div className="min-h-[calc(100vh-12rem)] bg-gradient-to-br from-slate-50 via-white to-slate-50 -mt-6 pt-8 pb-12 px-2 md:px-8">
  <div className="max-w-6xl mx-auto">
    <div className="group relative bg-white/90 backdrop-blur-sm border border-gray-100/60 rounded-3xl shadow-2xl shadow-gray-200/70 hover:shadow-3xl md:hover:shadow-gray-300/80 transition-all duration-500 overflow-hidden">
      
      {/* Mobile-Friendly Header */}
      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#8b3c82]/15 to-[#a34493]/15 backdrop-blur-lg border-b border-white/60 p-3 md:p-4 flex items-center justify-between z-10 group-hover:bg-[#8b3c82]/25 md:group-hover:bg-[#8b3c82]/20 transition-all duration-400">
        <div className="flex items-center space-x-2 md:space-x-3">
          <div className="w-2.5 h-2.5 md:w-3 md:h-3 bg-gradient-to-r from-[#8b3c82] to-[#a34493] rounded-full animate-pulse-slow"></div>
          <span className="text-xs md:text-sm font-semibold text-gray-800 tracking-wide">
            CHENNAI INFRASTRUCTURE 2026
          </span>
        </div>
        <div className="hidden md:flex items-center space-x-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="text-xs text-gray-600 font-mono">PDF Preview</span>
          <div className="w-5 h-5 bg-white/90 rounded-lg flex items-center justify-center shadow-sm text-xs">📄</div>
        </div>
      </div>

      {/* 🔥 MOBILE-FIXED PDF VIEWER */}
      <div className="pt-14 md:pt-20 pb-6 md:pb-8 px-3 md:px-6 relative">
        {/* Primary: object (best mobile support) */}
        <object 
          data="/pdfs/explore_more_chennai.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH" 
          type="application/pdf" 
          className="w-full h-[70vh] md:h-[78vh] lg:h-[82vh] border-0 bg-white rounded-2xl shadow-inner block"
          width="100%"
          height="100%"
        >
          {/* Fallback 1: embed */}
          <embed 
            src="/pdfs/explore_more_chennai.pdf#toolbar=0&navpanes=0&scrollbar=1&view=FitH" 
            type="application/pdf" 
            className="w-full h-[70vh] md:h-[78vh] lg:h-[82vh] border-0 bg-white rounded-2xl shadow-inner"
            webkitallowfullscreen mozallowfullscreen allowfullscreen
          />
          {/* Fallback 2: Direct link */}
          <a 
            href="/pdfs/explore_more_chennai.pdf" 
            className="block w-full h-[70vh] md:h-[78vh] lg:h-[82vh] bg-gradient-to-br from-[#8b3c82]/10 to-[#a34493]/10 rounded-2xl flex items-center justify-center text-xl font-bold text-gray-700 hover:text-[#a34493] transition-colors"
          >
            👆 Tap to Download Full Report
          </a>
        </object>
      </div>

      {/* Mobile-Optimized Badge */}
      <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 bg-gradient-to-br from-[#8b3c82]/95 to-[#a34493]/95 text-white text-xs md:text-sm font-bold px-3 md:px-4 py-1.5 md:py-2 rounded-xl shadow-2xl shadow-black/40 hover:scale-105 active:scale-95 transition-all duration-200 md:animate-float-slow z-20">
        📊 Intelligence Report 2026
      </div>
    </div>
  </div>

  <style jsx>{`
    @media (max-width: 768px) {
      .pdf-container * {
        max-width: 100% !important;
        height: auto !important;
      }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.7; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.15); }
    }
    @keyframes float-slow {
      0%, 100% { transform: translateY(0px); }
      50% { transform: translateY(-3px); }
    }
    .animate-pulse-slow { animation: pulse-slow 2.5s infinite; }
    .animate-float-slow { animation: float-slow 4s ease-in-out infinite; }
  `}</style>
</div>

      <style jsx>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(20px, -10px) scale(1.1);
          }
          66% {
            transform: translate(-15px, 15px) scale(0.95);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        @keyframes pulse-slow {
          0%,
          100% {
            transform: scale(1) rotate(0deg);
          }
          50% {
            transform: scale(1.15) rotate(180deg);
          }
        }
        @keyframes glow-line {
          0%,
          100% {
            box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
          }
          50% {
            box-shadow:
              0 0 20px rgba(255, 255, 255, 0.9),
              0 0 40px rgba(163, 68, 147, 0.6);
          }
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-12px) rotate(180deg);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animate-pulse-slow {
          animation: pulse-slow 10s infinite;
        }
        .animate-glow-line {
          animation: glow-line 3s infinite;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
      `}</style>
    </>
  );
}