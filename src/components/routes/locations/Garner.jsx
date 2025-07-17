import { useEffect } from "react";
import { BASE_URL, GARNER_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";
import { MetaTags } from "../../MetaTags";

const Garner = () => {
  useEffect(() => {
    const path = window.location.pathname.split("/").filter(Boolean);
    const city = path[0].charAt(0).toUpperCase() + path[0].slice(1);
    localStorage.setItem("location", city);
  }, []);

  const currentCity = localStorage.getItem("location");

  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + GARNER_PATH);

  return (
    <main className="w-full bg-white">
      <MetaTags city={currentCity} />
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
