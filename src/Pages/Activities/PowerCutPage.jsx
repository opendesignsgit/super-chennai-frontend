import { Helmet } from "react-helmet-async";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";
import { Link } from "react-router-dom";

export default function ChennaiReport() {
  return (
    <>
      <Helmet>
        <title>Pallavaram Power Shutdown Notice 2026</title>
        <meta
          name="description"
          content="Official power shutdown notification for Pallavaram. View scheduled maintenance details, affected areas, and outage timings."
        />
        <link
          rel="canonical"
          href="https://www.superchennai.com/pallavaram-power-shutdown-notice"
        />
      </Helmet>

      <div className="accaodomationBannerSection relative">
        {/* IMAGE */}
        <img
          src="https://demo.superchennai.com/api/media/file/avakara-img.jpg.jpeg"
          className="w-full h-[400px] object-cover"
        />

        {/* SHADE */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#2b3284_0%,#b10f92_50%,#2b3284_100%)]"></div>
        <div className="absolute inset-0 bg-black/50"></div>
        {/* CONTENT */}
        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText">
            <AutoShrinkText
              text="Pallavaram Power Shutdown Notice"
              baseSize={60}
              minSize={20}
              maxChars={40}
              className="accodoamationBannerText"
              width="95%"
              maxLines={2}
            />

                {/* <div className="breadCrum newew">
                <Link to="/">Home</Link> -{" "}
                <span>Pallavaram Power Shutdown Notice</span>
                </div> */}
          </div>
        </div>
      </div>

      <section className=" bg-white py-10">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div className="InvestChennaiContent-conclaves ">
              <h1 className=" text-center hidden ">
                Pallavaram Power Shutdown Notice
              </h1>

              <h3>Scheduled Power Shutdown - Pallavaram</h3>

              <p className="text-gray-600 leading-relaxed mb-6 ">
                To facilitate essential maintenance and infrastructure
                improvement works, a scheduled power shutdown has been announced
                for selected areas in Pallavaram. Residents, businesses, and
                commercial establishments are advised to plan accordingly during
                the outage period. The maintenance activities are being carried
                out to improve the reliability and safety of the electricity
                distribution network. Please refer to the official notification
                below for detailed information regarding affected locations,
                shutdown timings, and restoration schedules.
              </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 py-10">
              <div className="group relative inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-500/90 to-rose-600/90 text-white font-semibold tracking-wide rounded-full shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-rose-400/50 backdrop-blur-sm animate-pulse-slow">
                <a
                  href="/pdfs/pallavaram-power-shutdown-notice.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <div className="w-3 h-3 bg-white/20 rounded-full animate-ping"></div>
                    VIEW OFFICIAL NOTICE
                  </span>
                </a>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-400/50 to-pink-400/50 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="min-h-[calc(100vh-20rem)] bg-gradient-to-br from-slate-50 via-white to-slate-50 -mt-8 pt-12 pb-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="group relative bg-white/80 backdrop-blur-sm border border-gray-100/50 rounded-3xl shadow-2xl shadow-gray-200/60 hover:shadow-3xl transition-all duration-700 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-[#8b3c82]/10 to-[#a34493]/10 backdrop-blur-md border-b border-white/50 p-4 flex items-center justify-between z-10 group-hover:bg-[#8b3c82]/20 transition-all duration-500">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-gradient-to-r from-[#8b3c82] to-[#a34493] rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700 tracking-wide">
                  PALLAVARAM POWER SHUTDOWN NOTICE
                </span>
              </div>
            </div>
            <iframe
              src={`https://docs.google.com/gview?url=${encodeURIComponent(
                "https://www.superchennai.com/pdfs/pallavaram-power-shutdown-notice.pdf",
              )}&embedded=true`}
              className="w-full h-[75vh]"
            />
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