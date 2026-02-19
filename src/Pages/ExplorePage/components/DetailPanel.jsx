import React from "react";
import PropTypes from "prop-types";
import { X } from "lucide-react";
import "../../../assets/Css/ExplorePage.css";

/**
 * DetailPanel Component - Offcanvas panel to show place details
 * Reuses existing pattern for displaying detailed information
 */
const DetailPanel = ({ place, isOpen, onClose }) => {
  if (!isOpen || !place) return null;

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
    <>
      {/* Backdrop */}
      <div 
        className={`detail-panel-backdrop ${isOpen ? "active" : ""}`}
        onClick={onClose}
      />

      {/* Panel */}
      <div className={`detail-panel ${isOpen ? "open" : ""}`}>
        <div className="detail-panel-header">
          <h2>{place.title}</h2>
          <button
            className="detail-panel-close"
            onClick={onClose}
            aria-label="Close panel"
          >
            <X size={24} />
          </button>
        </div>

        <div className="detail-panel-content">
          {place.image && (
            <div className="detail-panel-image">
              <img src={place.image} alt={place.title} />
            </div>
          )}

          <div className="detail-panel-info">
            <div className="detail-rating">
              <span className="rating-value">{place.rating.toFixed(1)}</span>
              <div className="rating-stars">{renderStars(place.rating)}</div>
            </div>

            {place.status && (
              <div className="detail-status">
                <span
                  className={`status-indicator ${place.status === "Open Now" ? "open" : "closed"}`}
                >
                  ●
                </span>
                <span className="status-text">{place.status}</span>
              </div>
            )}

            {place.category && (
              <div className="detail-category">
                <strong>Category:</strong> {place.category}
              </div>
            )}

            {place.description && (
              <div className="detail-description">
                <p>{place.description}</p>
              </div>
            )}

            {place.address && (
              <div className="detail-address">
                <strong>Address:</strong>
                <p>{place.address}</p>
              </div>
            )}

            {place.phone && (
              <div className="detail-phone">
                <strong>Phone:</strong>
                <a href={`tel:${place.phone}`}>{place.phone}</a>
              </div>
            )}

            {place.website && (
              <div className="detail-website">
                <strong>Website:</strong>
                <a
                  href={place.website}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website
                </a>
              </div>
            )}

            {place.location && (
              <div className="detail-directions">
                <a
                  href={`https://www.google.com/maps/dir/?api=1&destination=${place.location.lat},${place.location.lng}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="directions-btn"
                >
                  Get Directions
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

DetailPanel.propTypes = {
  place: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    title: PropTypes.string,
    image: PropTypes.string,
    rating: PropTypes.number,
    status: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    address: PropTypes.string,
    phone: PropTypes.string,
    website: PropTypes.string,
    location: PropTypes.shape({
      lat: PropTypes.number,
      lng: PropTypes.number,
    }),
  }),
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetailPanel;
