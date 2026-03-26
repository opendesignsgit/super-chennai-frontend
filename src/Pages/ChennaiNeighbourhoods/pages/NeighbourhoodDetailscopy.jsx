// import { useParams } from "react-router-dom";
// import { useNeighbourhood } from "../hooks/useNeighbourhood";

// const BASE = "https://dev-cms.superchennai.com";
// const FALLBACK = "https://via.placeholder.com/600x400?text=No+Image";

// export default function NeighbourhoodDetail() {
//   const { locationId } = useParams();

//   const { data, loading } = useNeighbourhood({
//     location: locationId,
//   });

//   console.log("API data =", data);

//   if (loading) return <div>Loading...</div>;

//   return (
//     <div className="container mt-4">
//       <div className="row">
//         {data?.map((item) => {
//           const image = item?.FeaturedImage?.url
//             ? BASE + item.FeaturedImage.url
//             : FALLBACK;

//           return (
//             <div className="col-md-4 mb-4" key={item.id}>
//               <div className="card h-100 shadow-sm">

//                 {/* image */}
//                 <img
//                   src={image}
//                   className="card-img-top"
//                   alt={item.name}
//                 />

//                 <div className="card-body">

//                   {/* title */}
//                   <h5 className="card-title">
//                     {item.name}
//                   </h5>

//                   {/* category */}
//                   <p className="text-muted mb-1">
//                     {item?.category?.title}
//                   </p>

//                   {/* location */}
//                   <p className="mb-1">
//                     📍 {item?.locations?.locality}
//                   </p>

//                   {/* rating */}
//                   <p className="mb-1">
//                     ⭐ {item?.rating || "N/A"}
//                   </p>

//                   {/* price */}
//                   <p className="mb-1">
//                     💰 {item?.priceInfo?.priceRange}
//                   </p>

//                   {/* phone */}
//                   {item?.branches?.[0]?.phone && (
//                     <p className="mb-1">
//                       📞 {item.branches[0].phone}
//                     </p>
//                   )}

//                   {/* description */}
//                   <p className="small text-muted">
//                     {item.description}
//                   </p>

//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

import { useParams } from "react-router-dom";
import { useNeighbourhood } from "../hooks/useNeighbourhood";

const BASE = "https://dev-cms.superchennai.com";
const FALLBACK = "https://via.placeholder.com/600x400?text=No+Image";

export default function NeighbourhoodDetail() {
  const { locationId } = useParams();

  const { data, loading } = useNeighbourhood({
    location: locationId,
  });

  if (loading) return <div className="container">Loading...</div>;

  if (!data?.length)
    return <div className="container">No Results Found</div>;

  const locationDetails = data?.[0]?.locations;
  console.log("location data ",data)
  const grouped = data.reduce((acc, item) => {
    const cat = item?.category?.title || "Others";

    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);

    return acc;
  }, {});

  return (
    <div className="container mt-4">

      <div className="mb-4">
        <h2>{locationDetails?.locality}</h2>
        <p>{locationDetails?.label}</p>
      </div>

      {Object.entries(grouped).map(([category, items]) => (
        <div key={category} className="mb-5">

          <h3 className="mb-3">{category}</h3>

       
        </div>
      ))}
    </div>
  );
}