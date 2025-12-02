import { Helmet } from "react-helmet";
import { BASE_URL, CARY_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";

const Cary = () => {
  const city = "Cary";
  localStorage.setItem("location", city);

  return (
    <main className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL + CARY_PATH} />
        <title>Mobile Car Detailing Cary NC | Car Detailing Experts</title>
        <meta
          name="description"
          content="Get professional mobile car detailing in Cary NC. Interior deep cleaning, paint correction, and ceramic coating for lasting shine."
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

export default Cary;
