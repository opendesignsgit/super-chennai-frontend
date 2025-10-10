import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "../assets/Css/BlogList.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Helmet } from "react-helmet-async";

const parseLexical = (content) => {
  if (!content?.root?.children) return null;

  return content.root.children.map((node, idx) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p key={idx}>
            {node.children.map((child, cIdx) => {
              if (child.type === "text")
                return <span key={cIdx}>{child.text}</span>;
              if (child.type === "link") {
                const url = child.fields?.url || "#";
                const linkText = child.children?.[0]?.text || "Link";
                return (
                  <a
                    key={cIdx}
                    href={url}
                    target={child.fields?.newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    style={{ color: "#007BFF", textDecoration: "underline" }}
                  >
                    {linkText}
                  </a>
                );
              }
              if (child.type === "linebreak") return <br key={cIdx} />;
              return null;
            })}
          </p>
        );

      case "heading":
        const Tag = node.tag || "h2";
        return (
          <Tag
            key={idx}
            style={{
              marginTop: "1.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
            }}
          >
            {node.children.map((child, cIdx) => {
              if (child.type === "text")
                return <span key={cIdx}>{child.text}</span>;
              return null;
            })}
          </Tag>
        );

      case "block":
        const media = node.fields?.media;
        if (media && media.url) {
          const imgUrl = `https://demo.superchennai.com${media.url}`;
          return (
            <figure key={idx} style={{ margin: "1.5rem 0" }}>
              <img
                src={imgUrl}
                alt={media.alt || media.filename || "Image"}
                style={{ maxWidth: "100%", height: "auto", borderRadius: 8 }}
              />
              {media.caption && (
                <figcaption
                  style={{
                    textAlign: "center",
                    fontSize: "0.9rem",
                    color: "#555",
                  }}
                >
                  {media.caption}
                </figcaption>
              )}
            </figure>
          );
        }
        return null;

      default:
        return null;
    }
  });
};

const BlogDetail = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const API_BASE_URL = "https://demo.superchennai.com";

  // useEffect(() => {
  //   const fetchBlog = async () => {
  //     try {
  //       const res = await axios.get(`${API_BASE_URL}/api/posts`);
  //       const found = res.data.docs.find((b) => String(b.id) === id);

  //       if (found) {
  //         setBlog({
  //           id: found.id,
  //           title: found.title,
  //           content: found.content,
  //           heroImage:
  //             found.heroImage?.sizes?.xlarge?.url ||
  //             found.heroImage?.url ||
  //             null,
  //         });
  //         const related = res.data.docs
  //           .filter(
  //             (b) =>
  //               String(b.id) !== id && b.blogCategory === found.blogCategory
  //           )
  //           .slice(0, 5);
  //         setRelatedBlogs(related);
  //       } else {
  //         setBlog(null);
  //       }
  //     } catch (err) {
  //       console.error("Error fetching blog:", err);
  //       setBlog(null);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBlog();
  // }, [id]);
  const FALLBACK_DATA = {
    docs: [
      {
        id: 2,
        title: "test",
        heroImage: {
          id: 1,
          alt: null,
          caption: null,
          updatedAt: "2025-08-19T13:34:26.773Z",
          createdAt: "2025-08-19T13:34:26.073Z",
          url: "http://localhost:5173/images/Live-Images/liveBanner.jpg",
          thumbnailURL:
            "http://localhost:5173/images/Live-Images/liveBanner.jpg",
          filename: "Coolie-Trending-Detail (1).jpeg",
          mimeType: "image/jpeg",
          filesize: 211790,
          width: 727,
          height: 410,
          focalX: 50,
          focalY: 50,
          sizes: {
            thumbnail: {
              url: "/api/media/file/Coolie-Trending-Detail (1)-300x169.jpg",
              width: 300,
              height: 169,
              mimeType: "image/jpeg",
              filesize: 12072,
              filename: "Coolie-Trending-Detail (1)-300x169.jpg",
            },
            square: {
              url: "/api/media/file/Coolie-Trending-Detail (1)-500x500.jpg",
              width: 500,
              height: 500,
              mimeType: "image/jpeg",
              filesize: 52546,
              filename: "Coolie-Trending-Detail (1)-500x500.jpg",
            },
            small: {
              url: "/api/media/file/Coolie-Trending-Detail (1)-600x338.jpg",
              width: 600,
              height: 338,
              mimeType: "image/jpeg",
              filesize: 40975,
              filename: "Coolie-Trending-Detail (1)-600x338.jpg",
            },
            medium: {
              url: null,
              width: null,
              height: null,
              mimeType: null,
              filesize: null,
              filename: null,
            },
            large: {
              url: null,
              width: null,
              height: null,
              mimeType: null,
              filesize: null,
              filename: null,
            },
            xlarge: {
              url: null,
              width: null,
              height: null,
              mimeType: null,
              filesize: null,
              filename: null,
            },
            og: {
              url: null,
              width: null,
              height: null,
              mimeType: null,
              filesize: null,
              filename: null,
            },
          },
        },
        content: {
          root: {
            type: "root",
            format: "",
            indent: 0,
            version: 1,
            children: [
              {
                type: "paragraph",
                format: "",
                indent: 0,
                version: 1,
                children: [
                  {
                    mode: "normal",
                    text: "sdasdasdasd",
                    type: "text",
                    style: "",
                    detail: 0,
                    format: 0,
                    version: 1,
                  },
                ],
                direction: "ltr",
                textStyle: "",
                textFormat: 0,
              },
            ],
            direction: "ltr",
          },
        },
        relatedPosts: [],
        categories: [],
        meta: { title: null, image: null, description: null },
        publishedAt: "2025-08-19T13:34:30.870Z",
        authors: [],
        blogCategory: "health",
        populatedAuthors: [],
        slug: "test",
        slugLock: true,
        updatedAt: "2025-08-19T13:34:30.871Z",
        createdAt: "2025-08-19T11:53:10.374Z",
        _status: "published",
      },
    ],
    hasNextPage: false,
    hasPrevPage: false,
    limit: 10,
    nextPage: null,
    page: 1,
    pagingCounter: 1,
    prevPage: null,
    totalDocs: 1,
    totalPages: 1,
  };

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/posts`);
        const data = res.data?.docs?.length ? res.data : FALLBACK_DATA;

        const found = data.docs.find((b) => String(b.id) === id);

        if (found) {
          setBlog({
            id: found.id,
            title: found.title,
            content: found.content,
            createdAt: found.createdAt,
            metadescription: found.meta.description,
            authour: found.populatedAuthors[0].name,
            metatitle: found.meta.title,
            heroImage:
              found.heroImage?.sizes?.xlarge?.url ||
              found.heroImage?.url ||
              null,
          });

          const related = data.docs
            .filter(
              (b) =>
                String(b.id) !== id && b.blogCategory === found.blogCategory
            )
            .slice(0, 5);
          setRelatedBlogs(related);
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);

        // 🔹 On error, fallback
        const found = FALLBACK_DATA.docs.find((b) => String(b.id) === id);
        if (found) {
          setBlog({
            id: found.id,
            title: found.title,
            content: found.content,
            heroImage: found.heroImage?.url || null,
          });
          setRelatedBlogs([]);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  if (loading) return <div className="blog-detail-loading">Loading...</div>;
  if (!blog) return <div className="blog-detail-error">Blog not found.</div>;

  return (
    <>
      <Helmet>
        <title>{blog.metatitle}</title>
        <meta name="description" content={blog.metadescription} />
        <link rel="canonical" href="/live-in-chennai" />
      </Helmet>

      <div className="BlogDetailPageId">
        <div className="accaodomationBannerSection">
          {blog.heroImage && (
            <>
              <div className="bLogDetailBanner">
                <img
                  src={`${API_BASE_URL}${blog.heroImage}`}
                  alt={blog.title}
                />

                {/* <img src={`${blog.heroImage}`} alt={blog.title} /> */}
              </div>

              <div className="accodoamationBannerContainer">
                <div className="accodoamationBannerText">
                  <h3>{blog.title}</h3>
                  <div className="breadCrum">
                    <a href="#">
                      <Link to="/blog">BLOG</Link>
                    </a>{" "}
                    - <a href="#">{blog.title}</a>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
        {console.log("authour", blog.createdAt)}
        {/* <div className="blog-category">
          <span>{blog.blogCategory || "nodattaaaaaaaaaaaaaaa"}</span>
        </div> */}
        <div className="blog-detail-container  container max-w-7xl mx-auto">
          <h3 className="AuthourNameBlog">
            Author :{" "}
            <span style={{ color: "#1d1d1d" }}>
              {blog.authour} {""}{" "}
              <span
                style={{
                  fontSize: "13px",
                  color: "#a44294",
                  marginLeft: "4px",
                }}
              >
                {" "}
                (
                {new Date(blog.createdAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  timeZone: "Asia/Kolkata",
                })}
                )
              </span>
            </span>
          </h3>
          <div className="blog-content">{parseLexical(blog.content)}</div>
          <div className="back-link">
            <Link to="/blog">← Back to Blog List</Link>
          </div>

          {/* {console.log("blog",blog.description)} */}
          {/* Related Blogs Carousel */}
          {/* {relatedBlogs.length > 0 && (
            <div style={{ marginTop: "4rem" }}>
              <h2 style={{ marginBottom: "1rem" }}>Related Blogs</h2>
              <Slider {...sliderSettings}>
                {relatedBlogs.map((item, index) => (
                  <div key={index} className="ExplorePageSliderImage">
                    <Link
                      to={`/blogdetail/${item.id}`}
                      style={{ textDecoration: "none" }}
                    >
                      <div
                        style={{
                          position: "relative",
                          borderRadius: "8px",
                          overflow: "hidden",
                        }}
                      >
                        <img
                          src={`${API_BASE_URL}${blog.heroImage}`}
                          alt={item.title}
                          style={{
                            width: "100%",
                            height: "auto",
                            display: "block",
                          }}
                        />

                        <div
                          style={{
                            position: "absolute",
                            bottom: 0,
                            left: 0,
                            right: 0,
                            height: "120px",
                            background:
                              "linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent)",
                          }}
                        ></div>

                        <div className="titleTextExploreChennai">
                          {item.title}
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </Slider>
            </div>
          )} */}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
