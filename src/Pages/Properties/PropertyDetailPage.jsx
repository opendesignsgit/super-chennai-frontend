import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PropertyContent } from "./Components/Properties/ritchText";
import PropertyDetailSkeleton from "./Components/loader/PropertyDetailSkeleton";
import { useProperty } from "./hooks/useProperties";
import { formatLabel } from "./utils/formatLabel";
import ContactForm from "./Components/forms/ContactForm";
import { formatPrice } from "./utils/formatPrice";

import {
  ArrowLeftIcon,
  ArrowRight,
  ArrowRightIcon,
  ArrowUp,
  Bath,
  Bed,
  Building,
  Building2,
  Car,
  Download,
  Droplet,
  Dumbbell,
  Flame,
  Phone,
  Shield,
  Trees,
  Tv,
  Wind,
  Microwave,
  WashingMachine,
  UtensilsCrossed,
  ShowerHead,
  Battery,
  Sun,
  HelpCircle,
  Package,
  Banknote,
  Wallet,
  Wrench,
  Users,
  BookOpen,
  User,
  Sparkles,
  Boxes,
  MapPin,
  Zap,
  Lightbulb,
  DoorOpen,
  HandCoins,
  CreditCard,
  Handshake,
} from "lucide-react";

const interiorIcons = {
  doorType: DoorOpen,
  wardrobes: Package,
  curtains: Sun,
  modularKitchen: Sun,
  chimney: Zap,
  falseCeiling: Lightbulb,
  lighting: Lightbulb,
};

const applianceIcons = {
  acUnits: Wind,
  fridgeCount: Package,
  microwaveCount: Microwave,
  waterPurifier: Droplet,
  washingMachine: WashingMachine,
  dishwasher: UtensilsCrossed,
  tvCount: Tv,
  geyserCount: ShowerHead,
  powerBackup: Battery,
  solar: Sun,
};

const amenityIcons = {
  elevator: <ArrowUp size={18} />,
  security: <Shield size={18} />,
  intercom: <Phone size={18} />,
  fireSafety: <Flame size={18} />,
  clubhouse: <Building size={18} />,
  swimmingPool: <Droplet size={18} />,
  gym: <Dumbbell size={18} />,
  playArea: <Trees size={18} />,
  garden: <Trees size={18} />,
};

import { useEffect } from "react";
import "./Styles/PropertyDetailPage.css";
import { API_BASE_URL } from "./config";

const PropertyDetailPage = () => {
  const { id, slug } = useParams();
  const { property, loading } = useProperty({ id, slug });
  console.log("property", property);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0, behavior: "smooth" }), 100);
  }, []);
  const [openIndex, setOpenIndex] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  if (!property?.buildingAmenities) return null;
  const trueAmenities = property?.buildingAmenities
    ? Object.entries(property.buildingAmenities).filter(([_, value]) => value)
    : [];

  const visibleAmenities = showAll ? trueAmenities : trueAmenities.slice(0, 6);

  if (loading) return <PropertyDetailSkeleton />;
  if (!property) return <p className="not-found">❌ Property not found</p>;

  const getImageUrl = (imgObj) => {
    if (!imgObj) return "/placeholder.jpg";
    const url = imgObj.url || imgObj.image?.url;
    if (!url) return "/placeholder.jpg";
    if (url.startsWith("http")) return url;
    return `${API_BASE_URL}${url}`;
  };

  //######## DATA NULL HANDLING DA #####################

  // Basic property info SILA FILEDS IF NEED NA USE PANAIKALAM

  const location = property?.location?.label || "N/A";
  const status =
    property?.society?.possessionStatus === "under"
      ? "Under Construction"
      : "Ready to Move";
  const builderName = property?.society?.name || "N/A";
  const title = property?.title || "Untitled Property";
  const purpose = property?.purpose || "sale";
  const ownership = property?.ownership || "N/A";
  const ageOfProperty = property?.ageOfProperty || "-";
  const transactionType = property?.transactionType || "N/A";
  const agentReraId = property?.agentReraId || "-";

  const price = property?.price
    ? `₹${formatPrice(property.price)}`
    : "Price on Request";

  const pricePerSqft = property?.pricePerSqft
    ? `₹${property.pricePerSqft.toLocaleString()}/sqft`
    : "N/A";
  const area = property?.area ? `${property.area} sqft` : "Area not available";
  const bedrooms = property?.bedrooms ?? "-";
  const bhk = property?.bhk?.label || "-";
  const balconies = property?.balconies ?? "-";
  const bathrooms = property?.washrooms ?? "-";
  const furnishing = property?.furnishing || "Not specified";
  const floor = property?.floor ?? "-";
  const facingDirection = property?.facingDirection || "-";
  const parking = property?.parking || "-";
  const waterSupply = property?.waterSupply || "-";
  const roadWidth = property?.roadWidth ?? "-";
  const cornerPlot = property?.cornerPlot ?? false;
  const plotArea = property?.plotArea ?? "-";
  const dimensions = property?.dimensions || { length: "-", width: "-" };
  const negotiable = property?.negotiable ?? false;
  const listedBy = property?.listedBy || "-";
  const bookingAmount = property?.bookingAmount ?? "-";
  const maintenanceCharges = property?.maintenanceCharges ?? "-";

  // Society / Builder info
  const societyName = property?.society?.name || "N/A";
  const builder = property?.society?.builder || "N/A";
  const totalUnits = property?.society?.totalUnits ?? "-";
  const possessionStatus =
    property?.society?.possessionStatus === "under"
      ? "Under Construction"
      : "Ready to Move";

  // Location info
  const locationLabel = property?.location?.label || "N/A";
  const state = property?.location?.state || "-";
  const city = property?.location?.city || "-";
  const locality = property?.location?.locality || "-";
  const latitude = property?.mapView?.latitude ?? "-";
  const longitude = property?.mapView?.longitude ?? "-";
  const mapEmbed = property?.mapView?.mapEmbed || null;

  // Images
  const heroImage = getImageUrl(property?.heroImage);
  const images = property?.images || [];
  const allImages = [
    heroImage,
    ...images.map((img) => getImageUrl(img?.image)),
  ];

  // Amenities
  const amenities = property?.amenities || [];
  const buildingAmenities = property?.buildingAmenities || {};
  const greenFeatures = property?.greenFeatures || [];

  // Interiors
  const interiors = property?.interiors || {};
  const appliances = property?.appliances || {};
  const bathroomFeatures = property?.bathroomFeatures || {};
  const semiRooms = property?.semiRooms || {};

  // Rent Details
  const rentDetails = property?.rentDetails || {};
  const monthlyRent = rentDetails?.monthlyRent ?? "-";
  const securityDeposit = rentDetails?.securityDeposit ?? "-";
  const maintenanceIncluded = rentDetails?.maintenanceIncluded ?? "-";
  const preferredTenants = rentDetails?.preferredTenants || [];

  // Contact Info
  const contactName = property?.contactInfo?.name || "-";
  const contactPhone = property?.contactInfo?.phone || "-";
  const contactEmail = property?.contactInfo?.email || "-";

  // Floor Plans, Nearby, FAQ
  const floorPlans = property?.floorPlans || [];
  const nearby = property?.nearby || [];
  const faq = property?.faq || [];

  // Meta / SEO
  const metaTitle = property?.meta?.title || "";
  const metaDescription = property?.meta?.description || "";
  const metaImage = getImageUrl(property?.meta?.image);

  // Flags / Booleans
  const featured = property?.featured ?? false;
  const urgentSale = property?.urgentSale ?? false;
  const security = property?.security ?? false;
  const liftAvailable = property?.liftAvailable ?? false;

  // Dates
  const publishedAt = property?.publishedAt || null;
  const createdAt = property?.createdAt || null;
  const updatedAt = property?.updatedAt || null;
  const slugLock = property?.slugLock ?? false;
  const availabilityStatus = property?.availabilityStatus ?? null;

  // Related / Optional Arrays
  const relatedPosts = property?.relatedPosts || [];
  const categories = property?.categories || [];
  const authors = property?.authors || [];
  const populatedAuthors = property?.populatedAuthors || [];

  return (
    <>
      <Helmet>
        <title>{property.title} | Chennai Properties</title>
        <meta
          name="description"
          content={`Explore details of ${property.title}, located in ${
            property.location?.label || ""
          }.`}
        />
        <link
          rel="canonical"
          href={`/properties/${property.slug || property.id}`}
        />
      </Helmet>

      <div className="accaodomationBannerSection relative w-full h-[300px] overflow-hidden">
        <div>
          <img src="/images/banner-blog.jpg" alt="Properties Banner" />
          <img
            src={getImageUrl(property.heroImage)}
            alt={property.title}
            className="absolute inset-0 w-full h-full object-cover"
          />
          {/* Dark transparent overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#a34493]/610 to-[#8b3c82]/90"></div>
        </div>

        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3> {property.title}</h3>
            <div className="breadCrum">
              <a href="/">Home</a> - <a href="#">Properties</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-6 m-15">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{price}</h2>
          </div>

          <div className="flex gap-2">
            {availabilityStatus && (
              <span className="text-xs font-medium px-2 py-1 border border-green-500 text-green-600 rounded-full uppercase">
                {availabilityStatus}
              </span>
            )}
            {urgentSale && (
              <span className="text-xs font-medium px-2 py-1 border border-yellow-500 text-yellow-600 rounded-full uppercase">
                URGENT SALE
              </span>
            )}

            {featured && (
              <span className="text-xs font-medium px-2 py-1 border border-blue-500 text-blue-600 rounded-full uppercase">
                FEATURED
              </span>
            )}
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          {bhk} For Sale in{" "}
          <span className="font-semibold text-gray-900">{title}</span>,{" "}
          {location}
        </p>

        {/* Images Section */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          {/* Hero Image */}
          <div className="col-span-2">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-60 object-cover rounded-lg cursor-pointer"
              onClick={() => {
                setCurrentImageIndex(0);
                setIsModalOpen(true);
              }}
            />
          </div>

          {/* Other Images */}
          <div className="flex flex-col gap-2">
            {images.slice(0, 3).map((img, i) => {
              const isLastVisible = i === 2 && images.length > 3;
              return (
                <div key={i} className="relative w-full h-[73px]">
                  <img
                    src={getImageUrl(img?.image)}
                    alt=""
                    className="w-full h-full object-cover rounded-lg cursor-pointer"
                    onClick={() => {
                      setCurrentImageIndex(i + 1);
                      setIsModalOpen(true);
                    }}
                  />
                  {isLastVisible && (
                    <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center text-white font-bold text-lg">
                      +{images.length - 3}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* IMAGE MODAL */}
        {isModalOpen && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm transition-opacity duration-300 p-4">
            <button
              className="absolute top-3 right-3 text-white text-3xl font-bold hover:text-gray-300 transition-colors"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>
            <div className="relative w-full max-w-4xl max-h-[90vh] bg-gray-900 rounded-xl shadow-2xl overflow-hidden flex flex-col">
              {/* Close button */}

              {/* Main Image */}
              <img
                src={allImages[currentImageIndex]}
                alt={`Property ${currentImageIndex + 1}`}
                className="w-full h-[550px] sm:h-[600px] object-contain rounded-lg shadow-lg transition-transform duration-300 hover:scale-105"
              />

              {/* Navigation Buttons */}
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                onClick={() =>
                  setCurrentImageIndex(
                    (prev) => (prev - 1 + allImages.length) % allImages.length
                  )
                }
              >
                <ArrowLeftIcon className="w-6 h-6" />
              </button>

              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                onClick={() =>
                  setCurrentImageIndex((prev) => (prev + 1) % allImages.length)
                }
              >
                <ArrowRightIcon className="w-6 h-6" />
              </button>

              {/* Thumbnails */}
              <div className="mt-4 flex justify-center gap-2 overflow-x-auto scrollbar-hide">
                {allImages.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className={`w-20 h-16 object-cover rounded-md cursor-pointer border-2 ${
                      index === currentImageIndex
                        ? "border-blue-500"
                        : "border-transparent hover:border-gray-300"
                    } transition-all duration-200`}
                    onClick={() => setCurrentImageIndex(index)}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Summary Badges */}
        <div className="flex flex-wrap gap-3 bg-gray-50 rounded-lg p-2 mb-4">
          {property?.bedrooms != null && (
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Bed size={16} /> {property.bedrooms} Beds
            </div>
          )}

          {bathrooms != null && (
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Bath size={16} /> {bathrooms} Baths
            </div>
          )}

          {property?.parking != null ? (
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Car size={16} /> {property.parking}
            </div>
          ) : null}

          {furnishing ? (
            <div className="flex items-center gap-1 text-gray-700 text-sm">
              <Building2 size={16} /> {furnishing}
            </div>
          ) : null}
        </div>

        {/* Property Info */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          <div>
            <p className="text-xs text-gray-500">Super Built-Up Area</p>
            <p className="font-semibold text-gray-800">{area}</p>
            <p className="text-xs text-gray-400">{pricePerSqft}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Transaction Type</p>
            <p className="font-semibold text-gray-800 capitalize">
              {formatLabel(transactionType)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Status</p>
            <p className="font-semibold text-gray-800">
              {" "}
              {formatLabel(status)}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Furnished Status</p>
            <p className="font-semibold text-gray-800">
              {formatLabel(furnishing)}
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-start gap-4 pt-3 border-t border-gray-200">
          <button
            className="text-white font-medium px-4 py-2 rounded-full transition-all flex items-center gap-1"
            style={{ backgroundColor: "#a34493" }}
            onClick={() => setIsContactModalOpen(true)}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#8b3c82")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#a34493")
            }
          >
            <Phone size={16} /> Contact Builder
          </button>

          <button
            className="border font-medium px-4 py-2 rounded-full transition-all flex items-center gap-1"
            style={{ borderColor: "#a34493", color: "#a34493" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#f9ebf7")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
          >
            <Download size={16} /> Download Brochure
          </button>
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

        {/* About Project Section */}
        <div className="border border-gray-200 rounded-xl p-5">
          <div className="flex flex-wrap justify-between items-start mb-4">
            <h2 className="text-xl font-semibold text-gray-800">
              About Project
            </h2>
            <a
              href="#"
              className="text-red-600 hover:underline flex items-center text-sm font-medium"
            >
              Explore Project <ArrowRight size={16} className="ml-1" />
            </a>
          </div>

          <div className="flex flex-wrap gap-6 items-center">
            {/* Image */}

            <img
              src={getImageUrl(property.heroImage)}
              alt={property.title}
              className="w-28 h-28 object-cover rounded-xl border"
            />

            {/* Details */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-between flex-1">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  {property.society.name}
                </h3>
                <p className="text-gray-500 text-sm">
                  by{property.society.builder}
                </p>
              </div>

              <div className="mt-3 sm:mt-0">
                <p className="text-gray-500 text-sm">Price</p>
                <p className="font-semibold text-gray-800 text-lg">
                  {price} Onwards
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 text-sm">
            <div>
              <p className="text-gray-500">Price per sqft</p>
              <p className="font-semibold text-gray-800">₹ {pricePerSqft}</p>
            </div>
            <div>
              <p className="text-gray-500">Configuration</p>
              <p className="font-semibold text-gray-800"> {bhk} </p>
            </div>
            <div>
              <p className="text-gray-500">Unit</p>
              <p className="font-semibold text-gray-800">8 Units</p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 mt-5">
            {/* Primary Button (Filled) */}
            <button
              className="text-white px-5 py-2 rounded-full font-medium transition-all flex items-center gap-2"
              style={{
                backgroundColor: "#a34493",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#8b3c82"; // darker hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#a34493";
              }}
            >
              <Download size={16} /> Download Brochure
            </button>

            {/* Secondary Button (Outline) */}
            <button
              className="px-5 py-2 rounded-full font-medium transition-all border flex items-center gap-2"
              style={{
                borderColor: "#a34493",
                color: "#a34493",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#f9ebf7"; // light tint hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              Compare Projects
            </button>
          </div>
        </div>
        <div className="border border-gray-200 rounded-xl p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            About this Property
          </h2>
          <div className="text-gray-500 text-sm">
            <PropertyContent content={property.content} />
          </div>
        </div>

        {/* AMENTIES */}
        {trueAmenities.length > 0 && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Amenities
            </h2>

            <div
              className={`grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm transition-all duration-300 ${
                showAll ? "max-h-[600px]" : "max-h-[300px]"
              } overflow-hidden`}
            >
              {visibleAmenities.map(([key]) => (
                <div
                  key={key}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  {amenityIcons[key] || (
                    <Building size={18} className="text-gray-400" />
                  )}
                  <span className="capitalize">
                    {key.replace(/([A-Z])/g, " $1")}
                  </span>
                </div>
              ))}
            </div>

            {trueAmenities.length > 6 && (
              <button
                onClick={() => setShowAll(!showAll)}
                className="text-red-600 font-medium hover:underline focus:outline-none mt-3"
              >
                {showAll
                  ? "View Less"
                  : `View all Amenities (${trueAmenities.length})`}
              </button>
            )}
          </div>
        )}

        {property.amenities?.length > 0 && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Gentral Amenities
            </h2>

            <ul className="flex flex-wrap gap-3">
              {property.amenities.map((a) => (
                <li
                  key={a.id}
                  className="px-4 py-2 bg-[#f9ebf7] text-[#a34493] rounded-full text-sm font-medium"
                >
                  {a.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* BATH ROOMS FETREE  */}
        {property.bathroomFeatures &&
          Object.values(property.bathroomFeatures).some(
            (value) => value !== null && value !== false && value !== 0
          ) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Bathroom Features
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Bath size={18} />
                  <span>
                    Bathtubs: {property.bathroomFeatures.bathtubs || 0}
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Flame size={18} />
                  <span>
                    Jacuzzi: {property.bathroomFeatures.jacuzzi ? "Yes" : "No"}
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Droplet size={18} />
                  <span>
                    Heated Flooring:{" "}
                    {property.bathroomFeatures.heatedFlooring ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          )}

        {/* APPLINCES £££ */}

        {property.appliances &&
          Object.values(property.appliances).some(
            (value) => value !== null && value !== false && value !== 0
          ) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Appliances
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                {Object.entries(property.appliances).map(([key, value]) => {
                  const Icon = applianceIcons[key] || HelpCircle;
                  return (
                    <div
                      key={key}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <Icon size={18} className="text-gray-500" />
                      <span className="capitalize">
                        {key.replace(/([A-Z])/g, " $1")}:{" "}
                        {typeof value === "boolean"
                          ? value
                            ? "Yes"
                            : "No"
                          : value}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        {/* RENTAL DETAILS £££ */}
        {property.rentDetails &&
          Object.values(property.rentDetails).some(
            (value) =>
              value !== null &&
              value !== false &&
              value !== 0 &&
              !(Array.isArray(value) && value.length === 0)
          ) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Rent Details
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Banknote size={18} className="text-gray-400" />
                  <span>
                    <strong>Monthly Rent:</strong>{" "}
                    {property.rentDetails.monthlyRent?.toLocaleString() ||
                      "N/A"}
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Wallet size={18} className="text-gray-400" />
                  <span>
                    <strong>Security Deposit:</strong>{" "}
                    {property.rentDetails.securityDeposit?.toLocaleString() ||
                      "N/A"}
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Wrench size={18} className="text-gray-400" />
                  <span>
                    <strong>Maintenance Included:</strong>{" "}
                    {property.rentDetails.maintenanceIncluded ? "Yes" : "No"}
                  </span>
                </div>

                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Users size={18} className="text-gray-400" />
                  <span>
                    <strong>Preferred Tenants:</strong>{" "}
                    {property.rentDetails.preferredTenants?.join(", ") || "N/A"}
                  </span>
                </div>
              </div>
            </div>
          )}

        {/* NEAR BY  */}

        {property.nearby?.length > 0 && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Nearby Places
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              {property.nearby.map((place) => (
                <div
                  key={place.id}
                  className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <MapPin size={18} className="text-gray-400" />
                  <span>
                    <strong>{place.place}</strong> - {place.distance}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SEMI ROOMS  */}
        {property.semiRooms &&
          Object.values(property.semiRooms).some(
            (value) => value !== null && value !== false
          ) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Semi Rooms
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <BookOpen size={18} className="text-gray-400" />
                  <span>
                    <strong>Study Room:</strong>{" "}
                    {property.semiRooms.studyRoom ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <User size={18} className="text-gray-400" />
                  <span>
                    <strong>Servant Room:</strong>{" "}
                    {property.semiRooms.servantRoom ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Sparkles size={18} className="text-gray-400" />
                  <span>
                    <strong>Pooja Room:</strong>{" "}
                    {property.semiRooms.poojaRoom ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Boxes size={18} className="text-gray-400" />
                  <span>
                    <strong>Store Room:</strong>{" "}
                    {property.semiRooms.storeRoom ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          )}

        {/* PARKINK  */}

        {property.parkingOutdoor &&
          Object.values(property.parkingOutdoor).some(
            (value) => value !== null && value !== false && value !== 0
          ) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Parking Details
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Car size={18} className="text-gray-400" />
                  <span>
                    <strong>Covered Parking:</strong>{" "}
                    {property.parkingOutdoor.coveredParking || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Car size={18} className="text-gray-400" />
                  <span>
                    <strong>Open Parking:</strong>{" "}
                    {property.parkingOutdoor.openParking || 0}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Car size={18} className="text-gray-400" />
                  <span>
                    <strong>Visitor Parking:</strong>{" "}
                    {property.parkingOutdoor.visitorParking ? "Yes" : "No"}
                  </span>
                </div>
                <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                  <Car size={18} className="text-gray-400" />
                  <span>
                    <strong>EV Charging:</strong>{" "}
                    {property.parkingOutdoor.evCharging ? "Yes" : "No"}
                  </span>
                </div>
              </div>
            </div>
          )}

        {/* PLOT AREA  */}

        {property.plotArea && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Plot / Building Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>
                  <strong>Plot Area:</strong> {property.plotArea || "N/A"} sq ft
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>
                  <strong>Length:</strong>{" "}
                  {property.dimensions?.length || "N/A"} ft
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>
                  <strong>Width:</strong> {property.dimensions?.width || "N/A"}{" "}
                  ft
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>
                  <strong>Road Width:</strong> {property.roadWidth || "N/A"} ft
                </span>
              </div>
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <span>
                  <strong>Corner Plot:</strong>{" "}
                  {property.cornerPlot ? "Yes" : "No"}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* INTERIOR  */}
        {property.interiors &&
          Object.values(property.interiors).some(
            (value) => value !== null && value !== false && value !== ""
          ) && (
            <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">
                Interiors / Furnishings
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
                {Object.entries(property.interiors).map(([key, value]) => {
                  const Icon = interiorIcons[key] || HelpCircle;

                  // Format display value
                  let displayValue = "";
                  if (typeof value === "boolean")
                    displayValue = value ? "Yes" : "No";
                  else if (value === null || value === undefined)
                    displayValue = "N/A";
                  else displayValue = value;

                  // Optional: prettier label from key
                  const label = key
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase());

                  return (
                    <div
                      key={key}
                      className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <Icon size={18} className="text-gray-500" />
                      <span>
                        <strong>{label}:</strong> {displayValue}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

        {/* GREEN FETARES  */}

        {property.greenFeatures?.length > 0 && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Green Features
            </h2>
            <ul className="list-disc ml-5 space-y-1 text-gray-600 text-sm">
              {property.greenFeatures.map((feature, i) => (
                <li key={i}>{feature.label || feature.feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* FINANCILA  */}
        {(property.maintenanceCharges ||
          property.bookingAmount ||
          property.negotiable) && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Financial Details
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <CreditCard size={18} className="text-gray-400" />
                <span>
                  Maintenance Charges: ₹
                  {property.maintenanceCharges?.toLocaleString() || "N/A"}
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <HandCoins size={18} className="text-gray-400" />
                <span>
                  Booking Amount: ₹
                  {property.bookingAmount?.toLocaleString() || "N/A"}
                </span>
              </div>

              <div className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100 transition">
                <Handshake size={18} className="text-gray-400" />
                <span>Negotiable: {property.negotiable ? "Yes" : "No"}</span>
              </div>
            </div>
          </div>
        )}

        {/* FAQ  */}

        {faq && faq.length > 0 && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">FAQs</h2>

            <div className="divide-y divide-gray-200">
              {faq.map((f, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={f.id} className="py-3">
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="w-full flex justify-between items-center text-left focus:outline-none"
                    >
                      <span className="font-medium text-gray-800">
                        {f.question}
                      </span>
                      {isOpen ? (
                        <ChevronUp className="w-5 h-5 text-gray-500" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-gray-500" />
                      )}
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="content"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div
                            className="mt-2 text-white text-sm leading-relaxed rounded-xl p-3"
                            style={{
                              backgroundColor: "rgba(163, 68, 147, 0.9)",
                            }}
                          >
                            <p>{f.answer}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {/* MAP VIEW  */}
        {property.mapView && property.mapView.mapEmbed && (
          <div className="border border-gray-200 rounded-xl p-5 transition-all duration-300">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              Location Map
            </h2>

            <div
              className="map-container w-full h-[400px] flex justify-center"
              dangerouslySetInnerHTML={{ __html: property.mapView.mapEmbed }}
            ></div>
          </div>
        )}
      </div>
    </>
  );
};

export default PropertyDetailPage;
