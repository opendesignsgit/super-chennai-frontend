# SuperChennai Explore - Search & URL Documentation

## Quick Reference Guide

### 🔍 Search Patterns

#### By Category
```
"cafe"           → 100 cafes
"restaurant"     → 150 restaurants
"temple"         → 80 temples
"beach"          → 30 beaches
"mall"           → 50 malls
"park"           → 50 parks
"museum"         → 30 museums
"hotel"          → 60 hotels
"coworking"      → 30 coworking spaces
"gym"            → 40 gyms
"hospital"       → 40 hospitals
"school"         → 40 schools
```

#### By Location
```
"nungambakkam"   → ~17 places
"adyar"          → ~17 places
"t nagar"        → ~17 places
"mylapore"       → ~17 places
"anna nagar"     → ~17 places
"velachery"      → ~17 places
"marina"         → ~17 places
"omr"            → ~17 places
"ecr"            → ~17 places
```

#### Combined Searches
```
"cafe near nungambakkam"              → 2-3 cafes
"restaurant in adyar"                 → 3-4 restaurants
"temple near mylapore"                → 2 temples
"beach in marina"                     → 1-2 beaches
"mall in t nagar"                     → 1-2 malls
"park near anna nagar"                → 1 park
"hotel in guindy"                     → 1-2 hotels
"coworking space in omr"              → 1 space
```

#### With Filters
```
"cafe rating over 4"                  → 40-50 cafes
"restaurant rating above 4.5"         → 40-50 restaurants
"quiet cafe"                          → 30-40 cafes
"peaceful temple"                     → 25-30 temples
"modern mall"                         → 30-35 malls
"family-friendly beach"               → 10-15 beaches
```

#### Complex Queries
```
"quiet cafe near nungambakkam with wifi"                    → 1-2 cafes
"modern restaurant in adyar rating over 4"                  → 1-2 restaurants
"peaceful temple near mylapore rating above 4.5"            → 1 temple
"family-friendly beach in marina"                           → 1 beach
"modern mall in t nagar with parking"                       → 1 mall
```

---

## 🔗 URL Structure

### Pattern
```
/explore/{category}-places-near-{location}
```

### Examples

#### Cafes
```
/explore/cafe-places-near-nungambakkam
/explore/cafe-places-near-adyar
/explore/cafe-places-near-t-nagar
/explore/cafe-places-near-mylapore
/explore/cafe-places-near-anna-nagar
```

#### Restaurants
```
/explore/restaurant-places-near-nungambakkam
/explore/restaurant-places-near-adyar
/explore/restaurant-places-near-t-nagar
/explore/restaurant-places-near-mylapore
/explore/restaurant-places-near-velachery
```

#### Temples
```
/explore/temple-places-near-mylapore
/explore/temple-places-near-triplicane
/explore/temple-places-near-thiruvanmiyur
/explore/temple-places-near-vadapalani
```

#### Beaches
```
/explore/beach-places-near-marina
/explore/beach-places-near-besant-nagar
/explore/beach-places-near-thiruvanmiyur
/explore/beach-places-near-ecr
```

#### Malls
```
/explore/mall-places-near-t-nagar
/explore/mall-places-near-anna-nagar
/explore/mall-places-near-velachery
/explore/mall-places-near-omr
```

#### Parks
```
/explore/park-places-near-anna-nagar
/explore/park-places-near-guindy
/explore/park-places-near-adyar
/explore/park-places-near-besant-nagar
```

#### Other Categories
```
/explore/museum-places-near-egmore
/explore/hotel-places-near-guindy
/explore/coworking-places-near-omr
/explore/gym-places-near-velachery
/explore/hospital-places-near-adyar
/explore/school-places-near-anna-nagar
```

---

## 📍 All Supported Locations (40+)

### Central Chennai
- Nungambakkam
- T Nagar
- Mylapore
- Egmore
- Triplicane
- Royapettah
- Teynampet
- Alwarpet
- Kodambakkam

### North Chennai
- Anna Nagar
- Kilpauk
- Vadapalani
- Ashok Nagar
- KK Nagar
- Virugambakkam
- Arumbakkam
- Saligramam
- Koyambedu

### South Chennai
- Adyar
- Velachery
- Guindy
- Saidapet
- Mandaveli
- West Mambalam
- Chrompet
- St Thomas Mount
- Pallavaram

### East Chennai
- Sholinganallur
- Perungudi
- Thoraipakkam
- Thiruvanmiyur
- Palavakkam
- Injambakkam
- OMR (Old Mahabalipuram Road)
- ECR (East Coast Road)

### Coastal Areas
- Marina
- Besant Nagar
- Neelankarai

### Suburbs
- Tambaram
- Porur
- Madipakkam

---

## 🏷️ Available Tags

### Cafe Tags
- quiet, wifi, peaceful, cozy, modern, traditional, outdoor

### Restaurant Tags
- family-friendly, romantic, buffet, rooftop, authentic, fusion, delivery

### Temple Tags
- ancient, peaceful, historic, traditional, spiritual, architectural

### Beach Tags
- scenic, peaceful, sunset, walking, photography, family-friendly

### Mall Tags
- shopping, food court, cinema, brand stores, parking, air-conditioned

### Park Tags
- jogging, playground, peaceful, green, walking, picnic

### Museum Tags
- educational, historic, art, science, interactive, guided tours

### Hotel Tags
- luxury, budget, business, family, pool, spa, conference

### Coworking Tags
- wifi, quiet, meeting rooms, coffee, printer, 24/7

### Gym Tags
- equipment, trainers, group classes, sauna, swimming, yoga

### Hospital Tags
- emergency, specialists, diagnostics, pharmacy, ambulance

### School Tags
- cbse, icse, state board, international, daycare, transport

---

## 💡 Search Tips

### Progressive Refinement
Start broad, then narrow down:
```
1. "restaurant"           → 150 results
2. "in adyar"            → 4 results
3. "rating over 4"       → 2 results
4. "family-friendly"     → 1 result
```

### Use Natural Language
The system understands conversational queries:
```
✅ "cafe near nungambakkam"
✅ "show me cafes in nungambakkam"
✅ "find cafes near nungambakkam"
✅ "I want cafe in nungambakkam"
```

### Combine Filters
Mix different filter types:
```
Category + Location:
"cafe near nungambakkam"

Category + Rating:
"restaurant rating over 4"

Category + Tag:
"quiet cafe"

Category + Location + Rating:
"cafe near nungambakkam rating over 4.5"

Category + Location + Tag:
"quiet cafe near nungambakkam"
```

### Location Variations
System handles variations:
```
"t nagar" = "T Nagar" = "t-nagar"
"omr" = "OMR"
"ecr" = "ECR"
"anna nagar" = "Anna Nagar"
```

---

## 📊 Expected Result Counts

### By Category (Total: 700)
```
Cafes:       100 (14%)
Restaurants: 150 (21%)
Temples:      80 (11%)
Beaches:      30 (4%)
Malls:        50 (7%)
Parks:        50 (7%)
Museums:      30 (4%)
Hotels:       60 (9%)
Coworking:    30 (4%)
Gyms:         40 (6%)
Hospitals:    40 (6%)
Schools:      40 (6%)
```

### By Location (40 locations)
```
Per location: ~17-18 places on average
Range: 15-20 places per location
```

### By Filters
```
No filters:           0 results (empty state)
Category only:        30-150 results
Location only:        15-20 results
Category + Location:  1-5 results
With rating filter:   30-50% of results
With tag filter:      20-40% of results
Multiple filters:     1-3 results (highly specific)
```

---

## 🧪 Testing Examples

### Test Case 1: Simple Category
```
Input: "cafe"
Expected: 100 results
Time: < 100ms
```

### Test Case 2: Category + Location
```
Input: "restaurant near adyar"
Expected: 3-4 results
URL: /explore/restaurant-places-near-adyar
```

### Test Case 3: Progressive Filter
```
Step 1: "cafe"              → 100 results
Step 2: "near nungambakkam" → 2-3 results
Step 3: "rating over 4.5"   → 1-2 results
```

### Test Case 4: Tag Filter
```
Input: "quiet cafe"
Expected: 30-40 results
Tags matched: ["quiet"]
```

### Test Case 5: Complex Query
```
Input: "modern restaurant in adyar rating over 4 with rooftop"
Expected: 1 result (if exists)
Filters: category, location, rating, 2 tags
```

---

## 🚀 Performance Notes

- **Initial Load**: 0 results (empty state)
- **Category Search**: Instant (client-side filter)
- **Location Search**: Instant (client-side filter)
- **Combined Filters**: Instant (all client-side)
- **Data Size**: 700 objects (~50KB)
- **Memory**: Minimal (loaded once)

---

## 📝 Notes

- All data is **mock/dummy data** for demonstration
- Ratings are **randomly generated** (3.0-5.0)
- Status is **randomly assigned** (70-90% "Open Now")
- Tags are **randomly selected** (2-5 tags per place)
- Images are **placeholder images** (6 images rotated)
- Locations are **real Chennai areas**
- Place names are **mix of real and fictional**

---

**Last Updated**: February 18, 2026
**Total Places**: 700+
**Total Locations**: 40+
**Total Categories**: 12
