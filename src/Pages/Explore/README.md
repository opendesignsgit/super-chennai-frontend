# Explore Discovery Module

## Overview

The Explore Discovery module provides two distinct modes for discovering places in Chennai:

1. **AI Mode**: Conversational search using natural language queries
2. **Nearby Mode**: GPS-guided spatial discovery with live sensor updates

## Features

### AI Mode
- Natural language processing for location queries
- Filter by category, location, rating, and tags
- Dynamic URL slugs (e.g., `/explore/cafes-in-nungambakkam`)
- Smart suggestions on unmatched queries
- Session persistence (1 hour)

### Nearby Mode ✨ NEW
- **GPS Tracking**: Live location tracking using `watchPosition()`
- **Device Orientation**: Detects and uses device heading on mobile
- **Spatial Filtering**:
  - **Desktop**: Radius-based (default 2km)
  - **Mobile**: Directional cone (±45° from device heading)
- **Category Chips**: Dynamic category selection from available places
- **Map Integration**: Google Maps with user location and place markers
- **Live Updates**: Automatically updates results on:
  - GPS movement
  - Device rotation
  - Category selection
  - Radius change

## Setup

### Google Maps API Key

To use Nearby Mode, you need a Google Maps API key:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable the following APIs:
   - Maps JavaScript API
   - Places API (optional, for future enhancements)
   - Geolocation API
4. Create an API key
5. Add it to `.env`:

```env
VITE_GOOGLE_MAPS_API_KEY=your_api_key_here
```

**Security Note**: Restrict your API key by:
- HTTP referrers (for production domain)
- API restrictions (only enable required APIs)

## Usage

### Switching Modes

Users can toggle between AI and Nearby modes using the mode switch in the chat input area.

**When switching to Nearby Mode:**
1. Chat input is disabled
2. GPS permission is requested
3. Device orientation support is detected
4. Map replaces hero banner
5. Category chips appear above input

**When switching back to AI Mode:**
1. Chat input is re-enabled
2. GPS tracking stops
3. Orientation listener is removed
4. Map is hidden, hero banner returns
5. Category chips are removed

### Nearby Mode Interaction

1. **Select Location**: Mode automatically requests and tracks GPS location
2. **Choose Category**: Tap category chips to filter places
3. **View Results**: 
   - Places appear as markers on the map
   - Place cards scroll below in a carousel
4. **Open Details**: Click map marker or place card to open detail panel
5. **Move Around**: Walk/drive to see results update automatically
6. **Rotate Device** (mobile): Turn phone to see places in the direction you're facing

## File Structure

```
src/Pages/Explore/
├── Components/
│   ├── ChatInput.jsx          # Input with mode switch and category chips
│   ├── ChatInterface.jsx      # Message display and place cards
│   ├── DetailOffcanvas.jsx    # Place detail panel
│   ├── NearbyMap.jsx          # Google Maps integration
│   ├── PlaceCard.jsx          # Individual place card
│   └── DiscoveryResults.jsx   # (Legacy, may be deprecated)
├── Styles/
│   └── ExploreDiscovery.css   # All styles
├── data/
│   └── mockPlaces.js          # 600+ mock places across Chennai
├── ExploreDiscovery.jsx       # Main component
└── README.md                  # This file
```

## Technical Details

### GPS Tracking

Uses `navigator.geolocation.watchPosition()` for continuous tracking:

```javascript
navigator.geolocation.watchPosition(
  successCallback,
  errorCallback,
  {
    enableHighAccuracy: true,
    timeout: 10000,
    maximumAge: 0,
  }
);
```

### Device Orientation

Listens to `deviceorientation` events:

```javascript
window.addEventListener('deviceorientation', (event) => {
  const heading = event.webkitCompassHeading || (360 - event.alpha);
  // Update directional filter
});
```

### Spatial Filtering

**Distance Calculation** (Haversine formula):
```javascript
distance = 2 * R * arcsin(sqrt(
  sin²(Δφ/2) + cos(φ1) * cos(φ2) * sin²(Δλ/2)
))
```

**Bearing Calculation**:
```javascript
bearing = atan2(
  sin(Δλ) * cos(φ2),
  cos(φ1) * sin(φ2) - sin(φ1) * cos(φ2) * cos(Δλ)
)
```

**Directional Cone**:
```javascript
isInCone = |placeBearing - deviceHeading| <= 45°
```

## Categories

Available categories (dynamically loaded from data):
- Cafe
- Restaurant
- Temple
- Beach
- Mall
- Park
- Museum
- Hotel
- Coworking
- Gym
- Hospital
- School

## Mock Data

Currently uses mock coordinate data for Chennai locations. In production:

1. **Backend Integration**: Fetch real places from API
2. **Real Coordinates**: Each place should have `lat` and `lng` fields
3. **Live Data**: Real-time place information with opening hours, photos, etc.

### Location Coordinates Mapping

The system currently maps Chennai area names to coordinates:
- Nungambakkam → 13.0569°N, 80.2426°E
- Adyar → 13.0067°N, 80.2572°E
- T Nagar → 13.0418°N, 80.2341°E
- (and 30+ more locations)

## Browser Support

### GPS Tracking
- ✅ Chrome/Edge (desktop and mobile)
- ✅ Safari (requires HTTPS)
- ✅ Firefox
- ⚠️ Requires user permission
- ⚠️ Requires HTTPS (except localhost)

### Device Orientation
- ✅ iOS Safari (requires permission on iOS 13+)
- ✅ Chrome Android
- ✅ Samsung Internet
- ❌ Desktop browsers (automatically falls back to radius mode)

## Performance Considerations

1. **GPS Watch**: Uses continuous tracking - may impact battery
2. **Map Rendering**: Only renders visible markers
3. **Place Filtering**: Client-side filtering is efficient up to ~1000 places
4. **Orientation Updates**: Throttled to prevent excessive re-renders

## Future Enhancements

- [ ] Add radius slider for user control
- [ ] Implement direction cone visualization on map
- [ ] Add place reviews and photos
- [ ] Implement "Save favorite places"
- [ ] Add navigation integration (Google Maps/Apple Maps)
- [ ] Voice search in AI mode
- [ ] AR view for mobile
- [ ] Offline mode support

## Troubleshooting

### GPS Not Working
- Ensure browser has location permission
- Check if HTTPS is enabled (required for geolocation)
- Verify GPS/location services are enabled on device

### Map Not Loading
- Check if `VITE_GOOGLE_MAPS_API_KEY` is set in `.env`
- Verify API key is valid and not restricted
- Check browser console for errors

### Device Orientation Not Working
- iOS 13+ requires user to grant permission
- Desktop browsers don't support orientation
- System automatically falls back to radius mode

### No Places Showing
- Check selected category has places in the radius
- Try increasing radius (when feature is added)
- Verify GPS location is accurate
- Check if places exist in mock data for your area

## Support

For issues or feature requests, please contact the development team or open an issue in the repository.
