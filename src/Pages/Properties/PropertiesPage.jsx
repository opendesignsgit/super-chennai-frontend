import { Helmet } from "react-helmet-async";
import React, { useState } from "react";
import FiltersSidebar from "./Components/Filters/FiltersSidebar";
import PropertiesList from "./Components/Properties/PropertiesList";
import SortBy from "./Components/Properties/SortBy";
import { useProperties } from "./hooks/useProperties";
import "./Styles/PropertiesPage.css";
import { toggleArrayValue } from "./utils/filterHelpers";

const PropertiesPage = () => {
  const [filters, setFilters] = useState({
    minBudget: 0,
    maxBudget: 10000000,
    locations: [],
    bhk: [],
    propertyTypes: [],
  });

  const [sortBy, setSortBy] = useState("");
  const { properties, loading } = useProperties(filters, sortBy);

  const handleCheckboxChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: toggleArrayValue(prev[name], value),
    }));
  };

  const handleBudgetChange = ([min, max]) => {
    setFilters((prev) => ({
      ...prev,
      minBudget: min,
      maxBudget: max,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Properties | Chennai</title>
        <meta
          name="description"
          content="Explore properties in Chennai - plots, apartments, villas, and more."
        />
        <link rel="canonical" href="/properties" />
      </Helmet>

      <div className="accaodomationBannerSection">
        <div>
          <img src="/images/banner-blog.jpg" alt="Properties Banner" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Properties</h3>
            <div className="breadCrum">
              <a href="/">Home</a> - <a href="#">Properties</a>
            </div>
          </div>
        </div>
      </div>
      <div className="properties-page container-box">
        <div className="properties-layout">
          <div className="properties-page">
            <FiltersSidebar
              filters={filters}
              onCheckboxChange={handleCheckboxChange}
              onBudgetChange={handleBudgetChange}
            />
            <main className="properties-main">
              <div className="properties-header">
                <h2>{properties.length} Result(s) Found</h2>
                <SortBy value={sortBy} onChange={setSortBy} />
              </div>
              <PropertiesList properties={properties} loading={loading} />
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
