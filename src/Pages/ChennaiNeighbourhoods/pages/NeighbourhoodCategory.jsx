import { useParams } from "react-router-dom";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BASE = "https://dev-cms.superchennai.com";

export default function NeighbourhoodCategory() {
  const { locationId, category } = useParams();
  const navigate = useNavigate();
  const { data, loading } = useNeighbourhood({
    location: locationId,
  });

  if (loading) return <div>Loading...</div>;

  const filtered =
    data?.filter(
      (item) =>
        item?.category?.title?.toLowerCase() === category?.toLowerCase(),
    ) || [];

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

      <div className="max-w-7xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-6">
          {category} in {locationId}
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(
                  `/neighbourhood/${locationId}/${category}/${item.slug}`,
                )
              }
              className="cursor-pointer"
            >
              <img
                src={
                  item?.FeaturedImage?.url
                    ? BASE + item.FeaturedImage.url
                    : "/placeholder.jpg"
                }
                className="w-full h-48 object-cover"
              />

              <div className="p-4">
                <h3 className="font-semibold">{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
