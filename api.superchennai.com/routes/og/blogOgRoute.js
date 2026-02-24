const express = require("express");
const fs = require("fs");

const router = express.Router();

// ------------------------------------
// PATH TO VITE BUILD HTML
// ------------------------------------
const INDEX_HTML = "/var/www/superchennai.com/dist/index.html";

// ------------------------------------
// DEFAULT OG (FALLBACK)
// ------------------------------------
const DEFAULT_OG = {
  title: "Super Chennai – Culture, Food, Beaches & More",
  description:
    "Discover Super Chennai – culture, food, beaches, innovation, and city life.",
  image:
    "https://www.superchennai.com/images/super-chennai-social-img.jpg",
};

// ------------------------------------
// ESCAPE HTML (SECURITY)
// ------------------------------------
function escapeHtml(str = "") {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// ------------------------------------
// FETCH BLOG OG FROM PAYLOAD
// ------------------------------------
async function getBlogOG(slug) {
  try {
    const res = await fetch(
      `https://demo.superchennai.com/api/posts?where[slug][equals]=${slug}&limit=1`
    );

    const data = await res.json();
    const blog = data?.docs?.[0];

    if (!blog) return null;

    let image =
      blog.meta?.image?.sizes?.og?.url ||
      blog.heroImage?.sizes?.og?.url ||
      blog.heroImage?.url ||
      null;

    if (image && !image.startsWith("http")) {
      image = `https://demo.superchennai.com${image}`;
    }

    return {
      title: blog.meta?.title || blog.title,
      description:
        blog.meta?.description ||
        blog.excerpt ||
        blog.title,
      image,
    };
  } catch (err) {
    console.error("Blog OG error:", err.message);
    return null;
  }
}

// ------------------------------------
// FETCH PAGE OG FROM PAYLOAD PAGES
// ------------------------------------
async function getPageOG(slug) {
  try {
    const res = await fetch(
      `https://demo.superchennai.com/api/pages?where[slug][equals]=${slug}&limit=1`
    );

    const data = await res.json();
    const page = data?.docs?.[0];

    if (!page) return null;

    let image =
      page.meta?.image?.sizes?.og?.url ||
      page.hero?.image?.sizes?.og?.url ||
      page.hero?.image?.url ||
      null;

    if (image && !image.startsWith("http")) {
      image = `https://demo.superchennai.com${image}`;
    }

    return {
      title: page.meta?.title || page.title,
      description:
        page.meta?.description ||
        page.layout?.[0]?.description ||
        page.title,
      image,
    };
  } catch (err) {
    console.error("Page OG error:", err.message);
    return null;
  }
}

// ------------------------------------
// MAIN OG ROUTE (ALL PAGES)
// ------------------------------------
router.use(async (req, res) => {
  const path = req.path.replace(/^\/|\/$/g, "");

  let ogTitle = DEFAULT_OG.title;
  let ogDesc = DEFAULT_OG.description;
  let ogImage = DEFAULT_OG.image;
  let ogUrl = `https://www.superchennai.com/${path}`;

  let html;

  try {
    html = fs.readFileSync(INDEX_HTML, "utf8");
  } catch (err) {
    return res.status(500).send("index.html not found");
  }

  try {
    // ------------------------------------
    // 1️⃣ BLOG PRIORITY
    // ------------------------------------
    if (path.startsWith("blog/")) {
      const slug = path.replace("blog/", "");
      const blogOG = await getBlogOG(slug);

      if (blogOG) {
        ogTitle = blogOG.title;
        ogDesc = blogOG.description;
        ogImage = blogOG.image || ogImage;
      }
    } else {
      // ------------------------------------
      // 2️⃣ CMS PAGE
      // ------------------------------------
      const pageOG = await getPageOG(path);

      if (pageOG) {
        ogTitle = pageOG.title;
        ogDesc = pageOG.description;
        ogImage = pageOG.image || ogImage;
      }
    }
  } catch (err) {
    console.error("OG processing error:", err.message);
  }

  // ------------------------------------
  // INJECT META TAGS
  // ------------------------------------
  html = html
    .replace(
      /<meta property="og:title"[^>]*>/,
      `<meta property="og:title" content="${escapeHtml(ogTitle)}">`
    )
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapeHtml(ogDesc)}">`
    )
    .replace(
      /<meta property="og:image"[^>]*>/,
      `<meta property="og:image" content="${escapeHtml(ogImage)}">`
    )
    .replace(
      /<meta property="og:url"[^>]*>/,
      `<meta property="og:url" content="${escapeHtml(ogUrl)}">`
    )
    .replace(
      /<meta name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${escapeHtml(ogTitle)}">`
    )
    .replace(
      /<meta name="twitter:description"[^>]*>/,
      `<meta name="twitter:description" content="${escapeHtml(ogDesc)}">`
    )
    .replace(
      /<meta name="twitter:image"[^>]*>/,
      `<meta name="twitter:image" content="${escapeHtml(ogImage)}">`
    );

  // ------------------------------------
  // BOT FRIENDLY HEADERS
  // ------------------------------------
  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  res.setHeader("Cache-Control", "public, max-age=300");
  res.setHeader("Vary", "User-Agent");

  return res.send(html);
});

module.exports = router;
