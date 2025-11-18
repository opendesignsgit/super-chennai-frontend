// import { useState } from "react";
// import "react-loading-skeleton/dist/skeleton.css";
// import { Link } from "react-router-dom";
// import { API_BASE_URL } from "../../../../../config";
// import { formatPrice } from "../../utils/formatPrice";
// import ContactForm from "../forms/ContactForm";
// import { formatLabel } from "../../utils/formatLabel";
// import defaultImage from "../../../../../public/propertyDefault.png";
// import "../../Styles/PropertyCard.css";
// const getImageUrl = (img) => {
//   if (!img?.url) return defaultImage;
//   if (img.url.startsWith("http")) return img.url;
//   return `${API_BASE_URL}${img.url}`;
// };

// const PropertyCard = ({ property, viewType = "grid" }) => {
//   if (!property) return null;

//   const heroImage = getImageUrl(property.heroImage);
//   const title = property.title || "Property";
//   const bhk = Array.isArray(property.bhk)
//     ? property.bhk.map((item) => item.label.trim()).join(", ")
//     : "";
//   const area = property.area || "";
//   const price = property?.price
//     ? `₹${formatPrice(property.price)}`
//     : "Price on Request";

//   const MAX_BADGES = 1;
//   const typeArray = property.propertyType;
//   const type = Array.isArray(typeArray)
//     ? typeArray.map((item) => item.value).join(", ")
//     : typeArray?.value || property.type || "";
//   const possessionStatus = property.society?.possessionStatus;

//   const description =
//     property?.content?.root?.children?.[0]?.children?.[0]?.text ||
//     property?.description ||
//     "";

//   const propertyLink = `/properties/${property.slug || property.id}`;
//   const transactionType = property.transactionType || null;
//   const [isContactModalOpen, setIsContactModalOpen] = useState(false);

//   return (
//     <div
//       className={`PropertiesCard ${
//         viewType === "grid" ? "gridCard" : "listCard"
//       }`}
//       key={property.id}
//     >
//       <div
//         className={`mainPropertiesCards ${viewType === "list" ? "flex" : ""} relative`}
//       >
//         {(property.featured ||
//           property.urgentSale ||
//           property.transactionType) && (
//           <div className="absolute top-2 left-2 flex gap-1 z-10">
//             {property.featured && (
//               <span className="bg-green-600 text-white text-[10px] px-2 py-[2px] rounded font-medium shadow-sm">
//                 Featured
//               </span>
//             )}
//             {property.urgentSale && (
//               <span className="bg-red-600 text-white text-[10px] px-2 py-[2px] rounded font-medium shadow-sm">
//                 Urgent Sale
//               </span>
//             )}
//             {property.transactionType && (
//               <span className="bg-yellow-500 text-white text-[10px] px-2 py-[2px] rounded font-medium shadow-sm">
//                 {formatLabel(transactionType)}
//               </span>
//             )}
//           </div>
//         )}

//         <img
//           src={heroImage}
//           alt={title}
//           className={`propertyImage ${viewType === "list" ? "w-1/3 mr-4" : ""}`}
//         />

//         <div className="propertyDetails">
//           <h4>{property.title}</h4>
//           {property.society?.builder &&
//             property.society.builder.trim() !== "" && (
//               <h5>by {property.society.builder}</h5>
//             )}

//           <div className="aboutPlotsSize flex flex-wrap gap-4 text-capitalize">
//             <div className="flex flex-col items-start">
//               <span> {price}</span>
//               {property.pricePerSqft && (
//                 <span>{property.pricePerSqft.toLocaleString()} ₹/sqft</span>
//               )}
//             </div>

//             {/* PROPERTY TYPE  */}

//             <div className="flex flex-col items-start text-capitalize">
//               {Array.isArray(property.propertyType) &&
//                 property.propertyType
//                   .slice(0, MAX_BADGES)
//                   .map((item) => (
//                     <span key={item.id}>{formatLabel(item.value)}</span>
//                   ))}

//               {property.propertyType?.length > MAX_BADGES && (
//                 <span className="px-2 py-[2px] text-xs bg-purple-100 text-purple-700 rounded-full font-medium border border-purple-300 whitespace-nowrap">
//                   + {property.propertyType.length - MAX_BADGES} more
//                 </span>
//               )}
//             </div>

//             {/* {area &&
//               Object.values(area).some(
//                 (v) => v !== null && v !== undefined && v !== ""
//               ) && (
//                 <div className="flex flex-col items-start text-capitalize">
//                   {(area.maxSqft || area.minSqft) && (
//                     <span>
//                       {area.maxSqft ? area.maxSqft : ""}
//                       {area.maxSqft && area.minSqft ? " • " : ""}
//                       {area.minSqft ? area.minSqft : ""} sqft
//                     </span>
//                   )}
//                 </div>
//               )} */}

//             {/* COMERCIAL TYPE */}

//             <div className="flex flex-col items-start text-capitalize">
//               {property?.commercialType && (
//                 <span>{formatLabel(property.commercialType)}</span>
//               )}
//             </div>

//             {/* BHK */}

//             <div className="flex flex-col items-start text-capitalize">
//               {bhk && <span className="text-sm text-gray-700">{bhk}</span>}
//             </div>

//             {/* PASSION STATUS    */}

//             <div className="flex gap-2 flex-wrap">
//               <span>{formatLabel(possessionStatus)}</span>
//             </div>
//           </div>

//           <p className="propertContent line-clamp-2">{description}</p>























//           {property.society?.externalUrl && (
//             <a
//               href={property.society.externalUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="propertyViewDetails flex items-center gap-1"
//             >
//               Official Project Link
//               <img
//                 className="propertyAroWwCLick"
//                 src="/images/icons/right-side-arrow-superchennai.svg"
//                 alt="arrow"
//               />
//             </a>
//           )}

//           <div className="uploadedDetailsproperty mt-2">
//             <div className="flex flex-col">
//               {property.society?.totalUnits && (
//                 <span
//                   className="inline-flex items-center text-sm font-semibold px-3 py-1 rounded-full"
//                   style={{ backgroundColor: "#f3e5f5", color: "#a34493" }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="w-4 h-4 mr-1"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                     strokeWidth={2}
//                     style={{ color: "#a34493" }}
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       d="M3 7h18M3 12h18m-7 5h7"
//                     />
//                   </svg>
//                   Total Units:
//                   <span className="ml-1">{property.society.totalUnits}</span>
//                 </span>
//               )}
//             </div>

//             <div className="propertyViewButton mt-2 flex space-x-2">
//               <Link
//                 to={
//                   property.officialView
//                     ? property.society?.externalUrl || propertyLink
//                     : propertyLink
//                 }
//                 target={property.officialView}
//                 rel={property.officialView ? "noopener noreferrer" : undefined}
//               >
//                 <button
//                   type="button"
//                   className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
//                 >
//                   View
//                 </button>
//               </Link>

//               <button
//                 type="button"
//                 className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
//                 onClick={() => setIsContactModalOpen(true)}
//               >
//                 Contact
//               </button>
//             </div>

//             {isContactModalOpen && (
//               <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
//                 <div className="relative w-full max-w-lg bg-white rounded-xl ">
//                   {/* Close Button */}
//                   <button
//                     className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
//                     onClick={() => setIsContactModalOpen(false)}
//                   >
//                     &times;
//                   </button>

//                   {/* Contact Form */}

//                   <ContactForm
//                     entity={{
//                       id: property.id,
//                       slug: property.slug,
//                       type: property.propertyType?.value || "N/A",
//                       purpose: property.purpose || "N/A",
//                       title: property.title || "N/A",
//                       societyName: property?.society?.name || "N/A",
//                       builderName: property?.society?.builder || "N/A",
//                       contactInfo: property?.contactInfo || {},
//                       contactEmail: property?.contactInfo?.email || "N/A",
//                       publishedAt: property?.publishedAt || null,
//                     }}
//                   />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default PropertyCard;
