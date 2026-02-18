// Helper utility functions

// Render star rating as emoji string
export const renderStars = (rating) => {
  const fullStars = Math.floor(rating);
  const stars = [];
  
  for (let i = 0; i < fullStars; i++) {
    stars.push('⭐');
  }
  
  return stars.join('');
};

// Panel animation duration constant (matches Framer Motion timing)
export const PANEL_ANIMATION_DURATION = 300; // milliseconds
