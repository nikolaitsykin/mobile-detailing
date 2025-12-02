import { Helmet } from "react-helmet-async";
import { BASE_URL, FUQUAY_VARINA_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";

const FuquayVarina = () => {
  const city = "Fuquay Varina";
  localStorage.setItem("location", city);  

  return (
    <main className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL + FUQUAY_VARINA_PATH} />
        <title>`Mobile Car Detailing ${city} NC | Car Detailing Experts`</title>
        <meta
          name="description"
          content="Fuquay Varina NC mobile car detailing services. Interior deep cleaning, exterior detailing, and ceramic coating brought to you."
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

export default FuquayVarina;
