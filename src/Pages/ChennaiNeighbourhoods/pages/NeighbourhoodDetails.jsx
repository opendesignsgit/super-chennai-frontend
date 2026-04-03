import { useParams } from "react-router-dom";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BASE = "https://dev-cms.superchennai.com";
import EmptyState from "../Components/locations/EmptyState";
import { useLocations } from "../hooks/useLocations";
import Search from "../Components/Search";

export default function NeighbourhoodDetail() {
  const navigate = useNavigate();
  const { locationId } = useParams();
  const { data, loading } = useNeighbourhood({
    location: decodeURIComponent(locationId),
  });

  const firstLetter = decodeURIComponent(locationId)?.charAt(0)?.toUpperCase();

  const { locations } = useLocations();

  const sameLetterLocations = locations?.filter((loc) =>
    loc.locality?.toUpperCase().startsWith(firstLetter),
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

          {/* search input */}
          <input
            type="text"
            placeholder=""
            className="flex-1 px-1 py-3 outline-none "
          />

          {/* search button */}
          <button className="inputmapsearchss">Search</button>

          {/* explore button */}
          <button
            onClick={() => {
              setOpen(true);
              setActiveCategory(null);
            }}
            className="clickheretoexplorelocation"
          >
            Click Here to Explore
          </button>
        </div>
      </div>

      <div className="changethelocation">
        <button onClick={() => setOpenLocationsModal(true)} className="">
          Change the Location
        </button>
      </div>

      <div className="">
        <section className="mt-10 bg-white visitIntroParaSection">
          <div className="container max-w-7xl mx-auto px-4 !mb-0">
            <div className="">
              <div class="workIntro">
                <h1>{location.label}</h1>
                <p>{location.about}</p>
              </div>
              <div className="w-full overflow-hidden shadow locationiframe">
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
          <div className="bg-white container max-w-5xl mx-auto px-4 !mb-0 relative popupseacrhinpout" >
            {/* close */}
            <button
              onClick={() => setOpenLocationsModal(false)}
              className="absolute top-4 right-4 text-xl popupcloselocation"
            >
              ✕
            </button>

            <div class="workIntro">
              <h1>Neighbourhood</h1>
              <p>
                Public transportation in Chennai is managed by various
                government bodies, offering an extensive network that connects
                all parts of the city. Key modes include the Industry.
              </p>
            </div>

            <Search
              onSearch={(q) => {
                updateFilter("q", q);
                updateFilter("alpha", "");
              }}
            />
          </div>
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-[9999] bg-black/50 flex items-center justify-center">
          <div className="bg-white w-[95%] max-w-6xl overflow-hidden locationpopupmain">
            <div className="grid grid-cols-12 popupneigbhbourh">
              {/* LEFT CATEGORY */}
              <div className="col-span-4 bg-purple-600 text-white p-6 leftsidepopup">
                <h2 className="text-2xl font-bold mb-6 locationname">
                  IN {location?.locality}
                </h2>

                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`pointerdiv cursor-pointer transition
                ${
                  activeCat === cat
                    ? "buttonactivated bg-white text-purple-600"
                    : "buttonnonactivated "
                }`}
                    >
                      {cat}
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT SUBCATEGORY */}
              <div className="col-span-8 p-6 relative rightsidepopup">
                {/* CLOSE */}

                <button
                  onClick={() => setOpen(false)}
                  className="absolute top-4 right-4 text-xl popupcloselocation"
                >
                  ✕
                </button>

                <div className="popuprightsidecontent">
                  {grouped?.[activeCat]?.map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        navigate(`/neighbourhood/${locationId}/${activeCat}`);
                        setOpen(false);
                      }}
                      className="border butoonsearchbutton"
                    >
                      <div className="iconsimagelocation">
                        <img
                          className=""
                          src="https://dev.opendesignsin.com/svg-icon.svg"
                          alt=""
                        />
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>

                {/* SEARCH BUTTON */}
                {/* <div className="mt-8 text-right locationseacrgpopuo">
                  <button className="text-white">Search</button>
                </div> */}
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

      <div className="container max-w-7xl mx-auto px-4 py-10 hoverlocationsection">
        <div className="workIntro">
          <div className="text-center mb-10">
            <h3 className="">Purpose to Visit {location?.locality}</h3>

            <p className="mt-3">
              Explore the best places available in {location?.locality}
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam,
              quia. Vero eligendi dolore recusandae non sapiente, laudantium
              corporis provident maxime, molestias magnam, asperiores quasi
              deleniti repudiandae? Commodi ipsum quisquam a eaque ab, odio in
              odit molestias totam qui aut aspernatur eum et quas culpa
              perferendis sequi, nemo fugiat. Aliquid, repellat?
            </p>
          </div>
        </div>

        <div className="relative space-y-6 locationmainsection">
          {categories.map((cat, idx) => {
            // 1. Dynamic threshold: Half of the total length
            const totalItems = categories.length;
            const threshold = Math.floor(totalItems / 2);

            let topValue = "0px";

            // 2. Logic: If current index is more than half
            if (idx >= threshold) {
              // Index mela poga poga, 100px gap-la image-ah mela thallum
              // Eg: threshold 5 na, 6th item (idx 5) ku calculation start aagum
              const offset = (idx - threshold + 1) * 89;
              topValue = `-${offset}px`;
            }

            return (
              <div
                key={cat}
                className="relative group cursor-pointer locationlilst"
                onMouseEnter={() => setActiveCategory(cat)}
                onClick={() =>
                  navigate(
                    `/services/${cat.toLowerCase().replace(/\s+/g, "-")}`,
                  )
                }
              >
                {/* Left category name */}
                <div
                  className={`${
                    activeCat === cat ? "locationactived" : "notlocationactived"
                  }`}
                >
                  {cat}
                </div>

                {/* Right image for hovered category */}
                {activeCat === cat && grouped[cat]?.[0]?.FeaturedImage?.url && (
                  <div
                    className="absolute left-full ml-4 z-10 imagelocationsec transition-all duration-300"
                    style={{ top: topValue }}
                  >
                    <img
                      src={BASE + grouped[cat][0].FeaturedImage.url}
                      alt={grouped[cat][0].name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                    <div className="absolute inset-0 bg-purple-600/10 rounded-lg"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
