import { API_BASE_URL } from "../../../../../config";
import { formatPrice } from "../../utils/formatPrice";
import { formatLabel } from "../../utils/formatLabel";
import { Link } from "react-router-dom";
import defaultImage from "../../../../../public/propertyDefault.png";
import { useState } from "react";

const getImageUrl = (img) => {
  if (!img?.url) return defaultImage;
  if (img.url.startsWith("http")) return img.url;
  return `${API_BASE_URL}${img.url}`;
};

const MAX_BADGES = 2;

const MobilePropertyCard = ({ property }) => {
  if (!property) return null;

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const heroImage = getImageUrl(property.heroImage);
  const title = property.title;

  // PRICE
  const price = property?.price
    ? `₹${formatPrice(property.price)}`
    : "Price on Request";

  const priceRange =
    property.minPrice && property.maxPrice
      ? `₹${formatPrice(property.minPrice)} - ₹${formatPrice(property.maxPrice)}`
      : null;

  const pricePerSqft = property.pricePerSqft
    ? `₹${property.pricePerSqft.toLocaleString()}/sqft`
    : null;

  // BHK
  const bhkInfo =
    property.bhk?.length > 0
      ? property.bhk.map((b) => b.label).join(", ")
      : property.bedrooms
        ? `${property.bedrooms} BHK`
        : null;

  // AREA
  const area =
    property.area && (property.area.minSqft || property.area.maxSqft)
      ? `${property.area.minSqft || ""}${
          property.area.minSqft && property.area.maxSqft ? " • " : ""
        }${property.area.maxSqft || ""} sqft`
      : null;

  // LOCATION
  const location = property.location
    ? `${property.location.locality || ""}${
        property.location.locality && property.location.city ? ", " : ""
      }${property.location.city || ""}`
    : null;

  // DESCRIPTION
  const description =
    property?.content?.root?.children?.[0]?.children?.[0]?.text ||
    property?.description ||
    null;

  // PROPERTY TYPES
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
    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full border border-gray-200">
      <div className="relative">
        <img src={heroImage} alt={title} className="w-full h-56 object-cover" />

        <div className="absolute top-2 left-2 flex flex-wrap gap-2 max-w-[90%]">
          {property.featured && (
            <span className="bg-green-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md">
              Featured
            </span>
          )}

          {property.urgentSale && (
            <span className="bg-red-600 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md">
              Urgent Sale
            </span>
          )}

          {property.transactionType && (
            <span className="bg-yellow-500 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md">
              {formatLabel(property.transactionType)}
            </span>
          )}

          {property.society?.possessionStatus && (
            <span className="bg-black/60 text-white text-[10px] sm:text-xs px-2 py-1 rounded-md">
              {formatLabel(property.society.possessionStatus)}
            </span>
          )}
        </div>

        {/* IMAGE COUNT */}
        <div className="absolute bottom-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-md">
          {property.images?.length ? `1/${property.images.length}` : `1/1`}
        </div>

        {/* STATIC DOTS */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white/50"></span>
          <span className="w-2 h-2 rounded-full bg-white/50"></span>
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <div className="flex gap-[10px]">
          <h2 className="text-base font-semibold line-clamp-1">{title}</h2>
        </div>

        {/* BUILDER NAME */}
        {property.society?.builder && (
          <p className="text-xs text-gray-500 -mt-1">
            by {property.society.builder}
          </p>
        )}

        {/* PRICE PER SQFT */}
        {pricePerSqft && (
          <p className="text-xs text-gray-500">{pricePerSqft}</p>
        )}

        <div className="flex gap-[10px]">
          {/* LEFT SIDE */}
          <div className="w-1/2">
            {bhkInfo && <p className="text-sm text-gray-700 mt-1">{bhkInfo}</p>}

            {/* PRICE (added desktop field support) */}
            {price && (
              <p className="text-base font-bold text-red-600">
                {priceRange ? priceRange : price}
              </p>
            )}

            {/* AREA */}
            {area && <p className="text-xs text-gray-600 mt-1">{area}</p>}
          </div>

          {/* RIGHT SIDE BADGES */}
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

              {/* COMMERCIAL TYPE */}
              {property.commercialType && (
                <span className="text-xs bg-gray-100 px-2 py-1 rounded-full text-gray-700">
                  {formatLabel(property.commercialType)}
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

        {/* TOTAL UNITS */}
        {property.society?.totalUnits && (
          <p className="text-xs text-purple-700 bg-purple-100 px-2 py-1 rounded-full inline-block mt-2">
            Total Units: {property.society.totalUnits}
          </p>
        )}

        {/* BUTTONS */}

        <div className="propertyViewButton mt-2 flex justify-between items-center w-full">
          {property.society?.externalUrl && (
            <a
              href={property.society.externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="propertyViewDetails flex items-center gap-1"
            >
              Official Project Link
              <img
                className="propertyAroWwCLick"
                src="/images/icons/right-side-arrow-superchennai.svg"
                alt="arrow"
              />
            </a>
          )}
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
        </div>
      </div>
    </div>
  );
};

export default MobilePropertyCard;
