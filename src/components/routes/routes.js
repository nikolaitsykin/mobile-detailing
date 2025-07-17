import {
  ABOUT_PATH,
  APEX_PATH,
  BOOKING_PAGE_PATH,
  CARY_PATH,
  CERAMIC_COATING_PATH,
  CONTACT_PATH,
  EXPRESS_EXTERIOR_PATH,
  EXPRESS_FULL_DETAILING_PATH,
  EXPRESS_INTERIOR_PATH,
  FAQS_PATH,
  FUQUAY_VARINA_PATH,
  GALLERY_PATH,
  GARNER_PATH,
  HOLLY_SPRINGS_PATH,
  HOME_PATH,
  KNIGHTDALE_PATH,
  MAINTENANCE_FULL_DETAILING_PATH,
  MOBILE_DETAILING_PATH, MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  MORRISVILLE_PATH,
  ODOR_REMOVAL_PATH,
  PAINT_CORRECTION_PATH,
  SERVICES_PATH,
  SHAMPOO_PATH,
  THANK_YOU_PATH,
  THREE_YEARS_CERAMIC_PATH,
  ULTIMATE_EXTERIOR_PATH,
  ULTIMATE_FULL_DETAILING_PATH,
  ULTIMATE_INTERIOR_PATH
} from "../../utils/constants";
import App from "../App";
import ErrorPage from "../error-page";
import NotFound from "./404";
import Apex from "./locations/Apex";
import Cary from "./locations/Cary";
import FuquayVarina from "./locations/FuquayVarina";
import Garner from "./locations/Garner";
import HollySprings from "./locations/HollySprings";
import Knightdale from "./locations/Knightdale";
import Morrisville from "./locations/Morrisville";
import AboutPage from "./navigation/AboutPage";
import BookingPage from "./navigation/BookingPage";
import ContactPage from "./navigation/ContactPage";
import FAQs from "./navigation/FAQsPage";
import Gallery from "./navigation/GalleryPage";
import ServicesPage from "./navigation/ServicesPage";
import Root from "./Root";
import CeramicCoating from "./services/CeramicCoating";
import ExpressExterior from "./services/detailing/ExpressExterior";
import ExpressFullDetailing from "./services/detailing/ExpressFullDetailing";
import ExpressInterior from "./services/detailing/ExpressInterior";
import MaintenanceDetailing from "./services/detailing/MaintenanceDetailing";
import OdorRemoval from "./services/detailing/OdorRemoval";
import SteamAndShampoo from "./services/detailing/SteamAndShampoo";
import ThreeYearsCeramic from "./services/detailing/ThreeYearsCeramic";
import UltimateExterior from "./services/detailing/UltimateExterior";
import UltimateFullDetailing from "./services/detailing/UltimateFullDetailing";
import UltimateInterior from "./services/detailing/UltimateInterior";
import MobileDetailing from "./services/MobileDetailing";
import MobileFullDetailing from "./services/MobileFullDetailing";
import MobileInteriorDetailing from "./services/MobileInteriorDetailing";
import PaintCorrection from "./services/PaintCorrection";
import ThankYouPage from "./ThankYouPage";

export const routes = [
  {
    path: HOME_PATH,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        name: "Home",
        element: <Root />,
      },
      {
        path: APEX_PATH,
        name: "Apex",
        element: <Apex />,
      },
      {
        path: CARY_PATH,
        name: "Cary",
        element: <Cary />,
      },
      {
        path: FUQUAY_VARINA_PATH,
        name: "Fuquay-Varina",
        element: <FuquayVarina />,
      },
      {
        path: GARNER_PATH,
        name: "Garner",
        element: <Garner />,
      },
      {
        path: HOLLY_SPRINGS_PATH,
        name: "Holly Springs",
        element: <HollySprings />,
      },
      {
        path: MORRISVILLE_PATH,
        name: "Morrisville",
        element: <Morrisville />,
      },
      {
        path: KNIGHTDALE_PATH,
        name: "Knightdale",
        element: <Knightdale />,
      },
      {
        path: SERVICES_PATH,
        name: "Services",
        element: <ServicesPage />,
      },
      {
        path: MOBILE_INTERIOR_DETAILING_PATH,
        name: "Mobile Interior Detailing",
        element: <MobileInteriorDetailing />,
      },
      {
        path: EXPRESS_EXTERIOR_PATH,
        name: "Express Exterior",
        element: <ExpressExterior />,
      },
      {
        path: ULTIMATE_EXTERIOR_PATH,
        name: "Ultimate Exterior",
        element: <UltimateExterior />,
      },
      {
        path: EXPRESS_INTERIOR_PATH,
        name: "Express Interior",
        element: <ExpressInterior />,
      },
      {
        path: ULTIMATE_INTERIOR_PATH,
        name: "Ultimate Interior",
        element: <UltimateInterior />,
      },
      {
        path: ODOR_REMOVAL_PATH,
        name: "Odor Removal",
        element: <OdorRemoval />,
      },
      {
        path: SHAMPOO_PATH,
        name: "Steam and Shampoo",
        element: <SteamAndShampoo />,
      },
      {
        path: MAINTENANCE_FULL_DETAILING_PATH,
        name: "Maintenance Detailing",
        element: <MaintenanceDetailing />,
      },
      {
        path: EXPRESS_FULL_DETAILING_PATH,
        name: "Express Full Detailing",
        element: <ExpressFullDetailing />,
      },
      {
        path: ULTIMATE_FULL_DETAILING_PATH,
        name: "Ultimate Full Detailing",
        element: <UltimateFullDetailing />,
      },
      {
        path: MOBILE_FULL_DETAILING_PATH,
        name: "Mobile Full Detailing",
        element: <MobileFullDetailing />,
      },
      {
        path: MOBILE_DETAILING_PATH,
        name: "Mobile Detailing",
        element: <MobileDetailing />,
      },
      {
        path: THREE_YEARS_CERAMIC_PATH,
        name: "Three Years Ceramic Coating",
        element: <ThreeYearsCeramic />,
      },
      {
        path: CERAMIC_COATING_PATH,
        name: "Ceramic Coating",
        element: <CeramicCoating />,
      },
      {
        path: PAINT_CORRECTION_PATH,
        name: "Paint Correction",
        element: <PaintCorrection />,
      },
      {
        path: BOOKING_PAGE_PATH,
        name: "Booking",
        element: <BookingPage />,
      },
      {
        path: ABOUT_PATH,
        name: "About",
        element: <AboutPage />,
      },
      {
        path: CONTACT_PATH,
        name: "Contact",
        element: <ContactPage />,
      },
      {
        path: FAQS_PATH,
        name: "FAQ's",
        element: <FAQs />,
      },
      {
        path: GALLERY_PATH,
        name: "Gallery",
        element: <Gallery />,
      },
      {
        path: THANK_YOU_PATH,
        name: "Thank You",
        element: <ThankYouPage />,
      },
      {
        path: "*",
        name: "404",
        element: <NotFound />,
      },
    ],
  },
];

