import React from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useProperty } from "./hooks/useProperties";
import { PropertyContent } from "./Components/Properties/ritchText";

import "./Styles/PropertyDetailPage.css";

const PropertyDetailPage = () => {
  const { id, slug } = useParams();
  const { property, loading } = useProperty({ id, slug });

  // const API_BASE_URL =
  //   window.location.hostname === "localhost"
  //     ? "http://localhost:3000"
  //     : "https://demo.superchennai.com/api";

  const API_BASE_URL = "https://demo.superchennai.com/api";

  if (loading) return <div className="loader">Loading property details...</div>;
  if (!property) return <p className="not-found">❌ Property not found</p>;

  
  const getImageUrl = (imgObj) => {
    if (!imgObj) return "/placeholder.jpg";
    const url = imgObj.url || imgObj.image?.url;
    if (!url) return "/placeholder.jpg";
    if (url.startsWith("http")) return url;
    return `${API_BASE_URL}${url}`;
  };
  

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
          <div className="info-grid">
            <div className="info-item">
              <h4>BHK</h4>
              <p>{property.bhk?.label || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Area</h4>
              <p>{property.area ? `${property.area} sq ft` : "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Price</h4>
              <p className="price">
                {property.price
                  ? `₹${property.price.toLocaleString()}`
                  : "On Request"}
              </p>
            </div>
            <div className="info-item">
              <h4>Location</h4>
              <p>{property.location?.label || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Property Type</h4>
              <p>{property.propertyType?.value || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Transaction Type</h4>
              <p>{property.transactionType?.value || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Furnishing</h4>
              <p>{property.furnishing?.value || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Floor</h4>
              <p>{property.floor || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Facing Direction</h4>
              <p>{property.facingDirection || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Parking</h4>
              <p>{property.parking || "N/A"}</p>
            </div>
            <div className="info-item">
              <h4>Power Backup</h4>
              <p>{property.powerBackup ? "Yes" : "No"}</p>
            </div>
          </div>

          {/* Society / Project Details */}
          {property.society && (
            <div className="society-details">
              <h2>Society / Project Details</h2>
              <p>
                <strong>Name:</strong> {property.society.name}
              </p>
              <p>
                <strong>Builder:</strong> {property.society.builder}
              </p>
              <p>
                <strong>Total Units:</strong> {property.society.totalUnits}
              </p>
              <p>
                <strong>Possession Status:</strong>{" "}
                {property.society.possessionStatus}
              </p>
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
              <p>Bathtubs: {property.bathroomFeatures.bathtubs || 0}</p>
              <p>Jacuzzi: {property.bathroomFeatures.jacuzzi ? "Yes" : "No"}</p>
              <p>
                Heated Flooring:{" "}
                {property.bathroomFeatures.heatedFlooring ? "Yes" : "No"}
              </p>
            </div>
          )}

          {/* Building Amenities */}
          {property.buildingAmenities && (
            <div className="building-amenities">
              <h2>Building Amenities</h2>
              {Object.entries(property.buildingAmenities).map(
                ([key, value]) => (
                  <p key={key}>
                    <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                    {value ? "Yes" : "No"}
                  </p>
                )
              )}
            </div>
          )}

          {/* Appliances */}
          {property.appliances && (
            <div className="appliances">
              <h2>Appliances</h2>
              {Object.entries(property.appliances).map(([key, value]) => (
                <p key={key}>
                  <strong>{key.replace(/([A-Z])/g, " $1")}:</strong>{" "}
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </p>
              ))}
            </div>
          )}

          {/* Rent Details */}
          {property.rentDetails && (
            <div className="rent-details">
              <h2>Rent Details</h2>
              <p>
                Monthly Rent: ₹
                {property.rentDetails.monthlyRent?.toLocaleString() || "N/A"}
              </p>
              <p>
                Security Deposit: ₹
                {property.rentDetails.securityDeposit?.toLocaleString() ||
                  "N/A"}
              </p>
              <p>
                Maintenance Included:{" "}
                {property.rentDetails.maintenanceIncluded ? "Yes" : "No"}
              </p>
              <p>
                Preferred Tenants:{" "}
                {property.rentDetails.preferredTenants?.join(", ") || "N/A"}
              </p>
            </div>
          )}

          {/* Description */}
          <div className="description">
            <h2>About this property</h2>
            <PropertyContent content={property.content} />
          </div>

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
              <p>Study Room: {property.semiRooms.studyRoom ? "Yes" : "No"}</p>
              <p>
                Servant Room: {property.semiRooms.servantRoom ? "Yes" : "No"}
              </p>
              <p>Pooja Room: {property.semiRooms.poojaRoom ? "Yes" : "No"}</p>
              <p>Store Room: {property.semiRooms.storeRoom ? "Yes" : "No"}</p>
            </div>
          )}

          {/* Parking Details */}
          {property.parkingOutdoor && (
            <div className="parking-details">
              <h2>Parking Details</h2>
              <p>
                Covered Parking: {property.parkingOutdoor.coveredParking || 0}
              </p>
              <p>Open Parking: {property.parkingOutdoor.openParking || 0}</p>
              <p>
                Visitor Parking:{" "}
                {property.parkingOutdoor.visitorParking ? "Yes" : "No"}
              </p>
              <p>
                EV Charging: {property.parkingOutdoor.evCharging ? "Yes" : "No"}
              </p>
            </div>
          )}

          {/* Plot / Dimensions */}
          <div className="plot-details">
            <h2>Plot / Building Details</h2>
            <p>Plot Area: {property.plotArea || "N/A"} sq ft</p>
            <p>Length: {property.dimensions?.length || "N/A"} ft</p>
            <p>Width: {property.dimensions?.width || "N/A"} ft</p>
            <p>Road Width: {property.roadWidth || "N/A"} ft</p>
            <p>Corner Plot: {property.cornerPlot ? "Yes" : "No"}</p>
          </div>

          {/* Interiors */}
          {property.interiors && (
            <div className="interiors">
              <h2>Interiors</h2>
              <p>Wardrobes: {property.interiors.wardrobes || 0}</p>
              <p>Curtains: {property.interiors.curtains ? "Yes" : "No"}</p>
              <p>
                Modular Kitchen:{" "}
                {property.interiors.modularKitchen ? "Yes" : "No"}
              </p>
              <p>Chimney: {property.interiors.chimney ? "Yes" : "No"}</p>
              <p>
                False Ceiling: {property.interiors.falseCeiling ? "Yes" : "No"}
              </p>
              <p>Lighting: {property.interiors.lighting || "N/A"}</p>
            </div>
          )}

          {property.greenFeatures?.length > 0 && (
            <div className="green-features">
              <h2>Green Features</h2>
              <ul>
                {property.greenFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Financial Info */}
          <div className="financial-details">
            <h2>Financial Details</h2>
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
    </>
  );
};

export default PropertyDetailPage;
