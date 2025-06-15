import * as React from "react";
import {
  ABOUT_PATH,
  BOOKING_PAGE_PATH,
  CERAMIC_COATING_PATH,
  CONTACT_PATH,
  EXPRESS_EXTERIOR_PATH,
  EXPRESS_FULL_DETAILING_PATH,
  EXPRESS_INTERIOR_PATH,
  FAQS_PATH,
  GALLERY_PATH,
  HOME_PATH,
  MAINTENANCE_FULL_DETAILING_PATH,
  MOBILE_DETAILING_PATH,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  ODOR_REMOVAL_PATH,
  SERVICES_PATH,
  THANK_YOU_PATH,
  ULTIMATE_EXTERIOR_PATH,
  ULTIMATE_FULL_DETAILING_PATH,
  ULTIMATE_INTERIOR_PATH,
} from "../../utils/constants";
import App from "../App";
import ErrorPage from "../error-page";
import AboutPage from "./navigation/AboutPage";
import BookingPage from "./navigation/BookingPage";
import ContactPage from "./navigation/ContactPage";
import FAQs from "./navigation/FAQsPage";
import Gallery from "./navigation/GalleryPage";
import ServicesPage from "./navigation/ServicesPage";
import Root from "./Root";
import CeramicCoating from "./services/detailing/Ceramic";
import ExpressExterior from "./services/detailing/ExpressExterior";
import ExpressFullDetailing from "./services/detailing/ExpressFullDetailing";
import ExpressInterior from "./services/detailing/ExpressInterior";
import MaintenanceDetailing from "./services/detailing/MaintenanceDetailing";
import OdorRemoval from "./services/detailing/OdorRemoval";
import UltimateExterior from "./services/detailing/UltimateExterior";
import UltimateFullDetailing from "./services/detailing/UltimateFullDetailing";
import UltimateInterior from "./services/detailing/UltimateInterior";
import MobileDetailing from "./services/MobileDetailing";
import MobileExteriorDetailing from "./services/MobileExteriorDetailing";
import MobileFullDetailing from "./services/MobileFullDetailing";
import MobileInteriorDetailing from "./services/MobileInteriorDetailing";
import ThankYouPage from "./ThankYouPage";

export const routes = [
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
        path: EXPRESS_EXTERIOR_PATH,
        name: "Express Exterior",
        element: <ExpressExterior />,
      },
      {
        path: ULTIMATE_EXTERIOR_PATH,
        name: "Ultimate Exterior",
        element: <UltimateExterior />,
      },
      {
        path: EXPRESS_INTERIOR_PATH,
        name: "Express Interior",
        element: <ExpressInterior />,
      },

      {
        path: ULTIMATE_INTERIOR_PATH,
        name: "Ultimate Interior",
        element: <UltimateInterior />,
      },
      {
        path: ODOR_REMOVAL_PATH,
        name: "Odor Removal",
        element: <OdorRemoval />,
      },
      {
        path: MAINTENANCE_FULL_DETAILING_PATH,
        name: "Maintenance Detailing",
        element: <MaintenanceDetailing />,
      },
      {
        path: EXPRESS_FULL_DETAILING_PATH,
        name: "Express Full Detailing",
        element: <ExpressFullDetailing />,
      },
      {
        path: ULTIMATE_FULL_DETAILING_PATH,
        name: "Ultimate Full Detailing",
        element: <UltimateFullDetailing />,
      },
      {
        path: MOBILE_FULL_DETAILING_PATH,
        name: "Mobile Full Detailing",
        element: <MobileFullDetailing />,
      },
      {
        path: MOBILE_DETAILING_PATH,
        name: "Mobile Detailing",
        element: <MobileDetailing />,
      },
      {
        path: CERAMIC_COATING_PATH,
        name: "Ceramic Coating",
        element: <CeramicCoating />,
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
        path: GALLERY_PATH,
        name: "Gallery",
        element: <Gallery />,
      },
      {
        path: THANK_YOU_PATH,
        name: "Thank You",
        element: <ThankYouPage />,
      },
      {
        path: "*",
        name: "404",
        element: <Root />,
      },
    ],
  },
];
