import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import FiltersSidebar from "./Components/Filters/FiltersSidebar";
import Pagination from "./Components/Properties/Pagination";
import PropertiesList from "./Components/Properties/PropertiesList";
import { useProperties } from "./hooks/useProperties";
import { toggleArrayValue } from "./utils/filterHelpers";
import { defaultFilters } from "./utils/filterDefault";


const PropertiesPage = () => {
  const [filters, setFilters] = useState(defaultFilters);

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

  const handleCheckboxChange = (name, value, nestedKey = null) => {
    setFilters((prev) => {
      if (nestedKey) {
        // for nested object filters (e.g., bathroomFeatures)
        return {
          ...prev,
          [name]: {
            ...prev[name],
            [nestedKey]: value,
          },
        };
      } else if (typeof prev[name] === "boolean") {
        return { ...prev, [name]: value };
      } else if (Array.isArray(prev[name])) {
        return { ...prev, [name]: toggleArrayValue(prev[name], value) };
      } else {
        // fallback in case it’s an object you didn’t expect
        return { ...prev, [name]: value };
      }
    });

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
    console.log("Clearing all filters");
    setFilters(defaultFilters);
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
              onClearAll={onClearAll}
            />

            <section className="siderbar-card">
              <div className="PropertiesCards">
                <PropertiesList
                  properties={paginatedProperties}
                  loading={loading}
                  sortBy={sortBy}
                  onSortChange={setSortBy}
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
