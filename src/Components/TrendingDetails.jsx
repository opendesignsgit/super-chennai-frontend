import { useEffect, useState } from "react";
import { useLocation, useParams, useNavigate, Link } from "react-router-dom";
import { panesContent } from "../../src/Pages/EventData";
import { Helmet } from "react-helmet-async";

export default function TrendingDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();

  const [event, setEvent] = useState(null);

  // useEffect(() => {
  //   if (location.state) {
  //     setEvent(location.state);
  //   } else {
  //     const found = panesContent.find((e) => e.slug === Number(slug));
  //     if (found) {
  //       setEvent(found);
  //     } else {
  //       navigate("/events", { replace: true });
  //     }
  //   }
  // }, [slug, location.state, navigate]);

  useEffect(() => {
  const found = panesContent.find(
    (e) => e.slug === slug
  );

  if (found) {
    setEvent(found);
  } else {
    navigate("/chennai-events", { replace: true });
  }
}, [slug, navigate]);


  if (!event) return null;



  const glowgaradern = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trending chennai Glow Gareden",
          item: "https://www.superchennai.com/trending-chennai/glow-garden-mahabalipuram-chennai",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/glow-garden-mahabalipuram-chennai",
      },
      headline: "Glow Garden",
      description:
        "Glow Garden Mahabalipuram showcases colourful glow setups, themed gardens, kids’ activities, and charming night views that make it a great place to explore.",
      image:
        "https://www.superchennai.com/images/trendingChennai/banner-big-1-source.jpg.jpeg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-02-06",
    },
  ];

  const MKBBus = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Trending chennai MKB Nagar",
          item: "https://www.superchennai.com/trending-chennai/mkb-nagar-bus-depot-upgrade-chennai",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/mkb-nagar-bus-depot-upgrade-chennai",
      },
      headline: "MKB Nagar Bus Depot",
      description:
        "MKB Nagar bus depot gets a modern upgrade with tree-style roofing and electric bus facilities under North Chennai development. Now trending Chennai transport news.",
      image:
        "https://www.superchennai.com/images/trendingChennai/bustop-k.jpeg",
      author: {
        "@type": "Person",
        name: "Super CHennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-02-01",
    },
  ];

  const brodwaybust = [
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Super Chennai",
    "item": "https://www.superchennai.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Boardway Bust stand",
    "item": "https://www.superchennai.com/trending-chennai/broadway-bus-stand-redevelopment"  
  }]
},
{
  "@context": "https://schema.org",
  "@type": "NewsArticle",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.superchennai.com/trending-chennai/broadway-bus-stand-redevelopment"
  },
  "headline": "Boardway Bust stand",
  "description": "Broadway Bus Stand Chennai undergoes ₹822 crore redevelopment into a modern multi-modal hub with parking, retail, and metro connectivity. Now trending Chennai",
  "image": "https://www.superchennai.com/images/trendingChennai/brodway-banner.jpeg",  
  "author": {
    "@type": "Person",
    "name": "Super Chennai"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "",
    "logo": {
      "@type": "ImageObject",
      "url": ""
    }
  },
  "datePublished": "2026-02-02"
}



  ];

  const korukupat = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Korukkupet Bridge",
          item: "https://www.superchennai.com/trending-chennai/korukkupet-rail-overbridge-chennai",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/korukkupet-rail-overbridge-chennai",
      },
      headline: "Korukkpet Bridge",
      description:
        "The new Korukkupet bridge in North Chennai replaces Level Crossing 2B to ease traffic congestion. A ₹96 crore infrastructure project now trending in Chennai.",
      image:
        "https://www.superchennai.com/images/trendingChennai/madhya-kailash-flyover-iiner.jpeg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-02-12",
    },
  ];

  const madhiyakailash = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Madhya Kailash",
          item: "https://www.superchennai.com/trending-chennai/madhya-kailash-l-shaped-flyover-chennai",
        },
      ],
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Madhya Kailash",
          item: "https://www.superchennai.com/trending-chennai/madhya-kailash-l-shaped-flyover-chennai",
        },
      ],
    },
  ];


  const retaeri = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Retteri Lake park",
          item: "https://www.superchennai.com/trending-chennai/retteri-lake-park-chennai",
        },
      ],
    },

    {
      "@context": "https://schema.org",
      "@type": "NewsArticle",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/retteri-lake-park-chennai",
      },
      headline: "Retteri Lake park",
      description:
        "Kolathur welcomes Retteri Lake Park with landscaped spaces, walking tracks, and vibrant kids zones, quickly becoming a Trending Chennai family attraction.",
      image:
        "https://www.superchennai.com/trending-chennai/retteri-lake-park-chennai",
      author: {
        "@type": "Person",
        name: "Super chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-02-03",
    },
  ];

  const fintechSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/fintech-city-nandambakkam-2026",
      },
      headline: "FinTech City at Nandambakkam Races Toward Completion",
      description:
        "Trending Chennai update: FinTech City Nandambakkam is nearing completion, evolving into a modern digital hub for global fintech firms and startups.",
      image:
        "https://www.superchennai.com/images/trendingChennai/inner-page-fintech.jpg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-03-02",
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Fintech City",
          item: "https://www.superchennai.com/trending-chennai/fintech-city-nandambakkam-2026",
        },
      ],
    },
  ];

  const globalTech = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/global-sports-city-semmencherry-2026",
      },
      headline: "Global Sports City Foundations Laid at Semmencherri",
      description:
        "The Global Sports City in Semmencherry is Trending Chennai news, building a modern sports hub with upgraded facilities for athletes across Tamil Nadu.",
      image:
        "https://www.superchennai.com/images/trendingChennai/inner-page-globalsports.jpg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-03-02",
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Global Sports City",
          item: "https://www.superchennai.com/trending-chennai/global-sports-city-semmencherry-2026",
        },
      ],
    },
  ];

  const terminusbusKilambakkam = [
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Kilambakkam bus treminus",
          item: "https://www.superchennai.com/trending-chennai/kilambakkam-modern-bus-terminus-2026",
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/kilambakkam-modern-bus-terminus-2026",
      },
      headline: "Kilambakkam Terminus Sets a New Standard",
      description:
        "The Kilambakkam bus terminus in Kilambakkam offers modern, airport-style interiors and stands out in Trending Chennai as a big upgrade to the city’s travel comfort.",
      image:
        "https://www.superchennai.com/images/trendingChennai/inner-page-kilambakkam-terminus.jpg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-03-02",
    },
  ];

  const tamilcultremusium = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/tamil-culture-museum-mamallapuram-2026",
      },
      headline: "Tamil Culture Museum Moves One Step Closer in Mamallapuram",
      description:
        "Trending Chennai update: A new Tamil culture museum development begins in Mamallapuram, featuring interactive exhibits, modern design, and a ₹93.5 crore investment.",
      image:
        "https://www.superchennai.com/images/trendingChennai/inner-page-img2.png",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-03-02",
    },
  {
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Super Chennai",
    "item": "https://www.superchennai.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Tamil Culture Museum",
    "item": "https://www.superchennai.com/trending-chennai/tamil-culture-museum-mamallapuram-2026"  
  }]
}

  ];


  const vadapalainschemaMEtro =[
    {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.superchennai.com/trending-chennai/vadapalani-skywalk-metro-corridor-2026"
  },
  "headline": "Pedestrian Skywalk Progress at Vadapalani Metro Corridor",
  "description": "The Vadapalani skywalk near Vadapalani is progressing steadily, improving metro corridor access with safer movement. Trending Chennai update included.",
  "image": "https://www.superchennai.com/images/trendingChennai/inner-page-vadapalanimetro-img.jpg",  
  "author": {
    "@type": "Person",
    "name": "Super Chennai"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "",
    "logo": {
      "@type": "ImageObject",
      "url": ""
    }
  },
  "datePublished": "2026-03-02"
},
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Super Chennai",
    "item": "https://www.superchennai.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Vadapalani Skywalk",
    "item": "https://www.superchennai.com/trending-chennai/vadapalani-skywalk-metro-corridor-2026"  
  }]
}


  ]

  const poonamalaschema = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id":
          "https://www.superchennai.com/trending-chennai/poonamallee-depot-chennai-metro-phase-2-2026",
      },
      headline: "Poonamallee Depot Completed and Officially Handed Over",
      description:
        "The Chennai metro depot under Phase 2 is nearing completion with new facilities for driverless trains and improved connectivity. Trending Chennai update included.",
      image:
        "https://www.superchennai.com/images/trendingChennai/inner-page-%20Poonamallee%20Depo.jpg",
      author: {
        "@type": "Person",
        name: "Super Chennai",
      },
      publisher: {
        "@type": "Organization",
        name: "",
        logo: {
          "@type": "ImageObject",
          url: "",
        },
      },
      datePublished: "2026-03-02",
    },
    {
      "@context": "https://schema.org/",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Super Chennai",
          item: "https://www.superchennai.com/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Poonamallee Depot",
          item: "https://www.superchennai.com/trending-chennai/poonamallee-depot-chennai-metro-phase-2-2026",
        },
      ],
    },
  ];

  const MUiscialTowerSchem =[
    {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.superchennai.com/trending-chennai/musical-tower-kalaignar-centenary-park-2026"
  },
  "headline": "Chennai Unveils Its Own Iconic Super-Tree Tower",
  "description": "The musical tower at Kalaignar Centenary Park is emerging as a standout landmark with its viewing deck and modern design, gaining attention across Trending Chennai.",
  "image": "https://www.superchennai.com/images/trendingChennai/inner-page-super-tree-tower.jpg",  
  "author": {
    "@type": "Person",
    "name": "Super Chennai"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "",
    "logo": {
      "@type": "ImageObject",
      "url": ""
    }
  },
  "datePublished": "2026-03-02"
},
{
  "@context": "https://schema.org/", 
  "@type": "BreadcrumbList", 
  "itemListElement": [{
    "@type": "ListItem", 
    "position": 1, 
    "name": "Super Chennai",
    "item": "https://www.superchennai.com/"  
  },{
    "@type": "ListItem", 
    "position": 2, 
    "name": "Musical tower",
    "item": "https://www.superchennai.com/trending-chennai/musical-tower-kalaignar-centenary-park-2026"  
  }]
}



  ]

  const portmaduravayal=[
   {
  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.superchennai.com/trending-chennai/port-maduravoyal-expressway-chennai-2026"
  },
  "headline": "A New Chapter Along the Cooum: Port–Maduravoyal Expressway Rising",
  "description": "The Port Maduravoyal expressway from Chennai Port to Maduravoyal is moving ahead fast, easing traffic and aiding cargo flow in Trending Chennai updates.",
  "image": "https://www.superchennai.com/images/trendingChennai/inner-page-chennai;s-nxt.jpg",  
  "author": {
    "@type": "Person",
    "name": "Super Chennai"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "",
    "logo": {
      "@type": "ImageObject",
      "url": ""
    }
  },
  "datePublished": "2026-03-02"
}




  ]




  return (
    <>
      <Helmet>
        <title>{event.meta?.title || event.name}</title>

        <meta
          name="description"
          content={event.meta?.desc || event.trendingDetails?.slice(0, 150)}
        />

        {/* Open Graph */}
        <meta property="og:title" content={event.meta?.title || event.name} />
        <meta property="og:description" content={event.meta?.desc || ""} />
        <meta
          property="og:image"
          content={`${typeof window !== "undefined" ? window.location.origin : ""}${event.image}`}
        />
        <meta property="og:type" content="article" />

        {/* Canonical */}
        <link
          rel="canonical"
          href={`${typeof window !== "undefined" ? window.location.origin : ""}/trending-chennai/${event.slug || `/${event.slug}`}`}
        />

        {slug === "glow-garden-mahabalipuram-chennai" && (
          <script type="application/ld+json">
            {JSON.stringify(glowgaradern)}
          </script>
        )}

        {slug === "mkb-nagar-bus-depot-upgrade-chennai" && (
          <script type="application/ld+json">{JSON.stringify(MKBBus)}</script>
        )}

        {slug === "broadway-bus-stand-redevelopment" && (
          <script type="application/ld+json">
            {JSON.stringify(brodwaybust)}
          </script>
        )}

        {slug === "korukkupet-rail-overbridge-chennai" && (
          <script type="application/ld+json">
            {JSON.stringify(korukupat)}
          </script>
        )}

        {slug === "madhya-kailash-l-shaped-flyover-chennai" && (
          <script type="application/ld+json">
            {JSON.stringify(madhiyakailash)}
          </script>
        )}

        {slug === "madhya-kailash-l-shaped-flyover-chennai" && (
          <script type="application/ld+json">
            {JSON.stringify(madhiyakailash)}
          </script>
        )}

        {slug === "retteri-lake-park-chennai" && (
          <script type="application/ld+json">
            {JSON.stringify(retaeri)}
          </script>
        )}


         {slug === "fintech-city-nandambakkam-2026" && (
          <script type="application/ld+json">
            {JSON.stringify(fintechSchema)}
          </script>
        )}

        {slug === "global-sports-city-semmencherry-2026" && (
          <script type="application/id+json">
            {JSON.stringify(globalTech)}
          </script>
        )}

        {slug === "kilambakkam-modern-bus-terminus-2026" && (
          <script type="application/id+json">
            {JSON.stringify(terminusbusKilambakkam)}
          </script>
        )}

        {slug === "tamil-culture-museum-mamallapuram-2026" && (
          <script type="application/id+json">
            {JSON.stringify(tamilcultremusium)}
          </script>
        )}


        {slug ==="vadapalani-skywalk-metro-corridor-2026" && (
          <script type="application/id+json">
            {JSON.stringify(vadapalainschemaMEtro)}
          </script>
        )}
      {slug === "poonamallee-depot-chennai-metro-phase-2-2026" && (
        <script type="application/id+json">
          {JSON.stringify(poonamalaschema)}

        </script>
      )}
      {slug === "musical-tower-kalaignar-centenary-park-2026" && (
        <script type="application/id+json">
          {JSON.stringify(MUiscialTowerSchem)}
        </script>
      )}

      {slug === "port-maduravoyal-expressway-chennai-2026"&& (
        <script type="application/id+json">
          {JSON.stringify(portmaduravayal)}
        </script>
      )}

      

      </Helmet>

      {/* Banner Section */}

      <section className="accaodomationBannerSection">
        <div>
          <img
            src="/images/trendingChennai/trending-chennai.jpg"
            alt="Banner"
          />
        </div>
        <div className="accodoamationBannerContainer">
          <div className="accodoamationBannerText">
            <h1>Trending Chennai</h1>
            <div className="breadCrum"></div>
          </div>
        </div>
      </section>

      <section className="EventsBanSec SecPadblock12">
        <div className="container max-w-7xl mx-auto">
          <div className="EventContBox flex flex-wrap">
            <div className="EventLeft">
              <h2>{event.name}</h2>
              <div className="EventBanImg">
                <img src={event.image} alt={event.name} />
              </div>
              <div className="ebanimgbtn flex justify-between items-center mb-[5vh]">
                <div className="ebbmgiL flex gap-2">
                  <h5>{event.TrendingCalendarCategory}</h5>
                </div>
              </div>
              <div className="EventContBox mb-[5vh]">
                <h3>About The Trending</h3>
                <div
                  className="event-description"
                  dangerouslySetInnerHTML={{ __html: event.trendingDetails }}
                />
              </div>
            </div>

            <div className="EventRight">
              <div className="evderibox">
                <div className="evderListbox">
                  <div className="evderViewbox">
                    {event.TrendingCalendarMonth && (
                      <InfoRow
                        icon="/images/events/calendar.png"
                        label={event.TrendingCalendarMonth}
                      />
                    )}
                    {event.TrendingCalendarTime && (
                      <InfoRow
                        icon="/images/events/time.png"
                        label={event.TrendingCalendarTime}
                      />
                    )}
                    {event.duration && (
                      <InfoRow
                        icon="/images/events/duration.png"
                        label={event.duration}
                      />
                    )}
                    {event.ageRestriction && (
                      <InfoRow
                        icon="/images/events/age_limit.png"
                        label={event.ageRestriction}
                      />
                    )}
                    {event.language && (
                      <InfoRow
                        icon="/images/events/language.png"
                        label={event.language}
                      />
                    )}
                    {event.genre && (
                      <InfoRow
                        icon="/images/events/genre.png"
                        label={event.genre}
                      />
                    )}
                    {event.venue && (
                      <InfoRow
                        icon="/images/events/location.png"
                        label={event.venue}
                      />
                    )}
                  </div>
                </div>

                {event.TrendingLink && (
                  <div className="flex justify-center pb-[30px]">
                    <a href={event.TrendingLink || "#"}>
                      <button
                        className="cursor-pointer"
                        style={{
                          background: "#a44294",
                          marginTop: "15px",
                          color: "white",
                          padding: "5px 14px",
                          borderRadius: "5px",
                          fontFamily: "Poppins",
                          fontWeight: 500,
                          width: "auto",
                          marginTop: "0",
                        }}
                      >
                        Click to View
                      </button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function InfoRow({ icon, label }) {
  return (
    <div className="evderlinks flex items-center mb-2">
      <div className="iconsssec flex items-center w-6 h-6 mr-2">
        <img src={icon} alt="icon" className="w-full h-full object-contain" />
      </div>
      <p>{label}</p>
    </div>
  );
}
