import PlaceCard from "./PlaceCard";

export default function DiscoveryResults({ filters, mode, onPlaceClick }) {
  // Mock data for demonstration
  const mockPlaces = [
    {
      id: 1,
      title: "The Writer's Cafe",
      category: "cafe",
      location: "Nungambakkam",
      rating: 4.8,
      image: "/images/Visit-Images/places-to-visit.jpg",
      status: "Open Now",
      tags: ["quiet", "wifi", "peaceful"],
      description: "A quiet place to read near Adyar, maybe with good coffee",
      vibe: { quiet: 5, modern: 4 },
    },
    {
      id: 2,
      title: "Backyard Cafe",
      category: "cafe",
      location: "Adyar",
      rating: 4.6,
      image: "/images/Visit-Images/food.jpg",
      status: "Open Now",
      tags: ["outdoor", "modern"],
      description: "Modern cafe with outdoor seating",
      vibe: { quiet: 3, modern: 5 },
    },
    {
      id: 3,
      title: "Marina Beach",
      category: "beach",
      location: "Marina",
      rating: 4.5,
      image: "/images/Visit-Images/marina-beach.jpg",
      status: "Open Now",
      tags: ["outdoor", "peaceful"],
      description: "Beautiful beach for evening walks",
      vibe: { quiet: 4, modern: 2 },
    },
    {
      id: 4,
      title: "Kapaleeshwarar Temple",
      category: "temple",
      location: "Mylapore",
      rating: 4.9,
      image: "/images/Visit-Images/places-to-visit.jpg",
      status: "Open Now",
      tags: ["traditional", "peaceful"],
      description: "Historic temple with beautiful architecture",
      vibe: { quiet: 4, modern: 1 },
    },
    {
      id: 5,
      title: "Express Avenue Mall",
      category: "mall",
      location: "Royapettah",
      rating: 4.7,
      image: "/images/Visit-Images/shopping.jpg",
      status: "Open Now",
      tags: ["modern", "shopping"],
      description: "Large shopping mall with many stores",
      vibe: { quiet: 2, modern: 5 },
    },
    {
      id: 6,
      title: "Guindy National Park",
      category: "park",
      location: "Guindy",
      rating: 4.4,
      image: "/images/Visit-Images/things-to-do.jpg",
      status: "Open Now",
      tags: ["outdoor", "peaceful", "quiet"],
      description: "Natural park in the city",
      vibe: { quiet: 5, modern: 2 },
    },
  ];

  // Filter places based on active filters
  const filteredPlaces = mockPlaces.filter((place) => {
    if (filters.category && place.category !== filters.category) {
      return false;
    }
    if (filters.location && place.location.toLowerCase() !== filters.location.toLowerCase()) {
      return false;
    }
    if (filters.ratingMin && place.rating < filters.ratingMin) {
      return false;
    }
    if (filters.tags && filters.tags.length > 0) {
      const hasAllTags = filters.tags.every((tag) =>
        place.tags.some((placeTag) => placeTag.toLowerCase() === tag.toLowerCase())
      );
      if (!hasAllTags) {
        return false;
      }
    }
    return true;
  });

  // Helper to check if any filters are active
  const hasActiveFilters = (filters) => {
    return Object.values(filters).some((v) => {
      if (Array.isArray(v)) {
        return v.length > 0;
      }
      return v !== null && v !== undefined;
    });
  };

  // Show all places if no filters applied
  const displayPlaces = hasActiveFilters(filters) ? filteredPlaces : [];

  return (
    <div className="discovery-results">
      {displayPlaces.length === 0 && Object.values(filters).some((v) => v && (!Array.isArray(v) || v.length > 0)) && (
        <div className="no-results">
          <p>No places found matching your filters. Try adjusting your search.</p>
        </div>
      )}
      {displayPlaces.length === 0 && !Object.values(filters).some((v) => v && (!Array.isArray(v) || v.length > 0)) && (
        <div className="empty-state">
          <h3>Start a conversation to discover places</h3>
          <p>Try: "cafe near nungambakkam" or "peaceful places in chennai"</p>
        </div>
      )}
      {displayPlaces.length > 0 && (
        <div className="results-grid">
          {displayPlaces.map((place) => (
            <PlaceCard key={place.id} place={place} onClick={() => onPlaceClick(place)} />
          ))}
        </div>
      )}
    </div>
  );
}
