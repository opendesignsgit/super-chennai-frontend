# Explore Page - Nearby Mode Feature

## Overview
The Explore Page is a dual-mode discovery system for finding places in Chennai. It supports both **AI Mode** (AI-assisted discovery) and **Nearby Mode** (location-based spatial filtering with map visualization).

## Features

### AI Mode (Default)
- Chat-based interface for querying places
- AI-powered recommendations
- Full place grid with all available places
- Chat input is active and functional

### Nearby Mode (Extension Layer)
- **Non-invasive**: Does not modify or interfere with AI Mode functionality
- Location-based spatial filtering
- Interactive map with user location and place markers
- Category filtering chips
- Device orientation support for mobile (directional cone)
- Radius-based filtering (5km default)
- Chat input disabled (but still visible)

## Architecture

### State Management
The implementation follows a **non-invasive extension pattern**:

```javascript
// AI Mode State (existing)
const [allPlaces, setAllPlaces] = useState([]);
const [aiFilteredPlaces, setAiFilteredPlaces] = useState([]);

// Nearby Mode State (separate layer)
const {
  nearbyState: {
    isNearbyActive,
    userLocation,
    deviceHeading,
    nearbyCategory,
    nearbyModeType
  },
  toggleNearbyMode,
  setNearbyCategory,
  // ...
} = useNearbyMode();

// Derived places based on active mode
const visiblePlaces = useMemo(() => {
  if (nearbyState.isNearbyActive) {
    return applySpatialFilter(allPlaces, nearbyState);
  } else {
    return aiFilteredPlaces;
  }
}, [nearbyState, allPlaces, aiFilteredPlaces]);
```

### Component Structure
```
ExplorePage/
├── ExplorePage.jsx           # Main page component
├── components/
│   ├── ChatInput.jsx          # Dual-mode chat interface
│   ├── PlaceCard.jsx          # Individual place card
│   ├── PlaceGrid.jsx          # Grid layout for places
│   ├── MapOverlay.jsx         # Google Maps with markers
│   ├── NearbyCategoryChips.jsx # Category filter chips
│   └── DetailPanel.jsx        # Offcanvas place details
├── hooks/
│   ├── useNearbyMode.js       # Nearby state management
│   └── useDeviceOrientation.js # Device heading detection
└── utils/
    └── spatialFilters.js      # Distance/angle calculations
```

## Spatial Filtering Logic

### Distance Calculation
Uses the Haversine formula to calculate great-circle distance between two coordinates:

```javascript
const distance = calculateDistance(userLocation, placeLocation);
// Returns distance in kilometers
```

### Directional Filtering (Mobile)
On mobile devices with orientation support, filters places within a 45° cone:

```javascript
if (nearbyModeType === "directional" && deviceHeading !== null) {
  const bearing = calculateBearing(userLocation, placeLocation);
  const isInCone = isWithinDirectionalCone(
    userLocation,
    deviceHeading,
    placeLocation,
    45 // cone angle
  );
}
```

### Combined Filtering
```javascript
visiblePlaces = places
  .filter(place => distance(place.location, userLocation) <= radius)
  .filter(place => isInDirectionalCone(...)) // mobile only
  .filter(place => place.category === selectedCategory); // if category selected
```

## Usage

### Basic Integration

1. **Add Route** (already done in `App.jsx`):
```javascript
import ExplorePage from "./Pages/ExplorePage/ExplorePage";

<Route path="/explore" element={<ExplorePage />} />
```

2. **Configure Google Maps API**:
```bash
# .env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

3. **Navigate to Page**:
```javascript
<Link to="/explore">Explore Chennai</Link>
```

### Mode Switching
Users can toggle between modes using the buttons in the chat input:
- Click **"AI"** button → Switch to AI Mode
- Click **"Nearby"** button → Switch to Nearby Mode

### Category Filtering (Nearby Mode Only)
When in Nearby Mode, users can filter by category:
- Categories are fetched from Sanity CMS
- Fallback to 8 default categories if CMS unavailable
- Click category chip to filter
- Click same chip again or "All" to clear filter

## API Integration

### Places Data
Currently using mock data. To integrate with real API:

```javascript
const fetchPlaces = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/places`);
    const places = response.data.map(place => ({
      id: place.id,
      title: place.name,
      image: place.imageUrl,
      rating: place.rating,
      status: place.isOpen ? "Open Now" : "Closed",
      category: place.category,
      description: place.description,
      address: place.address,
      phone: place.phone,
      website: place.website,
      location: {
        lat: place.latitude,
        lng: place.longitude
      }
    }));
    setAllPlaces(places);
  } catch (error) {
    console.error("Error fetching places:", error);
  }
};
```

### Categories Data
Fetched from Sanity CMS:

```javascript
const query = '*[_type == "category"]{_id, name, slug}';
const categories = await client.fetch(query);
```

## Device Orientation Support

### Desktop/Laptop
- Uses **radius-only mode**
- Shows circular radius on map
- All places within radius are visible

### Mobile (with orientation support)
- Uses **directional mode**
- Shows directional cone on map
- Only places within 45° cone AND radius are visible
- Compass indicator shows device heading
- Real-time updates as device rotates

### Requesting Permissions (iOS 13+)
```javascript
if (typeof DeviceOrientationEvent.requestPermission === 'function') {
  const permission = await DeviceOrientationEvent.requestPermission();
  if (permission === 'granted') {
    // Listen to orientation events
  }
}
```

## Styling

### CSS Variables
Main colors from SuperChennai brand:
```css
--primary-color: #a44294;
--secondary-color: #818181;
--border-color: #e7e7ea;
```

### Responsive Breakpoints
```css
@media (max-width: 1024px) { /* Tablet */ }
@media (max-width: 768px)  { /* Mobile */ }
@media (max-width: 480px)  { /* Small mobile */ }
```

## Testing

### Manual Testing Checklist
- [ ] AI Mode displays all places
- [ ] Nearby button activates Nearby Mode
- [ ] Map appears with user location marker
- [ ] Category chips appear in Nearby Mode
- [ ] Category filtering works correctly
- [ ] Detail panel opens on card/pin click
- [ ] Detail panel closes properly
- [ ] Switch back to AI Mode hides map and chips
- [ ] Chat input disabled in Nearby Mode
- [ ] Chat input re-enabled in AI Mode
- [ ] Geolocation permission requested
- [ ] Falls back to Chennai coordinates if denied
- [ ] Mobile: Device orientation detected
- [ ] Mobile: Directional cone filtering works
- [ ] Desktop: Radius-only filtering works

### Browser Compatibility
- ✅ Chrome/Edge (Desktop & Mobile)
- ✅ Firefox (Desktop & Mobile)
- ✅ Safari (Desktop & iOS) - requires orientation permission
- ⚠️ Internet Explorer - Not supported (uses modern JS features)

## Performance Considerations

### Optimizations Implemented
1. **Memoization**: `useMemo` for derived places calculation
2. **Callback Memoization**: `useCallback` for all state setters
3. **Conditional Rendering**: Components only render when needed
4. **Lazy Loading**: Google Maps API loaded on demand

### Future Optimizations
- [ ] Virtualized list for large place datasets
- [ ] Debounced orientation updates
- [ ] Cached category data
- [ ] Service worker for offline support
- [ ] Code splitting for map component

## Accessibility

### Implemented
- ✅ ARIA labels on buttons
- ✅ Keyboard navigation support
- ✅ Focus management in offcanvas panel
- ✅ Alt text on images
- ✅ Semantic HTML structure

### To Improve
- [ ] Screen reader announcements for mode changes
- [ ] High contrast mode support
- [ ] Keyboard shortcuts for quick actions

## Security

### Current Measures
- Environment variables for API keys
- HTTPS-only map loading
- Input sanitization in chat
- CORS-aware API calls

### Recommendations
- Add rate limiting for API calls
- Implement CSP headers
- Add authentication for personalized features
- Validate and sanitize all user inputs

## Troubleshooting

### Map Not Loading
1. Check Google Maps API key in `.env`
2. Verify API key has Maps JavaScript API enabled
3. Check browser console for API errors
4. Ensure HTTPS (required for geolocation)

### Geolocation Not Working
1. Check browser permission settings
2. Verify HTTPS connection
3. Check browser console for errors
4. Falls back to Chennai (13.0827°N, 80.2707°E) if denied

### Device Orientation Not Working
1. Only works on HTTPS
2. iOS requires explicit permission request
3. Not all devices have orientation sensors
4. Falls back to radius-only mode gracefully

### Categories Not Loading
1. Check Sanity CMS connection
2. Verify query syntax
3. Falls back to default categories automatically

## Future Enhancements

### Planned Features
- [ ] AI chat integration with backend
- [ ] Save favorite places
- [ ] Share place links
- [ ] Route planning to places
- [ ] User reviews and ratings
- [ ] Photo uploads
- [ ] Social features (check-ins)
- [ ] Multi-language support
- [ ] Dark mode

### Technical Improvements
- [ ] Add TypeScript
- [ ] Add unit tests
- [ ] Add integration tests
- [ ] Add E2E tests
- [ ] Set up CI/CD pipeline
- [ ] Add monitoring and analytics
- [ ] Implement error boundaries
- [ ] Add loading skeletons

## License
Part of SuperChennai project - © 2026 SuperChennai

## Contributors
- GitHub Copilot AI Agent (Implementation)
- OpenDesigns (Design & Architecture)
- SuperChennai Team (Requirements & Testing)
