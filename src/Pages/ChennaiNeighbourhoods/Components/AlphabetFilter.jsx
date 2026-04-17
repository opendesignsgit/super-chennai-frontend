import { useState } from "react";
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function AlphabetFilter({ value, onChange }) {

  const handleClick = (l) => {
    onChange?.(l);
  };

  return (
    <div className="mb-6 alphapetfiltersection">
      <div className="girdcolumn grid grid-cols-26">
        {letters.map((l) => (
          <button
            key={l}
            onClick={() => handleClick(l)}
            className={`alpabutton
              text-sm py-2
              border-r last:border-r-0
              border-gray-300
              ${
                value === l
                  ? "activebuttonalpha bg-purple-600 text-white rounded-md "
                  : "text-gray-700 hover:bg-gray-200"
              }
            `}
          >
            {l}
          </button>
        ))}
      </div>
    </div>
  );
}

// const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// export default function AlphabetFilter({ onChange }) {
//   const [active, setActive] = useState("");

//   const handleClick = (l) => {
//     setActive(l);
//     onChange?.(l);
//   };

//   return (
//     <div className="mb-6 alphapetfiltersection">
//         <div className="girdcolumn grid grid-cols-26">
//           {letters.map((l) => (
//             <button
//               key={l}
//               onClick={() => handleClick(l)}
//               className={`alpabutton
//                 text-sm py-2
//                 border-r last:border-r-0
//                 border-gray-300
//                 ${active === l
//                   ? "activebuttonalpha bg-purple-600 text-white rounded-md"
//                   : "text-gray-700 hover:bg-gray-200"}
//               `}
//             >
//               {l}
//             </button>
//           ))}
//         </div>
//       </div>
//   );
// }