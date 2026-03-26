import { useParams } from "react-router-dom";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const BASE = "https://dev-cms.superchennai.com";

export default function NeighbourhoodDetail() {
  const { locationId } = useParams();

  const { data, loading } = useNeighbourhood({
    location: locationId,
  });

  const [activeCategory, setActiveCategory] = useState(null);
  const [open, setOpen] = useState(false);

  if (loading) return <div className="p-10">Loading...</div>;

  const location = data?.[0]?.locations;

  const grouped = data?.reduce((acc, item) => {
    const cat = item?.category?.title || "Others";
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});

  const categories = Object.keys(grouped || {});
  const active = activeCategory || categories[0];



  console.log("location dtaa",location)


  //  const [open, setOpen] = useState(false);

   const activeCat = active || categories[0];

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

       <button
        onClick={() => setOpen(true)}
        className="bg-purple-600 text-white px-6 py-3 rounded-full"
      >
        Click to View
      </button>

      {/* MODAL */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center">

          <div className="bg-white w-[95%] max-w-6xl rounded-lg overflow-hidden">

            <div className="grid grid-cols-12">

              {/* LEFT CATEGORY */}
              <div className="col-span-4 bg-purple-600 text-white p-6">

                <h2 className="text-2xl font-bold mb-6">
                  IN T.NAGAR
                </h2>

                <div className="space-y-3">
                  {categories.map((cat) => (
                    <div
                      key={cat}
                      onClick={() => setActive(cat)}
                      className={`cursor-pointer px-4 py-2 rounded-full
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

                {/* close */}
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
                      className="border rounded-full px-4 py-2"
                    >
                      {item.name}
                    </div>
                  ))}

                </div>

                {/* search button */}
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
                active === cat
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
            {grouped?.[active]?.[0] && (
              <div className="relative">
                <img
                  src={
                    grouped[active][0]?.FeaturedImage?.url
                      ? BASE + grouped[active][0].FeaturedImage.url
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
