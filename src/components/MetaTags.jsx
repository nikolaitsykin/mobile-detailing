import React from "react";
import { Helmet } from "react-helmet";

export const MetaTags = ({ city }) => (
  <Helmet>
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
      content={`Spotless Auto Detailing provides premium mobile car detailing and ceramic coating services in ${city}. Eco-friendly, high-quality, and convenient. Book now.`}
    />
    <meta
      property="twitter:description"
      content={`Spotless Auto Detailing provides premium mobile detailing and ceramic coating services in ${city}. Eco-friendly, high-quality, and convenient.`}
    />

    <meta
      name="description"
      content={`Spotless Auto Detailing provides premium mobile detailing and ceramic coating services in ${city}. Eco-friendly, high-quality, and convenient. Book now.`}
    />
  </Helmet>
);
