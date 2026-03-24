import React, { useState, useMemo } from "react";

import AreaFilter from "../Components/AreaFilter";
import AlphabetFilter from "../Components/AlphabetFilter";
import Search from "../Components/Search";

import { useNeighbourhood } from "../hooks/useNeighbourhood";
import { useLocations } from "../hooks/useLocations";
import { useSearch } from "../hooks/useSearch";

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
    <div>
      {/* ============== Banner ============ */}
      <section className="accaodomationBannerSection carquizbanner relative overflow-hidden">
        <div className="relative z-0">
          <img
            className="eventsCalenderIamge hidden sm:block w-full"
            src="/images/aruna-inne-main-image.jpeg"
            alt=" Carnatic Vocalist"
          />

          <img
            className="block sm:hidden w-full"
            src="/images/inner-page-araattai-image.jpeg"
            alt="Aruna sairam"
          />
        </div>

        <div className="accodoamationBannerContainer relative z-20">
          <div className="accodoamationBannerText"></div>
        </div>
      </section>

      {/* ALPHA FILTER WITH SECTION  */}

      <section className="mt-10 bg-white">
        <div className="container mx-auto px-6 lg:px-0">
          <div className="max-w-4xl mx-auto text-center">
            <div class="workIntro">
              <h1>Chennai Transportation</h1>
              <p>
                Public transportation in Chennai is managed by various
                government bodies, offering an extensive network that connects
                all parts of the city. Key modes include the{" "}
                <h3 class="seoPurposeClass">Chennai Metro Rail,</h3>Local
                trains, suburban trains,{" "}
                <h5 class="seoPurposeClass"> MTC buses,</h5> and Mini bus
                services. The metro is a fast-growing, modern option for daily
                commuters, while the bus system covers a wide range of routes at
                affordable fares. Suburban trains link the city to outer zones
                and neighboring districts, making it easier for thousands of
                residents to travel efficiently.
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
        <div className="container mx-auto px-6 lg:px-0">
          <AreaFilter
            data={filteredLocations}
            onChange={(v) => updateFilter("location", v)}
          />
        </div>
      </section>
    </div>
  );
}
