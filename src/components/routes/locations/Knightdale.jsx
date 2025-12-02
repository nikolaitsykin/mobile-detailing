import { Helmet } from "react-helmet-async";
import { BASE_URL, KNIGHTDALE_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";

const Knightdale = () => {
  const city = "Knightdale";
  localStorage.setItem("location", city);

  return (
    <main className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL + KNIGHTDALE_PATH} />
        <title>`Mobile Car Detailing ${city} NC | Car Detailing Experts`</title>
        <meta
          name="description"
          content="Knightdale NC’s premium mobile car detailing. Interior cleaning, odor removal, ceramic coating, and exterior detailing at your convenience."
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

export default Knightdale;
