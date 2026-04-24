import { useNavigate } from "react-router-dom";
import { useState, useMemo, useRef, useEffect } from "react";
import Search from "../Components/Search";
import Fuse from "fuse.js";
import { useParams } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";

export default function NeighbourhoodSearchBar({
  data = [],
  locations = [],
  locationId,
  onSearch,
  showExplore = true,
}) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [openLocationsModal, setOpenLocationsModal] = useState(false);
  const [open, setOpen] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const { subcategory } = useParams();

  // ####################################################################################################################
  //################## ADVANCE SEARCH ALGORITHMS DONT CHANGE ANYTHING DONT REWRITE WITH AI TOOL #########################
  // ####################################################################################################################

  const currentLocation = decodeURIComponent(locationId)?.toLowerCase();

  const locationFilteredData = data.filter(
    (item) => item?.locations?.locality?.toLowerCase() === currentLocation,
  );

  function extractTextFromLexical(content) {
    if (!content?.root?.children) return "";

    let text = "";

    content.root.children.forEach((node) => {
      if (node.children) {
        node.children.forEach((child) => {
          if (child.text) {
            text += " " + child.text;
          }
        });
      }
    });

    return text.toLowerCase();
  }

  const fuse = useMemo(() => {
    const filtered = data.filter((item) =>
      item?.locations?.locality
        ?.toLowerCase()
        .includes(decodeURIComponent(locationId).toLowerCase()),
    );

    const preparedData = filtered.map((item) => ({
      ...item,
      searchableText: `
      ${item.name || ""}
      ${item.title || ""}
      ${item.category?.title || ""}
      ${extractTextFromLexical(item.content)}
    `,
    }));

    return new Fuse(preparedData, {
      keys: ["searchableText"],
      threshold: 0.4,
      ignoreLocation: true,
    });
  }, [data, locationId]);
  const normalize = (str = "") => str.toLowerCase().replace(/\s+/g, "").trim();

  // const fuse = useMemo(() => {
  //   const preparedData = data.map((item) => ({
  //     ...item,
  //     searchableText: `
  //       ${item.name || ""}
  //       ${item.title || ""}
  //       ${item.category?.title || ""}
  //       ${extractTextFromLexical(item.content)}
  //     `,
  //   }));

  //   return new Fuse(preparedData, {
  //     keys: ["searchableText"],
  //     threshold: 0.4, // 🔥 lower = strict, higher = loose (0.3–0.5 best)
  //     ignoreLocation: true,
  //     minMatchCharLength: 2,
  //   });
  // }, [data]);

  // const handleSearch = () => {
  //   const query = search.toLowerCase().trim();
  //   if (!query) return;

  //   const normalizedQuery = normalize(query);

  //   const fuseResults = fuse.search(query);

  //   // 🔥 fallback manual fuzzy (for extreme cases like "wtrfall")
  //   const manualResults = data.filter((item) => {
  //     const text = normalize(
  //       `${item.name} ${item.title} ${item.category?.title} ${extractTextFromLexical(item.content)}`,
  //     );

  //     return text.includes(normalizedQuery);
  //   });

  //   // ✅ merge + remove duplicates
  //   const finalResults = [
  //     ...fuseResults.map((r) => r.item),
  //     ...manualResults,
  //   ].filter(
  //     (item, index, self) => index === self.findIndex((i) => i.id === item.id),
  //   );

  //   setSearchResults(finalResults);
  //   setOpenSearchModal(true);
  // };

  // ####################################################################################################################
  //################## ADVANCE SEARCH ALGORITHMS DONT CHANGE ANYTHING DONT REWRITE WITH AI TOOL #########################
  // ####################################################################################################################

  const handleSearch = () => {
    const query = search.toLowerCase().trim();
    if (!query) return;

    const fuseResults = fuse.search(query);

    const finalResults = fuseResults.map((r) => r.item);

    console.log("finalResults", finalResults);

    setSearchResults(finalResults);
    setOpenSearchModal(true);
  };

  const location = data?.[0]?.locations;
  const firstLetter = decodeURIComponent(locationId || "")
    ?.charAt(0)
    ?.toUpperCase();
  const sameLetterLocations = locations?.filter((loc) =>
    loc.locality?.toUpperCase().startsWith(firstLetter),
  );
  const grouped = useMemo(() => {
    return (
      data?.reduce((acc, item) => {
        const cat = item?.category?.title || "Others";
        if (!acc[cat]) acc[cat] = [];
        acc[cat].push(item);
        return acc;
      }, {}) || {}
    );
  }, [data]);
  const subCategoriesByCategory = useMemo(() => {
    const result = {};

    data?.forEach((item) => {
      const cat = item?.category?.title || "Others";

      if (!result[cat]) result[cat] = {};

      item?.subCategories?.forEach((sub) => {
        if (sub && sub.id && !result[cat][sub.id]) {
          result[cat][sub.id] = sub;
        }
      });
    });

    return result;
  }, [data]);

  console.log("subcategories", subCategoriesByCategory);

  const categories = Object.keys(grouped);
  const activeCat = activeCategory || categories?.[0];

  const getSubCategorySlug = (item) => {
    if (item?.subCategories?.length > 0) {
      return item.subCategories[0]?.slug || "all";
    }
    return "all";
  };

  const section4Ref = useRef(null);
  const [isTop, setIsTop] = useState(false);

  useEffect(() => {
    const getHeaderHeight = () => {
      const width = window.innerWidth;

      if (width >= 1024) return 130;
      if (width >= 768) return 120;
      return 100;
    };

    const sectionOffsetTop = section4Ref.current.offsetTop;

    const handleScroll = () => {
      const headerHeight = getHeaderHeight();
      const scrollY = window.scrollY;

      if (scrollY + headerHeight >= sectionOffsetTop) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* SEARCH BAR */}

      <div
        ref={section4Ref}
        className={`${isTop ? "stickedfilter" : "nopeee"}`}
      >
        <div className="mainlocationdd">
          <div className="flex items-center bg-white rounded-full shadow border overflow-hidden submainlocationdd">
            <div className="flex items-center gap-1 px-4 py-3 mainselectinputss">
              <img
                className="locationsvginput"
                src="https://dev.opendesignsin.com/neighlocation.svg"
                alt=""
              />

              <select
                className="outline-none bg-transparent slectmapoption"
                value={locationId}
                onChange={(e) => navigate(`/neighbourhood/${e.target.value}`)}
              >
                {sameLetterLocations?.map((loc) => (
                  <option key={loc.id} value={loc.locality}>
                    {loc.locality}
                  </option>
                ))}
              </select>
            </div>

            <input
              type="text"
              placeholder="Search restaurants, hotels, or anything nearby..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-3 py-3 outline-none"
            />

            <button className="inputmapsearchss" onClick={handleSearch}>
              Search
            </button>

            {showExplore && (
              // <button
              //   onClick={() => setOpen(true)}
              //   className="clickheretoexplorelocation"
              // >
              //   Click Here to Explore
              // </button>
              <button
                onClick={() => setOpen(true)}
                className="clickheretoexplorelocation group relative overflow-hidden transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,60,130,0.5)] hover:shadow-xl active:shadow-[0_0_20px_rgba(163,68,147,0.7)] active:scale-[0.97] hover:scale-[1.02]"
              >
                {/* Background shimmer layers */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#8b3c82]/30 via-[#a34493]/20 to-[#8b3c82]/30 opacity-0 group-hover:opacity-100 transition-all duration-700 blur-sm -skew-x-12 animate-shimmer"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 -skew-x-12 animate-shimmer-delayed"></div>

                <span className="relative z-10 font-semibold tracking-wide">
                  Click Here to Explore
                </span>

                {/* Floating particles on hover */}
                <div className="absolute -top-2 -right-2 w-3 h-3 bg-[#8b3c82] rounded-full opacity-0 group-hover:opacity-60 animate-float"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-[#a34493] rounded-full opacity-0 group-hover:opacity-50 animate-float-delayed"></div>
              </button>
            )}
          </div>
        </div>

        {/* CHANGE LOCATION */}
        <div className="changethelocation">
          <button onClick={() => setOpenLocationsModal(true)}>
            Change the Location
          </button>
        </div>
      </div>

      {/* LOCATION MODAL */}
      {/* {openLocationsModal && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
          <div className="bg-white container max-w-5xl mx-auto px-4 relative popupseacrhinpout">
            <button
              onClick={() => setOpenLocationsModal(false)}
              className="absolute top-4 right-4 text-xl popupcloselocation"
            >
              ✕
            </button>

            <div className="workIntro">
              <h1>Neighbourhood</h1>
              <p>
                Public transportation in Chennai is managed by various
                government bodies...
              </p>
            </div>

            <Search
              onSearch={(q) => {
                navigate(`/neighbourhood?search=${encodeURIComponent(q)}`);
                setOpenLocationsModal(false);
              }}
            />
          </div>
        </div>
      )} */}
      {openLocationsModal && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center animate-backdrop-fade">
          <div className="bg-white container max-w-5xl mx-auto px-4 relative popupseacrhinpout animate-modal-pop">
            {/* Animated Close Button */}
            <button
              onClick={() => setOpenLocationsModal(false)}
              className="absolute top-4 right-4 text-xl popupcloselocation group hover:scale-110 active:scale-95 transition-all duration-300 hover:rotate-90 hover:shadow-lg hover:shadow-[#8b3c82]/50"
            >
              <span className="relative z-10">✕</span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#8b3c82]/30 to-[#a34493]/30 rounded-full opacity-0 group-hover:opacity-100 -skew-x-12 -translate-x-full group-hover:translate-x-0 transition-all duration-600 blur-sm"></div>
            </button>

            {/* Animated Header */}
            <div className="workIntro animate-slide-down">
              <h1 className="animate-title-glow">Neighbourhood</h1>
              <p className="animate-fade-in-up">
                Public transportation in Chennai is managed by various
                government bodies...
              </p>
            </div>

            {/* Animated Search */}
            <div className="animate-slide-up">
              <Search
                onSearch={(q) => {
                  navigate(`/neighbourhood?search=${encodeURIComponent(q)}`);
                  setOpenLocationsModal(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        /* Backdrop Animation */
        @keyframes backdrop-fade {
          0% {
            opacity: 0;
            backdrop-filter: blur(0px);
          }
          100% {
            opacity: 1;
            backdrop-filter: blur(12px);
          }
        }

        /* Modal Pop Animation */
        @keyframes modal-pop {
          0% {
            opacity: 0;
            transform: scale(0.8) translateY(20px);
          }
          60% {
            transform: scale(1.02);
          }
          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* Content Animations */
        @keyframes slide-down {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes title-glow {
          0%,
          100% {
            text-shadow: 0 0 10px rgba(139, 60, 130, 0.3);
            transform: scale(1);
          }
          50% {
            text-shadow:
              0 0 20px rgba(163, 68, 147, 0.6),
              0 0 30px rgba(139, 60, 130, 0.4);
            transform: scale(1.02);
          }
        }

        .animate-backdrop-fade {
          animation: backdrop-fade 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            forwards;
        }
        .animate-modal-pop {
          animation: modal-pop 0.5s 0.1s cubic-bezier(0.34, 1.56, 0.64, 1)
            forwards;
        }
        .animate-slide-down {
          animation: slide-down 0.4s 0.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        }
        .animate-slide-up {
          animation: slide-up 0.4s 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.3s 0.35s cubic-bezier(0.25, 0.46, 0.45, 0.94)
            both;
        }
        .animate-title-glow {
          animation: title-glow 2s ease-in-out infinite;
        }
      `}</style>

      {/* EXPLORE MODAL */}

      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
            <motion.div
              className="bg-white w-[95%] max-w-6xl overflow-hidden locationpopupmain"
              layout
              transition={{ layout: { duration: 0.3, ease: "easeInOut" } }}
            >
              <div className="grid grid-cols-12 popupneigbhbourh">
                {/* LEFT */}
                <div className="col-span-4 bg-purple-600 text-white p-6 leftsidepopup">
                  <h2 className="text-2xl font-bold mb-6 locationname">
                    IN <br /> {location?.locality}
                  </h2>

                  <div className="space-y-3 leftsidescrolll">
                    {categories.map((cat) => (
                      <div
                        key={cat}
                        onClick={() => setActiveCategory(cat)}
                        className={`pointerdiv cursor-pointer transition ${
                          activeCat === cat
                            ? "buttonactivated bg-white text-purple-600"
                            : "buttonnonactivated"
                        }`}
                      >
                        {cat}
                      </div>
                    ))}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="col-span-8 p-6 relative rightsidepopup">
                  <button
                    onClick={() => setOpen(false)}
                    className="absolute top-4 right-4 text-xl popupcloselocation"
                  >
                    ✕
                  </button>

                  <div className="popuprightsidecontent">
                    {Object.values(subCategoriesByCategory?.[activeCat] || {})
                      .length === 0 ? (
                      <div className="text-gray-500 text-center mt-10">
                        We couldn’t find anything here. Try exploring other
                        categories.
                      </div>
                    ) : (
                      Object.values(subCategoriesByCategory?.[activeCat])
                        .sort((a, b) => a.title.localeCompare(b.title))
                        .map((sub) => (
                          <div
                            key={sub.id}
                            onClick={() => {
                              navigate(
                                `/neighbourhood/${locationId}/${activeCat
                                  .toLowerCase()
                                  .replace(/\s+/g, "-")}/${sub.slug}`,
                              );
                              setOpen(false);
                            }}
                            className="border butoonsearchbutton cursor-pointer hover:bg-gray-100 transition"
                          >
                            <div className="iconsimagelocation">
                              <img
                                src="https://dev.opendesignsin.com/svg-icon.svg"
                                alt=""
                              />
                              {sub.title}
                            </div>
                          </div>
                        ))
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {openSearchModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center searchpopupdivmain">
          <div className="bg-white w-[95%] max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 headingtop">
              <h2 className="text-lg font-semibold">
                Search Results ({searchResults.length})
              </h2>

              <button
                onClick={() => setOpenSearchModal(false)}
                className="text-xl hover:scale-110 transition"
              >
                ✕
              </button>
            </div>

            {/* BODY */}
            <div className="p-5 max-h-[500px] overflow-y-auto space-y-4 bodycardsection">
              {/* EMPTY */}
              {searchResults.length === 0 ? (
                <div className="text-center py-16">
                  <p className="text-gray-400 text-lg">😕 No results found</p>
                  <p className="text-sm text-gray-500 mt-2">
                    Try different keywords or spelling
                  </p>
                </div>
              ) : (
                searchResults.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => {
                      const subSlug = getSubCategorySlug(item);

                      navigate(
                        `/neighbourhood/${locationId}/${item.category.title
                          .toLowerCase()
                          .replace(/\s+/g, "-")}/${subSlug}/${item.slug}`,
                      );
                      setOpenSearchModal(false);
                    }}
                    className="flex items-center gap-4 p-3 rounded-xl hover:shadow-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 cardlocation"
                  >
                    {/* IMAGE */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100 imagesecriorrss">
                      <img
                        src={
                          item?.FeaturedImage?.url
                            ? `${API_BASE_URL_API_TEST_DEV}/${item.FeaturedImage.url}`
                            : "/images/locationdefult.png"
                        }
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition "
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition">
                        {item.name}
                      </h3>

                      <p className="text-sm  mt-1 locationdescription">
                        {item.category?.title}
                      </p>

                      {/* OPTIONAL SHORT DESC */}
                      {item?.locations?.locality && (
                        <div className="flex gap-0.5 items-center itemslocatioss">
                          <img
                            className="locationimagess"
                            src="/images/location-map-1.svg"
                          />

                          <span className="locationamee">
                            {" "}
                            {item.locations.locality}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* RIGHT ICON */}
                    <div className="text-gray-400 group-hover:text-purple-600 transition">
                      <img
                        className="imagepopupnws"
                        src="/images/location-arrow.svg"
                        alt=""
                      />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(100%) skewX(-12deg);
          }
        }
        @keyframes shimmer-delayed {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(100%) skewX(-12deg);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
        .animate-shimmer-delayed {
          animation: shimmer-delayed 2.5s infinite linear 0.5s;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) scale(1);
            opacity: 0;
          }
          50% {
            transform: translateY(-8px) scale(1.2);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 1.5s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float 1.5s ease-in-out infinite 0.75s;
        }
      `}</style>
    </>
  );
}
