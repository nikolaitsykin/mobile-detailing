import { BASE_URL, MORRISVILLE_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";
import { MetaTags } from "../../MetaTags";

const Morrisville = () => {
  const city = "Morrisville";
  localStorage.setItem("location", city);

  const currentCity = localStorage.getItem("location");

  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + MORRISVILLE_PATH);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  ogUrl.setAttribute("content", BASE_URL + MORRISVILLE_PATH);

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

export default Morrisville;
