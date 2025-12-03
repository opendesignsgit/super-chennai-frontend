import { useState } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../../../../../config";
import { formatPrice } from "../../utils/formatPrice";
import ContactForm from "../forms/ContactForm";
import { formatLabel } from "../../utils/formatLabel";
import defaultImage from "../../../../../public/propertyDefault.png";
import "../../Styles/PropertyCard.css";
import { useRef, useEffect } from "react";

const getImageUrl = (img) => {
  if (!img?.url) return defaultImage;
  if (img.url.startsWith("http")) return img.url;
  return `${API_BASE_URL}${img.url}`;
};

const PropertyCard = ({ property, viewType = "grid" }) => {
  const MAX_BADGES = 3;
  const scrollItems = [];
  if (!property) return null;
  const scrollRef = useRef(null);
  const heroImage = getImageUrl(property.heroImage);
  const title = property.title || "Property";
  const area = property.area || "";
  const price = property?.price
    ? `₹${formatPrice(property.price)}`
    : "Price on Request";
  const description =
    property?.content?.root?.children?.[0]?.children?.[0]?.text ||
    property?.description ||
    "";
  const propertyLink = `/properties/${property.slug || property.id}`;
  const transactionType = property.transactionType || null;
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 0);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };

    update();
    el.addEventListener("scroll", update);
    return () => el.removeEventListener("scroll", update);
  }, []);

  //########   PRICE   ###############
  if (property.price) {
    scrollItems.push({
      type: "price",
      value: price,
    });
  }

  //########## PRICE PER SQFT ##########
  if (property.pricePerSqft) {
    scrollItems.push({
      type: "pricePerSqft",
      value: `${property.pricePerSqft.toLocaleString()} ₹/sqft`,
    });
  }

  // ##########PROPERTY TYPE ############
  if (
    Array.isArray(property.propertyType) &&
    property.propertyType.length > 0
  ) {
    const validTypes = property.propertyType
      .slice(0, MAX_BADGES)
      .map((item) => item?.value)
      .filter(Boolean);

    validTypes.forEach((t) =>
      scrollItems.push({
        type: "ptype",
        value: formatLabel(t),
      })
    );
  }

  //#################### BHK #############
  // if (Array.isArray(property.bhk)) {
  //   const validBhk = property.bhk
  //     .map((item) => item?.label?.trim())
  //     .filter((t) => t !== "");

  //   if (validBhk.length > 0) {
  //     scrollItems.push({
  //       type: "bhk",
  //       value: validBhk.join(", "),
  //     });
  //   }
  // }

  // ########### COMMERCIAL TYPE ##########
  if (property?.commercialType?.trim()) {
    scrollItems.push({
      type: "commercialType",
      value: formatLabel(property.commercialType),
    });
  }

  //########## POSSESSION STATUS ############
  if (property.society?.possessionStatus) {
    scrollItems.push({
      type: "possession",
      value: formatLabel(property.society.possessionStatus),
    });
  }

  //############### AREA #####################
  if (area && (area.maxSqft || area.minSqft)) {
    scrollItems.push({
      type: "area",
      value: `${area.maxSqft || ""}${area.maxSqft && area.minSqft ? " • " : ""}${
        area.minSqft || ""
      } sqft`,
    });
  }

  return (
    <div className="hidden md:block">
      <div
        className={`PropertiesCard ${
          viewType === "grid" ? "gridCard" : "listCard"
        }`}
        key={property.id}
      >
        <div
          className={`mainPropertiesCards ${viewType === "list" ? "flex" : ""} relative`}
        >
          {(property.featured ||
            property.urgentSale ||
            property.transactionType) && (
            <div className="absolute top-2 left-2 flex gap-1 z-10">
              {property.featured && (
                <span className="bg-green-600 text-white text-[10px] px-2 py-[2px] rounded font-medium shadow-sm">
                  Featured
                </span>
              )}
              {property.urgentSale && (
                <span className="bg-red-600 text-white text-[10px] px-2 py-[2px] rounded font-medium shadow-sm">
                  Urgent Sale
                </span>
              )}
              {property.transactionType && (
                <span className="bg-yellow-500 text-white text-[10px] px-2 py-[2px] rounded font-medium shadow-sm">
                  {formatLabel(transactionType)}
                </span>
              )}
            </div>
          )}

          <img
            src={heroImage}
            alt={title}
            className={`propertyImage 
          object-cover rounded-md
           min-w-[200px] max-w-[400px]
           h-[260px]
          ${viewType === "list" ? "w-1/3 mr-4" : "w-full"}
           `}
          />

          <div className="propertyDetails">
            <h4>{property.title}</h4>
            {property.society?.builder &&
              property.society.builder.trim() !== "" && (
                <h5>by {property.society.builder}</h5>
              )}

            {/* {scrollItems.length > 1 && canScrollLeft && (
              <button
                className="scrollBtn left"
                onClick={() =>
                  scrollRef.current.scrollBy({ left: -200, behavior: "smooth" })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
              </button>
            )}

            <div className="maincontainerItems">
              <div className="scrollContainer" ref={scrollRef}>
                <div className="aboutPlotsSize flex flex-nowrap text-capitalize">
                  {scrollItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start cardpropertyslide"
                    >
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {scrollItems.length > 0 && canScrollRight && (
              <button
                className="scrollBtn right"
                onClick={() =>
                  scrollRef.current.scrollBy({ left: 200, behavior: "smooth" })
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            )} */}

            <div className="maincontainerItems scrollWrapper relative">
              {/* LEFT ARROW */}
              {scrollItems.length > 1 && canScrollLeft && (
                <button
                  className="scrollBtn left"
                  onClick={() =>
                    scrollRef.current.scrollBy({
                      left: -200,
                      behavior: "smooth",
                    })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6" />
                  </svg>
                </button>
              )}

              {/* SCROLL AREA */}
              <div className="scrollContainer" ref={scrollRef}>
                <div className="aboutPlotsSize flex flex-nowrap text-capitalize">
                  {scrollItems.map((item, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-start cardpropertyslide"
                    >
                      <span>{item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT ARROW */}
              {scrollItems.length > 0 && canScrollRight && (
                <button
                  className="scrollBtn right"
                  onClick={() =>
                    scrollRef.current.scrollBy({
                      left: 200,
                      behavior: "smooth",
                    })
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </button>
              )}
            </div>

            <p className="propertContent line-clamp-5">{description}</p>

            <div className="uploadedDetailsproperty mt-2">
              <div className="flex flex-col">
                {property.society?.totalUnits && (
                  <span
                    className="inline-flex items-center text-sm font-semibold px-3 py-1 rounded-full"
                    style={{ backgroundColor: "#f3e5f5", color: "#a34493" }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-4 h-4 mr-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                      style={{ color: "#a34493" }}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 7h18M3 12h18m-7 5h7"
                      />
                    </svg>
                    Total Units:
                    <span className="ml-1">{property.society.totalUnits}</span>
                  </span>
                )}
              </div>

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
                  target={property.officialView ? "_blank" : undefined}
                  rel={
                    property.officialView ? "noopener noreferrer" : undefined
                  }
                >
                  <button
                    type="button"
                    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                  >
                    View
                  </button>
                </Link>

                {/* <button
                type="button"
                className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                onClick={() => setIsContactModalOpen(true)}
              >
                Contact
              </button> */}
              </div>

              {isContactModalOpen && (
                <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
                  <div className="relative w-full max-w-lg bg-white rounded-xl ">
                    {/* Close Button */}
                    <button
                      className="absolute top-3 right-3 text-gray-600 hover:text-gray-900 text-2xl font-bold"
                      onClick={() => setIsContactModalOpen(false)}
                    >
                      &times;
                    </button>

                    {/* Contact Form */}

                    <ContactForm
                      entity={{
                        id: property.id,
                        slug: property.slug,
                        type: property.propertyType?.value || "N/A",
                        purpose: property.purpose || "N/A",
                        title: property.title || "N/A",
                        societyName: property?.society?.name || "N/A",
                        builderName: property?.society?.builder || "N/A",
                        contactInfo: property?.contactInfo || {},
                        contactEmail: property?.contactInfo?.email || "N/A",
                        publishedAt: property?.publishedAt || null,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
