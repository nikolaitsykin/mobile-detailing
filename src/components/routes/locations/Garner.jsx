import { Helmet } from "react-helmet-async";
import { BASE_URL, GARNER_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";

const Garner = () => {
  const city = "Garner";
  localStorage.setItem("location", city);

  const currentCity = localStorage.getItem("location");

  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + GARNER_PATH);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  ogUrl.setAttribute("content", BASE_URL + GARNER_PATH);
  

  return (
    <main className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL + GARNER_PATH} />
        <title>`Mobile Car Detailing ${city} NC | Car Detailing Experts`</title>
        <meta
          name="description"
          content="Experience premium mobile car detailing in Garner NC. Interior and exterior detailing, odor removal, and ceramic coating you can trust."
        />
      </Helmet>
      <div className="z-100">
        <div>
          <Hero city={currentCity} />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <ContactForm />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <About city={currentCity} />
        </div>
      </div>
    </main>
  );
};

export default Garner;
