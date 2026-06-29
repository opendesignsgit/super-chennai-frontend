import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import { useLocations } from "../hooks/useLocations";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import NeighbourhoodSkeleton from "../Components/DetailPage/NeighbourhoodSkeleton";
import EmptyState from "../Components/locations/EmptyState";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
// import SchoolSlider from "../../ChennaiNeighbourhoodNew/SchoolSlider";
import SchoolSlider from "../Components/SchoolSlider";
import ProperitiesNeighbourhood from "../Components/Properties";

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

  const { locations } = useLocations();

  useEffect(() => {
    // Check panrom: data null-ah illama irukanum, athu oru object-ah irukanum
    if (data && typeof data === "object") {
      // Object.entries use panni primary key ("Schools") matrum athoda inner object-ah edukkurom
      const counts = Object.entries(data).reduce(
        (acc, [mainCategory, subCategoryObj]) => {
          // Oruவேளை inner object dummy-ah illama irundha athoda length (count) edukkom
          acc[mainCategory] = subCategoryObj
            ? Object.keys(subCategoryObj).length
            : 0;
          return acc;
        },
        {},
      );

      // State-la save panrom
      setCategoryCounts(counts);
    }
  }, [data]);

  // --- Ippo ellam dynamic safe-returns Hooks-ku APRAM dhaan varuthu ---

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

  console.log("thispagedata", location);

  return (
    <div id="poppinsssFamily">
      {/* <div
        className="relative h-[600px] flex flex-col justify-center pb-10 px-8"
        style={{
          background:
            "linear-gradient(to bottom, rgba(10,5,30,0.5) 0%, rgba(10,5,30,0.75) 60%, rgba(10,5,30,0.92) 100%), url('https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=1200&q=80') center/cover no-repeat",
        }}
      >
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full pb-0 ">
          <nav className="text-gray-400 neighbourtwoparagraph items-center gap-1 neighbourhoodbrudcrum">
            <div className="flex gap-2 mb-5">
              <span
                className="hover:text-white cursor-pointer"
                onClick={() => navigate("/")}
              >
                Home
              </span>
              <span>›</span>
              <span
                className="hover:text-white cursor-pointer"
                onClick={() => navigate("/neighbourhood")}
              >
                Neighbourhood
              </span>
              <span>›</span>
              <span className="hover:text-white cursor-pointer text-white">
                {location?.label}
              </span>
            </div>
          </nav>
          <div className="relative z-10">
            <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
              {location?.label}
            </h1>
            <p className="text-gray-300 text-sm max-w-lg mb-7 neighbourtwoheaidngssparagraph">
              {location?.about?.slice(0, 120)}...
            </p>
            <NeighbourhoodSearchBar
              data={data}
              locations={locations}
              locationId={locationId}
            />
          </div>

          <div className="text-white mt-6">
            <div className="max-w-7xl mx-auto flex items-center justify-start gap-3 py-4 flex-wrap">
              {categories.map((s, i) => {
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
                  return icons[name] || "📍";
                };

                return (
                  <div key={s || i} className="flex items-center gap-3">
                    {i > 0 && <div className="w-px h-8 bg-white/20 mr-3" />}
                    <span className="text-xl">{getIcon(s)}</span>
                    <div>
                      <div className="text-[#f9f9f9] neighbourtwoparagraph">
                        {s}
                      </div>
                      <div
                        className="text-[#fff] neighbourtwoparagraph"
                        style={{ marginLeft: "3px" }}
                      >
                        {totalCount}+
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div> */}

      <div className="relative min-h-[600px] flex flex-col justify-center pb-10 px-8 overflow-hidden bg-[#0a051e]">
        {/* CSS Background-ku badhula direct <img> tag */}
        <div className="absolute inset-0 w-full h-full pointer-events-none">
          <img
            src={`${API_BASE_URL_API_TEST_DEV}${location.image.url}`}
            alt="Neighbourhood Banner"
            className="w-full h-full object-cover center"
          />
          {/* Image mela transparent Gradient-ai absolute filter-ah apply panniyullom */}
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

          {/* --- COUNTS HEADER ROW --- */}
          <div className="text-white mt-8  pt-4">
            <div className="max-w-7xl mx-auto flex items-center justify-start gap-y-4 gap-x-6 flex-wrap">
              {categories.map((s, i) => {
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
                  return icons[name] || "📍";
                };

                return (
                  <div key={s || i} className="flex items-center gap-3">
                    {/* Divider-ai mobile lines-il thavirthu desktop screen-il mattum kaata sm:block use seiyapadugirathu */}
                    {i > 0 && (
                      <div className="hidden sm:block w-px h-8 bg-white/20 mr-3" />
                    )}

                    <span className="text-2xl">{getIcon(s)}</span>
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

      {/* <NeighbourhoodSearchBar
        data={data}
        locations={locations}
        locationId={locationId}
      /> */}

      <div>
        {/* <section className="mt-10 bg-white visitIntroParaSection margincontrl">
          <div className="container max-w-7xl mx-auto px-4 !mb-0">
            <div>
              <div className="workIntro">
                <h1>{location?.label}</h1>
                <p>{location?.about}</p>
              </div>
              <div className="w-full overflow-hidden shadow locationiframe">
                <iframe
                  title="Neighbourhood Map Main"
                  src={`https://maps.google.com/maps?q=${encodeURIComponent(
                    location?.value || "",
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section> */}
      </div>

      <div className="max-w-7xl mx-auto px-8 py-10">
        <div className="flex gap-10">
          <div className="flex-1 rounded-xl overflow-hidden border border-gray-200 detailsecondneightbourhood">
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

          <div className="w-72 flex flex-col justify-center detailsecondneightbourhoodsecond">
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
          </div>
        </div>
      </div>

      {/* <div className="container max-w-7xl mx-auto px-4 py-10 hoverlocationsection">
          <div className="workIntro">
            <div className="text-center mb-10">
              <h3>Purpose to Visit {location?.locality}</h3>
              <p className="mt-3">
                Explore everything {location?.locality} has to offer — from
                vibrant food streets and shopping areas to peaceful hangout spots
                and everyday essentials.
              </p>
            </div>
          </div>

          <div className="relative space-y-6 locationmainsection desktopsection">
            {categories.map((cat, idx) => {
              const totalItems = categories.length;
              const threshold = Math.floor(totalItems / 2);
              let topValue = "0px";

              if (idx >= threshold) {
                const offset = (idx - threshold + 1) * 89;
                topValue = `-${offset}px`;
              }

              return (
                <div
                  key={cat}
                  className="relative group locationlilst"
                  onMouseEnter={() => setActiveCategory(cat)}
                >
                  <div
                    className={`${
                      activeCat === cat ? "locationactived" : "notlocationactived"
                    }`}
                  >
                    <Link to={`/neighbourhood/${locationId}/${activeCat}`}>
                      {cat}
                    </Link>
                  </div>

                  {activeCat === cat && grouped[cat]?.[0]?.FeaturedImage?.url && (
                    <div
                      className="absolute left-full ml-4 z-10 imagelocationsec transition-all duration-300"
                      style={{ top: topValue }}
                    >
                      <div className="imageeeeeee">
                        <img
                          src={
                            grouped?.[cat]?.[0]?.FeaturedImage?.url
                              ? API_BASE_URL_API_TEST_DEV +
                                grouped[cat][0].FeaturedImage.url
                              : "/images/locationdefult.png"
                          }
                          alt={grouped[cat][0]?.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-purple-600/10 rounded-lg"></div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div> */}

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
        <SchoolSlider locationId={locationId} data={data} />
      </div>

      <div className="container max-w-7xl mx-auto px-4 py-10 pt-2">
        <div className="flex gap-6 neeightshshshshshs pt-6">
          {QUICK_ACCESS.map((qa, i) => (
            <div
              key={i}
              className="flex items-center gap-3 flex-1 borderrrrrrighttt"
            >
              <span className="text-2xl">{qa.icon}</span>
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
          ))}
        </div>
      </div>

      {/* WHY CHOOSE + LIFESTYLE SCORE */}
      <div className="container max-w-7xl mx-auto px-8 pb-10">
        <div className="flex gap-8 items-start">
          {/* Why choose */}

          <div className="sneighflex113">
            <div className="flex-1 neighflex111">
              <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                WHY CHOOSE {location?.label} ?
              </h3>
              <ul className="space-y-3">
                {WHY_CHOOSE.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2 text-[#000] !text-[15px] "
                  >
                    <span className="text-purple-600 mt-0.5">✅</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="neighflex112">
              <img
                className="rounded-[10px]"
                src={`https://demo.superchennai.com/${location.image.url}`}
                alt={location.image.alt}
              />
            </div>
          </div>

          {/* Image */}

          {/* Lifestyle Score */}
          <div className="flex-1 neighflex113">
            <div className="flex items-center justify-between mb-1">
              <h3 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                LIFESTYLE SCORE
              </h3>
              <button className="text-[#a44294] font-medium hover:underline">
                View Details
              </button>
            </div>
            <p className="mb-4  text-[#000]  neighbourtwoparagraph">
              This is Static Data Rated based on key living factors
            </p>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
              {LIFESTYLE_SCORES.map((ls, i) => (
                <div className="sectionsssss" key={i}>
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm text-[#000]">{ls.label}</span>
                  </div>
                  <StarRating score={ls.score} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

   <ProperitiesNeighbourhood/>
    </div>
  );
}
