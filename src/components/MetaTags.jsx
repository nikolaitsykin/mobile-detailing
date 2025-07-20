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
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. 100+ 5-star reviews.Call Us (919) 906-0099. Car Detailing, Ceramic Coating, Paint Correction.`}
    />
    <meta
      property="twitter:description"
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. 100+ 5-star reviews.Call Us (919) 906-0099. Car Detailing, Ceramic Coating, Paint Correction.`}
    />

    <meta
      name="description"
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. 100+ 5-star reviews.Call Us (919) 906-0099. Car Detailing, Ceramic Coating, Paint Correction.`}
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
