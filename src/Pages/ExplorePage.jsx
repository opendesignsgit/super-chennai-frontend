import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import PlaceCard from '../Components/Explore/PlaceCard';
import PlaceDetailPanel from '../Components/Explore/PlaceDetailPanel';
import ChatInput from '../Components/Explore/ChatInput';
import { mockAIHandler, mockNearbyHandler } from '../utils/exploreHandlers';
import { allowedCategories, allowedLocations, slugPattern } from '../config/exploreConfig';
import '../assets/Css/ExplorePage.css';

const ExplorePage = () => {
  const { querySlug } = useParams();
  const navigate = useNavigate();

  const [discoveryMode, setDiscoveryMode] = useState('ai');
  const [places, setPlaces] = useState([]);
  const [aiMessage, setAiMessage] = useState('');
  const [currentQuery, setCurrentQuery] = useState('');
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [category, setCategory] = useState(null);
  const [location, setLocation] = useState(null);

  // Validate and parse slug on mount or when slug changes
  useEffect(() => {
    if (querySlug) {
      const match = querySlug.match(slugPattern);

      if (!match) {
        // Invalid slug pattern - redirect to /explore
        navigate('/explore', { replace: true });
        return;
      }

      const parsedCategory = match[1];
      const parsedLocation = match[2];

      // Validate category and location
      if (
        !allowedCategories.includes(parsedCategory) ||
        !allowedLocations.includes(parsedLocation)
      ) {
        // Invalid category or location - redirect to /explore
        navigate('/explore', { replace: true });
        return;
      }

      // Valid slug - set state and load results
      setCategory(parsedCategory);
      setLocation(parsedLocation);
      
      // Load results based on slug
      const result = mockAIHandler('', parsedCategory, parsedLocation);
      setPlaces(result.places);
      setAiMessage(result.message);
      setCurrentQuery(result.query);

      // Update page title
      const locationDisplay = parsedLocation.split('-').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1)
      ).join(' ');
      document.title = `${parsedCategory.charAt(0).toUpperCase() + parsedCategory.slice(1)} Places Near ${locationDisplay} | SuperChennai Explore`;
    } else {
      // No slug - just set default title
      document.title = 'Explore Chennai | SuperChennai';
      setCategory(null);
      setLocation(null);
    }
  }, [querySlug, navigate]);

  // Handle mode change
  const handleModeChange = (newMode) => {
    setDiscoveryMode(newMode);
    
    if (newMode === 'nearby') {
      // Switch to nearby mode
      const result = mockNearbyHandler();
      setPlaces(result.places);
      setAiMessage(result.message);
      setCurrentQuery(result.query);
    } else if (category && location) {
      // Switch back to AI mode with existing category/location
      const result = mockAIHandler('', category, location);
      setPlaces(result.places);
      setAiMessage(result.message);
      setCurrentQuery(result.query);
    }
  };

  // Handle chat input submission
  const handleQuerySubmit = (query) => {
    if (discoveryMode === 'ai') {
      const result = mockAIHandler(query);
      setPlaces(result.places);
      setAiMessage(result.message);
      setCurrentQuery(result.query);
    } else {
      // In nearby mode, just refresh nearby results
      const result = mockNearbyHandler();
      setPlaces(result.places);
      setAiMessage(result.message);
      setCurrentQuery(result.query);
    }
  };

  // Handle place card click
  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
    setIsPanelOpen(true);
  };

  // Handle panel close
  const handlePanelClose = () => {
    setIsPanelOpen(false);
    // Keep selectedPlace for animation exit
    setTimeout(() => setSelectedPlace(null), 300);
  };

  return (
    <>
      <Helmet>
        <title>{document.title}</title>
      </Helmet>

      <div className="explore-page">
        {/* Main Content Area */}
        <div className="explore-content">
          {/* AI Message Display */}
          {aiMessage && (
            <div className="explore-message-container">
              <div className="explore-message">
                <h2>{currentQuery || 'Explore Chennai'}</h2>
                <p>{aiMessage}</p>
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="explore-results">
            {places.length > 0 ? (
              <div className="places-grid">
                {places.map((place) => (
                  <PlaceCard
                    key={place.id}
                    place={place}
                    onClick={handlePlaceClick}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results">
                <h3>Start exploring Chennai</h3>
                <p>Ask anything about places in Chennai, or switch to Nearby mode to discover what's around you.</p>
              </div>
            )}
          </div>
        </div>

        {/* Fixed Chat Input at Bottom */}
        <ChatInput
          mode={discoveryMode}
          onModeChange={handleModeChange}
          onSubmit={handleQuerySubmit}
          disabled={false}
        />

        {/* Sliding Detail Panel */}
        <PlaceDetailPanel
          place={selectedPlace}
          isOpen={isPanelOpen}
          onClose={handlePanelClose}
        />
      </div>
    </>
  );
};

export default ExplorePage;
