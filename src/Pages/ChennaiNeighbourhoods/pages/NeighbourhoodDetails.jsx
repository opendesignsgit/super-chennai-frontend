import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import { useLocations } from "../hooks/useLocations";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import NeighbourhoodSkeleton from "../Components/DetailPage/NeighbourhoodSkeleton";
import EmptyState from "../Components/locations/EmptyState";
import { API_BASE_URL } from "../../../../config";

export default function NeighbourhoodDetail() {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState(null);
  const { locationId } = useParams();
  const { data, loading } = useNeighbourhood({
    location: decodeURIComponent(locationId),
  });
  const { locations } = useLocations();
  if (loading) return <NeighbourhoodSkeleton />;
  const location = data?.[0]?.locations;
  const subCategoriesByCategory = {};
  data?.forEach((item) => {
    const cat = item?.category?.title || "Others";
    if (!subCategoriesByCategory[cat]) {
      subCategoriesByCategory[cat] = {};
    }
    item?.subCategories?.forEach((sub) => {
      if (sub && sub.id && !subCategoriesByCategory[cat][sub.id]) {
        subCategoriesByCategory[cat][sub.id] = sub;
      }
    });
  });

  const grouped =
    data?.reduce((acc, item) => {
      const cat = item?.category?.title || "Others";
      if (!acc[cat]) acc[cat] = [];
      acc[cat].push(item);
      return acc;
    }, {}) || {};

  const categories = Object.keys(grouped);
  const activeCat = activeCategory || categories?.[0];
  
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

      <NeighbourhoodSearchBar
        data={data}
        locations={locations}
        locationId={locationId}
      />

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

      <div className="container max-w-7xl mx-auto px-4 py-10 hoverlocationsection">
        <div className="workIntro">
          <div className="text-center mb-10">
            <h3 className="">Purpose to Visit {location?.locality}</h3>

            <p className="mt-3">
              Explore everything {location?.locality} has to offer — from
              vibrant food streets and shopping areas to peaceful hangout spots
              and everyday essentials. Find the best places that make{" "}
              {location?.locality} a unique and lively part of Chennai.
            </p>
          </div>
        </div>

        <div className="relative space-y-6 locationmainsection">
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
                className="relative group cursor-pointer locationlilst"
                onMouseEnter={() => setActiveCategory(cat)}
                onClick={() =>
                  navigate(`/neighbourhood/${locationId}/${activeCat}`)
                }
              >
                <div
                  className={`${
                    activeCat === cat ? "locationactived" : "notlocationactived"
                  }`}
                >
                  {cat}
                </div>

                {activeCat === cat && grouped[cat]?.[0]?.FeaturedImage?.url && (
                  <div
                    className="absolute left-full ml-4 z-10 imagelocationsec transition-all duration-300"
                    style={{ top: topValue }}
                  >
                    <img
                      src={API_BASE_URL + grouped[cat][0].FeaturedImage.url}
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
