import { useEffect } from "react";

export default function DetailOffcanvas({ place, isOpen, onClose }) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  // Lock body scroll when offcanvas is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!place) return null;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i}>★</span>);
    }
    return stars;
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="offcanvas-backdrop" onClick={onClose}></div>}

      {/* Offcanvas Panel */}
      <div className={`detail-offcanvas ${isOpen ? "open" : ""}`}>
        <div className="offcanvas-header">
          <button className="close-btn" onClick={onClose}>
            ×
          </button>
        </div>

        <div className="offcanvas-content">
          {/* Place Image */}
          <div className="detail-image">
            <img src={place.image} alt={place.title} />
          </div>

          {/* Place Title */}
          <h2 className="detail-title">{place.title}</h2>

          {/* Rating */}
          <div className="detail-rating">
            <span className="rating-number">{place.rating}</span>
            <div className="rating-stars">{renderStars(place.rating)}</div>
          </div>

          {/* Why you'll love it */}
          <div className="detail-section">
            <h3>Why you'll love it</h3>
            <ul>
              <li>{place.description}</li>
            </ul>
          </div>

          {/* Vibe Check */}
          {place.vibe && (
            <div className="detail-section">
              <h3>Vibe Check</h3>
              <div className="vibe-slider">
                <div className="vibe-labels">
                  <span>Quiet</span>
                  <span>Modern</span>
                </div>
                <div className="vibe-bar">
                  <div
                    className="vibe-indicator"
                    style={{
                      left: `${
                        (place.vibe.modern / (place.vibe.quiet + place.vibe.modern)) * 100
                      }%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="detail-actions">
            <button className="action-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              Get Directions
            </button>
            <button className="action-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
              </svg>
              Book a Table
            </button>
            <button className="action-btn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              Share to WhatsApp
            </button>
          </div>

          {/* Reviews & Ratings */}
          <div className="detail-section">
            <h3>Reviews & Ratings</h3>
            <p className="coming-soon">Coming soon...</p>
          </div>

          {/* Photo & Video Gallery */}
          <div className="detail-section">
            <h3>Photo & Video Gallery</h3>
            <p className="coming-soon">Coming soon...</p>
          </div>
        </div>
      </div>
    </>
  );
}
