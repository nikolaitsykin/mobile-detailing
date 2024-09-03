import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import Hero from "../Hero";
import About from "./AboutPage";
import Booking from "./BookingPage";
import FAQs from "./FAQsPage";
import Gallery from "./GalleryPage";
import Membership from "./MembershipPage";
import Reviews from "./ReviewsPage";
import Root from "../routes/Root";
import Services from "../routes/ServicesPage";

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
        path: "/services",
        element: <Services />,
      },
      {
        path: "*",
        element: <Hero />,
      },
    ],
  },
]);
