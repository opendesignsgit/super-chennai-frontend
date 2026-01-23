// components/PageBanner.jsx
import { Link } from "react-router-dom";

export default function PageBannerinnner({
  title,
  desktopImage,
  mobileImage,
  breadcrumbs = [],
  className = "",
}) {
  return (
    <section className={`accaodomationBannerSection ${className}`}>
      <div>
        <img
          className="eventsCalenderIamge hidden sm:block"
          src={desktopImage}
          alt={title}
        />
        <img
          className="block sm:hidden"
          src={mobileImage || desktopImage}
          alt={`${title} Mobile`}
        />
      </div>

      <div className="accodoamationBannerContainer">
        <div className="accodoamationBannerText">
          <h1>{title}</h1>

          {breadcrumbs.length > 0 && (
            <div className="breadCrum">
              {breadcrumbs.map((item, index) => (
                <span key={index}>
                  <Link to={item.href}>{item.label}</Link>
                  {index < breadcrumbs.length - 1 && " - "}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
