import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Css/DivereseDelights.css";

export default function HoverImageSectionHorizontal() {
  const [activeImage, setActiveImage] = useState(
    "/images/HomePage-Images/Italian.png"
  );
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeAccordionIndex, setActiveAccordionIndex] = useState(null);
  const [scrollDir, setScrollDir] = useState("left");

  const [fade, setFade] = useState(false);

  const handleHover = (newImage, index) => {
    if (newImage === activeImage && index === activeIndex) return;
    setFade(true);
    setActiveIndex(index);
    setTimeout(() => {
      setActiveImage(newImage);
      setFade(false);
    }, 300);
  };

  const toggleAccordion = (index) => {
    if (activeAccordionIndex === index) {
      setActiveAccordionIndex(null);
    } else {
      setActiveAccordionIndex(index);
    }
  };

  const foodItems = [
    {
      title: "ITALIAN",
      description: "Savor creamy risottos, handmade pastas, and rustic pizzas.",
      imageUrl: "/images/HomePage-Images/Italian.png",
      link: "/Italian-Cuisine-in-Chennai",
    },
    {
      title: "CHINESE",
      description:
        "Szechuan spice, Cantonese flavor, and timeless Chinese classics.",
      imageUrl: "/images/HomePage-Images/chineseFoodMenu.png",
      link: "/Chinese-Cuisine-in-Chennai",
    },
    {
      title: "NORTH INDIAN",
      description: "Buttery rotis. Silky curries. Straight from the North.",
      imageUrl: "/images/HomePage-Images/North-Indian.png",
      link: "/North-Indian-Restaurants-in-Chennai",
    },
    {
      title: "CONTINENTAL",
      description:
        "Elegant plating, global ingredients, and Continental sophistication served fresh.",
      imageUrl: "/images/HomePage-Images/Continental.png",
      link: "/Continental-Cuisine-in-Chennai",
    },
    {
      title: "BURMESE",
      description:
        "Savory noodles, zesty pickles, and authentic Burmese cuisine.",
      imageUrl: "/images/HomePage-Images/Burmese.png",
      link: "/burmesechennai",
    },
    {
      title: "JAPANESE",
      description:
        "Fresh sushi, warm ramen, crispy tempura, delicate flavors.",
      imageUrl: "/images/HomePage-Images/japanese-cuisine.png",
      link: "/Japanese-Cuisine-in-Chennai",
    },
    {
      title: "THAI",
      description:
        "Fragrant curries, tangy salads, and sizzling Thai street eats.",
      imageUrl: "/images/HomePage-Images/Thai.png",
      link: "/Taste-of-Thailand-in-Chennai",
    },
    {
      title: "SOUTH INDIAN",
      description: "Crispy dosas, rich sambar, and classic South Indian charm.",
      imageUrl: "/images/HomePage-Images/South-Indian.png",
      link: "/South-Indian-Restaurants-in-Chennai",
    },
    {
      title: "SRI LANKAN",
      description: "Fiery curries, coconut sambol, and soulful Lankan taste.",
      imageUrl: "/images/HomePage-Images/Sri-Lankan.png",
      link: "/Sri-Lankan-Cuisine-in-Chennai",
    },
    {
      title: "MALAYSIAN",
      description:
        "Chee Cheong Fun, satay skewers, and bold Malaysian flavors.",
      imageUrl: "/images/HomePage-Images/Malaysian.png",
      link: "/Malaysian-Flavors-in-Chennai",
    },
    {
      title: "MEXICAN",
      description:
        "Zesty tacos, loaded nachos, and crave-worthy Mexican flair.",
      imageUrl: "/images/HomePage-Images/Mexican.png",
      link: "/Mexican-Cuisine-in-Chennai",
    },
        {
      title: "KOREAN",
      description:
        "Bold kimchi, sizzling BBQ, hearty stews, comforting flavors.",
      imageUrl: "/images/HomePage-Images/korean-cuisine.png",
      link: "/Korean-Cuisine-in-Chennai",
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

  return (
    // <div className="DiverseDelightsSectionContainer">
    //   <div className="container max-w-7xl mx-auto px-4">
    //     <div className="DiverseDelightsTextDiv">
    //       <h3 className="DiverseDelightsText">Diverse</h3>
    //       <img src="/images/HomePage-Images/DeliciousFood.png" alt="" />
    //       <h3 className="DiverseDelightsText">Delights</h3>
    //     </div>
    //     <div className="paragarphTextDiverseFood">
    //       <p>

    //         Chennai serves bold bites and global plates — from iconic dosas to
    //         modern fusion, artisanal cafés to gourmet kitchens. A dynamic food
    //         scene crafted for curious eaters and trend-savvy travelers.
    //       </p>
    //     </div>

    //     {window.innerWidth < 900 ? (
    //       <div className="accordionContainer">
    //         {foodItems.map((item, index) => {
    //           const isOpen = activeAccordionIndex === index;
    //           return (
    //             <div
    //               key={index}
    //               className={`accordionItem ${isOpen ? "activeAccordion" : ""}`}
    //             >
    //               <div
    //                 className="accordionTitle"
    //                 onClick={() => toggleAccordion(index)}
    //               >
    //                 <h4>{item.title}</h4>
    //                 <span className="accordionIcon">{isOpen ? "−" : "+"}</span>
    //               </div>
    //               <div
    //                 className={`accordionContent ${isOpen ? "open" : ""}`}
    //                 style={{
    //                   maxHeight: isOpen ? "500px" : "0px",
    //                 }}
    //               >
    //                 <div className="accordionInnerContent">
    //                   <p>{item.description}</p>
    //                   <img src={item.imageUrl} alt={item.title} />
    //                 </div>
    //               </div>
    //             </div>
    //           );
    //         })}
    //       </div>
    //     ) : (
    //       <div className="FoodSectionDesignContainer">
    //         <div className="foodSectionFirst">
    //           {foodItems.slice(0, 5).map((item, index) => (
    //             <div
    //               key={index}
    //               className={`foodSectionConatiner ${
    //                 activeIndex === index ? "activeDiverseSection" : ""
    //               }`}
    //               onMouseEnter={() => handleHover(item.imageUrl, index)}
    //             >
    //               <Link to="/food">
    //                 <h4>{item.title}</h4>
    //               </Link>
    //               <p>{item.description}</p>
    //             </div>
    //           ))}
    //         </div>

    //         <div className="foodSectionSecond">
    //           <img
    //             className={`dishImage ${fade ? "fade-out" : ""}`}
    //             src={activeImage}
    //             alt="Active Dish"
    //           />
    //         </div>

    //         <div className="foodSectionThird">
    //           {foodItems.slice(5, 10).map((item, index) => {
    //             const actualIndex = index + 5;
    //             return (
    //               <div
    //                 key={actualIndex}
    //                 className={`foodSectionConatiner ${
    //                   activeIndex === actualIndex ? "activeDiverseSection" : ""
    //                 }`}
    //                 onMouseEnter={() => handleHover(item.imageUrl, actualIndex)}
    //               >
    //                 {/* <h4>{item.title}</h4> */}
    //                 <Link to="/food">
    //                   <h4>{item.title}</h4>
    //                 </Link>
    //                 <p>{item.description}</p>
    //               </div>
    //             );
    //           })}
    //         </div>
    //       </div>
    //     )}
    //   </div>
    //   <div
    //     className={`DelightPageText ${
    //       scrollDir === "right" ? "scroll-right" : "DelightPageTextscroll-left"
    //     }`}
    //     ref={bgTextRef}
    //   >
    //     <p>Foodie &nbsp; Foodie &nbsp; Foodie &nbsp; Foodie</p>
    //     <p>Fever &nbsp; Fever &nbsp; Fever &nbsp; Fever</p>
    //   </div>
    // </div>
    <div className="DiverseDelightsSectionContainer">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="DiverseDelightsTextDiv">
          <h3 className="DiverseDelightsText">Diverse</h3>
          <img src="/images/HomePage-Images/DeliciousFood.png" alt="" />
          <h3 className="DiverseDelightsText">Delights</h3>
        </div>
        <div className="paragarphTextDiverseFood">
          <p>
            Chennai serves bold bites and global plates — from iconic dosas to
            modern fusion, artisanal cafés to gourmet kitchens. A dynamic food
            scene crafted for curious eaters and trend-savvy travelers.
          </p>
        </div>

        {window.innerWidth < 900 ? (
          <div className="accordionContainer">
            {foodItems.map((item, index) => {
              const isOpen = activeAccordionIndex === index;
              return (
                <div
                  key={index}
                  className={`accordionItem ${isOpen ? "activeAccordion" : ""}`}
                >
                  <div
                    className="accordionTitle"
                    onClick={() => toggleAccordion(index)}
                  >
                    <h4>{item.title}</h4>
                    <span className="accordionIcon">{isOpen ? "−" : "+"}</span>
                  </div>
                  <div
                    className={`accordionContent ${isOpen ? "open" : ""}`}
                    style={{
                      maxHeight: isOpen ? "500px" : "0px",
                    }}
                  >
                    <div className="accordionInnerContent">
                      <p>{item.description}</p>
                      <img src={item.imageUrl} alt={item.title} />
                      <div className="flex justify-center ">
                        {/* <Link to={item.link}>
                          <button className="OverviewDiverseDelights">
                            View More
                          </button>
                        </Link> */}
                        <a href={item.link}>
                          <button className="OverviewDiverseDelights">
                            View More
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="FoodSectionDesignContainer">
            <div className="foodSectionFirst">
              {foodItems.slice(0, 6).map((item, index) => (
                <div
                  key={index}
                  className={`foodSectionConatiner ${
                    activeIndex === index ? "activeDiverseSection" : ""
                  }`}
                  onMouseEnter={() => handleHover(item.imageUrl, index)}
                >
                  {/* <Link to={item.link}>
                    <h4>{item.title}</h4>
                  </Link> */}
                  <a href={item.link}>
                    <h4>{item.title}</h4>
                  </a>

                  <p>{item.description}</p>
                </div>
              ))}
            </div>

            <div className="foodSectionSecond">
              <img
                className={`dishImage ${fade ? "fade-out" : ""}`}
                src={activeImage}
                alt="Active Dish"
              />
            </div>

            <div className="foodSectionThird">
              {foodItems.slice(6, 12).map((item, index) => {
                const actualIndex = index + 5;
                return (
                  <div
                    key={actualIndex}
                    className={`foodSectionConatiner ${
                      activeIndex === actualIndex ? "activeDiverseSection" : ""
                    }`}
                    onMouseEnter={() => handleHover(item.imageUrl, actualIndex)}
                  >
                    {/* <Link to={item.link}>
                      <h4>{item.title}</h4>
                    </Link> */}
                    <a href={item.link}>
                      <h4>{item.title}</h4>
                    </a>

                    <p>{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <div
        className={`DelightPageText ${
          scrollDir === "right" ? "scroll-right" : "DelightPageTextscroll-left"
        }`}
        ref={bgTextRef}
      >
        <p>Foodie &nbsp; Foodie &nbsp; Foodie &nbsp; Foodie</p>
        <p>Fever &nbsp; Fever &nbsp; Fever &nbsp; Fever</p>
      </div>
    </div>
  );
}
