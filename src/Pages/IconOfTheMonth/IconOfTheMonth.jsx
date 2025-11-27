// import { Link } from "react-router-dom";
// import { useIconOfTheMonth } from "./hooks/useContests";
// import { formatDate } from "./utils/contestUtils";
// import { API_BASE_URL } from "../../../config";

// const IconOfMonthList = () => {
//   const { items, loading } = useIconOfTheMonth();

//   if (loading) return <p>Loading...</p>;

//   return (
//     <div className="container mx-auto py-12">
//       <h1 className="text-4xl font-bold mb-10 text-gray-900">
//         Icon of the Month
//       </h1>

//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//         {items.map((item) => {
//           const imageUrl = item?.heroImage?.url
//             ? `${API_BASE_URL}${item.heroImage.url}`
//             : "/placeholder.png";

//           return (
//             <Link
//               key={item.id}
//               to={`/icon-of-month-details/${item.slug}`}
//               className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:-translate-y-1 overflow-hidden"
//             >
//               {/* Image */}
//               <img
//                 src={imageUrl}
//                 alt={item.title}
//                 className="w-full h-56 object-cover"
//               />

//               {/* Content */}
//               <div className="p-6">
//                 <h2 className="text-xl font-semibold text-gray-900">
//                   {item.title}
//                 </h2>

//                 <p className="text-gray-500 text-sm mt-1">
//                   Published: {formatDate(item.publishedAt)}
//                 </p>

//                 <p className="text-gray-600 text-sm mt-3 line-clamp-3">
//                   {item?.meta?.description || "No description available."}
//                 </p>

//                 <div className="mt-4 inline-block text-indigo-600 font-medium hover:underline">
//                   View Details →
//                 </div>
//               </div>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default IconOfMonthList;
import { Link } from "react-router-dom";
import { useIconOfTheMonth } from "./hooks/useContests";
import { API_BASE_URL } from "../../../config";

const IconOfMonthList = () => {
  const { items, loading } = useIconOfTheMonth();

  if (loading) return <p>Loading...</p>;

  return (
    <section className="EventsListSec SecPadblock12 nammaStoriesNewsLtter !pt-7">

           <section className="accaodomationBannerSection iconofthemonthbanner">
          <div>
            <img
              className="eventsCalenderIamge"
              src="/images/icon-of-the-month.jpg"
              alt=""
            />{" "}
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>ICON OF THE MONTH</h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> -{" "}
                <a href="">ICON OF THE MONTH </a>{" "}
              </div>
            </div>
          </div>
        </section>
        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingBottom: "0" }}
        >
          <div className="container max-w-7xl mx-auto px-4">
            <div className="workIntro">
              <h1>Icon of The Month</h1>
              <p>
                Every month, Super Chennai shines the spotlight on individuals
                who redefine success, leadership, and inspiration in their
                fields. Our Icon of the Month is more than just a recognition –
                it is a tribute to passion, dedication, and the spirit of
                perseverance that drives change.
              </p>
              <p>
                This feature honors those who continue to shape industries,
                empower communities, and inspire countless lives with their
                journey. By showcasing their story, we aim to spark motivation,
                spread positivity, and celebrate the essence of true
                achievement.
              </p>
              <p>
                In highlighting their remarkable contributions, Super Chennai
                not only applauds their success but also reminds us that every
                dream, when pursued with courage and commitment, has the power
                to transform society.
              </p>
            </div>
          </div>
        </div>




      <div className="container max-w-7xl mx-auto">
        <div className="flex superchennaiEventsMainContainer gap-6 flex-wrap justify-center">

          {items.map((item) => {
            const imageUrl = item?.heroImage?.url
              ? `${API_BASE_URL}${item.heroImage.url}`
              : "/images/placeholder.png";

            return (
              <Link
                key={item.id}
                className="superchennaiEventsSection block"
                to={`/chennai-icon-of-the-month-details/${item.slug}`}
                id={item.slug}
              >
                <div
                  className="flex flex-col items-center text-center transition-all hover:-translate-y-1"
                  style={{ overflow: "hidden" }}
                >
                  <img
                    src={imageUrl}
                    alt={item.title}
                    className="rounded-xl mb-3 "
                  />

                
                  <p className="text-lg font-medium">
                    Icon of the Month – {new Date(item.publishedAt).toLocaleString("en-US", { month: "short", year: "numeric" })}
                  </p>
                </div>
              </Link>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default IconOfMonthList;
