import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import RestaurantList from "../../Components/Restaurants/RestaurantList";
import { useRestaurants } from "../../hooks/useRestaurants";
import { LexicalRenderer } from "../../../GlobalComponents/LexicalRenderer";

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
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-10 h-10 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>
        <p className="mt-4 text-gray-600 text-sm tracking-wide">
          Loading restaurants...
        </p>
      </div>
    );

  if (!restaurants || restaurants.length === 0)
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center">
        <img
          src="/images/empty-state.png"
          alt="No data"
          className="w-40 h-40 opacity-80 mb-6"
        />

        <h3 className="text-xl font-semibold text-gray-700">
          No Restaurants Found
        </h3>

        <p className="text-gray-500 text-sm mt-2 max-w-sm">
          We couldn’t find any restaurant details right now. Please try again
          later.
        </p>

        <Link
          to="/"
          className="mt-6 text-sm px-5 py-2 rounded-full bg-black text-white hover:bg-gray-900 transition"
        >
          Go Home
        </Link>
      </div>
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
  const paragraphBlock =
    restaurant?.content?.root?.children?.find((c) => c.type === "paragraph");
  const pageDescription = paragraphBlock?.children?.[0]?.text || "";


  return (
    <>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={`/visit/${slug}`} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={`/visit/${slug}`} />
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
            {/* <h1>Chennai Restaurants</h1> */}

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
