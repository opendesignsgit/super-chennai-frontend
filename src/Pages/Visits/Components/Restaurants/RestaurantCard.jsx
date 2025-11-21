import React, { useEffect, useRef, useState } from "react";
import { formatLocation } from "../../Utils/formatLocation";
import { getImageUrl } from "../../Utils/getImageUrl";

const RestaurantCard = ({ item }) => {
  const images = item?.restaurantImages || [];
  const validImages = images
    .map((img) => getImageUrl(img?.image))
    .filter(Boolean);

  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (validImages.length <= 1) return;

    intervalRef.current = setInterval(() => {
      setIndex((prev) => (prev + 1) % validImages.length);
    }, 3000);

    return () => clearInterval(intervalRef.current);
  }, [validImages.length]);

  return (
    <>


    
      <div className="card shadow bg-white">
        {/* Auto Carousel */}

        {validImages.length > 0 && (
          <div className="relative w-full h-48 overflow-hidden rounded-xl">
            <div
              className="flex transition-transform duration-700"
              style={{
                width: `${validImages.length * 100}%`,
                transform: `translateX(-${index * (100 / validImages.length)}%)`,
              }}
            >
              {validImages.map((url, i) => (
                <img
                  key={i}
                  src={url}
                  alt={item.name}
                  className="w-full h-48 object-cover flex-shrink-0"
                  style={{ width: `${100 / validImages.length}%` }}
                />
              ))}
            </div>
          </div>
        )}

        {/* .card h3 */}

        <h3 className="text-lg font-semibold capitalize mt-3">{item.name}</h3>

        {/* Description */}
        {item.description && (
          <p className="text-sm text-gray-600 mt-2">{item.description}</p>
        )}

        {item.subDescription && (
          <p className="text-sm text-gray-500 mt-1">{item.subDescription}</p>
        )}

        {/* Locations */}
        {item.locations?.length > 0 ? (
          <p
            className="text-sm mt-2 font-medium"
            dangerouslySetInnerHTML={{
              __html: ` ${formatLocation(item.locations)}`,
            }}
          />
        ) : (
          <p className="text-sm mt-2 text-gray-500">No locations</p>
        )}
      </div>
    </>
  );
};

export default RestaurantCard;
