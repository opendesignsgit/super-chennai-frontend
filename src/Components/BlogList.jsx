import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../assets/Css/BlogList.css";
import { Helmet } from "react-helmet-async";

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 9;
  const API_BASE_URL = "https://demo.superchennai.com";

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/posts`);
        if (!res.data?.docs?.length) {
          console.warn("No blog posts found");
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
    setCurrentPage(1); // Reset to first page on search
  }, [searchTerm, blogs]);

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const goToNextPage = () => {
    setCurrentPage((page) => Math.min(page + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((page) => Math.max(page - 1, 1));
  };

  if (loading) return <p>Loading...</p>;

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

        <div class="visitIntroParaSection detailIntro">
          <div class=" container max-w-7xl mx-auto px-4">
            <div class="CostOflivingBackground scroll-leftCostofLiving">
              <p>Work &nbsp; in Chennai &nbsp; Work &nbsp; in Chennai</p>
            </div>
            <div class="workIntro">
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
          <div class="workIntro">
            <h3>Recenet Blogs</h3>
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
            {currentBlogs.length > 0 ? (
              currentBlogs.map((blog) => (
                <div className="blog-card" key={blog.id}>
                  <a href={`/blogdetail/${blog.id}`} className="blog-link">
                    {blog.heroImage && (
                      <img
                        src={`${API_BASE_URL}${blog.heroImage}`}
                        alt={blog.title}
                        className="blog-image"
                      />
                    )}
                    {/* {console.log(blog.content.root.children[8].fields.media.)} */}
                    <h3 className="blog-title">{blog.title}</h3>
                  </a>
                  <div className="blog-content">
                    <p className="blog-description">
                      {blog.excerpt.slice(0, 80)}....
                    </p>
                    <a href={`/blogdetail/${blog.id}`} className="read-more">
                      Read More →
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <p style={{ textAlign: "center" }}>
                No blogs found matching "{searchTerm}"
              </p>
            )}
          </div>
        </div>

        {/*---------------- Pagination Controls ----------- */}
        {totalPages > 1 && (
          <div className="pagination-container">
            <button
              onClick={goToPrevPage}
              disabled={currentPage === 1}
              className="pagination-button"
            >
              ← Previous
            </button>
            <span className="pagination-info">
              Page <strong>{currentPage}</strong> of{" "}
              <strong>{totalPages}</strong>
            </span>
            <button
              onClick={goToNextPage}
              disabled={currentPage === totalPages}
              className="pagination-button"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
