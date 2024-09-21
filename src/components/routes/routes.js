import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import Hero from "../Hero";
import Root from "../routes/Root";
import AutoDetailing from "./AutoDetailing";
import Booking from "./BookingPage";
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

export const routes = createBrowserRouter([
  {
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Root />,
      },
      {
        path: "/services",
        element: <ServicesPage />,
      },
      {
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/FAQs",
        element: <FAQs />,
      },
      {
        path: "/gallery",
        element: <Gallery />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/mobile-detailing",
        element: <AutoDetailing />,
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
