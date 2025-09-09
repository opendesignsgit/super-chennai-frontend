import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "../../../assets/Css/CostOfLiving.css";
import "../../../assets/Css/ViewMore.css";
import Becameavolunteer from "../../../Components/BecameAVolunteer";
import Search from "../../../Components/Search";
import InstagramReelsMarquee from "../../../Components/SocialChennai";
import ExpandableList from "../../../Components/cardScroller/ExpandableList";
import VisitSlider from "./VisitSlider";
import { Helmet } from "react-helmet-async";

const detailsections = [
  {
    id: 3,
    title: "Global & Continental Cuisine",
    points: [
      {
        name: "The Flying Elephant (Park Hyatt)",
        description: "Multi-level, multi-cuisine luxury dining",
        subDescription: "",
        locations: [
          {
            label: "Little Mount",
            link: "https://maps.app.goo.gl/wNfRs3sa8PwGxDVc6",
          },
        ],
      },
      {
        name: "Azzuri Bay",
        description: "Mediterranean and Pan-Asian with a rooftop view",
        subDescription: "",
        locations: [
          {
            label: "Adyar",
            link: "https://maps.app.goo.gl/q8sgwJgNkvk3q2ZB7",
          },
        ],
      },
      {
        name: "Wild Garden Café at Amethyst",
        description: "European café ambience with global bites",
        subDescription: "",
        locations: [
          {
            label: "Royapettah",
            link: "https://maps.app.goo.gl/gQKniPMnu8F6nzvEA",
          },
        ],
      },
      {
        name: "Ciclo Café",
        description: "Cycling-themed bistro",
        subDescription: "",
        locations: [
          {
            label: "Kotturpuram",
            link: "https://maps.app.goo.gl/4bMpwNNLLnQPsV7k6",
          },
          {
            label: "Annanagar East",
            link: "https://maps.app.goo.gl/WUtw3ztNoNndD72GA",
          },
          {
            label: "Uthandi",
            link: "https://maps.app.goo.gl/iBcKDHBHG5W9poAp9",
          },
        ],
      },
      {
        name: "Lloyd’s Tea House",
        description: "English-style café",
        subDescription: "",
        locations: [
          {
            label: "Gopalapuram",
            link: "https://maps.app.goo.gl/F1m6rEJ95b2nq3mdA",
          },
        ],
      },
      {
        name: "Za Pizza Cafe",
        description:
          "Authentic Italian pizzas with fresh ingredients, cozy ambiance, perfect for casual bites and quick meals.",
        subDescription: "",
        locations: [
          {
            label: "Nungambakkam ",
            link: "https://maps.app.goo.gl/8vEDvZwaUF8VVQcr8",
          },
        ],
      },
      {
        name: "Tuscana Pizzeria Wallace Garden",
        description:
          "Wood-fired pizzas, classic Italian flavors, vibrant setting, ideal for relaxed dining or late-night cravings.",
        subDescription: "",
        locations: [
          {
            label: "Nungambakkam",
            link: "https://maps.app.goo.gl/Ua2wAbFxsbtxRgwn8",
          },
        ],
      },
      {
        name: "CIRO'S Pizzeria",
        description:
          "Handcrafted pizzas with authentic Italian taste, warm decor, and a lively, casual dining atmosphere.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/n94WauryRKWP2uCC7",
          },
          {
            label: "Kottivakkam",
            link: "https://maps.app.goo.gl/VgX1mMGRVnMnfbsF6",
          },
          {
            label: "Anna Nagar",
            link: "https://maps.app.goo.gl/jVdTzBwz9kYgvzU48",
          },
          {
            label: "Adyar",
            link: "https://maps.app.goo.gl/dzJtSx7iS1wted5D8",
          },
        ],
      },
      {
        name: "Pumpkin Tales Restaurant",
        description:
          "Charming decor, creative Italian and Continental menu, cozy vibe, and a focus on flavorful, fresh dishes.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/QPwbfxadQH2yNTeB6",
          },
        ],
      },
      {
        name: "Lola's Pizzeria",
        description:
          "Casual pizzeria serving cheesy, flavorful pizzas with fresh toppings and vibrant, welcoming interiors.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/RU84uCdRnGAnoSrm6",
          },
        ],
      },
      {
        name: "Nolita",
        description:
          "Trendy Italian restaurant in Chennai, modern cuisine, fresh ingredients, stylish plating, vibrant ambiance, popular dining spot.",
        subDescription: "",
        locations: [
          {
            label: "Nungambakkam",
            link: "https://maps.app.goo.gl/RU84uCdRnGAnoSrm6",
          },
        ],
      },
      {
        name: "The Farm Restaurant",
        description:
          "Organic farm-to-table restaurant in Chennai, fresh ingredients, rustic ambiance, wholesome Italian and Continental dishes.",
        subDescription: "",
        locations: [
          {
            label: "Semmancheri",
            link: "https://maps.app.goo.gl/ookSXujVzYtySdAY8",
          },
        ],
      },
      {
        name: "Little Italy",
        description:
          "Vegetarian Italian restaurant with fresh pizzas, flavorful pastas, inviting interiors, and a peaceful, casual vibe.",
        subDescription: "",
        locations: [
          {
            label: "Anna Nagar",
            link: "https://maps.app.goo.gl/7ccxBfkyA3p5CDZ17",
          },
        ],
      },
      {
        name: "The Fat Boy",
        description:
          "Casual dining restaurant in Chennai, hearty pizzas, gourmet burgers, vibrant ambiance, multiple outlets, comfort food destination.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/GNXHugdrpi5BKH5VA",
          },
          {
            label: "Shenoy Nagar",
            link: "https://maps.app.goo.gl/2KYN3bYvnLgQ7Ad78",
          },
          {
            label: "Besant Nagar",
            link: "https://maps.app.goo.gl/rTLTGj4SXR58CPH37",
          },
        ],
      },
      {
        name: "22 Constanzaa",
        description:
          "A Mediterranean cafe with a lively vibe, serving healthy dishes inspired by flavors from over 22 countries.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/ok9A3sQiUdjASJt29",
          },
        ],
      },
      {
        name: "The Tuscan Table",
        description:
          "An artisanal boulangerie and cafe offering authentic French flavors with a contemporary twist.",
        subDescription: "",
        locations: [
          {
            label: "RA Puram",
            link: "https://maps.app.goo.gl/wVDngAoj4gLMeBaV9",
          },
        ],
      },
    ],
  },
  {
    id: 4,
    title: "Asian Cuisine",
    points: [
      {
        name: "Soy Soi",
        description: "Southeast Asian street-style dishes",
        subDescription: "",
        locations: [
          {
            label: "Royapettah",
            link: "https://maps.app.goo.gl/FtBBNvQxvkG6vDAv8",
          },
        ],
      },
      {
        name: "Benjarong",
        description: "Elegant Thai dining",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/DmpvYVkTnWpMjd2T7",
          },
        ],
      },
      {
        name: "Teppan",
        description: "Japanese grill and sushi bar",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/1Zkfc8PKvzk38bRXA",
          },
        ],
      },
      {
        name: "Va Pho",
        description: "Youthful Pan-Asian diner",
        subDescription: "",
        locations: [
          {
            label: "Anna Nagar",
            link: "https://maps.app.goo.gl/vaUtK5Zr62FPS9C87",
          },
        ],
      },
      {
        name: "Mandarin Chinese Restaurant",
        description: "Classic Chinese comfort food",
        subDescription: "",
        locations: [
          {
            label: "Gopalapuram",
            link: "https://maps.app.goo.gl/EfwGbvTNXaG1JYCt9",
          },
          {
            label: "Nandanam",
            link: "https://maps.app.goo.gl/XWr1FJRRf6ZxLis38",
          },
        ],
      },
    ],
  },
  {
    id: 5,
    title: "Cafés & Casual Bites",
    points: [
      {
        name: "Chamiers Café",
        description: "Boutique café with breakfast and retail space",
        subDescription: "",
        locations: [
          {
            label: "R.A. Puram",
            link: "https://maps.app.goo.gl/WLe2hsN3uUji1sXB8",
          },
        ],
      },
      {
        name: "Writer’s Café",
        description: "Cozy space for books, coffee, and conversations",
        subDescription: "",
        locations: [
          {
            label: "Gopalapuram",
            link: "https://maps.app.goo.gl/hWAQBfsNcM6Boyep7",
          },
          {
            label: "Tharamani",
            link: "https://maps.app.goo.gl/boE9m7Jjpa7EtReF9",
          },
          {
            label: "Adyar",
            link: "https://maps.app.goo.gl/2DgNBvcb7vs9jjh36",
          },
          {
            label: "Anna Nagar",
            link: "https://maps.app.goo.gl/FemqQRRvEQH9X1fP8",
          },
        ],
      },
      {
        name: "The Brew Room",
        description: "Artisanal coffee and brunch in a garden setting",
        subDescription: "",
        locations: [
          {
            label: "Mylapore",
            link: "https://maps.app.goo.gl/3wQ2wRM2Rs9u9Tni6",
          },
        ],
      },
      {
        name: "Ashvita Bistro",
        description: "Hidden gem with a homely feel",
        subDescription: "",
        locations: [
          {
            label: "R.A. Puram",
            link: "https://maps.app.goo.gl/PGStCCngBZhgRbDr9",
          },
        ],
      },
      {
        name: "Gusto Café",
        description: "Vegan and health-forward options",
        subDescription: "",
        locations: [
          {
            label: "Besant Nagar",
            link: "#",
          },
        ],
      },
      {
        name: "Pause Dessert Cart",
        description:
          "Popular dessert pushcart in Chennai, serving burnt cheesecake, milk cake, tiramisu, a must-visit for dessert lovers.",
        subDescription: "",
        locations: [
          {
            label: "Anna Nagar East",
            link: "https://maps.app.goo.gl/sNM4HLoqxJb2e2t98",
          },
        ],
      },
      {
        name: "Jonah's Bistro",
        description:
          "Cozy bistro offering fresh, flavorful meals, artisanal coffee, light bites, and a relaxed, inviting atmosphere.",
        subDescription: "",
        locations: [
          {
            label: "Besant Nagar",
            link: "https://maps.app.goo.gl/yvbmPBP2bwHBqDNy9",
          },
        ],
      },
      {
        name: "BTS Bistro",
        description:
          "Charming bistro with a variety of light meals, fresh pastries, coffee, and friendly ambiance.",
        subDescription: "",
        locations: [
          {
            label: "Porur",
            link: "https://maps.app.goo.gl/SqABUiJEfnGQiwdb8",
          },
        ],
      },
      {
        name: "Lyfe By Soul Garden Bistro",
        description:
          "Organic-inspired bistro offering healthy meals, fresh beverages, and a peaceful, green, cozy dining experience.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/mvJ2aXrFMTC5DXiv5",
          },
        ],
      },
      {
        name: "Sage & Lavender",
        description:
          "Elegant bistro with artisanal dishes, fresh ingredients, desserts, and a calm, cozy environment.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/AYnZPXWQJZn6bbVA9",
          },
        ],
      },
      {
        name: "DOU",
        description:
          "A place where elegant decor and efficient service come together, offering refreshing drinks and a relaxing, inviting ambiance.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/siwCa3TyKWrFnz1z5",
          },
          {
            label: "Nungambakkam ",
            link: "https://maps.app.goo.gl/rwUv1BqQ3fDNHSgy5",
          },
        ],
      },
      {
        name: "Eko - Lyee Cafe",
        description:
          "A mindful bistro offering nourishing, plant-forward dishes crafted from wholesome ingredients to rejuvenate both body and spirit. ",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/k8L6WrzeRuMTwvNR7",
          },
        ],
      },
      {
        name: "Go Native",
        description:
          "A sustainable lifestyle brand blending mindful living with modern style, offering farm-to-table dining experiences and eco-conscious products for a greener, healthier lifestyle",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/HSrzNeTj8MgLz9Di9",
          },
        ],
      },
      {
        name: "Go Native",
        description:
          "A sustainable lifestyle brand blending mindful living with modern style, offering farm-to-table dining experiences and eco-conscious products for a greener, healthier lifestyle",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/HSrzNeTj8MgLz9Di9",
          },
        ],
      },
      {
        name: "Kup Budan House",
        description:
          "A modern culinary space combining fresh flavors with hand-crafted coffee in a stylish ambiance.",
        subDescription: "",
        locations: [
          {
            label: "Alwarpet",
            link: "https://maps.app.goo.gl/GXMUfCMAK8ZP6JHBA",
          },
        ],
      },
      {
        name: "Les Amis",
        description:
          "Exceptional dining and desserts await—enjoy dark chocolate coffee, strawberry galette, waffles, cheesecake, and creamy gelato in a perfect atmosphere.",
        subDescription: "",
        locations: [
          {
            label: "RA Puram",
            link: "https://maps.app.goo.gl/T8FGLgjZzvHfWRcQ8",
          },
        ],
      },
    ],
  },
  {
    id: 6,
    title: "Beachside & Rooftop Dining",
    points: [
      {
        name: "Upper Deck (Vivanta Fisherman’s Cove)",
        description: "Coastal fine dining by the sea",
        subDescription: "",
        locations: [
          {
            label: "Covelong",
            link: "https://maps.app.goo.gl/rCUBBFp27nLfMgmq8",
          },
        ],
      },
      {
        name: "Bay View (Taj Fisherman’s Cove)",
        description: "Romantic oceanfront seafood experience",
        subDescription: "",
        locations: [
          {
            label: "Covelong",
            link: "https://maps.app.goo.gl/1i4VYDVD8eVfNWcq5",
          },
        ],
      },
      {
        name: "KooX – Rooftop Asian Grill",
        description: "Luxe rooftop dining at Novotel",
        subDescription: "",
        locations: [
          {
            label: "Nandanam",
            link: "https://maps.app.goo.gl/5tcTDKHj6jT3D7qG7",
          },
        ],
      },
      {
        name: "Skyloft (Feathers Hotel)",
        description: "Panoramic views with curated menus",
        subDescription: "",
        locations: [
          {
            label: "Manapakkam",
            link: "https://g.co/kgs/VYfqoKe",
          },
        ],
      },
      {
        name: "BOATS (Besant Nagar)",
        description: "Chill beachside bistro and bar",
        subDescription: "",
        locations: [
          {
            label: "Besant Nagar",
            link: "https://g.co/kgs/weswdVA",
          },
          {
            label: "Velachery",
            link: "https://maps.app.goo.gl/RV4U36tph86NLkaN9",
          },
        ],
      },
      {
        name: "Crust & Co",
        description:
          "Popular beachside restaurant in Chennai, serving artisanal cakes, desserts, and light meals in a cozy ambiance.",
        subDescription: "",
        locations: [
          {
            label: "Neelankarai ",
            link: "https://maps.app.goo.gl/4YVqCdzVsnMia73V8",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    title: "South Indian Classics",
    points: [
      {
        name: "Ratna Café",
        description: "Iconic sambar idli",
        subDescription:
          "Ratna Café is known for its piping hot sambar generously poured over soft idlis.",
        locations: [
          {
            label: "Triplicane",
            link: "https://maps.app.goo.gl/jsKFfhTUAN2PStpe6",
          },
          {
            label: "Adyar",
            link: "https://maps.app.goo.gl/8Z4uxB6LtDsRXsw59",
          },
          {
            label: "Mylapore",
            link: "https://maps.app.goo.gl/BSX5Keo8yVGYpYrt9",
          },
          {
            label: "Kilpauk",
            link: "https://maps.app.goo.gl/G9RoTXizjG8xDnGx8",
          },
        ],
      },

      //########### MURUGAN IDLY KADAI ##########################
      {
        name: "Murugan Idli Shop",
        description: "Famous for soft idlis and podi dosas",
        subDescription: "",
        website: "https://muruganidlishop.com/",
        locations: [
          {
            label: "Velachery",
            link: "https://maps.app.goo.gl/ZcNSxB2Gq5t7rUfH9",
          },
          {
            label: "Besant Nagar",
            link: "https://maps.app.goo.gl/SztqnP2ProHiX18cA",
          },
          {
            label: "T. Nagar",
            link: "https://maps.app.goo.gl/fbEXawSoEeBrsrrU8",
          },
          {
            label: "West Mambalam",
            link: "https://maps.app.goo.gl/UxaLQwHeJ26cRDZV9",
          },
          {
            label: "Anna Nagar",
            link: "https://maps.app.goo.gl/XLj5mhfewyWSwgZq8",
          },
          {
            label: "Nanganallur",
            link: "https://maps.app.goo.gl/tTceYi9AzKxuwXi6A",
          },
          {
            label: "Parry's Corner",
            link: "https://maps.app.goo.gl/UPUE7ZCksxFmHhC39",
          },
          {
            label: "Porur",
            link: "https://maps.app.goo.gl/xiRbzP8hhJwd7YVN9",
          },
          {
            label: "Mogappair West",
            link: "https://maps.app.goo.gl/cgUtQis892wwcxoQA",
          },
          {
            label: "Mylapore",
            link: "https://maps.app.goo.gl/oTk7N4rreywFFCMYA",
          },
          {
            label: "Meenambakkam",
            link: "https://maps.app.goo.gl/dkT3AC6Hg6kNmuMH9",
          },
        ],
      },

      //###################### Sangeetha Veg Restaurant########################
      {
        name: "Sangeetha Veg Restaurant",
        description: "A family favorite across multiple locations",
        subDescription: "",
        website: "https://www.sangeethaveg.com/",
        locations: [
          {
            label: "R.A. Puram",
            link: "https://maps.app.goo.gl/3PzDKHPM1VeUuYxb9",
          },
          {
            label: "Ramapuram",
            link: "https://maps.app.goo.gl/SfFrqcBsUkwmMNF36",
          },
          {
            label: "Adyar",
            link: "https://maps.app.goo.gl/5MhUqZRtxRYoVzTx6",
          },
          {
            label: "T. Nagar",
            link: "https://maps.app.goo.gl/swGCkCfxB7DfkG8x6",
          },
          {
            label: "Mandavelipakkam",
            link: "https://maps.app.goo.gl/ESVGQ8NxLHkQ4LWL9",
          },
          {
            label: "Thousand Lights",
            link: "https://maps.app.goo.gl/W9qU5Bk912GADzgL8",
          },
          {
            label: "Egmore",
            link: "https://maps.app.goo.gl/PU3EGFHeaE3Ra1qV8",
          },
          {
            label: "Koyambedu",
            link: "https://maps.app.goo.gl/hDmWq3r5UoWmdCAw7",
          },
          {
            label: "Parry's Corner",
            link: "https://maps.app.goo.gl/hxybAHf6oBGBWiSS9",
          },
          {
            label: "Jafferkhanpet",
            link: "https://maps.app.goo.gl/BLpPFp1xqVQSbL4L6",
          },
          {
            label: "Kovilambakkam",
            link: "https://maps.app.goo.gl/hVNttJ4vo5GR3s976",
          },
          {
            label: "Medavakkam",
            link: "https://maps.app.goo.gl/gZWwtr4Qq7BCvRqZA",
          },
          {
            label: "Perungalathur",
            link: "https://maps.app.goo.gl/tVfzqaFWv5SRufBR7",
          },
          {
            label: "Urapakkam",
            link: "https://maps.app.goo.gl/n2voRkVJpiztAycs5",
          },
          {
            label: "Guindy",
            link: "https://maps.app.goo.gl/tLDiENXoHsorAf1n7",
          },
          {
            label: "Anna Nagar",
            link: "https://maps.app.goo.gl/PevsqiXgXagwAuxf6",
          },
          {
            label: "Thirumazhisai",
            link: "https://maps.app.goo.gl/NBNVnGsYJf3HqtRR9",
          },
          {
            label: "Kattupakkam",
            link: "https://maps.app.goo.gl/poWyUf64f4kvkjwh8",
          },
        ],
      },

      {
        name: "Rayar’s Mess",
        description: "Hole-in-the-wall tiffin spot",
        subDescription: "",
        locations: [
          {
            label: "Mylapore",
            link: "https://maps.app.goo.gl/E4UbeoFDMSWYTyQj8",
          },
        ],
      },
      {
        name: "ID (Sathyam Cinemas & Phoenix Mall)",
        description: "Contemporary take on classic tiffin",
        subDescription: "",
        locations: [
          {
            label: "Royapettah",
            link: "https://maps.app.goo.gl/H87AGauj5oT5rtpF9",
          },
          {
            label: "Vadapalani",
            link: "https://maps.app.goo.gl/2kUsHrXR9R35k3KU7",
          },
          {
            label: "Kilpauk ",
            link: "https://maps.app.goo.gl/tdoWidZqKV67FUzJA",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    title: "North Indian & Multi-cuisine",
    points: [
      {
        name: "Annalakshmi",
        description: "Upscale vegetarian buffet",
        subDescription: "",
        locations: [
          {
            label: "Chetpet",
            link: "https://maps.app.goo.gl/3GsgzTe4EC5PSuUC7",
          },
          {
            label: "West Mambalam",
            link: "https://maps.app.goo.gl/kmgf5aq8WoxM4bZK6",
          },
          {
            label: "Chetpet",
            link: "https://maps.app.goo.gl/H9Cxjj4s3pfQMHzu7",
          },
          {
            label: "Nungambakkam",
            link: "https://maps.app.goo.gl/4WMFrtTwnqfgcjsF9",
          },
          {
            label: "West Mambalam",
            link: "https://maps.app.goo.gl/hPmcAC3dMSTZkxcu9",
          },
          {
            label: "Thousand Lights",
            link: "https://maps.app.goo.gl/sv6LoH5F5PJPP6ny6",
          },
          {
            label: "Teynampet",
            link: "https://maps.app.goo.gl/SeKh9whnSYTUjzSM6",
          },
          {
            label: "Chetpet",
            link: "https://maps.app.goo.gl/9THW5BcrBYd2iVP38",
          },
          {
            label: "Maduravoyal",
            link: "https://maps.app.goo.gl/BimPn9GJ3Xj2dxvw7",
          },
          {
            label: "Park Town",
            link: "https://maps.app.goo.gl/XHQR1HYFbSMKMkaJ6",
          },
          {
            label: "Nanganallur",
            link: "https://maps.app.goo.gl/u3fx1TbJNehHouDF7",
          },
          {
            label: "Adyar",
            link: "https://maps.app.goo.gl/jB29gZmSHT4qRX5i8",
          },
        ],
      },
      {
        name: "Copper Chimney",
        description: "Classic North Indian fare",
        subDescription: "",
        locations: [
          {
            label: "Gopalapuram",
            link: "https://maps.app.goo.gl/5Acuf6X7t8DL6f4V9",
          },
          {
            label: "Velachery",
            link: "https://maps.app.goo.gl/ZvSt9TVDRvGa3J5C7",
          },
          {
            label: "Nungambakkam",
            link: "https://maps.app.goo.gl/9xWupaQWi6cYQsMd8",
          },
          {
            label: "Kotturpuram",
            link: "https://maps.app.goo.gl/dW6bShkXJxj1Hn7d9",
          },
          {
            label: "Meenambakkam",
            link: "https://maps.app.goo.gl/35x2ovcByXR8MK2k8",
          },
        ],
      },
      {
        name: "Sigree Global Grill",
        description: "Popular for buffets and group dining",
        subDescription: "",
        locations: [
          {
            label: "Anna Nagar",
            link: "https://maps.app.goo.gl/hLifSRKyLYBn7hf29",
          },
          {
            label: "Teynampet",
            link: "https://maps.app.goo.gl/eghKUSpRJnoDKKSr9",
          },
          {
            label: "Nungambakkam",
            link: "https://maps.app.goo.gl/7B6HYsEZ8RJ3YLBeA",
          },
          {
            label: "Thoraipakkam",
            link: "https://maps.app.goo.gl/Q9ePgqW8Z3idoRFx7",
          },
          {
            label: "Iyyappanthangal",
            link: "https://maps.app.goo.gl/mFParTngVj2z3YNx6",
          },
          {
            label: "Semmanjeri",
            link: "https://maps.app.goo.gl/XEsMHrBSMvXPZhr98",
          },
        ],
      },
      {
        name: "Pind",
        description: "Punjabi comfort food",
        subDescription: "",
        locations: [
          {
            label: "Semmenchery",
            link: "https://maps.app.goo.gl/zgKxrGNkWrSDAXg66",
          },
        ],
      },
      {
        name: "Bombay Brasserie",
        description: "Indian fusion in a chic setting",
        subDescription: "",
        locations: [
          {
            label: "Nungambakkam",
            link: "https://maps.app.goo.gl/Hprz1DZyT8mckU6d7",
          },
          {
            label: "Adyar",
            link: "https://maps.app.goo.gl/e2bXFuw9MXa9rx6s6",
          },
        ],
      },
      {
        name: "Vintage Madras Restaurant",
        description:
          "Savor North & South Indian cuisines served on a mini moving metro in a nostalgic, fun-themed setting.",
        subDescription: "",
        locations: [
          {
            label: "Ashok Nagar",
            link: "https://maps.app.goo.gl/zqNDjxbf6e4nYkp1A",
          },
        ],
      },
    ],
  },
];

export default function Restaurants() {
  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  console.log(detailsections.points);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <>
      <Helmet>
        <title>Restaurants in Chennai | Food in Chennai</title>
        <meta
          name="description"
          content="Experience the best restaurants in Chennai with rich non-vegetarian and vegetarian foods, trendy cafés & global cuisines that make every meal unforgettable"
        />
        <link rel="canonical" href="/visit/restaurants-in-chennai" />
      </Helmet>
      <div>
        {/*----------------- Banner ----------------*/}
        <div className="accaodomationBannerSection">
          <img src="/images/restaurants-banner.jpg" alt="" />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3> Restaurants in Chennai</h3>
              <div className="breadCrum">
                <Link to="/visit-chennai">Visit </Link> -{" "}
                <a href=""> Restaurants in Chennai </a>
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
                Restaurants &nbsp; in Chennai &nbsp; Restaurants &nbsp; in
                Chennai
              </p>
            </div>
            <div className="workIntro">
              <h3> A City of Flavour — One Plate at a Time</h3>
              <p>
                Chennai’s restaurant scene is a rich tapestry of tradition and
                innovation — offering everything from age-old South Indian
                staples to experimental global cuisine. Whether you're in the
                mood for a beachside breakfast, rooftop fine dining, or comfort
                food at midnight, the city delivers a wide spectrum of culinary
                experiences. With strong vegetarian roots, a growing café
                culture, and an appetite for international trends, Chennai is
                where every meal tells a story
              </p>
            </div>
          </div>
        </div>

        <div className="container max-w-7xl mx-auto px-4 py-8 nightlife">
          <h1 className="text-3xl font-bold mb-10 text-center">
            Notable Restaurants in Chennai
          </h1>

          {detailsections.map((section, sectionIdx) => (
            <div key={sectionIdx} className="nightlifesecIn mb-10">
              <h2 className="text-2xl font-semibold mb-6">{section.title}</h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.points.map((point, idx) => (
                  <div
                    key={idx}
                    className="card p-5 border rounded-2xl shadow hover:shadow-lg transition bg-white"
                  >
                    <h3 className="text-xl font-semibold mb-2">{point.name}</h3>
                    <p className="text-gray-700 mb-2">{point.description}</p>

                    {point.subDescription && (
                      <p className="text-gray-500 text-sm mb-3">
                        {point.subDescription}
                      </p>
                    )}

                    {point.locations?.length > 0 && (
                      <ExpandableList items={point.locations} maxVisible={3} />
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
