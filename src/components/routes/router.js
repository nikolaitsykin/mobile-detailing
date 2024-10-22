import * as React from "react";
import {
    ABOUT_PATH,
    APEX_PATH,
    BOOKING_PAGE_PATH,
    CARY_PATH,
    CONTACT_PATH,
    FAQS_PATH,
    GARNER_PATH,
    HOLLY_SPRINGS_PATH,
    HOME_PATH,
    KNIGHTDALE_PATH,
    MOBILE_EXTERIOR_DETAILING_PATH,
    MOBILE_FULL_DETAILING_PATH,
    MOBILE_INTERIOR_DETAILING_PATH,
    MORRISVILLE_PATH,
    QUICK_WASH_PATH,
    RALEIGH_PATH,
    SERVICES_PATH
} from "../../utils/constants";
import App from "../App";
import ErrorPage from "../error-page";
import Root from "../routes/Root";
import AboutPage from "./navigation/AboutPage";
import BookingPage from "./navigation/BookingPage";
import ContactPage from "./navigation/ContactPage";
import FAQs from "./navigation/FAQsPage";
import ServicesPage from "./navigation/ServicesPage";
import RootApex from "./pagesByCity/Apex";
import RootCary from "./pagesByCity/Cary";
import RootGarner from "./pagesByCity/Garner";
import RootHollySprings from "./pagesByCity/HollySprings";
import RootKnightdale from "./pagesByCity/Knightdale";
import RootMorrisville from "./pagesByCity/Morrisville";
import RootRaleigh from "./pagesByCity/Raleigh";
import MobileExteriorDetailing from "./services/MobileExteriorDetailing";
import MobileFullDetailing from "./services/MobileFullDetailing";
import MobileInteriorDetailing from "./services/MobileInteriorDetailing";

export const router = [
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
        path: MOBILE_FULL_DETAILING_PATH,
        name: "Mobile Interior Detailing",
        element: <MobileFullDetailing />,
      },
      {
        path: QUICK_WASH_PATH,
        name: "Quick Wash",
        element: <MobileFullDetailing />,
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
    ],
  },
];
