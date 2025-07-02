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
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. ⭐100+ 5-star reviews⭐ Free Estimate - Call Us (919) 906-0099. Interior, Exterior, Ceramic Coating.`}
    />
    <meta
      property="twitter:description"
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. ⭐100+ 5-star reviews⭐ Free Estimate - Call Us (919) 906-0099. Interior, Exterior, Ceramic Coating.`}
    />

    <meta
      name="description"
      content={`Spotless Auto Detailing services in ${city} and surrounding areas. ⭐100+ 5-star reviews⭐ Free Estimate - Call Us (919) 906-0099. Interior, Exterior, Ceramic Coating.`}
    />
  </Helmet>
);
