import React from "react";
import { useNavigate } from "react-router-dom";

const FALLBACK = "https://via.placeholder.com/600x400?text=No+Image";

export default function AreaFilter({ data, onChange }) {
  const navigate = useNavigate();

  console.log("data=locations", data);
  return (
    <div className="mb-10">
      <div className="neighbiurnewcards">
        {data?.map((loc) => {
          const imageUrl = loc?.image?.url
            ? `https://dev-cms.superchennai.com${loc.image.url}`
            : FALLBACK;

          return (
            <div
              key={loc.id}
              // onClick={() => navigate(`/ChennaiNeighbourhood/${loc.id}`)}
              onClick={() =>
                navigate(
                  `/ChennaiNeighbourhood/${encodeURIComponent(loc.locality)}`,
                )
              }
              className="neighbourcardnew"
            >
              {/* image */}

              <img src={imageUrl} className="neighimg" alt={loc.locality} />

              {/* content */}
              <div className="carcontentsnew">
                <h4 className="text-purple-600 font-bold text-lg uppercase">
                  {loc.locality}
                </h4>

                <h5 className="text-gray-600 text-sm mt-1 pincodestyle">
                  {loc.label}
                </h5>

                <div className="readmorelink">
                  <a className="">READMORE</a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
