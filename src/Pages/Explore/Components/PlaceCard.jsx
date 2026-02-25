export default function PlaceCard({ place, onClick }) {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className="star filled">
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half">
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className="star empty">
          ★
        </span>
      );
    }

    return stars;
  };

  return (
    <div className="place-card" onClick={onClick}>
      <div className="place-image">
        <img src={place.image} alt={place.title} />
      </div>
      <div className="place-info">
        <h3 className="place-title">{place.title}</h3>
        <div className="place-rating">
          <span className="rating-number">{place.rating}</span>
          <div className="rating-stars">{renderStars(place.rating)}</div>
        </div>
        <div className="place-status">
          {place.status === "Open Now" && (
            <>
              <span className="status-indicator open"></span>
              <span className="status-text">{place.status}</span>
            </>
          )}
        </div>
        <button className="view-on-map-btn">View on Map</button>
      </div>
    </div>
  );
}
