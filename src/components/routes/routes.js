import BookingPage from "./navigation/BookingPage";
import FAQs from "./navigation/FAQsPage";
import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import {
  ABOUT_PATH,
  BOOKING_PAGE_PATH,
  CONTACT_PATH,
  FAQS_PATH,
  GALLERY_PATH,
  HOME_PATH,
  MEMBERSHIP_PATH,
  MOBILE_DETAILING_PATH_EXTERIOR,
  MOBILE_DETAILING_PATH_FULL,
  MOBILE_DETAILING_PATH_INTERIOR,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  SERVICES_PATH,
} from "../../utils/constants";
import App from "../App";
import ErrorPage from "../error-page";
import AboutPage from "./navigation/AboutPage";
import Root from "../routes/Root";
import MobileInteriorDetailing from "./services/MobileInteriorDetailing";
import MobileExteriorDetailing from "./services/MobileExteriorDetailing";
import MobileFullDetailing from "./services/MobileFullDetailing";
import Ceramic from "./services/Ceramic";
import ContactPage from "./navigation/ContactPage";
import Gallery from "./navigation/GalleryPage";
import Headlights from "./services/Headlights";
import Membership from "./navigation/MembershipPage";
import RootApex from "./pagesByCity/Apex";
import RootCary from "./pagesByCity/Cary";
import RootGarner from "./pagesByCity/Garner";
import RootHollySprings from "./pagesByCity/HollySprings";
import RootKnightdale from "./pagesByCity/Knightdale";
import RootMorrisville from "./pagesByCity/Morrisville";
import RootRaleigh from "./pagesByCity/Raleigh";
import PaintCorrection from "./services/PaintCorrection";
import PPF from "./services/PPF";
import ServiceItemPage from "./ServiceItemPage";
import ServicesPage from "./navigation/ServicesPage";

export const routes = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: HOME_PATH,
        name: "Home",
        element: <Root />,
      },
      {
        path: SERVICES_PATH,
        name: "Services",
        element: <ServicesPage />,
      },
      {
        path: BOOKING_PAGE_PATH,
        name: "Booking",
        element: <BookingPage />,
      },
      {
        path: CONTACT_PATH,
        name: "Contact",
        element: <ContactPage />,
      },
      {
        path: MEMBERSHIP_PATH,
        name: "Membership",
        element: <Membership />,
      },
      {
        path: ABOUT_PATH,
        name: "About",
        element: <AboutPage />,
      },
      {
        path: FAQS_PATH,
        name: "FAQs",
        element: <FAQs />,
      },
      {
        path: GALLERY_PATH,
        name: "Gallery",
        element: <Gallery />,
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
        path: MOBILE_FULL_DETAILING_PATH,
        name: "Mobile Interior Detailing",
        element: <MobileFullDetailing />,
      },
      {
        path: "/:serviceId",
        name: "Service Item",
        element: <ServiceItemPage />,
      },
      {
        path: "/ceramic-coating",
        name: "Ceramic Coating",
        element: <Ceramic />,
      },
      {
        path: "/headlight-restoration",
        name: "Headlight Restoration",
        element: <Headlights />,
      },
      {
        path: "/ppf",
        name: "PPF",
        element: <PPF />,
      },
      {
        path: "/paint-correction",
        name: "Paint Correction",
        element: <PaintCorrection />,
      },
      {
        path: "/auto-detailing-apex",
        name: "Apex",
        element: <RootApex />,
      },
      {
        path: "/auto-detailing-raleigh",
        name: "Raleigh",
        element: <RootRaleigh />,
      },
      {
        path: "/auto-detailing-cary",
        name: "Cary",
        element: <RootCary />,
      },
      {
        path: "/auto-detailing-holly-springs",
        name: "Holly Springs",
        element: <RootHollySprings />,
      },
      {
        path: "/auto-detailing-morrisville",
        name: "Morrisville",
        element: <RootMorrisville />,
      },
      {
        path: "/auto-detailing-knightdale",
        name: "Knightdale",
        element: <RootKnightdale />,
      },
      {
        path: "/auto-detailing-garner",
        name: "Garner",
        element: <RootGarner />,
      },
      {
        path: "*",
        name: "404",
        element: <ErrorPage />,
      },
    ],
  },
]);
