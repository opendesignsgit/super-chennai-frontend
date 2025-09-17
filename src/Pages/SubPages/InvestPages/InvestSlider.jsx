import Slider from "react-slick";
import { Link } from "react-router-dom";
const images = [
  {
    src: "/images/Invest-Images/SubPages/real-estate-slide.jpg",
    title: "Real Estate",
    link: "/invest/chennai-real-estate",
    imgAlt: "real estate in chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/franchise-slide.jpg",
    title: "Franchise",
    link: "/invest/franchise-business-in-chennai",
    imgAlt: "franchise business in chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/startups-slide.jpg",
    title: "Startups",
    link: "/invest/startup-companies-in-chennai",
    imgAlt: "startups in chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/renewable-energy-slide.jpg",
    title: "Renewable Energy",
    link: "/invest/solar-companies-in-chennai",
    imgAlt: "solar plant in chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/retirement-slide.jpg",
    title: "Retirement",
    link: "/invest/retirement-in-chennai",
    imgAlt: "retirement in chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/government-initiatives-slide.jpg",
    title: "Government Initiatives",
    link: "/invest/government-projects-in-chennai",
    imgAlt: "ribbon building chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/formalities-regulations-slide.jpg",
    title: "Formalities and Regulations",
    link: "/invest/law-firms-in-chennai",
    imgAlt: "formalities in chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/news-slide.jpg",
    title: "News",
    link: "/invest/news-in-chennai",
    imgAlt: "news channel tamil",
  },
  {
    src: "/images/Invest-Images/SubPages/events-slide.jpg",
    title: "Invest in Events",
    link: "/invest/chennai-events",
    imgAlt: "events in chennai",
  },
  {
    src: "/images/Invest-Images/SubPages/exhibitions-slide.jpg",
    title: "Chennai exhibition",
    link: "/invest/exhibitions-in-chennai",
    imgAlt: "chennai exhibition",
  },
];

const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="ExplorePageLeftButton"></div>
);

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="ExplorePageRightButton"></div>
);

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

export default function InvestSlider() {
  return (
    <div className="exploreSldierBg">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="exploreMoreSectionContent">
          <h4>PROPERTY PROSPECTS IN CHENNAI</h4>
          <p>
            Chennai's real estate market offers consistent demand and income. By
            its developed infrastructure, this city market offers substantial
            profits from both business and residential areas.
          </p>
        </div>
        <div className="exploreSldierSection">
          <Slider {...settings}>
            {images.map((img, idx) => (
              <div key={idx} className="ExplorePageSliderImage">
                <a href={img.link} style={{ textDecoration: "none" }}>
                  <div className="relative rounded overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.imgAlt}
                      className="w-full h-auto block"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/70 to-transparent"></div>
                    <div className="titleTextExploreChennai">{img.title}</div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}
