import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CostLivinginChennai from "../src/Pages/CostOfLiving";
import HomePage from "../src/Pages/HomePage";
import Innovate from "../src/Pages/Innovate";
import Invest from "../src/Pages/Invest";
import Live from "../src/Pages/Live";
import Visit from "../src/Pages/VisitPage";
import Volunteer from "../src/Pages/Volunteer";
import Work from "../src/Pages/Work";
import "./App.css";
import axios from "axios";

import EducationNew from "./Components/EducationNew";
import HeaderWithMegaMenu from "./Components/ExampleMegamenu";
import Footer from "./Components/Footer";
import MenuBar from "./Components/MenuBar";
import Technologynewchennai from "./Components/TechnologyNew";
import Culturereligiousattractions from "./Pages/SubPages/LivePages/Culturereligiousattractions";
import EducationInstitutions from "./Pages/SubPages/LivePages/EducationInstitutions";
import EmploymentinChennai from "./Pages/SubPages/LivePages/EmploymentinChennai";
import FutureGrowthDevelopment from "./Pages/SubPages/LivePages/FutureGrowthDevelopment";
import Healthcare from "./Pages/SubPages/LivePages/Healthcare";
import Neighbourhood from "./Pages/SubPages/LivePages/Neighbourhood";
import QualityofLife from "./Pages/SubPages/LivePages/QualityofLife";
import Recreation from "./Pages/SubPages/LivePages/Recreation";
import ResidencyPropertyRentBuyinChennai from "./Pages/SubPages/LivePages/ResidencyPropertyRentBuyinChennai";

import Living from "./Pages/SubPages/LivePages/Living";
import Residency from "./Pages/SubPages/LivePages/Residency";
import Transportation from "./Pages/SubPages/LivePages/Transportation";
import Transportationchennai from "./Pages/SubPages/LivePages/Transportation-chennai";

//##################### NEWLY ADEDD  ###################################
import { Navigate } from "react-router-dom";

import Chengalpattu from "./Pages/SubPages/LivePages/Chengalpattu";
import Kanchipuram from "./Pages/SubPages/LivePages/Kanchipuram";
import Pondicherry from "./Pages/SubPages/LivePages/Pondicherry";
import Sriperumbudur from "./Pages/SubPages/LivePages/Sriperumbudur";
import Tirupati from "./Pages/SubPages/LivePages/Tirupati";
import Vellore from "./Pages/SubPages/LivePages/Vellore";
import CareerGrowth from "./Pages/SubPages/WorkPages/CareerGrowth";
import CoworkingSpaces from "./Pages/SubPages/WorkPages/CoworkingSpaces";
import Networking from "./Pages/SubPages/WorkPages/Networking";
import PG from "./Pages/SubPages/WorkPages/PG";
import SalariesBenefits from "./Pages/SubPages/WorkPages/SalariesBenefits";
import Unicorns from "./Pages/SubPages/WorkPages/Unicorns";
import WorkLifeBalance from "./Pages/SubPages/WorkPages/WorkLifeBalance";
import AgriTechinChennai from "./Pages/SubPages/InnovatePages/AgriTech-in-Chennai";
import AIinChennai from "./Pages/SubPages/InnovatePages/AI-in-Chennai";
import ARVRchennai from "./Pages/SubPages/InnovatePages/AR-VR-chennai";
import AutoTechinChennai from "./Pages/SubPages/InnovatePages/AutoTech-in-Chennai";
import BlockchaininChennai from "./Pages/SubPages/InnovatePages/Blockchain-in-Chennai";
import EduTechinChennai from "./Pages/SubPages/InnovatePages/EduTech-in-Chennai";
import EVMobilityinChennai from "./Pages/SubPages/InnovatePages/EV-Mobility-in-Chennai";
import HealthTechinChennai from "./Pages/SubPages/InnovatePages/Health-Tech-in-Chennai";
import ItandSoftwareCompanies from "./Pages/SubPages/InnovatePages/It-and-Software-Companies";
import RoboticsinChennai from "./Pages/SubPages/InnovatePages/Robotics-in-Chennai";
import SmartCity from "./Pages/SubPages/InnovatePages/Smart-City";
import ThreeDPrintinginChennai from "./Pages/SubPages/InnovatePages/ThreeD-Printing-in-Chennai";
import ChennaiQuiz from "./Pages/Activities/ChennaiQuiz/ChennaiQuiz";
import QuizForm from "./Pages/Activities/ChennaiQuiz/QuizForm";
import QuizFormCheckout from "./Pages/Activities/ChennaiQuiz/QuizFormCheckout";
import EventsHome from "./Pages/Events";
import EventDetailPage from "./Pages/Events/EventsDetails";
import EventsPage from "./Pages/Events/EventsPage";
import Automotive from "./Pages/SubPages/InvestPages/Automotive";
import ChennaiAutoMotiveEv from "./Pages/SubPages/InvestPages/ChennaiAutomotiveEv";
import ChennaiRealEstate from "./Pages/SubPages/InvestPages/ChennaiRealEstate";
import DeepTechAIStartupsinChennai from "./Pages/SubPages/InvestPages/DeepTech-AI-Startups-in-Chennai";
import DeepTechAIRI from "./Pages/SubPages/InvestPages/DeeptechAiRandD";
import EduTech from "./Pages/SubPages/InvestPages/EduTech";
import InvestEventsChennai from "./Pages/SubPages/InvestPages/InvestEventsChennai";
import InvestExhibitionsChennai from "./Pages/SubPages/InvestPages/InvestExhibitionsChennai";
import InvestFormalitiesRegulationsChennai from "./Pages/SubPages/InvestPages/InvestFormalitiesRegulationsChennai";
import InvestFranchiseChennai from "./Pages/SubPages/InvestPages/InvestFranchiseChennai";
import InvestGovernmentInitiativesChennai from "./Pages/SubPages/InvestPages/InvestGovernmentInitiativesChennai";
import InvestNewsChennai from "./Pages/SubPages/InvestPages/InvestNewsChennai";
import InvestRealEstateChennai from "./Pages/SubPages/InvestPages/InvestRealEstateChennai";
import InvestRenewableEnergyChennai from "./Pages/SubPages/InvestPages/InvestRenewableEnergyChennai";
import InvestRetirementChennai from "./Pages/SubPages/InvestPages/InvestRetirementChennai";
import InvestStartupsChennai from "./Pages/SubPages/InvestPages/InvestStartupsChennai";
import WhyChennai from "./Pages/SubPages/InvestPages/WhyChennai";
import Accomodation from "./Pages/SubPages/VisitPages/Accomodation";
import Conferences from "./Pages/SubPages/VisitPages/Conferences";
import Events from "./Pages/SubPages/VisitPages/Events";
import Food from "./Pages/SubPages/VisitPages/Food";
import Hiddengems from "./Pages/SubPages/VisitPages/Hiddengems";
import Itinerary from "./Pages/SubPages/VisitPages/Itinerary";
import MexicanCuisineinChennai from "./Pages/SubPages/VisitPages/Mexican-Cuisine-in-Chennai";
import Placestovisit from "./Pages/SubPages/VisitPages/Placestovisit";
import Shopping from "./Pages/SubPages/VisitPages/Shopping";
import Thingstodo from "./Pages/SubPages/VisitPages/Thingstodo";
import Traveltips from "./Pages/SubPages/VisitPages/Traveltips";
import Wellness from "./Pages/SubPages/VisitPages/Wellness";
import TrendingDetails from "./Components/TrendingDetails";
import EventsDetails from "./Pages/EventsDetails";
import NightLifeInChennai from "./Pages/SubPages/VisitPages/ChennaiNightLife";
import Luxuryhotels from "./Pages/SubPages/VisitPages/Luxuryhotels";
import RestaurantsInChennai from "./Pages/SubPages/VisitPages/RestaurantsInChennai";

import SportsInChennai from "./Pages/SubPages/VisitPages/SportInChennai";
import EmploymentBusinessPermits from "./Pages/SubPages/WorkPages/EmploymentBusinessPermits";
import SearchResults from "./Components/SearchResults";
import EventsChennaiBusinessNetwork from "./Pages/SubPages/EventsPages/EventsChennaiBusinessNetwork";
import EventsImman from "./Pages/SubPages/EventsPages/EventsImman";
import EventsSpeed from "./Pages/SubPages/EventsPages/EventsSpeed";
import EventsStartups from "./Pages/SubPages/EventsPages/EventsStarups";
import EventsStrangersMeet from "./Pages/SubPages/EventsPages/EventsStranger";
import EventsTechInnovaters from "./Pages/SubPages/EventsPages/EventsTechInnovaters";
import EventsVishal from "./Pages/SubPages/EventsPages/EventsVishal";
import FintechChennai from "./Pages/SubPages/InvestPages/Fintech-in-Chennai";
import ItChennai from "./Pages/SubPages/InvestPages/It-Chennai";
import AromaticBurmeseCurries from "./Pages/SubPages/VisitPages/AromaticBurmeseCurries";
import AromaticThaiCurries from "./Pages/SubPages/VisitPages/AromaticThaiCurries";
import AuthenticChineseMains from "./Pages/SubPages/VisitPages/AuthenticChineseMains";
import BreakfastTiffinStaples from "./Pages/SubPages/VisitPages/BreakfastTiffinStaples";
import BudgetStays from "./Pages/SubPages/VisitPages/BudgetStays";
import ChennaiEntertainment from "./Pages/SubPages/VisitPages/ChennaiEntertainment";
import ChennaiHealthcare from "./Pages/SubPages/VisitPages/ChennaiHealthcare";
import ChennaiNetworks from "./Pages/SubPages/VisitPages/ChennaiNetwork";
import ChennaiSports from "./Pages/SubPages/VisitPages/ChennaiSports";
import ChineseCuisineinChennai from "./Pages/SubPages/VisitPages/Chinese-Cuisine-in-Chennai";
import ClassicEuropeanDishes from "./Pages/SubPages/VisitPages/ClassicEuropeanDishes";
import ClassicItalianFlavors from "./Pages/SubPages/VisitPages/ClassicItalianFlavors";
import CoastalandReginalSpecialist from "./Pages/SubPages/VisitPages/CoastalandReginalSpecilalist";
import ContinentalCuisineinChennai from "./Pages/SubPages/VisitPages/Continental-Cuisine-in-Chennai";
import DelicateJapaneseSushi from "./Pages/SubPages/VisitPages/DelicateJapaneseSushi";
import DimSumandNoodles from "./Pages/SubPages/VisitPages/DimSumandNoodles";
import FlavorfulBurmeseSoups from "./Pages/SubPages/VisitPages/FlavorfulBurmeseSoups";
import FragrantMalaysianRiceDishes from "./Pages/SubPages/VisitPages/FragrantMalaysianRiceDishes";
import FreshMediterraneanSalads from "./Pages/SubPages/VisitPages/FreshMediterraneanSalads";
import GlobalContinentalFlavors from "./Pages/SubPages/VisitPages/GlobalContinentalFlavors";
import GrilledMediterraneanSpecialties from "./Pages/SubPages/VisitPages/GrilledMediterraneanSpecialties";
import HeartyMexicanBurritos from "./Pages/SubPages/VisitPages/HeartyMexicanBurritos";
import ItalianCuisineinChennai from "./Pages/SubPages/VisitPages/Italian-Cuisine-in-Chennai";
import MalaysianFlavorsinChennai from "./Pages/SubPages/VisitPages/Malaysian-Flavors-in-Chennai";
import Midrangehotels from "./Pages/SubPages/VisitPages/Midrangehotels";
import NorthIndianRestaurantsinChennai from "./Pages/SubPages/VisitPages/North-Indian-Restaurants-in-Chennai";
import PlacetoVisitAncientTemples from "./Pages/SubPages/VisitPages/Place-to-Visit-Ancient-Temples";
import PlacetoVisitArtistsVillages from "./Pages/SubPages/VisitPages/Place-to-Visit-Artists-Villages";
import PlacetoVisitBotanicalGardens from "./Pages/SubPages/VisitPages/Place-to-Visit-Botanical-Gardens";
import PlacetoVisitCulturalFoundations from "./Pages/SubPages/VisitPages/Place-to-Visit-Cultural-Foundations";
import PlacetoVisitHistoricFort from "./Pages/SubPages/VisitPages/Place-to-Visit-Historic-Fort";
import PlacetoVisitModernMalls from "./Pages/SubPages/VisitPages/Place-to-Visit-Modern-Malls";
import PlacetoVisitStateMuseum from "./Pages/SubPages/VisitPages/Place-to-Visit-State-Museum";
import PlacetoVisitUrbanBeaches from "./Pages/SubPages/VisitPages/Place-to-Visit-Urban-Beaches";
import RegionalItalianDelights from "./Pages/SubPages/VisitPages/RegionalItalianDelights";
import Resortsandvillas from "./Pages/SubPages/VisitPages/Resortsandvillas";
import RichMalaysianNoodles from "./Pages/SubPages/VisitPages/RichMalaysianNoodles";
import RichNorthIndianCurries from "./Pages/SubPages/VisitPages/RichNorthIndianCurries";
import SavoryJapaneseRamen from "./Pages/SubPages/VisitPages/SavoryJapaneseRamen";
import Servicedapartments from "./Pages/SubPages/VisitPages/Servicedapartments";
import ShoppingLocalFindsDiscoverLocalTreasures from "./Pages/SubPages/VisitPages/Shopping-Local-Finds-Discover-Local-Treasures";
import ShoppingLocalFindsSavorEdibleSouvenirs from "./Pages/SubPages/VisitPages/Shopping-Local-Finds-Savor-Edible-Souvenirs";
import ShoppingTheModernMarketplaceExplore from "./Pages/SubPages/VisitPages/Shopping-The-Modern-Marketplace-Explore";

// ###############NEW FILES IN FUN CHENNAI########################################

import BeachesInChennai from "./Pages/SubPages/VisitPages/FunChennai/Beaches";
import BowlingAlleysInChennai from "./Pages/SubPages/VisitPages/FunChennai/BowlingAlleysInChennai";
import GamingArcadesInChennai from "./Pages/SubPages/VisitPages/FunChennai/GamingArcadesInChennai";
import GoKarting from "./Pages/SubPages/VisitPages/FunChennai/GoKarting";
import HorrorHousesInChennai from "./Pages/SubPages/VisitPages/FunChennai/HorrorHousesInChennai";
import MultiplexesInChennai from "./Pages/SubPages/VisitPages/FunChennai/MultiplexesInChennai";
import NatureWalk from "./Pages/SubPages/VisitPages/FunChennai/NatureWalk";
import TrampolineInChennai from "./Pages/SubPages/VisitPages/FunChennai/TrampolineInChennai";
import TurfCourts from "./Pages/SubPages/VisitPages/FunChennai/TurfCourts";
import Zipline from "./Pages/SubPages/VisitPages/FunChennai/Zipline";

import ShoppingTradition from "./Pages/SubPages/VisitPages/Shopping-Tradition-Explore-Artisan-Hubs";
import ShoppingTraditionLocate from "./Pages/SubPages/VisitPages/Shopping-Tradition-Locate-Classic-Textiles";
import SouthIndianRestaurantsinChennai from "./Pages/SubPages/VisitPages/South-Indian-Restaurants-in-Chennai";
import SpicySriLankanCurries from "./Pages/SubPages/VisitPages/SpicySriLankanCurries";
import SriLankanCuisineinChennai from "./Pages/SubPages/VisitPages/Sri-Lankan-Cuisine-in-Chennai";
import SriLankanHoppers from "./Pages/SubPages/VisitPages/SriLankanHoppers";
import TandooriDelights from "./Pages/SubPages/VisitPages/TandooriDelights";
import TasteofThailandinChennai from "./Pages/SubPages/VisitPages/Taste-of-Thailand-in-Chennai - Copy";
import ThingstodoAdventurePlaces from "./Pages/SubPages/VisitPages/Things-to-do-Adventure-Places";
import ThingstodoBeachSideFun from "./Pages/SubPages/VisitPages/Things-to-do-Beachside";
import ThingstoBowlingAlleys from "./Pages/SubPages/VisitPages/Things-to-do-Bowling-Alleys";
import ThingstodoBungeeJumping from "./Pages/SubPages/VisitPages/Things-to-do-Bungee-Jumping";
import ThingstoFamilyEntertainmentCenters from "./Pages/SubPages/VisitPages/Things-to-do-Family-Entertainment-Centers";
import ThingstodoGamingArcade from "./Pages/SubPages/VisitPages/Things-to-do-Gaming-Arcades";
import ThingstodoGokart from "./Pages/SubPages/VisitPages/Things-to-do-Gokart";
import ThingstodoHorrorHouse from "./Pages/SubPages/VisitPages/Things-to-do-HorrorHouse";
import ThingstodoMultiplexes from "./Pages/SubPages/VisitPages/Things-to-do-Multiplexes";
import ThingstodoNatureWalk from "./Pages/SubPages/VisitPages/Things-to-do-Naturewalk";
import ThingstodoTrampolineParks from "./Pages/SubPages/VisitPages/Things-to-do-Trampoline-Parks";
import ThingstodoTurfSports from "./Pages/SubPages/VisitPages/Things-to-do-TurfSports";
import ThingstodoZiplines from "./Pages/SubPages/VisitPages/Things-to-do-Ziplines";
import TraditionalSouthIndianMealsThali from "./Pages/SubPages/VisitPages/TraditionalSouthIndianMealsThali";
import VibrantThaiStreetFood from "./Pages/SubPages/VisitPages/VibrantThaiStreetFood";
import ZestyMexicanTacos from "./Pages/SubPages/VisitPages/ZestyMexicanTacos";

import EductechAndSkill from "./Pages/SubPages/InvestPages/EdutechandSkill";
import FintechandFinancial from "./Pages/SubPages/InvestPages/FintechandFinancial";
import HealthTechMediTech from "./Pages/SubPages/InvestPages/HealthTechMediTech";
import ITITeSSaaS from "./Pages/SubPages/InvestPages/IT-ITeS-SaaS";
import LogitechWareHousePorts from "./Pages/SubPages/InvestPages/LogitechWareHousePorts";
import MediaEntertainment from "./Pages/SubPages/InvestPages/MediaEntertaiment";
import RenewableEnergyChennai from "./Pages/SubPages/InvestPages/Renewableenergy";
import WomenSafty from "./Pages/SubPages/LivePages/WomenSafty";
import NorthChennai from "./Pages/SubPages/Utilities/NorthChennai";
import SouthChennai from "./Pages/SubPages/Utilities/SouthChennai";
import WestChennai from "./Pages/SubPages/Utilities/WestChennai";
import BurmeseCusine from "./Pages/SubPages/VisitPages/Burmese-Cusine";
import MexicanCusine from "./Pages/SubPages/VisitPages/MexicanCusine";
import Thankyou from "./Pages/Thankyou";
import ThankyouForContest from "./Pages/Activities/ThanksPage";

import About from "./Pages/About";
import Contact from "./Pages/contact";
import Faq from "./Pages/Faq";
import NewsletterForm from "./Components/NewsletterNew";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import RefundPolicy from "./Pages/RefundPolicy";

import CarRally from "./Pages/CarRally";
import CarRallyForm from "./Pages/CarRallyForm";
import TicketCheckout from "./Pages/CarryFormCheckout";
import CarThankyou from "./Pages/CarThankyou";
import QuizThankyou from "./Pages/Activities/ChennaiQuiz/QuizThankyou";

import EventFunction from "./Pages/EventFunction";
import KiteFestivalDay3 from "./Pages/KiteFestivalDay3";
import KiteFestivalDay4 from "./Pages/KiteFestivalDay4";
import NammaStories from "./Pages/NammaStories";
import NewsLetter from "./Pages/NewsLetter";
import PulicatLake from "./Pages/SubPages/LivePages/PulicatLake";
import Yealgiri from "./Pages/SubPages/LivePages/Yelagiri";
import Surfing from "./Pages/SubPages/VisitPages/FunChennai/Surfing";
import JapaneseCuisineinChennai from "./Pages/SubPages/VisitPages/Japanese-Cuisine-in-Chennai";
import KoreanCuisineinChennai from "./Pages/SubPages/VisitPages/Korean-Cuisine-in-Chennai";

import BlogDetails from "../src/Pages/Blogs/BlogDetails";
import BlogList from "./../src/Pages/Blogs/BlogList";
import ScrollToHashElement from "./Components/ScrollToHashElement";

import Chidambaram from "./Pages/SubPages/LivePages/Chidambaram";
import Kalpakkam from "./Pages/SubPages/LivePages/Kalpakkam";
import Thiruthani from "./Pages/SubPages/LivePages/Thiruthani";
import Tiruvannamalai from "./Pages/SubPages/LivePages/Tiruvannamalai";
import VedanthangalBirdSantuary from "./Pages/SubPages/LivePages/Vedanthangal-bird-santaury";
import SuperChennaiEvents from "./Pages/SuperChennaiEvents";

import IconofthemonthAugust from "./Pages/Icon-of-the-month-august";
import Iconsofthemonth from "./Pages/iconsofthemonth";
import ReimagineChennai from "./Pages/ReimagineChennai";
import IconofthemonthSeptember from "./Pages/Icon-of-the-month-september";
import IconofthemonthSeptember1 from "./Pages/Icon-of-the-month-september1";
import Iconofthemonth from "./Pages/Icon-of-the-month-july";
import IconofthemonthOct from "./Pages/Icon-of-the-month-oct";
import IconofthemonthDec from "./Pages/Icon-of-the-month-dec";
import IconofthemonthNov from "./Pages/Icon-of-the-month-nov";

import Neighbourhoods from "./Pages/Neighbourhoods/neighbourhoods";
import PrideofChennai from "./Pages/PrideofChennai";
import PropertiesPage from "./Pages/Properties/PropertiesPage";
import PropertyDetailPage from "./Pages/Properties/PropertyDetailPage";
import ChennaiApp from "./Pages/Chennai-app";
import EventsDetailsOld from "./Pages/EventsDetails";

// ############# DYNAMIC PAGES ##################
import { PrivateRoute, PublicRoute } from "./Components/PrivateRoute";

import RestaurantsPage from "./Pages/Visits/Pages/Restaurants/RestaurantsPage";
import TestPage from "./Pages/Visits/Pages/Restaurants//testPage";
import SuperchennaiContests from "./Pages/SuperchennaiContest/ContestPage";
import SuperchennaiContestDetails from "./Pages/SuperchennaiContest/ContestDetailsPage";
import IconOfMonthList from "./Pages/IconOfTheMonth/IconOfTheMonth";
import IconOfMonthDetails from "./Pages/IconOfTheMonth/IconOfMonthDetailPage";
import NeighbourhoodDetail from "./Pages/Neighbourhoods/neighbourhoodsDetailPage"
import MargazhiMomentsContest from "./Pages/Activities/MargazhiMonth/MargazhiMomentsContest";
import MargazhiPageCalendar from "./Pages/Activities/MargazhiMonth/MargazhiPage";
import HotshotChennaiContest from "./Pages/Activities/HotshotChennai/HotshotChennaiContest";

import NotFound from "../src/NotFound";
import ImagePopup from "./Components/ImagePopup";
import LanguageSwitcher from "./Components/LanguageDropdown/LanguageSwitcher";
import { useLocation } from "react-router-dom";

import Register from "./Pages/Activities/QuizGame/Pages/Register";
import Login from "./Pages/Activities/QuizGame/Pages/Login";
import Questions from "./Pages/Activities/QuizGame/Pages/Questions";
import UsersResultsPage from "./Pages/Activities/QuizGame/Pages/UsersResultsPage";
// import ForgotPassword from "./Pages/Activities/QuizGame/Pages/ForgotPassword";
import ResetPassword from "./Pages/Activities/QuizGame/Pages/ResetPassword";
import AdminView from "./Pages/Activities/QuizGame/Pages/AdminView";
import LoginWithOtp from "./Pages/Activities/QuizGame/Pages/LoginWithOtp";
import VerifyOtp from "./Pages/Activities/QuizGame/Pages/VerifyOtp";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [animate, setAnimate] = useState(false);
  const menuItems = [
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Career", href: "/career" },
    { label: "Events", href: "/visit/events-in-chennai" },
    { label: "Social Chennai", href: "/social-chennai" },
    { label: "FAQ", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Sustainability", href: "/sustainability" },
  ];
  const [query, setQuery] = useState("");
  const [menuBar, setMenuBar] = useState(false);
  const [menuBar1, setMenuBar1] = useState(false);
  const [loading, setLoading] = useState(false);
  const [suggestions, setSuggestions] = useState([]);

  const suggestionsData = [
    { title: "Trending Chennai", searchText: "trending" },
    { title: "Fun in Chennai", searchText: "fun chennai" },
    { title: "Startup Ecosystem", searchText: "startup chennai" },
    { title: "IT Sector Growth", searchText: "it sector" },
    { title: "Food Trails", searchText: "diverse delights" },
    { title: "Chettinad Cuisine", searchText: "chettinad" },
    { title: "Italian Food", searchText: "italian" },
    { title: "Chinese Cuisine", searchText: "chinese" },
    { title: "North Indian Dishes", searchText: "north indian" },
    { title: "Continental Flavors", searchText: "continental" },
    { title: "Burmese Cuisine", searchText: "burmese" },
    { title: "Malaysian Food", searchText: "malaysian" },
    { title: "South Indian Veg", searchText: "south indian" },
    { title: "Mexican Dishes", searchText: "mexican" },
    { title: "Chennai Investments", searchText: "investments" },
    { title: "Real Estate", searchText: "real estate" },
    { title: "OMR - IT Corridor", searchText: "omr" },
    { title: "Adyar Properties", searchText: "adyar" },
    { title: "Maraimalai Nagar", searchText: "maraimalai" },
    { title: "Utilities", searchText: "utilities" },
    { title: "Banks & Pharmacies", searchText: "banks" },
    { title: "ChillOut Zone", searchText: "chillout" },
    { title: "Beaches in Chennai", searchText: "beaches" },
    { title: "Shopping Malls", searchText: "malls" },
    { title: "Restobars", searchText: "restobars" },
    { title: "Events Calendar", searchText: "events" },
    { title: "Music Shows", searchText: "concerts" },
    { title: "Volunteer in Chennai", searchText: "volunteer" },
    { title: "Public Art Projects", searchText: "design" },
    { title: "Explore More", searchText: "explore" },
    { title: "Social Chennai", searchText: "social chennai" },
    { title: "Humans of Chennai", searchText: "humans" },
    { title: "Food Culture", searchText: "culinary" },
    { title: "Nightlife in Chennai", searchText: "nightlife" },
    { title: "Local Events", searchText: "festivals" },
    { title: "Cultural Events", searchText: "culture" },
    { title: "Innovation in Chennai", searchText: "innovation" },
    { title: "Retire in Chennai", searchText: "retire" },
    { title: "Franchise in Chennai", searchText: "franchise" },
    { title: "Renewable Energy", searchText: "energy" },
    { title: "Youth Mentorship", searchText: "mentorship" },
    { title: "Technology in Chennai", searchText: "technology" },
  ];

  const handleInputChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    const filtered = suggestionsData.filter(
      (item) =>
        item.title.toLowerCase().includes(value.toLowerCase()) ||
        item.searchText.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(value ? filtered : []);
  };

  const handleSuggestionClick = (title) => {
    setQuery(title);
    setSuggestions([]);
  };

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setAnimate(true), 10);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const popupFunction = () => {
    setIsOpen(true);
  };
  useEffect(() => {
    if (menuBar) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuBar]);
  useEffect(() => {
    if (menuBar1) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuBar1]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim() !== "") {
      setLoading(true);
      setTimeout(() => {
        navigate(`/results?search=${encodeURIComponent(query)}`);
        setLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const containers = document.querySelectorAll(".container");

      containers.forEach((container) => {
        if (
          container.querySelector(".detailapiSec") &&
          !container.classList.contains("conatinerDetailsSection")
        ) {
          container.classList.add("conatinerDetailsSection");
        }
      });
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => observer.disconnect();
  }, []);

  const [footerReached, setFooterReached] = useState(false);
  const stickyRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const sticky = stickyRef.current;

      if (!footer || !sticky) return;

      const footerTop = footer.getBoundingClientRect().top;
      const stickyHeight = sticky.offsetHeight;

      const shouldHideSticky = footerTop < stickyHeight + 300;

      setFooterReached(shouldHideSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("popup-shown");

    if (!hasShownPopup) {
      console.log();
      setShowPopup(true);
      sessionStorage.setItem("popup-shown", "true");
    }
  }, []);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  // };

  //   useEffect(() => {
  //   const alreadyClosed = localStorage.getItem("popup-closed");

  //   if (!alreadyClosed) {
  //     setShowPopup(true);
  //   }
  // }, []);

  // const handleClosePopup = () => {
  //   setShowPopup(false);
  //   localStorage.setItem("popup-closed", "true"); // Save permanently
  // };

  const location = useLocation(); // ✔ Correct place
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyShown = localStorage.getItem("popupShown");

    if (location.pathname === "/") {
      setShowPopup(true); // home page always show
    } else if (!alreadyShown) {
      setShowPopup(true); // show once on other pages
      localStorage.setItem("popupShown", "true");
    }
  }, [location.pathname]);

  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  const hideOnMargazhiPage =
    location.pathname === "/contest/margazhi-month-photography-contest";
  const hideOnBlog = location.pathname === "/contest/blog/:slug";

  return (
    <>
      <ScrollToHashElement />
      <HeaderWithMegaMenu setMenuBar={setMenuBar} setMenuBar1={setMenuBar1} />

      {showPopup && !hideOnMargazhiPage && !hideOnBlog && (
        <ImagePopup
          imageUrl="/images/events/margazhi-contest-home-popup.jpg"
          onClose={() => setShowPopup(false)}
        />
      )}

      <div
        ref={stickyRef}
        className={`stickyIconsContainer ${
          footerReached ? "footerreached" : ""
        }`}
      >
        <a
          className="linkedin-sc"
          target="_blank"
          href="https://www.linkedin.com/company/super-chennai"
        >
          <img src="/images/Indeed.png" alt="Linkedin" />
        </a>
        <a
          className="instargam-sc"
          target="_blank"
          href="https://www.instagram.com/super_chennai_/"
        >
          <img src="/images/insta.png" alt="Instagram" />
        </a>
        <a
          className="facebook-sc"
          target="_blank"
          href="https://www.facebook.com/share/1Hsb1ypGGE/"
        >
          <img src="/images/fb.png" alt="Facebook" />
        </a>
        <a
          className="youtube-sc"
          target="_blank"
          href="https://www.youtube.com/@Super_Chennai"
        >
          <img src="/images/youtube.png" alt="Youtube" />
        </a>
        <a
          className="threads-sc"
          target="_blank"
          href="https://x.com/Super_Chennai_	"
        >
          <img src="/images/threads.png" alt="Twitter" />
        </a>
      </div>
      {!hideOnMargazhiPage && (
        <div
          id="margazhi-moments-tab"
          ref={stickyRef}
          className={`super-chennai-contest pointcastSticky nammaStorieslink margazhi-photography-contest${
            footerReached ? "footerreached" : ""
          }`}
        >
          <a href="/contest/margazhi-month-photography-contest">
            <img
              src="/images/tab-margazhi.png"
              alt="artificial intelligence challenge"
            />
          </a>
        </div>
      )}

      {/* <div
          ref={stickyRef}
          className={`icon-of-the-month pointcastSticky carRallylink ${
            footerReached ? "footerreached" : ""
          }`}
        >
          <a href="/icon-of-the-oct-month-2025">
            <img src="/images/icon-of-the-month.png" alt="Star of the month" />
          </a>
        </div> */}

      <div
        ref={stickyRef}
        className={`pointcastSticky ${footerReached ? "footerreached" : ""}`}
      >
        <a target="_blank" href="https://pointcast.com/demo/SuperChennai">
          <img src="/images/pointcast-icon.svg" alt="explore chennai" />
        </a>
      </div>

      <Routes>
        {/* ######### DYNAMIC PAGES ROUTES  ############################################ */}

        <Route path="superchennai-restaurants" element={<RestaurantsPage />} />
        <Route path="test" element={<TestPage />} />
        <Route path="/chennai-events" element={<EventsPage />} />
        <Route path="/events-in-chennai/:slug" element={<EventDetailPage />} />
        <Route path="/properties" element={<PropertiesPage />} />
        <Route path="/properties/:slug" element={<PropertyDetailPage />} />
        <Route path="/blog" element={<BlogList />} />
        <Route path="/blog/:slug" element={<BlogDetails />} />
        <Route path="/chennai-contests" element={<SuperchennaiContests />} />
        <Route
          path="/chennai-contests/:slug"
          element={<SuperchennaiContestDetails />}
        />

        <Route
          path="/chennai-icon-of-the-month-details/:slug"
          element={<IconOfMonthDetails />}
        />
        <Route
          path="/chennai-icon-of-the-month"
          element={<IconOfMonthList />}
        />

        {/* Public Routes */}
        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />
        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login setIsLoggedIn={setIsLoggedIn} />
            </PublicRoute>
          }
        />
        <Route
          path="/login-otp"
          element={
            <PublicRoute>
              <LoginWithOtp />
            </PublicRoute>
          }
        />
        <Route
          path="/verify-otp"
          element={
            <PublicRoute>
              <VerifyOtp />
            </PublicRoute>
          }
        />
        <Route
          path="/reset-password/:token"
          element={
            <PublicRoute>
              <ResetPassword />
            </PublicRoute>
          }
        />

        {/* Protected Routes */}
        <Route
          path="/questions"
          element={
            <PrivateRoute>
              <Questions />
            </PrivateRoute>
          }
        />
        <Route
          path="/your-results"
          element={
            <PrivateRoute>
              <UsersResultsPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-superchennai"
          element={
            <PrivateRoute>
              <AdminView />
            </PrivateRoute>
          }
        />

        {/* PUBLICK ROTES  */}

        <Route
          path="contest/margazhi-month-photography-contest"
          element={<MargazhiMomentsContest />}
        />
        <Route
          path="margazhi-season-2025-chennai"
          element={<MargazhiPageCalendar />}
        />

        <Route path="hotshots-in-chennai" element={<HotshotChennaiContest />} />
         <Route  path="/neighbourhood"element={<Neighbourhoods />} />
        <Route  path="/neighbourhood/:slug" element={<NeighbourhoodDetail />}/>
        {/* 404 Page */}
        <Route path="*" element={<NotFound />} />

        {/* ######### DYNAMIC PAGES ROUTES  ############################################ */}

        {/*----Main-Pages---------*/}

        <Route path="/" element={<HomePage />} />
        <Route path="/results" element={<SearchResults />} />

        <Route
          path="/volunteer-in-chennai"
          element={<Volunteer popupFunction={popupFunction} />}
        />
        <Route path="/innovate-chennai" element={<Innovate />} />
        <Route path="/invest-in-chennai" element={<Invest />} />

        <Route path="/live-in-chennai" element={<Live />} />

        <Route path="/visit-chennai" element={<Visit />} />
        <Route path="/work-in-chennai" element={<Work />} />

        <Route path="/oldevenslist" element={<EventsHome />} />
        <Route path="/eventsold/:slug" element={<EventsDetailsOld />} />

        <Route path="/media-coverage" element={<NewsLetter />} />
        <Route path="/event-function" element={<EventFunction />} />
        <Route path="/namma-stories" element={<NammaStories />} />
        <Route
          path="/reimagine-chennai-AI-art-challenge"
          element={<ReimagineChennai />}
        />
        <Route path="/superchennai-contest" element={<SuperChennaiEvents />} />

        <Route
          path="/icon-of-the-month-in-chennai"
          element={<Iconsofthemonth />}
        />
        <Route path="/car-treasure-hunt" element={<CarRally />} />
        <Route path="/carrallyform-hidedpage" element={<CarRallyForm />} />
        <Route path="/carrallyformcheckout" element={<TicketCheckout />} />
        <Route path="/kite-festival-day-3" element={<KiteFestivalDay3 />} />
        <Route path="/kite-festival-day-4" element={<KiteFestivalDay4 />} />
        <Route path="/technologynew" element={<Technologynewchennai />} />
        <Route path="/educationnew" element={<EducationNew />} />

        {/*####################### FUNCHENNAI ########################## */}

        <Route
          path="/visit/place-to-visit/beaches-in-chennai"
          element={<BeachesInChennai />}
        />
        <Route
          path="/visit/things-to-do/arcade-games-in-chennai"
          element={<GamingArcadesInChennai />}
        />
        <Route
          path="/visit/things-to-do/horror-house-in-chennai"
          element={<HorrorHousesInChennai />}
        />
        <Route
          path="/visit/things-to-do/multiplexes-in-chennai"
          element={<MultiplexesInChennai />}
        />
        <Route
          path="/visit/things-to-do/trampoline-parks-in-chennai"
          element={<TrampolineInChennai />}
        />
        <Route
          path="/visit/things-to-do/bowling-alleys-in-chennai"
          element={<BowlingAlleysInChennai />}
        />
        <Route path="/NatureWalk" element={<NatureWalk />} />
        <Route
          path="/visit/things-to-do/zipline-in-chennai"
          element={<Zipline />}
        />
        <Route
          path="/visit/things-to-do/turf-courts-in-chennai"
          element={<TurfCourts />}
        />
        <Route
          path="/visit/things-to-do/go-karting-in-chennai"
          element={<GoKarting />}
        />

        {/* DINESH ADDED  */}

        <Route path="/whychennai" element={<WhyChennai />} />
        <Route
          path="/invest/chennai-real-estate"
          element={<ChennaiRealEstate />}
        />
        <Route path="/deeptechairandd" element={<DeepTechAIRI />} />
        <Route path="/chennaiautomotiveev" element={<ChennaiAutoMotiveEv />} />

        <Route path="/burmesechennai" element={<BurmeseCusine />} />
        <Route path="/mexicancusine" element={<MexicanCusine />} />
        <Route path="/fintechandfinancial" element={<FintechandFinancial />} />

        <Route path="/healthtechmeditech" element={<HealthTechMediTech />} />
        <Route path="/eductechandskill" element={<EductechAndSkill />} />
        <Route
          path="/logitechwarehouseports"
          element={<LogitechWareHousePorts />}
        />
        <Route path="/mediaentertainment" element={<MediaEntertainment />} />
        <Route path="/renewableenergy" element={<RenewableEnergyChennai />} />
        <Route path="/IT-ITeS-SaaS" element={<ITITeSSaaS />} />

        {/* innovate pages start */}
        <Route
          path="/innovate/it-companies-in-chennai"
          element={<ItandSoftwareCompanies />}
        />
        <Route path="/innovate/smart-city-chennai" element={<SmartCity />} />
        <Route
          path="/innovate/blockchain-course-in-chennai"
          element={<BlockchaininChennai />}
        />
        <Route
          path="/innovate/3d-printing-in-chennai"
          element={<ThreeDPrintinginChennai />}
        />
        <Route
          path="/innovate/ai-companies-in-chennai"
          element={<AIinChennai />}
        />

        <Route
          path="/innovate/autotech-chennai"
          element={<AutoTechinChennai />}
        />

        {/* NEWLY ADDED  ANTONY */}

        <Route
          path="/innovate/health-tech-in-chennai"
          element={<HealthTechinChennai />}
        />
        <Route
          path="/innovate/autotech-chennai"
          element={<AutoTechinChennai />}
        />
        <Route
          path="/innovate/ev-vehicles-in-chennai"
          element={<EVMobilityinChennai />}
        />
        <Route
          path="/innovate/edutech-chennai"
          element={<EduTechinChennai />}
        />
        <Route
          path="/innovate/agri-tech-companies-in-chennai"
          element={<AgriTechinChennai />}
        />
        <Route
          path="/innovate/ar-vr-companies-in-chennai"
          element={<ARVRchennai />}
        />

        <Route
          path="/innovate/robotics-in-chennai"
          element={<RoboticsinChennai />}
        />

        {/* Work-Pages */}

        <Route
          path="/work/job-opportunities-in-chennai"
          element={<CareerGrowth />}
        />
        <Route
          path="/work/coworking-space-in-chennai"
          element={<CoworkingSpaces />}
        />
        <Route path="/networking" element={<Networking />} />
        <Route path="/work/pg-in-chennai" element={<PG />} />
        <Route path="/work/chennai-job-salary" element={<SalariesBenefits />} />
        <Route path="/work/unicorn-startups" element={<Unicorns />} />
        <Route path="/work/working-in-chennai" element={<WorkLifeBalance />} />
        <Route
          path="/work/business-registration-in-chennai"
          element={<EmploymentBusinessPermits />}
        />

        {/* Work-Pages */}

        {/* Live-Pages */}

        <Route path="/costofliving" element={<CostLivinginChennai />} />
        <Route
          path="/live/employment-in-chennai"
          element={<EmploymentinChennai />}
        />
        <Route
          path="/live/infrastructure-development-in-chennai"
          element={<FutureGrowthDevelopment />}
        />
        <Route
          path="/live/worship-in-chennai"
          element={<Culturereligiousattractions />}
        />
        <Route
          path="/live/educational-institutions-in-chennai"
          element={<EducationInstitutions />}
        />
        <Route path="/healthcare" element={<Healthcare />} />
        <Route path="/live/places-near-chennai" element={<Neighbourhood />} />
        <Route
          path="/live/quality-of-life-in-chennai"
          element={<QualityofLife />}
        />
        <Route path="/recreation" element={<Recreation />} />
        <Route
          path="/residencypropertyrentbuyinchennai"
          element={<ResidencyPropertyRentBuyinChennai />}
        />
        <Route
          path="/live/transportation-in-chennai"
          element={<Transportation />}
        />

        {/* SHYAM ADDEDD LIVE  */}

        {/* live pages */}
        <Route
          path="/live/residential-properties-in-chennai"
          element={<Residency />}
        />
        <Route path="/live/cost-of-living-in-chennai" element={<Living />} />

        <Route
          path="/transportation-chennai"
          element={<Transportationchennai />}
        />

        <Route path="/kanchipuram" element={<Kanchipuram />} />
        <Route path="/kalpakkam" element={<Kalpakkam />} />
        <Route path="/chidambaram" element={<Chidambaram />} />
        <Route path="/tiruvannamalai" element={<Tiruvannamalai />} />
        <Route path="/thiruthani" element={<Thiruthani />} />
        <Route path="/yelagiri" element={<Yealgiri />} />
        <Route
          path="/vedanthangal-bird-sanctuary"
          element={<VedanthangalBirdSantuary />}
        />
        <Route path="/pulicatelake" element={<PulicatLake />} />
        <Route path="/Vellore" element={<Vellore />} />
        <Route path="/Tirupati" element={<Tirupati />} />
        <Route path="/Pondicherry" element={<Pondicherry />} />
        <Route path="/Chengalpattu" element={<Chengalpattu />} />
        <Route path="/Sriperumbudur" element={<Sriperumbudur />} />
        <Route path="/WomenSafty" element={<WomenSafty />} />

        {/* Live-Pages */}

        {/* Invest-Pages */}

        <Route
          path="/invest/chennai-events"
          element={<InvestEventsChennai />}
        />
        <Route
          path="/invest/exhibitions-in-chennai"
          element={<InvestExhibitionsChennai />}
        />
        <Route
          path="/invest/law-firms-in-chennai"
          element={<InvestFormalitiesRegulationsChennai />}
        />
        <Route
          path="/invest/franchise-business-in-chennai"
          element={<InvestFranchiseChennai />}
        />
        <Route
          path="/invest/government-projects-in-chennai"
          element={<InvestGovernmentInitiativesChennai />}
        />
        <Route path="/invest/news-in-chennai" element={<InvestNewsChennai />} />
        <Route
          path="/investrealestatechennai"
          element={<InvestRealEstateChennai />}
        />
        <Route
          path="/invest/solar-companies-in-chennai"
          element={<InvestRenewableEnergyChennai />}
        />
        <Route
          path="/invest/retirement-in-chennai"
          element={<InvestRetirementChennai />}
        />
        <Route
          path="/invest/startup-companies-in-chennai"
          element={<InvestStartupsChennai />}
        />

        {/* Invest-Pages */}

        {/* Visit-Pages */}

        <Route
          path="/visit/hotel-accommodation-in-chennai"
          element={<Accomodation />}
        />
        <Route path="/food" element={<Food />} />
        <Route
          path="/visit/places-to-visit-in-chennai"
          element={<Placestovisit />}
        />
        <Route path="/visit/things-to-do-in-chennai" element={<Thingstodo />} />
        <Route path="/visit/chennai-itinerary" element={<Itinerary />} />
        <Route
          path="/visit/hidden-places-in-chennai"
          element={<Hiddengems />}
        />
        <Route path="/visit/shopping-areas-in-chennai" element={<Shopping />} />
        <Route path="/visit/travels-chennai" element={<Traveltips />} />
        <Route
          path="/visit/wellness-centres-in-chennai"
          element={<Wellness />}
        />
        <Route path="/visit/events-in-chennai" element={<Events />} />
        <Route path="/visit/conferences-in-chennai" element={<Conferences />} />

        {/* Shopping Pages */}

        <Route
          path="/visit-shopping-tradition-exploreartist"
          element={<ShoppingTradition />}
        />
        <Route
          path="/visit-shopping-tradition-locate-classic"
          element={<ShoppingTraditionLocate />}
        />
        <Route
          path="/visit-shopping-the-modern-marketplace-explore"
          element={<ShoppingTheModernMarketplaceExplore />}
        />
        <Route
          path="/visit-shopping-the-modernplace-welcoming-lifestyle"
          element={<ShoppingTheModernMarketplaceExplore />}
        />
        <Route
          path="/visit-shopping-local-finds-discover-local-treasures"
          element={<ShoppingLocalFindsDiscoverLocalTreasures />}
        />
        <Route
          path="/visit-shopping-local-finds-savoredible-souvenirs"
          element={<ShoppingLocalFindsSavorEdibleSouvenirs />}
        />

        {/* Shopping Pages */}

        {/* Place to Visit */}
        <Route
          path="/visit/place-to-visit/chennai-fort"
          element={<PlacetoVisitHistoricFort />}
        />
        <Route
          path="/visit/place-to-visit/ancient-temples-in-chennai"
          element={<PlacetoVisitAncientTemples />}
        />
        <Route
          path="/visit/place-to-visit/museums-in-chennai"
          element={<PlacetoVisitStateMuseum />}
        />
        <Route
          path="/visit/place-to-visit/cultural-places-in-chennai"
          element={<PlacetoVisitCulturalFoundations />}
        />
        <Route
          path="/visit/place-to-visit/artist-village-chennai"
          element={<PlacetoVisitArtistsVillages />}
        />
        <Route
          path="/visit-placetovisit-urban-beaches"
          element={<PlacetoVisitUrbanBeaches />}
        />
        <Route
          path="/visit/place-to-visit/malls-in-chennai"
          element={<PlacetoVisitModernMalls />}
        />
        <Route
          path="/visit/place-to-visit/botanical-gardens-in-chennai"
          element={<PlacetoVisitBotanicalGardens />}
        />

        {/* Place to Visit */}

        {/* Things to do */}

        <Route
          path="/visit/things-to-do/adventure-places-in-chennai"
          element={<ThingstodoAdventurePlaces />}
        />
        <Route
          path="/visit-thingstodo-bungeejumping"
          element={<ThingstodoBungeeJumping />}
        />
        <Route
          path="/visit-thingstodo-ziplines"
          element={<ThingstodoZiplines />}
        />
        <Route
          path="/visit-thingstodo-horrorhouse"
          element={<ThingstodoHorrorHouse />}
        />
        <Route
          path="/visit-thingstodo-trampolineparks"
          element={<ThingstodoTrampolineParks />}
        />
        <Route
          path="/visit-thingstodo-gamingarcade"
          element={<ThingstodoGamingArcade />}
        />
        <Route
          path="/visit-thingstodo-bowlingalleys"
          element={<ThingstoBowlingAlleys />}
        />
        <Route
          path="/visit/things-to-do/chennai-family-entertainment-centers"
          element={<ThingstoFamilyEntertainmentCenters />}
        />
        <Route
          path="/visit-thingstodo-multiplexes"
          element={<ThingstodoMultiplexes />}
        />
        <Route
          path="/visit/things-to-do/chennai-beaches"
          element={<ThingstodoBeachSideFun />}
        />
        <Route
          path="/visit-thingstodo-turfsports"
          element={<ThingstodoTurfSports />}
        />
        <Route
          path="/visit-thingstodo-naturewalk"
          element={<ThingstodoNatureWalk />}
        />
        <Route path="/visit-thingstodo-gokart" element={<ThingstodoGokart />} />

        {/* Things to do */}

        {/* Food sup pages */}

        <Route
          path="/classicItalianFlavors"
          element={<ClassicItalianFlavors />}
        />
        <Route
          path="/regionalItalianDelights"
          element={<RegionalItalianDelights />}
        />
        <Route path="/aromaticThaiCurries" element={<AromaticThaiCurries />} />
        <Route
          path="/VibrantThaiStreetFood"
          element={<VibrantThaiStreetFood />}
        />
        <Route
          path="/spicySriLankanCurries"
          element={<SpicySriLankanCurries />}
        />
        <Route path="/sriLankanHoppers" element={<SriLankanHoppers />} />
        <Route
          path="/richMalaysianNoodles"
          element={<RichMalaysianNoodles />}
        />
        <Route
          path="/fragrantMalaysianRiceDishes"
          element={<FragrantMalaysianRiceDishes />}
        />
        <Route path="/zestyMexicanTacos" element={<ZestyMexicanTacos />} />
        <Route
          path="/heartyMexicanBurritos"
          element={<HeartyMexicanBurritos />}
        />
        <Route
          path="/flavorfulBurmeseSoups"
          element={<FlavorfulBurmeseSoups />}
        />
        <Route
          path="/aromaticBurmeseCurries"
          element={<AromaticBurmeseCurries />}
        />
        <Route
          path="/classicEuropeanDishes"
          element={<ClassicEuropeanDishes />}
        />
        <Route
          path="/globalContinentalFlavors"
          element={<GlobalContinentalFlavors />}
        />
        <Route
          path="/richNorthIndianCurries"
          element={<RichNorthIndianCurries />}
        />
        <Route path="/tandooriDelights" element={<TandooriDelights />} />
        <Route
          path="/delicateJapaneseSushi"
          element={<DelicateJapaneseSushi />}
        />
        <Route path="/savoryJapaneseRamen" element={<SavoryJapaneseRamen />} />
        <Route
          path="/freshMediterraneanSalads"
          element={<FreshMediterraneanSalads />}
        />
        <Route
          path="/grilledMediterraneanSpecialties"
          element={<GrilledMediterraneanSpecialties />}
        />
        <Route
          path="/coastalandreginalspecialist"
          element={<CoastalandReginalSpecialist />}
        />

        <Route path="/dimsumandnoodles" element={<DimSumandNoodles />} />
        <Route
          path="/authenticchinesemains"
          element={<AuthenticChineseMains />}
        />

        <Route
          path="/breakfasttiffinstaples"
          element={<BreakfastTiffinStaples />}
        />

        <Route
          path="/traditionalsouthindianmealsthali"
          element={<TraditionalSouthIndianMealsThali />}
        />

        {/* utlities */}
        <Route path="/NorthChennai" element={<NorthChennai />} />
        <Route path="/SouthChennai" element={<SouthChennai />} />
        <Route path="/WestChennai" element={<WestChennai />} />

        {/* Food sup pages */}

        <Route path="/faqs" element={<Faq />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/icon-of-the-july-month" element={<Iconofthemonth />} />

        <Route
          path="/icon-of-the-oct-month-2025"
          element={<IconofthemonthOct />}
        />

        <Route
          path="/super-chennai-icon-of-aug-2025"
          element={<IconofthemonthAugust />}
        />
        <Route
          path="/super-chennai-icon-of-sep-2025"
          element={<IconofthemonthSeptember />}
        />
        <Route
          path="/super-chennai-icon-of-sep-2025-1"
          element={<IconofthemonthSeptember1 />}
        />

        <Route
          path="/super-chennai-icon-of-dec-2025"
          element={<IconofthemonthDec />}
        />
        <Route
          path="/super-chennai-icon-of-nov-2025"
          element={<IconofthemonthNov />}
        />

        <Route
          path="/superchennai-events-details/:url"
          element={<EventsDetails />}
        />

        <Route path="contests/chennai-quiz" element={<ChennaiQuiz />} />

        {/* temprory url redirect ############### */}
        <Route
          path="/superchennai-quiz"
          element={<Navigate to="/contests/chennai-quiz" replace />}
        />

        <Route
          path="/fun-quiz-competition-trivia-night"
          element={<Navigate to="/contests/chennai-quiz" replace />}
        />

        <Route
          path="/super-chennai-contests-quiz"
          element={<Navigate to="/contests/chennai-quiz" replace />}
        />

        <Route path="/quizform" element={<QuizForm />} />
        <Route path="/quiz-checkout" element={<QuizFormCheckout />} />

        {/* ChennaiQuiz */}

        <Route path="/TrendingDetails/:id" element={<TrendingDetails />} />
        <Route path="/eventsimman" element={<EventsImman />} />
        <Route path="/eventsvishal" element={<EventsVishal />} />
        <Route path="/eventsspeed" element={<EventsSpeed />} />
        <Route path="/eventsstarngersmeet" element={<EventsStrangersMeet />} />
        <Route
          path="/eventschennaibusinessnetwork"
          element={<EventsChennaiBusinessNetwork />}
        />
        <Route
          path="/eventstechinnovaters"
          element={<EventsTechInnovaters />}
        />
        <Route path="/eventstechstartups" element={<EventsStartups />} />
        {/* Events-Pages */}

        {/* ---------Sub-pages--------- */}

        {/* new pages Start*/}
        <Route path="/ChennaiNightLife" element={<NightLifeInChennai />} />

        {/* Dhinesh Work */}

        <Route path="/work/chennai-networks" element={<ChennaiNetworks />} />
        <Route
          path="/live/healthcare-in-chennai"
          element={<ChennaiHealthcare />}
        />
        <Route
          path="/chennaientertainment"
          element={<ChennaiEntertainment />}
        />
        <Route path="/chennaisports" element={<ChennaiSports />} />

        {/* Dhinesh Work */}
        <Route path="/SportChennai" element={<SportsInChennai />} />

        <Route
          path="/visit/accomadation/luxury-hotels-in-chennai"
          element={<Luxuryhotels />}
        />
        <Route
          path="/visit/restaurants-in-chennai"
          element={<RestaurantsInChennai />}
        />

        <Route
          path="/visit/accomadation/affordable-hotels-in-chennai"
          element={<Midrangehotels />}
        />
        <Route
          path="/visit/accomadation/budget-stay-in-chennai"
          element={<BudgetStays />}
        />
        <Route
          path="/visit/accomadation/serviced-apartments-in-chennai"
          element={<Servicedapartments />}
        />
        <Route
          path="/visit/accomadation/resorts-in-chennai"
          element={<Resortsandvillas />}
        />

        {/* Anthony Anna Works */}
        <Route
          path="/taste-of-Thailand-in-Chennai"
          element={<TasteofThailandinChennai />}
        />
        <Route
          path="/italian-Cuisine-in-Chennai"
          element={<ItalianCuisineinChennai />}
        />
        <Route
          path="/south-Indian-Restaurants-in-Chennai"
          element={<SouthIndianRestaurantsinChennai />}
        />
        <Route
          path="/Chinese-Cuisine-in-Chennai"
          element={<ChineseCuisineinChennai />}
        />
        <Route
          path="/North-Indian-Restaurants-in-Chennai"
          element={<NorthIndianRestaurantsinChennai />}
        />
        <Route
          path="/Sri-Lankan-Cuisine-in-Chennai"
          element={<SriLankanCuisineinChennai />}
        />
        <Route
          path="/Continental-Cuisine-in-Chennai"
          element={<ContinentalCuisineinChennai />}
        />
        <Route
          path="/Malaysian-Flavors-in-Chennai"
          element={<MalaysianFlavorsinChennai />}
        />
        <Route
          path="/Mexican-Cuisine-in-Chennai"
          element={<MexicanCuisineinChennai />}
        />
        <Route
          path="/Japanese-Cuisine-in-Chennai"
          element={<JapaneseCuisineinChennai />}
        />
        <Route
          path="/Korean-Cuisine-in-Chennai"
          element={<KoreanCuisineinChennai />}
        />

        <Route path="/thankyou" element={<Thankyou />} />
        <Route path="/quizthankyou" element={<QuizThankyou />} />
        <Route path="/thank-you" element={<ThankyouForContest />} />

        {/* MexicanCuisineinChennai */}

        {/* investsup pages */}
        <Route path="/It-Chennai" element={<ItChennai />} />
        <Route path="/Fintech-in-Chennai" element={<FintechChennai />} />
        <Route
          path="/DeepTech-AI-Startups-in-Chennai"
          element={<DeepTechAIStartupsinChennai />}
        />
        <Route path="/Automotive" element={<Automotive />} />
        <Route path="/EduTech" element={<EduTech />} />
        <Route path="/surfing" element={<Surfing />} />

        {/* innovate pages start */}

        {/* Pride-of-Chennai */}

        <Route path="/hall-of-fame" element={<PrideofChennai />} />
  

        <Route path="/chennai-apps-guide" element={<ChennaiApp />} />
      </Routes>

      {/*################################# NEWS LETTER ######################################## */}

      <section className="signup FormIframeSection" id="newsletterId">
        <div className="socialChennaiContent NewsletterContent">
          <h4>Newsletter</h4>
          <p>
            Weekly updates on what’s new, now, and next in Chennai, from food to
            startups!
          </p>
        </div>
        <NewsletterForm />
        {/* <iframe
            src="https://superchennai.substack.com/embed"
            width="480"
            height="320"
            style={{ border: "1px solid #EEE", background: "white" }}
            frameBorder="0"
            scrolling="no"
          ></iframe> */}
      </section>

      <Footer />
      {/* </Router> */}
      {/* MenuBar */}

      <AnimatePresence>
        {menuBar && (
          <motion.div
            initial={{ x: "100%", opacity: 0 }}
            animate={{
              x: "0%",
              opacity: 1,
              transition: { duration: 0.5, ease: "easeOut" },
            }}
            exit={{
              x: "100%",
              opacity: 0,
              transition: { duration: 0.4, ease: "easeIn" },
            }}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100vh",
              zIndex: 100000000,
              overflowY: "auto",
            }}
          >
            <MenuBar setMenuBar={setMenuBar} />
          </motion.div>
        )}
      </AnimatePresence>

      {/* MenuBar */}

      <AnimatePresence>
        {menuBar1 && (
          <div className="mobileSearchSectionsRow">
            <div className="searchInputFormbanner">
              <form className="searchInputForm" onSubmit={handleSearch}>
                <input
                  placeholder="Experience Chennai"
                  value={query}
                  onChange={handleInputChange}
                />
                <button type="submit" disabled={loading}>
                  {loading ? <span className="spinner"></span> : "Search"}
                </button>{" "}
              </form>
              {suggestions.length > 0 && (
                <ul className="suggestionsList">
                  {suggestions.map((item, index) => (
                    <li
                      key={index}
                      onClick={() => handleSuggestionClick(item.searchText)}
                    >
                      {item.title}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            <div
              className="mobileCloseButtoniMAGE"
              onClick={() => setMenuBar1(false)}
            >
              <img src="/images/HomePage-Images/Icons/close-x.svg" alt="" />
            </div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
