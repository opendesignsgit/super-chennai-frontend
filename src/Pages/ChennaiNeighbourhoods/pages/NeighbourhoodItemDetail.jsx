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
  const galleryImages =
    item?.gallery?.map((g) => API_BASE_URL_API_TEST_DEV + g.image.url) || [];

  console.log("data EDUTHUKO ", item);

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
      // CHANGED: Using MapIcon here
      icon: <MapIcon className="w-5 h-5 text-[#5d32a8]" />,
      label: "Distance",
      value: "0.4 km from T Nagar Metro",
    },
    {
      id: 3,
      icon: <Tag className="w-5 h-5 text-[#5d32a8]" />,
      label: "Category",
      value: "Shopping • Clothing",
    },
    {
      id: 4,
      icon: <IndianRupee className="w-5 h-5 text-[#5d32a8]" />,
      label: "Price Range",
      value: "₹₹ Affordable",
    },
    {
      id: 5,
      icon: <Clock className="w-5 h-5 text-[#5d32a8]" />,
      label: "Best Time to Visit",
      value: "10:00 AM - 9:30 PM",
    },
  ];

  const exploreStores = [
    {
      id: 1,
      name: "Pothys",
      description: "Iconic family shopping store",
      rating: 4.6,
      distance: "0.4 km",
      // Indian Ethnic Wear / Saree theme
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 2,
      name: "Chennai Silks",
      description: "Premium ethnic wear collection",
      rating: 4.5,
      distance: "0.6 km",
      // Traditional Kanchipuram Silk texture vibe
      image:
        "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 3,
      name: "Saravana Stores",
      description: "One stop shop for all needs",
      rating: 4.4,
      distance: "0.8 km",
      // Mega store / Retail jewelry & clothing vibe
      image:
        "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 4,
      name: "Nalli Silks",
      description: "Finest silks, Timeless tradition.",
      rating: 4.6,
      distance: "0.5 km",
      // Premium Boutique Heritage Silk drape
      image:
        "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=500&q=80",
    },
    {
      id: 5,
      name: "Vivek & Co.",
      description: "Quality textiles since generations",
      rating: 4.3,
      distance: "0.3 km",
      // Showroom setup / apparel layout
      image:
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=500&q=80",
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

  const galleryImagesneww = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80",
      alt: "Store interior 1 - Premium apparel racks",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=500&q=80",
      alt: "Store interior 2 - Ethnic wear display",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80",
      alt: "Fancy World section - Modern clothing setup",
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&w=500&q=80",
      alt: "Store interior 4 - Showroom mannequins",
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=500&q=80",
      alt: "Store interior 5 - Designer collections",
    },
  ];

  return (
    <div id="poppinsssFamily">
      <div className="relative h-[600px] flex flex-col justify-center pb-10 px-8 overflow-hidden">
        {/* 1. Background Image Tag */}
        <img
          src={`${API_BASE_URL_API_TEST_DEV}${item.FeaturedImage.url}`}
          alt={item.title || "Neighbourhood Banner"}
          className="absolute inset-0 w-full h-full object-cover object-center pointer-events-none"
        />

        {/* 2. Gradient Overlay (Text clear ah theriyarathukaga) */}
        <div
          className="absolute inset-0 mix-blend-multiply pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,5,30,0.5) 0%, rgba(10,5,30,0.75) 60%, rgba(10,5,30,0.92) 100%)",
          }}
        />

        {/* Content Container */}
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
            <div className="mb-3">
              <a className="bg-[#a44294] hover:bg-[#a44294] text-white font-semibold px-5 py-2 rounded-[5px] text-sm transition-colors cursor-pointer">
                Popular Store
              </a>
            </div>
            <h1 className="text-3xl text-[#fff] sm:text-4xl font-semibold leading-tight mb-4">
              {item.title}
            </h1>
            <p className="text-gray-300 text-sm max-w-3xl mb-7 neighbourtwoheaidngssparagraph">
              {item.description}
            </p>

            <div className="flex flex-wrap items-center gap-3 mb-10">
              {/* 1. Get Directions Button */}
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

              {/* 2. Call Store Button */}
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

              {/* 3. Visit Website Button */}
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
          {/* 1. Location */}
          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Location
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item.locations.city}, <br /> {item.locations.pincode}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          {/* 2. Distance */}
          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <MapIcon className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Distance
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                Static Data
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          {/* 3. Category */}
          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <Tag className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Category
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                {item.category.title}
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          {/* 4. Price Range */}
          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <IndianRupee className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Price Range
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                Static
              </span>
            </div>
          </div>

          {/* Divider */}
          <div className="hidden md:block h-10 w-[1px] bg-gray-200/80 mx-2" />

          {/* 5. Best Time to Visit */}
          <div className="flex items-start gap-3 flex-1 min-w-[180px]">
            <div className="p-2.5 bg-[#f3e9ff] rounded-2xl flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-[#5d32a8]" />
            </div>
            <div className="flex flex-col gap-0.5">
              <span className="text-gray-400 text-xs font-medium tracking-wide">
                Best Time to Visit
              </span>
              <span className="text-[#1a2332] text-sm font-semibold leading-snug">
                10:00 AM - 9:30 PM
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 md:p-8 flex justify-center items-start font-sans">
        {/* Main Grid Wrapper */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6  grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* ================= LEFT COLUMN (Width: 7/12) ================= */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-8">
            {/* About Section */}
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

            {/* Highlights Section */}
            <div>
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-5">
                {/* Highlight Item 1 */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                    <Layers size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Wide Variety
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static
                    </p>
                  </div>
                </div>
                {/* Highlight Item 2 */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                    <DollarSign size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Affordable
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static
                    </p>
                  </div>
                </div>
                {/* Highlight Item 3 */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                    <Sparkles size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Trendy & Latest
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static
                    </p>
                  </div>
                </div>
                {/* Highlight Item 4 */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                    <Users size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Helpful
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static
                    </p>
                  </div>
                </div>
                {/* Highlight Item 5 */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                    <RefreshCw size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Easy
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static
                    </p>
                  </div>
                </div>
                {/* Highlight Item 6 */}
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl">
                    <UsersRound size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Crowded on
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Amenities Section */}
            <div>
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Related Category
              </h2>
              <div className="flex flex-wrap gap-2.5">
                {item.subCategories.map((s) => (
                  <a
                    href={`/neighbourhood/${locationId}/${item.category?.title?.toLowerCase()}/${s.slug}`}
                    key={s.id}
                    className="inline-flex items-center space-x-4 bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium"
                  >
                    <span className="text-[#000] neighbourtwoparagraph">
                      {s.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Timings Section */}
            <div>
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Timings
              </h2>
              <div className="inline-flex items-center space-x-4 bg-[#F5F3FF] text-[#a44294] px-4 py-2.5 rounded-full text-xs font-medium">
                <div className="flex items-center space-x-1.5 neighbourtwoparagraph">
                  <Clock size={15} />
                  <span className="text-[#000] neighbourtwoparagraph">
                    Monday - Sunday
                  </span>
                </div>
                <span className="text-gray-300">|</span>
                <span className="font-bold neighbourtwoparagraph text-[#000]">
                  10:00 AM - 9:30 PM
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

              {/* Simulated Map Container */}
              <div className="relative w-full h-[240px] bg-[#E8ECEF] rounded-xl overflow-hidden border border-gray-200">
                {/* Map Background Concept image */}

                <iframe
                  src={`https://www.google.com/maps?q=${item.location.latitude},${item.location.longitude}&z=15&output=embed`}
                  width="100%" /* Card kulla correct-ah fit aaga 100% use pannunga */
                  height="270" /* Unga UI design padi height-ah adjust panniruken */
                  style={{
                    border: "0",
                    borderRadius: "8px",
                  }} /* Responsive corners-kaga */
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* Getting There Block */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
                Getting There
              </h2>

              <div className="space-y-5">
                {/* Route 1: Metro */}
                <div className="flex items-start space-x-4 mb-1">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl mt-0.5">
                    <Train size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Metro
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static Data
                    </p>
                  </div>
                </div>

                {/* Route 2: Bus Stop */}
                <div className="flex items-start space-x-4 mb-1">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl mt-0.5">
                    <Bus size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Bus Stop
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      {item.locations.city}
                    </p>
                  </div>
                </div>

                {/* Route 3: Landmark */}
                <div className="flex items-start space-x-4 mb-1">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl mt-0.5">
                    <Milestone size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Landmark
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static Data
                    </p>
                  </div>
                </div>

                {/* Route 4: Parking */}
                <div className="flex items-start space-x-4 mb-1">
                  <div className="p-2.5 bg-[#F5F3FF] text-[#a44294] rounded-xl mt-0.5">
                    <ParkingSquare size={18} />
                  </div>
                  <div>
                    <h4 className="!font-semibold text-[#000] neighbourtwoparagraph mb-1">
                      Parking
                    </h4>
                    <p className="mb-4  text-[#000]  neighbourtwoparagraph">
                      Static Data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <section className="bg-white rounded-2xl border border-gray-100 p-6 mb-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
              Store Gallery This is Static Currently Using the Related Image
              Gllaery
            </h2>
            <button className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors">
              View All Photos <ArrowRight size={16} />
            </button>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="flex gap-4 pb-2 flex-wrap">
            {relatedItems.map((img) => (
              <div
                key={img.id}
                className="min-w-[200px] md:min-w-[200px] flex-1 snap-start group overflow-hidden rounded-xl cursor-pointer"
              >
                <img
                  src={`${API_BASE_URL_API_TEST_DEV}${img.heroImage.thumbnailURL}`}
                  alt={img.name}
                  className="w-full h-40 object-cover rounded-xl border border-gray-100 transition-transform duration-300 ease-out group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </section>
      </div>
      <div
        className="max-w-7xl mx-auto px-4 sm:px-6"
        style={{ paddingBottom: "50px" }}
      >
        <section className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-[#a44294] !font-semibold mb-3 neighbourtwoparagraph !text-[18px]">
              Explore More Shopping in T Nagar
            </h2>
            <button className="flex items-center gap-1 text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors">
              View All <ArrowRight size={16} />
            </button>
          </div>

          {/* Horizontal Scrollable Container */}
          <div className="flex gap-4 flex-wrap pb-2 neighhhcradsssssjddddd">
            {console.log("relatedItemsnewwww", relatedItems)}
            {relatedItems.map((store) => (
              <a
                className="cradsssssjddddd"
                href={`/neighbourhood/${locationId}/${safeCategory}/${safeSubcategory}/${store.slug}`}
              >
                <div
                  key={store.id}
                  className=" flex-1 bg-white rounded-2xl border border-gray-200 overflow-hidden flex flex-col justify-between snap-start group cursor-pointer hover:shadow-md transition-shadow duration-200"
                >
                  {/* Store Image */}
                  <div className="relative h-50 w-full overflow-hidden bg-gray-100">
                    <img
                      src={`${API_BASE_URL_API_TEST_DEV}${store.heroImage.thumbnailURL}`}
                      alt={store.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Store Details */}
                  <div className="p-4 flex flex-col flex-grow justify-between">
                    <div>
                      <h3 className="font-bold text-gray-900 text-base mb-1">
                        {store.name}
                      </h3>
                      <p className="mb-2 text-[#000] neighbourtwoparagraph  ">
                        {store.description.slice(0, 50)}....
                      </p>
                    </div>

                    {/* Footer row with metrics and action button */}
                    <div className="flex justify-between items-center mt-auto pt-2 border-t border-gray-50">
                      <div className="flex items-center gap-2 text-xs font-medium text-gray-600">
                        <span className="flex items-center gap-1 text-amber-500">
                          <StarIcon />
                          <span className="text-[#000] neighbourtwoparagraph">
                            {store.googleData.totalGoogleReviews}
                          </span>
                        </span>
                        <span className="flex items-center gap-1 text-amber-500">
                          <MapPinIcon className="w-3 h-3" />
                          <span className="text-[#000] neighbourtwoparagraph">
                            {store.locations.city}
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
    </div>
  );
}
