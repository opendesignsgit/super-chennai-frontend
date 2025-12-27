import React, { useEffect, useState } from "react";
import axios from "axios";
import "../../assets/Css/BlogList.css";
import { Helmet } from "react-helmet-async";
import { API_BASE_URL } from "../../../config";
import BlogListSkeleton from "./components/BlogListSkeleton";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/posts?limit=0`);

        if (!res.data?.docs?.length) {
          setBlogs([]);
          setFilteredBlogs([]);
          return;
        }

        const structured = res.data.docs.map((item) => {
          const contentNodes = item.content?.root?.children || [];
          const firstParagraph = contentNodes.find(
            (node) => node.type === "paragraph"
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
            content: item.content,
            heroImage: item.heroImage?.url || null,
            excerpt: plainText,
          };
        });

        setBlogs(structured);
        setFilteredBlogs(structured);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  useEffect(() => {
    const filtered = blogs.filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredBlogs(filtered);
  }, [searchTerm, blogs]);

  // if (loading) {
  //   return (
  //     <div className="flex justify-center items-center h-40">
  //       <div className="loader border-t-transparent border-4 border-blue-600 rounded-full w-8 h-8 animate-spin"></div>
  //     </div>
  //   );
  // }
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
                <a href="/">Home</a> - <a href="#">Blog</a>
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
                <div className="blog-card" key={blog.id}>
                  <a href={`/blog/${blog.slug}`} className="blog-link">
                    {blog.heroImage && (
                      <img
                        src={`${API_BASE_URL}${blog.heroImage}`}
                        alt={blog.title}
                        className="blog-image"
                      />
                    )}
                    <h3 className="blog-title">{blog.title}</h3>
                  </a>
                  <div className="blog-content">
                    <p className="blog-description">
                      {blog.excerpt.slice(0, 80)}....
                    </p>
                    <a href={`/blog/${blog.slug}`} className="read-more">
                      Read More →
                    </a>
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
