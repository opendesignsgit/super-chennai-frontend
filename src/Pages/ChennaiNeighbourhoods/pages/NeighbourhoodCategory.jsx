import { useParams } from "react-router-dom";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocations } from "../hooks/useLocations";
import { useState } from "react";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";

const BASE = "https://dev-cms.superchennai.com";

export default function NeighbourhoodCategory() {
  const { locations } = useLocations();
  // const { locationId, category } = useParams();


  const { locationId, category, subcategory } = useParams();




  const navigate = useNavigate();

  const { data, loading } = useNeighbourhood({
    location: locationId,
  });
 
  console.log("hsopital list",data)
  const [openLocationsModal, setOpenLocationsModal] = useState(false);

if (loading) return <NeighbourhoodListSkeleton />;

  
  const firstLetter = decodeURIComponent(locationId)?.charAt(0)?.toUpperCase();


  // const filtered =
  //   data?.filter(
  //     (item) =>
  //       item?.category?.title?.toLowerCase() === category?.toLowerCase(),
  //   ) || [];


    const filtered =
      data?.filter((item) => {
        const matchCategory =
          item?.category?.title?.toLowerCase().replace(/\s+/g, "-") ===
          category?.toLowerCase();

        const matchSubCategory = item?.subCategories?.some(
          (sub) => sub?.slug === subcategory,
        );

        return matchCategory && matchSubCategory;
      }) || [];

    const sameLetterLocations = locations?.filter((loc) =>
      loc.locality?.toUpperCase().startsWith(firstLetter),
    );
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
      <div className="mainlocationdd">
        <div className="flex items-center bg-white rounded-full shadow border overflow-hidden submainlocationdd">
          <div className="flex items-center gap-1 px-4 py-3 mainselectinputss">
            <img
              className="locationsvginput"
              src="https://dev.opendesignsin.com/neighlocation.svg"
              alt=""
            />

            <select
              className="outline-none bg-transparent slectmapoption"
              value={locationId}
              onChange={(e) => navigate(`/neighbourhood/${e.target.value}`)}
            >
              {sameLetterLocations?.map((loc) => (
                <option key={loc.id} value={loc.locality}>
                  {loc.locality}
                </option>
              ))}
            </select>
          </div>

          {/* search input */}
          <input
            type="text"
            placeholder=""
            className="flex-1 px-1 py-3 outline-none "
          />

          {/* search button */}
          <button className="inputmapsearchss">Search</button>

          {/* explore button */}
          <button
            onClick={() => {
              setOpen(true);
              setActiveCategory(null);
            }}
            className="clickheretoexplorelocation"
          >
            Click Here to Explore
          </button>
        </div>
      </div>

      <div className="changethelocation">
        <button onClick={() => setOpenLocationsModal(true)} className="">
          Change the Location
        </button>
      </div>

      <div className="container max-w-7xl mx-auto px-4 mt-15">
        {/* <h1 className="text-3xl font-bold mb-10">
          {category} in {locationId}
        </h1> */}

        <div className="">
          <div class="workIntro">
            <h1>Neighbourhood</h1>
            <p>
              Public transportation in Chennai is managed by various government
              bodies, offering an extensive network that connects all parts of
              the city. Key modes include the Industry.
            </p>
          </div>
        </div>

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
