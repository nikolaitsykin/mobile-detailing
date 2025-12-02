import { Helmet } from "react-helmet-async";
import { BASE_URL, MORRISVILLE_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";

const Morrisville = () => {
  const city = "Morrisville";
  localStorage.setItem("location", city);

  return (
    <main className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL + MORRISVILLE_PATH} />
        <title>`Mobile Car Detailing ${city} NC | Car Detailing Experts`</title>
        <meta
          name="description"
          content="Professional mobile car detailing in Morrisville NC. Ceramic coating, paint correction, and interior detailing with spotless results."
        />
      </Helmet>
      <div className="z-100">
        <div>
          <Hero city={city} />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <ContactForm />
        </div>
        <div className="w-[90%] md:w-[80%] mx-auto bg-white">
          <About city={city} />
        </div>
      </div>
    </main>
  );
};

export default Morrisville;
