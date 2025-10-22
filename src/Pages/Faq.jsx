import { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/Css/Eventstyle.css";
import "../assets/Css/faq.css";
import Search from "../Components/Search";
import { Helmet } from "react-helmet-async";
import { Heading1 } from "lucide-react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState(0); // First one open by default

  const toggleIndex = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is Super Chennai?",
      answer:
        "Super Chennai is a CREDAI initiative that positions Chennai as a global city—a hub of technology, talent, culture, sports, and innovation—while making it an even better place to live, work, and thrive.",
    },
    {
      question: "What are the key objectives of Super Chennai?",
      answer: (
        <>
          <strong>Super Chennai is focused on:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Rebranding Chennai as a future-ready global city.</li>
            <li>
              Showcasing its strengths in SaaS, manufacturing, and healthcare.
            </li>
            <li>
              Celebrating its vibrant culture, music, and entertainment scene.
            </li>
            <li>
              Highlighting its sports legacy across cricket, chess, racing, and
              football.
            </li>
            <li>Encouraging innovation and startups to thrive in the city.</li>
            <li>
              Promoting safety and inclusivity, especially as one of India’s
              safest cities for women.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Who is behind the Super Chennai initiative?",
      answer:
        "Super Chennai is powered by CREDAI, along with key stakeholders from business, sports, arts, and civic communities, working together to elevate Chennai’s global standing.",
    },
    {
      question: "Can individuals join the Super Chennai movement?",
      answer:
        "Absolutely! Super Chennai is for everyone. Whether you’re a student, entrepreneur, artist, or someone passionate about Chennai, you can volunteer, contribute, and be a part of this movement.",
    },
    {
      question: "How can one volunteer for Super Chennai?",
      answer:
        "You can sign up as a volunteer through official platforms, participate in events, awareness campaigns, and digital promotions, and use your skills to drive the movement forward.",
    },
    {
      question: "What makes Chennai a future-ready global city?",
      answer: (
        <>
          <strong>Chennai is a leader in multiple sectors:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>India’s SaaS capital, home to global tech giants.</li>
            <li>Asia’s Detroit, a major automobile and manufacturing hub.</li>
            <li>
              A global medical center, leading in healthcare and research.{" "}
            </li>
            <li>
              A thriving innovation hotspot, supporting startups and new-age
              businesses.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "Is Super Chennai only about business and technology?",
      answer: (
        <>
          <strong>Not at all! Super Chennai is also about:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              A vibrant arts and entertainment scene (movies, music, theatre).
            </li>
            <li>A dynamic sports culture (CSK, chess, Formula 4, football).</li>
            <li>
              A cosmopolitan food scene (sushi, tacos, Korean cafés, biryanis).
            </li>
            <li>A city that’s safe, inclusive, and welcoming.</li>
          </ul>
        </>
      ),
    },
    {
      question: "How does Super Chennai plan to boost tourism?",
      answer: (
        <>
          <strong>
            Super Chennai highlights Chennai as a vibrant, cosmopolitan city
            with:
          </strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>
              Global music and arts, from indie gigs to international concerts.
            </li>
            <li>
              A world-class culinary scene, offering sushi, tacos, and
              experimental fine dining.
            </li>
            <li>
              A buzzing nightlife, with rooftop lounges, craft breweries, and
              live performances.
            </li>
            <li>
              A thriving fashion and shopping scene, from designer boutiques to
              indie pop-ups.
            </li>
            <li>
              A cultural melting pot, where global festivals, art expos, and
              creative hubs flourish.
            </li>
          </ul>
        </>
      ),
    },
    {
      question: "What role does sports play in Super Chennai?",
      answer: (
        <>
          Chennai is a sports city at heart—home to CSK, chess grandmasters,
          Formula 4 racers, and football stars. Super Chennai champions
          Chennai’s rich sporting legacy while fostering new talent.
        </>
      ),
    },
    {
      question: "How is Chennai ensuring safety and inclusivity?",
      answer: (
        <>
          <strong>
            Chennai is recognized as one of India’s safest cities for women,
            promoting:
          </strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Safer public spaces.</li>
            <li>Workplace and industry inclusivity.</li>
            <li>Community-led initiatives for security and awareness.</li>
          </ul>
        </>
      ),
    },
    {
      question: "How does Super Chennai support startups and entrepreneurs?",
      answer: (
        <>
          By positioning Chennai as a startup-friendly city, encouraging
          investment, innovation hubs, and global partnerships in technology,
          healthcare, and sustainability.
        </>
      ),
    },
    {
      question: "What makes Chennai’s culture stand out?",
      answer: (
        <>
          It’s a city where tradition meets modernity, from hip-hop to Carnatic
          music, indie films to blockbusters, and high fashion to heritage
          weaves.
        </>
      ),
    },
    {
      question: "How is Super Chennai improving infrastructure?",
      answer: (
        <>
          <strong>Super Chennai advocates for:</strong>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Better roads and public transport.</li>
            <li>Smart city solutions for digital connectivity.</li>
            <li>More green spaces and sustainable urban planning.</li>
          </ul>
        </>
      ),
    },
    {
      question: "How is Super Chennai improving infrastructure?",
      answer: (
        <>
          Corporates, startups, and entrepreneurs can partner with fund, and
          promote Chennai’s strengths to attract more investments and top
          talent.
        </>
      ),
    },
    {
      question: "Is Super Chennai connected to the government?",
      answer: (
        <>
          Super Chennai is an industry-led initiative that aligns with the
          government’s vision to enhance Chennai’s growth and global reach.
        </>
      ),
    },
    {
      question: "How can I stay updated on Super Chennai?",
      answer: (
        <>
          Follow Super Chennai’s official social media handles and website for
          the latest updates, events, and opportunities to participate.
        </>
      ),
    },
    {
      question:
        "How can I contribute to spreading the word about Super Chennai?",
      answer: (
        <>
          <ul className="list-disc list-inside space-y-1 mt-2">
            <li>Share updates and stories on social media.</li>
            <li>Attend Super Chennai events and initiatives.</li>
            <li>Support local businesses, artists, and entrepreneurs.</li>
            <li>Encourage others to join and celebrate Chennai’s growth.</li>
          </ul>
        </>
      ),
    },
    {
      question:
        "Is there an official website or social media for Super Chennai?",
      answer: (
        <>
          Yes! Stay tuned for the official website and social media launch,
          where you can track updates, sign up to volunteer, and engage with the
          movement.
        </>
      ),
    },
    {
      question: "What’s the ultimate goal of Super Chennai?",
      answer: (
        <>
          To make Chennai a top global destination for business, culture, and
          lifestyle, while ensuring it remains a city that inspires, excites,
          and welcomes all.
        </>
      ),
    },
    {
      question: "How can I be a part of Super Chennai today?",
      answer: (
        <>
          Simple—embrace, celebrate, and promote the city in your own way!
          Whether through your work, art, community efforts, or digital
          presence, Super Chennai is what we make of it.
        </>
      ),
    },
  ];

  return (
    <>
      <Helmet>
        <title>FAQ Page</title>
        <meta name="description" content="FAQ Description" />
      </Helmet>
      <section className="accaodomationBannerSection">
        <div>
          <img src="/images/faq-banner.jpg" alt="faqs" />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h3>
              FAQ<small>s</small>
            </h3>
            <div className="breadCrum">
              <Link to="/">Home</Link> -{" "}
              <Link to="/visit/events-in-chennai">
                FAQ<small>s</small>
              </Link>
            </div>
          </div>
        </div>
        <div className="notHomePageSearch">
          <Search />
        </div>
      </section>

      <section className="EventsListSec SecPadblock12">
        <div className="container max-w-7xl mx-auto">
          <div className="Eventitlesec mb-[50px] text-center">
            <h1 className="text-[#a44294]">
              FAQ<small>s</small>
            </h1>
            <p>
              Learn everything about Super Chennai and how it's shaping the
              city's future.
            </p>
          </div>

          <div className="mx-auto p-4 faqIn">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className={`border-b border-gray-300 transition-all duration-300 overflow-hidden ${
                  activeIndex === index ? "bg-gray-50 active" : ""
                }`}
              >
                <button
                  onClick={() => toggleIndex(index)}
                  className="flex justify-between items-center w-full py-4 text-left font-semibold text-gray-800 focus:outline-none"
                  aria-expanded={activeIndex === index}
                >
                  <h4 className="faqTitle">{faq.question}</h4>
                  {/* <span
                    className={`transform plus transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45 text-[#a44294]" : "rotate-0"
                    }`}
                  >
                    +
                  </span> */}
                  <span
                    className={`plus transition-colors duration-300 text-[#a44294]`}
                  >
                    {activeIndex === index ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`transition-max-height answer duration-500 ease-in-out ${
                    activeIndex === index ? "max-h-screen p-4" : "max-h-0 p-0"
                  }`}
                >
                  <div className="text-gray-600">{faq.answer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
