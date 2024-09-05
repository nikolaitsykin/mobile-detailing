import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import Hero from "../Hero";
import Root from "../routes/Root";
import About from "./AboutPage";
import AutoDetailing from "./AutoDetailing";
import Booking from "./BookingPage";
import Ceramic from "./Ceramic";
import FAQs from "./FAQsPage";
import Gallery from "./GalleryPage";
import Headlights from "./Headlights";
import Membership from "./MembershipPage";
import PPF from "./PPF";
import Reviews from "./ReviewsPage";
import Polish from "./Polish";

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
        path: "/booking",
        element: <Booking />,
      },
      {
        path: "/membership",
        element: <Membership />,
      },
      {
        path: "/about",
        element: <About />,
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
        path: "/auto-detailing",
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
        element: <Polish />,
      },
      {
        path: "*",
        element: <Hero />,
      },
    ],
  },
]);
