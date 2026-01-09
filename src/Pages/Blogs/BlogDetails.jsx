import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import { API_BASE_URL } from "../../../config";
import "./style.css";
import AutoShrinkText from "../../Components/Text/AutoShrinkText";
import BlogDetailSkeleton from "./components/BlogDetailSkeleton";

/* ---------------------------------------------
   Lexical Helpers
--------------------------------------------- */
const FORMAT = {
  BOLD: 1,
  ITALIC: 1 << 3,
  UNDERLINE: 1 << 1,
};

const renderTextChildren = (children, allowFormatting = true) => {
  if (!Array.isArray(children)) return null;

  return children.map((child, i) => {
    if (child.type === "text") {
      let el = child.text;

      if (allowFormatting) {
        if (child.format & FORMAT.BOLD) el = <strong>{el}</strong>;
        if (child.format & FORMAT.ITALIC) el = <em>{el}</em>;
        if (child.format & FORMAT.UNDERLINE) el = <u>{el}</u>;
      }

      return <span key={i}>{el}</span>;
    }

    if (child.type === "link") {
      if (!allowFormatting) {
        return <span key={i}>{renderTextChildren(child.children, false)}</span>;
      }

      return (
        <a
          key={i}
          href={child.fields?.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline"
        >
          {renderTextChildren(child.children, true)}
        </a>
      );
    }

    if (child.type === "linebreak") return <br key={i} />;

    if (child.children) {
      return (
        <span key={i}>
          {renderTextChildren(child.children, allowFormatting)}
        </span>
      );
    }

    return null;
  });
};



const parseLexical = (content) => {
  if (!content?.root?.children) return null;

  const headingClasses = {
    h1: "blog-h1",
    h2: "blog-h2",
    h3: "blog-h3",
    h4: "blog-h4",
    h5: "blog-h5",
    h6: "blog-h6",
  };

  return content.root.children.map((node, idx) => {
    switch (node.type) {
      case "paragraph":
        return (
          <p key={idx} className="mb-5 text-base text-gray-700 leading-relaxed">
            {renderTextChildren(node.children)}
          </p>
        );

      case "heading": {
        const Tag = node.tag || "h2";
        return (
          <Tag key={idx} className={headingClasses[Tag] || "blog-h2"}>
            {renderTextChildren(node.children)}
          </Tag>
        );
      }

      case "block": {
  

        if (node.fields?.blockType === "mediaBlock") {
          const media = node.fields?.media;
          const link = node.fields?.link;
          const thumbnail = node.fields?.thumbnail;

          if (!media?.url) return null;

          const mainImage = (
            <img
              src={`${API_BASE_URL}${media.url}`}
              alt={media.alt || "Image"}
              className="w-full h-full object-cover rounded-lg"
            />
          );

          return (
         
            <figure key={idx} className="my-10 relative">
              <div className="blog-media-wrapper relative">
                {/* Main image with optional link */}
                {link?.url ? (
                  <a
                    href={link.url}
                    target={link.newTab ? "_blank" : "_self"}
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {mainImage}
                  </a>
                ) : (
                  mainImage
                )}

                {/* Thumbnail with optional link */}
                {thumbnail?.url &&
                  (link?.url ? (
                    <a
                      href={link.url}
                      target={link.newTab ? "_blank" : "_self"}
                      rel="noopener noreferrer"
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      style={{ zIndex: 10 }}
                    >
                      <img
                        src={`${API_BASE_URL}${thumbnail.url}`}
                        alt="Thumbnail"
                        style={{
                          width: "80px",
                          height: "80px",
                          borderRadius: "50%",
                          border: "2px solid white",
                          boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                          objectFit: "cover",
                        }}
                      />
                    </a>
                  ) : (
                    <img
                      src={`${API_BASE_URL}${thumbnail.url}`}
                      alt="Thumbnail"
                      style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: "80px",
                        height: "80px",
                        borderRadius: "50%",
                        border: "2px solid white",
                        boxShadow: "0 2px 6px rgba(0,0,0,0.3)",
                        objectFit: "cover",
                        zIndex: 10,
                      }}
                    />
                  ))}
              </div>

              {media.caption && (
                <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
                  {media.caption}
                </figcaption>
              )}
            </figure>
          );
        }

        // --- VideoBlock ---
        const blockType = node.fields?.blockType;

        if (blockType === "videoBlock") {
          const source = node.fields?.source;
          const url = node.fields?.url;
          // const thumbnail = node.fields?.thumbnail;
          const { media, thumbnail } = node.fields;

          if (!url) return null;

          // YouTube embed
          if (source === "youtube") {
            let videoId = "";
            if (url.includes("youtube.com/watch")) {
              videoId = url.split("v=")[1].split("&")[0];
            } else if (url.includes("youtu.be/")) {
              videoId = url.split("youtu.be/")[1].split("?")[0];
            }
            const embedUrl = `https://www.youtube.com/embed/${videoId}`;
            return (
              <div key={idx} className="my-10 w-full">
                <iframe
                  className="w-full aspect-video rounded-lg border"
                  src={embedUrl}
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            );
          }

          // Instagram — show top-right thumbnail

          if (source === "instagram") {
            const thumbUrl = thumbnail?.url || media?.url;

            return (
              <div
                key={idx}
                className="relative w-full my-10 rounded-lg overflow-hidden border"
              >
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full h-[400px] relative"
                >
                  <img
                    src={`${API_BASE_URL}${thumbUrl}`}
                    alt="Instagram Post"
                    className="w-full h-full object-cover"
                  />

                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-black/40 rounded-full p-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-12 h-12 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            );
          }


          // Other videos fallback
          return (
            <div key={idx} className="my-10 w-full">
              <video className="w-full rounded-lg border" controls src={url} />
            </div>
          );
        }

        return null;
      }

      default:
        return null;
    }
  });
};

/* ---------------------------------------------
   Component
--------------------------------------------- */

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const contentRef = useRef(null);
  const customImagePath = "/images/dr-shabnam.jpg";

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await axios.get(`${API_BASE_URL}/api/posts?limit=0`);

        const docs = res.data?.docs || [];

        const found = docs.find((b) => String(b.slug) === slug);
        console.log("res11111111", res);

        if (!found) {
          setBlog(null);
          return;
        }
        const author = found.authors?.[0];

        setBlog({
          id: found.id,
          title: found.title,
          content: found.content,
          publishedAt: found.publishedAt,
          metadescription: found.meta?.description,
          metatitle: found.meta?.title,
          metaImage: found.meta?.metaImage,

          author: found.populatedAuthors?.[0]?.name || "Admin",

          // authorImage: (() => {
          //   const author = found.populatedAuthors?.[0];
          //   if (author?.profileImage?.url) return author.profileImage.url;
          //   if (author?.name === "Dr. Shabnam")
          //     return "https://www.superchennai.com/images/dr-shabnam.jpg";
          //   if (author?.name === "Karthik Nagappan")
          //     return "https://www.superchennai.com/images/karthiknagappan.jpeg";
          //   return null;

          // })(),

          authorImage: (() => {
            const author = found.populatedAuthors?.[0];

            if (author?.profileImage?.url) return author.profileImage.url;

            if (author?.name === "Dr. Shabnam")
              return "https://www.superchennai.com/images/dr-shabnam.jpg";

            if (author?.name === "Karthik Nagappan")
              return "https://www.superchennai.com/images/karthiknagappan.jpeg";

            if (author?.name === "Superchennai Team")
              return "https://www.superchennai.com/images/HomePage-Images/Superchennai.png";

            return null;
          })(),

          authorInstagram:
            found.populatedAuthors?.[0]?.name === "Karthik Nagappan"
              ? ""
              : null,

          heroImage:
            found.heroImage?.sizes?.xlarge?.url || found.heroImage?.url || null,
        });
      } catch (err) {
        console.error("Blog fetch error:", err);
        setBlog(null);
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  /* Paragraph colon styling – scoped safely */
  useEffect(() => {
    if (!contentRef.current) return;

    const spans = contentRef.current.querySelectorAll("p span");
    spans.forEach((span) => {
      if (span.textContent.trim().endsWith(":")) {
        span.classList.add("paragraphstyleBlogUl");
      }
    });
  }, [blog]);

  /* ---------------------------------------------
     States
  --------------------------------------------- */

  if (loading) return <BlogDetailSkeleton />;

  if (!blog)
    return (
      <>
        {/* Banner Skeleton */}
        <div className="relative h-[400px] bg-gray-300 animate-pulse">
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />
          <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
            <div className="h-6 w-32 bg-gray-200 rounded" />
            <div className="h-10 w-72 bg-gray-100 rounded" />
          </div>
        </div>

        {/* Error Card */}
        <div className="-mt-24 min-h-[60vh] flex items-center justify-center px-4 relative z-10">
          <div className="bg-white max-w-md text-center rounded-2xl shadow-md border p-8">
            <div className="text-5xl mb-4">📝</div>
            <h2 className="text-xl font-semibold text-gray-900">
              Blog not found
            </h2>
            <p className="mt-2 text-sm text-gray-600">
              The blog may have been removed or the link is incorrect.
            </p>
            <Link
              to="/blog"
              className="inline-block mt-6 px-5 py-2 text-sm font-medium text-white bg-[#232b91ff] rounded-lg"
            >
              Back to Blogs
            </Link>
          </div>
        </div>
      </>
    );

  /* ---------------------------------------------
     Render
  --------------------------------------------- */

  const ogImage = blog.metaImage
    ? blog.metaImage.startsWith("http")
      ? blog.metaImage
      : `${API_BASE_URL}${blog.metaImage}`
    : null;

  return (
    <>
      <Helmet>
        {/* Basic SEO */}
        <title>{blog.metatitle}</title>

        <meta name="description" content={blog.metadescription} />

        {/* Open Graph (Facebook / WhatsApp / LinkedIn) */}
        <meta property="og:title" content={blog.title} />
        <meta
          property="og:description"
          content={blog.metadescription || blog.title}
        />
        <meta property="og:type" content="article" />
        <meta
          property="og:url"
          content={`https://www.superchennai.com/blog/${slug}`}
        />
        <link rel="canonical" href={window.location.href} />

        {/* {blog.metaImage && (
          <>
            <meta
              property="og:image"
              content={`${API_BASE_URL}${blog.metaImage}`}
            />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
          </>
          
        )} */}

        {ogImage && (
          <>
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />

            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image" content={ogImage} />
          </>
        )}

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={blog.title} />
        <meta
          name="twitter:description"
          content={blog.metadescription || blog.title}
        />
        {blog.metaImage && (
          <meta
            name="twitter:image"
            content={`${API_BASE_URL}${blog.metaImage}`}
          />
        )}
      </Helmet>

      {/* Banner */}
      <div className="BlogDetailPageId">
        <div className="accaodomationBannerSection relative w-full overflow-hidden">
          {blog.heroImage && (
            <>
              <div className="bLogDetailBanner">
                <img
                  src={`${API_BASE_URL}${blog.heroImage}`}
                  alt={blog.title}
                />
                {/* <div className="absolute inset-0 bg-gradient-to-b from-[#a34493]/610 to-[#8b3c82]/90"></div> */}
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

        {/* Content */}
        <div className="container max-w-7xl mx-auto px-4 py-16">
          {/* Author */}
          <div className="flex items-center gap-4 mb-2">
            {blog.authorImage ? (
              <img
                src={`${blog.authorImage}`}
                alt={blog.author}
                className="w-20 h-20 rounded-full object-cover "
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center text-lg font-semibold">
                {blog.author.charAt(0)}
              </div>
            )}

            <div>
              <p className="font-semibold text-gray-800">{blog.author}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                  hour12: true,
                  timeZone: "Asia/Kolkata",
                })}
              </p>
            </div>
          </div>

          {/* <div className="flex items-center gap-4 mb-2">
            {blog.authorInstagram ? (
              <a
                href={blog.authorInstagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 cursor-pointer"
              >
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-20 h-20 rounded-full object-cover border mb-3"
                />

                <div>
                  <p className="font-semibold text-gray-800 hover:underline">
                    {blog.author}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                      timeZone: "Asia/Kolkata",
                    })}
                  </p>
                </div>
              </a>
            ) : (
              <>
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-20 h-20 rounded-full object-cover border mb-3"
                />

                <div>
                  <p className="font-semibold text-gray-800">{blog.author}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                      timeZone: "Asia/Kolkata",
                    })}
                  </p>
                </div>
              </>
            )}
          </div> */}

          {/* Blog Content */}
          <div ref={contentRef} className="blog">
            {parseLexical(blog.content)}
          </div>

          <div className="mt-12">
            <Link to="/blog" className="text-[#232b91ff] font-medium">
              ← Back to Blog List
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogDetail;
