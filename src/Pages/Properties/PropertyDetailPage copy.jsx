// import { Bath, Bed, Building2, Car, Download, Phone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import { PropertyContent } from "./Components/Properties/ritchText";
import { useProperty } from "./hooks/useProperties";
import {
  Download,
  ArrowRight,
  BatteryCharging,
  Dumbbell,
  Building,
  Building2,
  Shield,
  Trees,
  Bed,
  Bath,
  Car,
  Phone,
  // Amenity,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./Styles/PropertyDetailPage.css";

const PropertyDetailPage = () => {
  const { id, slug } = useParams();
  const { property, loading } = useProperty({ id, slug });
  console.log("property", property);

  // const API_BASE_URL =
  //   window.location.hostname === "localhost"
  //     ? "http://localhost:3000"
  //     : "https://demo.superchennai.com/api";

  const API_BASE_URL = "https://demo.superchennai.com";

  if (loading) return <div className="loader">Loading property details...</div>;
  if (!property) return <p className="not-found">❌ Property not found</p>;

  const getImageUrl = (imgObj) => {
    if (!imgObj) return "/placeholder.jpg";
    const url = imgObj.url || imgObj.image?.url;
    if (!url) return "/placeholder.jpg";
    if (url.startsWith("http")) return url;
    return `${API_BASE_URL}${url}`;
  };

  // DATA NULL HANDLING DA
  const title = property?.title || "Untitled Property";
  const location = property?.location?.label || "N/A";
  const price = property?.price
    ? `₹${property.price.toLocaleString()}`
    : "Price on Request";
  const bhk = property?.bhk?.label || "-";
  const bathrooms = property?.washrooms ?? "-";
  const balconies = property?.balconies ?? "-";
  const furnishing = property?.furnishing || "Not specified";
  const transactionType = property?.transactionType || "N/A";
  const status =
    property?.society?.possessionStatus === "under"
      ? "Under Construction"
      : "Ready to Move";
  const area = property?.area ? `${property.area} sqft` : "Area not available";
  const pricePerSqft = property?.pricePerSqft
    ? `₹${property.pricePerSqft.toLocaleString()}/sqft`
    : "N/A";
  const heroImage = getImageUrl(property?.heroImage);
  const builderName = property?.society?.name || "N/A";

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

      <div className="relative w-full h-[240px] overflow-hidden  accaodomationBannerSection">
        {/* Background Image */}
        <img
          src={getImageUrl(property.heroImage)}
          alt={property.title}
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/10 to-transparent" />

        {/* Content */}
        <div className="relative z-10 flex items-center h-full px-6 sm:px-12 accodoamationBannerContainer">
          <div className="max-w-xl text-left accodoamationBannerText">
            <h3 className="text-white text-3xl sm:text-4xl  mb-2">
              {property.title}
            </h3>

            <div className="flex flex-wrap items-center text-sm text-gray-200 breadCrum">
              <Link
                to="/live-in-chennai"
                className="hover:text-white hover:underline"
              >
                Home
              </Link>
              <span className="mx-2 text-gray-400">-</span>
              <Link
                to="/live-in-chennai"
                className="hover:text-white hover:underline"
              >
                {property.title}
              </Link>
              <span className="mx-2 text-gray-400">-</span>
              <a href="#" className="hover:text-white hover:underline">
                {property.location?.label}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-6 m-15">
        {/* Header */}
        <div className="flex items-center justify-between mb-3">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">{price}</h2>
            <p className="text-sm text-gray-500">
              EMI - ₹87k ·{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Get pre-approved loan
              </a>
            </p>
          </div>

          <div className="flex gap-2">
            <span className="text-xs font-medium px-2 py-1 border border-green-500 text-green-600 rounded-full">
              ZERO BROKERAGE
            </span>
            <span className="text-xs font-medium px-2 py-1 border border-yellow-500 text-yellow-600 rounded-full">
              PREMIUM PROJECT
            </span>
          </div>
        </div>
        <p className="text-gray-700 text-sm mb-4">
          {bhk} For Sale in{" "}
          <span className="font-semibold text-gray-900">{title}</span>,{" "}
          {location}
        </p>

        {/* Images Section */}
        <div className="grid grid-cols-3 gap-2 mb-3">
          <div className="col-span-2">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-60 object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            {(property?.images || []).slice(0, 3).map((img, i) => (
              <img
                key={i}
                src={getImageUrl(img?.image)}
                alt=""
                className="w-full h-[73px] object-cover rounded-lg"
              />
            ))}
          </div>
        </div>

        {/* Summary Badges */}
        <div className="flex flex-wrap gap-3 bg-gray-50 rounded-lg p-2 mb-4">
          <div className="flex items-center gap-1 text-gray-700 text-sm">
            <Bed size={16} /> {property?.bedrooms ?? "-"} Beds
          </div>
          <div className="flex items-center gap-1 text-gray-700 text-sm">
            <Bath size={16} /> {bathrooms} Baths
          </div>
          <div className="flex items-center gap-1 text-gray-700 text-sm">
            <Car size={16} /> {property?.parking ?? "N/A"}
          </div>
          <div className="flex items-center gap-1 text-gray-700 text-sm">
            <Building2 size={16} /> {furnishing}
          </div>
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
              {transactionType}
            </p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Status</p>
            <p className="font-semibold text-gray-800">{status}</p>
          </div>
          <div>
            <p className="text-xs text-gray-500">Furnished Status</p>
            <p className="font-semibold text-gray-800">{furnishing}</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-start gap-4 pt-3 border-t border-gray-200">
          <button
            className="text-white font-medium px-4 py-2 rounded-full transition-all flex items-center gap-1"
            style={{ backgroundColor: "#a34493" }}
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
              src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=200"
              alt="Project"
              className="w-28 h-28 object-cover rounded-xl border"
            />

            {/* Details */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-between flex-1">
              <div>
                <h3 className="font-semibold text-gray-800 text-lg">
                  Malo Armonique
                </h3>
                <p className="text-gray-500 text-sm">
                  by MGP Builders and Developers Private Limited
                </p>
              </div>

              <div className="mt-3 sm:mt-0">
                <p className="text-gray-500 text-sm">Price</p>
                <p className="font-semibold text-gray-800 text-lg">
                  ₹2.50 Cr Onwards
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-5 text-sm">
            <div>
              <p className="text-gray-500">Price per sqft</p>
              <p className="font-semibold text-gray-800">₹10,942 - ₹16,833</p>
            </div>
            <div>
              <p className="text-gray-500">Configuration</p>
              <p className="font-semibold text-gray-800">3, 4 BHK Villas</p>
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

        {/* Amenities Section */}
        <div className="border border-gray-200 rounded-xl p-5">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">
            Amenities
          </h2>

          {/* Amenity Icons */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm">
            <Amenity
              icon={<BatteryCharging size={18} />}
              label="Power Back Up"
            />
            <Amenity icon={<Building size={18} />} label="Club House" />
            <Amenity icon={<Dumbbell size={18} />} label="Gymnasium" />
            <Amenity icon={<Trees size={18} />} label="Park" />
            <Amenity icon={<Car size={18} />} label="Reserved Parking" />
            <Amenity icon={<Shield size={18} />} label="Security" />
          </div> */}

          {/* Links */}
          <div className="flex flex-wrap items-center justify-between mt-5 text-sm">
            <a href="#" className="text-red-600 font-medium hover:underline">
              View all Amenities (11)
            </a>
            <a
              href="#"
              className="flex items-center text-gray-700 hover:text-red-600 font-medium"
            >
              <Download size={16} className="mr-1" /> Download Brochure
            </a>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4">
        <div className="property-detail">
          {/* Hero Image */}
          <div className="property-hero">
            <img src={getImageUrl(property.heroImage)} alt={property.title} />
            <div className="overlay">
              <h1>{property.title}</h1>
              <p className="location">{property.location?.label}</p>
            </div>
          </div>

          {/* Property Info */}
          <div className="property-info container">
            <div className="basic-infoProperty">
              <img
                className="proeprtyPageImage"
                src="https://www.superchennai.com/images/HomePage-Images/Events/Newevents/313.jpg"
              />

              <div className="info-grid">
                <div className="info-item">
                  <h4>BHK : {""}</h4>
                  <p>
                    {""}
                    {property.bhk?.label || "N/A"}
                  </p>
                </div>
                <div className="info-item">
                  <h4>Area :</h4>
                  <p>{property.area ? `${property.area} sq ft` : "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Price :</h4>
                  <p className="price">
                    {property.price
                      ? `₹${property.price.toLocaleString()}`
                      : "On Request"}
                  </p>
                </div>
                <div className="info-item">
                  <h4>Location :</h4>
                  <p>{property.location?.label || "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Property Type :</h4>
                  <p>{property.propertyType?.value || "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Transaction Type :</h4>
                  <p>{property.transactionType?.value || "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Furnishing :</h4>
                  <p>{property.furnishing?.value || "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Floor :</h4>
                  <p>{property.floor || "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Facing Direction :</h4>
                  <p>{property.facingDirection || "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Parking :</h4>
                  <p>{property.parking || "N/A"}</p>
                </div>
                <div className="info-item">
                  <h4>Power Backup :</h4>
                  <p>{property.powerBackup ? "Yes" : "No"}</p>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="description">
              <h2>About this property</h2>
              <PropertyContent content={property.content} />
            </div>

            {/* Society / Project Details */}

            {property.society && (
              <div className="society-details">
                <h2>Society / Project Details</h2>
                <div className="society-infoDiv">
                  <p>
                    <strong>Name :</strong> {property.society.name}
                  </p>
                  <p>
                    <strong>Builder :</strong> {property.society.builder}
                  </p>
                  <p>
                    <strong>Total Units :</strong> {property.society.totalUnits}
                  </p>
                  <p>
                    <strong>Possession Status :</strong>{" "}
                    {property.society.possessionStatus}
                  </p>
                </div>
              </div>
            )}

            {/* Amenities */}
            {property.amenities?.length > 0 && (
              <div className="amenities">
                <h2>Amenities</h2>
                <ul>
                  {property.amenities.map((a) => (
                    <li key={a.id}>{a.label}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bathroom Features */}
            {property.bathroomFeatures && (
              <div className="bathroom-features">
                <h2>Bathroom Features</h2>

                <div className="society-infoDiv">
                  <p>
                    {" "}
                    <strong>Bathtubs : </strong>{" "}
                    {property.bathroomFeatures.bathtubs || 0}
                  </p>
                  <p>
                    <strong>Jacuzzi :</strong>

                    {property.bathroomFeatures.jacuzzi ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Heated Flooring : </strong>

                    {property.bathroomFeatures.heatedFlooring ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            )}

            {/* Building Amenities */}
            {property.buildingAmenities && (
              <div className="building-amenities">
                <h2>Building Amenities</h2>
                <div className="society-infoDiv">
                  {Object.entries(property.buildingAmenities).map(
                    ([key, value]) => (
                      <p key={key}>
                        <strong>{key.replace(/([A-Z])/g, " $1")} :</strong>{" "}
                        {value ? "Yes" : "No"}
                      </p>
                    )
                  )}
                </div>
              </div>
            )}

            {/* Appliances */}
            {property.appliances && (
              <div className="appliances">
                <h2>Appliances</h2>

                <div className="society-infoDiv">
                  {Object.entries(property.appliances).map(([key, value]) => (
                    <p key={key}>
                      <strong>{key.replace(/([A-Z])/g, " $1")} :</strong>{" "}
                      {typeof value === "boolean"
                        ? value
                          ? "Yes"
                          : "No"
                        : value}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {/* Rent Details */}
            {property.rentDetails && (
              <div className="rent-details">
                <h2>Rent Details</h2>

                <div className="society-infoDiv">
                  <p>
                    <strong> Monthly Rent : </strong>₹
                    {property.rentDetails.monthlyRent?.toLocaleString() ||
                      "N/A"}
                  </p>
                  <p>
                    <strong>Security Deposit : </strong>₹
                    {property.rentDetails.securityDeposit?.toLocaleString() ||
                      "N/A"}
                  </p>
                  <p>
                    <strong> Maintenance Included : </strong>

                    {property.rentDetails.maintenanceIncluded ? "Yes" : "No"}
                  </p>
                  <p>
                    <strong>Preferred Tenants : </strong>

                    {property.rentDetails.preferredTenants?.join(", ") || "N/A"}
                  </p>
                </div>
              </div>
            )}

            {/* Nearby Places */}
            {property.nearby?.length > 0 && (
              <div className="nearby-places">
                <h2>Nearby Places</h2>
                <ul>
                  {property.nearby.map((place) => (
                    <li key={place.id}>
                      {place.place} - {place.distance}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Semi Rooms */}
            {property.semiRooms && (
              <div className="semi-rooms">
                <h2>Semi Rooms</h2>
                <div className="society-infoDiv">
                  <p>
                    Study Room: {property.semiRooms.studyRoom ? "Yes" : "No"}
                  </p>
                  <p>
                    Servant Room:{" "}
                    {property.semiRooms.servantRoom ? "Yes" : "No"}
                  </p>
                  <p>
                    Pooja Room: {property.semiRooms.poojaRoom ? "Yes" : "No"}
                  </p>
                  <p>
                    Store Room: {property.semiRooms.storeRoom ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            )}

            {/* Parking Details */}
            {property.parkingOutdoor && (
              <div className="parking-details">
                <h2>Parking Details</h2>

                <div className="society-infoDiv">
                  <p>
                    Covered Parking:{" "}
                    {property.parkingOutdoor.coveredParking || 0}
                  </p>
                  <p>
                    Open Parking: {property.parkingOutdoor.openParking || 0}
                  </p>
                  <p>
                    Visitor Parking:{" "}
                    {property.parkingOutdoor.visitorParking ? "Yes" : "No"}
                  </p>
                  <p>
                    EV Charging:{" "}
                    {property.parkingOutdoor.evCharging ? "Yes" : "No"}
                  </p>
                </div>
              </div>
            )}

            {/* Plot / Dimensions */}
            <div className="plot-details">
              <h2>Plot / Building Details</h2>

              <div className="society-infoDiv">
                <p>Plot Area: {property.plotArea || "N/A"} sq ft</p>
                <p>Length: {property.dimensions?.length || "N/A"} ft</p>
                <p>Width: {property.dimensions?.width || "N/A"} ft</p>
                <p>Road Width: {property.roadWidth || "N/A"} ft</p>
                <p>Corner Plot: {property.cornerPlot ? "Yes" : "No"}</p>
              </div>
            </div>

            {/* Interiors */}
            {property.interiors && (
              <div className="interiors">
                <h2>Interiors</h2>

                <div className="society-infoDiv">
                  <p>Wardrobes: {property.interiors.wardrobes || 0}</p>
                  <p>Curtains: {property.interiors.curtains ? "Yes" : "No"}</p>
                  <p>
                    Modular Kitchen:{" "}
                    {property.interiors.modularKitchen ? "Yes" : "No"}
                  </p>
                  <p>Chimney: {property.interiors.chimney ? "Yes" : "No"}</p>
                  <p>
                    False Ceiling:{" "}
                    {property.interiors.falseCeiling ? "Yes" : "No"}
                  </p>
                  <p>Lighting: {property.interiors.lighting || "N/A"}</p>
                </div>
              </div>
            )}

            {property.greenFeatures?.length > 0 && (
              <div className="green-features">
                <h2>Green Features</h2>
                <ul>
                  {property.greenFeatures.map((feature, index) => (
                    <li key={feature.id || index}>
                      {feature.label ||
                        feature.feature ||
                        JSON.stringify(feature)}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Financial Info */}
            <div className="financial-details">
              <h2>Financial Details</h2>

              <div className="society-infoDiv">
                <p>
                  Maintenance Charges: ₹
                  {property.maintenanceCharges?.toLocaleString() || "N/A"}
                </p>
                <p>
                  Booking Amount: ₹
                  {property.bookingAmount?.toLocaleString() || "N/A"}
                </p>
                <p>Negotiable: {property.negotiable ? "Yes" : "No"}</p>
              </div>
            </div>

            {/* FAQ */}
            {property.faq?.length > 0 && (
              <div className="faq-section">
                <h2>FAQs</h2>
                {property.faq.map((f) => (
                  <div key={f.id} className="faq-item">
                    <p>
                      <strong>Q:</strong> {f.question}
                    </p>
                    <p>
                      <strong>A:</strong> {f.answer}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Map */}
            {property.mapView && (
              <div className="map-view">
                <h2>Location Map</h2>
                <iframe
                  src={property.mapView.mapEmbed}
                  width="100%"
                  height="400"
                  title="Property Map"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyDetailPage;
