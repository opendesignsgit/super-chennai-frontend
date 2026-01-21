import React, { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../../assets/Css/BlogList.css";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../../config";
import BlogListSkeleton from "./components/BlogListSkeleton";
import LikedIcon from "../../../public/images/icons/non-like.svg";
import ViewsIcon from "../../../public/images/icons/blog-views.svg";
import { useLocation, Link } from "react-router-dom"; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const location = useLocation();

  const fetchBlogs = useCallback(async () => {
    if (blogs.length === 0) {
      setLoading(true);
    }

    try {
      const res = await axios.get(`${API_BASE_URL}/api/posts?limit=0&t=${new Date().getTime()}`);
      if (!res.data?.docs?.length) {
        setBlogs([]);
        setFilteredBlogs([]);
        return;
      }

      const structured = res.data.docs.map((item) => {
        const contentNodes = item.content?.root?.children || [];
        const firstParagraph = contentNodes.find(
          (node) => node.type === "paragraph",
        );

        const plainText =
          firstParagraph?.children
            ?.map((child) => child.text)
            ?.join(" ")
            ?.trim() || "";

        return {
          id: item.id,
          slug: item.slug,
          title: item.title,
          heroImage: item.heroImage?.url || null,
          excerpt: plainText,
          views: item.views ?? 0,
          likes: item.likes ?? 0,
        };
      });

      setBlogs(structured);
    } catch (err) {
      console.error("Fetch error", err);
    } finally {
      setLoading(false);
    }
  }, []); // Empty dependency array ensures this function definition is stable

  /**
   * --- THE MAIN FIX IS HERE ---
   * Replaced the 3 overlapping useEffects with this single one.
   * By adding 'location' to the dependency array, this effect runs:
   * 1. When the component first mounts.
   * 2. ANY time the URL changes (including hitting 'Back' from details page).
   */
  useEffect(() => {
    fetchBlogs();
  }, [location, fetchBlogs]);


  // This effect handles filtering whenever the search term OR the main blog list changes.
  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);


  if (loading) {
    return <BlogListSkeleton />;
  }

  return (
    <>
      <Helmet>
        <title>Chennai Guide: Live, Visit, Learn and Invest Now</title>
        <meta
          name="description"
          content="Chennai is emerging as a global startup hub, backed by skilled talent, industry knowledge, and investor confidence, fueling future innovation."
        />
        <link rel="canonical" href="/blog" />
      </Helmet>

      <div className="blogMainRow">
        {/*----------------Accommodation-Banner----------- */}
        <div className="accaodomationBannerSection">
          <div>
            <img src="/images/banner-blog.jpg" alt="Cost of Living Banner" />
          </div>
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Blog</h3>
              <div className="breadCrum">
                <Link to="/">Home</Link> - <Link to="/blog">Blog</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="visitIntroParaSection detailIntro">
          <div className="container max-w-7xl mx-auto px-4">
            <div className="CostOflivingBackground scroll-leftCostofLiving">
              <p>Work &nbsp; in Chennai &nbsp; Work &nbsp; in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Blog</h3>
              <p>
                Chennai’s startup ecosystem is booming, backed by skilled
                talent, strong industry knowledge, and rising investor interest,
                paving the way for global success stories.
              </p>
            </div>
          </div>
        </div>

        {/*---------------- Search Input ----------- */}
        <div className="container max-w-7xl mx-auto blogSectionNew1">
          <div className="workIntro">
            <h3>Recent Blogs</h3>
          </div>

          <div style={{ padding: "1rem", textAlign: "center" }}>
            <input
              type="text"
              placeholder="Search by title..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "300px",
                padding: "0.5rem 1rem",
                fontSize: "1rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
            />
          </div>
        </div>

        {/*----------------Blog Grid----------- */}
        <div className="container max-w-7xl mx-auto blogSectionNew">
          <div className="blog-grid-container blogSectionContiner">
            {filteredBlogs.length > 0 ? (
              filteredBlogs.map((blog) => (
                <div className="blog-card relative" key={blog.id}>
                  {/* Use react-router-dom Link instead of HTML a tag for faster navigation */}
                  <a
                    href={`/blog/${blog.slug}`}
                    className="blog-link block relative"
                  >
                    {blog.heroImage && (
                      <img
                        src={`${API_BASE_URL}${blog.heroImage}`}
                        alt={blog.title}
                        className="blog-image"
                      />
                    )}

                    <div
                      className="absolute top-2 right-2 flex items-center gap-3
                      bg-[#a34493]/90 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm"
                    >
                      <div className="flex items-center gap-1">
                        <img
                          src={ViewsIcon}
                          alt="Views"
                          className="w-3.5 h-3.5 filter invert brightness-0"
                        />
                        <span>{blog.views}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <img
                          src={LikedIcon}
                          alt="Likes"
                          className="w-3.5 h-3.5 filter invert brightness-0"
                        />
                        <span>{blog.likes}</span>
                      </div>
                    </div>

                    <h3 className="blog-title">{blog.title}</h3>
                  </a>
                  <div className="blog-content">
                    <p className="blog-description">
                      {blog.excerpt.slice(0, 80)}....
                    </p>
                    <Link to={`/blog/${blog.slug}`} className="read-more">
                      Read More →
                    </Link>
                  </div>
                </div>
              ))
            ) : (
              <div className="flex items-center justify-center h-64 w-full">
                <div className="text-center">
                  <svg
                    className="w-16 h-16 text-gray-400 mx-auto mb-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 14l2-2 4 4m0-4l2-2m-6 6l2 2 4-4"
                    />
                  </svg>
                  <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    No Blogs Found
                  </h2>
                  <p className="text-gray-500 max-w-xs mx-auto">
                    Sorry, we couldn't find any blogs matching{" "}
                    <span className="font-medium text-gray-700">
                      "{searchTerm}"
                    </span>
                    . Try searching with a different keyword.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogList;
// import React, { useEffect, useState, useCallback } from "react";
// import axios from "axios";
// import "../../assets/Css/BlogList.css";
// import { Helmet } from "react-helmet-async";
// import { API_BASE_URL } from "../../../config";
// import BlogListSkeleton from "./components/BlogListSkeleton";
// import LikedIcon from "../../../public/images/icons/non-like.svg";
// import ViewsIcon from "../../../public/images/icons/blog-views.svg";
// import { useLocation } from "react-router-dom";
// const BlogList = () => {
//   const [blogs, setBlogs] = useState([]);
//   const [filteredBlogs, setFilteredBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState("");
//   const location = useLocation();

//   // const fetchBlogs = async () => {
//   //   setLoading(true);

//   //   try {
//   //     const res = await axios.get(`${API_BASE_URL}/api/posts?limit=0`);

//   //     if (!res.data?.docs?.length) {
//   //       setBlogs([]);
//   //       setFilteredBlogs([]);
//   //       return;
//   //     }

//   //     const structured = res.data.docs.map((item) => {
//   //       const contentNodes = item.content?.root?.children || [];
//   //       const firstParagraph = contentNodes.find(
//   //         (node) => node.type === "paragraph",
//   //       );

//   //       const plainText =
//   //         firstParagraph?.children
//   //           ?.map((child) => child.text)
//   //           ?.join(" ")
//   //           ?.trim() || "";

//   //       return {
//   //         id: item.id,
//   //         slug: item.slug,
//   //         title: item.title,
//   //         content: item.content,
//   //         heroImage: item.heroImage?.url || null,
//   //         excerpt: plainText,
//   //         views: item.views ?? 0,
//   //         likes: item.likes ?? 0,
//   //       };
//   //     });

//   //     setBlogs(structured);
//   //     setFilteredBlogs(structured);
//   //   } catch (error) {
//   //     console.error("Error fetching blogs:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };
//   const fetchBlogs = useCallback(async () => {
//     setLoading(true);
//     try {
//       const res = await axios.get(`${API_BASE_URL}/api/posts?limit=0`);

//       if (!res.data?.docs?.length) {
//         setBlogs([]);
//         setFilteredBlogs([]);
//         return;
//       }

//       const structured = res.data.docs.map((item) => {
//         const contentNodes = item.content?.root?.children || [];
//         const firstParagraph = contentNodes.find(
//           (node) => node.type === "paragraph",
//         );

//         const plainText =
//           firstParagraph?.children
//             ?.map((child) => child.text)
//             ?.join(" ")
//             ?.trim() || "";

//         return {
//           id: item.id,
//           slug: item.slug,
//           title: item.title,
//           heroImage: item.heroImage?.url || null,
//           excerpt: plainText,
//           views: item.views ?? 0,
//           likes: item.likes ?? 0,
//         };
//       });

//       setBlogs(structured);
//       setFilteredBlogs(structured);
//     } catch (err) {
//       console.error("Fetch error", err);
//     } finally {
//       setLoading(false);
//     }
//   }, []);
//   useEffect(() => {
//     fetchBlogs();
//   }, [location.key]);

//   useEffect(() => {
//     fetchBlogs();

//     const onVisible = () => {
//       fetchBlogs();
//     };

//     window.addEventListener("pageshow", onVisible);
//     document.addEventListener("visibilitychange", onVisible);

//     return () => {
//       window.removeEventListener("pageshow", onVisible);
//       document.removeEventListener("visibilitychange", onVisible);
//     };
//   }, [fetchBlogs]);

//   console.log(blogs);

//   useEffect(() => {
//     const filtered = blogs.filter((blog) =>
//       blog.title.toLowerCase().includes(searchTerm.toLowerCase()),
//     );
//     setFilteredBlogs(filtered);
//   }, [searchTerm, blogs]);

//   useEffect(() => {
//     if (location.pathname === "/blog") {
//       fetchBlogs();
//     }
//   }, [location.pathname]);

//   if (loading) {
//     return <BlogListSkeleton />;
//   }


  
//   return (
//     <>
//       <Helmet>
//         <title>Chennai Guide: Live, Visit, Learn and Invest Now</title>
//         <meta
//           name="description"
//           content="Chennai is emerging as a global startup hub, backed by skilled talent, industry knowledge, and investor confidence, fueling future innovation."
//         />
//         <link rel="canonical" href="/blog" />
//       </Helmet>

//       <div className="blogMainRow">
//         {/*----------------Accommodation-Banner----------- */}
//         <div className="accaodomationBannerSection">
//           <div>
//             <img src="/images/banner-blog.jpg" alt="Cost of Living Banner" />
//           </div>
//           <div className="accodoamationBannerContainer">
//             <div className="accodoamationBannerText">
//               <h3>Blog</h3>
//               <div className="breadCrum">
//                 <a href="/">Home</a> - <a href="#">Blog</a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="visitIntroParaSection detailIntro">
//           <div className="container max-w-7xl mx-auto px-4">
//             <div className="CostOflivingBackground scroll-leftCostofLiving">
//               <p>Work &nbsp; in Chennai &nbsp; Work &nbsp; in Chennai</p>
//             </div>
//             <div className="workIntro">
//               <h3>Blog</h3>
//               <p>
//                 Chennai’s startup ecosystem is booming, backed by skilled
//                 talent, strong industry knowledge, and rising investor interest,
//                 paving the way for global success stories.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/*---------------- Search Input ----------- */}
//         <div className="container max-w-7xl mx-auto blogSectionNew1">
//           <div className="workIntro">
//             <h3>Recent Blogs</h3>
//           </div>

//           <div style={{ padding: "1rem", textAlign: "center" }}>
//             <input
//               type="text"
//               placeholder="Search by title..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               style={{
//                 width: "300px",
//                 padding: "0.5rem 1rem",
//                 fontSize: "1rem",
//                 borderRadius: "4px",
//                 border: "1px solid #ccc",
//               }}
//             />
//           </div>
//         </div>

//         {/*----------------Blog Grid----------- */}
//         <div className="container max-w-7xl mx-auto blogSectionNew">
//           <div className="blog-grid-container blogSectionContiner">
//             {filteredBlogs.length > 0 ? (
//               filteredBlogs.map((blog) => (
//                 <div className="blog-card relative" key={blog.id}>
//                   <a
//                     href={`/blog/${blog.slug}`}
//                     className="blog-link block relative"
//                   >
//                     {blog.heroImage && (
//                       <img
//                         src={`${API_BASE_URL}${blog.heroImage}`}
//                         alt={blog.title}
//                         className="blog-image"
//                       />
//                     )}

//                     <div
//                       className="absolute top-2 right-2 flex items-center gap-3 
//                        bg-[#a34493]/90 text-white px-3 py-1 rounded-full text-xs backdrop-blur-sm"
//                     >
//                       <div className="flex items-center gap-1">
//                         <img
//                           src={ViewsIcon}
//                           alt="Views"
//                           className="w-3.5 h-3.5 filter invert brightness-0"
//                         />
//                         <span>{blog.views}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <img
//                           src={LikedIcon}
//                           alt="Likes"
//                           className="w-3.5 h-3.5 filter invert brightness-0"
//                         />
//                         <span>{blog.likes}</span>
//                       </div>
//                     </div>

//                     <h3 className="blog-title">{blog.title}</h3>
//                   </a>
//                   <div className="blog-content">
//                     <p className="blog-description">
//                       {blog.excerpt.slice(0, 80)}....
//                     </p>
//                     {/* <div className="blog-stats flex items-center gap-4 text-sm text-gray-600 mt-2">
//                       <div className="flex items-center gap-1 text-gray-600 text-sm">
//                         <img src={ViewsIcon} alt="Views" className="w-4 h-4" />
//                         <span>{blog.views}</span>
//                       </div>
//                       <div className="flex items-center gap-1 text-gray-600 text-sm">
//                         <img src={LikedIcon} alt="Views" className="w-4 h-4" />
//                         <span>{blog.likes}</span>
//                       </div>
//                     </div> */}
//                     <a href={`/blog/${blog.slug}`} className="read-more">
//                       Read More →
//                     </a>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="flex items-center justify-center h-64 w-full">
//                 <div className="text-center">
//                   <svg
//                     className="w-16 h-16 text-gray-400 mx-auto mb-4"
//                     fill="none"
//                     stroke="currentColor"
//                     viewBox="0 0 24 24"
//                     xmlns="http://www.w3.org/2000/svg"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth="2"
//                       d="M9 14l2-2 4 4m0-4l2-2m-6 6l2 2 4-4"
//                     />
//                   </svg>
//                   <h2 className="text-2xl font-semibold text-gray-700 mb-2">
//                     No Blogs Found
//                   </h2>
//                   <p className="text-gray-500 max-w-xs mx-auto">
//                     Sorry, we couldn't find any blogs matching{" "}
//                     <span className="font-medium text-gray-700">
//                       "{searchTerm}"
//                     </span>
//                     . Try searching with a different keyword.
//                   </p>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogList;

