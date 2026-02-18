import React from 'react';

const PlaceCard = ({ place, onClick }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    
    return stars.join('');
  };

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
