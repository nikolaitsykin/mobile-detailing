import interiorDetailingServiceImage from "../assets/images/AdobeStock_539555302.jpeg";
import primeExteriorWashImage from "../assets/images/AdobeStock_273206890.jpeg";
import exteriorDetailingServiceImage from "../assets/images/AdobeStock_397247724.jpeg";
import regularInteriorWashImage from "../assets/images/AdobeStock_399584907.jpeg";
import primeInteriorWashImage from "../assets/images/AdobeStock_539555302.jpeg";
import ultimateExteriorWashImage from "../assets/images/AdobeStock_799868847.jpeg";
import essentialExteriorWashImage from "../assets/images/car-front-foglight.jpg";
import regularExteriorWashImage from "../assets/images/car-wash-detailing-station_1.jpg";
import essentialInteriorWashImage from "../assets/images/man-polish-salon-car-garage_1157-36595.jpg";
import ultimateInteriorWashImage from "../assets/images/pexels-khunkorn-laowisit-1359149-5233285.jpg";
import {
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
} from "./constants";

export const carsSizes = [
  {
    title: "Standard",
    description:
      "Sedans, compact cars, and coupes (e.g., Subaru Impreza, Kia Soul, Ford Mustang)",
  },
  {
    title: "Mid-Size",
    description:
      "SUVs, crossovers, and small trucks (e.g., Jeep Grand Cherokee, Hyundai Tucson, Toyota Tacoma)",
  },
  {
    title: "Large/XL",
    description:
      "Full-size SUVs, large trucks, and vans (e.g., Chevy Suburban, Ford F-150, Honda Odyssey)",
  },
];

export const exteriorDetailingService = {
  title: "Mobile Exterior Detailing",
  description:
    "Our exterior wash includes a thorough hand wash, decontamination, and precision drying for a spotless, protected finish.",
  image: exteriorDetailingServiceImage,
  link: MOBILE_EXTERIOR_DETAILING_PATH,
};
export const interiorDetailingService = {
  title: "Mobile Interior Detailing",
  description:
    "Our interior detailing offers deep cleaning, vacuuming, and upholstery care, ensuring a fresh, and comfortable interior.",
  image: interiorDetailingServiceImage,
  link: MOBILE_INTERIOR_DETAILING_PATH,
};
export const fullDetailingService = {
  title: "Mobile In & Out Detailing",
  description:
    "Our full detailing packages include a thorough hand wash, decontamination, deep cleaning, vacuuming, and upholstery care, leaving your exterior and interior both shining, and comfortable.",
  image: primeExteriorWashImage,
  link: MOBILE_FULL_DETAILING_PATH,
};

export const biWeekly = {
  title: "Bi-Weekly",
  service: [
    "For those who demand their vehicle always looksimmaculate, with a full detail every two weeks with the best price.",
  ],
  package: [
    "Regular wash",
    "Essential Detail",
    "Prime Detail",
    "Ultimate Detail",
  ],
  prices: ["x", "from $150", "from $225", "from $300"],
  discount: ["from $90", "from $120", "from $180", "from $240"],
};

export const monthly = {
  title: "Monthly",
  service: [
    "Perfect for those who want a consistently clean ride, with a monthly full detail at a discounted rate.",
  ],
  package: ["Regular wash", "Essential Detail", "Prime Detail", "U Detail"],
  prices: ["x", "from $150", "from $225", "from $300"],
  discount: ["from $90", "from $135", "from $200", "from $270"],
};
export const membershipBenefits = [
  "Regular Detailing: Enjoy scheduled detailing services tailored to your needs, ensuring your vehicle stays in prime condition.",
  "Exclusive Discounts: Members receive up to 20% off all detailing services and 10% off for family members, including premium upgrades and special treatments.",
  "Priority Scheduling: Get priority booking to fit detailing into your busy schedule, so your car always shines when you need it to.",
  "Monthly Service: Get your vehicle serviced every month, with a monthly detail at a discounted rate.",
  // "Bonus Perks: Receive complimentary add-ons like tire shine, interior fragrance, or seasonal protection services",
];
