import { Helmet } from "react-helmet";
import { BASE_URL } from "../../utils/constants";
import Hero from "../Hero";

const Root = () => {
  localStorage.setItem("location", "Raleigh");
  const currentCity = localStorage.getItem("location");

  return (
    <div className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL} />
        <title>
          Best Mobile Car Detailing {currentCity} NC | Spotless Auto
        </title>
        <meta
          name="description"
          content={`${currentCity}’s trusted mobile car detailing experts. Interior, exterior, ceramic coating & paint correction with 200+ 5-star reviews. Book today.`}
        />
      </Helmet>
      <div className="z-100">
        <Hero city={currentCity} />
      </div>
    </div>
  );
};

export default Root;
