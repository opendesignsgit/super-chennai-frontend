import React, { useState, useRef } from "react";
import {
  Search,
  Pencil,
  Users,
  MapPin,
  Camera,
  Lightbulb,
  Calendar,
  Coffee,
  Store,
  Palette,
  GraduationCap,
  HeartPulse,
  Leaf,
  Train,
  Landmark,
  ShoppingBag,
  Film,
  Trophy,
  Rocket,
  Heart,
  Upload,
  ArrowRight,
  Menu,
  X,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  CheckCircle2,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import "./ChennaiStory.css";
import "./CategoryMarquee.css";

import SoundsOfChennai from "./SoundsOfChennai";
import CategorySlider from "./Components/CategorySlider";

const images = {
  hero: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=1600&q=80",
  marina:
    "https://images.unsplash.com/photo-1621831985871-33e144a69e71?auto=format&fit=crop&w=800&q=80",
  temple:
    "https://images.unsplash.com/photo-1609946782780-28876169c17a?auto=format&fit=crop&w=800&q=80",
  metro:
    "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80",
  food: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=800&q=80",
  people:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
  polaroid1:
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
  polaroid2:
    "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=600&q=80",
  polaroid3:
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
};

const categories = [
  {
    id: "PEOPLE",
    title: "PEOPLE",
    desc: "Stories of Chennaiites who inspire us.",
    icon: Users,
    color: "#8b3c82",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "PLACES",
    title: "PLACES",
    desc: "Hidden gems, iconic spots & local haunts.",
    icon: MapPin,
    color: "#e65100",
    image:
      "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "EXPERIENCES",
    title: "EXPERIENCES",
    desc: "Vibes, moments & everyday stories.",
    icon: Camera,
    color: "#2e7d32",
    image:
      "https://images.unsplash.com/photo-1621831985871-33e144a69e71?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "IDEAS",
    title: "IDEAS",
    desc: "Big visions and thoughts for the future.",
    icon: Lightbulb,
    color: "#f57f17",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "EVENTS",
    title: "EVENTS",
    desc: "Gigs, festivals & community meetups.",
    icon: Calendar,
    color: "#c2185b",
    image:
      "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "FOOD",
    title: "FOOD",
    desc: "From street stalls to iconic messes.",
    icon: Coffee,
    color: "#d84315",
    image:
      "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "BUSINESS",
    title: "BUSINESS",
    desc: "Startups and iconic homegrown brands.",
    icon: Store,
    color: "#1565c0",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ART & CULTURE",
    title: "ART & CULTURE",
    desc: "Indie art, Carnatic music & drama.",
    icon: Palette,
    color: "#6a1b9a",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "EDUCATION",
    title: "EDUCATION",
    desc: "Schools, colleges & student life.",
    icon: GraduationCap,
    color: "#00838f",
    image:
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "HEALTH & WELLNESS",
    title: "HEALTH & WELLNESS",
    desc: "Fitness, wellness & healthy living.",
    icon: HeartPulse,
    color: "#ad1457",
    image:
      "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ENVIRONMENT",
    title: "ENVIRONMENT",
    desc: "Green initiatives & coastal conservation.",
    icon: Leaf,
    color: "#558b2f",
    image:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "TRANSPORT",
    title: "TRANSPORT",
    desc: "Local trains, autos & commute tales.",
    icon: Train,
    color: "#4e342e",
    image:
      "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "HERITAGE",
    title: "HERITAGE",
    desc: "Centuries-old stories & architecture.",
    icon: Landmark,
    color: "#8d6e63",
    image:
      "https://images.unsplash.com/photo-1609946782780-28876169c17a?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "LIFESTYLE",
    title: "LIFESTYLE",
    desc: "Markets, trends & daily Chennai life.",
    icon: ShoppingBag,
    color: "#0288d1",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "ENTERTAINMENT",
    title: "ENTERTAINMENT",
    desc: "Cinema, comedy & nightlife scenes.",
    icon: Film,
    color: "#7b1fa2",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "SPORTS",
    title: "SPORTS",
    desc: "Gully cricket, surfing & fandom.",
    icon: Trophy,
    color: "#ef6c00",
    image:
      "https://images.unsplash.com/photo-1531415074968-036ba1b575da?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "TECH & STARTUPS",
    title: "TECH & STARTUPS",
    desc: "SaaS, tech hubs & innovators.",
    icon: Rocket,
    color: "#283593",
    image:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: "COMMUNITY",
    title: "COMMUNITY",
    desc: "Neighbourhood voices & social causes.",
    icon: Heart,
    color: "#c62828",
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80",
  },
];

const Header = ({ onShareClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="header-container">
        <div className="brand-logo">
          <span className="logo-title">LET'S TALK CHENNAI</span>
          <span className="logo-tagline">Your Chennai • Your Story</span>
        </div>

        <nav className={`desktop-nav ${mobileMenuOpen ? "mobile-open" : ""}`}>
          <a href="#stories" onClick={() => setMobileMenuOpen(false)}>
            STORIES
          </a>
          <a href="#people" onClick={() => setMobileMenuOpen(false)}>
            PEOPLE
          </a>
          <a href="#places" onClick={() => setMobileMenuOpen(false)}>
            PLACES
          </a>
          <a href="#experiences" onClick={() => setMobileMenuOpen(false)}>
            EXPERIENCES
          </a>
          <a href="#ideas" onClick={() => setMobileMenuOpen(false)}>
            IDEAS
          </a>
          <a href="#events" onClick={() => setMobileMenuOpen(false)}>
            EVENTS
          </a>
        </nav>

        <div className="header-actions">
          <button className="icon-btn" aria-label="Search">
            <Search size={18} />
          </button>
          <button className="cta-share-btn" onClick={onShareClick}>
            <Pencil size={16} />
            <span>SHARE YOUR STORY</span>
          </button>
          <button
            className="mobile-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

const HeroSection = () => (
  <section className="hero-section">
    <div
      className="hero-bg-overlay"
      style={{ backgroundImage: `url(${images.hero})` }}
    />
    <div className="hero-container">
      <div className="hero-content">
        <h1 className="hero-main-title">
          YOUR CHENNAI.
          <br />
          YOUR STORY.
        </h1>
        <div className="handwritten-wrapper">
          <span className="handwritten-title">Let's Talk.</span>
          <svg className="yellow-underline" viewBox="0 0 200 20" fill="none">
            <path
              d="M5 15 Q 100 5, 195 12"
              stroke="#FFD54F"
              strokeWidth="6"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <p className="hero-tagline">
          A city of stories, told by the people who live it.
        </p>
        <p className="hero-description">
          Chennai isn’t just a city. It's a feeling, a memory and a million
          stories waiting to be told.
        </p>
        <a href="#share-form" className="hero-cta-btn">
          BE A PART OF THE CONVERSATION <ArrowRight size={18} />
        </a>
      </div>

      <div className="hero-polaroids">
        <div className="polaroid card-1">
          <div
            className="polaroid-img"
            style={{ backgroundImage: `url(${images.polaroid1})` }}
          />
          <p>#MyChennai</p>
        </div>
        <div className="polaroid card-2">
          <div
            className="polaroid-img"
            style={{ backgroundImage: `url(${images.polaroid2})` }}
          />
          <p>#ChennaiDiaries</p>
        </div>
        <div className="polaroid card-3">
          <div
            className="polaroid-img"
            style={{ backgroundImage: `url(${images.polaroid3})` }}
          />
          <p>#CityThatMoves</p>
        </div>
        <div className="decorative-heart">
          <Heart fill="#FFD54F" color="#FFD54F" size={32} />
        </div>
      </div>
    </div>
  </section>
);

const CategoryCard = ({ category }) => {
  const IconComponent = category.icon;
  return (
    <div className="category-card">
      <div
        className="category-card-img"
        style={{ backgroundImage: `url(${category.image})` }}
      >
        <div
          className="category-icon-wrapper"
          style={{ backgroundColor: category.color }}
        >
          <IconComponent size={20} color="#fff" />
        </div>
      </div>
      <div className="category-card-body">
        <h3 className="category-title">{category.title}</h3>
        <p className="category-desc">{category.desc}</p>
        <a href="#share-form" className="category-link">
          Share Now <ArrowRight size={14} />
        </a>
      </div>
    </div>
  );
};

const ChennaiCollage = () => (
  <div className="collage-wrapper">
    <div className="collage-grid">
      <div
        className="collage-item img-1"
        style={{ backgroundImage: `url(${images.temple})` }}
      />
      <div
        className="collage-item img-2"
        style={{ backgroundImage: `url(${images.metro})` }}
      />
      <div
        className="collage-item img-3"
        style={{ backgroundImage: `url(${images.food})` }}
      />
      <div
        className="collage-item img-4"
        style={{ backgroundImage: `url(${images.people})` }}
      />
    </div>
    <div className="quote-box">
      <span className="quote-mark">“</span>
      <p>
        Chennai is a mix of tradition and trends, chaos and calm, ambition and
        attitude. It’s a city that accepts you, challenges you and stays with
        you. Once you’re here, a part of you stays here.
      </p>
    </div>
  </div>
);

const StoryForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    category: "PEOPLE",
    storyTitle: "",
    story: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileError, setFileError] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 20 * 1024 * 1024) {
        setFileError("File size exceeds 20MB limit.");
        setSelectedFile(null);
      } else {
        setFileError("");
        setSelectedFile(file);
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !formData.fullName ||
      !formData.email ||
      !formData.storyTitle ||
      !formData.story
    ) {
      alert("Please fill in all required fields.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="story-form-card" id="share-form">
      <div className="form-header">
        <h3>SHARE YOUR STORY</h3>
        <p>We'd love to hear from you!</p>
      </div>

      {submitted ? (
        <div className="form-success">
          <CheckCircle2 size={48} color="#8b3c82" />
          <h4>Nandri! Your story is submitted.</h4>
          <p>Thank you for contributing to the heartbeat of Chennai.</p>
          <button className="reset-btn" onClick={() => setSubmitted(false)}>
            Share Another Story
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="story-form">
          <div className="form-group">
            <label htmlFor="fullName">Full Name *</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Category *</label>
            <select
              id="category"
              name="category"
              value={formData.category}
              onChange={handleInputChange}
            >
              {categories.map((c) => (
                <option key={c.id} value={c.id}>
                  {c.title}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="storyTitle">Story Title *</label>
            <input
              type="text"
              id="storyTitle"
              name="storyTitle"
              value={formData.storyTitle}
              onChange={handleInputChange}
              placeholder="Give your story a catchy title"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="story">Your Story *</label>
            <textarea
              id="story"
              name="story"
              rows={4}
              value={formData.story}
              onChange={handleInputChange}
              placeholder="Write your story here..."
              required
            />
          </div>

          <div className="form-group">
            <label>Upload Photos / Videos</label>
            <label htmlFor="file-upload" className="file-drop-area">
              <Upload size={24} color="#8b3c82" />
              <span>Click to upload or drag & drop</span>
              <small>JPG, PNG, MP4 (Max 20MB)</small>
              <input
                id="file-upload"
                type="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </label>
            {selectedFile && (
              <div className="file-info">Selected: {selectedFile.name}</div>
            )}
            {fileError && <div className="file-error">{fileError}</div>}
          </div>

          <button type="submit" className="submit-form-btn">
            SUBMIT STORY
          </button>
        </form>
      )}
    </div>
  );
};

const AboutChennai = () => (
  <section className="about-section">
    <div className="about-container">
      <div className="about-left">
        <h2 className="section-title">ABOUT CHENNAI</h2>

        <div className="about-block">
          <div className="about-icon">
            <Landmark size={22} color="#fff" />
          </div>
          <div className="about-text">
            <h3>ROOTED IN HISTORY. ALIVE IN TODAY</h3>
            <p>
              From ancient temples to colonial architecture, Chennai carries its
              heritage with pride.
            </p>
          </div>
        </div>

        <div className="about-block">
          <div className="about-icon">
            <Users size={22} color="#fff" />
          </div>
          <div className="about-text">
            <h3>A CITY OF PEOPLE</h3>
            <p>
              Warm, welcoming and real. Chennai's strength is in its people.
            </p>
          </div>
        </div>

        <div className="about-block">
          <div className="about-icon">
            <Rocket size={22} color="#fff" />
          </div>
          <div className="about-text">
            <h3>BUILT FOR TOMORROW</h3>
            <p>
              A hub for education, innovation, startups and endless
              opportunities.
            </p>
          </div>
        </div>

        <ChennaiCollage />
      </div>

      <div className="about-right">
        <StoryForm />
      </div>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="stats-section">
    <div className="stats-container">
      <div className="stats-header">
        <h2>A CITY THAT INSPIRES.</h2>
        <p>Every story adds to the heartbeat of Chennai.</p>
      </div>
      <div className="stats-grid">
        <div className="stat-item">
          <div className="stat-number">25K+</div>
          <div className="stat-label">Stories Shared</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">15K+</div>
          <div className="stat-label">Chennaiites</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">100+</div>
          <div className="stat-label">Neighbourhoods</div>
        </div>
        <div className="stat-item">
          <div className="stat-number">Infinite</div>
          <div className="stat-label">Memories</div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="footer-container">
      <div className="footer-left">
        <span className="footer-logo">LET'S TALK CHENNAI</span>
        <p className="footer-copy">
          © 2026 Let's Talk Chennai. All rights reserved.
        </p>
      </div>

      <div className="footer-center">
        <h4>FOLLOW US</h4>
        <div className="social-links">
          <a href="#instagram" aria-label="Instagram">
            <Instagram size={20} />
          </a>
          <a href="#facebook" aria-label="Facebook">
            <Facebook size={20} />
          </a>
          <a href="#twitter" aria-label="X">
            <Twitter size={20} />
          </a>
          <a href="#youtube" aria-label="YouTube">
            <Youtube size={20} />
          </a>
        </div>
      </div>

      <div className="footer-right">
        <h4>BE A PART OF CHENNAI'S STORY</h4>
        <div className="footer-handwritten">
          <span>Your Chennai. Your Story.</span>
          <Sparkles color="#FFD54F" size={20} />
        </div>
      </div>
    </div>
  </footer>
);
const scrollToForm = () => {
  const el = document.getElementById("share-form");
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

export default function ChennaiStory() {
  const scrollToForm = () => {
    const el = document.getElementById("share-form");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="chennai-story-page">
      <HeroSection />
      <SoundsOfChennai />
      <Header onShareClick={scrollToForm} />
      <CategorySlider categories={categories} />
      <AboutChennai />
      <StatsSection />
      <Footer />
    </div>
  );
}
