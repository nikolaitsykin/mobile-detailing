import fullDetailInteriorWashImage from "../assets/images/AdobeStock_243325383.avif";
import fullDetailExteriorWashImage from "../assets/images/pexels-tima-miroshnichenko-6872146.avif";
import { BOOKING_PATH } from "./constants";
import interiorDetailingServiceImage from "../assets/images/AdobeStock_539555302.avif";
import primeExteriorWashImage from "../assets/images/AdobeStock_273206890.avif";
import exteriorDetailingServiceImage from "../assets/images/AdobeStock_397247724.avif";
import regularInteriorWashImage from "../assets/images/AdobeStock_399584907.avif";
import primeInteriorWashImage from "../assets/images/AdobeStock_539555302.avif";
import ultimateExteriorWashImage from "../assets/images/AdobeStock_799868847.avif";
import essentialExteriorWashImage from "../assets/images/car-front-foglight.avif";
import regularExteriorWashImage from "../assets/images/car-wash-detailing-station_1.avif";
import essentialInteriorWashImage from "../assets/images/man-polish-salon-car-garage_1157-36595.avif";
import ultimateInteriorWashImage from "../assets/images/pexels-khunkorn-laowisit-1359149-5233285.avif";
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

const carTypes = [
  "Sedans, compact cars, and coupes (e.g., Subaru Impreza, Kia Soul, Ford Mustang)",
  "SUVs, crossovers, and small trucks (e.g., Kia Sorento, Hyundai Tucson, Toyota Tacoma)",
  "Full-size SUVs, large trucks, and vans (e.g., Chevy Suburban, Ford F-150, Honda Odyssey)",
];

export const quickDetail = {
  title: "Base Detailing",
  type: "Package",
  // image: fullDetailExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Door Jambs Cleaned",
    "✔ Gas Cap and Valve Cleaned",
    "✔ Tires & Wheels Cleaned",
    "✔ Tire Shine Applied",
    "✔ Windows Cleaned",
    "✔ Interior & Floor Mats Vacuumed",
    "✔ Leather Seats Wiped",
    "✔ Door Panels & Jambs Cleaned",
    "✔ Surfaces & Plastics Cleaned",
    "✔ Vents, Cracks & Crevices Cleaned",
    "✔ Cup Holders Cleaned",
    "✔ Glasses & Mirrors Cleaned",
  ],
  price: ["$125", "$150", "$175"],
  carsSize: carTypes,
  link: BOOKING_PATH,
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve, and clean the door jambs. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish. We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look. Both Base Wash & Base Clean services included in full detailing package with up to $40 savings.",
  duration:
    "Duration: Up to 2.5 hours depending on vehicle size and condition.",
  background: " ",
};

export const deepCleaning = {
  title: "Deep Cleaning",
  type: "Package",
  // image: fullDetailExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Tires & Wheels Cleaned",
    "✔ Tire Shine Applied",
    "✔ Windows Cleaned and Protected",
    "✔ Clay Bar Decontamination",
    "✔ Protective Wax Applied",
    "✔ Polished by Hand",
    "✔ Interior & Trunk Vacuumed",
    "✔ Floor Mats Shampooed",
    "✔ Seats Cleaned & Steamed",
    "✔ Door Panels & Jambs Cleaned",
    "✔ Surfaces & Plastics Cleaned",
    "✔ Cracks & Crevices Cleaned",
    "✔ Cup Holders Cleaned",
    "✔ Touch Points Steamed (e.g., handles, steering wheel, shift knob, etc.)",
    "✔ Glasses & Mirrors Cleaned",
  ],
  price: ["$200", "$225", "$250"],
  carsSize: carTypes,
  link: BOOKING_PATH,
  description:
    "After a complete hand wash and dry of the paintwork, including the gas cap and valve, we clean the door jambs and ensure the tires and wheels are spotless. We follow with a clay bar treatment to decontaminate the paint and apply a premium spray wax for lasting protection. Finally, the windows are treated with a water repellent for clarity. We vacuum the interior and trunk, shampoo the mats, and clean the door panels and jambs. Using steam, we sanitize the fabric or leather seats and touch points to eliminate germs and bacteria. The surfaces, plastics, and cup holders get a deep clean, and we finish with spotless glass and mirrors. Both Wash & Wax and Wipe & Clean services included in full detailing package with up to $70 savings.",
  duration: "Duration: Up to 4 hours depending on vehicle size and condition.",
  background: "gray",
  bestValue: "Most Popular",
};

export const spotlessFinish = {
  title: "Spotless Finish",
  type: "Package",
  // image: ultimateExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Windows Cleaned and Protected",
    "✔ Door & Trunk Jambs Cleaned",
    "✔ Tires, Wheels & Wells Cleaned & Shine Applied",
    "✔ Clay Bar & Chemical Decontamination",
    "✔ Premium Gloss Enhancer Applied",
    "✔ Door Jambs, Wheels Protection Applied",
    "✔ Bodywork Ultra Ceramic Protection Applied",
    "✔ Interior, Mats & Trunk Vacuumed & Steamed",
    "✔ Pet hair/Sand removed",
    "✔ Door Panels and Interior Cleaned & Steamed",
    "✔ Fabric/Leather Seats Steamed",
    "✔ Vents, Cracks & Crevices Cleaned & Steamed",
    "✔ Glasses & Mirrors Cleaned",
    "✔ Fabric/Leather Conditioning Applied",
    "✔ Interior UV & Dust Protection Applied",
  ],
  price: ["$300", "$330", "$360"],
  carsSize: carTypes,
  link: BOOKING_PATH,
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by spotless tires and wheels. After protecting the windows, we perform a clay bar treatment and iron decontamination. We finish with a durable ceramic coating for long-lasting gloss and protection. We vacuum and steam the interior, carpets, and trunk to remove pet hair and sand. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service. Both Shine & Shield and Steam & Guard services included in full detailing package with up to $80 savings.",
  duration: "Duration: Up to 6 hours depending on vehicle size and condition.",
  background: "bg-gray",
  bestValue: "Best Value",
};

export const quickWash = {
  title: "Base Wash",
  type: "Exterior Service",
  // image: essentialExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Door Jambs Cleaned",
    "✔ Gas Cap and Valve Cleaned",
    "✔ Tires & Wheels Cleaned",
    "✔ Tire Shine Applied",
    "✔ Windows Cleaned",
  ],
  price: ["$60", "$80", "$100"],
  carsSize: carTypes,
  link: BOOKING_PATH,
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve, and clean the door jambs. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish.",
  duration: "Duration: Up to 1 hour depending on vehicle size and condition.",
  background: " ",
};

export const washAndWax = {
  title: "Wash & Wax",
  type: "Exterior Service",
  // image: essentialExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Gas Cap and Valve Cleaned",
    "✔ Door Jambs Cleaned",
    "✔ Tires & Wheels Cleaned",
    "✔ Tire Shine Applied",
    "✔ Clay Bar Decontamination",
    "✔ Protective Wax Applied",
    "✔ Polished by Hand",
    "✔ Windows Cleaned and Protected",
  ],
  price: ["$100", "$120", "$140"],
  carsSize: carTypes,
  link: BOOKING_PATH,
  description:
    "After a complete hand wash and dry of the paintwork, including the gas cap and valve, we clean the door jambs and ensure the tires and wheels are spotless. We follow with a clay bar treatment to decontaminate the paint and apply a premium spray wax for lasting protection. Finally, the windows are treated with a water repellent for clarity.",
  duration: "Duration: Up to 2 hours depending on vehicle size and condition.",
  background: " ",
  bestValue: "Most Popular",
};

export const shineAndShield = {
  title: "Shine & Shield",
  type: "Exterior Service",
  // image: primeExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Door & Trunk Jambs Cleaned",
    "✔ Gas Cap and Valve Cleaned",
    "✔ Wheels & Wells Cleaned",
    "✔ Tires Cleaned & Shine Applied",
    "✔ Windows Cleaned and Protected",
    "✔ Clay Bar Decontamination",
    "✔ Chemical Decontamination",
    "✔ Premium Gloss Enhancer Applied",
    "✔ Door Jambs Ceramic Protection Applied",
    "✔ Wheels Ceramic Protection Applied",
    "✔ Ultra Ceramic Coating Applied",
  ],
  price: ["$150", "$170", "$200"],
  carsSize: carTypes,
  link: BOOKING_PATH,
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by spotless tires and wheels. After protecting the windows, we perform a clay bar treatment and iron decontamination. We finish with a durable ceramic coating for long-lasting gloss and protection.",
  duration: "Duration: Up to 3 hours depending on vehicle size and condition.",
  background: " ",
};

export const quickClean = {
  title: "Base Clean",
  type: "Interior Service",
  // image: essentialInteriorWashImage,
  services: [
    "✔ Interior & Floor Mats Vacuumed",
    "✔ Leather Seats Wiped",
    "✔ Door Panels & Jambs Cleaned",
    "✔ Surfaces & Plastics Cleaned",
    "✔ Vents, Cracks & Crevices Cleaned",
    "✔ Cup Holders Cleaned",
    "✔ Glasses & Mirrors Cleaned",
  ],
  link: BOOKING_PATH,

  description:
    "We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.\n\n",
  price: ["$80", "$100", "$120"],
  carsSize: carTypes,
  duration:
    "Duration: Up to 1.5 hours depending on vehicle size and condition.",
};

export const wipeAndClean = {
  title: "Wipe & Clean",
  type: "Interior Service",
  // image: essentialInteriorWashImage,
  services: [
    "✔ Interior & Trunk Vacuumed",
    "✔ Floor Mats Shaampooed",
    "✔ Door Panels & Jambs Cleaned",
    "✔ Seats Cleaned & Steamed",
    "✔ Surfaces & Plastics Cleaned",
    "✔ Vents, Cracks & Crevices Cleaned",
    "✔ Cup Holders Cleaned",
    "✔ Touch Points Steamed (e.g., handles, steering wheel, shift knob, etc.)",
    "✔ Glasses & Mirrors Cleaned",
  ],
  link: BOOKING_PATH,

  description:
    "We vacuum the interior and trunk, shampoo the mats, and clean the door panels and jambs. Using steam, we sanitize the fabric or leather seats and touch points to eliminate germs and bacteria. The surfaces, plastics, and cup holders get a deep clean, and we finish with spotless glass and mirrors.\n\n",
  price: ["$140", "$160", "$180"],
  carsSize: carTypes,
  duration: "Duration: Up to 3 hours depending on vehicle size and condition.",
  background: " ",
  bestValue: "Most Popular",
};

export const steamAndGuard = {
  title: "Steam & Guard",
  type: "Interior Service",
  // image: primeInteriorWashImage,
  services: [
    "✔ Interior & Trunk Vacuumed",
    "✔ Carpet & Floor Mats Cleaned & Steamed",
    "✔ Trunk Space Cleaned & Steamed",
    "✔ Pet hair/Sand removed",
    "✔ Door Panels, Jambs Cleaned & Steamed",
    "✔ Surfaces and Plastics Cleaned & Steamed",
    "✔ Fabric/Leather Seats Steamed",
    "✔ Minor Stains Removed",
    "✔ Vents, Cracks & Crevices Cleaned & Steamed",
    "✔ Cup Holders Cleaned & Steamed",
    "✔ Glasses & Mirrors Cleaned",
    "✔ Fabric/Leather Conditioning Applied",
    "✔ Interior UV & Dust Protection Applied",
  ],
  link: BOOKING_PATH,
  description:
    "We vacuum and steam the interior, carpets, and trunk to remove pet hair and sand. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service.",
  price: ["$200", "$220", "$240"],
  carsSize: carTypes,
  duration: "Duration: Up to 4 hours depending on vehicle size and condition.",
  background: " ",
};

export const exteriorDetailingServices = [
  quickWash,
  washAndWax,
  shineAndShield,
];
export const interiorDetailingServices = [
  quickClean,
  wipeAndClean,
  steamAndGuard,
];
export const fullDetailingServices = [
  quickDetail,
  deepCleaning,
  spotlessFinish,
];

export const exteriorDetailingService = {
  title: "Mobile Exterior Detailing",
  description:
    "Our exterior wash includes a thorough hand wash, decontamination, and precision drying for a spotless, protected finish.",
  image: exteriorDetailingServiceImage,
  link: MOBILE_EXTERIOR_DETAILING_PATH,
  options: exteriorDetailingServices,
};
export const interiorDetailingService = {
  title: "Mobile Interior Detailing",
  description:
    "Our interior detailing offers deep cleaning, vacuuming, and upholstery care, ensuring a fresh, and comfortable interior.",
  image: interiorDetailingServiceImage,
  link: MOBILE_INTERIOR_DETAILING_PATH,
  options: interiorDetailingServices,
};
export const fullDetailingService = {
  title: "Mobile In & Out Detailing",
  description:
    "Our full detailing packages include a thorough hand wash, decontamination, deep cleaning, vacuuming, and upholstery care, leaving your exterior and interior both shining, and comfortable.",
  image: primeExteriorWashImage,
  link: MOBILE_FULL_DETAILING_PATH,
  options: fullDetailingServices,
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
