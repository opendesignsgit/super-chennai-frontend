import React from "react";
import PropTypes from "prop-types";
import "../../../assets/Css/ExplorePage.css";

/**
 * PlaceCard Component - Displays a place with image, rating, and details
 */
const PlaceCard = ({ place, onViewOnMap }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < 5; i++) {
      if (i < fullStars) {
        stars.push(<span key={i} className="star filled">★</span>);
      } else if (i === fullStars && hasHalfStar) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="place-card">
      <div className="place-card-image-container">
        <img
          src={place.image || "/images/placeholder.jpg"}
          alt={place.title}
          className="place-card-image"
        />
      </div>
      <div className="place-card-content">
        <h3 className="place-card-title">{place.title}</h3>
        <div className="place-card-rating">
          <span className="rating-value">{place.rating.toFixed(1)}</span>
          <div className="rating-stars">{renderStars(place.rating)}</div>
        </div>
        {place.status && (
          <div className="place-card-status">
            <span
              className={`status-indicator ${place.status === "Open Now" ? "open" : "closed"}`}
            >
              ●
            </span>
            <span className="status-text">{place.status}</span>
          </div>
        )}
        <button
          className="view-on-map-btn"
          onClick={() => onViewOnMap(place)}
        >
          View on Map
        </button>
      </div>
    </div>
  );
};

PlaceCard.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string,
    rating: PropTypes.number.isRequired,
    status: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
    }),
    category: PropTypes.string,
  }).isRequired,
  onViewOnMap: PropTypes.func.isRequired,
};

export default PlaceCard;
