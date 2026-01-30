
import { articles } from "../data/articles";

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

export default MoreStories;
