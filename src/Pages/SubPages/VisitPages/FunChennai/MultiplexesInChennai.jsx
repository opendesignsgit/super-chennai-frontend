import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";
// ################## DUMMY CONTENTS ###################################

const imageSections1 = [
  {
    sectionTitle: "",
    sectionDesc: "",
    image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: " Pro Tips for Movie Buffs",
            para: [
              <>
                Book through BookMyShow or SPI’s own app for loyalty rewards and
                fast entry
              </>,
              <>Catch morning shows for lower prices and quieter crowds</>,
              <>
                Subtitled screenings available for most Tamil films in major
                multiplexes
              </>,
              <>
                Food courts in attached malls make for great pre/post-movie
                plans
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
          },
        ],
      },
    ],
  },
];

const images = [
  {
    src: "/images/Visit-Images/SubPages/accomodation-slide.jpg",
    title: "Accomodation",
    link: "/visit/hotel-accommodation-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/food-slide.jpg",
    title: "Food",
    link: "/visit/restaurants-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/places-to-visit-slide.jpg",
    title: "Places to Visit",
    link: "/visit/places-to-visit-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/things-to-do-slide.jpg",
    title: "Things to Do",
    link: "/things-to-do",
  },
  {
    src: "/images/Visit-Images/SubPages/itinerary-slide.jpg",
    title: "Itinerary",
    link: "/visit/chennai-itinerary",
  },
  {
    src: "/images/Visit-Images/SubPages/hidden-gems-slide.jpg",
    title: "Hidden Gems",
    link: "/hidden-gems",
  },
  {
    src: "/images/Visit-Images/SubPages/shopping-slide.jpg",
    title: "Shopping",
    link: "/visit/shopping-areas-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/travel-tips-slide.jpg",
    title: "Travel Tips",
    link: "/travel-tips",
  },
  {
    src: "/images/Visit-Images/SubPages/wellness-slide.jpg",
    title: "Wellness ",
    link: "/visit/wellness-centres-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/events-slide.jpg",
    title: "Events ",
    link: "/visit/events-in-chennai",
  },
  {
    src: "/images/Visit-Images/SubPages/conferences-slide.jpg",
    title: "Conferences ",
    link: "/visit/conferences-in-chennai",
  },
];
const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "PVR Sathyam (Royapettah)",
            para: [
              "A legacy cinema, PVR Sathyam is renowned for its state-of-the-art screens and exceptional sound systems. Originally part of SPI Cinemas, it continues to be a favorite among cinephiles.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/sathyam-cinemas.jpg",
            location: "https://maps.app.goo.gl/Qnm5YG7daFVpy9pX6",
          },
        ],
      },
      {
        points: [
          {
            title: "PVR Escape (Express Avenue Mall)",
            para: [
              "Located in the heart of the city, this multiplex offers eight screens with plush seating and a variety of gourmet snacks. Its modern design and ambiance enhance the movie-watching experience.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/escape-cinemas.jpg",
            location: "https://maps.app.goo.gl/1DhRBHWp28rZQEbE7",
          },
        ],
      },
      {
        points: [
          {
            title: "PVR Palazzo (Nexus Vijaya Mall, Vadapalani)",
            para: [
              "This luxurious multiplex features an IMAX screen, providing an immersive viewing experience. Its elegant interiors and advanced projection systems make it a top choice for moviegoers.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/palazzo-cinemas.jpg",
            location: "https://maps.app.goo.gl/ZydWi1tBhqXrM2Dp9",
          },
        ],
      },
      {
        points: [
          {
            title: "PVR Cinemas (Ampa Skywalk Mall, Aminjikarai)",
            para: [
              "Located in a bustling shopping mall, this multiplex offers six screens with modern projection and sound systems, providing a convenient movie-going option.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/pvr-cinemas-ampa-skywalk-mall-aminjikarai.jpg",
            location: "https://maps.app.goo.gl/nijdkvxqFRM4bvMs5",
          },
        ],
      },
      {
        points: [
          {
            title: "Luxe Cinemas (Phoenix MarketCity, Velachery)",
            para: [
              "Known for its opulent settings, Luxe Cinemas offers 11 screens, including an IMAX, ensuring a premium cinematic experience. Its modern amenities cater to those seeking luxury.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/luxe-cinemas.jpg",
            location: "https://maps.app.goo.gl/mbs4ptzpGQmn2Vio9",
          },
        ],
      },
      {
        points: [
          {
            title: "AGS Cinemas",
            para: [
              "With multiple locations across Chennai, including T. Nagar, Villivakkam, and Navalur, AGS Cinemas combines affordability with modern facilities, attracting a broad audience.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/ags-cinemas.jpg",
            location: "https://maps.app.goo.gl/jUy56DhFxEmw5PNa6",
          },
        ],
      },
      {
        points: [
          {
            title: "Mayajaal Multiplex (ECR)",
            para: [
              "As one of Asia's largest multiplexes, Mayajaal boasts 16 screens. Situated along the scenic East Coast Road, it offers a comprehensive entertainment experience.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/mayajaal-multiplex-ecr.jpg",
            location: "https://maps.app.goo.gl/wPvhBd5PS1ZM1p8p9",
          },
        ],
      },
      {
        points: [
          {
            title: "INOX (Chennai Citi Centre & Chandra Metro Mall)",
            para: [
              "INOX provides a consistent movie experience with its comfortable seating and advanced sound systems, making it a reliable choice for cinema lovers.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/inox-cinemas.jpg",
            location: "https://maps.app.goo.gl/UKP5RYpsUY8UFFx5A",
          },
        ],
      },
      {
        points: [
          {
            title: "Rohini Silver Screens (Koyambedu)",
            para: [
              "A favorite among locals, Rohini Silver Screens is known for its vibrant atmosphere and cutting-edge amenities, showcasing a mix of regional and international films.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/rohini.jpg",
            location: "https://maps.app.goo.gl/nDsPfzt89yY5mKHj7",
          },
        ],
      },

      {
        points: [
          {
            title: "Cinepolis (BSR Mall, Thoraipakkam)",
            para: [
              "Part of the international Cinepolis chain, this multiplex offers a global cinematic experience with its luxurious seating and advanced screening technology.",
            ],
            imgs: "/images/Visit-Images/SubPages/cinemas/cinepolis-bsr-mall-thoraipakkam.jpg",
            location: "https://maps.app.goo.gl/kUt5xkW8Mse73tqQ9",
          },
        ],
      },
    ],
  },
];
const imageSectionstwo = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Pro Tips for Movie Buffs",
            para: [
              "Book through BookMyShow or SPI’s own app for loyalty rewards and fast entry.",
              "Catch morning shows for lower prices and quieter crowds.",
              "Subtitled screenings available for most Tamil films in major multiplexes.",
              "Food courts in attached malls make for great pre/post-movie plans.",
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
          },
        ],
      },
    ],
  },
];

export default function MultiplexesInChennai() {
  {
    /*#################### STATE VARIABLES ##################### */
  }

  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  {
    /*#################### HELPERS  ##################### */
  }

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageRightButton"></div>
  );

  {
    /*#################### USEEFFECT HOOCKS  ##################### */
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const settings = {
    dots: false,
    autoplay: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      { breakpoint: 1100, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };
  {
    /*########################### RENDER   ######################### */
  }

  return (
    <div className="FunchennaiDetailPage">
      {/*#################### Banner ########################## */}
      <div className="accaodomationBannerSection">
        <img
          src="/images/Visit-Images/SubPages/thingsDoChild/multiplexes.jpg"
          alt=""
        />
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>MULTIPLEXES IN CHENNAI </h3>
            <div className="breadCrum">
              <Link to="/invest-in-chennai">Home</Link> -{" "}
              <span>MULTIPLEXES IN CHENNAI </span>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </div>

      {/*#################### Intro ###########################*/}
      <div className="visitIntroParaSection detailIntro">
        <div className="container max-w-7xl mx-auto px-4">
          <div
            className={`CostOflivingBackground ${
              scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
            }`}
            ref={bgTextRef}
          >
            <p>MULTIPLEXES IN CHENNAI </p>
          </div>
          <div className="workIntro">
            <h3>Where Stories Come to Life</h3>
            <p>
              Step into Chennai’s modern multiplexes — a blend of comfort,
              advanced tech, and immersive visuals. From the latest blockbusters
              to indie treasures, these cinema halls offer a seamless movie
              experience wrapped in style and convenience.
            </p>
          </div>
        </div>
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec funchennai">
        {imageSections.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#f7f7f7] colorbgsec"
              } 
                 ${
                   index % 3 === 0
                     ? "pattern-a"
                     : index % 3 === 1
                     ? "pattern-b"
                     : "pattern-c"
                 }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
              </h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                        {item.location && (
                          <div className="mt-2 exploreMorebuttonVisitChennai">
                            <a
                              className="text-blue-600 hover:underline text-sm font-medium"
                              href={item.location}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-discover="true"
                            >
                              View on Map
                            </a>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec ">
        {imageSectionstwo.map((section, index) => (
          <section
            className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#f7f7f7] colorbgsec"
              } 
                 ${
                   index % 3 === 0
                     ? "pattern-a"
                     : index % 3 === 1
                     ? "pattern-b"
                     : "pattern-c"
                 }`}
            key={index}
          >
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
              <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                {" "}
              </h2>
              {section.tenantInfoSections.map((tenant, i) => (
                <div key={i}>
                  <h4 className="text-lg font-semibold mb-4">{tenant.title}</h4>
                  {tenant.points.map((item, j) => (
                    <div key={j} className="clcboxItemss flex mb-4">
                      <div className="clcboxIImg">
                        <img src={item.imgs} alt={item.title} />
                      </div>
                      <div className="clcboxICont">
                        <h3>{item.title}</h3>
                        <h5>{item.desc}</h5>
                        <ul className="list-disc list-inside text-gray-600 space-y-1">
                          {item.para.map((point, i) => (
                            <li key={i}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* ########## EXPLORE MORE CHENNAI SLIDER ############### */}
      <VisitSlider />

      {/*################## SOCIAL MARQUE SECTION################ */}
      <div className="AccomodationInstaReel">
        <InstagramReelsMarquee />
      </div>
      <Becameavolunteer />
    </div>
  );
}
