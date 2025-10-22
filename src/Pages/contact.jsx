import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import "../assets/Css/Eventstyle.css";
import "../assets/Css/contact.css";
import Search from "../Components/Search";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Page</title>
        <meta name="description" content="Contact Description" />
      </Helmet>
      <section className="accaodomationBannerSection">
        <div>
          <img src="/images/contact-us-banner.jpg" alt="Contact us" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Contact Us</h1>
            <div className="breadCrum">
              <Link to="/">Home</Link> - <Link to="/contact">Contact Us</Link>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </section>

      <section className="contactOut SecPadblock12">
        <div className="container max-w-7xl mx-auto">
          <section className="max-w-4xl mx-auto p-8 md:p-12 text-center space-y-6">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Connect with <strong>Super Chennai Marketing Pvt Ltd</strong> for
              media, partnerships, or inquiries. We are happy to assist you.
            </p>
            <div className="mt-8">
              <img
                src="/images/super-chennai-logo-final-header.png"
                alt="Super Chennai Office Building Exterior"
                className=" mx-auto max-w-lg"
              />
            </div>

            <div className="space-y-1">
              <p className="text-gray-700">
                8th Floor, 8E #526 Century Plaza, Anna Salai,
              </p>
              <p className="text-gray-700">
                Teynampet, Chennai 600035, Tamil Nadu.
              </p>
            </div>

            <div className="flex justify-center items-center gap-3">
              <Mail className="text-primary" />
              <a
                href="mailto:hello@superchennai.com"
                className="text-blue-600 hover:underline"
              >
                hello@superchennai.com
              </a>
            </div>

            <div className="flex justify-center items-center gap-3">
              <MapPin className="text-primary" />
              <a
                href="https://www.google.com/maps?q=Century+Plaza+Anna+Salai+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                View on Google Maps
              </a>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
