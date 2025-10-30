import { useEffect, useState } from "react";
import "../../assets/Css/PropertyPage.css";
import PropertiesCards from "./Property-design-Components/PropertCards";
import SidebarProperty from "./Property-design-Components/SideBarProperty";
import { propertiesData } from "./PropertyData";

export default function PropertyMainPage() {
  // Helper to get unique values for filter options
  const getUniqueValues = (data, key) => {
    const allValues = data.flatMap((item) =>
      Array.isArray(item[key]) ? item[key] : [item[key]]
    );
    return [...new Set(allValues)];
  };
  const [filters, setFilters] = useState({
    bhk: [],
    type: [],
    availableFor: [],
    location: [],
    amenities: [],
  });

  const [filteredProperties, setFilteredProperties] = useState(propertiesData);

  const toggleFilter = (key, value) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value
        ? prev[key].includes(value)
          ? prev[key].filter((v) => v !== value)
          : [...prev[key], value]
        : [], // clear filter when value is null
    }));
  };

  useEffect(() => {
    const result = propertiesData.filter((property) => {
      return (
        (filters.bhk.length === 0 || filters.bhk.includes(property.bhk)) &&
        (filters.type.length === 0 || filters.type.includes(property.type)) &&
        (filters.availableFor.length === 0 ||
          filters.availableFor.includes(property.availableFor)) &&
        (filters.location.length === 0 ||
          filters.location.includes(property.location)) &&
        (filters.amenities.length === 0 ||
          filters.amenities.every((a) => property.amenities.includes(a)))
      );
    });
    setFilteredProperties(result);
  }, [filters]);

  // dynamic filter options
  const options = {
    bhkOptions: getUniqueValues(propertiesData, "bhk"),
    typeOptions: getUniqueValues(propertiesData, "type"),
    availableForOptions: getUniqueValues(propertiesData, "availableFor"),
    locationOptions: getUniqueValues(propertiesData, "location"),
    amenitiesOptions: getUniqueValues(propertiesData, "amenities"),
  };

  return (
    <>
      <div className="accaodomationBannerSection">
        <img
          src="https://www.superchennai.com/images/restaurants-banner.jpg"
          alt=""
        />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>Properties </h3>
            <div className="breadCrum">
              <a href="">Home</a> - <a href="">Properties</a>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}

      <div className="bg-[#f4f5f7]">
        <div className="container max-w-7xl mx-auto px-4 !mt-0 !mb-0  mainConiatinerPropertyList">
          <div className="sidebar-stylescss">
            <SidebarProperty
              filters={filters}
              toggleFilter={toggleFilter}
              options={options}
            />

      

            <section className="siderbar-card">
              <div className="PropertiesCards">
                <PropertiesCards properties={filteredProperties} />
              </div>
            </section>

          </div>
        </div>
      </div>
    </>
  );
}
