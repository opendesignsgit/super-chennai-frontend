import React from "react";
import PropTypes from "prop-types";
import PlaceCard from "./PlaceCard";
import "../../../assets/Css/ExplorePage.css";

/**
 * PlaceGrid Component - Renders a grid of place cards
 */
const PlaceGrid = ({ places, onViewOnMap }) => {
  if (!places || places.length === 0) {
    return (
      <div className="place-grid-empty">
        <p>No places found. Try adjusting your filters or search criteria.</p>
      </div>
    );
  }

  return (
    <div className="place-grid">
      {places.map((place) => (
        <PlaceCard
          key={place.id}
          place={place}
          onViewOnMap={onViewOnMap}
        />
      ))}
    </div>
  );
};

PlaceGrid.propTypes = {
  places: PropTypes.arrayOf(
    PropTypes.shape({
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
    })
  ).isRequired,
  onViewOnMap: PropTypes.func.isRequired,
};

export default PlaceGrid;
