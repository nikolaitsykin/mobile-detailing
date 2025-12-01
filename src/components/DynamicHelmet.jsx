import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const BASE_URL = 'https://getspotlessnc.com';

export default function DynamicHelmet({ currentCity }) {
  const location = useLocation();
  const [canonical, setCanonical] = useState(`${BASE_URL}${location.pathname}`);

  useEffect(() => {
    // Update canonical link whenever the page changes
    setCanonical(`${BASE_URL}${location.pathname}`);
  }, [location.pathname]);

  return (
    <Helmet key={location.key}>
      <link rel="canonical" href={canonical} />
      <title>
        {`Best Mobile Car Detailing ${currentCity} NC | Spotless Auto`}
      </title>
      <meta
        name="description"
        content="Raleigh’s trusted mobile car detailing experts. Interior, exterior, ceramic coating & paint correction with 200+ 5-star reviews. Book today."
      />
    </Helmet>
  );
}
