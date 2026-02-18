import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const PlaceDetailPanel = ({ place, isOpen, onClose }) => {
  if (!place) return null;

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const stars = [];
    
    for (let i = 0; i < fullStars; i++) {
      stars.push('⭐');
    }
    
    return stars.join('');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="detail-panel-backdrop"
            onClick={onClose}
          />
          
          {/* Sliding Panel */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="detail-panel"
          >
            <div className="detail-panel-content">
              {/* Close Button */}
              <button className="detail-panel-close" onClick={onClose}>
                <X size={24} />
              </button>

              {/* Image */}
              <div className="detail-panel-image-container">
                <img 
                  src={place.image} 
                  alt={place.name}
                  className="detail-panel-image"
                  onError={(e) => {
                    e.target.src = '/images/HomePage-Images/interior-restaurant.png';
                  }}
                />
              </div>

              {/* Content */}
              <div className="detail-panel-info">
                <h2 className="detail-panel-title">{place.name}</h2>
                
                <div className="detail-panel-rating">
                  <span className="rating-number">{place.rating}</span>
                  <span className="rating-stars">{renderStars(place.rating)}</span>
                </div>

                {/* Why you'll love it */}
                <div className="detail-panel-section">
                  <h3>Why you'll love it</h3>
                  <p>{place.description}</p>
                </div>

                {/* Vibe Check (if available) */}
                {place.vibeCheck && (
                  <div className="detail-panel-section">
                    <h3>Vibe Check</h3>
                    <div className="vibe-check">
                      {Object.entries(place.vibeCheck).map(([key, value]) => (
                        <div key={key} className="vibe-item">
                          <span className="vibe-label">
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                          </span>
                          <div className="vibe-dots">
                            {[...Array(5)].map((_, i) => (
                              <span
                                key={i}
                                className={`vibe-dot ${i < value ? 'active' : ''}`}
                              />
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="detail-panel-actions">
                  <button className="action-btn primary">Get Directions</button>
                  <button className="action-btn secondary">Book a Table</button>
                  <button className="action-btn secondary">Share to WhatsApp</button>
                </div>

                {/* Status */}
                {place.isOpen && (
                  <div className="detail-panel-status">
                    <span className="status-indicator"></span>
                    <span className="status-text">Open Now</span>
                  </div>
                )}

                {/* Reviews & Ratings Section Placeholder */}
                <div className="detail-panel-section">
                  <h3>Reviews & Ratings</h3>
                  <div className="reviews-placeholder">
                    <p>Reviews and ratings coming soon...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default PlaceDetailPanel;
