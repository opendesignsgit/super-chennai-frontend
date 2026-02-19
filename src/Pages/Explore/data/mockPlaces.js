// Mock Places Data for SuperChennai Explore
// Total: 600+ diverse places across Chennai

const locations = [
  "Nungambakkam", "Adyar", "T Nagar", "Mylapore", "Anna Nagar", 
  "Velachery", "Tambaram", "Guindy", "Porur", "Egmore",
  "Triplicane", "Besant Nagar", "Alwarpet", "Kodambakkam", "Saidapet",
  "Vadapalani", "Ashok Nagar", "KK Nagar", "Perungudi", "Sholinganallur",
  "OMR", "ECR", "Royapettah", "Teynampet", "Mandaveli",
  "West Mambalam", "Chrompet", "St Thomas Mount", "Pallavaram", "Marina",
  "Thiruvanmiyur", "Palavakkam", "Injambakkam", "Thoraipakkam", "Madipakkam",
  "Virugambakkam", "Arumbakkam", "Saligramam", "Vadapalani", "Koyambedu"
];

// Location coordinates (lat, lng) for Chennai areas
const locationCoordinates = {
  "Nungambakkam": { lat: 13.0569, lng: 80.2425 },
  "Adyar": { lat: 13.0067, lng: 80.2572 },
  "T Nagar": { lat: 13.0418, lng: 80.2341 },
  "Mylapore": { lat: 13.0339, lng: 80.2675 },
  "Anna Nagar": { lat: 13.0850, lng: 80.2101 },
  "Velachery": { lat: 12.9750, lng: 80.2203 },
  "Tambaram": { lat: 12.9229, lng: 80.1275 },
  "Guindy": { lat: 13.0067, lng: 80.2206 },
  "Porur": { lat: 13.0381, lng: 80.1564 },
  "Egmore": { lat: 13.0732, lng: 80.2609 },
  "Triplicane": { lat: 13.0543, lng: 80.2784 },
  "Besant Nagar": { lat: 13.0006, lng: 80.2668 },
  "Alwarpet": { lat: 13.0338, lng: 80.2502 },
  "Kodambakkam": { lat: 13.0527, lng: 80.2253 },
  "Saidapet": { lat: 13.0210, lng: 80.2231 },
  "Vadapalani": { lat: 13.0501, lng: 80.2121 },
  "Ashok Nagar": { lat: 13.0358, lng: 80.2093 },
  "KK Nagar": { lat: 13.0358, lng: 80.2007 },
  "Perungudi": { lat: 12.9611, lng: 80.2411 },
  "Sholinganallur": { lat: 12.9010, lng: 80.2279 },
  "OMR": { lat: 12.9375, lng: 80.2341 },
  "ECR": { lat: 12.8996, lng: 80.2446 },
  "Royapettah": { lat: 13.0525, lng: 80.2644 },
  "Teynampet": { lat: 13.0381, lng: 80.2482 },
  "Mandaveli": { lat: 13.0276, lng: 80.2644 },
  "West Mambalam": { lat: 13.0338, lng: 80.2279 },
  "Chrompet": { lat: 12.9516, lng: 80.1462 },
  "St Thomas Mount": { lat: 13.0007, lng: 80.1993 },
  "Pallavaram": { lat: 12.9675, lng: 80.1491 },
  "Marina": { lat: 13.0499, lng: 80.2824 },
  "Thiruvanmiyur": { lat: 12.9822, lng: 80.2586 },
  "Palavakkam": { lat: 12.9698, lng: 80.2548 },
  "Injambakkam": { lat: 12.9134, lng: 80.2490 },
  "Thoraipakkam": { lat: 12.9391, lng: 80.2341 },
  "Madipakkam": { lat: 12.9623, lng: 80.1986 },
  "Virugambakkam": { lat: 13.0544, lng: 80.1993 },
  "Arumbakkam": { lat: 13.0696, lng: 80.2093 },
  "Saligramam": { lat: 13.0544, lng: 80.2007 },
  "Koyambedu": { lat: 13.0696, lng: 80.1993 }
};

const images = [
  "/images/Visit-Images/places-to-visit.jpg",
  "/images/Visit-Images/food.jpg",
  "/images/Visit-Images/marina-beach.jpg",
  "/images/Visit-Images/shopping.jpg",
  "/images/Visit-Images/things-to-do.jpg",
  "/images/Visit-Images/visitBanner.jpg",
];

const tags = {
  cafe: ["quiet", "wifi", "peaceful", "cozy", "modern", "traditional", "outdoor"],
  restaurant: ["family-friendly", "romantic", "buffet", "rooftop", "authentic", "fusion", "delivery"],
  temple: ["ancient", "peaceful", "historic", "traditional", "spiritual", "architectural"],
  beach: ["scenic", "peaceful", "sunset", "walking", "photography", "family-friendly"],
  mall: ["shopping", "food court", "cinema", "brand stores", "parking", "air-conditioned"],
  park: ["jogging", "playground", "peaceful", "green", "walking", "picnic"],
  museum: ["educational", "historic", "art", "science", "interactive", "guided tours"],
  hotel: ["luxury", "budget", "business", "family", "pool", "spa", "conference"],
  coworking: ["wifi", "quiet", "meeting rooms", "coffee", "printer", "24/7"],
  gym: ["equipment", "trainers", "group classes", "sauna", "swimming", "yoga"],
  hospital: ["emergency", "specialists", "diagnostics", "pharmacy", "ambulance"],
  school: ["cbse", "icse", "state board", "international", "daycare", "transport"],
};

// Helper function to add slight randomization to coordinates (within ~500m radius)
const randomizeCoords = (baseCoords) => {
  const offset = 0.005; // Approximately 500m
  return {
    lat: baseCoords.lat + (Math.random() - 0.5) * offset,
    lng: baseCoords.lng + (Math.random() - 0.5) * offset
  };
};

// Generate all places dynamically
const mockPlaces = [];
let idCounter = 1;

// Cafes - 100 places
const cafeNames = [
  "The Writer's Cafe", "Backyard Cafe", "Brew Room", "Coffee Culture", "Chai Point",
  "Cafe Coffee Day", "Starbucks", "Barista", "Blue Tokai", "Third Wave Coffee",
  "Chamiers Cafe", "Ciclo Cafe", "Words & Sips", "Book & Bean", "Mochas & Melodies",
  "Espresso Lounge", "Daily Dose", "Coffee Tales", "Bean There", "Grind House"
];

for (let i = 0; i < 100; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: cafeNames[i % cafeNames.length] + (i >= cafeNames.length ? ` ${Math.floor(i / cafeNames.length) + 1}` : ''),
    category: "cafe",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.3 ? "Open Now" : "Closed",
    tags: tags.cafe.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `A cozy cafe in ${locationName} perfect for coffee lovers`,
    vibe: { quiet: Math.floor(Math.random() * 5) + 1, modern: Math.floor(Math.random() * 5) + 1 },
  });
}

// Restaurants - 150 places
const restaurantNames = [
  "Spice Garden", "Tandoor House", "Biryani Paradise", "Dosa Point", "Curry Corner",
  "Royal Feast", "Empire Restaurant", "Saravana Bhavan", "Murugan Idli", "Sangeetha",
  "Adyar Ananda Bhavan", "Hotel Junior Kuppanna", "Ponnusamy Hotel", "Buhari Hotel", "Nair Mess",
  "Thalapakatti", "Dindigul Thalappakatti", "SS Hyderabad Biryani", "Paradise Biryani", "Meridian"
];

for (let i = 0; i < 150; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: restaurantNames[i % restaurantNames.length] + (i >= restaurantNames.length ? ` ${Math.floor(i / restaurantNames.length) + 1}` : ''),
    category: "restaurant",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.0 + Math.random() * 2).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.2 ? "Open Now" : "Closed",
    tags: tags.restaurant.slice(0, 2 + Math.floor(Math.random() * 4)),
    description: `Authentic dining experience in ${locationName} with diverse menu`,
    vibe: { quiet: Math.floor(Math.random() * 5) + 1, modern: Math.floor(Math.random() * 5) + 1 },
  });
}

// Temples - 80 places
const templeNames = [
  "Kapaleeshwarar Temple", "Parthasarathy Temple", "Vadapalani Murugan Temple", "Ashtalakshmi Temple",
  "Marundeeswarar Temple", "Triplicane Temple", "Mylapore Temple", "Thiruvottiyur Temple",
  "Thiruvanmiyur Temple", "Madhya Kailash Temple", "Kalikambal Temple", "Mundakakanni Amman Temple"
];

for (let i = 0; i < 80; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: templeNames[i % templeNames.length] + (i >= templeNames.length ? ` ${Math.floor(i / templeNames.length) + 1}` : ''),
    category: "temple",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (4.0 + Math.random() * 1).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.temple.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Sacred temple in ${locationName} with rich heritage`,
    vibe: { quiet: 4 + Math.floor(Math.random() * 2), modern: 1 + Math.floor(Math.random() * 2) },
  });
}

// Beaches - 30 places
const beachNames = [
  "Marina Beach", "Elliot's Beach", "Covelong Beach", "Mahabalipuram Beach", "Thiruvanmiyur Beach",
  "Neelankarai Beach", "Injambakkam Beach", "Palavakkam Beach", "Akkarai Beach", "Besant Nagar Beach"
];

for (let i = 0; i < 30; i++) {
  const beachLocations = ["Marina", "ECR", "OMR", "Besant Nagar", "Thiruvanmiyur"];
  const locationName = beachLocations[i % beachLocations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: beachNames[i % beachNames.length] + (i >= beachNames.length ? ` ${Math.floor(i / beachNames.length) + 1}` : ''),
    category: "beach",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.8 + Math.random() * 1.2).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.beach.slice(0, 3 + Math.floor(Math.random() * 3)),
    description: `Beautiful beach perfect for evening walks and sunset views`,
    vibe: { quiet: 3 + Math.floor(Math.random() * 3), modern: 2 + Math.floor(Math.random() * 2) },
  });
}

// Malls - 50 places
const mallNames = [
  "Express Avenue", "Phoenix MarketCity", "VR Chennai", "Forum Vijaya Mall", "Ampa Skywalk",
  "Grand Square Mall", "City Centre", "Spencer Plaza", "Citi Centre", "Abirami Mega Mall"
];

for (let i = 0; i < 50; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: mallNames[i % mallNames.length] + (i >= mallNames.length ? ` ${Math.floor(i / mallNames.length) + 1}` : ''),
    category: "mall",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.1 ? "Open Now" : "Closed",
    tags: tags.mall.slice(0, 3 + Math.floor(Math.random() * 3)),
    description: `Premier shopping destination in ${locationName} with diverse stores`,
    vibe: { quiet: 2 + Math.floor(Math.random() * 2), modern: 4 + Math.floor(Math.random() * 2) },
  });
}

// Parks - 50 places
const parkNames = [
  "Guindy National Park", "Semmozhi Poonga", "Nandanam Arts Park", "Besant Nagar Park", "Adyar Eco Park",
  "Anna Centenary Library Park", "YMCA Park", "Marina Beach Park", "Elliots Beach Park", "Nehru Park"
];

for (let i = 0; i < 50; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: parkNames[i % parkNames.length] + (i >= parkNames.length ? ` ${Math.floor(i / parkNames.length) + 1}` : ''),
    category: "park",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.park.slice(0, 3 + Math.floor(Math.random() * 3)),
    description: `Green oasis in ${locationName} perfect for relaxation`,
    vibe: { quiet: 4 + Math.floor(Math.random() * 2), modern: 2 + Math.floor(Math.random() * 2) },
  });
}

// Museums - 30 places
const museumNames = [
  "Government Museum", "Fort Museum", "Rail Museum", "Science Museum", "Art Gallery",
  "Contemporary Art Museum", "Maritime Museum", "Coin Museum", "Planetarium", "Children's Museum"
];

for (let i = 0; i < 30; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: museumNames[i % museumNames.length] + (i >= museumNames.length ? ` ${Math.floor(i / museumNames.length) + 1}` : ''),
    category: "museum",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.8 + Math.random() * 1.2).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.2 ? "Open Now" : "Closed",
    tags: tags.museum.slice(0, 3 + Math.floor(Math.random() * 3)),
    description: `Educational museum showcasing art, history, and culture`,
    vibe: { quiet: 4 + Math.floor(Math.random() * 2), modern: 3 + Math.floor(Math.random() * 2) },
  });
}

// Hotels - 60 places
const hotelNames = ["Taj", "ITC", "Radisson", "Hilton", "Hyatt", "Marriott", "Accord", "Lemon Tree", "Ibis", "Novotel"];
for (let i = 0; i < 60; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: `${hotelNames[i % hotelNames.length]} ${locationName}`,
    category: "hotel",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.hotel.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality hotel services in ${locationName}`,
    vibe: { quiet: Math.floor(Math.random() * 5) + 1, modern: 4 + Math.floor(Math.random() * 2) },
  });
}

// Coworking - 30 places
const coworkingNames = ["WeWork", "91Springboard", "Awfis", "Cowrks", "IndiQube", "Regus", "Urban Vault"];
for (let i = 0; i < 30; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: `${coworkingNames[i % coworkingNames.length]} ${locationName}`,
    category: "coworking",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.1 ? "Open Now" : "Closed",
    tags: tags.coworking.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Modern coworking space in ${locationName}`,
    vibe: { quiet: 3 + Math.floor(Math.random() * 2), modern: 5 },
  });
}

// Gyms - 40 places
const gymNames = ["Gold's Gym", "Fitness First", "Snap Fitness", "Cult.fit", "Talwalkars", "O2 Fitness"];
for (let i = 0; i < 40; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: `${gymNames[i % gymNames.length]} ${locationName}`,
    category: "gym",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.2 ? "Open Now" : "Closed",
    tags: tags.gym.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality gym facilities in ${locationName}`,
    vibe: { quiet: 2 + Math.floor(Math.random() * 2), modern: 4 + Math.floor(Math.random() * 2) },
  });
}

// Hospitals - 40 places
const hospitalNames = ["Apollo", "Fortis", "MIOT", "Kaveri", "Kauvery", "SIMS", "Vijaya", "Billroth"];
for (let i = 0; i < 40; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: `${hospitalNames[i % hospitalNames.length]} ${locationName}`,
    category: "hospital",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.hospital.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality hospital services in ${locationName}`,
    vibe: { quiet: 3, modern: 4 },
  });
}

// Schools - 40 places
const schoolNames = ["DAV", "PSBB", "Chettinad Vidyashram", "Bala Vidya Mandir", "Vidya Mandir", "Gateway"];
for (let i = 0; i < 40; i++) {
  const locationName = locations[i % locations.length];
  const baseCoords = locationCoordinates[locationName];
  mockPlaces.push({
    id: idCounter++,
    title: `${schoolNames[i % schoolNames.length]} ${locationName}`,
    category: "school",
    location: locationName,
    coordinates: randomizeCoords(baseCoords),
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.school.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality school services in ${locationName}`,
    vibe: { quiet: 3, modern: 3 },
  });
}

// Export everything
export default mockPlaces;

export const placesByCategory = {
  cafe: mockPlaces.filter(p => p.category === 'cafe'),
  restaurant: mockPlaces.filter(p => p.category === 'restaurant'),
  temple: mockPlaces.filter(p => p.category === 'temple'),
  beach: mockPlaces.filter(p => p.category === 'beach'),
  mall: mockPlaces.filter(p => p.category === 'mall'),
  park: mockPlaces.filter(p => p.category === 'park'),
  museum: mockPlaces.filter(p => p.category === 'museum'),
  hotel: mockPlaces.filter(p => p.category === 'hotel'),
  coworking: mockPlaces.filter(p => p.category === 'coworking'),
  gym: mockPlaces.filter(p => p.category === 'gym'),
  hospital: mockPlaces.filter(p => p.category === 'hospital'),
  school: mockPlaces.filter(p => p.category === 'school'),
};

export const placesByLocation = locations.reduce((acc, location) => {
  acc[location.toLowerCase().replace(/\s+/g, '-')] = mockPlaces.filter(
    p => p.location.toLowerCase() === location.toLowerCase()
  );
  return acc;
}, {});
