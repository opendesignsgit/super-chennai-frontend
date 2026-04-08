import React from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";

const FALLBACK = "/images/locationdefult.png";

export default function AreaFilter({ data, onChange }) {
  const navigate = useNavigate();

  console.log("data=locations", data);
  return (
    <div className="mb-10">
      <div className="neighbiurnewcards">
        {data?.map((loc) => {
          const imageUrl = loc?.image?.url
            ? `${API_BASE_URL_API_TEST_DEV}${loc.image.url}`
            : FALLBACK;

          return (
            <div
              key={loc.id}
              onClick={() =>
                navigate(`/neighbourhood/${encodeURIComponent(loc.locality)}`)
              }
              className="neighbourcardnew"
            >
              {/* image */}

              <img src={imageUrl} className="neighimg" alt={loc.locality} />

              {/* content */}
              <div className="carcontentsnew">
                <div className="flex justify-between items-center">
                  <h4 className="text-purple-600 font-bold text-lg uppercase">
                    {loc.locality}
                  </h4>

                 
                </div>

                <h5 className="text-gray-600 text-sm mt-1 pincodestyle">
                  {loc.label},{"  "}{loc.pincode}
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
