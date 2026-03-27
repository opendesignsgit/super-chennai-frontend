import { useParams } from "react-router-dom";
import { useNeighbourhood } from "../hooks/useNeighbourhood";

const BASE = "https://dev-cms.superchennai.com";

export default function NeighbourhoodItemDetail() {
  const { locationId, category, slug } = useParams();

  const { data, loading } = useNeighbourhood({
    location: locationId,
  });

  if (loading) return <div>Loading...</div>;

  const item = data?.find(
    (i) => i.slug === slug
  );

  if (!item) return <div>Not found</div>;

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* image */}
      <img
        src={
          item?.heroImage?.url
            ? BASE + item.heroImage.url
            : "/placeholder.jpg"
        }
        className="w-full h-[400px] object-cover rounded-lg"
      />

      {/* title */}
      <h1 className="text-3xl font-bold mt-6">
        {item.name}
      </h1>

      {/* category */}
      <p className="text-purple-600 mt-2">
        {item.category?.title}
      </p>

      {/* description */}
      <div className="mt-6 text-gray-600">
        {item.description}
      </div>

      {/* branches */}
      <div className="mt-10">
        <h3 className="text-xl font-semibold mb-4">
          Branches
        </h3>

        {item.branches?.map((b) => (
          <div key={b.id} className="border p-4 rounded mb-3">
            <h4>{b.branchName}</h4>
            <p>{b.area}</p>
            <p>{b.phone}</p>
          </div>
        ))}
      </div>

    </div>
  );
}