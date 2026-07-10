import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import { useLocations } from "../hooks/useLocations";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import NeighbourhoodSkeleton from "../Components/DetailPage/NeighbourhoodSkeleton";
import EmptyState from "../Components/locations/EmptyState";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
import CategoriesSection from "../Components/CategoriesSection";
import ProperitiesNeighbourhood from "../Components/Properties";
import FaqNeighbourhoods from "../Components/FaqNeighbourhoods";
import WhatsNearby from "../Components/WhatsNearby";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";

export default function NeighbourhoodDetail() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);
  const [categoryCounts, setCategoryCounts] = useState({});
  const { locationId } = useParams();

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const { data, loading } = useNeighbourhood({
    location: decodeURIComponent(locationId),
  });

  console.log("locationbased 0-------------------------------------------- data",data)

  const { locations } = useLocations();

  useEffect(() => {
    if (data && typeof data === "object") {
      const counts = Object.entries(data).reduce(
        (acc, [mainCategory, subCategoryObj]) => {
          acc[mainCategory] = subCategoryObj
            ? Object.keys(subCategoryObj).length
            : 0;
          return acc;
        },
        {},
      );

      setCategoryCounts(counts);
    }
  }, [data]);

  if (loading) return <NeighbourhoodSkeleton />;

  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="No Locations Found"
        message="This area currently has no neighbourhood data."
        onReset={() => navigate("/neighbourhood")}
      />
    );
  }

  const location = data?.[0]?.locations;
  if (!location) {
    return (
      <EmptyState
        title="Invalid Location"
        message="We couldn't find details for this location."
        onReset={() => navigate("/neighbourhood")}
      />
    );
  }
  console.log("locationdataaa", locations);

  const grouped =
    data?.reduce((acc, item) => {
      const cat = item?.category?.title || "Others";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {}) || {};

  const categories = Object.keys(grouped);
  const activeCat = activeCategory || categories?.[0];

  if (!categories.length) {
    return (
      <EmptyState
        title="No Categories Available"
        message={`No places found in ${location?.locality}`}
      />
    );
  }

  const OVERVIEW_POINTS = [
    "This is Static Data ",
    "This is Static Data ",
    "This is Static Data ",
    "This is Static Data ",
  ];

  const NEARBY_SCHOOLS = [
    { icon: "🏫", name: "DAV Girls", type: "Senior Secondary", dist: "1.2 km" },
    { icon: "🏫", name: "SBOA School", type: "& Jr. College", dist: "1.5 km" },
    {
      icon: "🏫",
      name: "Vidya Mandir",
      type: "Senior Secondary",
      dist: "1.8 km",
    },
    { icon: "📚", name: "Chettinad Vidyashram", type: "", dist: "1.9 km" },
    {
      icon: "🏫",
      name: "Good Shepherd",
      type: "Matriculation",
      dist: "2.1 km",
    },
  ];

  const QUICK_ACCESS = [
    {
      icon: "🚇",
      label: "Nearest Metro",
      name: "This is Static Data",
      detail: "5 mins walk",
    },
    {
      icon: "🏥",
      label: "Top Hospital",
      name: "This is Static Data",
      detail: "2.4 km",
    },
    {
      icon: "🛍️",
      label: "Shopping",
      name: "This is Static Data",
      detail: "2 km",
    },
    {
      icon: "✈️",
      label: "Airport",
      name: "This is Static Data",
      detail: "30 mins drive",
    },
  ];

  const WHY_CHOOSE = [
    "This is Static Data",
    "This is Static Data",
    "This is Static Data",
    "This is Static Data",
    "This is Static Data",
  ];

  const LIFESTYLE_SCORES = [
    { label: "Connectivity", score: 5 },
    { label: "Education", score: 5 },
    { label: "Healthcare", score: 4.5 },
    { label: "Safety", score: 5 },
    { label: "Shopping", score: 4.5 },
    { label: "Entertainment", score: 4 },
  ];

  function StarRating({ score }) {
    return (
      <div className="flex gap-0.5 mt-2">
        {[1, 2, 3, 4, 5].map((s) => (
          <svg key={s} width="20" height="20" viewBox="0 0 14 14" fill="none">
            <path
              d="M7 1l1.5 3.5L12 5l-2.5 2.5.5 3.5L7 9.5 4 11l.5-3.5L2 5l3.5-.5L7 1z"
              fill={
                s <= Math.floor(score)
                  ? "#a44294"
                  : s - 0.5 === score
                    ? "url(#half)"
                    : "#E5E7EB"
              }
              stroke="none"
            />
            <defs>
              <linearGradient id="half">
                <stop offset="50%" stopColor="#a44294" />
                <stop offset="50%" stopColor="#E5E7EB" />
              </linearGradient>
            </defs>
          </svg>
        ))}
      </div>
    );
  }

  console.log("THISI IS LOCATION DEATIL PAGE ", location);

  const localities = [
    {
      id: 1,
      name: "Anna Nagar",
      distance: "2.3 km away",
      image:
        "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=600&auto=format&fit=crop", // Replace with actual asset
      description:
        "Well-planned residential area with wide streets, parks, and premium lifestyle.",
    },
    {
      id: 2,
      name: "Nungambakkam",
      distance: "3.1 km away",
      image:
        "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=80&w=600&auto=format&fit=crop", // Replace with actual asset
      description:
        "Commercial hub with offices, colleges, cafes and excellent connectivity.",
    },
    {
      id: 3,
      name: "Kodambakkam",
      distance: "2.6 km away",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=600&auto=format&fit=crop", // Replace with actual asset
      description:
        "Popular for residential communities, studios and entertainment hotspots.",
    },
    {
      id: 4,
      name: "Mylapore",
      distance: "4.2 km away",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop", // Replace with actual asset
      description:
        "Cultural and traditional hub with temples, boutiques and a laid-back vibe.",
    },
  ];

  function PrevArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute cursor-pointer neighmainlocationscardleft top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
      >
        <ChevronLeft size={20} color="#a44294" strokeWidth={3} />
      </button>
    );
  }

  function NextArrow({ onClick }) {
    return (
      <button
        onClick={onClick}
        className="absolute cursor-pointer neighmainlocationscardright top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-gray-100 transition"
      >
        <ChevronRight size={20} color="#a44294" strokeWidth={3} />
      </button>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div id="poppinsssFamily">
      <div className="relative min-h-[600px] flex flex-col justify-center pb-10 px-8 overflow-hidden bg-[#0a051e]">
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={
              location?.image?.url
                ? `${API_BASE_URL_API_TEST_DEV}${location.image.url}`
                : "images/no-image.png"
            }
            alt={location?.image?.alt || "Neighbourhood Banner"}
            className="w-full h-full object-cover center"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(10,5,30,0.5) 0%, rgba(10,5,30,0.75) 60%, rgba(10,5,30,0.92) 100%)",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full pb-0">
          <nav className="text-gray-400 neighbourtwoparagraph items-center gap-1 neighbourhoodbrudcrum">
            <div className="flex gap-2 mb-5">
              <span
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <span>›</span>
              <span
                className="hover:text-white cursor-pointer transition-colors"
                onClick={() => navigate("/neighbourhood")}
              >
                Neighbourhood
              </span>
              <span>›</span>
              <span className="text-white font-medium">{location?.label}</span>
            </div>
          </nav>

          <div>
            <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
              {location?.label}
            </h1>
            <p className="text-gray-300 text-sm max-w-2xl sm:max-w-3xl mb-7 leading-relaxed neighbourtwoheaidngssparagraph">
              {location?.about}
            </p>

            <NeighbourhoodSearchBar
              data={data}
              locations={locations}
              locationId={locationId}
            />
          </div>

          <div className="text-white mt-8 pt-4">
            <div className="max-w-7xl mx-auto flex items-center justify-start gap-y-4 gap-x-6 flex-wrap">
              {categories.slice(0, 5).map((s, i) => {
                const totalCount = grouped[s]?.length || 0;

                const getIcon = (name) => {
                  const icons = {
                    Schools: "🏫",
                    Hospitals: "🏥",
                    Shopping: "🛍️",
                    Banks: "🏦",
                    Colleges: "🎓",
                    "Real Estate": "🏢",
                    "Co-working-Space": "💻",
                  };

                  const dynamicIcon = grouped[name]?.[0]?.category?.icon;
                  if (
                    dynamicIcon &&
                    typeof dynamicIcon === "object" &&
                    dynamicIcon.url
                  ) {
                    return (
                      <img
                        src={`${API_BASE_URL_API_TEST_DEV}${dynamicIcon.url}`}
                        className="w-6 h-6 object-contain inline-block"
                        alt=""
                      />
                    );
                  }

                  return icons[name] || "📍";
                };

                return (
                  <div key={s || i} className="flex items-center gap-3">
                    {i > 0 && (
                      <div className="hidden sm:block w-px h-8 bg-white/20 mr-3" />
                    )}

                    <span className="text-2xl flex items-center">
                      {getIcon(s)}
                    </span>
                    <div>
                      <div className="text-[#f9f9f9] text-xs font-medium neighbourtwoparagraph">
                        {s}
                      </div>
                      <div className="text-white text-sm font-bold ml-[3px] neighbourtwoparagraph">
                        {totalCount}+
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <div></div>
      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex gap-10">
          <div className="flex-1 h-[300px] rounded-xl overflow-hidden border border-gray-200 detailsecondneightbourhood">
            <iframe
              title="Location Detail Map Side"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(
                location?.value || "",
              )}&output=embed`}
            />
          </div>

          {/* MOCK DATA ########## */}

          {/* <div className="w-72 flex flex-col justify-center detailsecondneightbourhoodsecond">
            <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
              OVERVIEW
            </h3>

            <p className="text-[#000] leading-relaxed mb-4 neighbourtwoparagraph !text-[16px]">
              This is Static Paragarph Lorem ipsum dolor sit amet, consectetur
              adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim
            </p>
            <ul className="space-y-2.5">
              {OVERVIEW_POINTS.map((pt, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-[#000] !text-[15px]"
                >
                  <span className="mt-0.5 text-[#000] neighbourtwoparagraph">
                    🏙️
                  </span>
                  {pt}
                </li>
              ))}
            </ul>
          </div> */}

          {/* {(location?.overviewDescription ||
            (location?.overviewPoints &&
              location.overviewPoints.length > 0)) && (
            <div className="w-72 flex flex-col justify-center detailsecondneightbourhoodsecond">
              <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                OVERVIEW
              </h3>

              {location?.overviewDescription && (
                <p className="text-[#000] leading-relaxed mb-4 neighbourtwoparagraph !text-[16px]">
                  {location.overviewDescription}
                </p>
              )}

              {location?.overviewPoints?.length > 0 && (
                <ul className="space-y-2.5">
                  {location?.overviewPoints?.map((item) => (
                    <li
                      key={item.id}
                      className="flex items-start gap-2 text-[#000] !text-[15px]"
                    >
                      <span className="mt-0.5 text-[#000] neighbourtwoparagraph">
                        🏙️
                      </span>
                      {item.point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )} */}

          {(location?.overviewDescription ||
            location?.overviewPoints?.length > 0) && (
            <div className="w-72 flex flex-col justify-center detailsecondneightbourhoodsecond">
              <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                OVERVIEW
              </h3>

              <p className="text-[#000] leading-relaxed mb-4 neighbourtwoparagraph !text-[16px]">
                {location?.overviewDescription ||
                  "Discover everything this vibrant neighborhood has to offer, from its bustling streets to its peaceful residential zones."}
              </p>

              <ul className="space-y-2.5">
                {location?.overviewPoints &&
                location.overviewPoints.length > 0 ? (
                  location.overviewPoints.map((item, i) => (
                    <li
                      key={item.id || i}
                      className="flex items-start gap-2 text-[#000] !text-[15px]"
                    >
                      <span className="flex-shrink-0 mt-0.5 w-5 h-5 flex items-center justify-center">
                        {item?.icon &&
                        typeof item.icon === "object" &&
                        item.icon.url ? (
                          <img
                            src={`${API_BASE_URL_API_TEST_DEV}${item.icon.url}`}
                            alt={item.icon.alt || "icon"}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <span className="text-[#000] neighbourtwoparagraph">
                            🏙️
                          </span>
                        )}
                      </span>

                      <span className="leading-tight">{item.point}</span>
                    </li>
                  ))
                ) : (
                  <li className="text-gray-400 text-sm italic">
                    No overview highlights available.
                  </li>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-4 mobilesection accorddionmobileview">
        {categories.map((cat, idx) => (
          <div
            key={cat}
            className={`rounded-lg overflow-hidden boderrrrr ${
              openIndex === idx ? "boderrrrraddedcolor" : ""
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer fontxonatjdjsdd"
              onClick={() => toggleAccordion(idx)}
            >
              <span className="font-medium fontsizeaccordion">{cat}</span>
              <span
                className={`transition-transform duration-300 arrowfontsup ${
                  openIndex === idx ? "rotate-45" : "rotate-0"
                }`}
              >
                +
              </span>
            </div>

            <div
              className={`transition-all duration-500 ease-in-out overflow-hidden cardssss ${
                openIndex === idx ? "max-h-[500px] p-4" : "max-h-0 p-0"
              }`}
            >
              {grouped[cat]?.[0]?.FeaturedImage?.url && (
                <div className="space-y-3">
                  <img
                    src={
                      API_BASE_URL_API_TEST_DEV +
                      grouped[cat][0].FeaturedImage.url
                    }
                    alt={grouped[cat][0]?.name}
                    className="w-full h-40 object-cover rounded-md"
                  />
                  <div className="flex justify-center buttonsecc">
                    <button
                      onClick={() =>
                        navigate(`/neighbourhood/${locationId}/${cat}`)
                      }
                      className="w-[100px] bg-[#995098] text-white py-1 rounded-[50px]"
                    >
                      Click Here
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="container max-w-7xl mx-auto px-4 py-10 pb-[0]">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
            EXPLORE NEARBY ESSENTIALS
          </h2>
          <p className="text-gray-500  neighbourtwoparagraph">
            Everything you need, right around the corner.
          </p>
        </div>
        <CategoriesSection
          locationId={locationId}
          data={data}
          location={location}
        />
      </div>
      {location?.quickAccess?.length > 0 && (
        <div className="container max-w-7xl mx-auto px-4 py-10 pt-2">
          <div className="flex gap-6 neeightshshshshshs pt-6">
            {location?.quickAccess && location.quickAccess.length > 0 ? (
              location.quickAccess.map((qa, i) => (
                <div
                  key={qa.id || i}
                  className="flex items-center gap-3 flex-1 borderrrrrrighttt"
                >
                  <span className="text-2xl w-8 h-8 flex items-center justify-center flex-shrink-0">
                    {qa?.icon && typeof qa.icon === "object" && qa.icon.url ? (
                      <img
                        src={`${API_BASE_URL_API_TEST_DEV}${qa.icon.url}`}
                        alt={qa.icon.alt || qa.label}
                        className="w-full h-full object-contain"
                      />
                    ) : (
                      <span>{qa.fallbackEmoji || "📍"}</span>
                    )}
                  </span>
                  <div>
                    <div className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      {qa.label}
                    </div>
                    <div className="!text-sm !font-semibold text-gray-400 mb-1 neighbourtwoparagraph ">
                      {qa.name}
                    </div>
                    <div className="text-xs text-gray-500 !font-semibold ">
                      {qa.detail}
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="text-gray-400 text-sm italic py-4">
                No quick access elements defined.
              </div>
            )}
          </div>
        </div>
      )}
      {/* 2. DYNAMIC WHY CHOOSE & LIFESTYLE SCORES */}
      {(location?.whyChoose?.length > 0 ||
        location?.lifestyleScores?.length > 0) && (
        <div className="container max-w-7xl mx-auto px-8 pb-10">
          <div className="flex gap-8 items-start">
            <div className="sneighflex113">
              <div className="flex-1 neighflex111">
                <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                  WHY CHOOSE {location?.label} ?
                </h3>
                <ul className="space-y-3">
                  {location?.whyChoose && location.whyChoose.length > 0 ? (
                    location.whyChoose.map((item, i) => (
                      <li
                        key={item.id || i}
                        className="flex items-start gap-2 text-[#000] !text-[15px] "
                      >
                        <span className="text-purple-600 mt-0.5">✅</span>
                        {item.reason}
                      </li>
                    ))
                  ) : (
                    <li className="text-gray-400 text-sm italic">
                      Highlights coming soon.
                    </li>
                  )}
                </ul>
              </div>
              <div className="neighflex112">
                <img
                  src={
                    location?.image?.url
                      ? `${API_BASE_URL_API_TEST_DEV}${location.image.url}`
                      : "/images/no-image.png"
                  }
                  alt={
                    location?.image?.alt || location?.label || "Location image"
                  }
                />
              </div>
            </div>

            <div className="flex-1 neighflex113">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                  LIFESTYLE SCORE
                </h3>
                {/* <button className="text-[#a44294] font-medium hover:underline">
                View Details
              </button> */}
              </div>
              <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                Rated based on neighborhood core living convenience factors
              </p>
              <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                {location?.lifestyleScores &&
                location.lifestyleScores.length > 0 ? (
                  location.lifestyleScores.map((ls, i) => (
                    <div className="sectionsssss" key={ls.id || i}>
                      <div className="flex items-center gap-1.5 mb-0.5">
                        <span className="text-sm text-[#000]">{ls.label}</span>
                      </div>
                      <StarRating score={Number(ls.score) || 0} />
                    </div>
                  ))
                ) : (
                  <div className="text-gray-400 text-sm italic col-span-3">
                    No scores compiled yet.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Nearby-Locations */}

      <section className="bg-slate-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
        <div className="container max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-8 gap-4">
            <div>
              <span className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Nearby Localities
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-1 neighbourtwosecondheading">
                Explore Neighbourhoods Around T. Nagar
              </h2>
              <p className="text-gray-500 mb-1 bodyneighfontsss text-[15px]">
                Discover vibrant neighbourhoods close to T. Nagar. Each has its
                own charm, amenities and lifestyle.
              </p>
            </div>

            <a href="/neighbourhood">
              <button className="group cursor-pointer pointer-events-auto flex items-center gap-2 bg-[#a44294] text-white font-semibold text-sm px-4 py-2 rounded-lg transition-all duration-300 hover:scale-101">
                View all Localities
                <span className="transition-transform duration-300 group-hover:translate-x-2">
                  →
                </span>
              </button>
            </a>
          </div>

          {/* Responsive Grid Section */}

          <Slider {...settings} className="neighmainlocationscard">
            {locations
              .filter((item) => item.locality !== locationId)
              .map((item) => (
                <div
                  key={item.locality}
                  className="bg-white rounded-2xl border border-slate-100 p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full "
                >
                  {/* Image Container with Badge */}
                  <div className="relative aspect-[4/2.5] rounded-[5px] overflow-hidden mb-4">
                    <img
                      src={`${API_BASE_URL_API_TEST_DEV}${item.image.url}`}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-white/100 backdrop-blur-xs px-2.5 py-1 rounded-full flex items-center shadow-xs">
                      {/* <svg
                        className="w-3.5 h-3.5 text-purple-700 mr-1"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                      <span className="text-[11px] font-medium text-[#000]">
                        2.3 km away
                      </span> */}
                    </div>
                  </div>

                  {/* Card Details */}
                  <div className="flex flex-col flex-grow">
                    <h3 className="!text-lg font-bold text-gray-900 mb-1 neighbourtwosecondheading">
                      {item.locality}
                    </h3>
                    <p className="text-gray-500 mb-5 bodyneighfontsss text-[15px]">
                      {item.about?.length > 150
                        ? `${item.about.slice(0, 100)}...`
                        : item.about || ""}
                    </p>

                    <a href={`/neighbourhood/${item.locality}`}>
                      <button className="mt-auto w-full inline-flex items-center justify-center cursor-pointer pointer-events-auto gap-2 bg-white text-[#a44294] border border-[#a44294] font-semibold text-sm px-4 py-2 rounded-lg hover:bg-[#a44294] hover:text-white transition-colors duration-200 ease-in-out whitespace-nowrap">
                        View Neighbourhood{" "}
                        <span className="ml-1.5 text-sm">→</span>
                      </button>
                    </a>
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </section>

      <FaqNeighbourhoods faqDataProps={location?.faqSection} />

      <WhatsNearby data={data} />
      <div className="pt-6">
        <ProperitiesNeighbourhood />
      </div>
    </div>
  );
}
