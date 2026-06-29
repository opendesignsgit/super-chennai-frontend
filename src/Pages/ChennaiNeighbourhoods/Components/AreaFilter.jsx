import React from "react";
import { useNavigate } from "react-router-dom";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";

const FALLBACK = "/images/locationdefult.png";

export default function AreaFilter({ data, onChange }) {
  const navigate = useNavigate();

  console.log("data=locations", data);
  return (
    <div className="mb-10">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 neighbiurnewcards">
        {data?.map((loc) => {
          const imageUrl = loc?.image?.url
            ? `${API_BASE_URL_API_TEST_DEV}${loc.image.url}`
            : FALLBACK;

          return (
            <>
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow group">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src={imageUrl}
                    alt={loc.locality}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  {/* {n.badge && ( */}
                  <span
                    className={`absolute top-2 left-2 text-white !text-[10px] neighbourtwoparagraph font-bold px-2 py-0.5 rounded
                       red
                       
                       `}
                  >
                    {loc.locality}
                  </span>
                  {/* )} */}
                </div>

                <div className="p-4 cardssspadddingss">
                  <div className="flex items-center gap-1 mb-1">
                    <span className="text-purple-600 text-sm neighebbbbbbbsss">
                      <img
                        src="/images/icons/rose-location-output-neighbourhood.svg"
                        alt=""
                      />
                    </span>
                    <h3 className="!font-bold text-[#000]  neighbourtwoheaidngssparagraph">
                      {" "}
                      {loc.locality}
                    </h3>
                  </div>

                  {loc.about ? (
                    <p className="text-xs text-[#000] leading-relaxed mb-3 neighbourtwoparagraph">
                      {loc.about.slice(0, 80)}...
                    </p>
                  ) : (
                    <p className="text-xs text-[#000] leading-relaxed mb-3 neighbourtwoparagraph">
                      No Description
                    </p>
                  )}

                  <div className="flex items-center gap-3 mb-3 text-xs text-gray-500 flex-wrap">
                    <span className="flex items-center gap-1">
                      🏫{" "}
                      <div>
                        Schools
                        <strong className="text-[#000]">
                          <br />
                          {/* {n.schools} */}
                          Static +
                        </strong>
                      </div>
                    </span>
                    <span className="flex items-center gap-1">
                      🏥{" "}
                      <div>
                        Hospitals
                        <strong className="text-[#000]">
                          <br />
                          {/* {n.hospitals} */}
                          Static +
                        </strong>
                      </div>
                    </span>
                    <span className="flex items-center gap-1">
                      🚇{" "}
                      <div>
                        Metro
                        <strong className="text-[#000]">
                          <br />
                          {/* {n.metro} */}
                          Static +
                        </strong>
                      </div>
                    </span>
                  </div>
                  <div className="flex justify-center mt-3 border-t border-[#d1d5dc] py-3">
                    <a
                      href={`/neighbourhood/${encodeURIComponent(loc.locality)}`}
                      className="text-xs !font-semibold text-[#a44294] hover:text-purple-900 transition-colors neighbourtwoparagraph"
                    >
                      Explore Area →
                    </a>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
