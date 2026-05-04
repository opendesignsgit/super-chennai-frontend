import React, { useEffect, useRef, useState } from "react";

export default function SearchChennai({ onSearch }) {
  const [value, setValue] = useState("");
  const [isTop, setIsTop] = useState(false);

  const sectionRef = useRef(null);

  useEffect(() => {
    const getHeaderHeight = () => {
      const width = window.innerWidth;

      if (width >= 1024) return 100;
      if (width >= 768) return 280;
      return 100;
    };

    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = getHeaderHeight();

      if (rect.top <= triggerPoint) {
        setIsTop(true);
      } else {
        setIsTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log("isTop", isTop);

  const handleSearch = () => {
    onSearch(value);
  };

  return (
    <div
      className={`container max-w-7xl mx-auto px-4 seachconatiners ${isTop ? "neighstickkkk" : "noneighstickkkk"}`}
    >
      <div className="mb-6 filtersearchnewmain">
        <div className="neighbourhoodstickkkkk">
          <div className="flex gap-2 filtersearchnew" ref={sectionRef}>
            <input
              className="border p-3 w-full rounded-lg searchhoodfilter"
              placeholder="Find your Location / PIN code"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />

            <button onClick={handleSearch} className="searchbuttonfilt">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
