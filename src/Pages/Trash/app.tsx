import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Link,
  useLocation,
} from "react-router-dom";
import CostLivinginChennai from "../src/Pages/CostOfLiving";
import HomePage from "../src/Pages/HomePage";
import Innovate from "../src/Pages/Innovate";
import Invest from "../src/Pages/Invest";
import Live from "../src/Pages/Live";
import Visit from "../src/Pages/VisitPage";
import Volunteer from "../src/Pages/Volunteer";
import Work from "../src/Pages/Work";
import "./App.css";
import HeaderWithMegaMenu from "./Components/ExampleMegamenu";
import Footer from "./Components/Footer";
import MenuBar from "./Components/MenuBar";
import Technologynewchennai from "./Components/TechnologyNew";
import EducationNew from "./Components/EducationNew";
import VideoPreloader from "./Components/VideoPreloader";
// import Culturereligiousattractions from "./Pages/SubPages/LivePages/culturereligiousattractions";
import Culturereligiousattractions from "./Pages/SubPages/LivePages/Culturereligiousattractions";
import EducationInstitutions from "./Pages/SubPages/LivePages/EducationInstitutions";
import EmploymentinChennai from "./Pages/SubPages/LivePages/EmploymentinChennai";
import FutureGrowthDevelopment from "./Pages/SubPages/LivePages/FutureGrowthDevelopment";
import Healthcare from "./Pages/SubPages/LivePages/Healthcare";
import Neighbourhood from "./Pages/SubPages/LivePages/Neighbourhood";
import QualityofLife from "./Pages/SubPages/LivePages/QualityofLife";
import Recreation from "./Pages/SubPages/LivePages/Recreation";
import ResidencyPropertyRentBuyinChennai from "./Pages/SubPages/LivePages/ResidencyPropertyRentBuyinChennai";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Residency from "./Pages/SubPages/LivePages/Residency";
import Living from "./Pages/SubPages/LivePages/Living";
import Transportationchennai from "./Pages/SubPages/LivePages/Transportation-chennai";
import Transportation from "./Pages/SubPages/LivePages/Transportation";

//##################### NEWLY ADEDD  ###################################

import Kanchipuram from "./Pages/SubPages/LivePages/Kanchipuram";
import Vellore from "./Pages/SubPages/LivePages/Vellore";
import Tirupati from "./Pages/SubPages/LivePages/Tirupati";
import Pondicherry from "./Pages/SubPages/LivePages/Pondicherry";
import Chengalpattu from "./Pages/SubPages/LivePages/Chengalpattu";
import Sriperumbudur from "./Pages/SubPages/LivePages/Sriperumbudur";

import CareerGrowth from "./Pages/SubPages/WorkPages/CareerGrowth";
import CoworkingSpaces from "./Pages/SubPages/WorkPages/CoworkingSpaces";
import Networking from "./Pages/SubPages/WorkPages/Networking";
import PG from "./Pages/SubPages/WorkPages/PG";
import SalariesBenefits from "./Pages/SubPages/WorkPages/SalariesBenefits";
import Unicorns from "./Pages/SubPages/WorkPages/Unicorns";
import WorkLifeBalance from "./Pages/SubPages/WorkPages/WorkLifeBalance";

// ##################OLD INOVATE IMPORTS ##################################
// import AgricultureTech from "./Pages/SubPages/InnovatePages/AgricultureTech";
// import ArtificialIntelligenceandMachineLearning from "./Pages/SubPages/InnovatePages/ArtificialIntelligenceandMachineLearning";
// import AugmentedReality from "./Pages/SubPages/InnovatePages/AugmentedReality";
// import AutomotiveTechandRandD from "./Pages/SubPages/InnovatePages/AutomotiveTechandRandD";
// import RoboticsinChennai from "./Pages/SubPages/InnovatePages/roboticsandautomation";
// import BlockchainandFintech from "./Pages/SubPages/InnovatePages/BlockchainandFintech";
// import EducationTech from "./Pages/SubPages/InnovatePages/EducationTech";
// import Events from "./Pages/SubPages/InnovatePages/Events";
// import ElectricVehicles from "./Pages/SubPages/InnovatePages/ElectricVehicles";
// import HealthcareTechInnovation from "./Pages/SubPages/InnovatePages/HealthcareTechInnovation";
// import ITandSoftwareDevelopment from "./Pages/SubPages/InnovatePages/ITandSoftwareDevelopment";
// import roboticsandautomation from "./Pages/SubPages/InnovatePages/roboticsandautomation";
// import SmartCityInitiatives from "./Pages/SubPages/InnovatePages/SmartCityInitiatives";
// import ThreeDPrintingandAdditiveManufacturing from "./Pages/SubPages/InnovatePages/ThreeDPrintingandAdditiveManufacturing";
// ################## END OLD INOVATE IMPORTS ##################################

import AIinChennai from "./Pages/SubPages/InnovatePages/AI-in-Chennai";
import AutoTechinChennai from "./Pages/SubPages/InnovatePages/AutoTech-in-Chennai";
import BlockchaininChennai from "./Pages/SubPages/InnovatePages/Blockchain-in-Chennai";
import HealthTechinChennai from "./Pages/SubPages/InnovatePages/Health-Tech-in-Chennai";
import EVMobilityinChennai from "./Pages/SubPages/InnovatePages/EV-Mobility-in-Chennai";
import RoboticsinChennai from "./Pages/SubPages/InnovatePages/Robotics-in-Chennai";
import EduTechinChennai from "./Pages/SubPages/InnovatePages/EduTech-in-Chennai";
import AgriTechinChennai from "./Pages/SubPages/InnovatePages/AgriTech-in-Chennai";
import ARVRchennai from "./Pages/SubPages/InnovatePages/AR-VR-chennai";
import ItandSoftwareCompanies from "./Pages/SubPages/InnovatePages/It-and-Software-Companies";
import SmartCity from "./Pages/SubPages/InnovatePages/Smart-City";
import ThreeDPrintinginChennai from "./Pages/SubPages/InnovatePages/ThreeD-Printing-in-Chennai";

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
import ScrollToTop from "./Components/ScrollToTop";
import EventsHome from "./Pages/Events";
import EventsPage from "./Pages/Events/EventsPage";
import EventDetailPage from "./Pages/Events/EventsDetails"
import ChennaiQuiz from "./Pages/Activities/ChennaiQuiz/ChennaiQuiz"
import QuizForm from "./Pages/Activities/ChennaiQuiz/QuizForm"
import QuizFormCheckout from "./Pages/Activities/ChennaiQuiz/QuizFormCheckout"
// import QuizThankyou from "./Pages/Activities/ChennaiQuiz/QuizThankyouu"


import EventsDetails from "./Pages/SubPages/EventsPages/EventsDetails";
import TrendingDetails from "./Components/TrendingDetails";

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
import GamingArcadesInChennai from "./Pages/SubPages/VisitPages/FunChennai/GamingArcadesInChennai";
import HorrorHousesInChennai from "./Pages/SubPages/VisitPages/FunChennai/HorrorHousesInChennai";
import MultiplexesInChennai from "./Pages/SubPages/VisitPages/FunChennai/MultiplexesInChennai";
import TrampolineInChennai from "./Pages/SubPages/VisitPages/FunChennai/TrampolineInChennai";
import BowlingAlleysInChennai from "./Pages/SubPages/VisitPages/FunChennai/BowlingAlleysInChennai";
import NatureWalk from "./Pages/SubPages/VisitPages/FunChennai/NatureWalk";
import Zipline from "./Pages/SubPages/VisitPages/FunChennai/Zipline";
import TurfCourts from "./Pages/SubPages/VisitPages/FunChennai/TurfCourts";
import GoKarting from "./Pages/SubPages/VisitPages/FunChennai/GoKarting";

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
// import WhyChennai from "./Pages/SubPages/InvestPages/WhyChennai";
// import ChennaiRealEstate from "./Pages/SubPages/InvestPages/ChennaiRealEstate";
// import ChennaiAutoMotiveEv from "./Pages/SubPages/InvestPages/ChennaiAutomotiveEv";
// import DeepTechAIRI from "./Pages/SubPages/InvestPages/DeeptechAiRandD";
import FintechandFinancial from "./Pages/SubPages/InvestPages/FintechandFinancial";
import HealthTechMediTech from "./Pages/SubPages/InvestPages/HealthTechMediTech";
import EductechAndSkill from "./Pages/SubPages/InvestPages/EdutechandSkill";
import LogitechWareHousePorts from "./Pages/SubPages/InvestPages/LogitechWareHousePorts";
import BurmeseCusine from "./Pages/SubPages/VisitPages/Burmese-Cusine";
import MexicanCusine from "./Pages/SubPages/VisitPages/MexicanCusine";
import MediaEntertainment from "./Pages/SubPages/InvestPages/MediaEntertaiment";
import RenewableEnergyChennai from "./Pages/SubPages/InvestPages/Renewableenergy";
import ITITeSSaaS from "./Pages/SubPages/InvestPages/IT-ITeS-SaaS";
import Thankyou from "./Pages/Thankyou";
import WhatsAppWidget from "./Components/Whatsappwidget";
import NorthChennai from "./Pages/SubPages/Utilities/NorthChennai";
import SouthChennai from "./Pages/SubPages/Utilities/SouthChennai";
import WestChennai from "./Pages/SubPages/Utilities/WestChennai";
import WomenSafty from "./Pages/SubPages/LivePages/WomenSafty";

// import Faq from "./Pages/faq";
import Faq from "./Pages/Faq";
import Contact from "./Pages/contact";
import About from "./Pages/About";

import NewsLetter from "./Pages/NewsLetter";
import Surfing from "./Pages/SubPages/VisitPages/FunChennai/Surfing";
import NammaStories from "./Pages/NammaStories";
import ImagePopup from "./ImagePopup";
import EventFunction from "./Pages/EventFunction";
import CarRally from "./Pages/CarRally";
import CarRallyForm from "./Pages/CarRallyForm";
import TicketCheckout from "./Pages/CarryFormCheckout";
import NewsletterForm from "./Components/NewsletterNew";
import CarThankyou from "./Pages/CarThankyou";
import JapaneseCuisineinChennai from "./Pages/SubPages/VisitPages/Japanese-Cuisine-in-Chennai";
import KoreanCuisineinChennai from "./Pages/SubPages/VisitPages/Korean-Cuisine-in-Chennai";
import Yealgiri from "./Pages/SubPages/LivePages/Yelagiri";
import PulicatLake from "./Pages/SubPages/LivePages/PulicatLake";
import KiteFestivalDay3 from "./Pages/KiteFestivalDay3";
import KiteFestivalDay4 from "./Pages/KiteFestivalDay4";

import BlogList from "./../src/Pages/Blogs/BlogList";
import BlogDetails from "../src/Pages/Blogs/BlogDetails";
import Kalpakkam from "./Pages/SubPages/LivePages/Kalpakkam";
import Chidambaram from "./Pages/SubPages/LivePages/Chidambaram";
import Tiruvannamalai from "./Pages/SubPages/LivePages/Tiruvannamalai";
import Thiruthani from "./Pages/SubPages/LivePages/Thiruthani";
import ScrollToHashElement from "./Components/ScrollToHashElement";
import VedanthangalBirdSantuary from "./Pages/SubPages/LivePages/Vedanthangal-bird-santaury";
import SuperChennaiEvents from "./Pages/SuperChennaiEvents";
import Iconofthemonth from "./Pages/Icon-of-the-month-july";
import IconofthemonthOct from "./Pages/Icon-of-the-month-oct";

import IconofthemonthAugust from "./Pages/Icon-of-the-month-august";
import Iconsofthemonth from "./Pages/iconsofthemonth";
import ReimagineChennai from "./Pages/ReimagineChennai";

import PropertiesPage from "./Pages/Properties/PropertiesPage";
import PropertyDetailPage from "./Pages/Properties/PropertyDetailPage";
import IconofthemonthSeptember from "./Pages/Icon-of-the-month-september";
import IconofthemonthSeptember1 from "./Pages/Icon-of-the-month-september1";
import PrideofChennai from "./Pages/PrideofChennai";
import Neighbourhoods  from "./Pages/Neighbourhoods/neighbourhoods";



import ChennaiApp from "./Pages/Chennai-app";

function App() {
  // const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  // const location = useLocation();
  // const navigate = useNavigate();

  // const location = useLocation();

  const [showPopup, setShowPopup] = useState(false);

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
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const footer = document.querySelector("footer");
  //     const sticky = stickyRef.current;

  //     if (!footer || !sticky) return;

  //     const footerRect = footer.getBoundingClientRect();
  //     const stickyRect = sticky.getBoundingClientRect();

  //     const isOverlapping = stickyRect.bottom >= footerRect.top;
  //     setFooterReached(isOverlapping);
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector("footer");
      const sticky = stickyRef.current;

      if (!footer || !sticky) return;

      const footerTop = footer.getBoundingClientRect().top;
      const stickyHeight = sticky.offsetHeight;

      // Check if sticky would overlap footer when staying at its fixed position
      const shouldHideSticky = footerTop < stickyHeight + 300; // 100 is the top offset of sticky

      setFooterReached(shouldHideSticky);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // PRELOADER FUNCTIONALITY WITH IF CAE ######
   useEffect(() => {
      const hasSeen = localStorage.getItem("hasSeenPreloader");

      if (!hasSeen && location.pathname === "/") {
        setLoading(true);
      } else {
        setLoading(false);
      }
    }, [location.pathname]);

    if (loading) {
      return (
        <VideoPreloader
          onFinish={() => {
            localStorage.setItem("hasSeenPreloader", "true");
            setLoading(false);
          }}
        />
      );
    }

  useEffect(() => {
    setShowPopup(true);
  }, []);
  useEffect(() => {
    const hasShownPopup = sessionStorage.getItem("popup-shown");

    if (!hasShownPopup) {
      setShowPopup(true);
      sessionStorage.setItem("popup-shown", "true");
    }
    // if("/"){}
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      <Router>
        {/* <ScrollToTop /> */}

        <ScrollToHashElement />

        <HeaderWithMegaMenu setMenuBar={setMenuBar} setMenuBar1={setMenuBar1} />

        {/* {showPopup && (
          <ImagePopup
            onClose={handleClosePopup}
         
            imageUrl="/images/HomePage-Images/ai-art-challenge-popup.jpg"
          />
        )} */}

        {/* Sticky Icons */}
        <div
          ref={stickyRef}
          className={`stickyIconsContainer ${
            footerReached ? "footerreached" : ""
          }`}
          // className="stickyIconsContainer"
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
        {/* Sticky Icons */}

        {/* pointcostSticky start */}
        <div
          ref={stickyRef}
          className={`super-chennai-contest pointcastSticky nammaStorieslink ${
            footerReached ? "footerreached" : ""
          }`}
          // className="stickyIconsContainer"
        >
          <a href="/reimagine-chennai-AI-art-challenge">
            {/* <img src="/images/nammaStoriesIcon.png" alt="" /> */}
            {/* <img src="/images/super-chennai-contest.png" alt="" /> */}
            <img
              src="/images/ai-icons.png"
              alt="artificial intelligence challenge"
            />
            {/* <img src="/images/icon-of-the-month.png" alt="" /> */}
          </a>
        </div>
        {/* pointcostSticky start */}

        {/* pointcostSticky start */}
        <div
          ref={stickyRef}
          className={`icon-of-the-month pointcastSticky carRallylink ${
            footerReached ? "footerreached" : ""
          }`}
        >
          <a href="/icon-of-the-oct-month-2025">
            <img src="/images/icon-of-the-month.png" alt="Star of the month" />
          </a>
        </div>
        {/* pointcostSticky start */}

        {/* pointcostSticky start */}
        <div
          ref={stickyRef}
          className={`pointcastSticky ${footerReached ? "footerreached" : ""}`}
          // className="stickyIconsContainer"
        >
          <a target="_blank" href="https://pointcast.com/demo/SuperChennai">
            <img src="/images/pointcast-icon.svg" alt="explore chennai" />
          </a>
        </div>
        {/* pointcostSticky start */}

        <Routes>
          {/*----Main-Pages---------*/}

          <Route path="/" element={<HomePage />} />
          <Route path="/results" element={<SearchResults />} />

          <Route path="/blog" element={<BlogList />} />
          {/* <Route path="/blogdetail/:id" element={<BlogDetails />} /> */}
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route
            path="/volunteer-in-chennai"
            element={<Volunteer popupFunction={popupFunction} />}
          />
          <Route path="/innovate-chennai" element={<Innovate />} />
          <Route path="/invest-in-chennai" element={<Invest />} />

          <Route path="/live-in-chennai" element={<Live />} />

          <Route path="/visit-chennai" element={<Visit />} />
          <Route path="/work-in-chennai" element={<Work />} />
          <Route path="/events" element={<EventsHome />} />
          <Route path="/superchennai-events" element={<EventsPage />} />
          <Route path="/superchennai-events-details/:slug" element={<EventDetailPage />} />

          <Route path="/media-coverage" element={<NewsLetter />} />
          <Route path="/event-function" element={<EventFunction />} />
          <Route path="/namma-stories" element={<NammaStories />} />
          <Route
            path="/reimagine-chennai-AI-art-challenge"
            element={<ReimagineChennai />}
          />
          <Route
            path="/superchennai-contest"
            element={<SuperChennaiEvents />}
          />
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
          <Route
            path="/chennaiautomotiveev"
            element={<ChennaiAutoMotiveEv />}
          />

          <Route path="/burmesechennai" element={<BurmeseCusine />} />
          <Route path="/mexicancusine" element={<MexicanCusine />} />
          <Route
            path="/fintechandfinancial"
            element={<FintechandFinancial />}
          />

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
          {/* <Route path="/roboticsandautomation" element={<RoboticsinChennai />} /> */}
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

          {/* innovate pages end*/}

          {/*----Main-Pages---------*/}

          {/* ---------Sub-pages--------- */}

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
          <Route
            path="/work/chennai-job-salary"
            element={<SalariesBenefits />}
          />
          <Route path="/work/unicorn-startups" element={<Unicorns />} />
          <Route
            path="/work/working-in-chennai"
            element={<WorkLifeBalance />}
          />
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
          <Route
            path="/invest/news-in-chennai"
            element={<InvestNewsChennai />}
          />
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
          <Route
            path="/visit/things-to-do-in-chennai"
            element={<Thingstodo />}
          />
          <Route path="/visit/chennai-itinerary" element={<Itinerary />} />
          <Route
            path="/visit/hidden-places-in-chennai"
            element={<Hiddengems />}
          />
          <Route
            path="/visit/shopping-areas-in-chennai"
            element={<Shopping />}
          />
          <Route path="/visit/travels-chennai" element={<Traveltips />} />
          <Route
            path="/visit/wellness-centres-in-chennai"
            element={<Wellness />}
          />
          <Route path="/visit/events-in-chennai" element={<Events />} />
          <Route
            path="/visit/conferences-in-chennai"
            element={<Conferences />}
          />

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
          <Route
            path="/visit-thingstodo-gokart"
            element={<ThingstodoGokart />}
          />

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
          <Route
            path="/aromaticThaiCurries"
            element={<AromaticThaiCurries />}
          />
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
          <Route
            path="/savoryJapaneseRamen"
            element={<SavoryJapaneseRamen />}
          />
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
          <Route path="/icon-of-the-july-month" element={<Iconofthemonth />} />

          <Route path="/icon-of-the-oct-month-2025" element={<IconofthemonthOct />} />

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

          {/* Visit-Pages */}

          {/* Innovate-Pages */}
          {/* 
          <Route path="/agriculturetech" element={<AgricultureTech />} />
          <Route
            path="/artificialintelligenceandmachinelearning"
            element={<ArtificialIntelligenceandMachineLearning />}
          />
          <Route path="/augmentedreality" element={<AugmentedReality />} />
          <Route
            path="/automotivetechandrandd"
            element={<AutomotiveTechandRandD />}
          />
          <Route
            path="/blockchainandfintech"
            element={<BlockchainandFintech />}
          />
          <Route path="/educationtech" element={<EducationTech />} />
          <Route
            path="/healthcaretechinnovation"
            element={<HealthcareTechInnovation />}
          />
          <Route
            path="/itandsoftwaredevelopment"
            element={<ITandSoftwareDevelopment />}
          />
          <Route
            path="/roboticsandautomation"
            element={<roboticsandautomation />}
          />
          <Route
            path="/smartcityinitiatives"
            element={<SmartCityInitiatives />}
          />
          <Route
            path="/threedprintingandadditivemanufacturing"
            element={<ThreeDPrintingandAdditiveManufacturing />}
          />
          <Route path="/electricvehicles" element={<ElectricVehicles />} /> */}

          {/* Innovate-Pages */}

          {/* Events-Pages */}

          {/* <Route path="/eventsdetails/:id" element={<EventsDetails />} /> */}
          <Route path="/events-in-chennai/:url" element={<EventsDetails />} />
           <Route path="contests/chennai-quiz" element={<ChennaiQuiz />} />                  
           <Route path="/quizform" element={<QuizForm />} />
           <Route path="/quiz-checkout" element={<QuizFormCheckout />} />
           

          {/* ChennaiQuiz */}

          <Route path="/TrendingDetails/:id" element={<TrendingDetails />} />

          <Route path="/eventsimman" element={<EventsImman />} />
          <Route path="/eventsvishal" element={<EventsVishal />} />
          <Route path="/eventsspeed" element={<EventsSpeed />} />
          <Route
            path="/eventsstarngersmeet"
            element={<EventsStrangersMeet />}
          />
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
          <Route path="/carthankyou" element={<CarThankyou />} />

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

          {/* innovate pages end*/}

          {/* innovate pages start */}

          {/* Property-Pages */}
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/properties/:slug" element={<PropertyDetailPage />} />

          {/* Property-Pages */}

          {/* Pride-of-Chennai */}

          <Route path="/pride-of-chennai" element={<PrideofChennai />} />
          <Route   path="/superchennai-neighbourhoods" element={<Neighbourhoods />} />
          <Route path="/chennai-app" element={<ChennaiApp />} />
          {/* Pride-of-Chennai */}
        </Routes>

        {/*################################# NEWS LETTER ######################################## */}

        <section className="signup FormIframeSection" id="newsletterId">
          <div className="socialChennaiContent NewsletterContent">
            <h4>Newsletter</h4>
            <p>
              Weekly updates on what’s new, now, and next in Chennai, from food
              to startups!
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
      </Router>
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

      {/* Search For Mobile */}

      <AnimatePresence>
        {menuBar1 && (
          // <div className="Neww">
          //   <div>
          <div className="mobileSearchSectionsRow">
            <div className="searchInputFormbanner">
              <form className="searchInputForm" onSubmit={handleSearch}>
                <input
                  placeholder="Experience Chennai"
                  value={query}
                  onChange={handleInputChange}
                />
                <button type="submit" disabled={loading}>
                  {loading ? (
                    <span className="spinner"></span> // Spinner icon
                  ) : (
                    "Search"
                  )}
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

      {/* whatsapp gallbox */}
      {/* <WhatsAppWidget /> */}
      {/*whatsapp gallbox end  */}

      {/* Search For Mobile */}
    </>
  );
}

export default App;
/* =================MOCK BUT PRODUCTION REDY DATA ================= */

  // const musicCategories = [
  //   {
  //     title: "The Music Academy",
  //     subtitle: "Iconic Carnatic Concerts",
  //     icon: "🎼",
  //   },
  //   {
  //     title: "Krishna Gana Sabha",
  //     subtitle: "Traditional Excellence",
  //     icon: "🎶",
  //   },
  //   {
  //     title: "Narada Gana Sabha",
  //     subtitle: "Heritage Performances",
  //     icon: "🪔",
  //   },
  //   {
  //     title: "Mylapore Fine Arts Club",
  //     subtitle: "Young & Senior Artists",
  //     icon: "🎻",
  //   },
  //   {
  //     title: "Sri Parthasarathy Swami Sabha",
  //     subtitle: "Temple-linked Sabhas",
  //     icon: "🛕",
  //   },
  //   {
  //     title: "Bharatiya Vidya Bhavan",
  //     subtitle: "Lec-Dems & Intimate Concerts",
  //     icon: "📖",
  //   },
  // ];

  // const canteenCategories = [
  //   {
  //     title: "Music Academy Canteen",
  //     subtitle: "Legendary Filter Coffee & Pongal",
  //     icon: "☕",
  //   },
  //   {
  //     title: "Mylapore Sabha Snacks",
  //     subtitle: "Sundal, Vadai & Coffee",
  //     icon: "🍘",
  //   },
  //   {
  //     title: "Temple Prasadam Spots",
  //     subtitle: "Divine & Simple Meals",
  //     icon: "🍚",
  //   },
  // ];

  // const hiddenGemEvents = [
  //   {
  //     date: "2025-12-01",
  //     events: [
  //       {
  //         name: "Inauguration & Conferring of Sangeetha / Nrithya Choodamani",
  //         category: "Festival Ceremony",
  //         subCategory: "Krishna Gana Sabha",
  //         time: "5:00 PM – 6:30 PM",
  //         place: "Dr Nalli Gana Vihar",
  //         musicians:
  //           "KV Prasad, G Narendra, Chitravina Ravikiran, Prof. Sudharani Raghupathy",
  //         organizer: "Krishna Gana Sabha",
  //       },
  //       {
  //         name: "Bharatanatyam",
  //         category: "Dance",
  //         subCategory: "Ticketed Evening Concert",
  //         time: "7:00 PM",
  //         place: "Dr Nalli Gana Vihar",
  //         musicians: "A Lakshmanaswamy",
  //         organizer: "Krishna Gana Sabha",
  //       },
  //     ],
  //   },

  //   {
  //     date: "2025-12-13",
  //     events: [
  //       {
  //         name: "Carnatic Vocal Concert",
  //         category: "Classical Music",
  //         subCategory: "Morning Concert",
  //         time: "11:00 AM",
  //         place: "Dr Nalli Gana Vihar",
  //         musicians:
  //           "E R Anirudh (Vocals), Haritha Narayanan (Violin), Burra Sriram (Mridangam)",
  //         organizer: "Krishna Gana Sabha",
  //       },
  //       {
  //         name: "Violin & Chitravina Duet",
  //         category: "Classical Music",
  //         subCategory: "Afternoon Concert",
  //         time: "1:00 PM",
  //         place: "Dr Nalli Gana Vihar",
  //         musicians: "Shreya Devnath (Violin), Vishaal R Sapuram (Chitravina)",
  //         organizer: "Krishna Gana Sabha",
  //       },
  //       {
  //         name: "Carnatic Vocal Concert",
  //         category: "Classical Music",
  //         subCategory: "Ticketed Concert",
  //         time: "4:00 PM",
  //         place: "Dr Nalli Gana Vihar",
  //         musicians: "G Ravikiran (Vocals), B Ananthakrishnan (Violin)",
  //         organizer: "Krishna Gana Sabha",
  //       },
  //       {
  //         name: "Bharatanatyam",
  //         category: "Dance",
  //         subCategory: "Ticketed Evening Concert",
  //         time: "7:00 PM",
  //         place: "Dr Nalli Gana Vihar",
  //         musicians: "Meenakshi Srinivasan",
  //         organizer: "Krishna Gana Sabha",
  //       },
  //     ],
  //   },
  // ];















  import axios from "axios";
// import { useEffect, useState } from "react";
// import { Helmet } from "react-helmet-async";
// import { Link, useParams } from "react-router-dom";
// import "slick-carousel/slick/slick-theme.css";
// import "slick-carousel/slick/slick.css";
// import { API_BASE_URL } from "../../../config";
// import "../../assets/Css/BlogList.css";
// import AutoShrinkText from "../../Components/Text/AutoShrinkText";
// import BlogDetailSkeleton from "./components/BlogDetailSkeleton";
// import "./style.css"
// // const parseLexical = (content) => {
// //   if (!content?.root?.children) return null;

// //   return content.root.children.map((node, idx) => {
// //     switch (node.type) {
// //       case "paragraph":
// //         return (
// //           <p key={idx} className="mb-4 text-gray-700 leading-7">
// //             {node.children.map((child, cIdx) => {
// //               if (child.type === "text")
// //                 return <span key={cIdx}>{child.text}</span>;
// //               if (child.type === "link") {
// //                 const url = child.fields?.url || "#";
// //                 const linkText = child.children?.[0]?.text || "Link";
// //                 return (
// //                   <a
// //                     key={cIdx}
// //                     href={url}
// //                     target={child.fields?.newTab ? "_blank" : "_self"}
// //                     rel="noopener noreferrer"
// //                     style={{ color: "#232b91ff", textDecoration: "underline" }}
// //                   >
// //                     {linkText}
// //                   </a>
// //                 );
// //               }
// //               if (child.type === "linebreak") return <br key={cIdx} />;
// //               return null;
// //             })}
// //           </p>
// //         );

// //       case "heading":
// //         const Tag = node.tag || "h2";
// //         return (
// //           <Tag
// //             key={idx}
// //             style={{
// //               marginTop: "1.5rem",
// //               marginBottom: "1rem",
// //               fontWeight: "bold",
// //             }}
// //           ></Tag>
// //         );

// //       case "block":
// //         const media = node.fields?.media;
// //         if (media && media.url) {
// //           const imgUrl = `${API_BASE_URL}/${media.url}`;
// //           return (
// //             <figure key={idx} className="my-8">
// //               <img
// //                 src={imgUrl}
// //                 alt={media.alt || "Image"}
// //                 className="w-full rounded-xl"
// //               />
// //               {media.caption && (
// //                 <figcaption className="mt-2 text-center text-sm text-gray-500">
// //                   {media.caption}
// //                 </figcaption>
// //               )}
// //             </figure>
// //           );
// //         }
// //         return null;

// //       default:
// //         return null;
// //     }
// //   });
// // };

// const renderTextChildren = (children) =>
//   children?.map((child, i) => {
//     if (child.type === "text") return child.text;
//     if (child.children) return renderTextChildren(child.children);
//     return null;
//   });


// const parseLexical = (content) => {
//   if (!content?.root?.children) return null;

// const headingClasses = {
//   h1: "mt-12 mb-6",
//   h2: "mt-10 mb-6",
//   h3: "mt-8 mb-4",
//   h4: "mt-8 mb-4",
//   h5: "mt-6 mb-3",
//   h6: "mt-6 mb-3 uppercase tracking-wide",
// };


//   const paragraphClass =
//     "mb-5 text-base text-gray-700 leading-relaxed";

//   const linkClass =
//     "text-[#232b91ff] underline underline-offset-2 hover:text-[#1a2075]";

//   return content.root.children.map((node, idx) => {
//     switch (node.type) {
//       case "paragraph":
//         return (
//           <p key={idx} className={paragraphClass}>
//             {node.children.map((child, cIdx) => {
//               if (child.type === "text")
//                 return <span key={cIdx}>{child.text}</span>;

//               if (child.type === "link") {
//                 const url = child.fields?.url || "#";
//                 const linkText = child.children?.[0]?.text || "Link";
//                 return (
//                   <a
//                     key={cIdx}
//                     href={url}
//                     target={child.fields?.newTab ? "_blank" : "_self"}
//                     rel="noopener noreferrer"
//                     className={linkClass}
//                   >
//                     {linkText}
//                   </a>
//                 );
//               }

//               if (child.type === "linebreak") return <br key={cIdx} />;
//               return null;
//             })}
//           </p>
//         );

//       // case "heading": {
//       //   const Tag = node.tag || "h2";
//       //   const className = headingClasses[Tag] || headingClasses.h2;

//       //   return (
//       //     <Tag key={idx} className={className}>
//       //       {node.children?.map((child, cIdx) =>
//       //         child.type === "text" ? (
//       //           <span key={cIdx}>{child.text}</span>
//       //         ) : null
//       //       )}
//       //     </Tag>
//       //   );
//       // }

//       case "heading": {
//         const Tag = node.tag || "h2";
//         const className = headingClasses[Tag] || headingClasses.h2;

//         return (
//           <Tag key={idx} className={className}>
//             {renderTextChildren(node.children)}
//           </Tag>
//         );
//       }

//       case "block": {
//         const media = node.fields?.media;
//         if (!media?.url) return null;

//         const imgUrl = `${API_BASE_URL}/${media.url}`;

//         return (
//           <figure key={idx} className="my-10">
//             <img
//               src={imgUrl}
//               alt={media.alt || "Image"}
//               className="w-full rounded-xl"
//             />
//             {media.caption && (
//               <figcaption className="mt-3 text-center text-sm text-gray-500 italic">
//                 {media.caption}
//               </figcaption>
//             )}
//           </figure>
//         );
//       }

//       default:
//         return null;
//     }
//   });
// };

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const [blog, setBlog] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [relatedBlogs, setRelatedBlogs] = useState([]);

//   console.log("blogdeatil", blog);

//   useEffect(() => {
//     const fetchBlog = async () => {
//       try {
//         const res = await axios.get(`${API_BASE_URL}/api/posts?limit=0`);

//         const data = res.data?.docs?.length ? res.data : "";
//         console.log("blog data", data);

//         const found = data.docs.find((blog) => String(blog.slug) === slug);

//         console.log("found", found);

//         if (found) {
//           // setBlog({
//           //   id: found.id,
//           //   title: found.title,
//           //   content: found.content,
//           //   createdAt: found.createdAt,
//           //   updatedAt: found.updatedAt,
//           //   publishedAt: found.publishedAt,
//           //   metadescription: found.meta?.description,
//           //   author: found.populatedAuthors?.[0]?.name,
//           //   metatitle: found.meta?.title,
//           //   heroImage:
//           //     found.heroImage?.sizes?.xlarge?.url ||
//           //     found.heroImage?.url ||
//           //     null,
//           // });

//           setBlog({
//             id: found.id,
//             title: found.title,
//             content: found.content,
//             createdAt: found.createdAt,
//             publishedAt: found.publishedAt,
//             metadescription: found.meta?.description,
//             metatitle: found.meta?.title,

//             author: found.populatedAuthors?.[0]?.name,
//             authorImage: found.populatedAuthors?.[0]?.profileImage?.url || null,

//             heroImage:
//               found.heroImage?.sizes?.xlarge?.url ||
//               found.heroImage?.url ||
//               null,
//           });

//           const related = data.docs
//             .filter(
//               (b) =>
//                 String(b.slug) !== slug && b.blogCategory === found.blogCategory
//             )
//             .slice(0, 5);
//           setRelatedBlogs(related);
//         } else {
//           setBlog(null);
//         }
//       } catch (err) {
//         console.error("Error fetching blog:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchBlog();
//   }, [slug]);

//   useEffect(() => {
//     const spans = document.querySelectorAll("p span");
//     spans.forEach((span) => {
//       const cleanText = span.textContent.replace(/\u00A0/g, " ").trim();
//       if (cleanText.endsWith(":")) {
//         span.classList.add("paragraphstyleBlogUl");
//       }
//     });
//   }, [blog]);

//   const sliderSettings = {
//     dots: true,
//     arrows: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 4000,
//     responsive: [
//       { breakpoint: 1024, settings: { slidesToShow: 2 } },
//       { breakpoint: 600, settings: { slidesToShow: 1 } },
//     ],
//   };

//   if (loading) return <BlogDetailSkeleton />;

// if (!blog)
//   return (
//     <>
//       <div className="relative h-[400px] w-full bg-gray-300 animate-pulse">
//         {/* overlay */}
//         <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/10" />

//         {/* Center heading + breadcrumb skeleton */}
//         <div className="absolute inset-0 flex flex-col items-center justify-center space-y-4">
//           <div className="h-6 w-32 bg-gray-200 rounded" />
//           <div className="h-10 w-72 bg-gray-100 rounded" />
//         </div>
//       </div>

//       <div className="min-h-[60vh] flex items-center justify-center px-4 -mt-24 relative z-10">
//         <div className="max-w-md text-center bg-white rounded-2xl shadow-md border p-8">
//           <div className="text-5xl mb-4">📝</div>

//           <h2 className="text-xl font-semibold text-gray-900">
//             Blog not found
//           </h2>

//           <p className="mt-2 text-sm text-gray-600">
//             The blog you are looking for might have been removed or the link is
//             incorrect.
//           </p>

//           <a
//             href="/blog"
//             className="inline-block mt-6 px-5 py-2 text-sm font-medium text-white bg-[#232b91ff] rounded-lg hover:opacity-90 transition"
//           >
//             Back to Blogs
//           </a>
//         </div>
//       </div>
//     </>
//   );


//   return (
//     <>
//       <Helmet>
//         <title>{blog.metatitle || blog.title}</title>

//         {blog.metadescription && (
//           <meta name="description" content={blog.metadescription} />
//         )}

//         <link rel="canonical" href={window.location.href} />

//         <meta property="og:title" content={blog.metatitle || blog.title} />
//         <meta
//           property="og:description"
//           content={blog.metadescription || blog.title}
//         />
//         {blog.heroImage && (
//           <meta
//             property="og:image"
//             content={`${API_BASE_URL}${blog.heroImage}`}
//           />
//         )}
//         <meta property="og:type" content="article" />
//       </Helmet>

//       <div className="BlogDetailPageId">
//         <div className="accaodomationBannerSection relative w-full h-[500px] overflow-hidden">
//           {blog.heroImage && (
//             <>
//               <div className="bLogDetailBanner">
//                 <img
//                   src={`${API_BASE_URL}${blog.heroImage}`}
//                   alt={blog.title}
//                 />
//                             <div className="absolute inset-0 bg-gradient-to-b from-[#a34493]/610 to-[#8b3c82]/90"></div>

//               </div>

//               <div className="accodoamationBannerContainer">
//                 <div className="accodoamationBannerText ">
//                   <div className="breadCrum mb-4">
//                     <a href="#">
//                       <Link to="/blog">BLOG</Link>
//                     </a>{" "}
//                   </div>
//                   <AutoShrinkText
//                     text={blog.title}
//                     baseSize={60}
//                     minSize={40}
//                     maxChars={40}
//                     className="accodoamationBannerText"
//                     width="80%"
//                     maxLines={2}
//                   />
//                 </div>
//               </div>
//             </>
//           )}
//         </div>

//         <div className="blog-detail-container  container max-w-7xl mx-auto">
//           <div className="flex items-center gap-4 mb-8">
//             {blog.authorImage ? (
//               <img
//                 src={`${API_BASE_URL}${blog.authorImage}`}
//                 alt={blog.author}
//                 className="w-18 h-18 rounded-full object-cover border"
//               />
//             ) : (
//               <div className="w-18 h-18 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
//                 {blog.author?.charAt(0)}
//               </div>
//             )}

//             <div className="leading-tight">
//               <p className="text-sm font-semibold text-gray-800">
//                 {blog.author || "Admin"}
//               </p>

//               <p className="text-xs text-gray-500">
//                 {new Date(blog.publishedAt).toLocaleDateString("en-GB", {
//                   day: "2-digit",
//                   month: "short",
//                   year: "numeric",
//                   timeZone: "Asia/Kolkata",
//                 })}
//               </p>
//             </div>
//           </div>

//           <div className="blog-content">{parseLexical(blog.content)}</div>
//           <div className="back-link">
//             <Link to="/blog">← Back to Blog List</Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default BlogDetail;

