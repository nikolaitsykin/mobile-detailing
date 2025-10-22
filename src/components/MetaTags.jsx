import { Helmet } from "react-helmet-async";

export const MetaTags = ({ city }) => (
  <Helmet>
    <title>Best Mobile Car Detailing {city} NC | Spotless Auto Detailing</title>
    {/* <meta
      property="twitter:title"
      content={`Best Mobile Car Detailing ${city} NC | Spotless Auto Detailing`}
    />
    <meta
      property="title"
      content={`Best Mobile Car Detailing ${city} NC | Spotless Auto Detailing`}
    />
    <meta
      property="og:title"
      content={`Best Mobile Car Detailing ${city} NC | Spotless Auto Detailing`}
    /> */}
    <meta
      name="apple-mobile-web-app-title"
      content={`Mobile Car Detailing & Ceramic Coating ${city}`}
    />
    <meta
      property="og:description"
      content={`${city} ’s trusted mobile car detailing experts. Interior, exterior, ceramic coating & paint correction with 190+ 5-star reviews. Book today.`}
    />
    <meta property="og:url" content={`${city}`} />
    <meta
      property="twitter:description"
      content={`${city} ’s trusted mobile car detailing experts. Interior, exterior, ceramic coating & paint correction with 190+ 5-star reviews. Book today.`}
    />
    <meta
      name="description"
      content={`${city} ’s trusted mobile car detailing experts. Interior, exterior, ceramic coating & paint correction with 190+ 5-star reviews. Book today.`}
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
