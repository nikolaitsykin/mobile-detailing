import { Helmet } from "react-helmet-async";
import { APEX_PATH, BASE_URL } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";

const Apex = () => {
  const city = "Apex";
  localStorage.setItem("location", city);

  return (
    <main className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL + APEX_PATH} />
        <title>Mobile Car Detailing Apex NC | Car Detailing Experts</title>
        <meta
          name="description"
          content="Trusted mobile car detailing in Apex NC. Interior and exterior cleaning, ceramic coating, and odor removal delivered to your driveway."
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

export default Apex;
