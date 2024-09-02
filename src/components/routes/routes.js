import * as React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../error-page";
import Hero from "../Hero";
import About from "../routes/About";
import Booking from "../routes/Booking";
import FAQs from "../routes/FAQs";
import Gallery from "../routes/Gallery";
import Membership from "../routes/Membership";
import Reviews from "../routes/Reviews";
import Root from "../routes/Root";
import Services from "../routes/Services";

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
