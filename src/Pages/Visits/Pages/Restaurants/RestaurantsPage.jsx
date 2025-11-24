import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import RestaurantList from "../../Components/Restaurants/RestaurantList";
import { useRestaurants } from "../../hooks/useRestaurants";
import { LexicalRenderer } from "../../../GlobalComponents/LexicalRenderer";
import NotFound from "../../../GlobalComponents/NotFound";
const RestaurantsPage = () => {
  const { restaurants, loading } = useRestaurants();
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (loading)
    return (
      <div className="flex flex-col items-center justify-center py-20 m-10">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 text-sm tracking-wide">Loading ...</p>
      </div>
    );

  if (!restaurants || restaurants.length === 0)
    return (
      <NotFound
        title="Restaurant Not Found"
        message="The restaurant you are looking for might have been removed, unavailable, or the link is incorrect. Please explore other restaurants or return to the home page."
        redirect="/chennai-restaurants"
        redirectLabel="Browse Restaurants"
      />
    );

  const restaurant = restaurants[0];
  const blocks =
    restaurant?.content?.root?.children?.filter(
      (item) =>
        item.type === "block" && item.fields?.blockType === "restaurants"
    ) || [];

  // ---------------------
  // SEO META
  // ---------------------

  const meta = restaurant?.meta || {};
  const metaTitle = meta?.title || restaurant?.title || "";
  const metaDescription = meta?.description || "";
  const slug = restaurant?.slug || "";

  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`${slug}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`${slug}`} />
        <meta name="twitter:title" content={metaTitle} />
        <meta name="twitter:description" content={metaDescription} />
      </Helmet>

      <div className="accaodomationBannerSection">
        <img src="/images/restaurants-banner.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> Restaurants in Chennai</h3>
            <div className="breadCrum">
              <Link to="/visit-chennai">Visit </Link> -{" "}
              <a href=""> Restaurants in Chennai </a>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch"></div>
      </div>

      {/*----------------- Intro Section ----------------*/}
      <div className="visitIntroParaSection detailIntro">
        <div className="container max-w-7xl mx-auto px-4 !mb-0">
          <div
            className={`CostOflivingBackground ${
              scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
            }`}
            ref={bgTextRef}
          >
            <p>
              Restaurants &nbsp; in Chennai &nbsp; Restaurants &nbsp; in Chennai
            </p>
          </div>
          <div className="workIntro">
            <LexicalRenderer content={restaurant?.content} />
          </div>
        </div>
      </div>
      <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
        <h3 className="text-3xl font-bold mb-10 text-center">
          Notable Restaurants in Chennai
        </h3>
        {blocks.map((block, index) => (
          <div key={index} className="mb-12">
            {block.fields?.title && (
              <h2 className="text-3xl font-bold mb-4">{block.fields.title}</h2>
            )}
            {block.fields?.points?.length > 0 ? (
              <RestaurantList points={block.fields.points} />
            ) : (
              <p className="text-gray-500">No restaurant points available.</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default RestaurantsPage;
