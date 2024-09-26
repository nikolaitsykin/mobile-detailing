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
        element: <Root />,
      },
      {
        path: SERVICES_PATH,
        element: <ServicesPage />,
      },
      {
        path: BOOKING_PATH,
        element: <BookingPage />,
      },
      {
        path: CONTACT_PATH,
        element: <ContactPage />,
      },
      {
        path: MEMBERSHIP_PATH,
        element: <Membership />,
      },
      {
        path: ABOUT_PATH,
        element: <AboutPage />,
      },
      {
        path: FAQS_PATH,
        element: <FAQs />,
      },
      {
        path: GALLERY_PATH,
        element: <Gallery />,
      },
      {
        path: REVIEWS_PATH,
        element: <Reviews />,
      },
      {
        path: MOBILE_DETAILING_PATH,
        element: <AutoDetailing />,
      },
      {
        path: "/:serviceId",
        element: <ServiceItemPage />,
      },
      {
        path: "/ceramic-coating",
        element: <Ceramic />,
      },
      {
        path: "/headlight-restoration",
        element: <Headlights />,
      },
      {
        path: "/ppf",
        element: <PPF />,
      },
      {
        path: "/paint-correction",
        element: <PaintCorrection />,
      },
      {
        path: "/auto-detailing-apex",
        element: <RootApex />,
      },
      {
        path: "/auto-detailing-raleigh",
        element: <RootRaleigh />,
      },
      {
        path: "/auto-detailing-cary",
        element: <RootCary />,
      },
      {
        path: "/auto-detailing-holly-springs",
        element: <RootHollySprings />,
      },
      {
        path: "/auto-detailing-morrisville",
        element: <RootMorrisville />,
      },
      {
        path: "/auto-detailing-knightdale",
        element: <RootKnightdale />,
      },
      {
        path: "/auto-detailing-garner",
        element: <RootGarner />,
      },
      {
        path: "*",
        element: <Hero />,
      },
    ],
  },
]);
