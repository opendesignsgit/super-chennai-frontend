import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import FiltersSidebar from "./Components/Filters/FiltersSidebar";
import Pagination from "./Components/Properties/Pagination";
import PropertiesList from "./Components/Properties/PropertiesList";
import { useProperties } from "./hooks/useProperties";
import { toggleArrayValue } from "./utils/filterHelpers";

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

  const onClearAll = () => {
    setFilters({
      locations: [],
      propertyTypes: [],
      bhk: [],
      purpose: [],
      furnishing: [],
      possessionStatus: [],
      facing: [],
      parking: [],
      minBudget: 0,
      maxBudget: 10000000,
      jacuzzi: false,
      swimmingPool: false,
      gatedCommunity: false,
      petsAllowed: false,
    });
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

      <div className="bg-[#f4f5f7]">
        <div className="container max-w-7xl mx-auto px-4 !mt-0 !mb-0  mainConiatinerPropertyList">
          <div className="sidebar-stylescss">
            <FiltersSidebar
              filters={filters}
              onCheckboxChange={handleCheckboxChange}
              onBudgetChange={handleBudgetChange}
            />

            <section className="siderbar-card">
              <div className="PropertiesCards">
                <PropertiesList
                  properties={paginatedProperties}
                  loading={loading}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
                  onClearAll={onClearAll}
                   filters={filters}
                />
                <div className="pagination-wrapper">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertiesPage;
