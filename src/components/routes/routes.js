import * as React from "react";
import {
  ABOUT_PATH,
  BASE_DETAILING_PATH,
  BOOKING_PAGE_PATH,
  CERAMIC_COATING_PATH,
  COMPLETE_DETAILING_PATH,
  CONTACT_PATH,
  DEEP_CLEANING_PATH,
  FAQS_PATH,
  GALLERY_PATH,
  HOME_PATH,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  SERVICES_PATH,
  SHINE_AND_SHIELD_PATH,
  STEAM_AND_GUARD_PATH,
  THANK_YOU_PATH,
  WASH_AND_WAX_PATH,
  WIPE_AND_CLEAN_PATH,
} from "../../utils/constants";
import App from "../App";
import ErrorPage from "../error-page";
import AboutPage from "./navigation/AboutPage";
import BookingPage from "./navigation/BookingPage";
import ContactPage from "./navigation/ContactPage";
import FAQs from "./navigation/FAQsPage";
import Gallery from "./navigation/GalleryPage";
import ServicesPage from "./navigation/ServicesPage";
import Root from "./Root";
import CeramicCoating from "./services/Ceramic";
import BaseDetailing from "./services/detailing/BaseDetailing";
import CompleteDetailing from "./services/detailing/CompleteDetailing";
import DeepCleaning from "./services/detailing/DeepCleaning";
import ShineAndShield from "./services/detailing/ShineAndShield";
import SteamAndGuard from "./services/detailing/SteamAndGuard";
import WashAndWax from "./services/detailing/WashAndWax";
import WipeAndClean from "./services/detailing/WipeAndClean";
import MobileExteriorDetailing from "./services/MobileExteriorDetailing";
import MobileFullDetailing from "./services/MobileFullDetailing";
import MobileInteriorDetailing from "./services/MobileInteriorDetailing";
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
        path: THANK_YOU_PATH,
        name: "Thank You",
        element: <ThankYouPage />,
      },
      {
        path: "*",
        name: "404",
        element: <Root />,
      },
    ],
  },
];
