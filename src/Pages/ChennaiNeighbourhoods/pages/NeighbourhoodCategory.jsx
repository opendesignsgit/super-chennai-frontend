import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import { useLocations } from "../hooks/useLocations";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";

export default function NeighbourhoodCategory() {
  const { locations } = useLocations();
  const [activeCategory, setActiveCategory] = useState(null);
  const { locationId, category, subcategory } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useNeighbourhood({
    location: locationId,
  });

  if (loading) return <NeighbourhoodListSkeleton />;
  const firstLetter = decodeURIComponent(locationId)?.charAt(0)?.toUpperCase();
  const slugify = (text) => text?.toLowerCase().replace(/\s+/g, "-");

  const filtered =
    data?.filter((item) => {
      const matchCategory =
        slugify(item?.category?.title) === category?.toLowerCase();

      if (!subcategory) return matchCategory;

      const matchSubCategory = item?.subCategories?.some(
        (sub) => sub?.slug === subcategory,
      );

      return matchCategory && matchSubCategory;
    }) || [];

  const sameLetterLocations = locations?.filter((loc) =>
    loc.locality?.toUpperCase().startsWith(firstLetter),
  );

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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

      <div className="container max-w-7xl mx-auto px-4 mt-15">
        <div className="">
          <div class="workIntro">
            <h1>Neighbourhood</h1>
            <p>
              Public transportation in Chennai is managed by various government
              bodies, offering an extensive network that connects all parts of
              the city. Key modes include the Industry.
            </p>
          </div>
        </div>

        <div className="locationmapin">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(
                  `/neighbourhood/${locationId}/${category}/${subcategory}/${item.slug}`,
                )
              }
              className="cursor-pointer detailacrdsss"
            >
              <img
                src={
                  item?.FeaturedImage?.url
                    ? API_BASE_URL_API_TEST_DEV + item.FeaturedImage.url
                    : "/placeholder.jpg"
                }
                className="w-full h-48 object-cover"
              />

              <div className="p-4 detailsmap">
                <h3 className="titlenamecontent">{item.name}</h3>

                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  ad temporibus
                </p>

                <div className="readmorelink">
                  <Link className="">READMORE</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
