import { useState, useEffect, useRef } from "react";
import "../../../../assets/Css/CostOfLiving.css";
import Search from "../../../../Components/Search";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import InstagramReelsMarquee from "../../../../Components/SocialChennai";
import Becameavolunteer from "../../../../Components/BecameAVolunteer";
import VisitSlider from "../VisitSlider";
import { Helmet } from "react-helmet-async";
// ################## DUMMY CONTENTS ###################################
// const imageSections = [
//   {
//     tenantInfoSections: [
//       {
//         points: [
//           {
//             title: "Marina Beach",
//             para: [
//               "The Icon: One of the longest urban beaches in the world",
//               "What to Expect: Sunrise views, local snacks (sundal, molaga bajji), kite flying, art installations",
//               "Great for: Long walks, family outings, and historic sites like the lighthouse and Gandhi statue",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/marina-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Elliot's Beach (Besant Nagar)",
//             para: [
//               "The Chill Spot: Quieter and more relaxed than Marina",
//               "What to Expect: Seaside cafés, clean sands, yoga groups, pet-friendly vibes",
//               "Great for: Sunset dates, coffee after a walk, or weekend brunch at nearby cafés",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Thiruvanmiyur Beach",
//             para: [
//               "The Local Favorite: Less crowded, often used by early risers and fitness groups",
//               "What to Expect: Peaceful environment, morning joggers, occasional volleyball games",
//               "Great for: Meditation, fitness routines, or reading with the sound of waves",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/thiruvanmayur.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Palavakkam Beach",
//             para: [
//               "The Scenic Escape: Off the main radar, ideal for solitude",
//               "What to Expect: Fewer crowds, stunning early morning light, fishing boats",
//               "Great for: Photography, journaling, or quiet walks",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/palavakkam-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Neelankarai Beach",
//             para: [
//               "The Coastal Retreat: Surrounded by upscale residential areas and beach houses",
//               "What to Expect: Wide-open spaces, coastal breeze, occasional horseback rides",
//               "Great for: Group picnics, weekend stays, or scenic drives along ECR",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/neelankarai-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Covelong (Kovalam) Beach",
//             para: [
//               "The Adventure Beach: Located along the East Coast Road, just outside city limits",
//               "What to Expect: Surfing schools, seafood stalls, wellness resorts",
//               "Great for: Surfing lessons, road trips, or a beach day with a twist",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/covelong-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "JUHU Beach (Uthandi)",
//             para: [
//               "The Peaceful Shore: Calm and lesser-known stretch",
//               "What to Expect: Local fishing activity, spacious sands",
//               "Great for: Quiet sunsets, long drives, or couple strolls",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/juhu-beach-(uthandi).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Akkarai Beach",
//             para: [
//               "The Family Getaway: Clean and tidy beach stretch",
//               "What to Expect: Wide coast, relaxed ambience",
//               "Great for: Evening family walks and group games",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches//akkarai-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Injambakkam Beach",
//             para: [
//               "The Quiet Spot: Close to Cholamandal Artists Village",
//               "What to Expect: Artsy community nearby, quiet breeze",
//               "Great for: Artistic inspiration, contemplation",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/injambakkam-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Kottivakkam Beach",
//             para: [
//               "The Untouched Zone: Simple, natural, and local",
//               "What to Expect: Fewer tourists, more locals",
//               "Great for: Locals' routine, beach cricket",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/kottivakkam-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Kasimedu Beach",
//             para: [
//               "The Fishermen's Hub: Bustling harbor and fish market zone",
//               "What to Expect: Fresh catches, boats, and local seafood",
//               "Great for: Photography, early morning visits, seafood lovers",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Kasimedu Rock Beach",
//             para: [
//               "The Rocky Trail: Rugged edge along the sea",
//               "What to Expect: Crashing waves, strong winds, stone paths",
//               "Great for: Quiet contemplation, sunrise watching",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Olive Beach",
//             para: [
//               "The Hidden Stretch: Calm and lesser-known shore",
//               "What to Expect: Secluded sand, few visitors",
//               "Great for: Solitude, short getaways",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/olive-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Panaiyur Beach",
//             para: [
//               "The Gated Escape: Popular among private beach house owners",
//               "What to Expect: Clean shores, private access",
//               "Great for: Private events, Airbnb stays",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/panaiyur-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Blue Beach (Neelankarai)",
//             para: [
//               "The Residential Retreat: Close-knit, clean, and well-maintained",
//               "What to Expect: Quiet, secure, minimal crowd",
//               "Great for: Family outings, peaceful strolls",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/blue-beach-(neelankarai).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Copper Beach (Panaiyur)",
//             para: [
//               "The Serene Strip: Scenic with golden sands",
//               "What to Expect: Open coastline, beach joggers",
//               "Great for: Fitness, leisure walks",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/copper-beach-(panaiyur).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Gandhi Beach (Lighthouse stretch)",
//             para: [
//               "The Historic Patch: Near lighthouse and Gandhi statue",
//               "What to Expect: Cultural spots, statues, vendors",
//               "Great for: Evening hangouts, sightseeing",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/gandhi-beach-(lighthouse-side).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "RTO Beach (Valmiki Nagar)",
//             para: [
//               "The Breezy Corner: Often overlooked by tourists",
//               "What to Expect: Light breeze, parked boats",
//               "Great for: Early morning walking",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/rto-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Wooden Road Sea Sand Beach",
//             para: [
//               "The Instagram Spot: Wooden walkway with sea views",
//               "What to Expect: Walkable deck, sea breeze",
//               "Great for: Quick reels, photography",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/wooden-road-sea-sand-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Vettuvankeni Olive Beach",
//             para: [
//               "The Calm Curve: Adjacent to villas and resorts",
//               "What to Expect: Neat, limited public entry",
//               "Great for: Group outings, peaceful breaks",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/vettuvankeni-olive-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Bharathiyar Nagar Beach (Ennore)",
//             para: [
//               "The Northern Peace: Quiet zone past city center",
//               "What to Expect: Clean, local presence",
//               "Great for: Relaxing, morning runs",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/bharathiyar-nagar-beach-(ennore).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Jagannath Beach (Kanathur)",
//             para: [
//               "The Temple Backdrop: Scenic setting near ISKCON temple",
//               "What to Expect: Calm tide, spiritual vibe",
//               "Great for: Pilgrim strolls, mindful breaks",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/jagannath-beach-(kanathur).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Karikattukuppam Beach",
//             para: [
//               "The Rustic Line: Edged with casuarina trees",
//               "What to Expect: Sand dunes, few locals",
//               "Great for: Nature lovers, sketching",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/karikatukuppam-beach-(muthukadu).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Kanathur Beach",
//             para: [
//               "The Minimalist Shore: Simple and open",
//               "What to Expect: Fewer people, breezy spaces",
//               "Great for: Evening walks, low-key beach time",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/kanathur-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Market Lane Beach (Tondiarpet)",
//             para: [
//               "The Working Beach: Closer to urban bustle",
//               "What to Expect: Locals, sea-facing lanes",
//               "Great for: Exploring Chennai's diversity",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/market-lane-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "N4 Beach (Tondiarpet)",
//             para: [
//               "The Community Spot: Friendly and vibrant",
//               "What to Expect: Residents, street food stalls",
//               "Great for: Local feel, budget food",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Chinnakuppam Beach (Ennore)",
//             para: [
//               "The Quiet North: Tucked away in industrial stretch",
//               "What to Expect: Low footfall, breeze",
//               "Great for: Peace, occasional fishing sights",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/chinnakuppam-beach-(ennore).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Thazankuppam Breakwater Beach",
//             para: [
//               "The Windy Edge: Breakwater rocks and high waves",
//               "What to Expect: Strong sea winds, vast view",
//               "Great for: Watching waves crash",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/thazankuppam-breakwater-beach-view-(ennore).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Nettukuppam Beach",
//             para: [
//               "The Northernmost Point: Where the city ends",
//               "What to Expect: Peaceful, distant view of Ennore Port",
//               "Great for: Sunsets, couples",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/nettukuppam-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Ennore Beach Spot",
//             para: [
//               "The Local Favorite: Well known among Ennore folks",
//               "What to Expect: Day picnics, school groups",
//               "Great for: Community gatherings",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/ennore-beach-spot.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Nochikuppam Beach (Santhome)",
//             para: [
//               "The Inner City Beach: Nestled behind the bustling city",
//               "What to Expect: Local fishermen, colorful boats",
//               "Great for: Capturing local life, sunrise walks",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/nochikuppam-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Uthandi Beach",
//             para: [
//               "The Breezy Bay: Calm and less crowded",
//               "What to Expect: Clean stretch, gated homes",
//               "Great for: Private beach stays, long drives",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/juhu-beach-(uthandi).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Enfour Beach (Tondiarpet)",
//             para: [
//               "The Fishing Hamlet: A neighborhood beach",
//               "What to Expect: Boats, nets, simple vibe",
//               "Great for: Understanding fishing culture",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Pallava Beach",
//             para: [
//               "The Peaceful Nook: Subtle charm and open space",
//               "What to Expect: Quiet coast, peaceful evening breeze",
//               "Great for: Couples, peaceful meditations",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/pallava-beach-(mahabalipuram-stretch).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Rock View Point (Kovalam)",
//             para: [
//               "The Sea Cliff Point: Slight elevation by the water",
//               "What to Expect: Beautiful views, occasional fishers",
//               "Great for: Scenic breaks, cliffside photography",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/rock-view-point-–-kovalam-rivermouth.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Panaiyur Beach (ECR)",
//             para: [
//               "The Stylish Shore: Attracts beach villa seekers",
//               "What to Expect: Quiet, private access areas",
//               "Great for: Airbnb stays, brunch spots nearby",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/panaiyur-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Gandhi Beach (Marina Walk)",
//             para: [
//               "The Cultural Strip: Close to statues and lighthouse",
//               "What to Expect: Tourists, college crowd",
//               "Great for: Evening snacks, city views",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/marina-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Chennai Elliot Beach",
//             para: [
//               "The Youth Hub: Vibe-filled and always active",
//               "What to Expect: Bikes, food stalls, street lights",
//               "Great for: Friend groups, night strolls",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Sun Rise Point (Elliots Beach)",
//             para: [
//               "The Early Bird Spot: Best view for sunrise lovers",
//               "What to Expect: Golden light, peaceful shore",
//               "Great for: Early yoga, solo thinking time",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
//           },
//         ],
//       },

//       {
//         points: [
//           {
//             title: "N8 Beach (Tiruvottiyur)",
//             para: [
//               "The Narrow Lane Beach: Compact and local",
//               "What to Expect: Residential view, fewer tourists",
//               "Great for: Alone time, early mornings",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/n8-beach-(tiruvottiyur).jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Thiruvottiyur Beach",
//             para: [
//               "The North Line: Popular among nearby residents",
//               "What to Expect: Space for long walks, minimal noise",
//               "Great for: Peaceful time by the sea",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/tiruvottiyur-beach.jpg",
//           },
//         ],
//       },
//       {
//         points: [
//           {
//             title: "Golden Beach (Thousand Lights)",
//             para: [
//               "The Urban Gem: Landmark beach with easy access",
//               "What to Expect: City backdrop, busy evenings",
//               "Great for: Tourist photos, quick getaways",
//             ],
//             imgs: "/images/Visit-Images/SubPages/beaches/golden-beach-(thousand-lights).jpg",
//           },
//         ],
//       },
//     ],
//   },
// ];

const imageSections = [
  {
    tenantInfoSections: [
      {
        points: [
          {
            title: "Marina Beach",
            para: [
              "The Icon: One of the longest urban beaches in the world",
              "What to Expect: Sunrise views, local snacks (sundal, molaga bajji), kite flying, art installations",
              "Great for: Long walks, family outings, and historic sites like the lighthouse and Gandhi statue",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/marina-beach.jpg",
            location: "https://maps.app.goo.gl/GEpnYDn6g2z1o35j7",
          },
        ],
      },
      {
        points: [
          {
            title: "Elliot's Beach (Besant Nagar)",
            para: [
              "The Chill Spot: Quieter and more relaxed than Marina",
              "What to Expect: Seaside cafés, clean sands, yoga groups, pet-friendly vibes",
              "Great for: Sunset dates, coffee after a walk, or weekend brunch at nearby cafés",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
            location: "https://maps.app.goo.gl/nbLYGrZ2tm1Fn6TFA",
          },
        ],
      },
      {
        points: [
          {
            title: "Neelankarai Beach",
            para: [
              "The Coastal Retreat: Surrounded by upscale residential areas and beach houses",
              "What to Expect: Wide-open spaces, coastal breeze, occasional horseback rides",
              "Great for: Group picnics, weekend stays, or scenic drives along ECR",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/neelankarai-beach.jpg",
            location: "https://maps.app.goo.gl/k19ceCsk1wWTmC7E7",
          },
        ],
      },
      {
        points: [
          {
            title: "Covelong (Kovalam) Beach",
            para: [
              "The Adventure Beach: Located along the East Coast Road, just outside city limits",
              "What to Expect: Surfing schools, seafood stalls, wellness resorts",
              "Great for: Surfing lessons, road trips, or a beach day with a twist",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/covelong-beach.jpg",
            location: "https://maps.app.goo.gl/VF6QSLme91jGXZzW6",
          },
        ],
      },
      {
        points: [
          {
            title: "Thiruvanmiyur Beach",
            para: [
              "The Local Favorite: Less crowded, often used by early risers and fitness groups",
              "What to Expect: Peaceful environment, morning joggers, occasional volleyball games",
              "Great for: Meditation, fitness routines, or reading with the sound of waves",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/thiruvanmayur.jpg",
            location: "https://maps.app.goo.gl/vcuzNHYVix5RX3c37",
          },
        ],
      },
      {
        points: [
          {
            title: "Palavakkam Beach",
            para: [
              "The Scenic Escape: Off the main radar, ideal for solitude",
              "What to Expect: Fewer crowds, stunning early morning light, fishing boats",
              "Great for: Photography, journaling, or quiet walks",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/palavakkam-beach.jpg",
            location: "https://maps.app.goo.gl/bUX1b1jqQknmQXv17",
          },
        ],
      },

      {
        points: [
          {
            title: "JUHU Beach (Uthandi)",
            para: [
              "The Peaceful Shore: Calm and lesser-known stretch",
              "What to Expect: Local fishing activity, spacious sands",
              "Great for: Quiet sunsets, long drives, or couple strolls",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/juhu-beach-(uthandi).jpg",
            location: "https://maps.app.goo.gl/iF76U1DDFcSDKu1A8",
          },
        ],
      },
      {
        points: [
          {
            title: "Akkarai Beach",
            para: [
              "The Family Getaway: Clean and tidy beach stretch",
              "What to Expect: Wide coast, relaxed ambience",
              "Great for: Evening family walks and group games",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches//akkarai-beach.jpg",
            location: "https://maps.app.goo.gl/sYrrzbxfXJXcfmsn6",
          },
        ],
      },
      {
        points: [
          {
            title: "Injambakkam Beach",
            para: [
              "The Quiet Spot: Close to Cholamandal Artists Village",
              "What to Expect: Artsy community nearby, quiet breeze",
              "Great for: Artistic inspiration, contemplation",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/injambakkam-beach.jpg",
            location: "https://maps.app.goo.gl/xwhoHLcmRNm5Ahch6",
          },
        ],
      },
      {
        points: [
          {
            title: "Kottivakkam Beach",
            para: [
              "The Untouched Zone: Simple, natural, and local",
              "What to Expect: Fewer tourists, more locals",
              "Great for: Locals' routine, beach cricket",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/kottivakkam-beach.jpg",
            location: "https://maps.app.goo.gl/ZVR9LAtAfvuUUVQR9",
          },
        ],
      },
      // {
      //   points: [
      //     {
      //       title: "Kasimedu Beach",
      //       para: [
      //         "The Fishermen's Hub: Bustling harbor and fish market zone",
      //         "What to Expect: Fresh catches, boats, and local seafood",
      //         "Great for: Photography, early morning visits, seafood lovers",
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
      //       location: "https://maps.app.goo.gl/NVUFkECvsVvTTdPo7",
      //     },
      //   ],
      // },
      // {
      //   points: [
      //     {
      //       title: "Kasimedu Rock Beach",
      //       para: [
      //         "The Rocky Trail: Rugged edge along the sea",
      //         "What to Expect: Crashing waves, strong winds, stone paths",
      //         "Great for: Quiet contemplation, sunrise watching",
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
      //       location: "https://maps.app.goo.gl/am7fhWRVZqsqRSXo8",
      //     },
      //   ],
      // },
      {
        points: [
          {
            title: "Olive Beach",
            para: [
              "The Hidden Stretch: Calm and lesser-known shore",
              "What to Expect: Secluded sand, few visitors",
              "Great for: Solitude, short getaways",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/olive-beach.jpg",
            location: "https://maps.app.goo.gl/74CJF4xbnNYfgeWd6",
          },
        ],
      },
      {
        points: [
          {
            title: "Panaiyur Beach",
            para: [
              "The Gated Escape: Popular among private beach house owners",
              "What to Expect: Clean shores, private access",
              "Great for: Private events, Airbnb stays",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/panaiyur-beach.jpg",
            location: "https://maps.app.goo.gl/rDH35MgD1XbWgvkQ7",
          },
        ],
      },
      {
        points: [
          {
            title: "Blue Beach (Neelankarai)",
            para: [
              "The Residential Retreat: Close-knit, clean, and well-maintained",
              "What to Expect: Quiet, secure, minimal crowd",
              "Great for: Family outings, peaceful strolls",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/blue-beach-(neelankarai).jpg",
            location: "https://maps.app.goo.gl/Ycnbb53s9SwaQHWm8",
          },
        ],
      },
      {
        points: [
          {
            title: "Copper Beach (Panaiyur)",
            para: [
              "The Serene Strip: Scenic with golden sands",
              "What to Expect: Open coastline, beach joggers",
              "Great for: Fitness, leisure walks",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/copper-beach-(panaiyur).jpg",
            location: "https://maps.app.goo.gl/1b7jiKsoFsmhoxCr9",
          },
        ],
      },
      {
        points: [
          {
            title: "Gandhi Beach (Lighthouse stretch)",
            para: [
              "The Historic Patch: Near lighthouse and Gandhi statue",
              "What to Expect: Cultural spots, statues, vendors",
              "Great for: Evening hangouts, sightseeing",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/gandhi-beach-(lighthouse-side).jpg",
            location: "https://maps.app.goo.gl/yPxv9DeC5g4Byz9T7",
          },
        ],
      },
      {
        points: [
          {
            title: "RTO Beach (Valmiki Nagar)",
            para: [
              "The Breezy Corner: Often overlooked by tourists",
              "What to Expect: Light breeze, parked boats",
              "Great for: Early morning walking",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/rto-beach.jpg",
            location: "https://maps.app.goo.gl/D1u6uMRZn6vGQiQK8",
          },
        ],
      },
      {
        points: [
          {
            title: "Wooden Road Sea Sand Beach",
            para: [
              "The Instagram Spot: Wooden walkway with sea views",
              "What to Expect: Walkable deck, sea breeze",
              "Great for: Quick reels, photography",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/wooden-road-sea-sand-beach.jpg",
            location: "https://maps.app.goo.gl/hefumB6fgHCdmYcD8",
          },
        ],
      },
      {
        points: [
          {
            title: "Vettuvankeni Olive Beach",
            para: [
              "The Calm Curve: Adjacent to villas and resorts",
              "What to Expect: Neat, limited public entry",
              "Great for: Group outings, peaceful breaks",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/vettuvankeni-olive-beach.jpg",
            location: "https://maps.app.goo.gl/5dN8wbyNuzFG4kU49",
          },
        ],
      },
      {
        points: [
          {
            title: "Bharathiyar Nagar Beach (Ennore)",
            para: [
              "The Northern Peace: Quiet zone past city center",
              "What to Expect: Clean, local presence",
              "Great for: Relaxing, morning runs",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/bharathiyar-nagar-beach-(ennore).jpg",
            location: "https://maps.app.goo.gl/c2qTDKnw89wdZh4U7",
          },
        ],
      },
      {
        points: [
          {
            title: "Jagannath Beach (Kanathur)",
            para: [
              "The Temple Backdrop: Scenic setting near ISKCON temple",
              "What to Expect: Calm tide, spiritual vibe",
              "Great for: Pilgrim strolls, mindful breaks",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/jagannath-beach-(kanathur).jpg",
            location: "https://maps.app.goo.gl/x7ocRtitx9bdWbRc9",
          },
        ],
      },
      {
        points: [
          {
            title: "Karikattukuppam Beach",
            para: [
              "The Rustic Line: Edged with casuarina trees",
              "What to Expect: Sand dunes, few locals",
              "Great for: Nature lovers, sketching",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/karikatukuppam-beach-(muthukadu).jpg",
            location: "https://maps.app.goo.gl/Xr7Ku8LAA9obPu72A",
          },
        ],
      },
      {
        points: [
          {
            title: "Kanathur Beach",
            para: [
              "The Minimalist Shore: Simple and open",
              "What to Expect: Fewer people, breezy spaces",
              "Great for: Evening walks, low-key beach time",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/kanathur-beach.jpg",
            location: "https://maps.app.goo.gl/AwgWs5Th5YGhPZaS7",
          },
        ],
      },
      {
        points: [
          {
            title: "Market Lane Beach (Tondiarpet)",
            para: [
              "The Working Beach: Closer to urban bustle",
              "What to Expect: Locals, sea-facing lanes",
              "Great for: Exploring Chennai's diversity",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/market-lane-beach.jpg",
            location: "https://maps.app.goo.gl/6zVSrdobutNvXNxm6",
          },
        ],
      },
      {
        points: [
          {
            title: "N4 Beach (Tondiarpet)",
            para: [
              "The Community Spot: Friendly and vibrant",
              "What to Expect: Residents, street food stalls",
              "Great for: Local feel, budget food",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
            location: "https://maps.app.goo.gl/NVUFkECvsVvTTdPo7",
          },
        ],
      },
      {
        points: [
          {
            title: "Chinnakuppam Beach (Ennore)",
            para: [
              "The Quiet North: Tucked away in industrial stretch",
              "What to Expect: Low footfall, breeze",
              "Great for: Peace, occasional fishing sights",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/chinnakuppam-beach-(ennore).jpg",
            location: "https://maps.app.goo.gl/5dHbvxPLo273x3DQ6",
          },
        ],
      },
      {
        points: [
          {
            title: "Thazankuppam Breakwater Beach",
            para: [
              "The Windy Edge: Breakwater rocks and high waves",
              "What to Expect: Strong sea winds, vast view",
              "Great for: Watching waves crash",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/thazankuppam-breakwater-beach-view-(ennore).jpg",
            location: "https://maps.app.goo.gl/eAfDSMu7arNPknuP6",
          },
        ],
      },
      {
        points: [
          {
            title: "Nettukuppam Beach",
            para: [
              "The Northernmost Point: Where the city ends",
              "What to Expect: Peaceful, distant view of Ennore Port",
              "Great for: Sunsets, couples",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/nettukuppam-beach.jpg",
            location: "https://maps.app.goo.gl/c2mEYk5yWzuCMhio9",
          },
        ],
      },
      {
        points: [
          {
            title: "Ennore Beach Spot",
            para: [
              "The Local Favorite: Well known among Ennore folks",
              "What to Expect: Day picnics, school groups",
              "Great for: Community gatherings",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/ennore-beach-spot.jpg",
            location: "https://maps.app.goo.gl/PnajxY2Ei93JfPsF8",
          },
        ],
      },
      {
        points: [
          {
            title: "Nochikuppam Beach (Santhome)",
            para: [
              "The Inner City Beach: Nestled behind the bustling city",
              "What to Expect: Local fishermen, colorful boats",
              "Great for: Capturing local life, sunrise walks",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/nochikuppam-beach.jpg",
            location: "https://maps.app.goo.gl/uou6nuvRGQYtMWFU8",
          },
        ],
      },
      {
        points: [
          {
            title: "Uthandi Beach",
            para: [
              "The Breezy Bay: Calm and less crowded",
              "What to Expect: Clean stretch, gated homes",
              "Great for: Private beach stays, long drives",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/juhu-beach-(uthandi).jpg",
            location: "https://maps.app.goo.gl/vkyvqg5paHK8HhKm6",
          },
        ],
      },
      {
        points: [
          {
            title: "Enfour Beach (Tondiarpet)",
            para: [
              "The Fishing Hamlet: A neighborhood beach",
              "What to Expect: Boats, nets, simple vibe",
              "Great for: Understanding fishing culture",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/n4-beach-(tondiarpet).jpg",
            location: "https://maps.app.goo.gl/yogtCNzcoW45DLX86",
          },
        ],
      },
      {
        points: [
          {
            title: "Pallava Beach",
            para: [
              "The Peaceful Nook: Subtle charm and open space",
              "What to Expect: Quiet coast, peaceful evening breeze",
              "Great for: Couples, peaceful meditations",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/pallava-beach-(mahabalipuram-stretch).jpg",
            location: "https://maps.app.goo.gl/s4t5dV7RLu1Nug6Y7",
          },
        ],
      },
      {
        points: [
          {
            title: "Rock View Point (Kovalam)",
            para: [
              "The Sea Cliff Point: Slight elevation by the water",
              "What to Expect: Beautiful views, occasional fishers",
              "Great for: Scenic breaks, cliffside photography",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/rock-view-point-–-kovalam-rivermouth.jpg",
            location: "https://maps.app.goo.gl/BhDU7CHNg4ckZMBU9",
          },
        ],
      },
      // {
      //   points: [
      //     {
      //       title: "Panaiyur Beach (ECR)",
      //       para: [
      //         "The Stylish Shore: Attracts beach villa seekers",
      //         "What to Expect: Quiet, private access areas",
      //         "Great for: Airbnb stays, brunch spots nearby",
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/beaches/panaiyur-beach.jpg",
      //       location: "https://maps.app.goo.gl/rDH35MgD1XbWgvkQ7",
      //     },
      //   ],
      // },
      // {
      //   points: [
      //     {
      //       title: "Gandhi Beach (Marina Walk)",
      //       para: [
      //         "The Cultural Strip: Close to statues and lighthouse",
      //         "What to Expect: Tourists, college crowd",
      //         "Great for: Evening snacks, city views",
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/beaches/marina-beach.jpg",
      //       location: "https://maps.app.goo.gl/GEpnYDn6g2z1o35j7",
      //     },
      //   ],
      // },
      {
        points: [
          {
            title: "Chennai Elliot Beach",
            para: [
              "The Youth Hub: Vibe-filled and always active",
              "What to Expect: Bikes, food stalls, street lights",
              "Great for: Friend groups, night strolls",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
            location: "https://maps.app.goo.gl/8HaHTVHoyayzXC6E9",
          },
        ],
      },
      // {
      //   points: [
      //     {
      //       title: "Sun Rise Point (Elliots Beach)",
      //       para: [
      //         "The Early Bird Spot: Best view for sunrise lovers",
      //         "What to Expect: Golden light, peaceful shore",
      //         "Great for: Early yoga, solo thinking time",
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/beaches/elliot's-beach.jpg",
      //       location: "https://maps.app.goo.gl/ydwpEgkWykP3evqc9",
      //     },
      //   ],
      // },
      {
        points: [
          {
            title: "N8 Beach (Tiruvottiyur)",
            para: [
              "The Narrow Lane Beach: Compact and local",
              "What to Expect: Residential view, fewer tourists",
              "Great for: Alone time, early mornings",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/n8-beach-(tiruvottiyur).jpg",
            location: "https://maps.app.goo.gl/i7crfbrXDdZcs9Tq9",
          },
        ],
      },
      {
        points: [
          {
            title: "Thiruvottiyur Beach",
            para: [
              "The North Line: Popular among nearby residents",
              "What to Expect: Space for long walks, minimal noise",
              "Great for: Peaceful time by the sea",
            ],
            imgs: "/images/Visit-Images/SubPages/beaches/tiruvottiyur-beach.jpg",
            location: "https://maps.app.goo.gl/hqFtJPE5umRTcgE89",
          },
        ],
      },
      // {
      //   points: [
      //     {
      //       title: "Golden Beach (Thousand Lights)",
      //       para: [
      //         "The Urban Gem: Landmark beach with easy access",
      //         "What to Expect: City backdrop, busy evenings",
      //         "Great for: Tourist photos, quick getaways",
      //       ],
      //       imgs: "/images/Visit-Images/SubPages/beaches/golden-beach-(thousand-lights).jpg",
      //       location: "https://maps.app.goo.gl/y1ttTfD3fCdJ2zy79",
      //     },
      //   ],
      // },
    ],
  },
];

const imageSections1 = [
  {
    sectionTitle: "",
    sectionDesc: "",
    image: "/images/Work-Images/SubPages/Types-of-Permits-Available.jpg",
    tenantInfoSections: [
      {
        points: [
          {
            title: " Beach Tips",
            para: [
              <>
                <strong>Best Time to Visit:</strong> Early morning or post-4 PM
                for cooler weather{" "}
              </>,
              <>
                <strong> Local Snacks to Try:</strong> Thenga bajji, murukku,
                sundal, raw mango slices
              </>,
              <>
                <strong>Travel Tip:</strong> Use Metro + auto or bike rentals
                for quicker beach access
              </>,
              <>
                <strong>Sustainability Tip: </strong>Carry your trash back —
                let’s keep our beaches clean
              </>,
            ],
            imgs: "/images/Work-Images/SubPages/Icons/Employment-Permits.svg",
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

export default function BeachesInChennai() {
  {
    /*#################### STATE VARIABLES ##################### */
  }

  const [scrollDir, setScrollDir] = useState("left");
  const lastScrollY = useRef(0);
  const bgTextRef = useRef(null);
  const [showAll, setShowAll] = useState(false);

  {
    /*#################### HELPERS  ##################### */
  }

  const PrevArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageLeftButton"></div>
  );

  const NextArrow = ({ onClick }) => (
    <div onClick={onClick} className="ExplorePageRightButton"></div>
  );

  const allPoints = imageSections.flatMap((section) =>
    section.tenantInfoSections.flatMap((tenant) =>
      tenant.points.map((point) => ({
        ...point,
        sectionPattern: section,
      }))
    )
  );

  // Determine how many to show
  const visiblePoints = showAll ? allPoints : allPoints.slice(0, 4);

  {
    /*#################### USEEFFECT HOOCKS  ##################### */
  }

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY.current ? "left" : "right");
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
  {
    /*########################### RENDER   ######################### */
  }

  return (
    <>
      <Helmet>
        <title>Beaches in Chennai - Super Chennai</title>
        <meta name="description" content="Take in the sea breeze at beaches in Chennai, where endless shorelines and cultural vibrance create unforgettable seaside experiences." />
        <link rel="canonical" href="/visit/place-to-visit/beaches-in-chennai" />
      </Helmet>

      <div className="FunchennaiDetailPage">
        {/*#################### Banner ########################## */}
        <div className="accaodomationBannerSection">
          <img
            src="/images/Visit-Images/SubPages/thingsDoChild/beachside-fun.jpg"
            alt=""
          />
          <div className="accodoamationBannerContainer">
            <div className="accodoamationBannerText">
              <h3>Beaches in Chennai</h3>
              <div className="breadCrum">
                <Link to="/invest-in-chennai">Home</Link> -{" "}
                <span>Beaches in Chennai</span>
              </div>
            </div>
          </div>
          <div className="notHomePageSearch">
            <Search />
          </div>
        </div>

        {/*#################### Intro ###########################*/}
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
              <p>Beaches in Chennai</p>
            </div>
            <div className="workIntro">
              <h3>Where the City Meets the Sea</h3>
              <p>
                Chennai’s beaches are more than just scenic spots — they’re part
                of the city’s everyday rhythm. From sunrise jogs and street-side
                snacks to cultural gatherings and weekend unwinding, these
                coastal stretches offer something for everyone. Whether you're
                here to relax, recharge, or rediscover the outdoors, Chennai’s
                shoreline delivers with charm, character, and community.
              </p>
            </div>
          </div>
        </div>

        {/*#################### MAIN CONTENT  ####################*/}

        <div className="container max-w-7xl mx-auto px-4 nightlife investchennaisec funchennai">
          <section className="imgcontent flex flex-wrap justify-center transition-colors duration-300 bg-white whitebgsec pattern-a">
            <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full ">
              {visiblePoints.map((item, index) => (
                <div key={index} className="clcboxItemss flex mb-4">
                  <div className="clcboxIImg w-[100px] min-w-[100px] mr-4">
                    <img
                      src={item.imgs}
                      alt={item.title}
                      className="rounded w-full h-auto"
                    />
                  </div>
                  <div className="clcboxICont">
                    <h3 className="text-lg font-bold">{item.title}</h3>
                    <ul className="list-disc list-inside text-gray-600 space-y-1 mt-2">
                      {item.para.map((point, k) => {
                        if (typeof point === "string" && point.includes(":")) {
                          const [prefix, ...rest] = point.split(":");
                          return (
                            <li key={k}>
                              <strong>{prefix}:</strong> {rest.join(":").trim()}
                            </li>
                          );
                        }
                        return <li key={k}>{point}</li>;
                      })}
                    </ul>
                    {item.location && (
                      <div className="mt-2 exploreMorebuttonVisitChennai">
                        <a
                          className="text-blue-600 hover:underline text-sm font-medium"
                          href={item.location}
                          target="_blank"
                          rel="noopener noreferrer"
                          data-discover="true"
                        >
                          View on Map
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {allPoints.length > 4 && (
            <div className="flex justify-center mt-6">
              <div className="exploreMorebuttonVisitChennai">
                {!showAll ? (
                  <a
                    className="text-blue-600 hover:underline text-sm font-medium"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAll(true);
                    }}
                    data-discover="true"
                  >
                    More Beaches
                  </a>
                ) : (
                  <a
                    className="text-blue-600 hover:underline text-sm font-medium"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setShowAll(false);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    data-discover="true"
                  >
                    Show Less
                  </a>
                )}
              </div>
            </div>
          )}
        </div>

        {/*#################### TABLE CONTENT  ####################*/}

        <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec">
          <div className="container max-w-7xl mx-auto px-4  nightlife investchennaisec ">
            {imageSections1.map((section, index) => (
              <section
                className={`imgcontent flex flex-wrap justify-center transition-colors duration-300 
              ${
                index % 2 === 0
                  ? "bg-white whitebgsec"
                  : "bg-[#f7f7f7] colorbgsec"
              } 
                 ${
                   index % 3 === 0
                     ? "pattern-a"
                     : index % 3 === 1
                     ? "pattern-b"
                     : "pattern-c"
                 }`}
                key={index}
              >
                <div className="space-y-6 bg-white p-4 mt-[50px] rounded bottomListIcon w-full">
                  <h2 class="text-2xl font-semibold text-indigo-700 mb-6 text-center">
                    {" "}
                  </h2>
                  {section.tenantInfoSections.map((tenant, i) => (
                    <div key={i}>
                      <h4 className="text-lg font-semibold mb-4">
                        {tenant.title}
                      </h4>
                      {tenant.points.map((item, j) => (
                        <div key={j} className="clcboxItemss flex mb-4">
                          <div className="clcboxIImg">
                            <img src={item.imgs} alt={item.title} />
                          </div>
                          <div className="clcboxICont">
                            <h3>{item.title}</h3>
                            <h5>{item.desc}</h5>
                            <ul className="list-disc list-inside text-gray-600 space-y-1">
                              {item.para.map((point, i) => (
                                <li key={i}>{point}</li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>

        {/* ########## EXPLORE MORE CHENNAI SLIDER ############### */}

        <VisitSlider />

        {/*################## SOCIAL MARQUE SECTION################ */}
        <div className="AccomodationInstaReel">
          <InstagramReelsMarquee />
        </div>
        <Becameavolunteer />
      </div>
    </>
  );
}
