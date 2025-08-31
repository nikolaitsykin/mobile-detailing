import { BASE_URL, KNIGHTDALE_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";
import { MetaTags } from "../../MetaTags";

const Knightdale = () => {
  const city = "Knightdale";
  localStorage.setItem("location", city);

  const currentCity = localStorage.getItem("location");

  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + KNIGHTDALE_PATH);
  const ogUrl = document.querySelector('meta[property="og:url"]');
  ogUrl.setAttribute("content", BASE_URL + KNIGHTDALE_PATH);
  const metaTitle = document.querySelector('meta[property="title"]');
  const ogTitle = document.querySelector('meta[property="og:title"]');

  if (metaTitle && ogTitle) {
    const newTitle = `Mobile Car Detailing & Ceramic Coating ${city}`;
    metaTitle.setAttribute("content", newTitle);
    ogTitle.setAttribute("content", newTitle);
  }

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

export default Knightdale;
