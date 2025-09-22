import { Helmet } from "react-helmet-async";
import React, { useState,useMemo } from "react";
import FiltersSidebar from "./Components/Filters/FiltersSidebar";
import PropertiesList from "./Components/Properties/PropertiesList";
import SortBy from "./Components/Properties/SortBy";
import { useProperties } from "./hooks/useProperties";
import "./Styles/PropertiesPage.css";
import { toggleArrayValue } from "./utils/filterHelpers";
import Pagination from "./Components/Properties/Pagination";



const PropertiesPage = () => {

const [filters, setFilters] = useState({
  locations: [],
  propertyTypes: [],
  bhk: [],
  purpose: [],
  furnishing: [],
  possessionStatus: [],
  parking: [],
  facing: [],
  minBudget: 0,
  maxBudget: 10000000,
  jacuzzi: false,
  swimmingPool: false,
  gatedCommunity: false,
  petsAllowed: false,
  ownership: [], 
});


  const [sortBy, setSortBy] = useState("");
  const { properties, loading } = useProperties(filters, sortBy);

  const ITEMS_PER_PAGE = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const paginatedProperties = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    const end = start + ITEMS_PER_PAGE;
    return properties.slice(start, end);
  }, [properties, currentPage]);

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);

  const handleCheckboxChange = (name, value) => {
    setFilters((prev) => ({
      ...prev,
      [name]: toggleArrayValue(prev[name], value),
    }));
    setCurrentPage(1); 
  };

  const handleBudgetChange = ([min, max]) => {
    setFilters((prev) => ({
      ...prev,
      minBudget: min,
      maxBudget: max,
    }));
    setCurrentPage(1);  
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
                  <div className="properties-grid">

              <PropertiesList
                properties={paginatedProperties}
                loading={loading}
              />
              </div>
              <div className="pagination-wrapper">
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
