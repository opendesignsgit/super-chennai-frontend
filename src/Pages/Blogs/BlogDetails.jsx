import axios from "axios";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { API_BASE_URL } from "../../../config";
import "../../assets/Css/BlogList.css";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";

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
                    style={{ color: "#1b599bff", textDecoration: "underline" }}
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
          const imgUrl = `${API_BASE_URL}/${media.url}`;
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
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedBlogs, setRelatedBlogs] = useState([]);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/posts?limit=0`);

        const data = res.data?.docs?.length ? res.data : "";
        console.log("blog data", data);

        const found = data.docs.find((blog) => String(blog.slug) === slug);

        console.log("found", found);

        if (found) {
          setBlog({
            id: found.id,
            title: found.title,
            content: found.content,
            createdAt: found.createdAt,
            updatedAt: found.updatedAt,
            publishedAt: found.publishedAt,
            metadescription: found.meta?.description,
            author: found.populatedAuthors?.[0]?.name,
            metatitle: found.meta?.title,
            heroImage:
              found.heroImage?.sizes?.xlarge?.url ||
              found.heroImage?.url ||
              null,
          });

          const related = data.docs
            .filter(
              (b) =>
                String(b.slug) !== slug && b.blogCategory === found.blogCategory
            )
            .slice(0, 5);
          setRelatedBlogs(related);
        } else {
          setBlog(null);
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  useEffect(() => {
    const spans = document.querySelectorAll("p span");
    spans.forEach((span) => {
      const cleanText = span.textContent.replace(/\u00A0/g, " ").trim();
      if (cleanText.endsWith(":")) {
        span.classList.add("paragraphstyleBlogUl");
      }
    });
  }, [blog]);

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
              </div>

              <div className="accodoamationBannerContainer">
                <div className="accodoamationBannerText ">
                  <div className="breadCrum mb-4">
                    <a href="#">
                      <Link to="/blog">BLOG</Link>
                    </a>{" "}
                  </div>
                  <AutoShrinkText
                    text={blog.title}
                    baseSize={60}
                    minSize={40}
                    maxChars={40}
                    className="accodoamationBannerText"
                    width="80%"
                    maxLines={2}
                  />
                </div>
              </div>
            </>
          )}
        </div>

        <div className="blog-detail-container  container max-w-7xl mx-auto">
          <h3 className="AuthourNameBlog">
            Author : Super Chennai Team
            <span style={{ color: "#1d1d1d" }}>
              {blog.authour} {""}{" "}
              <span
                style={{
                  fontSize: "13px",
                  color: "#a44294",
                  marginLeft: "4px",
                }}
              >
                (
                {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
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
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
