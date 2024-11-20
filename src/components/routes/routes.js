import * as React from "react";
import {
  ABOUT_PATH,
  APEX_PATH,
  BASE_CLEAN_PATH,
  BASE_DETAILING_PATH,
  BASE_WASH_PATH,
  BOOKING_PAGE_PATH,
  CARY_PATH,
  CERAMIC_COATING_PATH,
  COMPLETE_DETAILING_PATH,
  CONTACT_PATH,
  DEEP_CLEANING_PATH,
  FAQS_PATH,
  GALLERY_PATH,
  GARNER_PATH,
  HOLLY_SPRINGS_PATH,
  HOME_PATH,
  KNIGHTDALE_PATH,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  MORRISVILLE_PATH,
  RALEIGH_PATH,
  SERVICES_PATH,
  SHINE_AND_SHIELD_PATH,
  STEAM_AND_GUARD_PATH,
  WASH_AND_WAX_PATH,
  WIPE_AND_CLEAN_PATH,
} from "../../utils/constants";
import App from "../App";
import ErrorPage from "../error-page";
import Root from "./Root";
import AboutPage from "./navigation/AboutPage";
import BookingPage from "./navigation/BookingPage";
import ContactPage from "./navigation/ContactPage";
import FAQs from "./navigation/FAQsPage";
import Gallery from "./navigation/GalleryPage";
import ServicesPage from "./navigation/ServicesPage";
import RootApex from "./pagesByCity/Apex";
import RootCary from "./pagesByCity/Cary";
import RootGarner from "./pagesByCity/Garner";
import RootHollySprings from "./pagesByCity/HollySprings";
import RootKnightdale from "./pagesByCity/Knightdale";
import RootMorrisville from "./pagesByCity/Morrisville";
import RootRaleigh from "./pagesByCity/Raleigh";
import BaseClean from "./services/detailing/BaseClean";
import BaseDetailing from "./services/detailing/BaseDetailing";
import BaseWash from "./services/detailing/BaseWash";
import DeepCleaning from "./services/detailing/DeepCleaning";
import ShineAndShield from "./services/detailing/ShineAndShield";
import SteamAndGuard from "./services/detailing/SteamAndGuard";
import WashAndWax from "./services/detailing/WashAndWax";
import WipeAndClean from "./services/detailing/WipeAndClean";
import MobileExteriorDetailing from "./services/MobileExteriorDetailing";
import MobileFullDetailing from "./services/MobileFullDetailing";
import MobileInteriorDetailing from "./services/MobileInteriorDetailing";
import CompleteDetailing from "./services/detailing/CompleteDetailing";
import CeramicCoating from "./services/Ceramic";

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
        path: MOBILE_EXTERIOR_DETAILING_PATH,
        name: "Mobile Interior Detailing",
        element: <MobileExteriorDetailing />,
      },
      // {
      //   path: BASE_WASH_PATH,
      //   name: "Base Wash",
      //   element: <BaseWash />,
      // },
      {
        path: WASH_AND_WAX_PATH,
        name: "Wash and Wax",
        element: <WashAndWax />,
      },
      {
        path: SHINE_AND_SHIELD_PATH,
        name: "Shine and Shield",
        element: <ShineAndShield />,
      },
      // {
      //   path: BASE_CLEAN_PATH,
      //   name: "Base Clean",
      //   element: <BaseClean />,
      // },
      {
        path: WIPE_AND_CLEAN_PATH,
        name: "Wipe and Clean",
        element: <WipeAndClean />,
      },
      {
        path: STEAM_AND_GUARD_PATH,
        name: "Steam and Guard",
        element: <SteamAndGuard />,
      },
      {
        path: BASE_DETAILING_PATH,
        name: "Base Detailing",
        element: <BaseDetailing />,
      },
      {
        path: COMPLETE_DETAILING_PATH,
        name: "Complete Detailing",
        element: <CompleteDetailing />,
      },
      {
        path: DEEP_CLEANING_PATH,
        name: "Deep Cleaning",
        element: <DeepCleaning />,
      },
      {
        path: MOBILE_FULL_DETAILING_PATH,
        name: "Mobile Interior Detailing",
        element: <MobileFullDetailing />,
      },
      {
        path: CERAMIC_COATING_PATH,
        name: "Ceramic Coating",
        element: <CeramicCoating />,
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
        path: APEX_PATH,
        name: "Apex Auto Detailing",
        element: <RootApex />,
      },
      {
        path: RALEIGH_PATH,
        name: "Raleigh Auto Detailing",
        element: <RootRaleigh />,
      },
      {
        path: CARY_PATH,
        name: "Cary Auto Detailing",
        element: <RootCary />,
      },
      {
        path: HOLLY_SPRINGS_PATH,
        name: "Holly Springs Auto Detailing",
        element: <RootHollySprings />,
      },
      {
        path: MORRISVILLE_PATH,
        name: "Morrisville Auto Detailing",
        element: <RootMorrisville />,
      },
      {
        path: KNIGHTDALE_PATH,
        name: "Knightdale Auto Detailing",
        element: <RootKnightdale />,
      },
      {
        path: GARNER_PATH,
        name: "Garner Auto Detailing",
        element: <RootGarner />,
      },
      {
        path: "*",
        name: "404",
        element: <Root />,
      }
    ],
  },
];
