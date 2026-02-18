import React from 'react';
import { renderStars } from '../../utils/helpers';

const PlaceCard = ({ place, onClick }) => {

  return (
    <div className="place-card" onClick={() => onClick(place)}>
      <div className="place-card-image-container">
        <img 
          src={place.image} 
          alt={place.name}
          className="place-card-image"
          onError={(e) => {
            e.target.src = '/images/HomePage-Images/interior-restaurant.png';
          }}
        />
      </div>
      <div className="place-card-content">
        <h3 className="place-card-title">{place.name}</h3>
        <div className="place-card-rating">
          {place.rating} {renderStars(place.rating)}
        </div>
        {place.isOpen && (
          <div className="place-card-status">
            <span className="status-indicator"></span>
            <span className="status-text">Open Now</span>
          </div>
        )}
        <button className="place-card-btn">View on Map</button>
      </div>
    </div>
  );
};

export default PlaceCard;
