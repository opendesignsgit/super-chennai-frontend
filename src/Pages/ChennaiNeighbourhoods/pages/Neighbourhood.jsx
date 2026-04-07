import { useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import AlphabetFilter from "../Components/AlphabetFilter";
import AreaFilter from "../Components/AreaFilter";
import EmptyState from "../Components/locations/EmptyState";
import SkeletonLocations from "../Components/locations/SkeletonLocations";
import Search from "../Components/Search";
import { useLocations } from "../hooks/useLocations";
import { useSearch } from "../hooks/useSearch";
import "../Style/style.css";
import NeighbourhoodListSkeleton from "../Components/locations/NeighbourhoodListSkeleton";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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

  /* SEARCH + ALPHABET FILTER  ADVANCE SEARCH ALGRITHEMS */

  function normalize(str = "") {
    return str
      .toLowerCase()
      .normalize("NFD") // remove accents
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]/g, "") // remove symbols
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

  // alphabet filter
  if (filters.alpha) {
    result = result.filter((loc) =>
      loc.locality?.toUpperCase().startsWith(filters.alpha),
    );
  }

  // search filter
  if (filters.q) {
    const q = normalize(filters.q);

    result = result
      .map((loc) => {
        const name = normalize(loc.locality);
        const pin = (loc.pincode || "").toString();

        let score = 0;

        // locality exact
        if (name === q) score += 100;

        // locality starts
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

if (loading) return <NeighbourhoodListSkeleton />;

  return (
    <>
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

        <div className="accaodomationBannerSection">
          <img src="/images/restaurants-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Neighbourhood</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai">Live </Link> -{" "}
                <a href=""> Neighbourhood </a>
              </div>
            </div>
          </div>
        </div>

        {/* ALPHA FILTER WITH SECTION  */}

        <div className="">
          <section className="mt-10 bg-white visitIntroParaSection">
            <div className="container max-w-7xl mx-auto px-4 !mb-0">
              <div className="">
                <div class="workIntro">
                  <h1>Neighbourhood</h1>
                  <p>
                    Public transportation in Chennai is managed by various
                    government bodies, offering an extensive network that
                    connects all parts of the city. Key modes include the
                    Industry.
                  </p>
                </div>

                <Search
                  onSearch={(q) => {
                    updateFilter("q", q);
                    updateFilter("alpha", "");
                  }}
                />

                <AlphabetFilter onChange={(v) => updateFilter("alpha", v)} />
              </div>
            </div>
          </section>

          <section className="mt-0 bg-white">
            <div className="container max-w-7xl mx-auto px-4 !mb-0">
              {loading ? (
                <SkeletonLocations />
              ) : error ? (
                <EmptyState
                  title="No Locations Found"
                  message="No neighbourhoods match your search or filters."
                  onReset={() => {
                    updateFilter("q", "");
                    updateFilter("alpha", "");
                    updateFilter("location", "");
                  }}
                />
              ) : filteredLocations?.length === 0 ? (
                <EmptyState
                  title="No Locations Found"
                  message="No neighbourhoods match your search or filters."
                  onReset={() => {
                    updateFilter("q", "");
                    updateFilter("alpha", "");
                    updateFilter("location", "");
                  }}
                />
              ) : (
                <>
                  <p className="mb-10">
                    <span
                      className="inline-flex items-center gap-2 px-7 py-2.5 rounded-full text-sm font-semibold showingloactionsss"
                      style={{ background: "#F3ECFB", color: "#6A3FA0" }}
                    >
                      Showing {filteredLocations.length} locations
                    </span>
                  </p>

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
    </>
  );
}
