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
  mockPlaces.push({
    id: idCounter++,
    title: cafeNames[i % cafeNames.length] + (i >= cafeNames.length ? ` ${Math.floor(i / cafeNames.length) + 1}` : ''),
    category: "cafe",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.3 ? "Open Now" : "Closed",
    tags: tags.cafe.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `A cozy cafe in ${locations[i % locations.length]} perfect for coffee lovers`,
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
  mockPlaces.push({
    id: idCounter++,
    title: restaurantNames[i % restaurantNames.length] + (i >= restaurantNames.length ? ` ${Math.floor(i / restaurantNames.length) + 1}` : ''),
    category: "restaurant",
    location: locations[i % locations.length],
    rating: (3.0 + Math.random() * 2).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.2 ? "Open Now" : "Closed",
    tags: tags.restaurant.slice(0, 2 + Math.floor(Math.random() * 4)),
    description: `Authentic dining experience in ${locations[i % locations.length]} with diverse menu`,
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
  mockPlaces.push({
    id: idCounter++,
    title: templeNames[i % templeNames.length] + (i >= templeNames.length ? ` ${Math.floor(i / templeNames.length) + 1}` : ''),
    category: "temple",
    location: locations[i % locations.length],
    rating: (4.0 + Math.random() * 1).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.temple.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Sacred temple in ${locations[i % locations.length]} with rich heritage`,
    vibe: { quiet: 4 + Math.floor(Math.random() * 2), modern: 1 + Math.floor(Math.random() * 2) },
  });
}

// Beaches - 30 places
const beachNames = [
  "Marina Beach", "Elliot's Beach", "Covelong Beach", "Mahabalipuram Beach", "Thiruvanmiyur Beach",
  "Neelankarai Beach", "Injambakkam Beach", "Palavakkam Beach", "Akkarai Beach", "Besant Nagar Beach"
];

for (let i = 0; i < 30; i++) {
  mockPlaces.push({
    id: idCounter++,
    title: beachNames[i % beachNames.length] + (i >= beachNames.length ? ` ${Math.floor(i / beachNames.length) + 1}` : ''),
    category: "beach",
    location: ["Marina", "ECR", "OMR", "Besant Nagar", "Thiruvanmiyur"][i % 5],
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
  mockPlaces.push({
    id: idCounter++,
    title: mallNames[i % mallNames.length] + (i >= mallNames.length ? ` ${Math.floor(i / mallNames.length) + 1}` : ''),
    category: "mall",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.1 ? "Open Now" : "Closed",
    tags: tags.mall.slice(0, 3 + Math.floor(Math.random() * 3)),
    description: `Premier shopping destination in ${locations[i % locations.length]} with diverse stores`,
    vibe: { quiet: 2 + Math.floor(Math.random() * 2), modern: 4 + Math.floor(Math.random() * 2) },
  });
}

// Parks - 50 places
const parkNames = [
  "Guindy National Park", "Semmozhi Poonga", "Nandanam Arts Park", "Besant Nagar Park", "Adyar Eco Park",
  "Anna Centenary Library Park", "YMCA Park", "Marina Beach Park", "Elliots Beach Park", "Nehru Park"
];

for (let i = 0; i < 50; i++) {
  mockPlaces.push({
    id: idCounter++,
    title: parkNames[i % parkNames.length] + (i >= parkNames.length ? ` ${Math.floor(i / parkNames.length) + 1}` : ''),
    category: "park",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.park.slice(0, 3 + Math.floor(Math.random() * 3)),
    description: `Green oasis in ${locations[i % locations.length]} perfect for relaxation`,
    vibe: { quiet: 4 + Math.floor(Math.random() * 2), modern: 2 + Math.floor(Math.random() * 2) },
  });
}

// Museums - 30 places
const museumNames = [
  "Government Museum", "Fort Museum", "Rail Museum", "Science Museum", "Art Gallery",
  "Contemporary Art Museum", "Maritime Museum", "Coin Museum", "Planetarium", "Children's Museum"
];

for (let i = 0; i < 30; i++) {
  mockPlaces.push({
    id: idCounter++,
    title: museumNames[i % museumNames.length] + (i >= museumNames.length ? ` ${Math.floor(i / museumNames.length) + 1}` : ''),
    category: "museum",
    location: locations[i % locations.length],
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
  mockPlaces.push({
    id: idCounter++,
    title: `${hotelNames[i % hotelNames.length]} ${locations[i % locations.length]}`,
    category: "hotel",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.hotel.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality hotel services in ${locations[i % locations.length]}`,
    vibe: { quiet: Math.floor(Math.random() * 5) + 1, modern: 4 + Math.floor(Math.random() * 2) },
  });
}

// Coworking - 30 places
const coworkingNames = ["WeWork", "91Springboard", "Awfis", "Cowrks", "IndiQube", "Regus", "Urban Vault"];
for (let i = 0; i < 30; i++) {
  mockPlaces.push({
    id: idCounter++,
    title: `${coworkingNames[i % coworkingNames.length]} ${locations[i % locations.length]}`,
    category: "coworking",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.1 ? "Open Now" : "Closed",
    tags: tags.coworking.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Modern coworking space in ${locations[i % locations.length]}`,
    vibe: { quiet: 3 + Math.floor(Math.random() * 2), modern: 5 },
  });
}

// Gyms - 40 places
const gymNames = ["Gold's Gym", "Fitness First", "Snap Fitness", "Cult.fit", "Talwalkars", "O2 Fitness"];
for (let i = 0; i < 40; i++) {
  mockPlaces.push({
    id: idCounter++,
    title: `${gymNames[i % gymNames.length]} ${locations[i % locations.length]}`,
    category: "gym",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: Math.random() > 0.2 ? "Open Now" : "Closed",
    tags: tags.gym.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality gym facilities in ${locations[i % locations.length]}`,
    vibe: { quiet: 2 + Math.floor(Math.random() * 2), modern: 4 + Math.floor(Math.random() * 2) },
  });
}

// Hospitals - 40 places
const hospitalNames = ["Apollo", "Fortis", "MIOT", "Kaveri", "Kauvery", "SIMS", "Vijaya", "Billroth"];
for (let i = 0; i < 40; i++) {
  mockPlaces.push({
    id: idCounter++,
    title: `${hospitalNames[i % hospitalNames.length]} ${locations[i % locations.length]}`,
    category: "hospital",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.hospital.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality hospital services in ${locations[i % locations.length]}`,
    vibe: { quiet: 3, modern: 4 },
  });
}

// Schools - 40 places
const schoolNames = ["DAV", "PSBB", "Chettinad Vidyashram", "Bala Vidya Mandir", "Vidya Mandir", "Gateway"];
for (let i = 0; i < 40; i++) {
  mockPlaces.push({
    id: idCounter++,
    title: `${schoolNames[i % schoolNames.length]} ${locations[i % locations.length]}`,
    category: "school",
    location: locations[i % locations.length],
    rating: (3.5 + Math.random() * 1.5).toFixed(1),
    image: images[i % images.length],
    status: "Open Now",
    tags: tags.school.slice(0, 2 + Math.floor(Math.random() * 3)),
    description: `Quality school services in ${locations[i % locations.length]}`,
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
