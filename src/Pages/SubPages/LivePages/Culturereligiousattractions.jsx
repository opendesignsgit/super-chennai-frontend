import React, { useState, useRef, useEffect } from "react";
import "../../../assets/Css/CostOfLiving.css";
import Search from "../../../Components/Search";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";
import { motion, AnimatePresence } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import LiveSlider from "./LiveSlider";

const imageSections2 = [
  {
    templesAndReligiousSites: [
      {
        points: [
          {
            title: "Temples & Religious Sites",
            note2:
              "Home to some of South India’s most revered temples, Chennai reflects deep-rooted Hindu traditions.",
            para: [
              <> Kapaleeshwarar Temple, Mylapore</>,
              <> Parthasarathy Temple, Triplicane</>,
              <> Ashtalakshmi Temple, Besant Nagar</>,
              <> Marundeeswarar Temple, Thiruvanmiyur</>,
            ],
            imgs: "/images/Live-Images/SubPages/Icons/Temples-Religious-Sites.svg",
          },
        ],
      },
    ],
  },
  {
    churchesMosquesAndOtherFaiths: [
      {
        points: [
          {
            title: "Churches, Mosques & Other Faiths",
            note2:
              "Chennai embraces religious diversity with historic churches, mosques, and synagogues:",
            para: [
              <> Santhome Basilica – built over the tomb of St. Thomas</>,
              <> St. George’s Cathedral – colonial-era landmark</>,
              <> Thousand Lights Mosque – one of India’s largest</>,
              <>
                {" "}
                Wallajah Mosque and Chennai’s Jewish Synagogue also reflect the
                city's multicultural roots.
              </>,
            ],
            imgs: "/images/Live-Images/SubPages/Icons/churches-mosques-other-faiths.svg",
          },
        ],
      },
    ],
  },
  {
    festivalsInChennai: [
      {
        points: [
          {
            title: " Festivals in Chennai",
            note2:
              "Chennai lights up during festivals, blending tradition and community joy.",
            para: [
              <>
                {" "}
                Pongal – harvest festival celebrated with kolams and sugarcane
              </>,
              <> Navaratri & Dussehra – known for Golu displays</>,
              <>
                {" "}
                Christmas – beautifully celebrated in areas like Santhome and
                Egmore
              </>,
              <> Ramzan & Bakrid – observed widely across the city</>,
            ],
            imgs: "/images/Live-Images/SubPages/Icons/festivals-in-chennai.svg",
          },
        ],
      },
    ],
  },
  {
    culturalArtsAndPerformances: [
      {
        points: [
          {
            title: "Cultural Arts & Performances",
            note2:
              "Chennai is the cultural capital of South India, especially known for:",
            para: [
              <> Carnatic music concerts</>,
              <> Bharatanatyam dance performances</>,
              <>
                {" "}
                The Chennai December Music Season – a month-long celebration of
                classical arts
              </>,
              <>
                {" "}
                Sabhas like Narada Gana Sabha and Music Academy are cultural
                hotspots.
              </>,
            ],
            imgs: "/images/Live-Images/SubPages/Icons/Cultural-Arts-Performances.svg",
          },
        ],
      },
    ],
  },
  {
    culturalArtsAndPerformances: [
      {
        points: [
          {
            title: "Traditions & Rituals",
            note2:
              "   From temple rituals to wedding customs, Chennai continues to preserve age-old traditions. You'll see daily life intertwined with  spirituality—like kolams at doorsteps, pujas at dawn, and Ayudha Pooja celebrations in workplaces and homes.",
            imgs: "/images/Live-Images/SubPages/Icons/Temples-Religious-Sites.svg",
          },
        ],
      },
    ],
  },
];

const images = [
  {
    src: "/images/Live-Images/Cost-of-living.jpg",
    title: "Cost-of-Living",
    link: "/live/cost-of-living-in-chennai",
  },
  {
    src: "/images/Live-Images/Residency.jpg",
    title: "Residency",
    link: "/live/residential-properties-in-chennai",
  },
  {
    src: "/images/Live-Images/Employment.jpg",
    title: "Employment",
    link: "/live/employment-in-chennai",
  },
  {
    src: "/images/Live-Images/chennaiLifeEssential4.png",
    title: "Transportation",
    link: "/live/transportation-in-chennai",
  },
  {
    src: "/images/Live-Images/Healthcare-banner.jpg",
    title: "Healthcare",
    link: "/live/healthcare-in-chennai",
  },
  {
    src: "/images/Live-Images/Culture-Religious-Attractions.jpg",
    title: "Culture Religious",
    link: "/live/worship-in-chennai",
  },
  {
    src: "/images/Live-Images/Recreation.jpg",
    title: "Recreation",
    link: "/visit/things-to-do-in-chennai",
  },
  {
    src: "/images/Live-Images/Neighbourhood.jpg",
    title: "Neighbourhood",
    link: "/live/places-near-chennai",
  },
  {
    src: "/images/Live-Images/Quality-of-Life.jpg",
    title: "Quality of Life",
    link: "/live/quality-of-life-in-chennai",
  },
  {
    src: "/images/Live-Images/Future-Growth-&-Development.jpg",
    title: "Future Growth & Development",
    link: "/live/infrastructure-development-in-chennai",
  },
  {
    src: "/images/Live-Images/Educational-Institutions.jpg",
    title: "Educational Insitiutions",
    link: "/live/educational-institutions-in-chennai",
  },
];

const CentralChennaiImage = [
  {
    sectionTitle: "Central Chennai",
    sectionDesc:
      "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
    image: "/images/Live-Images/SubPages/Central Chennai.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: "Classic Italian Flavors",
            para: [
              "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Classic-Italian-Flavors.svg",
            link: "/classicItalianFlavors",
          },
        ],
      },
      {
        points: [
          {
            title: "Regional Italian Delights",
            para: [
              "Experience an amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in chennai at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Regional-Italian-Delights.svg",
            link: "/regionalItalianDelights",
          },
        ],
      },
    ],
  },
];

const CentralChennai = [
  {
    category: "Temples",
    places: [
      {
        name: "Kapaleeshwarar Temple, Mylapore",
        desc: "A landmark Dravidian-style Shiva temple, over 300 years old, steeped in local folklore.",
        locations: [
          {
            name: "Mylapore",
            link: "https://maps.app.goo.gl/hoVrezDASCtCzJKP6",
          },
        ],
      },
      {
        name: "Parthasarathy Temple, Triplicane",
        desc: "A 6th-century temple dedicated to Lord Krishna (as Parthasarathy), maintained by the Vaishnavite tradition.",
        locations: [
          {
            name: "Triplicane",
            link: "https://maps.app.goo.gl/p2pmDcWGJ9XJm4gs9",
          },
        ],
      },
      {
        name: "Vadapalani Murugan Temple",
        desc: "Popular for devotees seeking blessings for education, marriage, and career; very active temple.",
        locations: [
          {
            name: "Vadapalani",
            link: "https://maps.app.goo.gl/Zu8TQzoRxYhMFmnH9",
          },
        ],
      },
      {
        name: "Ashtalakshmi Temple, Besant Nagar",
        desc: "A beachside temple dedicated to the eight forms of Goddess Lakshmi.",
        locations: [
          {
            name: "Besant Nagar",
            link: "https://maps.app.goo.gl/im471WuH6zwn2RvDA",
          },
        ],
      },
      {
        name: "Sri Velleeswarar Temple, Mylapore",
        desc: "Ancient Shiva temple believed to have connections with the planet Venus (Shukra).",
        locations: [
          {
            name: "TSV Koil street, Mylapore",
            link: "https://maps.app.goo.gl/bmJhvrpoZzV5SuL66",
          },
        ],
      },
    ],
  },
  {
    category: "Mosques",
    places: [
      {
        name: "Wallajah Mosque (Triplicane Big Mosque)",
        desc: "Built in 1795 by the Nawab of Arcot; Indo-Islamic architecture; landmark mosque in Triplicane.",
        locations: [
          {
            name: "Triplicane",
            link: "https://maps.app.goo.gl/kxYaqcC12XE4862z7",
          },
        ],
      },
      {
        name: "Thousand Lights Shia Mosque, Anna Salai",
        desc: "One of the largest mosques in India; named after the thousand oil lamps once lit inside.",
        locations: [
          {
            name: "Thousand Lights",
            link: "https://maps.app.goo.gl/W35K2cZBkUTNFAKs7",
          },
        ],
      },
      {
        name: "Makkah Masjid, Anna Salai",
        desc: "Prominent Sunni mosque; hosts large Friday congregations.",
        locations: [
          {
            name: "Anna Salai",
            link: "https://maps.app.goo.gl/o2ugo4ewWf1iywGQA",
          },
        ],
      },
      {
        name: "Masjid e Mamoor, Angappa Naicken Street, Parrys",
        desc: "Historic mosque in the heart of commercial George Town.",
        locations: [
          {
            name: "George Town",
            link: "https://maps.app.goo.gl/P5oZg1AWphBEEcVy8",
          },
        ],
      },
    ],
  },
  {
    category: "Churches",
    places: [
      {
        name: "Santhome Basilica, Santhome",
        desc: "A major pilgrimage site; built over the tomb of St. Thomas the Apostle. Neo-Gothic architecture, near Marina Beach.",
        locations: [
          {
            name: "Mylapore",
            link: "https://maps.app.goo.gl/b18eYMUa1T9uqp8X7",
          },
        ],
      },
      {
        name: "St. George's Cathedral, Cathedral Road",
        desc: "Anglican cathedral of the Church of South India (CSI); colonial-era landmark.",
        locations: [
          {
            name: "Gopalapuram",
            link: "https://maps.app.goo.gl/9DmnqVZyeHABGmTHA",
          },
        ],
      },
      {
        name: "St. Mary’s Church, Fort St. George",
        desc: "The oldest Anglican church east of the Suez (built in 1680); inside Fort Museum campus.",
        locations: [
          {
            name: "Fort St. George",
            link: "https://maps.app.goo.gl/QS8wiguJAg4h39ze8",
          },
        ],
      },
      {
        name: "Sacred Heart Shrine, Egmore",
        desc: "Roman Catholic church known for community outreach and serene ambience.",
        locations: [
          {
            name: "Egmore",
            link: "https://maps.app.goo.gl/k6TN3DFytic1R6vh9",
          },
        ],
      },
    ],
  },
  {
    category: "Jain Temples",
    places: [
      {
        name: "Sri Adinath Jain Temple",
        desc: "Dedicated to Lord Adinath, the first Tirthankara. A peaceful temple nestled in a busy shopping district, offering daily prayers and rituals. Hosts community events and Paryushan celebrations.",
        locations: [
          {
            name: "Saidapet",
            link: "https://maps.app.goo.gl/hNgrpYEZnoXuFqtk9",
          },
          {
            name: "Perambur",
            link: "https://maps.app.goo.gl/vaKnqnn7bVhFuD7M7",
          },
        ],
      },
      {
        name: "Sree Shantinath Jain Temple",
        desc: "A serene Jain temple dedicated to Lord Shantinath, serving as a hub for religious and cultural activities of the Jain community.",
        locations: [
          {
            name: "Choolai",
            link: "https://maps.app.goo.gl/6BDKfcEZ8wWHGWXX6",
          },
          {
            name: "T. Nagar",
            link: "https://maps.app.goo.gl/RpVDbA7fYvUrybgC6",
          },
        ],
      },
      {
        name: "Sri Vimalnath Swami Jain Temple, Mylapore",
        desc: "Description not provided. Please update this section with details about the temple.",
        locations: [
          {
            name: "Mylapore",
            link: "", // You can add the Maps link here if available
          },
        ],
      },
      {
        name: "Sri Parshvanath Jain Temple, Kilpauk",
        desc: "A tranquil temple located in a predominantly North Indian residential area. Celebrates Mahavir Jayanti and other Jain festivals with great fervor.",
        locations: [
          {
            name: "Kilpauk",
            link: "", // Add the link if available
          },
        ],
      },
    ],
  },
  {
    category: "Buddhist & Sikh Centres",
    places: [
      {
        name: "Mahabodhi Society of India – Egmore",
        desc: "Located near the Sri Lanka Maha Bodhi Centre, it promotes Buddhist teachings and spiritual practices. It also organizes Vesak celebrations and community outreach.",
        locations: [
          {
            name: "Egmore",
            link: "https://maps.app.goo.gl/1SddXpdcF4PTkLT37",
          },
        ],
      },
      {
        name: "Gurudwara Sahib – T. Nagar",
        desc: "One of the most well-known Gurudwaras in Chennai, this is a vibrant center of Sikh worship and community service. It hosts daily prayers, langar (community meals), and special celebrations on Gurpurab and Baisakhi.",
        locations: [
          {
            name: "T. Nagar",
            link: "https://maps.app.goo.gl/7ciVD3NdcMwNFkgP7",
          },
        ],
      },
    ],
  },
];

const SouthChennaiImage = [
  {
    sectionTitle: "South Chennai",
    sectionDesc:
      "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
    image: "/images/Live-Images/SubPages/South Chennai.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: "Classic Italian Flavors",
            para: [
              "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Classic-Italian-Flavors.svg",
            link: "/classicItalianFlavors",
          },
        ],
      },
      {
        points: [
          {
            title: "Regional Italian Delights",
            para: [
              "Experience an amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in chennai at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Regional-Italian-Delights.svg",
            link: "/regionalItalianDelights",
          },
        ],
      },
    ],
  },
];

const SouthChennai = [
  {
    category: "Temples",
    categoryParaGraph: "",
    places: [
      {
        name: "Marundeeswarar Temple, Thiruvanmiyur",
        desc: "A temple devoted to Lord Shiva as the God of Medicine; popular among the ill.",
        locations: [
          {
            name: "Thiruvanmiyur",
            link: "https://maps.app.goo.gl/Jz9jKb1mfnTvKDEx6",
          },
        ],
      },
      {
        name: "Dandeeswarar Temple, Velachery",
        desc: "Historic temple tied to the legends of Yudhishthira and Dronacharya.",
        locations: [
          {
            name: "Velachery",
            link: "https://maps.app.goo.gl/ZwGWFg67bQANgyjD7",
          },
        ],
      },
      {
        name: "Sri Ramanaadheswarar Temple, Porur",
        desc: "Believed to have been worshipped by Lord Rama.",
        locations: [
          {
            name: "Porur",
            link: "https://maps.app.goo.gl/1m4g9fzhVjCx2PyW8",
          },
        ],
      },
      {
        name: "Kaaraneeswarar Temple, Saidapet",
        desc: "One of the oldest temples in Saidapet dedicated to Lord Shiva.",
        locations: [
          {
            name: "Saidapet",
            link: "https://maps.app.goo.gl/HdcghpDzn9tgX7wi8",
          },
        ],
      },
      {
        name: "Thiruneermalai Temple",
        desc: "Perched atop a hill and in the plains, this Vishnu temple is one of the 108 Divya Desams.",
        locations: [
          {
            name: "Tiruneermalai",
            link: "https://maps.app.goo.gl/f9Dzd6GvbQVogQBt6",
          },
        ],
      },
    ],
  },
  {
    category: "Mosques",
    categoryParaGraph: "",
    places: [
      {
        name: "Masjid e Noorani, Mylapore",
        desc: "Peaceful mosque, convenient for local residential communities.",
        locations: [
          {
            name: "Mylapore",
            link: "https://maps.app.goo.gl/2sGte5KUMVQnRWLX7",
          },
        ],
      },
      {
        name: "Masjid e Quba, Adyar",
        desc: "Modern, community-driven mosque near educational and tech zones.",
        locations: [
          {
            name: "Mylapore",
            link: "https://maps.app.goo.gl/pVvZHbYLqp6uuWbeA",
          },
        ],
      },
      {
        name: "Masjid e Noor, Kotturpuram",
        desc: "Active mosque, well maintained, near Anna University and IIT.",
        locations: [
          {
            name: "Kotturpuram",
            link: "https://maps.app.goo.gl/ZovBtZpkRofdCZcZ7",
          },
        ],
      },
      {
        name: "Masjid e Anwariya, Saidapet",
        desc: "Local hub of worship, popular during Ramadan and Eid.",
        locations: [
          {
            name: "Saidapet",
            link: "https://maps.app.goo.gl/tdLNopMPQoxKzH7M8",
          },
        ],
      },
    ],
  },
  {
    category: "Churches",
    categoryParaGraph: "",
    places: [
      {
        name: "Our Lady of Light Church (Luz Church), Mylapore",
        desc: "One of the oldest churches in Chennai, dating back to the Portuguese era (16th century).",
        locations: [
          {
            name: "Mylapore",
            link: "https://maps.app.goo.gl/GsfNQyExfKUhDRKu9",
          },
        ],
      },
      {
        name: "St. Antony’s Church, Mylapore",
        desc: "Very popular with locals; believed to fulfill devotees’ prayers on Tuesdays.",
        locations: [
          {
            name: "Mylapore",
            link: "https://maps.app.goo.gl/6wBpToSs9m3Q82b3A",
          },
        ],
      },
      {
        name: "Immaculate Conception Church, Adyar",
        desc: "Vibrant Catholic church known for youth activities and active parish life.",
        locations: [
          {
            name: "Adyar",
            link: "https://maps.app.goo.gl/z35y8us2ySYAK6E28",
          },
        ],
      },
      {
        name: "St. Patrick’s Church, St. Thomas Mount",
        desc: "Scenic hilltop church next to the mount where St. Thomas is believed to have been martyred.",
        locations: [
          {
            name: "Saint Thomas Mount",
            link: "https://maps.app.goo.gl/HJ5S7sADgfYiKuaGA",
          },
        ],
      },
      {
        name: "Little Mount Church, Saidapet",
        desc: "Historic shrine associated with St. Thomas, featuring a cave chapel and natural spring.",
        locations: [
          {
            name: "Saidapet",
            link: "https://maps.app.goo.gl/xfGGyjQbd4sCVXcD9",
          },
        ],
      },
    ],
  },
  {
    category: "Buddhism",
    categoryParaGraph: "",
    places: [
      {
        name: "Burmese Buddhist Temple – Pallavaram",
        desc: "A small yet culturally significant temple that serves the Burmese Buddhist community, offering traditional rituals and chanting sessions.",
        locations: [
          {
            name: "Pallavaram",
            link: "https://maps.app.goo.gl/oo3D6nBBPJHVoLHWA",
          },
        ],
      },
    ],
  },
  {
    category: "Gurudwara",
    categoryParaGraph: "",
    places: [
      {
        name: "Gurudwara Guru Nanak Darbar – Velachery",
        desc: "A newer Gurudwara catering to the growing Sikh population in South Chennai. It conducts weekly Satsangs, children’s programs, and community kitchens.",
        locations: [
          {
            name: "Velachery",
            link: "https://maps.app.goo.gl/JCSvhPBcQWhqXkHi8",
          },
        ],
      },
    ],
  },
];

const NorthChennaiImage = [
  {
    sectionTitle: "North Chennai",
    sectionDesc:
      "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
    image: "/images/Live-Images/SubPages/North Chennai.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: "Classic Italian Flavors",
            para: [
              "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Classic-Italian-Flavors.svg",
            link: "/classicItalianFlavors",
          },
        ],
      },
      {
        points: [
          {
            title: "Regional Italian Delights",
            para: [
              "Experience an amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in chennai at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Regional-Italian-Delights.svg",
            link: "/regionalItalianDelights",
          },
        ],
      },
    ],
  },
];

const NorthChennai = [
  {
    category: "Temples",
    categoryParaGraph: "",
    places: [
      {
        name: "Kaligambal Temple, Parry’s Corner",
        desc: "Historic temple where Shivaji Maharaj is believed to have prayed.",
        locations: [
          {
            name: "Mannad",
            link: "https://maps.app.goo.gl/nHfkrFKxQCjxXn7v8",
          },
        ],
      },
      {
        name: "Sri Ekambareswarar Temple, Sowcarpet",
        desc: "Ancient temple known for its detailed carvings and peaceful ambiance.",
        locations: [
          {
            name: "Park Town",
            link: "https://maps.app.goo.gl/7xx4xKc2jkSuQ4XY8",
          },
        ],
      },
      {
        name: "Sri Chenna Kesava Perumal Temple, George Town",
        desc: "Among the oldest Vishnu temples in the city.",
        locations: [
          {
            name: "George Town",
            link: "https://maps.app.goo.gl/Tzmtp2j7HHfDQLtPA",
          },
        ],
      },
    ],
  },
  {
    category: "Mosques",
    categoryParaGraph: "",
    places: [
      {
        name: "Perambur Jama Masjid, Perambur",
        desc: "Major Sunni mosque, central to the North Chennai Muslim population.",
        locations: [
          {
            name: "Perambur",
            link: "https://maps.app.goo.gl/zSBdyqQVadGgHkbo8",
          },
        ],
      },
      {
        name: "Jama Masjid, Royapuram",
        desc: "One of the oldest in the locality; large open prayer space.",
        locations: [
          {
            name: "Royapuram",
            link: "https://maps.app.goo.gl/cYWcSoA54AmgCN7Q9",
          },
        ],
      },
      {
        name: "Sirajul Millath Masjid, Tondiarpet",
        desc: "Community-centered mosque with regular social outreach.",
        locations: [
          {
            name: "Tondiarpet",
            link: "https://maps.app.goo.gl/dXrAyvGUGtH4WDjk9",
          },
        ],
      },
      {
        name: "Masjid-e-Bilal, Washermanpet",
        desc: "Serves dense urban population; Friday prayers attract large crowd.",
        locations: [
          {
            name: "Ponniammanmedu",
            link: "https://maps.app.goo.gl/UUR6z8ufMPNtFBYN6",
          },
        ],
      },
    ],
  },
  {
    category: "Churches",
    categoryParaGraph: "",
    places: [
      {
        name: "St. Peter’s and St. Paul’s Church, Royapuram",
        desc: "One of the oldest Catholic churches in North Chennai, built by the fishermen community.",
        locations: [
          {
            name: "Royapuram",
            link: "https://maps.app.goo.gl/idH74CStGNutUkF88",
          },
        ],
      },
      {
        name: "St. Sebastian’s Church, Madhavaram",
        desc: "Major pilgrimage site; draws large crowds during feast days.",
        locations: [
          {
            name: "Madhavaram",
            link: "https://maps.app.goo.gl/DTH9ciBKP7LGncf26",
          },
        ],
      },
      {
        name: "St. Joseph’s Church, Vyasarpadi",
        desc: "Historic parish church with strong community roots.",
        locations: [
          {
            name: "Vyasarpadi",
            link: "https://maps.app.goo.gl/W61UVJH5iNWmpJk99",
          },
        ],
      },
      {
        name: "Unidentified Church, Royapettah",
        desc: "Additional church reference found, possibly redundant or mislocated.",
        locations: [
          {
            name: "Royapettah",
            link: "https://maps.app.goo.gl/p9BdftdZh8RxiqfR8",
          },
        ],
      },
    ],
  },

  {
    category: "Jain Temples",
    categoryParaGraph: "",
    places: [
      {
        name: "Shri Mahaveer Swami Digambar Jain Temple, Sowcarpet",
        desc: "Located near Mint Street, this Digambar Jain temple is significant for its devotional gatherings. A spiritual hub for the North Indian Jain diaspora in Chennai.",
        locations: [
          {
            name: "Sowcarpet",
            link: "https://maps.app.goo.gl/4hzQkmrwkoQQUUji6",
          },
        ],
      },
      {
        name: "Sri Chandraprabhu Jain Naya Mandir, Mint Street, Sowcarpet",
        desc: "One of the most significant and ancient Jain temples in Chennai. Built in the early 20th century, this temple is dedicated to Chandraprabhu, the 8th Tirthankara. Known for its North Indian architectural style and rich carvings.",
        locations: [
          {
            name: "Sowcarpet",
            link: "https://maps.app.goo.gl/PVBniMhrJysycRtn8",
          },
        ],
      },
      {
        name: "Shri Jain Swetamber Terapanthi Bhawan, Sowcarpet",
        desc: "Not a temple in the traditional sense but a major Jain spiritual center. It conducts lectures, meditation, and religious activities by Jain monks and Acharyas.",
        locations: [
          {
            name: "Sowcarpet",
            link: "https://maps.app.goo.gl/BCy71UdzLnKV4SeJA",
          },
        ],
      },
      {
        name: "Unlabeled Jain Center, Chintadripet",
        desc: "Additional Jain location found, possibly a spiritual center on Anna Salai.",
        locations: [
          {
            name: "Chindatripet",
            link: "https://maps.app.goo.gl/BztTJkooAtNmiWn77",
          },
        ],
      },
    ],
  },
  {
    category: "Buddhism",
    categoryParaGraph: "",
    places: [
      {
        name: "Bhikkhu Sangha Vihara – Kolathur",
        desc: "A Theravāda Buddhist center known for meditation sessions, Sutta discussions, and Dhamma study for lay practitioners.",
        locations: [
          {
            name: "Perambur",
            link: "https://maps.app.goo.gl/pFcRzz8tcvC9Mv1v5",
          },
        ],
      },
    ],
  },
  {
    category: "Gurudwara",
    categoryParaGraph: "",
    places: [
      {
        name: "Sri Guru Nanak Sat Sangh Sabha – Sowcarpet",
        desc: "Located in the heart of the old commercial district, this Gurudwara serves the North Indian Sikh population and offers regular religious services, Punjabi language classes, and cultural programs.",
        locations: [
          {
            name: "T. Nagar",
            link: "https://maps.app.goo.gl/mas2uV5nxxfrsyNK6",
          },
        ],
      },
    ],
  },
];

const WestChennaiImage = [
  {
    sectionTitle: "West Chennai",
    sectionDesc:
      "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
    image: "/images/Live-Images/SubPages/West Chennai.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: "Classic Italian Flavors",
            para: [
              "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Classic-Italian-Flavors.svg",
            link: "/classicItalianFlavors",
          },
        ],
      },
      {
        points: [
          {
            title: "Regional Italian Delights",
            para: [
              "Experience an amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in chennai at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Regional-Italian-Delights.svg",
            link: "/regionalItalianDelights",
          },
        ],
      },
    ],
  },
];

const WestChennai = [
  {
    category: "Temples",
    categoryParaGraph: "",
    places: [
      {
        name: "Sri Vaikunda Perumal Temple, Choolaimedu",
        desc: "A serene Vishnu temple located in a bustling neighborhood.",
        locations: [
          {
            name: "Choolaimedu",
            link: "https://maps.app.goo.gl/T9w3n6Z2gzQc6Xvj6",
          },
        ],
      },
      {
        name: "Arulmigu Agatheeswarar Temple, Villivakkam",
        desc: "Known for rituals related to Saturn (Shani) and ancestral blessings.",
        locations: [
          {
            name: "Villivakkam",
            link: "https://maps.app.goo.gl/gD4AmBNCoPQi1Qif6",
          },
        ],
      },
      {
        name: "Sri Prasanna Venkatesa Perumal Temple, Saidapet",
        desc: "Popular among devotees seeking Tirupati Balaji’s blessings within city limits.",
        locations: [
          {
            name: "Saidapet",
            link: "https://maps.app.goo.gl/SyGNdyGh8sUhP9Bg6",
          },
        ],
      },
    ],
  },
  {
    category: "Mosques",
    categoryParaGraph: "",
    places: [
      {
        name: "Masjid-e-Azam, T. Nagar",
        desc: "Prominent mosque in a bustling commercial area; close to Ranganathan Street.",
        locations: [
          {
            name: "T. Nagar",
            link: "https://maps.app.goo.gl/YS5kJZizgYwn7bRw6",
          },
        ],
      },
      {
        name: "Masjid Al Rahman, West Mambalam",
        desc: "Peaceful and well-managed mosque in a primarily Hindu locality.",
        locations: [
          {
            name: "Perungudi",
            link: "https://maps.app.goo.gl/sBHneNBaPtXA7x2t6",
          },
        ],
      },
      {
        name: "Masjid-e-Khizar, K.K. Nagar",
        desc: "Known for its serene atmosphere and accessibility.",
        locations: [
          {
            name: "K.K. Nagar",
            link: "https://maps.app.goo.gl/rVHcSujWLjWBaDyT8",
          },
        ],
      },
      {
        name: "Masjid e Rahmath, Ashok Nagar",
        desc: "Community-friendly and clean mosque with educational activities.",
        locations: [
          {
            name: "Perambur",
            link: "https://maps.app.goo.gl/QHv8MCQfUwNrwDhNA",
          },
        ],
      },
    ],
  },
  {
    category: "Churches",
    categoryParaGraph: "",
    places: [
      {
        name: "Annai Velankanni Church, Virugambakkam",
        desc: "Inspired by the Basilica of Velankanni; attracts thousands during annual feast in September.",
        locations: [
          {
            name: "Valasaravakkam",
            link: "https://maps.app.goo.gl/o7cwPRuczWNSSnCWA",
          },
        ],
      },
      {
        name: "CSI Wesley English Church, T. Nagar",
        desc: "CSI congregation known for English services and music ministry.",
        locations: [
          {
            name: "St. Thomas Mount",
            link: "https://maps.app.goo.gl/YtP13KQ7bRhAWKNr6",
          },
        ],
      },
      {
        name: "St. Theresa’s Church, Nungambakkam",
        desc: "Peaceful Roman Catholic church nestled in a busy neighborhood.",
        locations: [
          {
            name: "Nungambakkam",
            link: "https://maps.app.goo.gl/EWg1p2dXz1XR1kUf7",
          },
        ],
      },
      {
        name: "Our Lady of Lourdes Church, Perambur",
        desc: "Known for its grand architecture and devotion to Mother Mary.",
        locations: [
          {
            name: "Perambur",
            link: "https://maps.app.goo.gl/eXjfbXn7fPiaTtz68",
          },
        ],
      },
    ],
  },

  {
    category: "Jain Temples",
    categoryParaGraph: "",
    places: [
      {
        name: "Shri Shankheshwar Parshwanath Jain Temple, Madipakkam",
        desc: "Relatively new but growing in significance. It serves Jains in the southern suburban pockets like Velachery, Pallikaranai, and Tambaram.",
        locations: [
          {
            name: "Purasaiwakkam",
            link: "https://maps.app.goo.gl/8CP9PYk265C4NYFz7",
          },
        ],
      },
    ],
  },
];

const OtherChennaiImage = [
  {
    sectionTitle: "Outskirts & Greater Chennai",
    sectionDesc:
      "Chennai has a wide range of eateries where you may enjoy the greatest Italian cuisine, both classical and regional. ",
    image: "/images/Live-Images/SubPages/Outskirts-Greater-Chennai.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: "Classic Italian Flavors",
            para: [
              "Experience and indulge in creamy Carbonara and rich Lasagna, alongside iconic Margherita Pizza in Chennai. Find out these classical Italian flavours at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Classic-Italian-Flavors.svg",
            link: "/classicItalianFlavors",
          },
        ],
      },
      {
        points: [
          {
            title: "Regional Italian Delights",
            para: [
              "Experience an amazing tastes of regional delights such as fragrant Pesto Genovese and saffron-infused Risotto alla Milanese in chennai at,",
            ],
            imgs: "/images/Visit-Images/SubPages/Icons/Regional-Italian-Delights.svg",
            link: "/regionalItalianDelights",
          },
        ],
      },
    ],
  },
];

const OtherChennai = [
  {
    category: "Temples",
    categoryParaGraph: "",
    places: [
      {
        name: "Mangadu Kamakshi Amman Temple",
        desc: "A powerful Shakti Peetham where Goddess Kamakshi is believed to have meditated.",
        locations: [
          {
            name: "Mangadu",
            link: "https://maps.app.goo.gl/HwoZUpcArEmkRf8RA",
          },
        ],
      },
      {
        name: "Kundrathur Murugan Temple",
        desc: "Built by King Kulothunga Chola II, located atop a hill and dedicated to Lord Murugan.",
        locations: [
          {
            name: "Sirukalathur",
            link: "https://maps.app.goo.gl/j9AHfWv44pCUCMWZ9",
          },
        ],
      },
      {
        name: "Padi Sri Sivan Temple",
        desc: "A peaceful Shiva temple near Anna Nagar with strong local significance.",
        locations: [
          {
            name: "Anna Nagar",
            link: "https://maps.app.goo.gl/KRP8J7EjanERjJDV7",
          },
        ],
      },
      {
        name: "Thiruverkadu Karumariamman Temple",
        desc: "A prominent Amman temple known for granting boons and protection.",
        locations: [
          {
            name: "Thiruverkadu",
            link: "https://maps.app.goo.gl/55sWKoG3vXqQbWKg9",
          },
        ],
      },
    ],
  },

  {
    category: "Mosques",
    categoryParaGraph: "",
    places: [
      {
        name: "Masjid Al-Taqwa, Pallavaram",
        desc: "Spacious, well-known mosque near the airport and residential belts.",
        locations: [
          {
            name: "Pallavaram",
            link: "https://maps.app.goo.gl/bfs1YicWiFmNnh4H8",
          },
        ],
      },
      {
        name: "Masjid-ul-Huda, Chrompet",
        desc: "Active local mosque with regular prayers and community events.",
        locations: [
          {
            name: "Chromepet",
            link: "https://maps.app.goo.gl/WAsb3AbwkUxnLFrx6",
          },
        ],
      },
      {
        name: "Masjid e Rahmania, Tambaram",
        desc: "One of the key mosques in South Suburb; peaceful and well-attended.",
        locations: [
          {
            name: "Madipakkam",
            link: "https://maps.app.goo.gl/TM3WMwNmH5AseRLU7",
          },
        ],
      },
      {
        name: "Masjid-e-Mustafa, Kelambakkam",
        desc: "Important mosque for the growing IT corridor population.",
        locations: [
          {
            name: "Kelambakkam",
            link: "https://maps.app.goo.gl/BCu4h8C2HR3waUhc9",
          },
        ],
      },
      {
        name: "Masjid e Masood, Sholinganallur",
        desc: "Serves the OMR tech belt; modern facilities.",
        locations: [
          {
            name: "Sholinganallur",
            link: "https://maps.app.goo.gl/MgjeR2apayJUrKjv9",
          },
        ],
      },
    ],
  },
  {
    category: "Churches",
    categoryParaGraph: "",
    places: [
      {
        name: "Holy Family Church, Porur",
        desc: "Modern Catholic church; community-centric, especially active with youth groups.",
        locations: [
          {
            name: "Porur",
            link: "https://maps.app.goo.gl/nbHKBZYwj6fo7ba8A",
          },
        ],
      },
      {
        name: "St. Anne’s Church, Tambaram",
        desc: "Large Catholic church serving the suburban population.",
        locations: [
          {
            name: "KK Nagar West",
            link: "https://maps.app.goo.gl/PuFscWmKnKw8FTwv7",
          },
        ],
      },
      {
        name: "Sacred Heart Church, Avadi",
        desc: "One of the key churches in the western suburbs with regular Mass and events.",
        locations: [
          {
            name: "Avadi",
            link: "https://maps.app.goo.gl/LDKP1EGz26LPin3S8",
          },
        ],
      },
      {
        name: "Infant Jesus Church, Kelambakkam",
        desc: "Modern architecture, serves the growing IT population on OMR.",
        locations: [
          {
            name: "Kelambakkam",
            link: "https://maps.app.goo.gl/fi7bHTH4ddKsYpds9",
          },
        ],
      },
      {
        name: "Divine Mercy Church, Sholinganallur",
        desc: "Newer parish; gaining popularity among Catholic tech families.",
        locations: [
          {
            name: "",
            link: "",
          },
        ],
      },
    ],
  },

  {
    category: "Gurudwara",
    categoryParaGraph: "",
    places: [
      {
        name: "Sri Guru Tegh Bahadur Gurudwara – Avadi",
        desc: "Located in the western suburb of Avadi, this is a serene spot for prayer and gathering, particularly for Sikh families in the area.",
        locations: [
          {
            name: "Avadi",
            link: "https://maps.app.goo.gl/yFw3G91vKRzkwLpD9",
          },
          {
            name: "Avadi",
            link: "https://maps.app.goo.gl/bSdhXcPrsX2ikxmT8",
          },
        ],
      },
    ],
  },
];

export default function Culturereligiousattractions() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const [centralChennai, setCentralChennai] = useState("active");
  const [southChennai, setSouthChennai] = useState("");
  const [northChennai, setNorthChennai] = useState("");
  const [westChennai, setWestChennai] = useState("");
  const [outSideChennai, setOutsideChennai] = useState("");
  const [activeSection, setActiveSection] = useState("Central Chennai");
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileSticky, setIsMobileSticky] = useState(false);
  const [selectedTab, setSelectedTab] = useState("");

  const [selectedTabForScroll, setSelectedTabForScroll] = useState("");

  const tabNames = [
    "Central Chennai",
    "South Chennai",
    "North Chennai",
    "West Chennai",
    "Outskirts & Greater Chennai",
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);







  const handleStickyScroll = () => {
    const section = document.getElementById("fourthSection");
    if (section) {
      const top = section.getBoundingClientRect().top;
      setIsSticky(top <= 0);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleStickyScroll);
    return () => window.removeEventListener("scroll", handleStickyScroll);
  }, []);
  // Load from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem("selectedTabForScroll");
    if (savedTab && tabNames.includes(savedTab)) {
      setSelectedTabForScroll(savedTab);
    } else {
      setSelectedTabForScroll(tabNames[0]); // default to first tab
    }
  }, []);
  // Refs for each section
  const sectionRefs = useRef({});
  tabNames.forEach((name) => {
    if (!sectionRefs.current[name]) {
      sectionRefs.current[name] = React.createRef();
    }
  });

  const handleTabClick = (name) => {
    setActiveSection(name);

    const section = sectionRefs.current[name];
    if (section && section.current) {
      section.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // ✅ Save the selected city/tab to localStorage
    localStorage.setItem("citydata", name);
    window.location.reload(); // 🔄 Force reload

    // Encode the section name for URL and reload to that section
    // const anchor = `#${encodeURIComponent(name)}`;
    const anchor = `#placeofworhsipId`;
    window.location.href = window.location.pathname + anchor;
  };

  // ✅ Load saved tab from localStorage on mount
  useEffect(() => {
    const savedTab = localStorage.getItem("citydata");
    const defaultTab = tabNames[0];
    const tabToLoad = tabNames.includes(savedTab) ? savedTab : defaultTab;

    setActiveSection(tabToLoad);

    setTimeout(() => {
      const section = sectionRefs.current[tabToLoad];
      if (section?.current) {
        section.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 200); // small delay to wait for DOM to mount
  }, []);




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

  const handleMobileStickyScroll = () => {
    const section = document.getElementById("fourthSection");

    if (window.innerWidth < 768 && section) {
      const top = section.getBoundingClientRect().top;
      setIsMobileSticky(top <= 0);
    } else {
      setIsMobileSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleMobileStickyScroll);
    window.addEventListener("resize", handleMobileStickyScroll);

    return () => {
      window.removeEventListener("scroll", handleMobileStickyScroll);
      window.removeEventListener("resize", handleMobileStickyScroll);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Places of worship in chennai - Super chennai</title>
        <meta
          name="description"
          content="Super Chennai explores the city’s diverse faiths, guiding you through temples, churches, and mosques that stand as iconic places of worship in Chennai’s culture."
        />
        <link rel="canonical" href="/live/worship-in-chennai" />
      </Helmet>
      <div className="CulturePage">
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Live-Images/SubPages/Culture-Religious-Attractions-banner.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Places of Worship</h3>
              <div className="breadCrum">
                <Link to="/live-in-chennai"> Live </Link> -{" "}
                <a href="">Places of Worship</a>
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
              className={`CostOflivingBackground ${scrollDir === "right"
                ? "scroll-rightCostofLiving"
                : "scroll-leftCostofLiving"
                }`}
              ref={bgTextRef}
            >
              <p>
                Spiritual &nbsp; & Cultural Life &nbsp; Live &nbsp;in Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Places of Worship in Chennai</h3>
              <p>
                Chennai is a city where faith finds expression in diverse and
                magnificent forms. From ancient Hindu temples to colonial-era
                churches, serene Jain temples to historic mosques, the places of
                worship in Chennai reflect its rich spiritual and cultural
                mosaic. Each religious site stands not only as a center of
                devotion but also as a symbol of architectural beauty and
                community identity. Whether you're a resident or a visitor,
                exploring the places of worship in Chennai offers a deep insight
                into the city’s inclusive heritage and centuries-old traditions.
              </p>
            </div>
          </div>
          <div id="placeofworhsipId" > </div>
        </div>

        <section id="fourthSection" className="relative">
          <div
            className={`stickyPositionContainer w-full transition-transform transition-shadow duration-300 ease-in-out ${isSticky
              ? "fixed top-0 left-0 z-50 bg-white shadow-md py-3"
              : "relative"
              }`}

          >
            <div className="container max-w-7xl mx-auto px-4 pb-[25px] chennaiInvestmentsButtons">
              <div className="flex flex-wrap gap-4 justify-center mb-6">
                {tabNames.map((name) => (
                  <button
                    key={name}
                    className={`tabButton px-4 py-2 rounded font-semibold transition ${activeSection === name
                      ? "!bg-[#a44294] text-white !font-medium"
                      : "bg-gray-200 text-gray-800 !font-medium"
                      }`}

                    onClick={() => handleTabClick(name)}
                  >
                    {name}
                  </button>

                ))}
              </div>
            </div>
          </div>



          {/* -----------------CentralChennai--------------------  */}

          {activeSection === "Central Chennai" && (
            <>
              <div className="foodlistsec">
                {CentralChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.sectionTitle} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {CentralChennai.map((section, sectionIdx) => {
                  return (
                    <div key={sectionIdx} className="nightlifesecIn">
                      <h2 className="text-2xl font-semibold mb-6">
                        {section.category}
                      </h2>
                      <p className="mx-0 my-5 mb-9">
                        {section.categoryParaGraph}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <AnimatePresence>
                          {section.places.map((place, idx) => (
                            <motion.div
                              key={idx}
                              className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -20 }}
                              transition={{ duration: 0.3 }}
                              layout
                            >
                              <h3 className="text-xl font-semibold mb-2">
                                {place.name}
                              </h3>
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
                            </motion.div>
                          ))}
                        </AnimatePresence>
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          )}

          {/* -----------------CentralChennai--------------------  */}

          {/* -----------------SouthChennai--------------------  */}

          {activeSection === "South Chennai" && (
            <>
              <div className="foodlistsec">
                {SouthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.sectionTitle} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {SouthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
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
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------SouthChennai--------------------  */}

          {/* -----------------NorthChennai--------------------  */}

          {activeSection === "North Chennai" && (
            <>
              <div className="foodlistsec">
                {NorthChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.sectionTitle} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {NorthChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
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
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------NorthChennai--------------------  */}

          {/* -----------------WestChennai--------------------  */}

          {activeSection === "West Chennai" && (
            <>
              <div className="foodlistsec">
                {WestChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.sectionTitle} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {WestChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
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
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* -----------------WestChennai--------------------  */}

          {/* -----------------OutsideChennai--------------------  */}

          {activeSection === "Outskirts & Greater Chennai" && (
            <>
              <div className="foodlistsec">
                {OtherChennaiImage.map((section, index) => {
                  const tenantCount = section.tenantInfoSections?.length ?? 0;
                  const parentClass =
                    tenantCount % 2 === 0 ? "even-count" : "odd-count";

                  return (
                    <section
                      key={index}
                      style={{ paddingBottom: "50px" }}
                      className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
    ${index % 2 === 0 ? "bg-white whitebgsec" : "bg-[#f7f7f7] colorbgsec"} 
    ${index === 0 ? "pattern-a" : index % 2 === 0 ? "pattern-b" : "pattern-c"}`}
                    >
                      <div className="imgLeft">
                        <img src={section.image} alt={section.sectionTitle} />
                      </div>
                      <div className="imgText flex items-center">
                        <div className="imgcolTitle bg-[#682865] relative">
                          <h2 className="flex flex-col text-white">
                            <small>{section.sectionTitle}</small>
                          </h2>
                          {/* <p>{section.sectionDesc}</p> */}
                        </div>
                      </div>
                    </section>
                  );
                })}

                {/*--------------- Explore More Chennai----------------- */}
              </div>
              <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
                {OtherChennai.map((section, sectionIdx) => (
                  <div key={sectionIdx} className="nightlifesecIn">
                    <h2 className="text-2xl font-semibold mb-6">
                      {section.category}
                    </h2>
                    <p className="mx-0 my-5 mb-9">
                      {section.categoryParaGraph}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <AnimatePresence>
                        {section.places.map((place, idx) => (
                          <motion.div
                            key={idx}
                            className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                            layout
                          >
                            <h3 className="text-xl font-semibold mb-2">
                              {place.name}
                            </h3>
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
                          </motion.div>
                        ))}
                      </AnimatePresence>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}



          {/* -----------------OutsideChennai--------------------  */}

          {/*----------------- Multiple Benefit Sections ----------------*/}



        </section>





        {/*--------------- Explore More Chennai----------------- */}

        <LiveSlider />

        {/*----------------- Social & CTA ----------------*/}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
