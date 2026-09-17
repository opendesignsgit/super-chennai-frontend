import { useEffect, useState } from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AlphabetFilter({ value, onChange }) {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAlphabet, setShowAlphabet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1101);
    };

    // Initial check
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleClick = (l) => {
    onChange?.(l);
    if (isMobile) setIsOpen(false);
  };

  const NewhandleClick = () => {
    setShowAlphabet(true);
  };

  return (
    <>
      {/* <button
        className="bg-[#a44294] hover:bg-[#974189] text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors whitespace-nowrap neighbourtwoparagraph cursor-pointer formorefiltersss"
        fdprocessedid="pv8d08"
        onClick={NewhandleClick}
      >
        More Filters
      </button> */}

      {isMobile && (
        <div className="container max-w-7xl mx-auto px-4">
          <p className="text-sm formorefiltersss">
            Looking for more filters?{" "}
            <button
              onClick={NewhandleClick}
              className="text-[#a44294] font-semibold hover:underline cursor-pointer"
            >
              Click here
            </button>
          </p>
        </div>
      )}

      {(!isMobile || showAlphabet) && (
        <div
          className={
            isMobile
              ? "fixed inset-0 z-50 flex items-end bg-black/50 backdrop-blur-sm transition-opacity"
              : ""
          }
        >
          {(isOpen === false || isMobile === false) && (
            <section className="bg-white border-gray-100 py-6 neightwonewwmain relative">
              <div className="max-w-7xl container mx-auto px-4 sm:px-6 alphabetnewwwww">
                <div className="mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
                    <div>
                      <h2 className="text-base font-bold text-gray-900 neighbourtwosecondheading">
                        Search by Alphabet
                      </h2>
                      <p className="text-xs text-gray-500 mt-0.5 neighbourtwoparagraph">
                        Find your neighbourhood by selecting the first letter
                      </p>
                    </div>

                    {/* Reset button alignment matrum cursor effect click handling */}
                    {isMobile === false && (
                      <button
                        onClick={() => handleClick("")}
                        className={`px-4 py-2 text-xs font-semibold rounded-lg transition-colors border cursor-pointer neighbourbuttonaa ${
                          !value
                            ? "bg-[#a44294] !text-white border-[#a44294]"
                            : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-purple-50 hover:text-purple-700 hover:border-purple-300"
                        }`}
                      >
                        Reset
                      </button>
                    )}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 alphalettermobileee">
                  {letters.map((l) => (
                    <button
                      key={l}
                      onClick={() => {
                        handleClick(l);
                        setShowAlphabet(false);
                      }}
                      className={`w-9 h-9 text-xs font-semibold rounded transition-colors border neighbourbuttonaa cursor-pointer ${
                        value === l
                          ? "bg-[#a44294] !text-white border-[#a44294]"
                          : "bg-gray-50 text-gray-700 border-gray-100 hover:bg-purple-50 hover:border-purple-300 hover:text-purple-700"
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>

              {isMobile && (
                <span
                  onClick={() => setShowAlphabet(false)}
                  className="mobilesearchclosebutton"
                >
                  x
                </span>
              )}
            </section>
          )}
        </div>
      )}
    </>
  );
}
