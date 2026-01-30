import { useState } from "react";
import { Link } from "react-router-dom";
import { featuredArticle } from "./data/articles";
import { articles } from "./data/articles";


const AdBox = ({ image }) => (
  <div className="sticky top-4">
    <img src={image} className="rounded-md mb-4" />
    <button className="bg-pink-600 text-white w-full py-2 rounded">
      Learn More
    </button>
  </div>
);


const FeaturedArticle = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <div>
        <p className="text-pink-600 font-semibold text-sm mb-2">
          {featuredArticle.category}
        </p>
        <h1 className="text-3xl font-bold mb-3">
          {featuredArticle.title}
        </h1>
        <p className="text-gray-600 mb-4">
          {featuredArticle.description}
        </p>
        <p className="text-sm text-gray-500">
          {featuredArticle.author} · {featuredArticle.views} · {featuredArticle.time}
        </p>
      </div>

      <img
        src={featuredArticle.image}
        alt=""
        className="rounded-lg w-full h-[320px] object-cover"
      />
    </div>
  );
};


const ArticleList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
      {articles.map((item) => (
        <div key={item.id}>
          <img
            src={item.image}
            className="rounded-md h-40 w-full object-cover mb-3"
          />
          <p className="text-pink-600 text-sm font-semibold mb-1">
            {item.category}
          </p>
          <h3 className="font-semibold mb-1">{item.title}</h3>
          <p className="text-xs text-gray-500">
            {item.author} · {item.views} · {item.time}
          </p>
          <button className="text-pink-600 text-sm mt-2">
            Read More →
          </button>
        </div>
      ))}
    </div>
  );
};


const MoreStories = () => (
  <div className="mt-12">
    <h2 className="text-center text-xl font-semibold text-pink-600 mb-6">
      More Stories – Check It Out
    </h2>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((item) => (
        <div key={item.id} className="flex gap-4">
          <img
            src={item.image}
            className="w-36 h-24 rounded object-cover"
          />
          <div>
            <p className="text-sm font-semibold">{item.title}</p>
            <p className="text-xs text-gray-500">{item.views}</p>
            <p className="text-pink-600 text-sm mt-1">Read More →</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);


function BottomAdBox() {
  const [show, setShow] = useState(true);

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
        
        <div className="flex items-center gap-4">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
            alt="Ad"
            className="w-20 h-14 object-cover rounded"
          />
          <div>
            <p className="font-semibold text-sm">
              Improve Your Skills Today
            </p>
            <p className="text-xs text-gray-500">
              Join our online course now
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button className="bg-pink-600 text-white text-sm px-4 py-2 rounded">
            Get Started
          </button>

          <button
            onClick={() => setShow(false)}
            className="text-gray-400 hover:text-black"
          >
          </button>
        </div>

      </div>
    </div>
  );
}


function AllArticleList() {
  const showLeftAd = true;
  const showRightAd = true;

  const mainColSpan =
    showLeftAd && showRightAd
      ? "lg:col-span-8"
      : showLeftAd || showRightAd
        ? "lg:col-span-10"
        : "lg:col-span-12";

  return (
    <>
      {/* Banner */}
      <div className="accaodomationBannerSection relative w-full h-[280px] overflow-hidden">
        <div>
          <img src="/images/banner-blog.jpg" alt="Cost of Living Banner" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Blog</h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="/blog">Blog</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
          {showLeftAd && (
            <div className="lg:col-span-2 hidden lg:block">
              <AdBox image="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9" />
            </div>
          )}

          <div className={mainColSpan}>
            <FeaturedArticle />
            <ArticleList />
            <MoreStories />
          </div>

          {showRightAd && (
            <div className="lg:col-span-2 hidden lg:block">
              <AdBox image="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4" />
            </div>
          )}
        </div>
      </div>

      <BottomAdBox />
    </>
  );
}

export default AllArticleList;
