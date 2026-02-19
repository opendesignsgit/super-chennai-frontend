# Nearby Mode Feature - SuperChennai Explore

## Overview

Nearby Mode is a non-invasive extension layer to the SuperChennai Explore feature that allows users to discover places based on their current location using geolocation and device orientation.

## Key Features

### 1. **Spatial Filtering**
- **Radius Mode (Desktop)**: Shows places within 5km radius of user's location
- **Directional Mode (Mobile)**: Shows places within 5km radius AND within a 45° cone in the direction the device is pointing

### 2. **Map Overlay**
- Interactive Google Map showing:
  - User's current location (blue marker)
  - Radius circle (5km)
  - Place markers with category-specific icons
  - Directional cone indicator (mobile only)

### 3. **Category Filtering**
- Horizontal scrollable chip bar with 12 categories:
  - Cafes, Restaurants, Temples, Beaches, Malls, Parks
  - Museums, Hotels, Coworking, Gyms, Hospitals, Schools
- Category selection filters nearby results without affecting AI mode state

### 4. **Non-Invasive Design**
- **Separate State**: NearbyState exists independently from ExploreState
- **No AI Mode Impact**: Switching to nearby mode doesn't modify filters, chat history, or routing
- **Instant Restoration**: Switching back to AI mode instantly restores previous state

## Technical Implementation

### State Structure

```javascript
nearbyState = {
  isNearbyActive: boolean,      // Whether nearby mode is active
  userLocation: {lat, lng},     // User's current coordinates
  deviceHeading: number | null, // Device compass heading (0-360°)
  nearbyCategory: string,       // Selected category filter
  nearbyModeType: "radius" | "directional"  // Mode type
}
```

### Spatial Filtering Algorithm

**Distance Calculation**: Haversine formula
```javascript
distance = 2 * R * asin(sqrt(sin²(Δlat/2) + cos(lat1) * cos(lat2) * sin²(Δlng/2)))
```

**Bearing Calculation**: Used for directional filtering
```javascript
bearing = atan2(sin(Δlng) * cos(lat2), 
                cos(lat1) * sin(lat2) - sin(lat1) * cos(lat2) * cos(Δlng))
```

**Directional Cone**: 45° half-angle (90° total cone)

### File Structure

```
src/Pages/Explore/
├── Components/
│   ├── MapOverlay.jsx              # Map overlay component
│   ├── NearbyCategoryChips.jsx    # Category chips component
│   ├── ChatInput.jsx               # Updated with disabled state
│   └── ...
├── utils/
│   └── spatialUtils.js             # Spatial calculation utilities
├── data/
│   └── mockPlaces.js               # Updated with coordinates
└── ExploreDiscovery.jsx            # Main component with nearby state
```

## Setup Instructions

### 1. Environment Configuration

Add Google Maps API key to `.env`:
```bash
VITE_GOOGLE_MAPS_API_KEY=your_actual_api_key_here
```

### 2. Enable Geolocation

The app will request location permissions when user switches to Nearby Mode.

**Browser Permissions Required:**
- Geolocation API
- Device Orientation API (iOS 13+ requires explicit permission)

## Usage

### Activating Nearby Mode

1. Click the mode switcher in the chat input (AI/Nearby toggle)
2. Allow location permissions when prompted
3. On iOS devices, allow device orientation access (for directional mode)

### Using Category Filters

1. When nearby mode is active, a horizontal chip bar appears above the chat input
2. Tap any category to filter places by that category
3. Tap the same category again to clear the filter

### Viewing Places on Map

1. Map automatically shows all nearby places as pins
2. Click any pin to open the detail offcanvas panel
3. Use zoom/pan controls to navigate the map

### Directional Mode (Mobile)

1. Point your device in any direction
2. Only places within a 45° cone in that direction are shown
3. The map displays a visual cone indicator
4. Rotate your device to see places in different directions

## Design Principles

### Non-Invasive Extension

✅ **Does NOT modify:**
- Explore filter state
- Chat history
- URL routing
- Layout components
- Footer/Newsletter sections

✅ **DOES extend:**
- Adds map overlay layer
- Adds category chips layer  
- Disables chat input (without unmounting)
- Applies spatial filtering

### State Isolation

```
AI Mode:  Uses ExploreState → filters → mockPlaces
Nearby:   Uses NearbyState → spatialFilter → visiblePlaces
```

Both modes are completely independent and can coexist.

## Browser Compatibility

| Feature | Chrome | Safari | Firefox | Edge |
|---------|--------|--------|---------|------|
| Geolocation | ✅ | ✅ | ✅ | ✅ |
| Google Maps | ✅ | ✅ | ✅ | ✅ |
| Device Orientation | ✅ | ✅ (with permission) | ✅ | ✅ |
| Directional Mode | ✅ | ⚠️ iOS 13+ only | ✅ | ✅ |

## Testing

### Local Testing

```bash
npm run dev
```

Navigate to `/explore` and:
1. Test AI mode functionality (should be unchanged)
2. Switch to Nearby mode
3. Allow location when prompted
4. Verify map overlay appears
5. Test category filtering
6. Switch back to AI mode
7. Verify AI mode state is restored

### Testing Device Orientation

Since device orientation requires a mobile device:
- Use Chrome DevTools mobile emulation (sensors tab)
- Test on actual mobile device
- iOS: Ensure orientation permission is granted

## Performance Considerations

- **Spatial filtering**: O(n) where n = total places (~600)
- **Distance calculation**: Runs on every nearby state update
- **Optimization**: Results cached until location/heading changes
- **Map rendering**: Limited to visible places only

## Future Enhancements

- [ ] Adjustable radius slider (1-10km)
- [ ] Save favorite locations
- [ ] Location history
- [ ] Turn-by-turn navigation integration
- [ ] AR view mode
- [ ] Clustering for dense areas

## Troubleshooting

### Map Not Showing
- Check Google Maps API key is set in `.env`
- Verify API key has Maps JavaScript API enabled
- Check browser console for API errors

### Location Not Working
- Ensure HTTPS (geolocation requires secure context)
- Check location permissions in browser settings
- Verify location services are enabled on device

### Directional Mode Not Working
- iOS 13+: Explicitly request device orientation permission
- Check device has magnetometer/compass sensor
- Ensure device is not in landscape mode lock

## Support

For issues or questions, please contact the SuperChennai development team.

---

**Version**: 2.7  
**Last Updated**: 2026-02-19  
**Author**: SuperChennai Team
