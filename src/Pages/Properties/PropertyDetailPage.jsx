import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const API_URL = "https://demo.superchennai.com/api/properties";

const PropertyDetailPage = () => {
  const { slug } = useParams();
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchProperty();
  }, [slug]);

  const fetchProperty = async () => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API_URL}`, {
        params: { slug },
      });

      setProperty(data?.docs?.[0] || null);
    } catch (err) {
      console.error("Error fetching property:", err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Loading...</p>;
  if (!property) return <p>Property not found</p>;

  return (
    <>
      <Helmet>
        <title>{property.title} | Chennai Properties</title>
        <meta
          name="description"
          content={`Explore details of ${property.title}, located in ${property.location}.`}
        />
        <link rel="canonical" href={`/properties/${slug}`} />
      </Helmet>

      <div style={{ padding: "20px" }}>
        <h1>{property.title}</h1>
        <img
          src={property.images[0].image.thumbnailURL || "/placeholder.jpg"}
          alt={property.title}
          style={{
            width: "100%",
            maxWidth: "800px",
            height: "auto",
            borderRadius: "8px",
          }}
        />

        {console.log("Property",property)}
        {/* <p>
          <strong>BHK:</strong> {property.bhk?.label || property.bhk}
        </p> */}
        <p>
          <strong>BHK:</strong>{" "}
          {property.bhk?.label
            ? property.bhk.label
            : typeof property.bhk === "string"
            ? property.bhk
            : "N/A"}
        </p>

        <p>
          <strong>Area:</strong> {property.area} sq ft
        </p>
        <p>
          <strong>Price:</strong> ₹
          {property.price ? property.price.toLocaleString() : "On Request"}
        </p>
        {/* <p>
          <strong>Location:</strong> {property.location}
        </p> */}
        <p>
          <strong>Location:</strong>{" "}
          {typeof property.location === "string"
            ? property.location
            : property.location?.label || "N/A"}
        </p>
        <p>{property.description || "No description available."}</p>
      </div>
    </>
  );
};

export default PropertyDetailPage;
