import { API_BASE_URL } from "../../../../../config";
import { formatPrice } from "../../utils/formatPrice";
import { formatLabel } from "../../utils/formatLabel";
import { Link } from "react-router-dom";
import defaultImage from "../../../../../public/propertyDefault.png";

const getImageUrl = (img) => {
  if (!img?.url) return defaultImage;
  if (img.url.startsWith("http")) return img.url;
  return `${API_BASE_URL}${img.url}`;
};

const MAX_BADGES = 2;

const MobilePropertyCard = ({ property }) => {
  if (!property) return null;

  const heroImage = getImageUrl(property.heroImage);
  const title = property.title;

  const priceRange =
    property.minPrice && property.maxPrice
      ? `₹${formatPrice(property.minPrice)} - ₹${formatPrice(property.maxPrice)}`
      : null;

  const pricePerSqft = property.pricePerSqft
    ? `₹${property.pricePerSqft.toLocaleString()}/sqft`
    : null;

  const bhkInfo =
    property.bhk?.length > 0
      ? property.bhk.map((b) => b.label).join(", ")
      : property.bedrooms
        ? `${property.bedrooms} BHK`
        : null;

  const location = property.location
    ? `${property.location.locality || ""}${
        property.location.locality && property.location.city ? ", " : ""
      }${property.location.city || ""}`
    : null;

  const description =
    property?.content?.root?.children?.[0]?.children?.[0]?.text ||
    property?.description ||
    null;

  const typeBadges = Array.isArray(property.propertyType)
    ? property.propertyType
        .slice(0, MAX_BADGES)
        .map((item) => formatLabel(item.value))
    : [];

  const moreTypeCount = Array.isArray(property.propertyType)
    ? property.propertyType.length - MAX_BADGES
    : 0;
  const propertyLink = `/properties/${property.slug || property.id}`;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full border border-gray-200 ">
      {/* IMAGE SECTION */}
      <div className="relative">
        <img src={heroImage} alt={title} className="w-full h-56 object-cover" />

        {/* TOP BADGES */}
        <div className="absolute top-2 left-2 flex gap-2">
          {property.society?.possessionStatus && (
            <span className="bg-black/60 text-white text-xs px-2 py-1 rounded-md">
              {formatLabel(property.society.possessionStatus)}
            </span>
          )}
          {/* Example: New Booking, Ready to Move, etc */}
          {property.readyToMove && (
            <span className="bg-green-600 text-white text-xs px-2 py-1 rounded-md">
              Ready To Move
            </span>
          )}
        </div>

        {/* IMAGE COUNT BADGE */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {property.images?.length ? `1/${property.images.length}` : `1/1`}
        </div>

        {/* DOTS (Static) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white/50"></span>
          <span className="w-2 h-2 rounded-full bg-white/50"></span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="flex gap-[10px] ">
          {/* TITLE */}
          <h2 className="text-base font-semibold line-clamp-1">{title}</h2>
        </div>
        {/* PRICE PER SQFT */}
        {pricePerSqft && (
          <p className="text-xs text-gray-500">{pricePerSqft}</p>
        )}

        <div className="flex gap-[10px]">
          {/* LEFT COLUMN — BHK + PRICE (50%) */}
          <div className="w-1/2">
            {(bhkInfo || priceRange) && (
              <div className="flex justify-between items-center mt-1">
                {bhkInfo && <p className="text-sm text-gray-700">{bhkInfo}</p>}

                {priceRange && (
                  <p className="text-base font-bold text-red-600">
                    {priceRange}
                  </p>
                )}
              </div>
            )}
          </div>

          {/* RIGHT COLUMN — PROPERTY TYPES (50%) */}
          <div className="w-1/2">
            <div className="flex gap-1 flex-wrap mt-2 justify-end">
              {typeBadges.map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700"
                >
                  {t}
                </span>
              ))}

              {moreTypeCount > 0 && (
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full">
                  +{moreTypeCount} more
                </span>
              )}
            </div>
          </div>
        </div>

        {/* LOCATION */}
        {location && <p className="text-xs text-gray-600 mt-2">{location}</p>}

        {/* DESCRIPTION */}
        {description && (
          <p className="text-xs text-gray-500 line-clamp-1 mt-2">
            {description}
          </p>
        )}

        <div className="propertyViewButtonMobile mt-2 flex space-x-2 flex justify-between gap-3 mt-4">
          <Link
            to={
              property.officialView
                ? property.society?.externalUrl || propertyLink
                : propertyLink
            }
            target={property.officialView}
            rel={property.officialView ? "noopener noreferrer" : undefined}
          >
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              View
            </button>
          </Link>

          <button
            type="button"
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
            onClick={() => setIsContactModalOpen(true)}
          >
            Contact
          </button>
        </div>

       
      </div>
    </div>
  );
};

export default MobilePropertyCard;

// import { API_BASE_URL } from "../../../../../config";
// import { formatPrice } from "../../utils/formatPrice";
// import { formatLabel } from "../../utils/formatLabel";
// import { Link } from "react-router-dom";
// import defaultImage from "../../../../../public/propertyDefault.png";

// const getImageUrl = (img) => {
//   if (!img?.url) return defaultImage;
//   if (img.url.startsWith("http")) return img.url;
//   return `${API_BASE_URL}${img.url}`;
// };
// const MAX_BADGES = 3;

// const MobilePropertyCard = ({ property }) => {
//   if (!property) return null;
//   const heroImage = getImageUrl(property.heroImage);
//   const title = property.title;
//   const price = property.price ? `₹${formatPrice(property.price)}` : null;
//   const pricePerSqft = property.pricePerSqft
//     ? `${property.pricePerSqft.toLocaleString()} ₹/sqft`
//     : null;
//   const bhkInfo =
//     property.bhk?.length > 0
//       ? property.bhk.map((b) => b.label).join(", ")
//       : property.bedrooms
//         ? `${property.bedrooms} BHK`
//         : null;
//   const location = property.location
//     ? `${property.location.locality || ""}${property.location.locality && property.location.city ? ", " : ""}${property.location.city || ""}`
//     : null;

//   const transactionType = property.transactionType
//     ? formatLabel(property.transactionType)
//     : null;
//   const description =
//     property?.content?.root?.children?.[0]?.children?.[0]?.text ||
//     property?.description ||
//     null;
//   const areaInfo =
//     property.area &&
//     Object.values(property.area).some((v) => v) &&
//     `${property.area.maxSqft || ""}${property.area.maxSqft && property.area.minSqft ? " • " : ""}${property.area.minSqft || ""} sqft`;

//   const typeBadges = Array.isArray(property.propertyType)
//     ? property.propertyType
//         .slice(0, MAX_BADGES)
//         .map((item) => formatLabel(item.value))
//     : property.propertyType?.value
//       ? [formatLabel(property.propertyType.value)]
//       : [];
//   const moreTypeCount = Array.isArray(property.propertyType)
//     ? property.propertyType.length - MAX_BADGES
//     : 0;
//   const amenities = [];
//   if (property.buildingAmenities?.playArea) amenities.push("Play Area");
//   if (
//     property.buildingAmenities?.liftAvailable ||
//     property.buildingAmenities?.elevator
//   )
//     amenities.push("Lift");
//   if (property.security) amenities.push("Security");
//   if (property.urgentSale) amenities.push("Urgent Sale");
//   if (property.featured) amenities.push("Featured");

//   return (
//     <Link
//       to={`/properties/${property.slug || property.id}`}
//       className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition duration-200"
//     >
//       <div className="relative">
//         {(property.featured || property.urgentSale || transactionType) && (
//           <div className="absolute top-2 left-2 flex gap-1 z-10 flex-wrap">
//             {property.featured && (
//               <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
//                 Featured
//               </span>
//             )}
//             {property.urgentSale && (
//               <span className="bg-red-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
//                 Urgent Sale
//               </span>
//             )}
//             {transactionType && (
//               <span className="bg-yellow-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
//                 {transactionType}
//               </span>
//             )}
//           </div>
//         )}
//         <img
//           src={heroImage}
//           alt={title || "Property Image"}
//           className="w-full h-60 object-cover rounded-t-xl"
//         />
//       </div>

//       <div className="flex flex-col md:flex-row gap-4">
//         <div className=" propertyDetailsMobile">
//           {title && <h4 className="text-lg font-semibold">{title}</h4>}
//           {property.society?.builder && (
//             <p className="text-xs text-gray-500">
//               by {property.society.builder}
//             </p>
//           )}
//           {price && <p className="text-sm font-bold text-red-600">{price}</p>}
//           {pricePerSqft && (
//             <p className="text-xs text-gray-700">{pricePerSqft}</p>
//           )}
//           {bhkInfo && <p className="text-xs text-gray-800">{bhkInfo}</p>}
//           {location && <p className="text-xs text-gray-600">{location}</p>}
//           {areaInfo && <p className="text-xs text-gray-600">{areaInfo}</p>}
//         </div>

//         <div className=" propertyDetailsMobile">
//           {typeBadges.length > 0 && (
//             <div className="flex flex-wrap gap-1">
//               {typeBadges.map((type, idx) => (
//                 <span
//                   key={idx}
//                   className="bg-gray-100 text-gray-700 text-xs px-2 py-0.5 rounded-full"
//                 >
//                   {type}
//                 </span>
//               ))}
//               {moreTypeCount > 0 && (
//                 <span className="bg-purple-100 text-purple-700 text-xs px-2 py-0.5 rounded-full">
//                   +{moreTypeCount} more
//                 </span>
//               )}
//             </div>
//           )}

//           {property.society?.possessionStatus && (
//             <p className="text-xs text-gray-600">
//               {formatLabel(property.society.possessionStatus)}
//             </p>
//           )}

//           {description && (
//             <p className="text-xs text-gray-600 line-clamp-2">{description}</p>
//           )}

//           {property.society?.externalUrl && (
//             <a
//               href={property.society.externalUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-xs text-blue-600 hover:underline"
//             >
//               Official Project Link
//             </a>
//           )}

//           {property.society?.totalUnits && (
//             <p className="text-xs text-gray-700">
//               Total Units: {property.society.totalUnits}
//             </p>
//           )}

//           {amenities.length > 0 && (
//             <p className="text-xs text-gray-700">
//               Amenities: {amenities.join(", ")}
//             </p>
//           )}
//         </div>

//       </div>
//     </Link>
//   );
// };

// export default MobilePropertyCard;
