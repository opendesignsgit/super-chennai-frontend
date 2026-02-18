// Mock place data for explore discovery
export const mockPlaces = {
  beach: [
    {
      id: 1,
      name: "Marina Beach",
      location: "Marina",
      rating: 4.5,
      image: "/images/places/marina-beach.jpg",
      description: "One of the longest urban beaches in the world, perfect for morning walks and evening strolls.",
      isOpen: true,
      category: "beach",
      nearLocation: "ecr"
    },
    {
      id: 2,
      name: "Elliot's Beach",
      location: "Besant Nagar",
      rating: 4.3,
      image: "/images/places/elliots-beach.jpg",
      description: "A cleaner and calmer alternative to Marina Beach, popular with locals.",
      isOpen: true,
      category: "beach",
      nearLocation: "besant-nagar"
    },
    {
      id: 3,
      name: "Kovalam Beach",
      location: "Covelong",
      rating: 4.6,
      image: "/images/places/kovalam-beach.jpg",
      description: "Scenic beach perfect for water sports and relaxation.",
      isOpen: true,
      category: "beach",
      nearLocation: "ecr"
    }
  ],
  cafe: [
    {
      id: 4,
      name: "The Writer's Cafe",
      location: "Adyar",
      rating: 4.8,
      image: "/images/places/writers-cafe.jpg",
      description: "A quiet place to read near Adyar, maybe with good coffee. Perfect for book lovers and remote workers.",
      isOpen: true,
      category: "cafe",
      nearLocation: "adyar",
      vibeCheck: {
        quiet: 5,
        modern: 4
      }
    },
    {
      id: 5,
      name: "Brew Room",
      location: "Kilpauk",
      rating: 4.5,
      image: "/images/places/brew-room.jpg",
      description: "Cozy cafe with excellent coffee and comfortable seating.",
      isOpen: true,
      category: "cafe",
      nearLocation: "kilpauk"
    },
    {
      id: 6,
      name: "Coffee Culture",
      location: "Anna Nagar",
      rating: 4.4,
      image: "/images/places/coffee-culture.jpg",
      description: "Modern coffee shop with great ambiance for meetings.",
      isOpen: true,
      category: "cafe",
      nearLocation: "anna-nagar"
    }
  ],
  park: [
    {
      id: 7,
      name: "Guindy National Park",
      location: "Guindy",
      rating: 4.7,
      image: "/images/places/guindy-park.jpg",
      description: "One of the few national parks within city limits, great for nature walks.",
      isOpen: true,
      category: "park",
      nearLocation: "adyar"
    },
    {
      id: 8,
      name: "Semmozhi Poonga",
      location: "Cathedral Road",
      rating: 4.5,
      image: "/images/places/semmozhi-poonga.jpg",
      description: "Beautiful botanical garden in the heart of the city.",
      isOpen: true,
      category: "park",
      nearLocation: "anna-nagar"
    }
  ],
  temple: [
    {
      id: 9,
      name: "Kapaleeshwarar Temple",
      location: "Mylapore",
      rating: 4.8,
      image: "/images/places/kapaleeshwarar.jpg",
      description: "Ancient Shiva temple known for its Dravidian architecture.",
      isOpen: true,
      category: "temple",
      nearLocation: "adyar"
    },
    {
      id: 10,
      name: "Parthasarathy Temple",
      location: "Triplicane",
      rating: 4.7,
      image: "/images/places/parthasarathy.jpg",
      description: "8th-century temple dedicated to Lord Krishna.",
      isOpen: true,
      category: "temple",
      nearLocation: "anna-nagar"
    }
  ],
  restaurant: [
    {
      id: 11,
      name: "Murugan Idli Shop",
      location: "Various Locations",
      rating: 4.6,
      image: "/images/places/murugan-idli.jpg",
      description: "Famous for soft idlis and authentic South Indian breakfast.",
      isOpen: true,
      category: "restaurant",
      nearLocation: "velachery"
    },
    {
      id: 12,
      name: "Dakshin",
      location: "ITC Grand Chola",
      rating: 4.9,
      image: "/images/places/dakshin.jpg",
      description: "Fine dining South Indian cuisine with traditional flavors.",
      isOpen: true,
      category: "restaurant",
      nearLocation: "adyar"
    }
  ],
  shopping: [
    {
      id: 13,
      name: "Express Avenue",
      location: "Royapettah",
      rating: 4.5,
      image: "/images/places/express-avenue.jpg",
      description: "Large shopping mall with international and local brands.",
      isOpen: true,
      category: "shopping",
      nearLocation: "anna-nagar"
    },
    {
      id: 14,
      name: "Phoenix MarketCity",
      location: "Velachery",
      rating: 4.6,
      image: "/images/places/phoenix.jpg",
      description: "Modern shopping destination with entertainment options.",
      isOpen: true,
      category: "shopping",
      nearLocation: "velachery"
    }
  ]
};

// Get places by category and location
export const getPlacesByFilter = (category, location) => {
  if (!category && !location) {
    // Return all places
    return Object.values(mockPlaces).flat();
  }

  if (category && !location) {
    return mockPlaces[category] || [];
  }

  if (category && location) {
    const categoryPlaces = mockPlaces[category] || [];
    return categoryPlaces.filter(place => place.nearLocation === location);
  }

  return [];
};

// Get nearby places (Phase 1 - just return mixed results)
export const getNearbyPlaces = () => {
  const allPlaces = Object.values(mockPlaces).flat();
  // Shuffle and return first 6
  return allPlaces.sort(() => Math.random() - 0.5).slice(0, 6);
};
