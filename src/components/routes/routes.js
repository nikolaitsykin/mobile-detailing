// import * as React from "react";
// import { createBrowserRouter } from "react-router-dom";
// import {
//   ABOUT_PATH, APEX_PATH, BOOKING_PAGE_PATH, CARY_PATH, FAQS_PATH, GARNER_PATH, HOLLY_SPRINGS_PATH, HOME_PATH, KNIGHTDALE_PATH, MOBILE_EXTERIOR_DETAILING_PATH,
//   MOBILE_FULL_DETAILING_PATH,
//   MOBILE_INTERIOR_DETAILING_PATH, MORRISVILLE_PATH, RALEIGH_PATH, SERVICES_PATH
// } from "../../utils/constants";
// import App from "../App";
// import ErrorPage from "../error-page";
// import Root from "../routes/Root";
// import AboutPage from "./navigation/AboutPage";
// import BookingPage from "./navigation/BookingPage";
// import FAQs from "./navigation/FAQsPage";
// import ServicesPage from "./navigation/ServicesPage";
// import RootApex from "./pagesByCity/Apex";
// import RootCary from "./pagesByCity/Cary";
// import RootGarner from "./pagesByCity/Garner";
// import RootHollySprings from "./pagesByCity/HollySprings";
// import RootKnightdale from "./pagesByCity/Knightdale";
// import RootMorrisville from "./pagesByCity/Morrisville";
// import RootRaleigh from "./pagesByCity/Raleigh";
// import MobileExteriorDetailing from "./services/MobileExteriorDetailing";
// import MobileFullDetailing from "./services/MobileFullDetailing";
// import MobileInteriorDetailing from "./services/MobileInteriorDetailing";

// export const routes = createBrowserRouter([
//   {
//     element: <App />,
//     errorElement: <ErrorPage />,
//     children: [
//       {
//         index: true,
//         path: HOME_PATH,
//         element: <Root />,
//       },
//       {
//         path: SERVICES_PATH,
//         element: <ServicesPage />,
//       },
//       {
//         path: BOOKING_PAGE_PATH,
//         element: <BookingPage />,
//       },

//       {
//         path: ABOUT_PATH,
//         name: "About",
//         element: <AboutPage />,
//       },
//       {
//         path: FAQS_PATH,
//         name: "FAQs",
//         element: <FAQs />,
//       },
//       {
//         path: MOBILE_INTERIOR_DETAILING_PATH,
//         name: "Mobile Interior Detailing",
//         element: <MobileInteriorDetailing />,
//       },
//       {
//         path: MOBILE_EXTERIOR_DETAILING_PATH,
//         name: "Mobile Interior Detailing",
//         element: <MobileExteriorDetailing />,
//       },
//       {
//         path: MOBILE_FULL_DETAILING_PATH,
//         name: "Mobile Interior Detailing",
//         element: <MobileFullDetailing />,
//       },
//       {
//         path: APEX_PATH,
//         element: <RootApex />,
//       },
//       {
//         path: RALEIGH_PATH,
//         element: <RootRaleigh />,
//       },
//       {
//         path: CARY_PATH,
//         element: <RootCary />,
//       },
//       {
//         path: HOLLY_SPRINGS_PATH,
//         element: <RootHollySprings />,
//       },
//       {
//         path: MORRISVILLE_PATH,
//         element: <RootMorrisville />,
//       },
//       {
//         path: KNIGHTDALE_PATH,
//         element: <RootKnightdale />,
//       },
//       {
//         path: GARNER_PATH,
//         element: <RootGarner />,
//       },
//     ],
//   },
// ]);

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
//  );
 
