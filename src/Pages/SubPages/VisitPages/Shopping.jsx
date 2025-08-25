import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/Css/CostOfLiving.css";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";
import VisitSlider from "./VisitSlider";
import { Helmet } from "react-helmet-async";

export default function Shopping() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const ShoppingData = [
  //   {
  //     category: "Textiles & Traditional Wear",
  //     places: [
  //       {
  //         name: "T. Nagar (Pondy Bazaar & Ranganathan Street)",
  //         desc: "Sarees, salwars, and festive ethnic wear from famous stores like Nalli, Pothys, RMKV, and Chennai Silks",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Mylapore",
  //         desc: "Classical dance costumes, temple jewelry, and artisanal weaves",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Panagal Park Area",
  //         desc: " Rich silk sarees and Kanchipuram collections for weddings and special occasions",
  //         locations: [{ name: "-", link: "#" }],
  //       },

  //     ],
  //   },
  //   {
  //     category: "Malls & International Brands",
  //     places: [
  //       {
  //         name: "Express Avenue (Royapettah)",
  //         desc: "Flagship stores, cinema, and food court in a centrally located mall",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Phoenix Marketcity (Velachery)",
  //         desc: "Luxury shopping, fashion chains, cafes, and live events",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "VR Chennai (Anna Nagar)",
  //         desc: "Premium retail, designer brands, and rooftop restaurants",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Chennai Citi Centre (Mylapore)",
  //         desc: "Popular with families and weekend shoppers",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //     ],
  //   },
  //   {
  //     category: "Jewelry & Gold",
  //     places: [
  //       {
  //         name: "T. Nagar & Usman Road",
  //         desc: "High-end stores like GRT, Lalitha, Prince, and Jos Alukkas",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Parrys Corner",
  //         desc: "Wholesale jewelry and gems",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Khader Nawaz Khan Road",
  //         desc: "Designer boutique jewelers and contemporary labels",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //     ],
  //   },
  //   {
  //     category: "Street Shopping & Local Finds",
  //     places: [
  //       {
  //         name: "Pondy Bazaar",
  //         desc: " Footwear, bags, trendy clothing, accessories — fun and affordable",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Ritchie Street (Mount Road)",
  //         desc: "The go-to destination for electronics and gadget deals",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Moore Market",
  //         desc: "Books, vintage finds, antiques, and curios",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //     ],
  //   },
  //   {
  //     category: "Handicrafts & Home Decor",
  //     places: [
  //       {
  //         name: "Poompuhar & Co-optex (Across city)",
  //         desc: "Government emporiums for crafts, handlooms, and home textiles",
  //         locations: [
  //           { name: "-", link: "#" },
  //         ],
  //       },
  //       {
  //         name: "Kalpa Druma (Mylapore)",
  //         desc: " Artisan furniture and ethical crafts",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Amethyst (Royapettah)",
  //         desc: "High-end home goods, apparel, and organic lifestyle products in a heritage setting",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //     ],
  //   },
  //      {
  //     category: "Shopping for All Needs",
  //     places: [
  //       {
  //         name: "Everyday Essentials",
  //         desc: "Reliance, More, Nilgiris, and local kirana shops",
  //         locations: [
  //           { name: "-", link: "#" },
  //         ],
  //       },
  //       {
  //         name: "Books & Stationery",
  //         desc: "Higginbothams, Odyssey, Crossword, and local independent sellers",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Sports & Outdoors",
  //         desc: "Decathlon, Proline, and stores across malls and online hubs",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //     ],
  //   },
  //      {
  //     category: "Pro Tips",
  //     places: [
  //       {
  //         name: "Best Time to Shop",
  //         desc: "Mornings (for street markets), weekdays (to avoid mall crowds), festival seasons (for deals)",
  //         locations: [
  //           { name: "-", link: "#" },
  //         ],
  //       },
  //       {
  //         name: "Payment Modes",
  //         desc: "Digital payments widely accepted; carry cash for street vendors",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //       {
  //         name: "Language Tip",
  //         desc: "Basic Tamil or polite English is enough to shop anywhere",
  //         locations: [{ name: "-", link: "#" }],
  //       },
  //     ],
  //   },
  // ];

  const ShoppingData = [
    {
      category: "Textiles & Traditional Wear",
      places: [
        {
          name: "The Chennai Silks - T.Nagar",
          desc: "Sarees, salwars, and festive ethnic wear from famous stores like Nalli, Pothys, RMKV, and Chennai Silks",
          locations: [
            {
              name: " The chennai silks",
              link: "https://maps.app.goo.gl/aE9JUdr7YuVbA58g7",
            },
            {
              name: " RMKV ",
              link: "https://maps.app.goo.gl/dBqYBRKJ1Ua7GV3dA",
            },
            {
              name: " Kumaran Silks ",
              link: "https://maps.app.goo.gl/hhAoCi4iLwn2fMMEA",
            },
          ],
        },
        {
          name: "Mylapore",
          desc: "Classical dance costumes, temple jewelry, and artisanal weaves",
          locations: [
            {
              name: " Jeyachandran Textiles",
              link: "https://maps.app.goo.gl/NfKNjvnkn2ujXWFRA",
            },
            {
              name: "Rangachari Cloth Store",
              link: "https://maps.app.goo.gl/q6mvChaxRKVbr5CK8",
            },
            {
              name: "Shrinivas Silks",
              link: "https://maps.app.goo.gl/VsR87D9QRqGrzbgYA",
            },
          ],
        },
      ],
    },
    {
      category: "Malls & International Brands",
      places: [
        {
          name: "Express Avenue (Royapettah)",
          desc: "Flagship stores, cinema, and food court in a centrally located mall",
          locations: [
            {
              name: " Royapettah",
              link: "https://maps.app.goo.gl/66VJHN8WhryMyYV98",
            },
          ],
        },
        {
          name: "Phoenix Market City (Velachery)",
          desc: "Luxury shopping, fashion chains, cafes, and live events",
          locations: [
            {
              name: " Velachery",
              link: "https://maps.app.goo.gl/Tdi8CxmeuD1jjTRq8",
            },
          ],
        },
        {
          name: "VR Chennai (Anna Nagar)",
          desc: "Premium retail, designer brands, and rooftop restaurants",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/3hMQTAhd4qwPSGLq6",
            },
          ],
        },
        {
          name: "Chennai Citi Centre (Mylapore)",
          desc: "Popular with families and weekend shoppers",
          locations: [
            {
              name: " Mylapore",
              link: "https://maps.app.goo.gl/vCkbRcwhzGDgdejS9",
            },
          ],
        },
      ],
    },
    {
      category: "Jewellery",
      places: [
        {
          name: "T. Nagar & Usman Road",
          desc: "High-end stores like GRT, Lalitha, Prince, and Jos Alukkas",
          locations: [
            {
              name: "Lalithaa Jewellery ",
              link: " https://maps.app.goo.gl/Aidhz2GopkZv3LFf6",
            },
            {
              name: "Prince jewellery",
              link: "https://maps.app.goo.gl/gwn8h8gmncQQxRdaA",
            },
            {
              name: "Joyalukkas Jewellery ",
              link: " https://maps.app.goo.gl/qk5GEz72de9sk3z6A",
            },
            {
              name: "Bhima Jewellers ",
              link: " https://maps.app.goo.gl/2G9r5YGFgVm5FdgJ9",
            },
            {
              name: "  Khazana Jewellery  ",
              link: "https://maps.app.goo.gl/U9gs9UYnrd8UabuF7",
            },
          ],
        },
        {
          name: "Parrys Corner",
          desc: "Wholesale jewelry and gems",
          locations: [
            {
              name: "L K S Jewellers ",
              link: "https://maps.app.goo.gl/71RjBCdNCXkEwr6v9",
            },
          ],
        },
        {
          name: "Khader Nawaz Khan Road",
          desc: "Designer boutique jewelers and contemporary labels",
          locations: [
            {
              name: " Amrapali",
              link: "https://maps.app.goo.gl/f3xTMwYpBAtbCAkU7",
            },
          ],
        },
      ],
    },
    {
      category: "Street Shopping & Local Finds",
      places: [
        {
          name: "Pondy Bazaar",
          desc: "Footwear, bags, trendy clothing, accessories — fun and affordable",
          locations: [
            {
              name: "Rathna Stores Firm",
              link: "https://maps.app.goo.gl/ScTSm6JoGbjW3MnY6",
            },
          ],
        },
        {
          name: "Ritchie Street (Mount Road)",
          desc: "The go-to destination for electronics and gadget deals",
          locations: [
            {
              name: "Ritchie street Computers",
              link: "https://maps.app.goo.gl/NV1jtexekBtnsJSu7",
            },
          ],
        },
        {
          name: "Moore Market",
          desc: "Books, vintage finds, antiques, and curios",
          locations: [
            {
              name: "Famous Book Shop",
              link: "https://maps.app.goo.gl/BRpUxQ4mzyMLa7FM9",
            },
            {
              name: "The Old Curiosity Shop ",
              link: "https://maps.app.goo.gl/9WwJwpYgT3RsNF7V8",
            },
          ],
        },
      ],
    },
    {
      category: "Handicrafts & Home Decor",
      places: [
        {
          name: "Poompuhar & Co-optex (Across city)",
          desc: "Government emporiums for crafts, handlooms, and home textiles",
          locations: [
            {
              name: "Anna Salai",
              link: "https://maps.app.goo.gl/tQbnYLCNwoaNUnY78",
            },
          ],
        },
        {
          name: "Kalpa Druma (Mylapore)",
          desc: "Artisan furniture and ethical crafts",
          locations: [
            {
              name: " Mylapore",
              link: "https://maps.app.goo.gl/ph7wBcqbWnRL6uBX8",
            },
          ],
        },
        {
          name: "Amethyst (Royapettah)",
          desc: "High-end home goods, apparel, and organic lifestyle products in a heritage setting",
          locations: [
            {
              name: " Royapettah",
              link: "https://maps.app.goo.gl/T4nAQRqr2F62RRw86",
            },
          ],
        },
      ],
    },
    {
      category: " other Shopping for All Needs",
      places: [
        {
          name: "Everyday Essentials",
          desc: "Reliance, More, Nilgiris, and local kirana shops",
          locations: [
            {
              name: " T. Nagar",
              link: "https://maps.app.goo.gl/1DJag5SDoYE2Pvs87",
            },
          ],
        },
        {
          name: "Books & Stationery",
          desc: "Higginbothams, Odyssey, Crossword, and local independent sellers",
          locations: [
            {
              name: " Anna Salai",
              link: "https://maps.app.goo.gl/scx5EQCVPR9D4bSF6",
            },
            {
              name: " Forum Nexus Vijaya Mall",
              link: "https://maps.app.goo.gl/d96dwcugDq1vkuCWA",
            },
          ],
        },
        {
          name: "Sports & Outdoors",
          desc: "Decathlon, Proline, and stores across malls and online hubs",
          locations: [
            {
              name: " Pondy Bazaar",
              link: "https://maps.app.goo.gl/TB8yHTzYoZz3oZfUA",
            },
            {
              name: " Express Avenue",
              link: "https://maps.app.goo.gl/eLtcLct33ZahCXcf7",
            },
          ],
        },
      ],
    },
    // {
    //   category: "Pro Tips",
    //   places: [
    //     {
    //       name: "Best Time to Shop",
    //       desc: "Mornings (for street markets), weekdays (to avoid mall crowds), festival seasons (for deals)",
    //       locations: [{ name: "-", link: "#" }],
    //     },
    //     {
    //       name: "Payment Modes",
    //       desc: "Digital payments widely accepted; carry cash for street vendors",
    //       locations: [{ name: "-", link: "#" }],
    //     },
    //     {
    //       name: "Language Tip",
    //       desc: "Basic Tamil or polite English is enough to shop anywhere",
    //       locations: [{ name: "-", link: "#" }],
    //     },
    //   ],
    // },
  ];

  const images = [
    {
      src: "/images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accommodation",
      link: "/visit/hotel-accommodation-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/restaurants-slide.jpg",
      title: "Restaurants",
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

  // ########## Custom Arrow Components ###############
  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div className="ExplorePageRightButton" onClick={onClick}></div>
  );

  const settings = {
    dots: false,
    autoplay: false,
    autoplaySpeed: 1500,

    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };

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

  return (
    <>
      <Helmet>
        <title>Shopping in Chennai | Shopping Malls in Chennai</title>
        <meta
          name="description"
          content="Shopping in Chennai blends tradition & trend, explore silk sarees, gold jewelry, electronics, fashion boutiques & buzzing local street markets."
        />
        <link rel="canonical" href="/visit/shopping-areas-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/Visit-Images/SubPages/shopping-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Shopping</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai">Visit </Link> -{" "}
                <a href="#">Chennai Shopping</a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
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
              <p>
                Shopping &nbsp; in Chennai &nbsp; Shopping &nbsp; in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Where Tradition Meets Trend on Every Street</h3>
              <p>
                Chennai offers a retail experience as diverse as the city itself
                — a place where age-old textile shops stand proudly beside sleek
                malls, and local street markets buzz just minutes away from
                luxury boutiques. Whether you're searching for handwoven silks,
                electronics, gold jewelry, designer fashion, or homegrown
                brands, Chennai’s shopping scene is an adventure in discovery,
                craftsmanship, and convenience.
              </p>
              <p>
                From vibrant bazaars to curated lifestyle stores, the city
                caters to every style, budget, and purpose — all while keeping
                its cultural flair intact.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Where to Shop in Chennai
          </h1>

          {ShoppingData.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn">
              <h2 className="text-2xl font-semibold mb-6">
                {section.category}
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.places.map((place, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{place.name}</h3>
                    <p className="text-gray-700 mb-2">{place.desc}</p>

                    {place.locations?.length > 0 && (
                      <ExpandableList
                        items={place.locations.map((loc) => ({
                          label: loc.name,
                          link: loc.link,
                        }))}
                        maxVisible={2}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/*--------------- Explore More Chennai----------------- */}

        <VisitSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
