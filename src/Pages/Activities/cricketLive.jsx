

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const API_URL =
  "https://api.cricapi.com/v1/currentMatches?apikey=09119578-2c03-4bca-a6ea-a8bedae8714b";
  
    const mockData = [
    {
      apikey: "09119578-2c03-4bca-a6ea-a8bedae8714b",
      data: [
        {
          id: "9ce79e37-56e1-4f02-88c9-0a7534f46d8e",
          name: "Costa Rica Women vs Chile Women, 3rd T20I, Chile Women tour of Costa Rica 2026",
          matchType: "t20",
          status: "Costa Rica Women won by 9 wkts",
          venue: "Los Reyes Polo Club, Guacima",
          date: "2026-04-26",
          dateTimeGMT: "2026-04-26T15:00:00",
          teams: ["Costa Rica Women", "Chile Women"],
          teamInfo: [
            {
              name: "Chile Women",
              shortname: "CW",
              img: "https://h.cricapi.com/img/icon512.png",
            },
            {
              name: "Costa Rica Women",
              shortname: "CRW",
              img: "https://h.cricapi.com/img/icon512.png",
            },
          ],
          score: [
            {
              r: 46,
              w: 10,
              o: 13.4,
              inning: "Chile Women Inning 1",
            },
            {
              r: 48,
              w: 1,
              o: 6.1,
              inning: "Costa Rica Women Inning 1",
            },
          ],
          series_id: "6f328f01-a591-4f0c-8104-d2fa2c193216",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "3f683268-d9da-4faa-a4f7-3fb81b5679e4",
          name: "Costa Rica Women vs Chile Women, 2nd T20I, Chile Women tour of Costa Rica 2026",
          matchType: "t20",
          status: "Costa Rica Women won by 8 wkts",
          venue: "Los Reyes Polo Club, Guacima",
          date: "2026-04-25",
          dateTimeGMT: "2026-04-25T15:00:00",
          teams: ["Costa Rica Women", "Chile Women"],
          teamInfo: [
            {
              name: "Chile Women",
              shortname: "CW",
              img: "https://h.cricapi.com/img/icon512.png",
            },
            {
              name: "Costa Rica Women",
              shortname: "CRW",
              img: "https://h.cricapi.com/img/icon512.png",
            },
          ],
          score: [
            {
              r: 81,
              w: 8,
              o: 20,
              inning: "Chile Women Inning 1",
            },
            {
              r: 83,
              w: 2,
              o: 6.5,
              inning: "Costa Rica Women Inning 1",
            },
          ],
          series_id: "6f328f01-a591-4f0c-8104-d2fa2c193216",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "412016db-4431-41d9-bd54-3058d46c5315",
          name: "Italy Women vs Vanuatu Women, 16th Match, ICC Womens T20I Challenge Trophy 2026",
          matchType: "t20",
          status: "Italy Women won by 8 runs (DLS Method)",
          venue: "Gahanga B Ground, Kigali City",
          date: "2026-04-28",
          dateTimeGMT: "2026-04-28T11:50:00",
          teams: ["Italy Women", "Vanuatu Women"],
          teamInfo: [
            {
              name: "Italy Women",
              shortname: "IT-W",
              img: "https://g.cricapi.com/iapi/3002-638040162790985209.webp?w=48",
            },
            {
              name: "Vanuatu Women",
              shortname: "VAN-W",
              img: "https://g.cricapi.com/iapi/2551-638004821092331389.webp?w=48",
            },
          ],
          score: [
            {
              r: 153,
              w: 2,
              o: 20,
              inning: "Vanuatu Women Inning 1",
            },
            {
              r: 96,
              w: 4,
              o: 11.5,
              inning: "Italy Women Inning 1",
            },
          ],
          series_id: "99bdc653-7f47-4466-8d5e-5d43686c3c5a",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "85ec99e1-7050-4aa4-9903-a029e8198fdd",
          name: "Rwanda Women vs Nepal Women, 15th Match, ICC Womens T20I Challenge Trophy 2026",
          matchType: "t20",
          status: "Nepal Women won by 38 runs",
          venue: "Gahanga B Ground, Kigali City",
          date: "2026-04-28",
          dateTimeGMT: "2026-04-28T07:00:00",
          teams: ["Rwanda Women", "Nepal Women"],
          teamInfo: [
            {
              name: "Nepal Women",
              shortname: "NEPW",
              img: "https://g.cricapi.com/iapi/54-637877084789981539.webp?w=48",
            },
            {
              name: "Rwanda Women",
              shortname: "RW",
              img: "https://g.cricapi.com/iapi/4218-638101636238742992.webp?w=48",
            },
          ],
          score: [
            {
              r: 103,
              w: 7,
              o: 20,
              inning: "nepal women Inning 1",
            },
            {
              r: 65,
              w: 10,
              o: 17.4,
              inning: "Rwanda Women,Nepal Women Inning 1",
            },
          ],
          series_id: "99bdc653-7f47-4466-8d5e-5d43686c3c5a",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "4b35e2b6-b5cc-4d40-a99b-25f1cf1af252",
          name: "United States of America Women vs Vanuatu Women, 14th Match, ICC Womens T20I Challenge Trophy 2026",
          matchType: "t20",
          status: "United States of America Women won by 72 runs",
          venue: "Gahanga International Cricket Stadium, Kigali City",
          date: "2026-04-27",
          dateTimeGMT: "2026-04-27T11:50:00",
          teams: ["United States of America Women", "Vanuatu Women"],
          teamInfo: [
            {
              name: "United States of America Women",
              shortname: "USW",
              img: "https://g.cricapi.com/iapi/93-637877085206398451.webp?w=48",
            },
            {
              name: "Vanuatu Women",
              shortname: "VAN-W",
              img: "https://g.cricapi.com/iapi/2551-638004821092331389.webp?w=48",
            },
          ],
          score: [
            {
              r: 162,
              w: 4,
              o: 20,
              inning: "united states of america women Inning 1",
            },
            {
              r: 90,
              w: 8,
              o: 20,
              inning: "United States of America Women,Vanuatu Women Inning 1",
            },
          ],
          series_id: "99bdc653-7f47-4466-8d5e-5d43686c3c5a",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "b8c6089d-7107-4f05-9969-2ff0fafd0f30",
          name: "Rwanda Women vs Italy Women, 13th Match, ICC Womens T20I Challenge Trophy 2026",
          matchType: "t20",
          status: "Rwanda Women won by 6 wkts",
          venue: "Gahanga International Cricket Stadium, Kigali City",
          date: "2026-04-27",
          dateTimeGMT: "2026-04-27T07:00:00",
          teams: ["Rwanda Women", "Italy Women"],
          teamInfo: [
            {
              name: "Italy Women",
              shortname: "IT-W",
              img: "https://g.cricapi.com/iapi/3002-638040162790985209.webp?w=48",
            },
            {
              name: "Rwanda Women",
              shortname: "RW",
              img: "https://g.cricapi.com/iapi/4218-638101636238742992.webp?w=48",
            },
          ],
          score: [
            {
              r: 123,
              w: 7,
              o: 20,
              inning: "italy women Inning 1",
            },
            {
              r: 126,
              w: 4,
              o: 19.3,
              inning: "Rwanda Women,Italy Women Inning 1",
            },
          ],
          series_id: "99bdc653-7f47-4466-8d5e-5d43686c3c5a",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "bd4fb230-d07f-4280-88ae-f8829937c4f4",
          name: "United States of America Women vs Nepal Women, 12th Match, ICC Womens T20I Challenge Trophy 2026",
          matchType: "t20",
          status: "United States of America Women won by 7 wkts",
          venue: "Gahanga B Ground, Kigali City",
          date: "2026-04-26",
          dateTimeGMT: "2026-04-26T11:50:00",
          teams: ["United States of America Women", "Nepal Women"],
          teamInfo: [
            {
              name: "Nepal Women",
              shortname: "NEPW",
              img: "https://g.cricapi.com/iapi/54-637877084789981539.webp?w=48",
            },
            {
              name: "United States of America Women",
              shortname: "USW",
              img: "https://g.cricapi.com/iapi/93-637877085206398451.webp?w=48",
            },
          ],
          score: [
            {
              r: 86,
              w: 6,
              o: 20,
              inning: "nepal women Inning 1",
            },
            {
              r: 89,
              w: 3,
              o: 11.5,
              inning: "United States of America Women,Nepal Women Inning 1",
            },
          ],
          series_id: "99bdc653-7f47-4466-8d5e-5d43686c3c5a",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "0d02b310-30ee-4703-973a-a2edae4c23a8",
          name: "Rwanda Women vs Vanuatu Women, 11th Match, ICC Womens T20I Challenge Trophy 2026",
          matchType: "t20",
          status: "Rwanda Women won by 3 runs",
          venue: "Gahanga B Ground, Kigali City",
          date: "2026-04-26",
          dateTimeGMT: "2026-04-26T07:00:00",
          teams: ["Rwanda Women", "Vanuatu Women"],
          teamInfo: [
            {
              name: "Rwanda Women",
              shortname: "RW",
              img: "https://g.cricapi.com/iapi/4218-638101636238742992.webp?w=48",
            },
            {
              name: "Vanuatu Women",
              shortname: "VAN-W",
              img: "https://g.cricapi.com/iapi/2551-638004821092331389.webp?w=48",
            },
          ],
          score: [
            {
              r: 133,
              w: 5,
              o: 20,
              inning: "rwanda women Inning 1",
            },
            {
              r: 130,
              w: 3,
              o: 20,
              inning: "Rwanda Women,Vanuatu Women Inning 1",
            },
          ],
          series_id: "99bdc653-7f47-4466-8d5e-5d43686c3c5a",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "4210c10d-f87b-4552-8a53-377b3bcee7c0",
          name: "Nepal vs Oman, 100th Match, ICC Cricket World Cup League Two 2023-27",
          matchType: "odi",
          status: "Nepal need 236 runs",
          venue: "Tribhuvan University International Cricket Ground, Kirtipur",
          date: "2026-04-29",
          dateTimeGMT: "2026-04-29T00:00:00",
          teams: ["Nepal", "Oman"],
          teamInfo: [
            {
              name: "Nepal",
              shortname: "NEP",
              img: "https://g.cricapi.com/iapi/54-637877084789981539.webp?w=48",
            },
            {
              name: "Oman",
              shortname: "OMAN",
              img: "https://g.cricapi.com/iapi/64-637877083212505394.webp?w=48",
            },
          ],
          score: [
            {
              r: 305,
              w: 8,
              o: 50,
              inning: "oman Inning 1",
            },
            {
              r: 70,
              w: 4,
              o: 19.4,
              inning: "Nepal,Oman Inning 1",
            },
          ],
          series_id: "7ac098a3-5d70-4c81-8e81-199edbeffc29",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: false,
        },
        {
          id: "77f94d90-688a-4c7e-9d9a-ee98c5e66c2a",
          name: "United Arab Emirates vs Oman, 99th Match, ICC Cricket World Cup League Two 2023-27",
          matchType: "odi",
          status: "United Arab Emirates won by 25 runs",
          venue: "Tribhuvan University International Cricket Ground, Kirtipur",
          date: "2026-04-27",
          dateTimeGMT: "2026-04-27T00:00:00",
          teams: ["United Arab Emirates", "Oman"],
          teamInfo: [
            {
              name: "Oman",
              shortname: "OMAN",
              img: "https://g.cricapi.com/iapi/64-637877083212505394.webp?w=48",
            },
            {
              name: "United Arab Emirates",
              shortname: "UAE",
              img: "https://g.cricapi.com/iapi/92-637877081068315608.webp?w=48",
            },
          ],
          score: [
            {
              r: 268,
              w: 7,
              o: 50,
              inning: "United Arab Emirates Inning 1",
            },
            {
              r: 243,
              w: 10,
              o: 47.5,
              inning: "Oman Inning 1",
            },
          ],
          series_id: "7ac098a3-5d70-4c81-8e81-199edbeffc29",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "4366654e-33e0-4ed0-9e5f-e71e2b535714",
          name: "Nepal vs United Arab Emirates, 98th Match, ICC Cricket World Cup League Two 2023-27",
          matchType: "odi",
          status: "Nepal won by 37 runs",
          venue: "Tribhuvan University International Cricket Ground, Kirtipur",
          date: "2026-04-25",
          dateTimeGMT: "2026-04-25T00:00:00",
          teams: ["Nepal", "United Arab Emirates"],
          teamInfo: [
            {
              name: "Nepal",
              shortname: "NEP",
              img: "https://g.cricapi.com/iapi/54-637877084789981539.webp?w=48",
            },
            {
              name: "United Arab Emirates",
              shortname: "UAE",
              img: "https://g.cricapi.com/iapi/92-637877081068315608.webp?w=48",
            },
          ],
          score: [
            {
              r: 200,
              w: 10,
              o: 48.2,
              inning: "Nepal Inning 1",
            },
            {
              r: 163,
              w: 10,
              o: 48.2,
              inning: "United Arab Emirates Inning 1",
            },
          ],
          series_id: "7ac098a3-5d70-4c81-8e81-199edbeffc29",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "8fbd3678-6299-4e67-8c28-74d4952b6ae7",
          name: "Punjab Kings vs Rajasthan Royals, 40th Match, Indian Premier League 2026",
          matchType: "t20",
          status: "Rajasthan Royals won by 6 wkts",
          venue:
            "Maharaja Yadavindra Singh International Cricket Stadium, Mullanpur, New Chandigarh",
          date: "2026-04-28",
          dateTimeGMT: "2026-04-28T14:00:00",
          teams: ["Punjab Kings", "Rajasthan Royals"],
          teamInfo: [
            {
              name: "Punjab Kings",
              shortname: "PBKS",
              img: "https://g.cricapi.com/iapi/247-637852956959778791.png?w=48",
            },
            {
              name: "Rajasthan Royals",
              shortname: "RR",
              img: "https://g.cricapi.com/iapi/251-637852956607161886.png?w=48",
            },
          ],
          score: [
            {
              r: 222,
              w: 4,
              o: 20,
              inning: "Punjab Kings Inning 1",
            },
            {
              r: 228,
              w: 4,
              o: 19.2,
              inning: "Rajasthan Royals Inning 1",
            },
          ],
          series_id: "87c62aac-bc3c-4738-ab93-19da0690488f",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "63c19cfb-3544-41df-8bd8-10049818a6c5",
          name: "Delhi Capitals vs Royal Challengers Bengaluru, 39th Match, Indian Premier League 2026",
          matchType: "t20",
          status: "Royal Challengers Bengaluru won by 9 wkts",
          venue: "Arun Jaitley Stadium, Delhi",
          date: "2026-04-27",
          dateTimeGMT: "2026-04-27T14:00:00",
          teams: ["Delhi Capitals", "Royal Challengers Bengaluru"],
          teamInfo: [
            {
              name: "Delhi Capitals",
              shortname: "DC",
              img: "https://g.cricapi.com/iapi/148-637874596301457910.png?w=48",
            },
            {
              name: "Royal Challengers Bengaluru",
              shortname: "RCBW",
              img: "https://g.cricapi.com/iapi/21439-638468478038395955.jpg?w=48",
            },
          ],
          score: [
            {
              r: 75,
              w: 10,
              o: 16.3,
              inning: "Delhi Capitals Inning 1",
            },
            {
              r: 77,
              w: 1,
              o: 6.3,
              inning: "Royal Challengers Bengaluru Inning 1",
            },
          ],
          series_id: "87c62aac-bc3c-4738-ab93-19da0690488f",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "fbd861ca-4efb-4d1d-b46c-ba3bc334bce4",
          name: "Lucknow Super Giants vs Kolkata Knight Riders, 38th Match, Indian Premier League 2026",
          matchType: "t20",
          status: "Match tied (KKR won the Super Over)",
          venue:
            "Bharat Ratna Shri Atal Bihari Vajpayee Ekana Cricket Stadium, Lucknow",
          date: "2026-04-26",
          dateTimeGMT: "2026-04-26T14:00:00",
          teams: ["Lucknow Super Giants", "Kolkata Knight Riders"],
          teamInfo: [
            {
              name: "Kolkata Knight Riders",
              shortname: "KKR",
              img: "https://g.cricapi.com/iapi/206-637852958714346149.png?w=48",
            },
            {
              name: "Lucknow Super Giants",
              shortname: "LSG",
              img: "https://g.cricapi.com/iapi/215-637876059669009476.png?w=48",
            },
          ],
          score: [
            {
              r: 155,
              w: 7,
              o: 20,
              inning: "Kolkata Knight Riders Inning 1",
            },
            {
              r: 155,
              w: 8,
              o: 20,
              inning: "Lucknow Super Giants Inning 1",
            },
          ],
          series_id: "87c62aac-bc3c-4738-ab93-19da0690488f",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "690985d0-c890-434a-bece-fb02d59b09d2",
          name: "Chennai Super Kings vs Gujarat Titans, 37th Match, Indian Premier League 2026",
          matchType: "t20",
          status: "Gujarat Titans won by 8 wkts",
          venue: "MA Chidambaram Stadium, Chennai",
          date: "2026-04-26",
          dateTimeGMT: "2026-04-26T10:00:00",
          teams: ["Chennai Super Kings", "Gujarat Titans"],
          teamInfo: [
            {
              name: "Chennai Super Kings",
              shortname: "CSK",
              img: "https://g.cricapi.com/iapi/135-637852956181378533.png?w=48",
            },
            {
              name: "Gujarat Titans",
              shortname: "GT",
              img: "https://g.cricapi.com/iapi/172-637852957798476823.png?w=48",
            },
          ],
          score: [
            {
              r: 158,
              w: 7,
              o: 20,
              inning: "Chennai Super Kings Inning 1",
            },
            {
              r: 162,
              w: 2,
              o: 16.4,
              inning: "Gujarat Titans Inning 1",
            },
          ],
          series_id: "87c62aac-bc3c-4738-ab93-19da0690488f",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "3d5968a6-4851-410c-b66a-811b92406933",
          name: "Rajasthan Royals vs Sunrisers Hyderabad, 36th Match, Indian Premier League 2026",
          matchType: "t20",
          status: "Sunrisers Hyderabad won by 5 wkts",
          venue: "Sawai Mansingh Stadium, Jaipur",
          date: "2026-04-25",
          dateTimeGMT: "2026-04-25T14:00:00",
          teams: ["Rajasthan Royals", "Sunrisers Hyderabad"],
          teamInfo: [
            {
              name: "Rajasthan Royals",
              shortname: "RR",
              img: "https://g.cricapi.com/iapi/251-637852956607161886.png?w=48",
            },
            {
              name: "Sunrisers Hyderabad",
              shortname: "SRH",
              img: "https://g.cricapi.com/iapi/279-637852957609490368.png?w=48",
            },
          ],
          score: [
            {
              r: 228,
              w: 6,
              o: 20,
              inning: "Rajasthan Royals Inning 1",
            },
            {
              r: 229,
              w: 5,
              o: 18.3,
              inning: "Sunrisers Hyderabad Inning 1",
            },
          ],
          series_id: "87c62aac-bc3c-4738-ab93-19da0690488f",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "7bd928c0-1961-4fb5-a7a7-acd61c4a1586",
          name: "Delhi Capitals vs Punjab Kings, 35th Match, Indian Premier League 2026",
          matchType: "t20",
          status: "Punjab Kings won by 6 wkts",
          venue: "Arun Jaitley Stadium, Delhi",
          date: "2026-04-25",
          dateTimeGMT: "2026-04-25T10:00:00",
          teams: ["Delhi Capitals", "Punjab Kings"],
          teamInfo: [
            {
              name: "Delhi Capitals",
              shortname: "DC",
              img: "https://g.cricapi.com/iapi/148-637874596301457910.png?w=48",
            },
            {
              name: "Punjab Kings",
              shortname: "PBKS",
              img: "https://g.cricapi.com/iapi/247-637852956959778791.png?w=48",
            },
          ],
          score: [
            {
              r: 264,
              w: 2,
              o: 20,
              inning: "delhi capitals Inning 1",
            },
            {
              r: 265,
              w: 4,
              o: 18.5,
              inning: "Delhi Capitals,Punjab Kings Inning 1",
            },
          ],
          series_id: "87c62aac-bc3c-4738-ab93-19da0690488f",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "4bd67517-c68c-4cdf-8df0-2a4458e545ff",
          name: "Peshawar Zalmi vs Islamabad United, Qualifier, Pakistan Super League 2026",
          matchType: "t20",
          status: "Peshawar Zalmi won by 70 runs",
          venue: "National Stadium, Karachi",
          date: "2026-04-28",
          dateTimeGMT: "2026-04-28T14:00:00",
          teams: ["Peshawar Zalmi", "Islamabad United"],
          teamInfo: [
            {
              name: "Islamabad United",
              shortname: "ISU",
              img: "https://g.cricapi.com/iapi/34-637992689284766336.webp?w=48",
            },
            {
              name: "Peshawar Zalmi",
              shortname: "PSZ",
              img: "https://g.cricapi.com/iapi/69-637992644554994835.webp?w=48",
            },
          ],
          score: [
            {
              r: 221,
              w: 7,
              o: 20,
              inning: "Peshawar Zalmi Inning 1",
            },
            {
              r: 151,
              w: 10,
              o: 18.4,
              inning: "Islamabad United Inning 1",
            },
          ],
          series_id: "9aede005-627e-47d9-8cad-088c8f5585d7",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "48209a90-7541-4863-b48f-28849ab2c6cc",
          name: "Islamabad United vs Multan Sultans, 40th Match, Pakistan Super League 2026",
          matchType: "t20",
          status: "Islamabad United won by 4 wkts",
          venue: "National Stadium, Karachi",
          date: "2026-04-26",
          dateTimeGMT: "2026-04-26T14:00:00",
          teams: ["Islamabad United", "Multan Sultans"],
          teamInfo: [
            {
              name: "Islamabad United",
              shortname: "ISU",
              img: "https://g.cricapi.com/iapi/34-637992689284766336.webp?w=48",
            },
            {
              name: "Multan Sultans",
              shortname: "MS",
              img: "https://g.cricapi.com/iapi/50-637991992950999418.webp?w=48",
            },
          ],
          score: [
            {
              r: 192,
              w: 7,
              o: 20,
              inning: "Multan Sultans Inning 1",
            },
            {
              r: 193,
              w: 6,
              o: 18.4,
              inning: "Islamabad United Inning 1",
            },
          ],
          series_id: "9aede005-627e-47d9-8cad-088c8f5585d7",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "ea1bac34-7991-458b-b19f-69e30ea745a7",
          name: "Hyderabad Kingsmen vs Rawalpindiz, 39th Match, Pakistan Super League 2026",
          matchType: "t20",
          status: "Hyderabad Kingsmen won by 108 runs",
          venue: "National Stadium, Karachi",
          date: "2026-04-26",
          dateTimeGMT: "2026-04-26T09:30:00",
          teams: ["Hyderabad Kingsmen", "Rawalpindiz"],
          teamInfo: [
            {
              name: "Hyderabad Kingsmen",
              shortname: "HK",
              img: "https://h.cricapi.com/img/icon512.png",
            },
            {
              name: "Rawalpindiz",
              shortname: "R",
              img: "https://h.cricapi.com/img/icon512.png",
            },
          ],
          score: [
            {
              r: 244,
              w: 6,
              o: 20,
              inning: "Hyderabad Kingsmen Inning 1",
            },
            {
              r: 136,
              w: 10,
              o: 17.1,
              inning: "Rawalpindiz Inning 1",
            },
          ],
          series_id: "9aede005-627e-47d9-8cad-088c8f5585d7",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "7f8fb738-b92b-42bc-b211-a9252952b8eb",
          name: "Lahore Qalandars vs Peshawar Zalmi, 38th Match, Pakistan Super League 2026",
          matchType: "t20",
          status: "Lahore Qalandars won by 6 wkts",
          venue: "Gaddafi Stadium, Lahore",
          date: "2026-04-25",
          dateTimeGMT: "2026-04-25T14:00:00",
          teams: ["Lahore Qalandars", "Peshawar Zalmi"],
          teamInfo: [
            {
              name: "Lahore Qalandars",
              shortname: "LHQ",
              img: "https://g.cricapi.com/iapi/41-637991979136379824.webp?w=48",
            },
            {
              name: "Peshawar Zalmi",
              shortname: "PSZ",
              img: "https://g.cricapi.com/iapi/69-637992644554994835.webp?w=48",
            },
          ],
          score: [
            {
              r: 199,
              w: 4,
              o: 20,
              inning: "Peshawar Zalmi Inning 1",
            },
            {
              r: 200,
              w: 4,
              o: 19.3,
              inning: "Lahore Qalandars Inning 1",
            },
          ],
          series_id: "9aede005-627e-47d9-8cad-088c8f5585d7",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "27c10876-cb7a-41d0-916b-12a41ecf6d1a",
          name: "Quetta Gladiators vs Karachi Kings, 37th Match, Pakistan Super League 2026",
          matchType: "t20",
          status: "Karachi Kings won by 9 wkts",
          venue: "Gaddafi Stadium, Lahore",
          date: "2026-04-25",
          dateTimeGMT: "2026-04-25T09:30:00",
          teams: ["Quetta Gladiators", "Karachi Kings"],
          teamInfo: [
            {
              name: "Karachi Kings",
              shortname: "KRK",
              img: "https://g.cricapi.com/iapi/37-637992689033348642.webp?w=48",
            },
            {
              name: "Quetta Gladiators",
              shortname: "QTG",
              img: "https://g.cricapi.com/iapi/74-637992667257901247.webp?w=48",
            },
          ],
          score: [
            {
              r: 195,
              w: 6,
              o: 20,
              inning: "Quetta Gladiators Inning 1",
            },
            {
              r: 199,
              w: 1,
              o: 18.3,
              inning: "Karachi Kings Inning 1",
            },
          ],
          series_id: "9aede005-627e-47d9-8cad-088c8f5585d7",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "a08ed3ed-037a-4fa3-898b-f51eb1765099",
          name: "Cyprus Women vs Greece Women, 4th T20I, Greece Women tour of Cyprus, 2026",
          matchType: "t20",
          status: "Cyprus Women opt to bat",
          venue: "Happy Valley Ground, Episkopi",
          date: "2026-04-04",
          dateTimeGMT: "2026-04-04T11:30:00",
          teams: ["Cyprus Women", "Greece Women"],
          teamInfo: [
            {
              name: "Cyprus Women",
              shortname: "CPW",
              img: "https://h.cricapi.com/img/icon512.png",
            },
            {
              name: "Greece Women",
              shortname: "GW",
              img: "https://g.cricapi.com/iapi/609-637873697911451014.webp?w=48",
            },
          ],
          score: [
            {
              r: 47,
              w: 5,
              o: 7.5,
              inning: "cyprus women Inning 1",
            },
          ],
          series_id: "a7df6d61-e0d1-4335-8879-01648bbb497f",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: false,
        },
        {
          id: "730bf426-48dc-456c-b77a-42436a9d9db3",
          name: "Bangladesh Women vs Sri Lanka Women, 1st T20I, Sri Lanka Women tour of Bangladesh, 2026",
          matchType: "t20",
          status: "Sri Lanka Women won by 25 runs",
          venue: "Sylhet International Cricket Stadium, Sylhet",
          date: "2026-04-28",
          dateTimeGMT: "2026-04-28T12:00:00",
          teams: ["Bangladesh Women", "Sri Lanka Women"],
          teamInfo: [
            {
              name: "Bangladesh Women",
              shortname: "BANW",
              img: "https://g.cricapi.com/iapi/10-637877074628008258.webp?w=48",
            },
            {
              name: "Sri Lanka Women",
              shortname: "SLW",
              img: "https://g.cricapi.com/iapi/4191-638101639309122979.webp?w=48",
            },
          ],
          score: [
            {
              r: 161,
              w: 4,
              o: 20,
              inning: "Sri Lanka Women Inning 1",
            },
            {
              r: 136,
              w: 7,
              o: 20,
              inning: "Bangladesh Women Inning 1",
            },
          ],
          series_id: "9070e0d5-11ff-4f80-ba02-f645707e55cf",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
        {
          id: "e54d9f76-4b6a-4b4d-8656-17b116276fbf",
          name: "Bangladesh Women vs Sri Lanka Women, 3rd ODI, Sri Lanka Women tour of Bangladesh, 2026",
          status: "Sri Lanka Women won by 7 wkts",
          venue: "Shahid Kamruzzaman Stadium, Rajshahi",
          date: "2026-04-25",
          dateTimeGMT: "2026-04-25T03:30:00",
          teams: ["Bangladesh Women", "Sri Lanka Women"],
          teamInfo: [
            {
              name: "Bangladesh Women",
              shortname: "BANW",
              img: "https://g.cricapi.com/iapi/10-637877074628008258.webp?w=48",
            },
            {
              name: "Sri Lanka Women",
              shortname: "SLW",
              img: "https://g.cricapi.com/iapi/4191-638101639309122979.webp?w=48",
            },
          ],
          score: [
            {
              r: 213,
              w: 8,
              o: 50,
              inning: "bangladesh women Inning 1",
            },
            {
              r: 214,
              w: 3,
              o: 46.3,
              inning: "Bangladesh Women,Sri Lanka Women Inning 1",
            },
          ],
          series_id: "9070e0d5-11ff-4f80-ba02-f645707e55cf",
          fantasyEnabled: true,
          bbbEnabled: false,
          hasSquad: true,
          matchStarted: true,
          matchEnded: true,
        },
      ],
      status: "success",
      info: {
        hitsToday: 60,
        hitsUsed: 1,
        hitsLimit: 100,
        credits: 0,
        server: 14,
        offsetRows: 0,
        totalRows: 28,
        queryTime: 139.3978,
        s: 0,
        cache: 1,
      },
    },
  ];

export default function CricketLivePage() {
  const [liveMatches, setLiveMatches] = useState([]);
  const [otherMatches, setOtherMatches] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState("ALL");
  const allMatches = [...liveMatches, ...otherMatches];

  const cskMatches = allMatches.filter((m) =>
    m?.teams?.includes("Chennai Super Kings"),
  );



  const fetchMatches = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      // const data = mockData;

      console.log("my  data ", data);

      if (data.status === "failure") {
        console.error("API Limit Exceeded:", data.reason);
        return;
      }

      const matches = data?.data || [];

      const live = matches.filter((m) => m?.matchStarted && !m?.matchEnded);

      const others = matches.filter((m) => !m?.matchStarted || m?.matchEnded);

      setLiveMatches(live);
      setOtherMatches(others);
    } catch (err) {
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
    }
  };



useEffect(() => {
  fetchMatches();
}, []);

  return (
    <>
      {/* ================= PROFESSIONAL DARK HERO SECTION ================= */}
      <section className="relative min-h-[400px] md:min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Ultra Dark Static Background */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at top left, #0a0e1a 0%, #0f0f23 30%, #111827 60%, #030712 100%)",
          }}
        />

        {/* Static Dark Background Shapes */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-slate-900/40 via-slate-950/50 to-slate-950/60 rounded-full blur-3xl opacity-80" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-gray-900/40 to-slate-950/50 rounded-full blur-3xl opacity-80" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-slate-900/30 to-gray-900/40 rounded-full blur-3xl opacity-70" />
        </div>

        {/* Subtle Static Grid Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/20 to-transparent opacity-30 pointer-events-none">
          <div className="absolute inset-0 [background-image:linear-gradient(rgba(55,65,81,0.15)1px,transparent1px),linear-gradient(90deg,rgba(55,65,81,0.15)1px,transparent1px)] [background-size:40px40px] opacity-50" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center mt-30">
          <h1 className="text-5xl mt-12 md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-slate-100 via-white to-slate-200 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-2xl tracking-tight">
            LIVE CRICKET
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-300/95 max-w-2xl mx-auto mb-12 px-4 drop-shadow-xl leading-relaxed">
            Real-time scores • Instant updates
          </p>

          {/* Status Badge */}
          <div className="inline-flex items-center gap-3 px-8 py-4 bg-slate-900/90 backdrop-blur-xl rounded-3xl border border-slate-700/60 mb-12 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-300 hover:border-slate-600/80">
            <div className="w-3 h-3 bg-gradient-to-r from-emerald-400/90 to-teal-400/90 rounded-full shadow-lg animate-pulse" />
            <span className="text-sm font-semibold text-slate-200 tracking-wider uppercase">
              Live Updates Active
            </span>
          </div>
        </div>
      </section>

      {/* ================= MAIN CONTENT ================= */}

      <div className="container mx-auto px-4 py-16 lg:py-24 relative z-10">
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {["ALL", "Chennai Super Kings", "Gujarat Titans"].map((team) => (
            <button
              key={team}
              onClick={() => setSelectedTeam(team)}
              className={`px-4 py-2 rounded-xl font-semibold ${
                selectedTeam === team
                  ? "bg-cyan-500 text-white"
                  : "bg-slate-700 text-white/70"
              }`}
            >
              {team}
            </button>
          ))}
        </div>

        {cskMatches.length > 0 && (
          <motion.section className="mb-20">
            <h2 className="text-3xl font-bold text-yellow-400 mb-6 text-center">
              🟡 CSK MATCHES
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cskMatches.map((match, index) => (
                <MatchCardPro
                  key={match.id}
                  match={match}
                  delay={index * 0.1}
                  isLive={!match.matchEnded}
                />
              ))}
            </div>
          </motion.section>
        )}

        {!loading && liveMatches.length === 0 && (
          <motion.p
            className="text-center text-amber-400 text-lg font-medium mt-12 mb-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            ⚠️ Live score missing 😶 Umpire kitta poi check pannitu varom…
          </motion.p>
        )}

        {/* Loading State */}
        <AnimatePresence>
          {loading && (
            <motion.div
              className="flex flex-col items-center justify-center py-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="relative">
                <div className="w-20 h-20 border-4 border-gray-700/50 border-t-cyan-400 rounded-full animate-spin" />
                <div
                  className="absolute inset-0 w-20 h-20 border-4 border-transparent border-t-emerald-400 rounded-full animate-spin"
                  style={{ animationDuration: "1.5s" }}
                />
              </div>
              <p className="text-2xl font-semibold text-white/80 mt-6">
                Loading live matches...
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 🔴 LIVE SECTION */}
        <AnimatePresence>
          {liveMatches.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-24"
            >
              <motion.div
                className="flex items-center gap-4 mb-12 p-6 bg-gradient-to-r from-red-500/10 to-rose-500/10 rounded-3xl backdrop-blur-xl border border-red-400/30 shadow-2xl"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(239,68,68,0.3)",
                }}
                transition={{ duration: 0.3 }}
              >
                <div className="w-4 h-4 bg-red-400 rounded-full animate-ping" />
                <div>
                  <h2 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-red-400 via-rose-400 to-pink-400 bg-clip-text text-transparent">
                    LIVE MATCHES
                  </h2>
                  <p className="text-sm font-medium text-red-300 mt-1">
                    ({liveMatches.length} active)
                  </p>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {liveMatches.map((match, index) => (
                  <MatchCardPro
                    key={match.id}
                    match={match}
                    delay={index * 0.1}
                    isLive={true}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* 📋 OTHER MATCHES */}
        <AnimatePresence>
          {otherMatches.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl lg:text-5xl font-black text-center bg-gradient-to-r from-slate-200 via-blue-200 to-emerald-200 bg-clip-text text-transparent mb-16"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                UPCOMING & RECENT
              </motion.h2>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {otherMatches.map((match, index) => (
                  <MatchCardPro
                    key={match.id}
                    match={match}
                    delay={index * 0.1}
                    isLive={false}
                  />
                ))}
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* Empty State */}
        {liveMatches.length === 0 && otherMatches.length === 0 && !loading && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-32"
          >
            <div className="w-32 h-32 bg-gradient-to-br from-slate-700 to-slate-800 rounded-3xl flex items-center justify-center mx-auto mb-8 backdrop-blur-xl border border-slate-600/50">
              <span className="text-5xl">🏏</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-white/80 mb-6">
              No matches right now
            </h2>
            <p className="text-xl text-slate-400 max-w-md mx-auto">
              Check back soon for live cricket action and updates!
            </p>
          </motion.div>
        )}
      </div>

      {/* Enhanced Background Effects */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 right-20 w-64 h-64 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>
    </>
  );
}

// 🔥 PROFESSIONAL MATCH CARD
function MatchCardPro({ match, delay = 0, isLive }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{
        y: -8,
        scale: 1.02,
        boxShadow: "0 35px 60px -15px rgba(34,197,94,0.3)",
      }}
      className="group relative bg-gradient-to-b from-slate-900/90 via-slate-800/70 to-slate-900/90 backdrop-blur-xl border border-slate-700/40 rounded-3xl p-8 h-full shadow-2xl hover:border-cyan-400/50 transition-all duration-500 overflow-hidden hover:shadow-cyan-500/20"
    >
      {/* Live Status Badge */}
      {isLive && (
        <motion.div
          className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-2xl border-4 border-white/20"
          animate={{
            scale: [1, 1.08, 1],
            rotate: [0, 3, -3, 0],
          }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <span className="text-lg font-bold text-white drop-shadow-lg">
            ● LIVE
          </span>
        </motion.div>
      )}

      {/* Premium Glass Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-emerald-500/5 rounded-3xl group-hover:bg-gradient-to-r group-hover:from-cyan-400/10 group-hover:to-emerald-400/10 transition-all duration-500" />

      {/* Match Title */}
      <h3 className="text-xl md:text-2xl font-bold text-white mb-6 leading-tight group-hover:text-cyan-300 transition-all duration-400 line-clamp-2 z-10 relative">
        {match.name}
      </h3>

      {/* Match Info */}
      <div className="space-y-4 mb-8 z-10 relative">
        <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/70 transition-all duration-300">
          <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse" />
          <div>
            <span className="text-xs text-slate-400 font-medium tracking-wide">
              Status
            </span>
            <p className="font-semibold text-white text-sm">{match.status}</p>
          </div>
        </div>
        {match.venue && (
          <div className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-2xl group-hover:bg-slate-700/70 transition-all duration-300">
            <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
            <div>
              <span className="text-xs text-slate-400 font-medium tracking-wide">
                Venue
              </span>
              <p className="font-semibold text-white text-sm truncate">
                {match.venue}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Teams Section */}
      <div className="flex items-stretch justify-between mb-8 gap-4 z-10 relative">
        {match.teamInfo?.map((team, i) => (
          <motion.div
            key={i}
            className="flex flex-col items-center flex-1 gap-3 p-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-cyan-400/40 transition-all duration-300 group/team"
            whileHover={{ scale: 1.05 }}
          >
            <motion.div
              className="w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border-3 border-white/20 shadow-xl group-hover/team:border-cyan-400/60 group-hover/team:shadow-cyan-500/30 transition-all duration-400 relative"
              whileHover={{ scale: 1.1 }}
            >
              <motion.img
                src={team.img}
                alt={team.name}
                className="w-full h-full object-cover"
                whileHover={{ rotate: [0, 2, -2, 0] }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
            <span className="font-bold text-white text-sm md:text-base tracking-wide text-center min-h-[2rem] flex items-center">
              {team.shortname}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Scores Section */}
      <div className="relative z-10">
        <div className="space-y-3 pt-6 border-t border-white/15">
          {match.score?.map((s, i) => (
            <motion.div
              key={i}
              className="group/score flex items-baseline justify-between p-4 bg-gradient-to-r from-slate-800/50 to-slate-900/50 rounded-2xl backdrop-blur-sm border border-slate-700/50 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 hover:border-cyan-400/30 transition-all duration-300"
              initial={{ scaleX: 0.8, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
            >
              <span className="text-sm font-medium text-slate-400 uppercase tracking-wide">
                {s.inning}
              </span>
              <div className="text-right">
                <span className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 bg-clip-text text-transparent tracking-tight">
                  {s.r}
                </span>
                <div className="flex items-baseline gap-2 text-2xl font-bold text-white/80">
                  <span>{s.w}</span>
                  <span className="text-lg text-slate-500">({s.o})</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-400 via-emerald-400 to-teal-400 rounded-b-3xl scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left opacity-0 group-hover:opacity-100" />
    </motion.div>
  );
}
