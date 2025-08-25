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
import { motion, AnimatePresence } from "framer-motion";
import LiveSlider from "../LivePages/LiveSlider";
import { Helmet } from "react-helmet-async";

export default function ChennaiHealthcare() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);

  const [showAll1, setShowAll1] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const HealthCare = [
  //   {
  //     category: "Why Chennai Stands Out in Health Care",
  //     places: [
  //       {
  //         name: "India’s medical tourism hub",
  //         desc: "Thousands of patients from across India, Africa, the Middle East, and Southeast Asia choose Chennai for affordable, quality treatment.",
  //         locations: [
  //           {
  //             name: "Apollo Clinic",
  //             link: "https://maps.app.goo.gl/QwX1ZVqQks7Y7hwj6",
  //           },
  //           {
  //             name: "Apollo Medical Centre",
  //             link: "https://maps.app.goo.gl/YMjGDDiGLrWbT697A",
  //           },
  //           {
  //             name: "Apollo Spectra Hospital",
  //             link: "https://maps.app.goo.gl/beRpYJ2yXYLVBJSH9",
  //           },
  //           {
  //             name: "Apollo Hospital Greams Lane",
  //             link: "https://maps.app.goo.gl/JkJihb74BNKTzzQe9",
  //           },
  //           {
  //             name: "Apollo Speciality Hospital OMR",
  //             link: "https://maps.app.goo.gl/qmBLQDLwmoA8Hs2a9",
  //           },
  //           { name: "Miot Hospital", link: "" },
  //         ],
  //       },
  //       {
  //         name: "Home to leading hospitals",
  //         desc: "Apollo Hospitals,  SIMS, Kauvery, and many more.",
  //         locations: [
  //           {
  //             name: "MGM Healthcare, Malar",
  //             link: "https://maps.app.goo.gl/h7asrMzZb4tbJvBw8",
  //           },
  //           {
  //             name: "SIMS Hospitals",
  //             link: "https://maps.app.goo.gl/EFdgakQ1mJbNsvj4A",
  //           },
  //           {
  //             name: "Kauvery Hospital",
  //             link: "https://maps.app.goo.gl/8BwYfy1YkEcj3P8Q7",
  //           },
  //           {
  //             name: "GEM Hospital",
  //             link: "https://maps.app.goo.gl/RHpsxWw3iNgup3t29",
  //           },
  //           {
  //             name: "Be Well Hospitals",
  //             link: "https://maps.app.goo.gl/9QHvDD36PNjtXHNE8",
  //           },

  //         ],
  //       },
  //       {
  //         name: "Strong government care",
  //         desc: "Institutions like Rajiv Gandhi Govt. General Hospital and Egmore Children’s Hospital offer critical services to lakhs annually.",
  //         locations: [
  //           {
  //             name: "Rajiv Gandhi Govt. General Hospital",
  //             link: "https://maps.app.goo.gl/DyvFpQZH6UG7Rdjt9",
  //           },
  //           {
  //             name: "Government Hospital Egmore",
  //             link: "https://maps.app.goo.gl/syB916Udp3an8Qmn8",
  //           },
  //           {
  //             name: "Kalaignar Centenary",
  //             link: "https://maps.app.goo.gl/mwcSgAtMprymB13r5",
  //           },
  //           {
  //             name: "Government Royapettah Hospital",
  //             link: "https://maps.app.goo.gl/fDG1bU3hQtXPDmJs8",
  //           },
  //           {
  //             name: "Government Hospital Padi Uchc",
  //             link: "https://maps.app.goo.gl/VqfSryucvqbsR5tk6",
  //           },
  //         ],
  //       },
  //       {
  //         name: "Pioneers in specialties",
  //         desc: "Chennai is known for heart surgeries, organ transplants, cancer care, and fertility treatment.",
  //         locations: [
  //           {
  //             name: "Medway Heart Institute",
  //             link: "https://maps.app.goo.gl/1JS7rd6uRgpCqD3W7",
  //           },
  //           {
  //             name: "Apollo Heart Centre",
  //             link: "https://maps.app.goo.gl/ENNM1HRF1vKCveCS6",
  //           },
  //           {
  //             name: "Namar Heart Hospital",
  //             link: "https://maps.app.goo.gl/iKKGfYfnLpntvWwN9",
  //           },
  //           {
  //             name: "SRI VIVEKANANDA HOSPITALS",
  //             link: "https://maps.app.goo.gl/JEmK1fTVndTVUTUFA",
  //           },
  //           {
  //             name: "Saravana Heart Hospital",
  //             link: "https://maps.app.goo.gl/VJoFFsKzpYkWivAE6",
  //           },
  //         ],
  //       },
  //       {
  //         name: "Blending modern and traditional",
  //         desc: "Allopathy, Siddha, Ayurveda, and Homeopathy co‑exist here meaningfully.",
  //         locations: [
  //           {
  //             name: "Prakriti Ayurvedic Center",
  //             link: "https://maps.app.goo.gl/GfJ79ufzACiJkX9U9",
  //           },
  //           {
  //             name: "PureSid Natural Wellness Centre",
  //             link: "https://maps.app.goo.gl/JzCw6chs996Fq4kbA",
  //           },
  //           {
  //             name: "Sanjeevani Ayurveda & Yoga Centre",
  //             link: "https://maps.app.goo.gl/z2WGRa5cCECTVyTp8",
  //           },
  //           {
  //             name: "Apollo AyurVAID Clinic",
  //             link: "https://maps.app.goo.gl/qnRu2GFEbNJMXuAv8",
  //           },
  //           {
  //             name: "Dhanwanthralaya Ayurveda Speciality Clinic",
  //             link: "https://maps.app.goo.gl/ekMLYse7myLwRHr36",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];
  // const Multispeciality = [
  //   {
  //     category: "Multispeciality and Super-Specialty Hospitals",
  //     places: [
  //       {
  //         name: "Apollo Hospital, Greams Lane",
  //         desc: "A flagship in Indian healthcare, specializing in cardiology, oncology, neurology, and transplants.",
  //         locations: [
  //           {
  //             name: "Thousand Lights",
  //             link: "https://maps.app.goo.gl/eGL87XBf8c2QMexC8 ",
  //           },
  //         ],
  //       },
  //       {
  //         name: "Chennai Miot Hospital ",
  //         desc: "Renowned for orthopedic surgeries, trauma care, and joint replacements.",
  //         locations: [
  //           {
  //             name: "MIOT - MANAPAKKAM",
  //             link: "https://maps.app.goo.gl/8NAzG6gvwyV47Vhf6 ",
  //           },
  //         ],
  //       },

  //     ],
  //   },
  // ];

  const Multispeciality = [
    {
      category: "Multispeciality and Super-Specialty Hospitals",
      places: [
        {
          name: "Apollo Hospital, Greams Lane",
          desc: "A flagship in Indian healthcare, specializing in cardiology, oncology, neurology, and transplants.",
          locations: [
            {
              name: "Thousand Lights",
              link: "https://maps.app.goo.gl/eGL87XBf8c2QMexC8",
            },
          ],
        },
        {
          name: "Chennai Miot Hospital",
          desc: "Renowned for orthopedic surgeries, trauma care, and joint replacements.",
          locations: [
            {
              name: "MIOT - Manapakkam",
              link: "https://maps.app.goo.gl/8NAzG6gvwyV47Vhf6",
            },
          ],
        },
        {
          name: "MGM Healthcare Chennai",
          desc: "Offers cutting-edge technology with focus on cardiac care, neurosciences, and transplants.",
          locations: [
            {
              name: "Aminjikarai",
              link: "https://maps.app.goo.gl/RyasqzsMeUpTWCxCA",
            },
          ],
        },
        {
          name: "Chennai SIMS Hospital",
          desc: "Excels in neurology, cardiology, nephrology, and robotic surgeries.",
          locations: [
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/QkcMjhXWoASD29Px9",
            },
          ],
        },
        {
          name: "Gleneagles Global Hospital Chennai",
          desc: "A leader in liver transplants, gastroenterology, and cancer care.",
          locations: [],
        },
        {
          name: "Chennai Kauvery Hospital",
          desc: "Popular for cardiology, geriatrics, and internal medicine.",
          locations: [
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/UwBkvgQuWLraE7hW7",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/W5q94KonxUgmdZpLA",
            },
            {
              name: "Kovilambakkam",
              link: "https://maps.app.goo.gl/DFx6ydRCBoq4tPDZA",
            },
          ],
        },
        {
          name: "Rela Hospital",
          desc: "A centre of excellence for liver care, hepatology, and organ transplants.",
          locations: [
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/akzR6gHHp8M38LUQA",
            },
          ],
        },
        {
          name: "Prashanth Hospital Chennai",
          desc: "Trusted for fertility, obstetrics, and gynecology services.",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/VxcqFc188CMmrvsDA",
            },
          ],
        },
        {
          name: "Chennai Vijaya Hospital",
          desc: "Known for diagnostics, gastroenterology, and ENT care.",
          locations: [
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/gi8cdCG7QbkGAuuy9",
            },
            {
              name: "K.K.Nagar",
              link: "https://maps.app.goo.gl/ve2Fxg6KYKYfMbBb8",
            },
          ],
        },
        {
          name: "Sooriya Hospital Chennai",
          desc: "Known for child and maternity care, orthopedics, and intensive care.",
          locations: [
            {
              name: "Saligramam",
              link: "https://maps.app.goo.gl/BtKfdEfccmBt4koL7",
            },
          ],
        },
        {
          name: "Dr. Mehta’s Hospitals",
          desc: "A 90+ year-old institution known for pediatric and maternal care.",
          locations: [
            {
              name: "Chetpet",
              link: "https://maps.app.goo.gl/bBDGGAGGT36WPKWy5",
            },
          ],
        },
        {
          name: "Dr. Kamakshi Memorial Hospitals",
          desc: "Advanced multi-speciality care with expertise in oncology, women’s health, and surgery.",
          locations: [
            {
              name: "Pallikaranai",
              link: "https://maps.app.goo.gl/e79b93ziwcgqhbaG8",
            },
          ],
        },
        {
          name: "Chettinad Health City Hospital",
          desc: "Comprehensive tertiary care across specialties with cutting-edge technology and holistic wellness.",
          locations: [
            {
              name: "Kelambakkam",
              link: "https://maps.app.goo.gl/J54z1ct5CYdJaEyz5",
            },
          ],
        },
        {
          name: "The Madras Medical Mission Hospital",
          desc: "Leading cardiac and renal hospital with global recognition and transplant excellence.",
          locations: [
            {
              name: "Mogappair",
              link: "https://maps.app.goo.gl/t6pJ3VzMQxZ1gQAG8",
            },
          ],
        },
        {
          name: "Sundaram Medical Foundation",
          desc: "Ethical, community-focused hospital offering quality pediatric, orthopedic, and critical care services.",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/S2cP7NjbuBWMfKwr9",
            },
          ],
        },
      ],
    },
  ];
  const DentalCare = [
    {
      category: "Dental & Oral Healthcare",
      places: [
        {
          name: "Saveetha Dental Hospital",
          desc: "One of Asia’s largest dental care centers and teaching hospitals.",
          locations: [
            {
              name: "Velappanchavadi",
              link: "https://maps.app.goo.gl/M2P42eoKV2uRK1Yy6",
            },
          ],
        },
        {
          name: "SRM Dental College & Hospital",
          desc: "A trusted name in dental education and patient care.",
          locations: [
            {
              name: "Ramapuram",
              link: "https://maps.app.goo.gl/TY9vWDqTJfEEXHyP7",
            },
            {
              name: "Kattankulathur",
              link: "https://maps.app.goo.gl/2RzdRWzuHY2HRFhj7",
            },
          ],
        },
        {
          name: "Ragas Dental College & Hospital",
          desc: "Known for orthodontics, prosthodontics, and oral surgery.",
          locations: [
            {
              name: "Uthandi",
              link: "https://maps.app.goo.gl/Rx5aRqmRiR3WtRWYA",
            },
          ],
        },
        {
          name: "Balaji Dental and Craniofacial Hospital",
          desc: "Internationally recognized for dental implants, corrective jaw surgeries, and cosmetic dentistry.",
          locations: [
            {
              name: "Teynampet",
              link: "https://maps.app.goo.gl/dswpXCAZM9Ht2fLM6",
            },
          ],
        },
        {
          name: "Meenakshi Ammal Dental Hospital",
          desc: "Known for patient-friendly services and comprehensive oral care.",
          locations: [
            {
              name: "Maduravoyal",
              link: "https://maps.app.goo.gl/6xPbD8cmojZd9A4U6",
            },
          ],
        },
        {
          name: "Thai Moogambigai Dental Hospital",
          desc: "Offers a full spectrum of dental treatments with affordable care.",
          locations: [
            {
              name: "Mogappair",
              link: "https://maps.app.goo.gl/MH9JM2WCRkXTyhMe9",
            },
          ],
        },
        {
          name: "Sri Ramachandra Dental Hospital",
          desc: "Offers specialized dental care backed by a medical college infrastructure.",
          locations: [
            {
              name: "Iyyappanthangal",
              link: "https://maps.app.goo.gl/wtk8QeboNA2CK2kg8",
            },
          ],
        },
      ],
    },
  ];

  const EyeHospitals = [
    {
      category: "Eye Hospitals in Chennai",
      places: [
        {
          name: "Dr. Agarwal Eye Care Hospital",
          desc: "A chain of leading eye care centers known for cataract, LASIK, and retina treatments.",
          locations: [
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/j4rGNs8s8sNL1C26A",
            },
            {
              name: "Teynampet",
              link: "https://maps.app.goo.gl/Wp9SAGfsRHDo99tM6",
            },
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/Y5PYby7QxcV6mYtSA",
            },
            {
              name: "Nanganallur",
              link: "https://maps.app.goo.gl/HZ1VaFyzLhaJkEm37",
            },
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/BjP6oPnpfet2Gh1A7",
            },
            {
              name: "Mogappair West",
              link: "https://maps.app.goo.gl/THEfU3Rvo2WFDRnq5",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/XZFamguthvwxXxTs5",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/rKDRDERSQikzEtHg7",
            },
            {
              name: "Egmore",
              link: "https://maps.app.goo.gl/4wLVJiuTdUUFbwfY6",
            },
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/4aHt6XWjhaMK9ytU9",
            },
            {
              name: "Perambur",
              link: "https://maps.app.goo.gl/jNFmfxQ4xJaUdUD69",
            },
            {
              name: "Triplicane",
              link: "https://maps.app.goo.gl/bYLaKGQLg5qXi3XLA",
            },
            {
              name: "Ambattur",
              link: "https://maps.app.goo.gl/511grbWKjaYb5hMFA",
            },
            {
              name: "West Tambaram",
              link: "https://maps.app.goo.gl/25RPoju3ry4zBi319",
            },
            {
              name: "Avadi",
              link: "https://maps.app.goo.gl/EkNw45oXuRhdf31D7",
            },
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/v4kdsvk2yi3uWtkU9",
            },
            {
              name: "Puzhal",
              link: "https://maps.app.goo.gl/jdWGTHbvbwfsCeT99",
            },
            {
              name: "Tondiarpet",
              link: "https://maps.app.goo.gl/31eGKq3uTYksYQxi9",
            },
            {
              name: "Thiruvottiyur",
              link: "https://maps.app.goo.gl/88fBpAtV9TfdqKKF7",
            },
            {
              name: "Kakkalur",
              link: "https://maps.app.goo.gl/qmo5D85h9YyV3X7V9",
            },
          ],
        },
        {
          name: "The Eye Foundation",
          desc: "Offers advanced ophthalmic surgeries and vision correction technologies.",
          locations: [
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/cfWZsiKt58c5YUBt7",
            },
          ],
        },
        {
          name: "Rajan Eye Care Hospital",
          desc: "A well-established name in eye care and laser vision correction.",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/zmd1cZsR6Dh8faGv8",
            },
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/faR46vCQs5WQwoA49",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/pRuFf6JL97mf9PW59",
            },
          ],
        },
        {
          name: "Vasan Eye Care",
          desc: "A popular network offering accessible eye treatments across Chennai.",
          locations: [
            {
              name: "Saidepet",
              link: "https://maps.app.goo.gl/G6exZGdJ3L1nWuCW9",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/g4WpwtTFPTvctsnA7",
            },
            {
              name: "Neelankarai",
              link: "https://maps.app.goo.gl/hb2TfbqcKGGgcKsS8",
            },
            {
              name: "Madipakkam",
              link: "https://maps.app.goo.gl/23ue6GeU4NeVmthm8",
            },
            {
              name: "Perambur",
              link: "https://maps.app.goo.gl/g3gaEquoTLcnj5iG7",
            },
            {
              name: "Old Washermanpet",
              link: "https://maps.app.goo.gl/TUyWnnBm6sHN2JxUA",
            },
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/C91P7vwrkkFbPbC59",
            },
            {
              name: "Ambattur",
              link: "https://maps.app.goo.gl/onHBqoybKE9FZEoC9",
            },
            {
              name: "Tambaram",
              link: "https://maps.app.goo.gl/M3LwGQFLMWZXqKCGA",
            },
            {
              name: "Tiruvottiyur",
              link: "https://maps.app.goo.gl/BAAQX6wVhNcBRPJw7",
            },
          ],
        },
        {
          name: "Aravind Eye Hospital",
          desc: "Specializes in affordable, high-volume cataract surgeries and community eye care.",
          locations: [
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/47ZU3KYSWufN53Yi7",
            },
            {
              name: "Poonamallee",
              link: "https://maps.app.goo.gl/sA9GtuTMdYDnvAEGA",
            },
          ],
        },
      ],
    },
  ];

  const PaediatricHospitals = [
    {
      category: "Paediatric / Children’s Hospitals in Chennai",
      places: [
        {
          name: "Rainbow Children's Hospital",
          desc: "Renowned for neonatology, pediatric critical care, and specialty surgeries.",
          locations: [
            {
              name: "Guindy",
              link: "https://maps.app.goo.gl/hQWBBV2CQ2b2Ycyf8",
            },
            {
              name: "Thirumangalam",
              link: "https://maps.app.goo.gl/CWoJgMNpKBcqh3Ct7",
            },
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/PDKmGoUVJ74Vz1fy7",
            },
          ],
        },
        {
          name: "Apollo Children's Hospital",
          desc: "Offers comprehensive pediatric care, including pediatric cardiology, neurology, and surgery.",
          locations: [
            {
              name: "Thousand Lights",
              link: "https://maps.app.goo.gl/h2CFtVFmiw1VxU9R8",
            },
          ],
        },
        {
          name: "Childtrust Hospital (Kanchi Kamakoti CHILDS Trust Hospital)",
          desc: "One of the most trusted names in pediatric healthcare with advanced neonatal and pediatric ICU facilities.",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/YWT3rVLq5hxYpT5B7",
            },
          ],
        },
        {
          name: "Neolife Children's Hospital",
          desc: "Known for its child-friendly infrastructure and expertise in neonatology, pulmonology, and pediatric intensive care.",
          locations: [
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/E67qGs2NCBv8Jo1t7",
            },
          ],
        },
        {
          name: "Apollo Cradle & Children's Hospital",
          desc: "Focuses on maternity and child care, combining obstetrics with advanced pediatric services.",
          locations: [
            {
              name: "Karapakkam",
              link: "https://maps.app.goo.gl/p69YmgXAqjsweF5T6",
            },
          ],
        },
      ],
    },
  ];

  const FertilityHospitals = [
    {
      category: "Fertility and Women’s Health Hospitals in Chennai",
      places: [
        {
          name: "Prashanth Hospitals (Prashanth Fertility Research Centre)",
          desc: "Renowned for IVF, ICSI, and advanced reproductive care.",
          locations: [
            {
              name: "Chetpet",
              link: "https://maps.app.goo.gl/tDRqdQqt4qTrYxtw7",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/TdwskAHBZcVZ1h6PA",
            },
            {
              name: "Broadway",
              link: "https://maps.app.goo.gl/AFBALUT5JE98MNYk6",
            },
          ],
        },
        {
          name: "Cloud9 Hospital",
          desc: "Offers holistic maternity and fertility care, blending clinical excellence with comfort.",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/eAF3T69qLC7LsYnR9",
            },
            {
              name: "Thoraipakkam",
              link: "https://maps.app.goo.gl/k95oLLpV9VrJCwrA7",
            },
          ],
        },
        {
          name: "Aravind IVF Hospital (Dr. Aravind IVF & Fertility Centre)",
          desc: "Trusted for personalized fertility treatments and high success rates.",
          locations: [
            {
              name: "Sholinganallur",
              link: "https://maps.app.goo.gl/4uWjdoktKnH42pbB9",
            },
            {
              name: "Madipakkam",
              link: "https://maps.app.goo.gl/Z3tiQ4xfdKcv4V1j6",
            },
            {
              name: "Saligramam, Vadapalani",
              link: "https://maps.app.goo.gl/1rUdxwxQ5uiChigh7",
            },
            {
              name: "Selaiyur",
              link: "https://maps.app.goo.gl/MFqLz4xgEuTjrBQg9",
            },
            {
              name: "Kakkalur",
              link: "https://maps.app.goo.gl/gfSZwCUXamCvtfCWA",
            },
          ],
        },
        {
          name: "Nova Hospital (Nova IVF Fertility, Chennai)",
          desc: "A pan-India fertility network offering advanced ART services and genetic counseling.",
          locations: [
            {
              name: "MRC Nagar, Raja Annamalai Puram",
              link: "https://maps.app.goo.gl/2zkcrE4w3CQeL2Zr6",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/nq5fiagHy63KAzq47",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/5CzRWB9ZM8oyzbRP6",
            },
            {
              name: "Selaiyur",
              link: "https://maps.app.goo.gl/wqDr4STaB6oHVJhr6",
            },
            {
              name: "Karayanchavadi",
              link: "https://maps.app.goo.gl/GzPqC8CTfVEzvpVBA",
            },
            {
              name: "Padur",
              link: "https://maps.app.goo.gl/mNtfpSwuJj2MpnXT9",
            },
          ],
        },
        {
          name: "GG Hospital, Chennai",
          desc: "GG Hospital is a renowned center for women’s health, fertility treatments, and minimally invasive surgeries, offering personalized care backed by advanced medical technology.",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/kLFkSVCNoaPWuDTE7",
            },
          ],
        },
        {
          name: "Aakash Fertility Centre and Hospital",
          desc: "Offers IVF, IUI, ICSI, surrogacy, and gynecological surgeries.",
          locations: [
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/oya6b4fC9JGH28j2A",
            },
          ],
        },
        {
          name: "Srushti Fertility Centre",
          desc: "Focuses on natural cycle IVF, donor programs, and fertility preservation.",
          locations: [
            {
              name: "Kotturpuram",
              link: "https://maps.app.goo.gl/amLimmuXFm84JdpBA",
            },
            {
              name: "Ramapuram",
              link: "https://maps.app.goo.gl/qEtDhJMX9QTcqNBLA",
            },
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/e5h64E8j5Vg79Kmp7",
            },
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/BwaHKHsgwwHQMwoT9",
            },
          ],
        },
        {
          name: "Iswarya Fertility Centre",
          desc: "Specializes in IVF, egg donation, surrogacy, and recurrent IVF failure cases.",
          locations: [
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/QqEHDsHqEqmKHS2N6",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/AbydK65CXpZTZEjL6",
            },
            { name: "OMR", link: "https://maps.app.goo.gl/kQSNK1BpXr6pmx5u5" },
            {
              name: "Madhavaram",
              link: "https://maps.app.goo.gl/Tqzj37H9JRXtoWAj6",
            },
            {
              name: "Ambattur",
              link: "https://maps.app.goo.gl/151LaPTgywf7McGo9",
            },
            {
              name: "Selaiyur",
              link: "https://maps.app.goo.gl/7vTfNgTdubJuZgen7",
            },
            {
              name: "Perambur",
              link: "https://maps.app.goo.gl/S8pXoCwu7bRiW1pX9",
            },
          ],
        },
      ],
    },
  ];

  const Dermatology = [
    {
      category: "Dermatology Clinics and Skin Hospitals",
      places: [
        {
          name: "Kaya Skin Clinic",
          desc: "With multiple branches across Chennai, Kaya offers cosmetic dermatology, laser treatments, and anti-aging solutions.",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/4uvtRGQHUSMdgFFu8",
            },
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/MmpthtavJsYudn34A",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/ZJGLZNSLQ7K5CPjBA",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/hBTPxPbwHfszZ3L39",
            },
            { name: "ECR", link: "https://maps.app.goo.gl/SFHvH2vxH8e8Ntjb7" },
          ],
        },
        {
          name: "Oliva Skin & Hair Clinic",
          desc: "Renowned for laser skin treatments, acne scar reduction, pigmentation therapy, and hair restoration.",
          locations: [],
        },
        {
          name: "DermaMed Aesthetic Clinics",
          desc: "Expertise in clinical and aesthetic dermatology including botox, fillers, and advanced skin rejuvenation therapies.",
          locations: [],
        },
        {
          name: "Radiance Skin and Hair Clinics",
          desc: "Popular for acne care, PRP therapy, pigmentation, and scar treatments.",
          locations: [
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/c9ApHaFXPPbySAvn9",
            },
          ],
        },
        {
          name: "Skin Clinic – Dr. Maya Vedamurthy",
          desc: "A trusted dermatologist with decades of experience in treating complex dermatological conditions.",
          locations: [
            {
              name: "Mahalingapuram",
              link: "https://maps.app.goo.gl/ZaDSvQMTJZtacF9m9",
            },
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/qqwBZGHNaMTKRbTY8",
            },
          ],
        },
        {
          name: "Chennai Skin Foundation and Yesudian Research Institute",
          desc: "Offers advanced dermatology care with a strong focus on research and innovation.",
          locations: [
            {
              name: "Raja Annamalai Puram",
              link: "https://maps.app.goo.gl/dFcFpUmD863gZ41f6",
            },
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/oVAqWicEJT7YmLuV7",
            },
          ],
        },
        {
          name: "The Aesthetica Clinic",
          desc: "Specializes in cosmetic procedures including laser hair removal, dermabrasion, and mole removal.",
          locations: [
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/76CEBNouJuQc44wG8",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/G64aCFrCQgdkpNs59",
            },
          ],
        },
        {
          name: "Apollo Cosmetic Dermatology & Skin Centre",
          desc: "Part of Apollo Hospitals, offering skin disease treatment alongside cosmetic dermatology solutions.",
          locations: [
            {
              name: "Raja Annamalai Puram",
              link: "https://maps.app.goo.gl/11s7CVbqUBCKzK556",
            },
          ],
        },
      ],
    },
  ];

  const Orthopedic = [
    {
      category: "Orthopedic Hospitals in Chennai",
      places: [
        {
          name: "Soundarapandian Bone and Joint Hospital",
          desc: "One of Chennai’s oldest and most trusted names in bone and joint care. Specializes in joint replacements, arthroscopy, and pediatric orthopedics.",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/XJoyhuYWLkHgEPEX6",
            },
          ],
        },
        {
          name: "Ortho-One Orthopaedic Speciality Centre",
          desc: "A dedicated orthopedic hospital focusing on sports medicine, physiotherapy, fracture management, and minimally invasive surgeries.",
          locations: [
            {
              name: "Choolai",
              link: "https://maps.app.goo.gl/c5fWkacUSrGEqRrv8",
            },
          ],
        },
        {
          name: "Sai Ortho Care Hospital",
          desc: "Known for comprehensive orthopedic care including trauma, spinal disorders, and advanced physiotherapy support.",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/Qut5ztvosmvaAfsf8",
            },
          ],
        },
        {
          name: "Parvathy Hospital",
          desc: "While multi-specialty, it is particularly recognized for orthopedic excellence, especially in robotic knee replacements and emergency trauma care.",
          locations: [
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/WUbpDtEYa4bys88L8",
            },
          ],
        },
        {
          name: "Madras Joint Replacement Centre",
          desc: "A focused orthopedic clinic specializing in hip and knee replacements and post-surgery rehab.",
          locations: [
            {
              name: "Alwarpet",
              link: "", // No link provided
            },
          ],
        },
      ],
    },
  ];

  const Cardiac = [
    {
      category: "Cardiac Hospitals in Chennai",
      places: [
        {
          name: "Frontier Lifeline Hospital (Dr. K. M. Cherian Heart Foundation",
          desc: "Pioneering institution in cardiac surgery and pediatric cardiology, globally renowned for complex procedures.",
          locations: [
            {
              name: "Mogappair East",
              link: "https://maps.app.goo.gl/bJiXaLGhmWFW5M8N9",
            },
            {
              name: "Ambattur",
              link: "https://maps.app.goo.gl/u4Vb4Hid6NUCLNua7",
            },
          ],
        },
        {
          name: "Medway Heart Institute",
          desc: "Focused on advanced interventional cardiology and minimally invasive heart surgeries with 24/7 emergency care.",
          locations: [
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/E4TypxKa1fVRjGjv7",
            },
          ],
        },
        {
          name: "Sri Ramachandra Heart Institute",
          desc: "State-of-the-art cardiac unit within a teaching hospital; known for clinical precision and research.",
          locations: [
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/FHJAe7MxaLcvh3Gt6",
            },
          ],
        },
      ],
    },
  ];

  const Diabetic = [
    {
      category: "Diabetic Hospitals in Chennai",
      places: [
        {
          name: "Dr. Mohan’s Diabetes Specialities Centre",
          desc: "One of India’s largest diabetes chains, known for personalized treatment and research-based care.",
          locations: [
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/bNTiPm9Xfa8s7wWU6",
            },
            {
              name: "Gopalapuram",
              link: "https://maps.app.goo.gl/RWGrv8qE6SvxjrgeA",
            },
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/irXYbQJhNBgfke7k8",
            },
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/PdGPmET6eGbXJovD9",
            },
            {
              name: "Avadi",
              link: "https://maps.app.goo.gl/MvSpoLq3vD1SVv2DA",
            },
            {
              name: "Tambaram",
              link: "https://maps.app.goo.gl/Ypb8udwZSTVeaBtv5",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/zgA5GpCVt2zURg6i9",
            },
            {
              name: "Selaiyur",
              link: "https://maps.app.goo.gl/4UH5QLq7EVTScJ6P8",
            },
          ],
        },
        {
          name: "M.V. Hospital for Diabetes",
          desc: "A pioneer in diabetology in India, offering advanced diagnostics, treatment, and diabetic foot care.",
          locations: [
            {
              name: "Royapuram",
              link: "https://maps.app.goo.gl/uSuWZcVaEJXgky4J9",
            },
          ],
        },
        {
          name: "Arka Diabetes Centre",
          desc: "Focuses on patient-centric diabetes care, lifestyle counseling, and complication prevention.",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/NnXRZFPouMs16QCq8",
            },
          ],
        },
      ],
    },
  ];

  const Oncology = [
    {
      category: "Oncology Hospitals in Chennai",
      places: [
        {
          name: "Adyar Cancer Institute (WIA)",
          desc: "One of India’s oldest and most respected cancer institutes offering comprehensive, low-cost treatment and pioneering cancer research.",
          locations: [
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/mifePM1ZHmjLANUZ6",
            },
          ],
        },
        {
          name: "Apollo Proton Cancer Centre",
          desc: "India’s first proton therapy facility and South Asia’s most advanced cancer treatment hub with global oncology standards.",
          locations: [
            {
              name: "Tharamani",
              link: "https://maps.app.goo.gl/fKYu6nEMaHkHVR1r6",
            },
          ],
        },
        {
          name: "MGM Healthcare",
          desc: "A multispeciality hospital with a dedicated oncology unit offering advanced cancer diagnostics, surgery, and targeted therapies.",
          locations: [
            {
              name: "Aminjikarai",
              link: "https://maps.app.goo.gl/xNp9o1wgtRKfrSNb9",
            },
          ],
        },
        {
          name: "VS Hospitals",
          desc: "Specializes in oncology, minimally invasive procedures, and high-end diagnostics.",
          locations: [
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/5YMFsyScTdSHV8cU9",
            },
            {
              name: "Chetpet",
              link: "https://maps.app.goo.gl/J7ZqiBZW8wEkT74c7",
            },
          ],
        },
      ],
    },
  ];

  const ENT = [
    {
      category: "ENT Hospitals in Chennai",
      places: [
        {
          name: "Madras ENT Research Foundation (MERF)",
          desc: "One of India’s most reputed ENT super-speciality centers, offering advanced audiology, cochlear implant programs, and research-driven care.",
          locations: [
            {
              name: "Annamalai Puram",
              link: "https://maps.app.goo.gl/teJgzDhMj2b3L5yDA",
            },
          ],
        },
        {
          name: "K.K.R ENT Hospital & Research Institute",
          desc: "Over 40 years of expertise in ENT care, voice disorders, and allergy treatment.",
          locations: [
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/PJjpknLrWgqpi78cA",
            },
          ],
        },
        {
          name: "Sankalp ENT & Cochlear Implant Clinic",
          desc: "Focused on cochlear implants, ear surgeries, and voice rehabilitation.",
          locations: [
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/kzKrg5UaURWtJN98A",
            },
          ],
        },
        {
          name: "Chennai ENT Research Centre",
          desc: "A trusted name for endoscopic sinus surgery, nasal allergy treatments, and speech therapy.",
          locations: [
            {
              name: "Anna Nagar East",
              link: "https://maps.app.goo.gl/7Wi3aChCqzz2kfgi7",
            },
            {
              name: "Mogappair",
              link: "https://maps.app.goo.gl/ygUx7sq1ZjPeKuWKA",
            },
          ],
        },
      ],
    },
  ];

  const GovernmentHospitals = [
    {
      category: "Government Hospitals",
      places: [
        {
          name: "Rajiv Gandhi Government General Hospital (GH)",
          desc: "One of India’s oldest and largest government hospitals, offering free care across specialties.",
          locations: [
            {
              name: "Chennai Central",
              link: "https://maps.app.goo.gl/qh7mofHDgLHLxiXm6",
            },
          ],
        },
        {
          name: "Stanley Medical College Hospital",
          desc: "Known for plastic surgery, general medicine, and surgical excellence.",
          locations: [
            {
              name: "George Town",
              link: "https://maps.app.goo.gl/uPHeXcggwPMR1mAi7",
            },
            {
              name: "Old Washermanpet",
              link: "https://maps.app.goo.gl/1okY8ctvMreP1Q1LA",
            },
          ],
        },
        {
          name: "Royapettah Government Hospital",
          desc: "Offers quality treatment in cardiology, nephrology, and oncology.",
          locations: [
            {
              name: "Royapeetah",
              link: "https://maps.app.goo.gl/rDqBb1Gof9yrRMQM7",
            },
          ],
        },
        {
          name: "Kilpauk Medical College Hospital (KMC)",
          desc: "Specializes in dermatology, psychiatry, and general medicine.",
          locations: [
            {
              name: "Avadi",
              link: "https://maps.app.goo.gl/vahhtXJc8oaBSn1c9",
            },
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/uARq7wKBE32Hio9g6",
            },
          ],
        },
        {
          name: "Tamil Nadu Government Multi Super Speciality Hospital, Omandurar",
          desc: "Focused on advanced treatments across disciplines.",
          locations: [
            {
              name: "Triplicane",
              link: "https://maps.app.goo.gl/177YfKEo6AFsPMAz9",
            },
          ],
        },
        {
          name: "Government Kasturba Gandhi Hospital for Women and Children",
          desc: "Renowned government hospital offering maternity, neonatal, and pediatric care for women and children across Tamil Nadu.",
          locations: [
            {
              name: "Triplicane",
              link: "https://maps.app.goo.gl/TZ2Z5P3KyYzVsfqt8",
            },
          ],
        },
        {
          name: "Egmore Maternity & Children Hospital (Institute of Child Health and Hospital for Children)",
          desc: "Premier pediatric government institution providing specialized care, child surgeries, and advanced treatments for infants and children.",
          locations: [
            {
              name: "Egmore",
              link: "https://maps.app.goo.gl/JJyLDTaduB5pfSbi8",
            },
          ],
        },
      ],
    },
  ];

  const Diagnostics = [
    {
      category: "Top Diagnostic Labs in Chennai",
      places: [
        {
          name: "Apollo Diagnostics",
          desc: "A trusted name offering pathology, radiology, and wellness testing through a vast network of collection centers.",
          locations: [
            {
              name: "Choolaimedu",
              link: "https://maps.app.goo.gl/NNh7W2aw5pxeWvmTA",
            },
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/7Ww5hrP3nyuMoUq18",
            },
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/tcKzbTAuj7k92a4p6",
            },
            {
              name: "Arumbakkam",
              link: "https://maps.app.goo.gl/wwrZ2H5qnNZuCTBPA",
            },
            {
              name: "Gopalapuram",
              link: "https://maps.app.goo.gl/b3TvDVieUt2jCuEq8",
            },
            {
              name: "Shenoy Nagar",
              link: "https://maps.app.goo.gl/dydRrA4dcZrVAzxp6",
            },
            {
              name: "Puraisaiwakkam",
              link: "https://maps.app.goo.gl/4rpMveFdaTMuECBe6",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/q8N2dY7Zdg866xFq5",
            },
            {
              name: "Saidapet",
              link: "https://maps.app.goo.gl/aQHdoSH4ZtrCJT1D6",
            },
            {
              name: "West Mambalam",
              link: "https://maps.app.goo.gl/ZtKBkzgRf9LKurLGA",
            },
          ],
        },
        {
          name: "Metropolis Healthcare",
          desc: "One of India’s leading chains offering advanced pathology, preventive screening, and specialized diagnostic services.",
          locations: [
            {
              name: "K.K Nagar",
              link: "https://maps.app.goo.gl/LP8Urj3RzrpTvXxz9",
            },
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/Qg6rN4UJskNZ8P6n6",
            },
            {
              name: "West Mambalam",
              link: "https://maps.app.goo.gl/PePTXX1td491oCuS8",
            },
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/EULND3MJQXGpmuti7",
            },
            {
              name: "Ashok Nagar",
              link: "https://maps.app.goo.gl/LsfXpLTMYopWH2vt5",
            },
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/tau2YhX74mc9xHC17",
            },
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/RvxqQvPaM9PWGmoD7",
            },
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/3iGsShiHKz2Dq1Ry9",
            },
            {
              name: "Choolaimedu",
              link: "https://maps.app.goo.gl/mtwz7i6Uk4wKtW9WA",
            },
            {
              name: "Saidapet",
              link: "https://maps.app.goo.gl/48yCyyk6rL4wh5AH7",
            },
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/6yrjvyUxkkygor6H7",
            },
            {
              name: "R A Puram",
              link: "https://maps.app.goo.gl/Yh63y6Q6zjnRgWfQ9",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/v5Y3ts8MRLTbMksu8",
            },
            {
              name: "Valasaravakkam",
              link: "https://maps.app.goo.gl/GQ4FVDPBhKxPZ1d3A",
            },
            {
              name: "Virugambakkam",
              link: "https://maps.app.goo.gl/KUGEJ2FSpAcUdR3s7",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/sHcd8fvBsqB2EZ1Q7",
            },
            {
              name: "Saligramam",
              link: "https://maps.app.goo.gl/LaZst1qNTacPh8qF8",
            },
            {
              name: "Mandaveli",
              link: "https://maps.app.goo.gl/DbytKo2cFLVN7R778",
            },
            {
              name: "Ramapuram",
              link: "https://maps.app.goo.gl/JBi23xSa3yNcSXZf6",
            },
          ],
        },
        {
          name: "Lal PathLabs",
          desc: "Known for accurate reporting and a wide test menu, including COVID-19, thyroid, diabetes, and cancer markers.",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/SAThPWPtmjYVMcH27",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/K36pJXeY985azTCYA",
            },
            {
              name: "Saligramam",
              link: "https://maps.app.goo.gl/a8fe8ahTf8HGdSYp6",
            },
            {
              name: "Shenoy Nagar",
              link: "https://maps.app.goo.gl/LE8KWVfmWw73a1En9",
            },
            {
              name: "Iyyappanthangal",
              link: "https://maps.app.goo.gl/LqnT18W4Fvwhk7ve7",
            },
            {
              name: "Anna Nagar East",
              link: "https://maps.app.goo.gl/RtaGYBGGdoX1sNNV8",
            },
            {
              name: "Kolathur",
              link: "https://maps.app.goo.gl/ZmXpfj7R1mFM3eFg6",
            },
            {
              name: "Mogappair",
              link: "https://maps.app.goo.gl/Layg1fjk8QK7YLYN9",
            },
            {
              name: "Mogappair West",
              link: "https://maps.app.goo.gl/oWaGPJC7FsHMH4mv5",
            },
            {
              name: "Madipakkam",
              link: "https://maps.app.goo.gl/LZqWjZyK66RSE1Kx7",
            },
            {
              name: "Pallavaram",
              link: "https://maps.app.goo.gl/xxQtH2RQdqTGXe2V6",
            },
            {
              name: "Sembakkam",
              link: "https://maps.app.goo.gl/TVLkFJVXCMpRssQr6",
            },
            {
              name: "Semmancheri",
              link: "https://maps.app.goo.gl/pEw7o5VXNi5nRUdp8",
            },
            {
              name: "Urapakkam",
              link: "https://maps.app.goo.gl/Lt6WUySh7mkLvRKU7",
            },
            {
              name: "Mambakkam",
              link: "https://maps.app.goo.gl/5LceZFmZ6eU2XKpt8",
            },
            {
              name: "Tiruvottiyur",
              link: "https://maps.app.goo.gl/S94Wj3Zj5nEJJAEN9",
            },
          ],
        },
        {
          name: "Vijaya Diagnostic Centre",
          desc: "Offers pathology and radiology with a strong local presence and fast turnaround time.",
          locations: [
            {
              name: "Saligramam",
              link: "https://maps.app.goo.gl/gyRerzPgYkFaaUUz6",
            },
            {
              name: "Egmore",
              link: "https://maps.app.goo.gl/LDi11yb966R1mZSg7",
            },
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/DLN7AxzS4hyyos9e7",
            },
            {
              name: "Triplicane",
              link: "https://maps.app.goo.gl/dXJUY33fgh4p5HjC6",
            },
          ],
        },
        {
          name: "Anderson Diagnostics and Labs",
          desc: "Specializes in oncology, fetal medicine, and genetic testing with modern equipment and specialist reporting.",
          locations: [
            {
              name: "Nungambakkam",
              link: "https://maps.app.goo.gl/vyDYq6gJADYEkSax7",
            },
            {
              name: "Purasaiwakkam",
              link: "https://maps.app.goo.gl/sCQDZDvJkdhj8kKp8",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/3obhF3hihNf9H3Pg6",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/NpBgixM5CsLtKpft5",
            },
            {
              name: "Thousand Lights",
              link: "https://maps.app.goo.gl/gE5gmTRCRDbctZBe9",
            },
            {
              name: "Ashok Nagar",
              link: "https://maps.app.goo.gl/BjNR2NN3gY3ekY379",
            },
            {
              name: "West Mambalam",
              link: "https://maps.app.goo.gl/1482KE9yxpZcN41b9",
            },
            {
              name: "Nanganallur",
              link: "https://maps.app.goo.gl/KtnQZ2SabjUoQAgx7",
            },
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/kTAPzWernERmGypM9",
            },
            {
              name: "Mogappair",
              link: "https://maps.app.goo.gl/wyVDh56V91n17DAX9",
            },
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/AkKamX6tqh1yy8b26",
            },
            {
              name: "Mugalivakkam",
              link: "https://maps.app.goo.gl/Srp9u9tBE3he7nSz8",
            },
            {
              name: "Vyasarpadi",
              link: "https://maps.app.goo.gl/jtZQB5AgXSY7DuUn8",
            },
            {
              name: "Korattur",
              link: "https://maps.app.goo.gl/gAbq2bpFHTVbiV7q8",
            },
            {
              name: "Kolathur",
              link: "https://maps.app.goo.gl/8zWC6QvX3knndAZE8",
            },
            {
              name: "Anna Nagar East",
              link: "https://maps.app.goo.gl/whxqYNJhwdvLawgd7",
            },
            {
              name: "Ayappakam",
              link: "https://maps.app.goo.gl/yWDFQnriqu3s2E3c9",
            },
            {
              name: "Sowcarpet",
              link: "https://maps.app.goo.gl/YwL4bUVX3SvwPhq68",
            },
            {
              name: "Kodungaiyur",
              link: "https://maps.app.goo.gl/o5zwdT5GDt5RKQLF9",
            },
            {
              name: "Perambur",
              link: "https://maps.app.goo.gl/YDuqFbA2dBpHhJSA8",
            },
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/UVrp8qo6AXxgTQok6",
            },
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/BFcF9goQSBmYAJjg8",
            },
            {
              name: "West Tambaram",
              link: "https://maps.app.goo.gl/dU7wB5fGT8ar3rCa9",
            },
            {
              name: "Madhavaram",
              link: "https://maps.app.goo.gl/YWtzRq6fwmzoNXTMA",
            },
            {
              name: "Padianallur",
              link: "https://maps.app.goo.gl/uNoLbKe9kDKmFtAp6",
            },
          ],
        },
        {
          name: "Aarthi Scans and Labs",
          desc: "One of India’s largest diagnostic chains offering affordable MRI, CT, ultrasound, and lab tests with NABL/NABH accreditation and robotic automation.",
          locations: [
            {
              name: "Perambur",
              link: "https://maps.app.goo.gl/SrF5WgcpCKH2RemU6",
            },
            {
              name: "Koalthur",
              link: "https://maps.app.goo.gl/pwzo1nxrNgX1eoX38",
            },
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/Hs5reWuNsrYn8iwz8",
            },
            {
              name: "Ambattur",
              link: "https://maps.app.goo.gl/LUa3VRgWKgoCx9n98",
            },
            {
              name: "Avadi",
              link: "https://maps.app.goo.gl/zXzX8LBAEnJVao627",
            },
            {
              name: "Mambalam",
              link: "https://maps.app.goo.gl/AatyWKDBeQ17uKth8",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/JLTxahgQsZ1krMyQA",
            },
            {
              name: "Saidapet",
              link: "https://maps.app.goo.gl/WXmeAimC1mshJF6U7",
            },
            {
              name: "Vyasarpadi",
              link: "https://maps.app.goo.gl/piy4eMZLXgsB7qqX8",
            },
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/yQm9w5DfDMuqpFDJ6",
            },
            {
              name: "Madhavaram",
              link: "https://maps.app.goo.gl/HiNpykjsavh31kWf9",
            },
            {
              name: "Anna Nagar West",
              link: "https://maps.app.goo.gl/HrZhQ5q2ebUBD5Bo9",
            },
            {
              name: "Villivakkam",
              link: "https://maps.app.goo.gl/67CMdY62oBNJYYFG6",
            },
            {
              name: "Muthapudepet",
              link: "https://maps.app.goo.gl/jjG5UCZbccN1ZYNd6",
            },
            {
              name: "Pattabiram",
              link: "https://maps.app.goo.gl/jjG5UCZbccN1ZYNd6",
            },
            {
              name: "Tondiarpet",
              link: "https://maps.app.goo.gl/mKy1aVzabvBafdbq6",
            },
            {
              name: "Kodambakkam",
              link: "https://maps.app.goo.gl/MVPVKe5cavwiD9Sj9",
            },
            {
              name: "Little Mount",
              link: "https://maps.app.goo.gl/WCqRDTGaLa6xAUU99",
            },
            {
              name: "Pammal",
              link: "https://maps.app.goo.gl/1W4pbsqEEHbsBsWk8",
            },
            {
              name: "SIDCO Nagar",
              link: "https://maps.app.goo.gl/KSSGmDv77DJXzLtX8",
            },
            {
              name: "Royapettah",
              link: "https://maps.app.goo.gl/MT4cCqXzAKkkZYPE7",
            },
            {
              name: "Manali",
              link: "https://maps.app.goo.gl/7Rw2hdv8Rv41FJCv9",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/yxH9pnZDRohW7k9r9",
            },
            {
              name: "Arumbakkam",
              link: "https://maps.app.goo.gl/RnNRBdVdvkyoHSSy6",
            },
            {
              name: "Valasaravakkam",
              link: "https://maps.app.goo.gl/Q3nFhibKx2tMJvmy9",
            },
            {
              name: "Maduravoyal",
              link: "https://maps.app.goo.gl/LHWRqh9Ez4ZzrJ1U8",
            },
            {
              name: "Kattupakkam",
              link: "https://maps.app.goo.gl/RxHUU6gYf8z49MAC7",
            },
            {
              name: "Kumananchavadi",
              link: "https://maps.app.goo.gl/ZfZ9NJqzShq5i7AM9",
            },
            {
              name: "Nanganallur",
              link: "https://maps.app.goo.gl/jLWx7fDf3gJpRzwc9",
            },
          ],
        },
        {
          name: "Medall Diagnostics (Medall Scans)",
          desc: "A leading diagnostic service provider across South India offering comprehensive health checkups, imaging, and pathology services with NABL-accredited labs.",
          locations: [
            {
              name: "T. Nagar",
              link: "https://maps.app.goo.gl/rgFNXC8FFtechwyw6",
            },
            {
              name: "Valasaravakkam",
              link: "https://maps.app.goo.gl/1nuA5DnTmVYNiggHA",
            },
            {
              name: "Vadapalani",
              link: "https://maps.app.goo.gl/AuuMfhGr3GSwpQw8A",
            },
            {
              name: "K.K Nagar",
              link: "https://maps.app.goo.gl/NLtCN6cR9EMngtmR7",
            },
            {
              name: "Mettupalayam",
              link: "https://maps.app.goo.gl/jUMXTCMnXWrLUaCUA",
            },
            {
              name: "Nolambhur, Ambattur",
              link: "https://maps.app.goo.gl/Dp9kNx2djgMMKaSG6",
            },
            {
              name: "Nerkundram",
              link: "https://maps.app.goo.gl/eMBsvQZhj3LFG1Un9",
            },
            { name: "Padi", link: "https://maps.app.goo.gl/xahAo8SeTYKM326W9" },
            {
              name: "Adambakkam",
              link: "https://maps.app.goo.gl/pCsbB3U8ERWEoJFR7",
            },
            {
              name: "Alwarpet",
              link: "https://maps.app.goo.gl/gp6zSJpGZc3B6LxC6",
            },
            {
              name: "Adyar",
              link: "https://maps.app.goo.gl/EGbzzqhrrKy3YtjA8",
            },
            {
              name: "Thiruverkadu",
              link: "https://maps.app.goo.gl/RfQoBHkW7rH5AmSKA",
            },
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/HtcJZqBpPoVmLHAz7",
            },
            {
              name: "Villivakkam",
              link: "https://maps.app.goo.gl/Hk6bja2a1dWR4Ctu9",
            },
            {
              name: "Saligramam",
              link: "https://maps.app.goo.gl/vezzws8PepvD7zS5A",
            },
            {
              name: "Kilpauk",
              link: "https://maps.app.goo.gl/mEovSGJ6EuFZHHuj9",
            },
            {
              name: "Poonamallee",
              link: "https://maps.app.goo.gl/obuvNyn5jS7rgrYdA",
            },
            {
              name: "Virugambakkam",
              link: "https://maps.app.goo.gl/PnqJcHhHqpRzAYxw8",
            },
            {
              name: "West Mambalam",
              link: "https://maps.app.goo.gl/X9xACY8kRZoaHUfr8",
            },
            {
              name: "Mylapore",
              link: "https://maps.app.goo.gl/8B3Xh1SxJWhxim2W7",
            },
            {
              name: "Karayanchavadi",
              link: "https://maps.app.goo.gl/k8766czdQWmmKt5K8",
            },
            {
              name: "Anna Nagar West",
              link: "https://maps.app.goo.gl/kXSC6aHvYHx7dXRP7",
            },
            {
              name: "Perambur",
              link: "https://maps.app.goo.gl/9LHMnxVvPpyvcqWF8",
            },
            {
              name: "Porur",
              link: "https://maps.app.goo.gl/VdxzYjbnJRCSrDqj6",
            },
            {
              name: "Mugalivakkam",
              link: "https://maps.app.goo.gl/o2ECk4wFKJDrMyWr6",
            },
            {
              name: "Choolaimedu",
              link: "https://maps.app.goo.gl/JR8nkPBSUXXWfieY9",
            },
            {
              name: "K.K Nagar",
              link: "https://maps.app.goo.gl/PCfQJmw2bBoakLpcA",
            },
            {
              name: "Mogappair East",
              link: "https://maps.app.goo.gl/u5UcyrfDSRY5TbhP8",
            },
            {
              name: "Nanganallur",
              link: "https://maps.app.goo.gl/NXcv22c1eUVf1DfU7",
            },
            {
              name: "New Washermanpet",
              link: "https://maps.app.goo.gl/mJiNqRidztsByTq97",
            },
            {
              name: "Besant Nagar",
              link: "https://maps.app.goo.gl/zWPLFmRFZqo3cdG7A",
            },
            {
              name: "Injambakkam",
              link: "https://maps.app.goo.gl/Ar5QhQP1UDKk4GQx6",
            },
            {
              name: "Neelankarai",
              link: "https://maps.app.goo.gl/D4iYaAXEDGbwR7rQ9",
            },
            {
              name: "Thoraipakkam",
              link: "https://maps.app.goo.gl/ZYnF5GxrGeVddBQU7",
            },
            {
              name: "Periyakuppam",
              link: "https://maps.app.goo.gl/ebxehHc4wehVsA958",
            },
            {
              name: "Old Washermanpet",
              link: "https://maps.app.goo.gl/9BStAzhMtwSU9hgN7",
            },
            {
              name: "Adambakkam",
              link: "https://maps.app.goo.gl/Mf7kpgyJbzrMXxRK8",
            },
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/wgU2KwLHQ6AJqL8cA",
            },
            {
              name: "Chromepet",
              link: "https://maps.app.goo.gl/vDEiKGCXuiGR2ZTu6",
            },
            {
              name: "Nanganallur",
              link: "https://maps.app.goo.gl/ut2MT6VDpQhsKWxY9",
            },
          ],
        },
        {
          name: "Lucid Diagnostics",
          desc: "Focuses on radiology, cardiology, and preventive screening, with patient-friendly infrastructure and digital reporting.",
          locations: [
            {
              name: "Adyar ",
              link: "https://maps.app.goo.gl/MJNqYxexB4CTRGUm6",
            },
          ],
        },
        {
          name: "Primex Scans and Labs",
          desc: "Offers PET scans, 3T MRI, and nuclear medicine diagnostics with a focus on oncology and neurology. ",
          locations: [
            {
              name: "Velachery",
              link: "https://maps.app.goo.gl/XCs6N5NUij7Lidav9",
            },
            {
              name: "Nanganallur ",
              link: "https://maps.app.goo.gl/TdoxUFwbtPoGZJAD6",
            },
          ],
        },
        {
          name: "Scans World",
          desc: " A growing local diagnostic chain offering high-quality imaging services and pathology at competitive prices.",
          locations: [
            {
              name: "Nungambakkam ",
              link: "https://maps.app.goo.gl/T2yTKpiQ6iCGoBNd8",
            },
            {
              name: "Nanganallur  ",
              link: "https://maps.app.goo.gl/Cpo19ooXPPH8cQMCA",
            },
          ],
        },
      ],
    },
  ];

  const DiagnosticLabApps = [
    {
      category: "Top Diagnostic Labs in Chennai",
      places: [
        {
          name: "Apollo 24|7",
          desc: "Book lab tests, doctor consults, and track medical records",
          locations: [
            {
              name: "Link",
              link: "https://play.google.com/store/apps/details?id=com.apollo.patientapp&pcampaignid=web_share",
            },
          ],
        },
        {
          name: "1mg (Tata 1mg)",
          desc: "Compare test packages, order meds, and schedule sample collection",
          locations: [
            {
              name: "Link",
              link: "https://play.google.com/store/apps/details?id=com.aranoah.healthkart.plus&pcampaignid=web_share",
            },
          ],
        },
        {
          name: "Practo",
          desc: "Schedule lab tests, online consults, and receive prescriptions",
          locations: [
            {
              name: "Link",
              link: "https://play.google.com/store/apps/details?id=com.practo.fabric&pcampaignid=web_share",
            },
          ],
        },
        {
          name: "Medibuddy",
          desc: "Corporate tie-ups, preventive checkups, and insurance-supported services",
          locations: [
            {
              name: "Link",
              link: "https://play.google.com/store/apps/details?id=in.medibuddy&pcampaignid=web_share",
            },
          ],
        },
        {
          name: "MFine",
          desc: "Instant consults and integrated lab services",
          locations: [
            {
              name: "Link",
              link: "https://play.google.com/store/apps/details?id=com.mfine&pcampaignid=web_share",
            },
          ],
        },
        {
          name: "Healthians App",
          desc: "Wellness plans and home testing",
          locations: [
            {
              name: "Link",
              link: "https://play.google.com/store/apps/details?id=com.healthians.main.healthians&pcampaignid=web_share",
            },
          ],
        },
        {
          name: "Aarthi Scans App",
          desc: "Easy scan/test booking with reports and payment history",
          locations: [
            {
              name: "Link",
              link: "https://play.google.com/store/apps/details?id=com.betamonks.aarthiscans&pcampaignid=web_share",
            },
          ],
        },
      ],
    },
  ];

  const PanchakarmaandAyurveda = [
    {
      category:
        "Panchakarma & Ayurveda-Based Wellness Retreats in and around Chennai",
      places: [
        {
          name: "Ayurveda Yoga Village",
          desc: "Nestled close to the beach, this retreat combines Panchakarma, yoga, and sattvic diet in a serene coastal setting. Ideal for stress relief, detox, and rejuvenation.",
          locations: [
            {
              name: "Mahabalipuram",
              link: "https://maps.app.goo.gl/1URxUZxUowTQpQRh9",
            },
          ],
        },
        {
          name: "Kerala Ayurvedic Treatment & Massage in Chennai",
          desc: "Authentic Kerala Ayurvedic therapies in Anna Nagar offering holistic healing, detox, stress relief, and rejuvenatio",
          locations: [
            {
              name: "Anna Nagar",
              link: "https://maps.app.goo.gl/e51GStyo7Z8gZHLf6",
            },
          ],
        },
        {
          name: "Ayurveda Healing Ashram",
          desc: "A quiet nature-based center offering deep Panchakarma therapies, detox diets, and healing rituals under experienced Vaidyas.",
          locations: [
            {
              name: "Chengalpattu",
              // link: "",
            },
          ],
        },
        {
          name: "Vaidyashala Ayurvedic Retreat ",
          desc: "A simple but well-reputed retreat for chronic disease treatment and full Panchakarma detox programs tailored to individual constitutions.",
          locations: [
            {
              name: "Thiruvallur",
              // link: "",
            },
          ],
        },
      ],
    },
  ];

  const GovernmentAYUSHHospitals = [
    {
      category: "Government-Run AYUSH Hospitals in Chennai",
      places: [
        {
          name: "National Institute of Siddha (Tambaram Sanatorium)",
          desc: "One of the leading government Siddha institutions offering inpatient and outpatient services in Siddha medicine, including wellness programs.",
          locations: [
            {
              name: "Tambaram",
              link: "https://maps.app.goo.gl/rZ3h4K2Rm2mrqo6J9",
            },
          ],
        },
        {
          name: "Government Ayurveda Medical College & Hospital",
          desc: "Run by the Tamil Nadu government, this hospital provides Ayurvedic consultation, therapies, and inpatient Panchakarma facilities.",
          locations: [
            {
              name: "Arumbakkam",
              link: "https://maps.app.goo.gl/zBZ5bP9JE5khrkwy6",
            },
          ],
        },
        {
          name: "Central Research Institute for Siddha (AYUSH Campus)",
          desc: "A research-based institution offering OPD services and contributing to Siddha medicine advancement with clinical and academic support.",
          locations: [
            {
              name: "Arumbakkam",
              link: "https://maps.app.goo.gl/qxB2unLuRagd89GH8",
            },
          ],
        },
        {
          name: "Regional Research Institute of Yoga & Naturopathy",
          desc: "Provides lifestyle disease management through yoga, naturopathy, and detox therapies with expert practitioners under AYUSH.",
          locations: [
            {
              name: "Chennai",
              link: "https://maps.app.goo.gl/aVx9UjQuEwPohPji9",
            },
          ],
        },
        {
          name: "Government Homeopathy Hospital",
          desc: "Offers outpatient and inpatient services in classical homeopathy for chronic and acute ailments, at subsidized rates.",
          locations: [
            {
              name: "Royapuram",
              link: "https://maps.app.goo.gl/k5AuDQAFUAp56Cxa6",
            },
          ],
        },
      ],
    },
  ];

  const imageSections = [
    {
      sectionTitle: "Special Economic Zones (SEZs)",
      sectionDesc:
        "Special Economic Zones (SEZs)—export-oriented zones with fiscal benefits like duty exemptions, GST zero-rating, and simplified approvals.",
      image: "/images/business permits/special-economic.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Affordability Meets Excellence",
              desc: "What makes Chennai a standout among hospitals in Chennai India is the balance it strikes between high-quality care and affordability. Major procedures cost a fraction of what they do in Western countries. Patients can expect:",
              para: [
                "Transparent pricing",
                "Personalized care",
                "Minimal wait times",
                "Global standards at local prices",
              ],
              imgs: "/images/Live-Images/SubPages/Icons/personalized-health-care.svg",
            },
          ],
        },
      ],
    },
    {
      sectionTitle: "Domestic Tariff Areas (DTAs)",
      sectionDesc:
        "Domestic Tariff Areas (DTAs)—zones where businesses serve the Indian domestic market and operate under standard regulations.",
      image: "/images/business permits/domestic-tariff.jpg",
      tenantInfoSections: [
        {
          points: [
            {
              title: "Medical Tourism in Chennai",
              desc: "As a hotspot for medical tourism in Chennai, the city offers:",
              para: [
                "World-Class Infrastructure: With robotic surgery suites, advanced ICUs, and specialty centers, Chennai leads in medical innovation.",
                "Highly Skilled Professionals: Chennai’s medical talent pool is internationally trained and highly experienced, especially in super specialties.",
                "Shorter Wait Times: Quick admission and treatment processes attract patients from time-sensitive medical scenarios.",
                "Cultural & Linguistic Ease: With English widely spoken and multilingual staff available, patients feel comfortable and understood.",
                "Holistic Healing: Alongside modern medicine, the city also offers recovery through Ayurvedic hospitals in Chennai, yoga, and wellness centers.",
                "Shops & Establishment Act Licence",
                "Easy Connectivity: Chennai is well connected globally via its international airport, making travel for treatment seamless.",
              ],
              imgs: "/images/Live-Images/SubPages/Icons/medical-toursium-in-chennai.svg",
            },
          ],
        },
      ],
    },
  ];

  const images = [
    {
      src: "/images/Visit-Images/SubPages/accomodation-slide.jpg",
      title: "Accommodation",
      link: "/visit/hotel-accommodation-in-chennai",
    },
    {
      src: "/images/Visit-Images/SubPages/food-slide.jpg",
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

  // ######  TIME LINE DATA #########
  const healthcareData = [
    {
      icon: "fa-stethoscope",
      class: "z5-html",
      title: "1800s–1900s: Foundations of Healing",
      points: [
        "1664 – First Western-style hospital in Madras established by the East India Company",
        "1899 – Stanley Medical College begins as a medical school",
        "1935 – Government General Hospital (RGGGH) becomes a landmark public facility",
        "1950s – Kilpauk Medical College and Institute of Child Health open",
      ],
      align: "left",
    },
    {
      icon: "fa-hospital",
      class: "z5-css",
      title: "1980s–1990s: Private Healthcare Rises",
      points: [
        "1983 – Apollo Hospitals launches in Greams Road, redefining private health in India",
        "1994 – Fortis Malar Hospital (then Malar Hospital) starts operations",
        "1995 – VHS Hospital becomes a model for community outreach",
      ],
      align: "right",
    },
    {
      icon: "fa-globe",
      class: "z5-javascript",
      title: "2000s: Medical Tourism Emerges",
      points: [
        "2003 – Chennai recognized as India’s medical tourism capital",
        "2005 – Global Hospitals and SRMC become transplant hubs",
        "2007 – India’s first successful adult-to-adult liver transplant in Chennai",
      ],
      align: "left",
    },
    {
      icon: "fa-dna",
      class: "z5-react",
      title: "2010s: Specialization and Technology",
      points: [
        "2011 – MIOT Hospitals introduces advanced robotic surgery",
        "2013 – Kauvery Hospital expands with focus on cardiac & ortho",
        "2015 – Tamil Nadu government digitizes hospital records under e-health initiatives",
        "2017 – Apollo launches Health City in Vanagaram",
      ],
      align: "right",
    },
    {
      icon: "fa-brain",
      class: "z5-angular",
      title: "2020–2025: AI, Startups & Global Reach",
      points: [
        "2020 – Chennai hosts leading COVID treatment and research centers",
        "2021 – Launch of HealthTech startups in telemedicine, diagnostics, AI (e.g., Medibuddy, Mykare, Orange Health Labs)",
        "2022 – Kauvery Hospital opens in Radial Road with robotic and neuro care focus",
        "2023 – Chennai becomes hub for medical second opinions from India",
        "2024 – Several Chennai hospitals receive international NABH/JCI accreditations",
        "2025 – Integration of AYUSH + modern systems in city-run polyclinics",
      ],
      align: "left",
    },
  ];

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
        <title>Healthcare in Chennai | Super Chennai: Facilities & Services</title>
        <meta name="description" content="Super Chennai offers insights into healthcare in Chennai, covering hospitals, & medical services to help you understand the city’s trusted healthcare system." />
        <link rel="canonical" href="/live/healthcare-in-chennai" />
      </Helmet>
      <div className="chennaiHealthCarePage">
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/health-care-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Health Care</h3>
              <div className="breadCrum">
                <Link to="/."> Home </Link> - <a href="">Health Care</a>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*----------------- Intro Section ----------------*/}
        <div
          className="visitIntroParaSection detailIntro"
          style={{ paddingBottom: "0" }}
        >
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
                Health Care &nbsp; in Chennai &nbsp; Health Care &nbsp; in
                Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3>Healthcare in Chennai: The Medical Hub of India</h3>
              <p>
                Chennai is proudly recognized as the Healthcare Capital of
                India, renowned for its advanced medical systems, skilled
                healthcare professionals, and affordability. From cutting-edge
                surgeries to holistic treatments, the city offers a full
                spectrum of medical services, drawing patients from across the
                country and around the world. In fact, medical tourism in
                Chennai has seen exponential growth over the past decade, making
                it a top choice for global healthcare seekers.
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {/* <h1 className="text-3xl font-bold mb-10 text-center">
            Where & How to Network in Chennai
          </h1> */}
          {/* {Multispeciality.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn">
              <h2 className="text-2xl font-semibold mb-6">
                {section.category}
              </h2>
              <p className="mx-[0] my-[20px] mb-[35px]">
                   {section.categoryParaGraph}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.places.slice(0,6).map((place, idx) => (
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
          ))} */}
          {Multispeciality.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {DentalCare.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {EyeHospitals.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {PaediatricHospitals.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {FertilityHospitals.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {Dermatology.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {Orthopedic.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {Cardiac.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {Diabetic.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {Oncology.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {ENT.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {GovernmentHospitals.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {Diagnostics.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="SplitSectionHealthcare  container max-w-7xl mx-auto px-4 py-4 pb-[50px]">
          {imageSections.map((section, index) => (
            <section
              className={`imgcontent !pt-[40px]      flex flex-wrap justify-center transition-colors duration-300 
            ${index % 2 === 0 ? "" : ""} 
      ${
        index % 3 === 0
          ? "pattern-a"
          : index % 3 === 1
          ? "pattern-b"
          : "pattern-c"
      }`}
              key={index}
            >
              <div className="space-y-6 bg-white  mt-[10px] rounded bottomListIcon w-full">
                {section.tenantInfoSections.map((tenant, i) => (
                  <div key={i}>
                    {tenant.points.map((item, j) => (
                      <div key={j} className="clcboxItemss flex !mb-0 !py-1">
                        <div className="clcboxIImg">
                          <img src={item.imgs} alt={item.title} />
                        </div>
                        <div className="clcboxICont">
                          <h3>{item.title}</h3>
                          <h5>{item.desc}</h5>
                          {/* <ul className="list-disc list-inside text-gray-600 space-y-1">
                            {item.para.map((point, i) => {
                              // Split the point into label and rest if it contains a colon
                              const splitIndex = point.indexOf(":");
                              if (splitIndex !== -1) {
                                const label = point.slice(0, splitIndex + 1);
                                const rest = point.slice(splitIndex + 1);
                                return (
                                  <li key={i}>
                                    <strong>{label}</strong>
                                    {rest}
                                  </li>
                                );
                              }

                              // No colon, return as is
                              return <li key={i}>{point}</li>;
                            })}
                          </ul> */}
                          <ul className="list-disc pl-4">
                            {(showAll1 ? item.para : item.para.slice(0, 4)).map(
                              (point, i) => {
                                const splitIndex = point.indexOf(":");
                                if (splitIndex !== -1) {
                                  const label = point.slice(0, splitIndex + 1);
                                  const rest = point.slice(splitIndex + 1);
                                  return (
                                    <li key={i}>
                                      <strong>{label}</strong>
                                      {rest}
                                    </li>
                                  );
                                }
                                return <li key={i}>{point}</li>;
                              }
                            )}
                          </ul>

                          {item.para.length > 4 && (
                            <button
                              onClick={() => setShowAll1(!showAll1)}
                              className="cursor-pointer mt-4 px-4 py-2 bg-[#7f397e] text-white rounded  duration-300 mx-auto block"
                            >
                              {showAll1 ? "See Less" : "See More"}
                            </button>
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

        <div className="container max-w-7xl mx-auto px-4 py-4  pt-[40px]  pb-[50px] nightlife">
          {DiagnosticLabApps.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {PanchakarmaandAyurveda.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-4 pb-[50px] nightlife">
          {GovernmentAYUSHHospitals.slice(0, 5).map((section, sectionIdx) => {
            const [showAll, setShowAll] = useState(false);
            const sectionRef = useRef(null); // ref to this section

            const visiblePlaces = showAll
              ? section.places
              : section.places.slice(0, 6);

            const handleToggle = () => {
              // If collapsing, scroll to top of section
              if (showAll && sectionRef.current) {
                sectionRef.current.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }

              setShowAll((prev) => !prev);
            };

            return (
              <div key={sectionIdx} ref={sectionRef} className="nightlifesecIn">
                <h2 className="text-2xl font-semibold mb-6">
                  {section.category}
                </h2>
                <p className="mx-0 my-5 mb-9">{section.categoryParaGraph}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <AnimatePresence>
                    {visiblePlaces.map((place, idx) => (
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

                {/* Show More / Show Less Button */}
                {section.places.length > 6 && (
                  <div className="mt-6 text-center">
                    <button
                      onClick={handleToggle}
                      className="px-4 py-2 bg-[#995098] text-white border border-transparent rounded transition duration-300 hover:bg-white hover:text-[#995098] hover:border-[#995098] cursor-pointer font-poppins"
                    >
                      {showAll ? "Show Less" : "Show More"}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* <div className="z5-timeline-wrapper">
          <div className="z5-container">
            <div className="z5-vertical-line"></div>

            {healthcareData.map((item, index) => (
              <div
                key={index}
                className={`z5-box ${
                  item.align === "left" ? "z5-box-left" : "z5-box-right"
                }`}
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                <i className={`fa-solid ${item.icon} ${item.class}`}></i>
                <div className="z5-info">
                  <h2>{item.title}</h2>
                  <ul>
                    {item.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div> */}

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
