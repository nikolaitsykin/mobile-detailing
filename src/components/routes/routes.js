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
        path: "*",
        element: <Hero />,
      },
    ],
  },
]);
