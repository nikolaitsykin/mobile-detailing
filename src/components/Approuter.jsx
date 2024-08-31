import React from "react";
import { Route, Routes } from "react-router-dom";
import ErrorPage from "./error-page";
import About from "./routes/About";
import FAQs from "./routes/FAQs";
import Gallery from "./routes/Gallery";
import Membership from "./routes/Membership";
import Reviews from "./routes/Reviews";
import Root from "./routes/Root";
import Services from "./routes/Services";
import Hero from "./Hero";

const Approuter = () => {
  const router = [
    {
      path: "/prime-detailing/",
      element: <Root />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/membership",
      element: <Membership />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/about",
      element: <About />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/FAQs",
      element: <FAQs />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/gallery",
      element: <Gallery />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/reviews",
      element: <Reviews />,
      errorElement: <ErrorPage />,
    },
    {
      path: "/services",
      element: <Services />,
      errorElement: <ErrorPage />,
    },
    {
      path: "*",
      element: <Hero />,
      errorElement: <ErrorPage />,
    },
  ];

  return (
    <>
      {
        <Routes>
          {router.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
              errorElement={route.errorElement}
            />
          ))}
        </Routes>
      }
    </>
  );
};

export default Approuter;
