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

           <div className="locationmapin">
          {filtered.map((item) => (
            <div
              key={item.id}
              onClick={() =>
                navigate(
                  `/neighbourhood/${locationId}/${category}/${item.slug}`,
                )
              }
              className="cursor-pointer detailacrdsss"
            >
              <img
                src={
                  item?.FeaturedImage?.url
                    ? BASE + item.FeaturedImage.url
                    : "/placeholder.jpg"
                }
                className="w-full h-48 object-cover"
              />

              <div className="p-4 detailsmap">
                <h3 className="titlenamecontent">{item.name}</h3>

                <p className="mt-2">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                  ad temporibus
                </p>

                <div className="readmorelink">
                  <Link className="">READMORE</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
