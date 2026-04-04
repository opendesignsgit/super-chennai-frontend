import { useNavigate } from "react-router-dom";
import { useState, useMemo } from "react";
import Search from "../Components/Search";
import Fuse from "fuse.js";
import { useParams } from "react-router-dom";

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


  console.log("subcategories",subCategoriesByCategory)

  const categories = Object.keys(grouped);
  const activeCat = activeCategory || categories?.[0];

  const getSubCategorySlug = (item) => {
    if (item?.subCategories?.length > 0) {
      return item.subCategories[0]?.slug || "all";
    }
    return "all";
  };

  return (
    <>
      {/* SEARCH BAR */}
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
            <button
              onClick={() => setOpen(true)}
              className="clickheretoexplorelocation"
            >
              Click Here to Explore
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

      {/* LOCATION MODAL */}
      {openLocationsModal && (
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
      )}

      {/* EXPLORE MODAL */}
      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
          <div className="bg-white w-[95%] max-w-6xl overflow-hidden locationpopupmain">
            <div className="grid grid-cols-12 popupneigbhbourh">
              {/* LEFT */}
              <div className="col-span-4 bg-purple-600 text-white p-6 leftsidepopup">
                <h2 className="text-2xl font-bold mb-6 locationname">
                  IN {location?.locality}
                </h2>

                <div className="space-y-3">
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
          </div>
        </div>
      )}

      {openSearchModal && (
        <div className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-sm flex items-center justify-center">
          <div className="bg-white w-[95%] max-w-4xl rounded-2xl shadow-2xl relative overflow-hidden">
            {/* HEADER */}
            <div className="flex items-center justify-between px-6 py-4 border-b bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
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
            <div className="p-5 max-h-[500px] overflow-y-auto space-y-4">
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
                    className="flex items-center gap-4 p-3 rounded-xl border hover:shadow-lg hover:bg-gray-50 cursor-pointer transition-all duration-200 group"
                  >
                    {/* IMAGE */}
                    <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-gray-100">
                      <img
                        src={
                          item?.FeaturedImage?.url
                            ? `https://dev-cms.superchennai.com${item.FeaturedImage.url}`
                            : "/images/placeholder.jpg"
                        }
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition"
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-800 group-hover:text-purple-600 transition">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.category?.title}
                      </p>

                      {/* OPTIONAL SHORT DESC */}
                      {item?.locations?.locality && (
                        <p className="text-xs text-gray-400 mt-1">
                          📍 {item.locations.locality}
                        </p>
                      )}
                    </div>

                    {/* RIGHT ICON */}
                    <div className="text-gray-400 group-hover:text-purple-600 transition">
                      →
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
