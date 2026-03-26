import React, { useState, useMemo } from "react";
import AreaFilter from "../Components/AreaFilter";
import AlphabetFilter from "../Components/AlphabetFilter";
import Search from "../Components/Search";
import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { useLocations } from "../hooks/useLocations";
import { useSearch } from "../hooks/useSearch";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../Style/style.css";

export default function ChennaiNeighbourhood() {
  const { filters, updateFilter } = useSearch();
  const locations = useLocations();

  const { data, loading } = useNeighbourhood({
    location: filters.location,
  });

  function normalize(str = "") {
    return str
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/aa/g, "a")
      .replace(/oo/g, "o")
      .replace(/ee/g, "e")
      .replace(/th/g, "t")
      .replace(/dh/g, "d");
  }
  /* SEARCH + ALPHABET FILTER */
  const filteredLocations = useMemo(() => {
    let result = locations || [];

    if (filters.alpha) {
      result = result.filter((loc) =>
        loc.locality?.toUpperCase().startsWith(filters.alpha),
      );
    }

    if (filters.q) {
      const q = normalize(filters.q);

      result = result.filter((loc) => {
        const name = normalize(loc.locality);
        const pin = loc.pincode?.toString();

        return name.includes(q) || q.includes(name) || pin?.includes(filters.q);
      });
    }

    return result;
  }, [locations, filters]);

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
      <div>
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

          <section className="mt-10 bg-white">
            <div className="container max-w-7xl mx-auto px-4 !mb-0">
              <AreaFilter
                data={filteredLocations}
                onChange={(v) => updateFilter("location", v)}
              />
            </div>
          </section>



          {loading && <p>Loading...</p>}

          <div className="row">
            {data?.map((item) => (
              <div key={item.id} className="col-md-4">
                <h4>{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
