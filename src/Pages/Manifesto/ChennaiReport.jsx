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
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white -mt-8 pt-12 pb-12 px-4 md:px-8">
        <div className="max-w-8xl mx-auto">
          <iframe
            src="/pdfs/explore_more_chennai.pdf"
            title="Chennai Report"
            className="w-full h-[85vh] md:h-[90vh] border-0 rounded-3xl shadow-2xl shadow-gray-200/50 bg-white"
            frameBorder="0"
          />
        </div>
      </div>
      {/* 
      <div className="min-h-[calc(100vh-20rem)] bg-gradient-to-br from-slate-50 via-white to-slate-50 -mt-8 pt-12 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-3xl shadow-2xl shadow-gray-200/60 hover:shadow-3xl transition-all duration-700 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#8b3c82]/10 to-[#a34493]/10 backdrop-blur-md border-b border-white/50 p-4 flex items-center justify-between z-10 group-hover:bg-[#8b3c82]/20 transition-all duration-500">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-[#8b3c82] to-[#a34493] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide">
                  CHENNAI REPORT 2026
                </span>
              </div>
            </div>

            <div className="pt-20 pb-8 px-6">
              <embed
                src="/pdfs/explore_more_chennai.pdf#toolbar=0&navpanes=0&scrollbar=1"
                type="application/pdf"
                className="w-full h-[75vh] md:h-[82vh] border-0 bg-white rounded-2xl shadow-inner"
                webkitallowfullscreen="true"
                allowfullscreen="true"
              />
            </div>

            <div className="absolute bottom-6 left-6 bg-gradient-to-br from-[#8b3c82]/90 to-[#a34493]/90 text-white text-xs font-bold px-4 py-2 rounded-xl shadow-2xl hover:scale-105 transition-all duration-300 animate-float-slow">
              📊 Full Intelligence Report
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes float-slow {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-4px);
            }
          }
          @keyframes pulse {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.7;
            }
          }
          .animate-pulse {
            animation: pulse 2s infinite;
          }
          .animate-float-slow {
            animation: float-slow 4s ease-in-out infinite;
          }
        `}</style>
      </div> */}
    </>
  );
}

