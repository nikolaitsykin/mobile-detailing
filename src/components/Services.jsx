import { detailingServices } from "../utils/detailingPackages";
import ServiceItem from "./ServiceItem";

const Services = ({city}) => {
  return (
    <div id="services">
      <h2 className="text-center">We Offer Premium Services</h2>
      <div className="w-full m-auto flex flex-col md:flex-row gap-2">
        {detailingServices &&
          detailingServices.map((service) => (
            <ServiceItem key={service.title} props={service} city={city}/>
          ))}
      </div>
    </div>
  );
};

export default Services;
