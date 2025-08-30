import { useState, useEffect, useRef } from "react";
import "../assets/Css/Volunteer.css";
import Search from "../Components/Search";
import InstagramReelsMarquee from "../Components/SocialChennai";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

export default function Volunteer() {
  const [scrollDir, setScrollDir] = useState("left");
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    description: "",
  });
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const popupFunction = () => {
    setIsOpen(true);
  };

  const volunteerSections = [
    {
      title: "Digital",
      description:
        " Utilize your technological expertise to assist Super Chennai. Help with data analysis, site design, or social media to create a virtual influence throughout the city.",
      image: "/images/Volunteer-Images/BacameAvolunterImage0.png",
      linkText: "Enquire Now",
      linkUrl: "/digital",
    },
    {
      title: "EVENTS",
      description:
        "Join Chennai's dynamic scene! Assist in planning and directing charity drives, festivals, and local events to foster community bonds and create enduring memories.",
      image: "/images/Volunteer-Images/BacameAvolunterImage1.png",
      linkText: "Enquire Now",
      linkUrl: "/education",
    },
    {
      title: "CONTENT CREATORS",
      description:
        "Show off your storytelling skills! Provide captivating textual and graphic material for Super Chennai to enhance the message and influence on the community.",
      image: "/images/Volunteer-Images/BacameAvolunterImage2.png",
      linkText: "Enquire Now",
      linkUrl: "/health",
    },
    {
      title: "Design Art",
      description:
        "Chennai Needs Your Creativity!Help us paint and design public spaces. Volunteer to bring colorful designs, murals, and artistic flair to the city. Help make Chennai a canvas of creativity.",
      image: "/images/Volunteer-Images/design-artBanner.png",
      linkText: "Enquire Now",
      linkUrl: "/environment",
    },
    {
      title: "Influencers",
      description:
        " Show off your creative abilities! Create assets, adorn locations, or oversee art activities for Chennai projects that enhance the visual environment of the city.",
      image: "/images/Volunteer-Images/BacameAvolunterImage3.png",
      linkText: "Enquire Now",
      linkUrl: "/environment",
    },
    {
      title: "MENTORS",
      description:
        "Make effective use of your platform! Encourage civic involvement within your network and spread the word about Chennai's events and concerns.",
      image: "/images/Volunteer-Images/BacameAvolunterImage4.png",
      linkText: "Enquire Now",
      linkUrl: "/women",
    },
  ];

  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setScrollDir("left");
      } else {
        setScrollDir("right");
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    });

    if (isOpen) {
      document.body.style.overflow = "hidden";
      setTimeout(() => setAnimate(true), 10);
    } else {
      document.body.style.overflow = "auto";
      setAnimate(false);
    }

    // Clean up when component unmounts (optional but good practice)
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, mobile, description } = formData;

    if (!name.trim() || name.trim().length < 2) {
      toast.error("Please enter a valid name (min 2 characters)");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.trim() || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    const mobileRegex = /^[0-9]{10}$/;
    if (!mobile.trim() || !mobileRegex.test(mobile)) {
      toast.error("Please enter a valid 10-digit mobile number");
      return;
    }

    if (!description.trim() || description.trim().length < 10) {
      toast.error("Please enter a description (min 10 characters)");
      return;
    }

    const data = new FormData();
    data.append("name", formData.name);
    data.append("email", formData.email);
    data.append("mobile", formData.mobile);
    data.append("description", formData.description);

    try {
      setLoading(true);
      // const response = await axios.post(
      //   "http://localhost:3000/api/posts",
      //   data,
      //   {
      //     headers: { "Content-Type": "application/json" },
      //   }
      // );
      const response = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/posts`,
        data,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Successfully submitted!");
        setFormData({ name: "", email: "", mobile: "", description: "" });
        setTimeout(() => {
          navigate("/thankyou");
        }, 1000);
      } else {
        toast.error(" Submission failed.");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error(" Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Volunteer in Chennai : Connection with Communities</title>
        <meta
          name="description"
          content="Join hands to volunteer in Chennai! Contribute to communities, aid social causes, and experience the joy of giving back to your city."
        />
        <link rel="canonical" href="/volunteer-in-chennai" />
      </Helmet>
      <div
        className="VolunteerBgSection notHome"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div className="VolunteerMainContainer">
          <div className="volunteerSectionBanner">
            <div className="VolunteerBannerImage">
              <img src="/images/Volunteer-Images/volunteerBanner.png" alt="" />
            </div>
            <h3 className="voluntterContent">Volunteer</h3>
          </div>
          <ToastContainer
            position="bottom-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </div>
        <div className="notHomePageSearch" id="SearchForm">
          <Search />
        </div>
      </div>

      <div
        className="DootedBannerSectionVolunteer"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <div className="volunteerParaSection container max-w-7xl mx-auto px-4">
          <div
            className={`VolunteeerTextBackground ${
              scrollDir === "right" ? "scroll-right" : "scroll-left"
            }`}
            ref={bgTextRef}
          >
            <p>
              Volunteer - &nbsp; Volunteer - &nbsp; Volunteer - &nbsp; Volunteer
            </p>
          </div>
          <div className="volunteerRow">
            <img
              src="/images/Volunteer-Images/volunteerBannerImagesContent.png"
              alt=""
            />
            <div className="volunteeerMainContent">
              <h3>Volunteer</h3>
              <p className="paraZeroVolunteerSection">
                Become an essential component of Chennai's lively culture!
                Contribute your time and expertise to a variety of causes,
                therefore improving the lives of people and communities around
                the city.
              </p>
              <p className="paraoneVolunteerSection">
                There are many chances to interact with your community and make
                a significant difference in Chennai through volunteering. Your
                participation can have a good knock-on effect, ranging from
                aiding healthcare programs and animal welfare to helping
                educational efforts and environmental protection. Make
                connections with others who share your interests, learn new
                skills, and feel the immense fulfillment that comes from giving
                back to the place where you live.
              </p>
              <p className="paraTwoVolunteerSection">
                Be the change you want to see by joining Chennai's committed
                volunteers. No matter how small your contribution is, it helps
                to build a more compassionate and supportive community.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="VolunterPageBecameVolunteerBg"
        data-aos="fade-up"
        data-aos-delay="600"
      >
        <div className="VolunteerBecameavolunteer">
          <h3>Become a Volunteer</h3>
          <p>
            Donate your time and talents to help shape Chennai's future! Support
            a variety of causes, such as the environment and education, and
            establish a close relationship with your community to work together
            to bring about long-lasting beneficial change.
          </p>
        </div>

        <div>
          <div className="container max-w-7xl mx-auto px-4">
            {volunteerSections.map((section, index) => (
              <div className="DigitalSectionFLex" key={index}>
                {index % 2 === 0 ? (
                  <>
                    <img src={section.image} alt={section.title} />
                    <div className="BecamaAVolunterContentsSection">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage">
                        <a className="cursor-pointer" onClick={popupFunction}>
                          {section.linkText}
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="BecamaAVolunterContentsSection1">
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="exploreVolunteerPage1">
                        <a className="cursor-pointer" onClick={popupFunction}>
                          {section.linkText}
                        </a>
                      </div>
                    </div>
                    <img src={section.image} alt={section.title} />
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <InstagramReelsMarquee />
      {/* <Becameavolunteer /> */}

      {isOpen && (
        <div className="um-overlay">
          <div
            className={`um-modal ${animate ? "um-show" : ""}`}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="um-close" onClick={() => setIsOpen(false)}>
              &times;
            </button>

            <div className="um-content">
              <div className="um-image-section">
                <img src="/images/Volunteer-Images/popupimg.jpg" alt="Popup" />
              </div>
              <ToastContainer
                position="bottom-center"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
              <form
                className="volunteerFormsubmit um-form-section"
                onSubmit={handleSubmit}
              >
                <h2>VOLUNTEER FOR SUPER CHENNAI</h2>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                  required
                />
                <input
                  placeholder="Number"
                  type="number"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{10}"
                />
                <textarea
                  placeholder="Description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                  required
                />
                <div className="um-actions">
                  <button
                    type="button"
                    className="um-btn-secondary"
                    onClick={() => setIsOpen(false)}
                  >
                    Cancel
                  </button>

                  <button
                    type="submit"
                    disabled={loading}
                    className="um-btn-primary"
                  >
                    {loading ? "Uploading..." : "Submit"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
