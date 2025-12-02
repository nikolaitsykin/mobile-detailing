import { Helmet } from "react-helmet-async";
import { BASE_URL, HOLLY_SPRINGS_PATH } from "../../../utils/constants";
import About from "../../About";
import ContactForm from "../../ContactForm";
import Hero from "../../Hero";

const HollySprings = () => {
  const city = "Holly\u00A0Springs";
  localStorage.setItem("location", city);

  return (
    <main className="w-full bg-white">
      <Helmet>
        <link rel="canonical" href={BASE_URL + HOLLY_SPRINGS_PATH} />
        <title>`Mobile Car Detailing ${city} NC | Car Detailing Experts`</title>
        <meta
          name="description"
          content="Holly Springs NC mobile car detailing at its best. Interior detailing, exterior shine, ceramic coating, and odor removal done on-site."
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

export default HollySprings;
