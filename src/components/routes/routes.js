import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import Hero from "../Hero";
import Root from "../routes/Root";
import AutoDetailing from "./AutoDetailing";
import ContactPage from "./ContactPage";
import Ceramic from "./Ceramic";
import FAQs from "./FAQsPage";
import Gallery from "./GalleryPage";
import Headlights from "./Headlights";
import Membership from "./MembershipPage";
import PPF from "./PPF";
import Reviews from "./ReviewsPage";
import PaintCorrection from "./PaintCorrection";
import AboutPage from "./AboutPage";
import ServicesPage from "./ServicesPage";
import RootApex from "./pagesByCity/Apex";
import RootRaleigh from "./pagesByCity/Raleigh";
import RootCary from "./pagesByCity/Cary";
import RootHollySprings from "./pagesByCity/HollySprings";
import RootMorrisville from "./pagesByCity/Morrisville";
import RootKnightdale from "./pagesByCity/Knightdale";
import RootGarner from "./pagesByCity/Garner";
import ServiceItemPage from "./ServiceItemPage";
import BookingPage from "./BookingPage";
import {
  ABOUT_PATH,
  BOOKING_PATH,
  CONTACT_PATH,
  FAQS_PATH,
  GALLERY_PATH,
  HOME_PATH,
  MEMBERSHIP_PATH,
  MOBILE_DETAILING_PATH,
  REVIEWS_PATH,
  SERVICES_PATH,
} from "../../utils/constants";

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
        path: BOOKING_PATH,
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
        path: REVIEWS_PATH,
        name: "Reviews",
        element: <Reviews />,
      },
      {
        path: MOBILE_DETAILING_PATH,
        name: "Mobile Detailing",
        element: <AutoDetailing />,
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
        // path: "*",
        name: "404",
        element: <ErrorPage />,
      },
    ],
  },
]);
