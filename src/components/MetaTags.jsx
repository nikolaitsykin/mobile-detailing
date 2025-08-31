import { Helmet } from "react-helmet";
import { OLD_PHONE_NUMBER } from "../utils/constants";

export const MetaTags = ({ city }) => (
  <Helmet>
    <title>
      Mobile Car Detailing & Ceramic Coating {city} | Spotless Auto Detailing
    </title>

    <meta
      property="twitter:title"
      content={`Mobile Car Detailing & Ceramic Coating ${city}`}
    />
    <meta
      property="title"
      content={`Mobile Car Detailing & Ceramic Coating ${city}`}
    />
    <meta
      property="og:title"
      content={`Mobile Car Detailing & Ceramic Coating ${city}`}
    />
    <meta
      name="apple-mobile-web-app-title"
      content={`Mobile Car Detailing & Ceramic Coating ${city}`}
    />
    <meta
      property="og:description"
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. 100+ 5-star reviews.Call Us ${OLD_PHONE_NUMBER}. Car Detailing, Ceramic Coating, Paint Correction.`}
    />
    <meta property="og:url" content={`${city}`} />
    <meta
      property="twitter:description"
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. 100+ 5-star reviews.Call Us ${OLD_PHONE_NUMBER}. Car Detailing, Ceramic Coating, Paint Correction.`}
    />

    <meta
      name="description"
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. 100+ 5-star reviews.Call Us ${OLD_PHONE_NUMBER}. Car Detailing, Ceramic Coating, Paint Correction.`}
    />
    <meta
      data-rh="true"
      name="application-name"
      content={`Spotless Auto Detailing in ${city}`}
    ></meta>
    <meta
      data-rh="true"
      property="og:site_name"
      content={`Spotless Auto Detailing in ${city}`}
    ></meta>
  </Helmet>
);
