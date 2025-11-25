import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../../../config";
import { useRestaurants } from "../../hooks/useRestaurants";

const FALLBACK_IMAGE = "/images/events/events.jpg";

// 🔥 Universal Image Handler
const getImageUrl = (imgObj) => {
  if (!imgObj) return FALLBACK_IMAGE;

  const url = imgObj?.url || imgObj?.image?.url;
  if (!url) return FALLBACK_IMAGE;

  // IF full URL, return directly
  if (url.startsWith("http")) return url;

  // ELSE attach API_BASE_URL
  return `${API_BASE_URL}${url}`;
};

const TestPage = () => {
  const { restaurants, loading } = useRestaurants();

  if (loading)
    return (
      <div className="flex justify-center items-center h-[50vh] text-gray-500 text-lg">
        Loading visit pages...
      </div>
    );

  if (!restaurants.length)
    return (
      <div className="flex justify-center items-center h-[50vh] text-gray-500 text-lg">
        No Visit Pages Found
      </div>
    );

  return (
    <>
      {/* Banner */}
      <div className="accaodomationBannerSection">
        <img src="/images/restaurants-banner.jpg" alt="" />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Visits</h3>
            <div className="breadCrum">
              <Link to="/visit-chennai">Visit </Link> - <a href=""> Visits </a>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch"></div>
      </div>

      {/* List Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl font-bold mb-10 text-gray-800">
          Explore Visit Pages
        </h1>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {restaurants.map((item) => {
            const image =
              getImageUrl(item?.heroImage) ||
              getImageUrl(item?.FeaturedImage) ||
              FALLBACK_IMAGE;

            return (
              <Link
                to={`/visit/${item.slug}`}
                key={item.id}
                className="group rounded-2xl overflow-hidden bg-white shadow transition-all hover:shadow-xl border"
              >
                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <img
                    src={image}
                    alt={item.title}
                    className="w-full h-full object-cover transition group-hover:scale-110 duration-500"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h2 className="text-xl font-semibold text-gray-800 group-hover:text-pink-600 transition">
                    {item.title}
                  </h2>

                  {item?.meta?.description && (
                    <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                      {item.meta.description}
                    </p>
                  )}

                  <button className="mt-4 inline-flex items-center text-pink-600 font-medium group-hover:gap-2 transition-all">
                    View More →
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TestPage;
