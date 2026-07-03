
import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
import LexicalContent from "../Components/LexicalContent";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { useState } from "react";
import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
import EmptyState from "../Components/locations/EmptyState";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
import { useLocations } from "../hooks/useLocations";
import Slider from "react-slick";
import {
  MapPin,
  Tag,
  Phone,
  Globe,
  IndianRupee,
  Clock,
  Map as MapIcon,
  Layers,
  DollarSign,
  Sparkles,
  Users,
  RefreshCw,
  UsersRound,
  Wind,
  DoorOpen,
  CreditCard,
  Banknote,
  Accessibility,
  ShoppingBag,
  Receipt,
  Train,
  Bus,
  Milestone,
  ParkingSquare,
  ArrowRight,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import ProperitiesNeighbourhood from "../Components/Properties";

export default function NeighbourhoodItemDetail() {
  const { locationId, slug, category, subcategory } = useParams();

  const { data, loading } = useNeighbourhood({
    location: locationId,
  });
  const { locations } = useLocations();
  const item = data?.find((i) => i.slug === slug);

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  console.log("deatail page ", data);

  if (loading) return <NeighbourhoodListSkeleton />;
  if (!item)
    return (
      <EmptyState
        title="Invalid Location"
        message="We couldn't find details for this location."
        onReset={() => navigate("/neighbourhood")}
      />
    );

  const relatedItems =
    data?.filter(
      (i) =>
        i.slug !== slug &&
        (subcategory
          ? i.subCategories?.some((sub) => sub.slug === subcategory)
          : i.category?.slug === category),
    ) || [];

  const NextArrow = ({ onClick }) => {
    return (
      <div
        className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer  text-white p-2  arrorwwwwidth"
        onClick={onClick}
      >
        <img src="/images/icons/rightArrowsvg.svg" alt="" />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div
        className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer  text-white p-2 arrorwwwwidth "
        onClick={onClick}
      >
        <img src="/images/icons/LeftArrow-Bg.svg" alt="" />
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2500,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const safeCategory = category?.toLowerCase();
  const safeSubcategory =
    subcategory && subcategory !== "undefined" ? subcategory : safeCategory;

  const infoItems = [
    {
      id: 1,
      icon: <MapPin className="w-5 h-5 text-[#5d32a8]" />,
      label: "Location",
      value: "T Nagar, Chennai 600017",
    },
    {
      id: 2,
      icon: <MapIcon className="w-5 h-5 text-[#5d32a8]" />,
      label: "Distance",
      value: "asdadasdasd",
    },
    {
      id: 3,
      icon: <Tag className="w-5 h-5 text-[#5d32a8]" />,
      label: "Category",
      value: "asdadasdasd",
    },
    {
      id: 4,
      icon: <IndianRupee className="w-5 h-5 text-[#5d32a8]" />,
      label: "Price Range",
      value: "asdadasdasd",
    },
    {
      id: 5,
      icon: <Clock className="w-5 h-5 text-[#5d32a8]" />,
      label: "Best Time to Visit",
      value: "asdadasdasd",
    },
  ];

  function StarIcon() {
    return (
      <svg
        className="w-4 h-4 fill-yellow-400 text-yellow-400"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    );
  }

  function MapPinIcon({ className = "w-4 h-4" }) {
    return (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
      </svg>
    );
  }



  const hoursConfig = item?.businessHours?.[0];
  const formattedHours =
    hoursConfig && (hoursConfig.openTime || hoursConfig.closeTime)
      ? `${hoursConfig.openTime || ""} - ${hoursConfig.closeTime || ""}`
      : "10:00 AM - 9:30 PM";

  const galleryImages =
    item?.gallery?.map((g) => ({
      url:
        typeof g.image === "object"
          ? API_BASE_URL_API_TEST_DEV + g.image.url
          : API_BASE_URL_API_TEST_DEV + g.image,
      alt: g.alt || item.title || "Gallery Image",
      caption: g.caption || "",
    })) || [];

  // Handlers for Custom Modal Slider Navigation
  const handlePrevSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1,
    );
  };

  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1,
    );
  };

  return (
    <div id="poppinsssFamily">
      <div className="relative h-[600px] flex flex-col justify-center pb-10 px-8 overflow-hidden">
        <img
          src={`${API_BASE_URL_API_TEST_DEV}${item.FeaturedImage.url}`}
          alt={item.title || "Neighbourhood Banner"}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        <div
          className="absolute inset-0 mix-blend-multiply pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,5,30,0.5) 0%, rgba(10,5,30,0.75) 60%, rgba(10,5,30,0.92) 100%)",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full pb-0">
          <nav className="text-gray-400 neighbourtwoparagraph items-center gap-1 neighbourhoodbrudcrum">
            <div className="flex gap-2 mb-5">
              <span className="hover:text-white cursor-pointer">Home</span>
              <span>›</span>
              <span
                className="hover:text-white cursor-pointer"
                onClick={() => navigate("/neighbourhood")}
              >
                Neighbourhood
              </span>
              <span>›</span>
              <span
                onClick={() =>
                  navigate(`/neighbourhood/${item.locations.locality}`)
                }
                className="hover:text-white cursor-pointer"
              >
                {item.locations.city}
              </span>
              <span>›</span>
              <span className="text-white">{item.category.title}</span>
            </div>
          </nav>

          <div className="relative z-10">
            {item.isFeatured && (
              <div className="mb-3">
                <span className="bg-[#a44294] text-white font-semibold px-5 py-2 rounded-[5px] text-sm tracking-wide select-none">
                  Premium Verified
                </span>
              </div>
            )}
            <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
              {item.title}
            </h1>
            <p className="text-gray-300 text-sm max-w-3xl mb-7 neighbourtwoheaidngssparagraph">
              {/* {item.description} */}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              <button className="flex items-center gap-2 bg-[#a44294] hover:bg-[#4c278a] text-white px-5 py-3 rounded-[10px] font-medium text-sm transition-colors shadow-sm">
                <MapPin className="w-4 h-4 stroke-[2]" />
                <a
                  href={item.googlePlaceId}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span>Get Directions</span>
                </a>
              </button>

              {item.contactInfo.primaryPhone && (
                <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#a44294] px-5 py-3 rounded-[10px] font-semibold text-sm transition-colors shadow-sm border border-transparent">
                  <Phone className="w-4 h-4 stroke-[2.5] text-[#a44294]" />
                  <a
                    href={`tel:${item.contactInfo.primaryPhone}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Call Store</span>
                  </a>
                </button>
              )}

              {item.contactInfo.website && (
                <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#a44294] px-5 py-3 rounded-[10px] font-semibold text-sm transition-colors shadow-sm border border-transparent">
                  <Globe className="w-4 h-4 stroke-[2.5] text-[#a44294]" />
                  <a
                    href={
                      item.contactInfo.website?.startsWith("http")
                        ? item.contactInfo.website
                        : `https://${item.contactInfo.website}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Visit Website</span>
                  </a>
                </button>
              )}
            </div>

            <NeighbourhoodSearchBar
              data={data}
              locations={locations}
              locationId={locationId}
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8 space-y-10 pt-0 mt-[-50px] relative z-[0] pb-0">
        <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between px-6 py-4 gap-y-4 md:gap-y-0">
          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Location
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item?.locations?.locality || "Local Area"}, <br />{" "}
                {item?.locations?.city || ""}
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <MapIcon className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Reviews
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item?.totalReviews ||
                  item?.googleData?.totalGoogleReviews ||
                  0}
                + Reviews
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Category
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item?.category?.title}
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <IndianRupee className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Pricing / Cost
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item?.priceInfo?.priceRange || ""}
                {item?.priceInfo?.averageCost || "N/A"}
              </span>
            </div>
          </div>

          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Timing Block
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {hoursConfig?.openTime || "Open 24 hrs"}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 flex justify-center items-start font-sans">
        <div className="max-w-7xl mx-auto px-4 sm:px-6  grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ================= LEFT COLUMN (Width: 7/12) ================= */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-8">
            <div>
              <h2
                className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]"
                style={{ width: "90%" }}
              >
                About {item.title}
              </h2>
              <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                {item.description}
              </p>
            </div>

            <hr className="border-gray-100" />

            <div>
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                {item?.quickAccessHighlights &&
                item.quickAccessHighlights.length > 0
                  ? item.quickAccessHighlights.map((hl) => (
                      <div
                        key={hl.id}
                        className="flex items-start space-x-3 bg-gray-50/60 p-3 rounded-xl border border-gray-100"
                      >
                        <div className="p-2 bg-[#F5F3FF] text-[#a44294] rounded-lg flex-shrink-0">
                          {hl?.icon?.url ? (
                            <img
                              src={`${API_BASE_URL_API_TEST_DEV}${hl.icon.url}`}
                              alt=""
                              className="w-[18px] h-[18px] object-contain"
                            />
                          ) : (
                            <Layers size={18} />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
                            {hl.title}
                          </h4>
                          <p className="text-xs text-gray-600 leading-normal">
                            {hl.desc} {hl.sub && `• ${hl.sub}`}
                          </p>
                        </div>
                      </div>
                    ))
                  : item?.serviceOptions?.map((opt) => (
                      <div key={opt.id} className="flex items-center space-x-3">
                        <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                          <Sparkles size={18} />
                        </div>
                        <span className="text-sm font-medium text-gray-800">
                          {opt.label}
                        </span>
                      </div>
                    ))}
              </div>
            </div>

            <hr className="border-gray-100" />
            {item?.subCategories && item.subCategories.length > 0 && (
              <div>
                <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                  Related Categories
                </h2>
                <div className="flex flex-wrap gap-2.5">
                  {item.subCategories.map((s) => (
                    <a
                      href={`/neighbourhood/${locationId}/${item.category?.slug?.toLowerCase()}/${s.slug}`}
                      key={s.id}
                      className="inline-flex items-center bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium hover:bg-[#a44294] hover:text-white transition-colors"
                    >
                      <span className="neighbourtwoparagraph">{s.title}</span>
                    </a>
                  ))}
                </div>
              </div>
            )}

            <hr className="border-gray-100" />

            <div>
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Timings
              </h2>
              <div className="inline-flex items-center space-x-4 bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium">
                <div className="flex items-center space-x-1.5 neighbourtwoparagraph">
                  <Clock size={15} />
                  <span className="text-[#000] neighbourtwoparagraph">
                    {hoursConfig?.day || "Operating Hours"}
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="font-bold neighbourtwoparagraph text-[#000]">
                  {formattedHours}{" "}
                  {hoursConfig?.isClosed && "(Closed on Holidays)"}
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT COLUMN (Width: 5/12) ================= */}
          <div className="lg:col-span-5 space-y-6">
            {/* Location Block */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Location
              </h2>
              <div className="relative w-full h-[240px] bg-[#E8ECEF] rounded-xl overflow-hidden border border-gray-200">
                <iframe
                  src={`https://www.google.com/maps?q=${item.location.latitude},${item.location.longitude}&z=15&output=embed`}
                  width="100%"
                  height="270"
                  style={{
                    border: "0",
                    borderRadius: "8px",
                  }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
            {/* 

            {/* Nearby & Transport Access Block */}
            {item?.locations?.quickAccess &&
              item.locations.quickAccess.length > 0 && (
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
                  <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                    Nearby & Transport Access
                  </h2>
                  <div className="space-y-5">
                    {item.locations.quickAccess.map((qa) => (
                      <div
                        key={qa.id}
                        className="flex items-start space-x-4 bg-gray-50/50 p-3 rounded-xl"
                      >
                        <div className="p-2.5 bg-white text-[#a44294] rounded-xl shadow-sm mt-0.5 border border-gray-100">
                          {qa?.icon?.url ? (
                            <img
                              src={`${API_BASE_URL_API_TEST_DEV}${qa.icon.url}`}
                              alt=""
                              className="w-[18px] h-[18px] object-contain"
                            />
                          ) : (
                            <Milestone size={18} />
                          )}
                        </div>
                        <div>
                          <h4 className="font-semibold text-[#000] text-sm neighbourtwoparagraph mb-0.5">
                            {qa.label}
                          </h4>
                          <p className="text-sm font-bold text-[#a44294]">
                            {qa.name}
                          </p>
                          <p className="text-xs text-gray-500">{qa.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>

      {/*#################### DYNAMIC PMS GALLERY ########### */}

      {galleryImages.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Store Gallery
              </h2>
              <button
                onClick={() => {
                  setCurrentImageIndex(0);
                  setIsModalOpen(true);
                }}
                className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors"
              >
                View All Photos <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex gap-4 pb-2 flex-wrap">
              {galleryImages.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => {
                    setCurrentImageIndex(idx);
                    setIsModalOpen(true);
                  }}
                  className="min-w-[200px] md:min-w-[200px] flex-1 snap-start group overflow-hidden rounded-xl cursor-pointer"
                >
                  <img
                    src={img.url}
                    alt={img.alt}
                    className="w-full h-40 object-cover rounded-xl border border-gray-100 transition-transform duration-300 ease-out group-hover:scale-110"
                  />
                  {img.caption && (
                    <p className="text-xs text-gray-500 mt-1 px-1 italic">
                      {img.caption}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      )}

      {/*#################### RELATED ITEMS SECTION ########### */}
      {relatedItems && relatedItems.length > 0 && (
        <div
          className="max-w-7xl mx-auto px-4 sm:px-6"
          style={{ paddingBottom: "50px" }}
        >
          <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Explore More {item?.category?.title || "Shopping"} in{" "}
                {item?.locations?.locality || "the Area"}
              </h2>
              <button className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors">
                View All <ArrowRight size={16} />
              </button>
            </div>

            <div className="flex gap-4 flex-wrap pb-2 neighhhcradsssssjddddd">
              {relatedItems.map((store) => (
                <a
                  className="cradsssssjddddd"
                  href={`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${store.slug}`}
                  key={store.id}
                >
                  <div className="flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between snap-start group cursor-pointer hover:shadow-md transition-shadow duration-200">
                    <div className="relative h-50 w-full overflow-hidden bg-gray-100">
                      <img
                        src={`${API_BASE_URL_API_TEST_DEV}${store.heroImage?.thumbnailURL}`}
                        alt={store.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-4 flex flex-col flex-grow justify-between">
                      <div>
                        <h3 className="font-bold text-gray-900 text-base mb-1">
                          {store.name}
                        </h3>
                        <p className="mb-2 text-[#000] neighbourtwoparagraph">
                          {store.description
                            ? `${store.description.slice(0, 50)}....`
                            : ""}
                        </p>
                      </div>

                      <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-50">
                        <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                          <span className="flex items-center gap-1 text-amber-500">
                            <StarIcon />
                            <span className="text-[#000] neighbourtwoparagraph">
                              {store.googleData?.totalGoogleReviews || 0}
                            </span>
                          </span>
                          <span className="flex items-center gap-1 text-amber-500">
                            <MapPinIcon className="w-3 h-3" />
                            <span className="text-[#000] neighbourtwoparagraph">
                              {store.locations?.city}
                            </span>
                          </span>
                        </div>

                        <button className="p-2 bg-purple-100 text-purple-700 rounded-full group-hover:bg-[#a44294] group-hover:text-white transition-colors duration-200">
                          <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </section>

          <ProperitiesNeighbourhood />
        </div>
      )}
      {/* #################### FULL-VIEW SLIDER GALLERY MODAL #################### */}
      {isModalOpen && galleryImages.length > 0 && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center p-4">
          <button
            onClick={() => setIsModalOpen(false)}
            className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl aspect-[16/10] flex items-center justify-center px-4">
            <button
              onClick={handlePrevSlide}
              className="absolute left-2 md:left-6 z-10 p-3 bg-white/10 hover:bg-[#a44294] text-white rounded-full border border-white/10 transition-all duration-200 focus:outline-none"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            <div className="w-full h-full flex items-center justify-center select-none">
              <img
                src={galleryImages[currentImageIndex].url}
                alt={galleryImages[currentImageIndex].alt}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
              />
            </div>

            <button
              onClick={handleNextSlide}
              className="absolute right-2 md:right-6 z-10 p-3 bg-white/10 hover:bg-[#a44294] text-white rounded-full border border-white/10 transition-all duration-200 focus:outline-none"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          </div>

          <div className="mt-4 text-center text-white/80 max-w-xl px-4">
            <p className="text-sm font-medium tracking-wide">
              {galleryImages[currentImageIndex].caption ||
                galleryImages[currentImageIndex].alt}
            </p>
            <span className="text-xs text-white/40 block mt-1">
              {currentImageIndex + 1} / {galleryImages.length}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}



// import React from "react";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import { API_BASE_URL_API_TEST_DEV } from "../../../../config";
// import LexicalContent from "../Components/LexicalContent";
// import { useNeighbourhood } from "../hooks/useNeighbourhood";
// import { useState } from "react";
// import AutoShrinkText from "../../../Components/Text/AutoShrinkText";
// import NeighbourhoodSearchBar from "../Components/NeighbourhoodSearchBar";
// import EmptyState from "../Components/locations/EmptyState";
// import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
// import { useLocations } from "../hooks/useLocations";
// import Slider from "react-slick";
// import {
//   MapPin,
//   Tag,
//   Phone,
//   Globe,
//   IndianRupee,
//   Clock,
//   Map as MapIcon,
//   Layers,
//   DollarSign,
//   Sparkles,
//   Users,
//   RefreshCw,
//   UsersRound,
//   Wind,
//   DoorOpen,
//   CreditCard,
//   Banknote,
//   Accessibility,
//   ShoppingBag,
//   Receipt,
//   Train,
//   Bus,
//   Milestone,
//   ParkingSquare,
//   ArrowRight,
// } from "lucide-react";
// import ProperitiesNeighbourhood from "../Components/Properties";

// export default function NeighbourhoodItemDetail() {
//   const { locationId, slug, category, subcategory } = useParams();

//   const { data, loading } = useNeighbourhood({
//     location: locationId,
//   });
//   const { locations } = useLocations();
//   const item = data?.find((i) => i.slug === slug);

//   const navigate = useNavigate();

//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentImageIndex, setCurrentImageIndex] = useState(0);
//   console.log("deatail page ", data);

//   if (loading) return <NeighbourhoodListSkeleton />;
//   if (!item)
//     return (
//       <EmptyState
//         title="Invalid Location"
//         message="We couldn't find details for this location."
//         onReset={() => navigate("/neighbourhood")}
//       />
//     );

//   const relatedItems =
//     data?.filter(
//       (i) =>
//         i.slug !== slug &&
//         (subcategory
//           ? i.subCategories?.some((sub) => sub.slug === subcategory)
//           : i.category?.slug === category),
//     ) || [];

//   const NextArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer  text-white p-2  arrorwwwwidth"
//         onClick={onClick}
//       >
//         <img src="/images/icons/rightArrowsvg.svg" alt="" />
//       </div>
//     );
//   };

//   const PrevArrow = ({ onClick }) => {
//     return (
//       <div
//         className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 cursor-pointer  text-white p-2 arrorwwwwidth "
//         onClick={onClick}
//       >
//         <img src="/images/icons/LeftArrow-Bg.svg" alt="" />
//       </div>
//     );
//   };

//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: false,
//     autoplaySpeed: 2500,
//     arrows: true,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />,
//     responsive: [
//       {
//         breakpoint: 1280,
//         settings: {
//           slidesToShow: 3,
//         },
//       },
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 640,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   const safeCategory = category?.toLowerCase();
//   const safeSubcategory =
//     subcategory && subcategory !== "undefined" ? subcategory : safeCategory;

//   const infoItems = [
//     {
//       id: 1,
//       icon: <MapPin className="w-5 h-5 text-[#5d32a8]" />,
//       label: "Location",
//       value: "T Nagar, Chennai 600017",
//     },
//     {
//       id: 2,
//       icon: <MapIcon className="w-5 h-5 text-[#5d32a8]" />,
//       label: "Distance",
//       value: "asdadasdasd",
//     },
//     {
//       id: 3,
//       icon: <Tag className="w-5 h-5 text-[#5d32a8]" />,
//       label: "Category",
//       value: "asdadasdasd",
//     },
//     {
//       id: 4,
//       icon: <IndianRupee className="w-5 h-5 text-[#5d32a8]" />,
//       label: "Price Range",
//       value: "asdadasdasd",
//     },
//     {
//       id: 5,
//       icon: <Clock className="w-5 h-5 text-[#5d32a8]" />,
//       label: "Best Time to Visit",
//       value: "asdadasdasd",
//     },
//   ];

//   function StarIcon() {
//     return (
//       <svg
//         className="w-4 h-4 fill-yellow-400 text-yellow-400"
//         viewBox="0 0 20 20"
//       >
//         <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
//       </svg>
//     );
//   }

//   function MapPinIcon({ className = "w-4 h-4" }) {
//     return (
//       <svg className={className} viewBox="0 0 24 24" fill="currentColor">
//         <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
//       </svg>
//     );
//   }

//   const galleryImagesneww = [
//     {
//       id: 1,
//       src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80",
//       alt: "Store interior 1 - Premium apparel racks",
//     },
//     {
//       id: 2,
//       src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80",
//       alt: "Store interior 2 - Ethnic wear display",
//     },
//     {
//       id: 3,
//       src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80",
//       alt: "Fancy World section - Modern clothing setup",
//     },
//     {
//       id: 4,
//       src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80",
//       alt: "Store interior 4 - Showroom mannequins",
//     },
//     {
//       id: 5,
//       src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=500&q=80",
//       alt: "Store interior 5 - Designer collections",
//     },
//   ];

//   const hoursConfig = item?.businessHours?.[0];
//   const formattedHours =
//     hoursConfig && (hoursConfig.openTime || hoursConfig.closeTime)
//       ? `${hoursConfig.openTime || ""} - ${hoursConfig.closeTime || ""}`
//       : "10:00 AM - 9:30 PM";

//   const galleryImages =
//     item?.gallery?.map((g) => ({
//       url:
//         typeof g.image === "object"
//           ? API_BASE_URL_API_TEST_DEV + g.image.url
//           : API_BASE_URL_API_TEST_DEV + g.image,
//       alt: g.alt || item.title || "Gallery Image",
//       caption: g.caption || "",
//     })) || [];

//   return (
//     <div id="poppinsssFamily">
//       <div className="relative h-[600px] flex flex-col justify-center pb-10 px-8 overflow-hidden">
//         <img
//           src={`${API_BASE_URL_API_TEST_DEV}${item.FeaturedImage.url}`}
//           alt={item.title || "Neighbourhood Banner"}
//           className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
//         />

//         <div
//           className="absolute inset-0 mix-blend-multiply pointer-events-none"
//           style={{
//             background:
//               "linear-gradient(to bottom, rgba(10,5,30,0.5) 0%, rgba(10,5,30,0.75) 60%, rgba(10,5,30,0.92) 100%)",
//           }}
//         />

//         <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full pb-0">
//           <nav className="text-gray-400 neighbourtwoparagraph items-center gap-1 neighbourhoodbrudcrum">
//             <div className="flex gap-2 mb-5">
//               <span className="hover:text-white cursor-pointer">Home</span>
//               <span>›</span>
//               <span
//                 className="hover:text-white cursor-pointer"
//                 onClick={() => navigate("/neighbourhood")}
//               >
//                 Neighbourhood
//               </span>
//               <span>›</span>
//               <span
//                 onClick={() =>
//                   navigate(`/neighbourhood/${item.locations.locality}`)
//                 }
//                 className="hover:text-white cursor-pointer"
//               >
//                 {item.locations.city}
//               </span>
//               <span>›</span>
//               <span className="text-white">{item.category.title}</span>
//             </div>
//           </nav>

//           <div className="relative z-10">
//             <div className="mb-3">
//               <a className="bg-[#a44294] hover:bg-[#a44294] text-white font-semibold px-5 py-2 rounded-[5px] text-sm transition-colors cursor-pointer">
//                 Popular Store
//               </a>
//             </div>
//             <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
//               {item.title}
//             </h1>
//             <p className="text-gray-300 text-sm max-w-3xl mb-7 neighbourtwoheaidngssparagraph">
//               {/* {item.description} */}
//             </p>

//             <div className="flex flex-wrap items-center gap-3 mb-10">
//               <button className="flex items-center gap-2 bg-[#a44294] hover:bg-[#4c278a] text-white px-5 py-3 rounded-[10px] font-medium text-sm transition-colors shadow-sm">
//                 <MapPin className="w-4 h-4 stroke-[2]" />
//                 <a
//                   href={item.googlePlaceId}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                 >
//                   <span>Get Directions</span>
//                 </a>
//               </button>

//               {item.contactInfo.primaryPhone && (
//                 <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#a44294] px-5 py-3 rounded-[10px] font-semibold text-sm transition-colors shadow-sm border border-transparent">
//                   <Phone className="w-4 h-4 stroke-[2.5] text-[#a44294]" />
//                   <a
//                     href={`tel:${item.contactInfo.primaryPhone}`}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span>Call Store</span>
//                   </a>
//                 </button>
//               )}

//               {item.contactInfo.website && (
//                 <button className="flex items-center gap-2 bg-white hover:bg-gray-50 text-[#a44294] px-5 py-3 rounded-[10px] font-semibold text-sm transition-colors shadow-sm border border-transparent">
//                   <Globe className="w-4 h-4 stroke-[2.5] text-[#a44294]" />
//                   <a
//                     href={
//                       item.contactInfo.website?.startsWith("http")
//                         ? item.contactInfo.website
//                         : `https://${item.contactInfo.website}`
//                     }
//                     target="_blank"
//                     rel="noopener noreferrer"
//                   >
//                     <span>Visit Website</span>
//                   </a>
//                 </button>
//               )}
//             </div>

//             <NeighbourhoodSearchBar
//               data={data}
//               locations={locations}
//               locationId={locationId}
//             />
//           </div>
//         </div>
//       </div>

//       <div className="max-w-7xl mx-auto px-4 py-8 space-y-10 pt-0 mt-[-50px] relative z-[0] pb-0">
//         <div className="w-full bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between px-6 py-4 gap-y-4 md:gap-y-0">
//           <div className="flex items-start gap-3 flex-1 min-w-[180px]">
//             <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
//               <MapPin className="w-5 h-5 text-[#5d32a8]" />
//             </div>
//             <div className="flex flex-col gap-0.5">
//               <span className="text-gray-400 text-xs font-medium tracking-wide">
//                 Location
//               </span>
//               <span className="text-[#1a2332] text-sm font-semibold leading-snug">
//                 {item?.locations?.locality || "Local Area"}, <br />{" "}
//                 {item?.locations?.city || ""}
//               </span>
//             </div>
//           </div>

//           <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

//           <div className="flex items-start gap-3 flex-1 min-w-[180px]">
//             <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
//               <MapIcon className="w-5 h-5 text-[#5d32a8]" />
//             </div>
//             <div className="flex flex-col gap-0.5">
//               <span className="text-gray-400 text-xs font-medium tracking-wide">
//                 Reviews
//               </span>
//               <span className="text-[#1a2332] text-sm font-semibold leading-snug">
//                 {item?.totalReviews ||
//                   item?.googleData?.totalGoogleReviews ||
//                   0}
//                 + Reviews
//               </span>
//             </div>
//           </div>

//           <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

//           <div className="flex items-start gap-3 flex-1 min-w-[180px]">
//             <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
//               <Tag className="w-5 h-5 text-[#5d32a8]" />
//             </div>
//             <div className="flex flex-col gap-0.5">
//               <span className="text-gray-400 text-xs font-medium tracking-wide">
//                 Category
//               </span>
//               <span className="text-[#1a2332] text-sm font-semibold leading-snug">
//                 {item?.category?.title}
//               </span>
//             </div>
//           </div>

//           <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

//           <div className="flex items-start gap-3 flex-1 min-w-[180px]">
//             <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
//               <IndianRupee className="w-5 h-5 text-[#5d32a8]" />
//             </div>
//             <div className="flex flex-col gap-0.5">
//               <span className="text-gray-400 text-xs font-medium tracking-wide">
//                 Pricing / Cost
//               </span>
//               <span className="text-[#1a2332] text-sm font-semibold leading-snug">
//                 {item?.priceInfo?.priceRange || ""}
//                 {item?.priceInfo?.averageCost || "N/A"}
//               </span>
//             </div>
//           </div>

//           <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

//           <div className="flex items-start gap-3 flex-1 min-w-[180px]">
//             <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
//               <Clock className="w-5 h-5 text-[#5d32a8]" />
//             </div>
//             <div className="flex flex-col gap-0.5">
//               <span className="text-gray-400 text-xs font-medium tracking-wide">
//                 Timing Block
//               </span>
//               <span className="text-[#1a2332] text-sm font-semibold leading-snug">
//                 {hoursConfig?.openTime || "Open 24 hrs"}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="p-4 md:p-8 flex justify-center items-start font-sans">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6  grid grid-cols-1 lg:grid-cols-12 gap-6">
//           {/* ================= LEFT COLUMN (Width: 7/12) ================= */}
//           <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-8">
//             <div>
//               <h2
//                 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]"
//                 style={{ width: "90%" }}
//               >
//                 About {item.title}
//               </h2>
//               <p className="mb-4  text-[#000]  neighbourtwoparagraph">
//                 {item.description}
//               </p>
//             </div>

//             <hr className="border-gray-100" />

//             <div>
//               <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//                 Highlights
//               </h2>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
//                 {item?.quickAccessHighlights &&
//                 item.quickAccessHighlights.length > 0
//                   ? item.quickAccessHighlights.map((hl) => (
//                       <div
//                         key={hl.id}
//                         className="flex items-start space-x-3 bg-gray-50/60 p-3 rounded-xl border border-gray-100"
//                       >
//                         <div className="p-2 bg-[#F5F3FF] text-[#a44294] rounded-lg flex-shrink-0">
//                           {hl?.icon?.url ? (
//                             <img
//                               src={`${API_BASE_URL_API_TEST_DEV}${hl.icon.url}`}
//                               alt=""
//                               className="w-[18px] h-[18px] object-contain"
//                             />
//                           ) : (
//                             <Layers size={18} />
//                           )}
//                         </div>
//                         <div>
//                           <h4 className="font-semibold text-gray-900 text-sm mb-0.5">
//                             {hl.title}
//                           </h4>
//                           <p className="text-xs text-gray-600 leading-normal">
//                             {hl.desc} {hl.sub && `• ${hl.sub}`}
//                           </p>
//                         </div>
//                       </div>
//                     ))
//                   : item?.serviceOptions?.map((opt) => (
//                       <div key={opt.id} className="flex items-center space-x-3">
//                         <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
//                           <Sparkles size={18} />
//                         </div>
//                         <span className="text-sm font-medium text-gray-800">
//                           {opt.label}
//                         </span>
//                       </div>
//                     ))}
//               </div>
//             </div>

//             <hr className="border-gray-100" />
//             {item?.subCategories && item.subCategories.length > 0 && (
//               <div>
//                 <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//                   Related Categories
//                 </h2>
//                 <div className="flex flex-wrap gap-2.5">
//                   {item.subCategories.map((s) => (
//                     <a
//                       href={`/neighbourhood/${locationId}/${item.category?.slug?.toLowerCase()}/${s.slug}`}
//                       key={s.id}
//                       className="inline-flex items-center bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium hover:bg-[#a44294] hover:text-white transition-colors"
//                     >
//                       <span className="neighbourtwoparagraph">{s.title}</span>
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             )}

//             <hr className="border-gray-100" />

//             <div>
//               <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//                 Timings
//               </h2>
//               <div className="inline-flex items-center space-x-4 bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium">
//                 <div className="flex items-center space-x-1.5 neighbourtwoparagraph">
//                   <Clock size={15} />
//                   <span className="text-[#000] neighbourtwoparagraph">
//                     {hoursConfig?.day || "Operating Hours"}
//                   </span>
//                 </div>
//                 <span className="text-gray-300">|</span>
//                 <span className="font-bold neighbourtwoparagraph text-[#000]">
//                   {formattedHours}{" "}
//                   {hoursConfig?.isClosed && "(Closed on Holidays)"}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* ================= RIGHT COLUMN (Width: 5/12) ================= */}
//           <div className="lg:col-span-5 space-y-6">
//             {/* Location Block */}
//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//               <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//                 Location
//               </h2>
//               <div className="relative w-full h-[240px] bg-[#E8ECEF] rounded-xl overflow-hidden border border-gray-200">
//                 <iframe
//                   src={`https://www.google.com/maps?q=${item.location.latitude},${item.location.longitude}&z=15&output=embed`}
//                   width="100%"
//                   height="270"
//                   style={{
//                     border: "0",
//                     borderRadius: "8px",
//                   }}
//                   allowFullScreen=""
//                   loading="lazy"
//                   referrerPolicy="no-referrer-when-downgrade"
//                 ></iframe>
//               </div>
//             </div>

//             <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
//               <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//                 Nearby & Transport Access
//               </h2>
//               <div className="space-y-5">
//                 {item?.locations?.quickAccess &&
//                 item.locations.quickAccess.length > 0 ? (
//                   item.locations.quickAccess.map((qa) => (
//                     <div
//                       key={qa.id}
//                       className="flex items-start space-x-4 bg-gray-50/50 p-3 rounded-xl"
//                     >
//                       <div className="p-2.5 bg-white text-[#a44294] rounded-xl shadow-sm mt-0.5 border border-gray-100">
//                         {qa?.icon?.url ? (
//                           <img
//                             src={`${API_BASE_URL_API_TEST_DEV}${qa.icon.url}`}
//                             alt=""
//                             className="w-[18px] h-[18px] object-contain"
//                           />
//                         ) : (
//                           <Milestone size={18} />
//                         )}
//                       </div>
//                       <div>
//                         <h4 className="font-semibold text-[#000] text-sm neighbourtwoparagraph mb-0.5">
//                           {qa.label}
//                         </h4>
//                         <p className="text-sm font-bold text-[#a44294]">
//                           {qa.name}
//                         </p>
//                         <p className="text-xs text-gray-500">{qa.detail}</p>
//                       </div>
//                     </div>
//                   ))
//                 ) : (
//                   <div className="text-gray-400 text-xs italic">
//                     Transit details unavailable.
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/*#################### DYNAMIC PMS GALLERY ########### */}
//       {galleryImages.length > 0 && (
//         <div className="max-w-7xl mx-auto px-4 sm:px-6">
//           <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
//             <div className="flex justify-between items-center mb-4">
//               <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//                 Store Gallery
//               </h2>
//               <button
//                 onClick={() => setIsModalOpen(true)}
//                 className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors"
//               >
//                 View All Photos <ArrowRight size={16} />
//               </button>
//             </div>

//             <div className="flex gap-4 pb-2 flex-wrap">
//               {galleryImages.map((img, idx) => (
//                 <div
//                   key={idx}
//                   onClick={() => {
//                     setCurrentImageIndex(idx);
//                     setIsModalOpen(true);
//                   }}
//                   className="min-w-[200px] md:min-w-[200px] flex-1 snap-start group overflow-hidden rounded-xl cursor-pointer"
//                 >
//                   <img
//                     src={img.url}
//                     alt={img.alt}
//                     className="w-full h-40 object-cover rounded-xl border border-gray-100 transition-transform duration-300 ease-out group-hover:scale-110"
//                   />
//                   {img.caption && (
//                     <p className="text-xs text-gray-500 mt-1 px-1 italic">
//                       {img.caption}
//                     </p>
//                   )}
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       )}

//       {/*#################### need add from pms side  ########### */}

//       <div
//         className="max-w-7xl mx-auto px-4 sm:px-6"
//         style={{ paddingBottom: "50px" }}
//       >
//         <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
//           <div className="flex justify-between items-center mb-4">
//             <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
//               Explore More Shopping in T Nagar
//             </h2>
//             <button className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors">
//               View All <ArrowRight size={16} />
//             </button>
//           </div>

//           <div className="flex gap-4 flex-wrap pb-2 neighhhcradsssssjddddd">
//             {console.log("relatedItemsnewwww", relatedItems)}
//             {relatedItems.map((store) => (
//               <a
//                 className="cradsssssjddddd"
//                 href={`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${store.slug}`}
//               >
//                 <div
//                   key={store.id}
//                   className=" flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between snap-start group cursor-pointer hover:shadow-md transition-shadow duration-200"
//                 >
//                   <div className="relative h-50 w-full overflow-hidden bg-gray-100">
//                     <img
//                       src={`${API_BASE_URL_API_TEST_DEV}${store.heroImage.thumbnailURL}`}
//                       alt={store.name}
//                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                     />
//                   </div>

//                   <div className="p-4 flex flex-col flex-grow justify-between">
//                     <div>
//                       <h3 className="font-bold text-gray-900 text-base mb-1">
//                         {store.name}
//                       </h3>
//                       <p className="mb-2 text-[#000] neighbourtwoparagraph  ">
//                         {store.description.slice(0, 50)}....
//                       </p>
//                     </div>

//                     <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-50">
//                       <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
//                         <span className="flex items-center gap-1 text-amber-500">
//                           <StarIcon />
//                           <span className="text-[#000] neighbourtwoparagraph">
//                             {store.googleData.totalGoogleReviews}
//                           </span>
//                         </span>
//                         <span className="flex items-center gap-1 text-amber-500">
//                           <MapPinIcon className="w-3 h-3" />
//                           <span className="text-[#000] neighbourtwoparagraph">
//                             {store.locations.city}
//                           </span>
//                         </span>
//                       </div>

//                       <button className="p-2 bg-purple-100 text-purple-700 rounded-full group-hover:bg-[#a44294] group-hover:text-white transition-colors duration-200">
//                         <ArrowRight size={16} />
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </a>
//             ))}
//           </div>
//         </section>

//         <ProperitiesNeighbourhood />
//       </div>

//       {/* #################### FULL-VIEW SLIDER GALLERY MODAL #################### */}
//       {isModalOpen && galleryImages.length > 0 && (
//         <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex flex-col items-center justify-center p-4">
//           {/* Close Button */}
//           <button
//             onClick={() => setIsModalOpen(false)}
//             className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors duration-200"
//             aria-label="Close modal"
//           >
//             <X size={24} />
//           </button>

//           {/* Slider Container Block */}
//           <div className="relative w-full max-w-5xl aspect-[16/10] flex items-center justify-center px-4">
//             {/* Custom Left Arrow Button */}
//             <button
//               onClick={handlePrevSlide}
//               className="absolute left-2 md:left-6 z-10 p-3 bg-white/10 hover:bg-[#a44294] text-white rounded-full border border-white/10 transition-all duration-200 focus:outline-none"
//               aria-label="Previous image"
//             >
//               <ChevronLeft size={28} />
//             </button>

//             {/* Current Large View Image */}
//             <div className="w-full h-full flex items-center justify-center select-none">
//               <img
//                 src={galleryImages[currentImageIndex].url}
//                 alt={galleryImages[currentImageIndex].alt}
//                 className="max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-300"
//               />
//             </div>

//             {/* Custom Right Arrow Button */}
//             <button
//               onClick={handleNextSlide}
//               className="absolute right-2 md:right-6 z-10 p-3 bg-white/10 hover:bg-[#a44294] text-white rounded-full border border-white/10 transition-all duration-200 focus:outline-none"
//               aria-label="Next image"
//             >
//               <ChevronRight size={28} />
//             </button>
//           </div>

//           {/* Image Captions & Index Tracker */}
//           <div className="mt-4 text-center text-white/80 max-w-xl px-4">
//             <p className="text-sm font-medium tracking-wide">
//               {galleryImages[currentImageIndex].caption ||
//                 galleryImages[currentImageIndex].alt}
//             </p>
//             <span className="text-xs text-white/40 block mt-1">
//               {currentImageIndex + 1} / {galleryImages.length}
//             </span>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
