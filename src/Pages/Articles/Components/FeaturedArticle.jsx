import { featuredArticle } from "../data/articles";

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

export default FeaturedArticle;
