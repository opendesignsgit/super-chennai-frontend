import { useState, useEffect } from "react";
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

  console.log("page data", data);

  const firstLetter = decodeURIComponent(locationId)?.charAt(0)?.toUpperCase();
  const slugify = (text) => text?.toLowerCase().replace(/\s+/g, "-");

  // const filtered =
  //   data?.filter((item) => {
  //     const matchCategory =
  //       slugify(item?.category?.title) === category?.toLowerCase();

  //     if (!subcategory) return matchCategory;

  //     const matchSubCategory = item?.subCategories?.some(
  //       (sub) => sub?.slug === subcategory,
  //     );

  //     return matchCategory && matchSubCategory;
  //   }) || [];

  const normalize = (text) => text?.toLowerCase().trim().replace(/\s+/g, "-");

  const filtered =
    data?.filter((item) => {
      const matchCategory =
        normalize(item?.category?.title) === normalize(category);

      if (!subcategory) return matchCategory;

      const matchSubCategory = item?.subCategories?.some(
        (sub) => normalize(sub?.slug) === normalize(subcategory),
      );

      return matchCategory && matchSubCategory;
    }) || [];

  const sameLetterLocations = locations?.filter((loc) =>
    loc.locality?.toUpperCase().startsWith(firstLetter),
  );

  console.log("filtered ", filtered);
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

  // const toggleAccordion = (index) => {
  //   setActiveIndex(activeIndex === index ? null : index);
  // };

  if (loading) return <NeighbourhoodListSkeleton />;

  const safeCategory = category?.toLowerCase();
  const safeSubcategory =
    subcategory && subcategory !== "undefined" ? subcategory : safeCategory;

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
            // <a
            //   href={`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${item.slug}`}
            // >
            <a
              href={`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${item.slug}`}
              key={item.id}
              // onClick={() =>
              //   navigate(
              //     `/neighbourhood/${locationId}/${category}/${subcategory}/${item.slug}`,
              //   )
              // }
              onClick={() => {
                navigate(
                  `/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${item.slug}`,
                );
              }}
              className="cursor-pointer detailacrdsss"
            >
              <img
                src={
                  item?.FeaturedImage?.url
                    ? API_BASE_URL_API_TEST_DEV + item.FeaturedImage.url
                    : "https://www.superchennai.com/images/restaurants-banner.jpg"
                }
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.superchennai.com/images/restaurants-banner.jpg";
                }}
                className="w-full h-48 object-cover"
              />

              <div className="p-4 detailsmap">
                <h3 className="titlenamecontent">{item.name}</h3>

                <p className="mt-2">
                  {" "}
                  {item.description?.slice(0, 140) ||
                    "No description available"}
                  ...
                </p>

                <div className="readmorelink">
                  <Link className="">READMORE</Link>
                </div>
              </div>
            </a>
            // </a>
          ))}
        </div>
      </div>
    </>
  );
}
