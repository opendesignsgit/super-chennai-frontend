// import React from "react";

// export default function AreaFilter({ data, onChange }) {
//   return (
//     <div className="mb-10">

//       <div className="grid md:grid-cols-3 gap-6">

//         {data?.map((loc) => (
//           <div
//             key={loc.id}
//             onClick={() => onChange(loc.locality)}
//             className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition"
//           >
//             {/* image */}
//             <div className="h-52 overflow-hidden">
//               <img
//                 src={`https://dev-cms.superchennai.com${loc.image?.url}`}
//                 className="w-full h-full object-cover"
//               />
//             </div>

//             {/* content */}
//             <div className="p-4">
//               <h3 className="text-purple-600 font-bold text-lg uppercase">
//                 {loc.locality}
//               </h3>

//               <p className="text-gray-600 text-sm mt-1">
//                 PIN code : {loc.pincode}
//               </p>
//             </div>

//             {/* divider */}
//             <div className="border-t" />

//             {/* footer */}
//             <div className="p-4">
//               <span className="text-gray-500 text-sm tracking-widest font-semibold">
//                 READMORE
//               </span>
//             </div>
//           </div>
//         ))}

//       </div>
//     </div>
//   );
// }

import React from "react";

const FALLBACK =
  "https://via.placeholder.com/600x400?text=No+Image";

export default function AreaFilter({ data, onChange }) {
  return (
    <div className="mb-10">
      <div className="grid md:grid-cols-3 gap-6">
        {data?.map((loc) => {

          const imageUrl = loc?.image?.url
            ? `https://dev-cms.superchennai.com${loc.image.url}`
            : FALLBACK;

          return (
            <div
              key={loc.id}
              onClick={() => onChange(loc.locality)}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl cursor-pointer transition"
            >
              {/* image */}
              <div className="h-52 overflow-hidden">
                <img
                  src={imageUrl}
                  className="w-full h-full object-cover"
                  alt={loc.locality}
                />
              </div>

              {/* content */}
              <div className="p-4">
                <h3 className="text-purple-600 font-bold text-lg uppercase">
                  {loc.locality}
                </h3>

                <p className="text-gray-600 text-sm mt-1">
                  {loc.label}
                </p>
              </div>

              <div className="border-t" />

              <div className="p-4">
                <span className="text-gray-500 text-sm tracking-widest font-semibold">
                  READ MORE
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}