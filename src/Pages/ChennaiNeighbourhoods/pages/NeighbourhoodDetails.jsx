import { useParams } from "react-router-dom";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BASE = "https://dev-cms.superchennai.com";
import EmptyState from "../Components/locations/EmptyState";
import { useLocations } from "../hooks/useLocations";


export default function NeighbourhoodDetail() {

  const navigate = useNavigate();
  const { locationId } = useParams();
  const { data, loading } = useNeighbourhood({
    location: decodeURIComponent(locationId),
  });



const firstLetter = decodeURIComponent(locationId)
  ?.charAt(0)
  ?.toUpperCase();


  const { locations } = useLocations();

const sameLetterLocations = locations?.filter((loc) =>
  loc.locality?.toUpperCase().startsWith(firstLetter)
);

  console.log("data page", data);
  const [activeCategory, setActiveCategory] = useState(null);
  const [open, setOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const [openLocations, setOpenLocations] = useState(false);
  const [openLocationsModal, setOpenLocationsModal] = useState(false);

  if (loading) return <div className="p-10">Loading...</div>;
  const location = data?.[0]?.locations;
  const grouped =
    data?.reduce((acc, item) => {
      const cat = item?.category?.title || "Others";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {}) || {};

  const categories = Object.keys(grouped);
  const activeCat = activeCategory || categories?.[0];

  const filteredItems = grouped?.[activeCat] || [];


  if (loading) {
    return <div className="p-10">Loading...</div>;
  }

  if (!data || data.length === 0) {
    return (
      <EmptyState
        title="No Locations Found"
        message="This area currently has no neighbourhood data."
        onReset={() => navigate("/neighbourhood")}
      />
    );
  }

  if (!location) {
    return (
      <EmptyState
        title="Invalid Location"
        message="We couldn't find details for this location."
        onReset={() => navigate("/neighbourhood")}
      />
    );
  }

  if (!categories.length) {
    return (
      <EmptyState
        title="No Categories Available"
        message={`No places found in ${location?.locality}`}
      />
    );
  }




  return (
    <>
      <div className="accaodomationBannerSection">
        <img src="/images/restaurants-banner.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Neighbourhood</h3>
            <div className="breadCrum">
              <Link to="/visit-chennai">Live </Link> -{" "}
              <a href=""> Neighbourhood </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center bg-white rounded-full shadow border overflow-hidden w-full max-w-4xl">
        <div className="flex items-center gap-2 px-4 py-3 border-r">
          <span>📍</span>

          <select
            className="outline-none bg-transparent"
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

        {/* search input */}
        <input
          type="text"
          placeholder=""
          className="flex-1 px-4 py-3 outline-none"
        />

        {/* search button */}
        <button className="bg-purple-600 text-white px-6 py-3">Search</button>

        {/* explore button */}
        <button
          onClick={() => {
            setOpen(true);
            setActiveCategory(null);
          }}
          className="bg-purple-500 text-white px-6 py-3 rounded-r-full"
        >
          Click Here to Explore
        </button>
      </div>

      <button
        onClick={() => setOpenLocationsModal(true)}
        className="bg-purple-600 text-white px-6 py-3 rounded-full"
      >
        Locations
      </button>

      <div className="">
        <section className="mt-10 bg-white visitIntroParaSection">
          <div className="container max-w-7xl mx-auto px-4 !mb-0">
            <div className="">
              <div class="workIntro">
                <h1>{location.label}</h1>
                <p>{location.about}</p>
              </div>
              <div className="w-full h-[350px] rounded-lg overflow-hidden shadow">
                <iframe
                  src={`https://www.google.com/maps?q=${encodeURIComponent(
                    location?.value,
                  )}&output=embed`}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {openLocations && (
        <div className="bg-white shadow rounded-lg mt-4 p-4">
          {sameLetterLocations?.map((loc) => (
            <div
              key={loc.id}
              onClick={() => {
                navigate(`/neighbourhood/${loc.locality}`);
                setOpenLocations(false);
              }}
              className="cursor-pointer py-2 border-b hover:text-purple-600"
            >
              {loc.locality}
            </div>
          ))}
        </div>
      )}

      {openLocationsModal && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
          <div className="bg-white w-[95%] max-w-3xl rounded-lg p-6 relative">
            {/* close */}
            <button
              onClick={() => setOpenLocationsModal(false)}
              className="absolute top-4 right-4 text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4">Choose Location</h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-h-[400px] overflow-auto">
              {locations?.map((loc) => (
                <div
                  key={loc.id}
                  onClick={() => {
                    navigate(`/neighbourhood/${loc.locality}`);
                    setOpenLocationsModal(false);
                  }}
                  className="border rounded-full px-4 py-2 cursor-pointer hover:bg-purple-600 hover:text-white text-center"
                >
                  {loc.locality}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
          <div className="bg-white w-[95%] max-w-6xl rounded-lg overflow-hidden">
            <div className="grid grid-cols-12">
              {/* LEFT CATEGORY */}
              <div className="col-span-4 bg-purple-600 text-white p-6">
                <h2 className="text-2xl font-bold mb-6">
                  IN {location?.locality}
                </h2>

                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`cursor-pointer px-4 py-2 rounded-full transition
                ${
                  activeCat === cat
                    ? "bg-white text-purple-600"
                    : "hover:bg-purple-500"
                }`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SUBCATEGORY */}
              <div className="col-span-8 p-6 relative">
                {/* CLOSE */}
                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-xl"
                >
                  ✕
                </button>

                <div className="grid grid-cols-2 gap-4">
                  {grouped?.[activeCat]?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        navigate(`/neighbourhood/${locationId}/${activeCat}`);
                        setOpen(false);
                      }}
                      className="border rounded-full px-4 py-2 cursor-pointer hover:bg-purple-600 hover:text-white"
                    >
                      {item.name}
                    </div>
                  ))}
                </div>

                {/* SEARCH BUTTON */}
                <div className="mt-8 text-right">
                  <button className="bg-purple-600 text-white px-8 py-3 rounded-full">
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow rounded-lg overflow-hidden"
          >
            <img
              src={
                item?.FeaturedImage?.url
                  ? BASE + item.FeaturedImage.url
                  : "/placeholder.jpg"
              }
              className="w-full h-48 object-cover"
            />

            <div className="p-4">
              <h3 className="font-semibold text-lg">{item.name}</h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.category?.title}
              </p>
            </div>
          </div>
        ))}
      </div> */}

      <div className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold uppercase text-purple-600">
            Purpose to Visit {location?.locality}
          </h2>

          <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
            Explore the best places available in {location?.locality}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* LEFT CATEGORY */}
          <div className="space-y-6">
            {categories.map((cat) => (
              <div
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`cursor-pointer text-2xl md:text-3xl font-medium 
              transition-all duration-200
              ${
                activeCat === cat
                  ? "text-purple-600 border-b-2 border-purple-600 pb-2"
                  : "text-gray-800 hover:text-purple-500"
              }`}
              >
                {cat}
              </div>
            ))}
          </div>

          {/* RIGHT IMAGE / CARD */}
          <div>
            {grouped?.[activeCat]?.[0] && (
              <div className="relative">
                <img
                  src={
                    grouped[activeCat][0]?.FeaturedImage?.url
                      ? BASE + grouped[activeCat][0].FeaturedImage.url
                      : "/placeholder.jpg"
                  }
                  className="w-full h-[420px] object-cover rounded-lg shadow-lg"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-purple-600/10 rounded-lg"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
