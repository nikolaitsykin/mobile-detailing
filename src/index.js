import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
// import { routes } from "./components/routes/routes";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import {
  ABOUT_PATH,
  APEX_PATH,
  BOOKING_PAGE_PATH,
  CARY_PATH,
  FAQS_PATH,
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
} from "./utils/constants";
import App from "./components/App";
import ErrorPage from "./components/error-page";
import Root from "./components/routes/Root";
import AboutPage from "./components/routes/navigation/AboutPage";
import BookingPage from "./components/routes/navigation/BookingPage";
import FAQs from "./components/routes/navigation/FAQsPage";
import ServicesPage from "./components/routes/navigation/ServicesPage";
import RootApex from "./components/routes/pagesByCity/Apex";
import RootCary from "./components/routes/pagesByCity/Cary";
import RootGarner from "./components/routes/pagesByCity/Garner";
import RootHollySprings from "./components/routes/pagesByCity/HollySprings";
import RootKnightdale from "./components/routes/pagesByCity/Knightdale";
import RootMorrisville from "./components/routes/pagesByCity/Morrisville";
import RootRaleigh from "./components/routes/pagesByCity/Raleigh";
import MobileExteriorDetailing from "./components/routes/services/MobileExteriorDetailing";
import MobileFullDetailing from "./components/routes/services/MobileFullDetailing";
import MobileInteriorDetailing from "./components/routes/services/MobileInteriorDetailing";

const routes = createBrowserRouter([
  {
    path: HOME_PATH,
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: SERVICES_PATH,
        element: <ServicesPage />,
      },
      {
        path: BOOKING_PAGE_PATH,
        element: <BookingPage />,
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
        path: APEX_PATH,
        element: <RootApex />,
      },
      {
        path: RALEIGH_PATH,
        element: <RootRaleigh />,
      },
      {
        path: CARY_PATH,
        element: <RootCary />,
      },
      {
        path: HOLLY_SPRINGS_PATH,
        element: <RootHollySprings />,
      },
      {
        path: MORRISVILLE_PATH,
        element: <RootMorrisville />,
      },
      {
        path: KNIGHTDALE_PATH,
        element: <RootKnightdale />,
      },
      {
        path: GARNER_PATH,
        element: <RootGarner />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={routes} />
);
