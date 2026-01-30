import { articles } from "../data/articles";

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

export default ArticleList;
