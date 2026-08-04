import { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import { useLocations } from "../hooks/useLocations";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
import ProperitiesNeighbourhood from "../Components/Properties";

// ########################## ICONS & CONFIG #######################

function StarIcon() {
  return (
    <svg className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function MapPinIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ChevronDown({ className = "w-4 h-4" }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

function EmptyState({ title, message, onReset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] text-center px-4">
      <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-sm">{message}</p>
      <button onClick={onReset} className="bg-[#a44294] text-white px-4 py-2 rounded-lg text-sm font-medium">
        Go Back
      </button>
    </div>
  );
}

export default function NeighbourhoodCategory() {
  const { locations } = useLocations();
  const [sortBy, setSortBy] = useState("highToLow");
  const { locationId, category, subcategory } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useNeighbourhood({ location: locationId });

  const firstLetter = decodeURIComponent(locationId)?.charAt(0)?.toUpperCase();
  const normalize = (text) => text?.toLowerCase().trim().replace(/\s+/g, "-");

  const filtered =
    data?.filter((item) => {
      const matchCategory = normalize(item?.category?.title) === normalize(category);
      if (!subcategory) return matchCategory;
      const matchSubCategory = item?.subCategories?.some(
        (sub) => normalize(sub?.slug) === normalize(subcategory)
      );
      return matchCategory && matchSubCategory;
    }) || [];

  const grouped =
    data?.reduce((acc, item) => {
      const cat = item?.category?.title || "Others";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {}) || {};

  const categoriesList = Object.keys(grouped);

  if (loading) return <NeighbourhoodListSkeleton />;

  const safeCategory = category?.toLowerCase();
  const safeSubcategory = subcategory && subcategory !== "undefined" ? subcategory : safeCategory;

  const sortedAndFiltered = [...filtered].sort((a, b) => {
    const ratingA = parseFloat(a?.googleData?.googleRating) || 0;
    const ratingB = parseFloat(b?.googleData?.googleRating) || 0;
    return sortBy === "highToLow" ? ratingB - ratingA : ratingA - ratingB;
  });

  const locationDetails = filtered[0]?.locations || data?.[0]?.locations;
  if (!locationDetails) {
    return (
      <EmptyState
        title="No Details Found"
        message="We couldn't retrieve any details for this category or location."
        onReset={() => navigate("/neighbourhood")}
      />
    );
  }

  const currentCategoryTitle = filtered[0]?.category?.title || category || "Explore";
  const currentLocality = locationDetails?.locality || "Chennai";

  return (
    <div id="poppinsssFamily">
      <section className="relative min-h-[500px] bg-gray-900 overflow-hidden flex flex-col justify-center">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={filtered[0]?.category?.FeaturedImage?.url ? `${API_BASE_URL_API_TEST_DEV}${filtered[0].category.FeaturedImage.url}` : "https://www.superchennai.com/images/restaurants-banner.jpg"}
            alt="Category Background"
            className="w-full h-full object-cover object-center opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-gray-900/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/60 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 pt-8 pb-10 h-full w-full flex flex-col justify-center">
          <nav className="text-gray-400 neighbourtwoparagraph items-center gap-1 neighbourhoodbrudcrum">
            <div className="flex flex-wrap gap-2 mb-5">
              <Link to="/" className="hover:text-white cursor-pointer transition-colors">Home</Link>
              <span className="text-gray-500 select-none">›</span>
              <Link to="/neighbourhood" className="hover:text-white cursor-pointer transition-colors">Neighbourhood</Link>
              <span className="text-gray-500 select-none">›</span>
              <Link to={`/neighbourhood/${currentLocality.toLowerCase().replace(/\s+/g, "-")}`} className="hover:text-white cursor-pointer transition-colors">
                {currentLocality}
              </Link>
              <span className="text-gray-500 select-none">›</span>
              <span className="text-white font-medium" aria-current="page">
                {currentCategoryTitle}
              </span>
            </div>
          </nav>
          <div>
            <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
              {currentCategoryTitle} in <br /> {currentLocality}
            </h1>
            <p className="text-gray-300 text-sm max-w-2xl mb-7 leading-relaxed neighbourtwoheaidngssparagraph">
              {filtered[0]?.category?.description || `Explore top recommended ${currentCategoryTitle.toLowerCase()} spots and local options around ${currentLocality}.`}
            </p>
            <NeighbourhoodSearchBar data={data} locations={locations} locationId={locationId} />

            {/* DYNAMIC STATS CONTAINER */}
            <div className="flex flex-wrap gap-4 mb-6 mt-10">
              {filtered[0]?.neighborhoodStats && filtered[0].neighborhoodStats.length > 0 ? (
                filtered[0].neighborhoodStats.map((s, i) => (
                  <div key={s.label || i} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2.5 border border-white/5 neighbourtwoparagraph">
                    <span className="neighhsecondicon flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      {s?.icon && typeof s.icon === "object" && s.icon.url ? (
                        <img src={`${API_BASE_URL_API_TEST_DEV}${s.icon.url}`} alt={s.icon.alt || s.label} className="w-full h-full object-contain" />
                      ) : (
                        <img src="/images/neighbourhood-2.0/icons/icon-1-shopping.svg" alt={s.label} className="w-full h-full object-contain" />
                      )}
                    </span>
                    <div>
                      <div className="text-white text-base font-bold leading-tight neighbourtwoparagraph">{s.value}</div>
                      <div className="text-gray-300 text-xs mt-0.5 neighbourtwoparagraph">{s.label}</div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-white/40 text-xs italic">Local neighborhood parameters loading...</div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10">
        {/* BROWSE BY CATEGORY */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 mb-4 neighbourtwosecondheading">Browse by Category</h2>
          <div className="flex flex-wrap gap-2">
            {categoriesList.map((cat) => (
              <Link
                key={cat}
                to={`/neighbourhood/${currentLocality.toLowerCase().replace(/\s+/g, "-")}/${cat.toLowerCase().replace(/\s+/g, "-")}`}
                className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  normalize(category) === normalize(cat)
                    ? "bg-[#a44294] text-white shadow-md shadow-violet-200"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>

        {/* FEATURED PLACES */}
        {filtered.length > 0 && (
          <section>
            <div className="mb-4">
              <h2 className="text-lg font-bold text-gray-900 neighbourtwosecondheading">Featured Places</h2>
              <p className="text-sm text-gray-500 neighbourtwoparagraph">
                Handpicked must-visit spots in {currentLocality}
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 neighbourhoodfirstttt">
              {filtered.slice(0, 1).map((item) => (
                <div
                  key={item.id || item.slug}
                  onClick={() => navigate(`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${item.slug}`)}
                  className="md:col-span-2 relative rounded-xl min-h-[320px] overflow-hidden bg-gradient-to-br from-amber-900 to-stone-800 cursor-pointer group transition-all duration-500 ease-in-out hover:-translate-y-1 hover:shadow-2xl"
                >
                  <img
                    className="w-full h-full absolute inset-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                    src={item?.FeaturedImage?.url ? API_BASE_URL_API_TEST_DEV + item.FeaturedImage.url : "/images/no-image.png"}
                    alt={item.name || ""}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <h3 className="text-2xl text-[#fff] sm:text-3xl font-semibold leading-tight mb-3">{item.name}</h3>
                    <p className="text-gray-300 mb-2 text-sm line-clamp-2 max-w-xl">{item.description || "No description available"}</p>
                    <div className="flex items-center gap-3 text-gray-300 text-sm">
                      <span className="flex items-center gap-1"><StarIcon /><span className="text-white font-semibold">{item.googleData?.googleRating || "N/A"}</span></span>
                      <span className="flex items-center gap-1"><MapPinIcon className="w-3 h-3" />{item.locations?.city || "Chennai"}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="col-span-1 flex flex-col gap-3 neighsecondsssimageee">
                {filtered.slice(1, 3).map((item) => (
                  <div
                    key={item.id || item.name}
                    onClick={() => navigate(`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${item.slug}`)}
                    className="flex-1 relative rounded-xl min-h-[150px] overflow-hidden bg-gradient-to-br cursor-pointer group transition-all duration-300 ease-in-out hover:shadow-lg"
                  >
                    <img
                      className="h-full w-full absolute inset-0 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      src={item?.FeaturedImage?.url ? API_BASE_URL_API_TEST_DEV + item.FeaturedImage.url : "/images/no-image.png"}
                      alt={item.name || ""}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-bold text-sm leading-tight">{item.name}</h3>
                      <p className="text-gray-300 text-xs line-clamp-1 mb-1">{item.description}</p>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="flex items-center gap-0.5"><StarIcon />{item.googleData?.googleRating || "N/A"}</span>
                        <span>·</span>
                        <span>{item.locations?.city}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ALL PLACES CONTAINER */}
        <section>
          <div className="flex flex-wrap items-end justify-between mb-6 mt-15 gap-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900 neighbourtwosecondheading">All {currentCategoryTitle} Places</h2>
              <p className="text-sm text-gray-500 neighbourtwoparagraph">Discover your options cleanly plotted</p>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span className="font-bold text-[#000]">Sort by :</span>
              <div className="relative inline-block border border-gray-200 rounded-lg p-1 bg-white shadow-sm">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="appearance-none bg-transparent pr-8 pl-1 py-1 font-medium text-gray-800 cursor-pointer focus:outline-none"
                >
                  <option value="highToLow">Popular (Rating: High to Low)</option>
                  <option value="lowToHigh">Rating: Low to High</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2 text-gray-800">
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {sortedAndFiltered.map((item) => (
              <div key={item.name} className="group cursor-pointer cardsssneightbourhood deatilpagecardhoverrneigh">
                <Link to={`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${item.slug}`}>
                  <div className="newigheeeimagez w-full h-72 overflow-hidden rounded-xl">
                    <img
                      src={item?.FeaturedImage?.url ? API_BASE_URL_API_TEST_DEV + item.FeaturedImage.url : "https://www.superchennai.com/images/restaurants-banner.jpg"}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://www.superchennai.com/images/restaurants-banner.jpg";
                      }}
                      alt={item.name}
                      className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                  </div>
                  <div className="cardsectiondetailss mt-3">
                    <h3 className="!font-semibold text-gray-900 leading-tight mb-2 text-base">{item.name}</h3>
                    <p className="text-gray-500 mb-2 text-sm line-clamp-2">{item.description || "No description available"}</p>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <span className="flex items-center gap-0.5"><StarIcon /><span className="font-medium text-gray-700">{item?.googleData?.googleRating || "N/A"}</span></span>
                      <span className="flex items-center gap-0.5"><MapPinIcon className="w-4 h-4" />{item?.locations?.city || "Unknown"}</span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* EXPLORE MAP */}
        <section className="mt-15">
          <div className="flex flex-col md:flex-row bg-[#f5f5f5] rounded-xl overflow-hidden">
            <div className="p-8 md:w-[30%] flex flex-col justify-center">
              <h2 className="text-lg font-bold text-gray-900 mb-1 neighbourtwosecondheading">Explore on Map</h2>
              <p className="text-sm text-gray-500 font-medium mb-5 w-[90%]">
                View all localized parameters mapped directly across {currentLocality}
              </p>
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(currentCategoryTitle + " in " + currentLocality + ", Chennai")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#a44294] hover:bg-[#3a0066] text-white px-4 py-2 rounded-lg text-sm font-medium w-fit flex items-center gap-2 shadow-lg transition-colors"
              >
                Open Map
              </a>
            </div>
            <div className="md:w-[70%] h-[350px]">
              <iframe
                className="w-full h-full border-0"
                src={`https://maps.google.com/maps?q=${encodeURIComponent(currentLocality + ", Chennai")}&t=&z=14&ie=UTF8&iwloc=&output=embed`}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        {/* QUICK ACCESS HIGHLIGHTS */}
        {locationDetails?.quickAccess?.length > 0 && (
          <div className="container max-w-7xl mx-auto py-10 pt-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 pt-6">
              {locationDetails.quickAccess.map((qa, i) => (
                <div key={qa.id || i} className="flex items-start gap-3 p-4 bg-white border border-gray-100 rounded-xl shadow-sm">
                  <span className="text-2xl w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {qa?.icon && typeof qa.icon === "object" && qa.icon.url ? (
                      <img src={`${API_BASE_URL_API_TEST_DEV}${qa.icon.url}`} alt={qa.icon.alt || qa.label} className="w-full h-full object-contain" />
                    ) : (
                      <span>{qa.fallbackEmoji || "📍"}</span>
                    )}
                  </span>
                  <div>
                    <div className="!font-semibold text-gray-900 text-sm mb-0.5">{qa.label}</div>
                    <div className="text-xs font-medium text-gray-500 mb-0.5">{qa.name}</div>
                    <div className="text-[11px] text-gray-400 font-normal">{qa.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <ProperitiesNeighbourhood />
      </div>
    </div>
  );
}