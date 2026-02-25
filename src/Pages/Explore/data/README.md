# SuperChennai Explore - Mock Data Documentation

## Overview
This directory contains mock data for the SuperChennai Explore feature, providing 700+ realistic places across Chennai for testing and demonstration purposes.

## Data Structure

### Total Places: 700+

#### Breakdown by Category:
- **Cafes**: 100 places
- **Restaurants**: 150 places
- **Temples**: 80 places
- **Beaches**: 30 places
- **Malls**: 50 places
- **Parks**: 50 places
- **Museums**: 30 places
- **Hotels**: 60 places
- **Coworking Spaces**: 30 places
- **Gyms**: 40 places
- **Hospitals**: 40 places
- **Schools**: 40 places

### Place Schema
Each place object contains:
```javascript
{
  id: Number,                    // Unique identifier
  title: String,                 // Place name
  category: String,              // Type (cafe, restaurant, etc.)
  location: String,              // Chennai area/neighborhood
  rating: Number,                // 1.0 to 5.0
  image: String,                 // Image path
  status: String,                // "Open Now" or "Closed"
  tags: Array<String>,           // Features/attributes
  description: String,           // Brief description
  vibe: {                       // Atmosphere metrics
    quiet: Number (1-5),         // Quietness level
    modern: Number (1-5)         // Modernity level
  }
}
```

## Locations Covered (40+ Areas)

### Central Chennai
- Nungambakkam, T Nagar, Mylapore, Egmore, Triplicane, Royapettah, Teynampet

### North Chennai
- Anna Nagar, Kilpauk, Vadapalani, Ashok Nagar, KK Nagar, Virugambakkam, Arumbakkam

### South Chennai
- Adyar, Velachery, Guindy, Saidapet, Mandaveli, Alwarpet, West Mambalam

### East Chennai (OMR/ECR)
- Sholinganallur, Perungudi, Thoraipakkam, Thiruvanmiyur, Palavakkam, Injambakkam

### Suburbs
- Tambaram, Chrompet, Pallavaram, Porur, Koyambedu

### Coastal Areas
- Marina, Besant Nagar, ECR, OMR

## URL Structure & Search Patterns

### Valid Explore URLs

#### 1. Category-based URLs
```
/explore/cafe-places-near-nungambakkam
/explore/restaurant-places-near-adyar
/explore/temple-places-near-mylapore
/explore/beach-places-near-marina
/explore/mall-places-near-t-nagar
/explore/park-places-near-anna-nagar
/explore/museum-places-near-egmore
/explore/hotel-places-near-guindy
/explore/coworking-places-near-omr
/explore/gym-places-near-velachery
/explore/hospital-places-near-adyar
/explore/school-places-near-anna-nagar
```

#### 2. Base Explore URL
```
/explore
```
Shows welcome message with no results initially

### Search Query Patterns

#### Natural Language Queries (Chat Input)

**Category Search:**
```
"cafe"
"restaurant"
"temple"
"beach"
"mall"
"park"
"museum"
```

**Location Search:**
```
"places in nungambakkam"
"near adyar"
"in t nagar"
```

**Combined Search:**
```
"cafe near nungambakkam"
"restaurants in adyar"
"temples near mylapore"
"beaches in marina"
```

**Rating Filters:**
```
"rating over 4"
"rating above 4.5"
"highly rated cafes"
```

**Tag-based Search:**
```
"quiet cafes"
"peaceful places"
"modern restaurants"
"traditional temples"
"outdoor spaces"
```

**Complex Queries:**
```
"quiet cafe near nungambakkam with wifi"
"modern restaurant in adyar rating over 4"
"peaceful temple near mylapore"
"family-friendly beach in marina"
```

## Filter System

### Supported Filters

#### 1. Category Filter
- Exact match on category field
- Supported categories: cafe, restaurant, temple, beach, mall, park, museum, hotel, coworking, gym, hospital, school

#### 2. Location Filter
- Case-insensitive match on location field
- Matches any of 40+ Chennai locations
- Handles variations (e.g., "t nagar" matches "T Nagar")

#### 3. Rating Filter
- Minimum rating threshold
- Example: `ratingMin: 4.0` shows only places rated 4.0 and above

#### 4. Tags Filter
- Array-based filtering
- Must match ALL specified tags
- Example: `["quiet", "wifi"]` returns only places with both tags

### Filter Accumulation
Filters accumulate across chat messages:
```
Message 1: "cafe near nungambakkam"
  → Sets category="cafe", location="nungambakkam"

Message 2: "rating over 4.5"
  → Adds ratingMin=4.5 (keeps previous filters)

Message 3: "quiet"
  → Adds tag="quiet" (keeps all previous filters)

Result: Shows quiet cafes in Nungambakkam rated above 4.5
```

## Search Examples with Expected Results

### Example 1: Category Search
```
Query: "cafe"
Expected: 100 cafes across all locations
URL: /explore (with chat interaction)
```

### Example 2: Location Search  
```
Query: "places in nungambakkam"
Expected: All places (any category) in Nungambakkam
Approx: 17-18 places per location
```

### Example 3: Combined Search
```
Query: "restaurant near adyar"
Expected: Restaurants specifically in Adyar
Approx: 3-4 restaurants
URL: /explore/restaurant-places-near-adyar
```

### Example 4: Rating Filter
```
Query 1: "cafe"
Query 2: "rating over 4.5"
Expected: High-rated cafes only
Approx: 30-40 cafes
```

### Example 5: Tag Filter
```
Query: "quiet cafe"
Expected: Cafes with "quiet" tag
Approx: 30-40 cafes
```

### Example 6: Multiple Filters
```
Query 1: "cafe near nungambakkam"
Query 2: "rating above 4"
Query 3: "quiet"
Expected: Quiet, high-rated cafes in Nungambakkam
Approx: 1-2 cafes
```

## Implementation Details

### Data Generation
- Randomized ratings (3.0-5.0 range varies by category)
- Randomized status (70-90% "Open Now" depending on category)
- Randomized tags (2-5 tags per place)
- Distributed across 40 locations
- 6 placeholder images rotated

### File Structure
```
/src/Pages/Explore/data/
├── mockPlaces.js          # Main data file
└── README.md             # This documentation
```

### Exports

#### Default Export
```javascript
import mockPlaces from './data/mockPlaces';
// Returns: Array of 700+ place objects
```

#### Named Exports - By Category
```javascript
import { placesByCategory } from './data/mockPlaces';

placesByCategory.cafe          // 100 cafes
placesByCategory.restaurant    // 150 restaurants
placesByCategory.temple        // 80 temples
// ... etc
```

#### Named Exports - By Location
```javascript
import { placesByLocation } from './data/mockPlaces';

placesByLocation['nungambakkam']  // All places in Nungambakkam
placesByLocation['adyar']         // All places in Adyar
placesByLocation['t-nagar']       // All places in T Nagar
// ... etc (location names are lowercase with hyphens)
```

## Testing Scenarios

### 1. Empty State
- Visit `/explore`
- No filters set
- Shows welcome message only

### 2. Category Browse
- Search "cafe" → 100 results
- Search "restaurant" → 150 results
- Search "temple" → 80 results

### 3. Location Browse
- Search "nungambakkam" → ~17 places
- Search "adyar" → ~17 places

### 4. Filtered Search
- URL: `/explore/cafe-places-near-nungambakkam`
- Shows 2-3 cafes in Nungambakkam

### 5. Progressive Filtering
- Start with broad search, narrow down with additional messages
- Test filter accumulation across multiple queries

## Future Enhancements

### Potential Additions:
1. **More Categories**: libraries, theaters, bars, clubs, sports venues
2. **More Locations**: Expand to 100+ areas including suburbs
3. **More Attributes**: 
   - Opening hours
   - Price range ($$, $$$)
   - Contact information
   - Exact addresses
   - Menu items (for restaurants)
   - Amenities list
4. **Real Images**: Category-specific placeholder images
5. **Reviews**: Mock review text
6. **Distance**: Calculate from user location

## Notes

- Data is for **demonstration purposes only**
- Places are **fictional** or randomly assigned attributes
- Some real Chennai place names are used for authenticity
- Ratings and status are randomly generated
- This data supports the conversational discovery UI implementation

## Last Updated
February 18, 2026
