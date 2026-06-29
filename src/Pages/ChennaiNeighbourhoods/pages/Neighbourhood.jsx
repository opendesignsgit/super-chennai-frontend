import { useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AlphabetFilter from "../Components/AlphabetFilter";
import AreaFilter from "../Components/AreaFilter";
import CardEmptyState from "../Components/locations/CardEmptyState";
import SkeletonLocations from "../Components/locations/SkeletonLocations";
import Search from "../Components/Search";
import { useLocations } from "../hooks/useLocations";
import { useSearch } from "../hooks/useSearch";
import "../Style/style.css";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import "../Style/neighbourhood2_0.css";

export default function ChennaiNeighbourhood() {
  const { filters, updateFilter } = useSearch();
  const { locations, loading, error } = useLocations();
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchQuery = params.get("search");

  useEffect(() => {
    if (searchQuery) {
      updateFilter("q", searchQuery);
      updateFilter("alpha", "");
    }
  }, [searchQuery]);

  console.log("cardvaluess", locations);

  function normalize(str = "") {
    return str
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "")
      .replace(/aa|ah/g, "a")
      .replace(/ee|eh/g, "e")
      .replace(/oo|oh/g, "o")
      .replace(/th/g, "t")
      .replace(/dh/g, "d");
  }

  function getDistance(a = "", b = "") {
    const matrix = [];

    for (let i = 0; i <= b.length; i++) matrix[i] = [i];
    for (let j = 0; j <= a.length; j++) matrix[0][j] = j;

    for (let i = 1; i <= b.length; i++) {
      for (let j = 1; j <= a.length; j++) {
        matrix[i][j] =
          b[i - 1] === a[j - 1]
            ? matrix[i - 1][j - 1]
            : Math.min(
                matrix[i - 1][j - 1] + 1,
                matrix[i][j - 1] + 1,
                matrix[i - 1][j] + 1,
              );
      }
    }

    return matrix[b.length][a.length];
  }

  const filteredLocations = useMemo(() => {
    let result = locations || [];

    if (filters.alpha) {
      result = result.filter((loc) =>
        loc.locality?.toUpperCase().startsWith(filters.alpha),
      );
    }

    if (filters.q) {
      const q = normalize(filters.q);

      result = result
        .map((loc) => {
          const name = normalize(loc.locality);
          const pin = (loc.pincode || "").toString();

          let score = 0;

          
          if (name === q) score += 100;

        
          if (name.startsWith(q)) score += 80;

          // locality contains
          if (name.includes(q)) score += 60;

          // fuzzy locality
          const dist = getDistance(name, q);
          if (dist <= 2) score += 50;

          // ✅ PINCODE EXACT
          if (pin === filters.q) score += 120;

          // ✅ PINCODE STARTS
          if (pin.startsWith(filters.q)) score += 90;

          // ✅ PINCODE CONTAINS
          if (pin.includes(filters.q)) score += 70;

          return { loc, score };
        })
        .filter((item) => item.score > 0)
        .sort((a, b) => b.score - a.score)
        .map((item) => item.loc);
    }

    return result;
  }, [locations, filters]);

  const [activeTab, setActiveTab] = useState("search");
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("");
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email) return;
    alert(`Subscribed with: ${email}`);
    setEmail("");
  };

  if (loading) return <NeighbourhoodListSkeleton />;

  return (
    <div id="poppinsssFamily">
      <Helmet>
        <title>Restaurants in Chennai | Food in Chennai</title>
        <meta
          name="description"
          content="Experience the best restaurants in Chennai with rich non-vegetarian and vegetarian foods, trendy cafés & global cuisines that make every meal unforgettable"
        />
        <link rel="canonical" href="/visit/restaurants-in-chennai" />
      </Helmet>

      <div className="neighbourhoodcontiner">
        {/* ============== Banner ============ */}
        <section
          className="relative min-h-[550px] sm:min-h-[550px] flex items-center overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, #1a0a2e 0%, #2d1155 40%, #3b1a6b 60%, #1a1a4e 100%)",
          }}
        >
          <div className="absolute inset-0 w-full h-full opacity-30 pointer-events-none">
            <img
              src="/images/restaurants-banner.jpg"
              alt="Chennai Background"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 w-full">
            <div className="text-xs text-white/60 mb-4 neighbourtwoparagraph neighbourhoodbrudcrum">
              <div className="flex gap-2">
                <a href="/">
                  <span className="cursor-pointer">Home</span>
                </a>
                <span>-</span>
                <span className="cursor-pointer">Neighbourhood</span>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-12">
              <div className="text-white lg:w-[40%]">
                <h1 className="text-3xl sm:text-4xl font-semibold leading-tight mb-3">
                  Explore Chennai
                  <br />
                  <span className="text-[#a44294] ">Neighbourhoods</span>
                </h1>
                <p className="text-white/70 text-sm leading-relaxed neighbourtwoheaidngssparagraph">
                  Discover the best localities in Chennai. Find schools,
                  hospitals, transport, lifestyle, food, real estate trends and
                  everything you need to know about your neighbourhood.
                </p>
              </div>

              <Search
                onSearch={(q) => {
                  updateFilter("q", q);
                  updateFilter("alpha", "");
                }}
              />
            </div>
          </div>
        </section>
        <div className="">
          <AlphabetFilter
            value={filters.alpha}
            onChange={(v) => updateFilter("alpha", v)}
          />
          <section className="py-10 cardssneightwosec">
            <div className="container max-w-7xl mx-auto px-4 !mb-0">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-bold text-gray-900 neighbourtwosecondheading">
                  Popular Neighbourhoods
                </h2>
                <a
                  href="#"
                  className="text-[14px] font-semibold text-[#a44294] hover:text-purple-900 transition-colors"
                ></a>
              </div>
              {loading ? (
                <SkeletonLocations />
              ) : error ? (
                <CardEmptyState
                  title="No Locations Found"
                  message="No results available for your search. We’re continuously adding new neighbourhoods—please check back soon."
                  onReset={() => {
                    updateFilter("q", "");
                    updateFilter("alpha", "");
                    updateFilter("location", "");
                  }}
                />
              ) : filteredLocations?.length === 0 ? (
                <CardEmptyState
                  title="No Locations Found"
                  message="No results available for your search. We’re continuously adding new neighbourhoods—please check back soon.."
                  onReset={() => {
                    updateFilter("q", "");
                    updateFilter("alpha", "");
                    updateFilter("location", "");
                  }}
                />
              ) : (
                <>
                  <AreaFilter
                    data={filteredLocations}
                    onChange={(v) => updateFilter("location", v)}
                  />
                </>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
