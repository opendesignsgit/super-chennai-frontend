import { useState } from "react";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AlphabetFilter({ onChange }) {
  const [active, setActive] = useState("T");

  const handleClick = (l) => {
    setActive(l);
    onChange?.(l);
  };

  return (
    <div className="mb-6">
      <div className="bg-[#f3f3f6] rounded-full p-1 overflow-x-auto">
        <div className="grid grid-cols-26 min-w-[900px]">
          {letters.map((l) => (
            <button
              key={l}
              onClick={() => handleClick(l)}
              className={`
                text-sm py-2
                border-r last:border-r-0
                border-gray-300
                ${active === l
                  ? "bg-purple-600 text-white rounded-md"
                  : "text-gray-700 hover:bg-gray-200"}
              `}
            >
              {l}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}