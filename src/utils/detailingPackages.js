import fullDetailInteriorWashImage from "../assets/images/AdobeStock_243325383.avif";
import fullDetailExteriorWashImage from "../assets/images/pexels-tima-miroshnichenko-6872146.avif";
import {
  BASE_CLEAN_PATH,
  BASE_DETAILING_PATH,
  BASE_WASH_PATH,
  DEEP_CLEANING_PATH,
  SHINE_AND_SHIELD_PATH,
  SPOTLESS_FINISH_PATH,
  STEAM_AND_GUARD_PATH,
  WASH_AND_WAX_PATH,
  WIPE_AND_CLEAN_PATH,
} from "./constants";
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

export const baseDetail = {
  title: "Base Detailing",
  type: "Package",
  image: regularInteriorWashImage,
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
  steps: [
    "✔ Full Hand Wash & Dry – Ultimate care for your exterior",
    "✔ Door Jamb Cleaning – Clean, detailed edges",
    "✔ Gas Cap & Valve – No residue, all clean",
    "✔ Wheels & Tires Restored – Cleaned and given a polished shine",
    "✔ Windows & Mirrors Cleaned – Clear and protected",
    "✔ Interior & Floor Mats Vacuumed – Fresh and clean",
    "✔ Leather Seats Wiped – Treated with care",
    "✔ Door Panels & Jambs – Thorough, clean finish",
    "✔ Surfaces & Plastics – Fresh and like new",
    "✔ Vents & Crevices – Dust-free and tidy",
    "✔ Cup Holders Cleaned – Pristine and ready to go",
  ],
  price: ["$125", "$150", "$170"],
  carsSize: carTypes,
  link: BASE_DETAILING_PATH,
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve, and clean the door jambs. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish. We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look. Both Base Wash & Base Clean services included in full detailing package with up to $40 savings.",
  duration: ["2 hours", "2 hours 30 mins", "3 hours"],
  background: " ",
};

export const deepCleaning = {
  title: "Deep Cleaning",
  type: "Package",
  image: fullDetailInteriorWashImage,
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
  steps: [
    "✔ Vehicle Hand Washed & Dried – Highest care for paint and finish",
    "✔ Tires & Wheels – Cleaned and protected with shine",
    "✔ Windows – Streak-free clarity and lasting protection",
    "✔ Clay Bar Decontamination – Smooth, flawless finish",
    "✔ Protective Wax & Hand Polish – Added gloss and protection",
    "✔ Interior & Trunk Vacuumed – Fresh and ready",
    "✔ Floor Mats Shampooed – Stain-free and looking new",
    "✔ Seats Cleaned & Steamed – Refreshed for a like-new feel",
    "✔ Door Panels & Jambs – Cleaned to perfection",
    "✔ Plastics & Surfaces Refreshed – Dust-free and polished",
    "✔ Cup Holders – Spotless and ready for use",
    "✔ Touch Points Steamed – Enhanced care for handles and knobs",
    "✔ Windows & Mirrors – Clear and streak-free",
  ],
  price: ["$200", "$225", "$250"],
  carsSize: carTypes,
  link: DEEP_CLEANING_PATH,
  description:
    "After a complete hand wash and dry of the paintwork, including the gas cap and valve, we clean the door jambs and ensure the tires and wheels are spotless. We follow with a clay bar treatment to decontaminate the paint and apply a premium spray wax for lasting protection. Finally, the windows are treated with a water repellent for clarity. We vacuum the interior and trunk, shampoo the mats, and clean the door panels and jambs. Using steam, we sanitize the fabric or leather seats and touch points to eliminate germs and bacteria. The surfaces, plastics, and cup holders get a deep clean, and we finish with spotless glass and mirrors. Both Wash & Wax and Wipe & Clean services included in full detailing package with up to $70 savings.",
  duration: ["3 hours 30 mins", "4 hours", "4 hours 30 mins"],
  background: "gray",
  bestValue: "Most Popular",
};

export const spotlessFinish = {
  title: "Spotless Finish",
  type: "Package",
  image: ultimateExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Windows Cleaned and Protected",
    "✔ Door & Trunk Jambs Cleaned",
    "✔ Tires, Wheels & Wells Cleaned & Shine Applied",
    "✔ Clay Bar & Chemical Decontamination",
    "✔ Premium Gloss Enhancer Applied",
    "✔ Door Jambs, Wheels Protection Applied",
    "✔ Bodywork 6-months Ceramic Protection Applied",
    "✔ Interior, Mats & Trunk Vacuumed & Steamed",
    "✔ Pet hair/Sand removed",
    "✔ Door Panels and Interior Cleaned & Steamed",
    "✔ Fabric/Leather Seats Steamed",
    "✔ Vents, Cracks & Crevices Cleaned & Steamed",
    "✔ Glasses & Mirrors Cleaned",
    "✔ Fabric/Leather Conditioning Applied",
    "✔ Interior UV & Dust Protection Applied",
  ],
  steps: [
    "✔ Full Hand Wash & Dry – No spots, only spotless",
    "✔ Windows – Crystal clear and protected",
    "✔ Door & Trunk Jambs – Cleaned to perfection",
    "✔ Tires, Wheels & Wells – Restored and shining",
    "✔ Clay Bar & Chemical Decontamination – A flawless, contaminant-free surface",
    "✔ Premium Gloss Enhancer – Unbeatable shine",
    "✔ Ceramic Protection for Door Jambs & Wheels – Long-lasting defense",
    "✔ 6-Month Ceramic Coating – Durable paint protection",
    "✔ Interior, Mats & Trunk Vacuumed & Steamed – Fully refreshed",
    "✔ Pet Hair & Sand Removed – Spotless, every time",
    "✔ Seats & Surfaces – Steamed, cleaned, and refreshed",
    "✔ Vents & Cracks – Every detail attended to",
    "✔ Windows & Mirrors – Clean and streak-free",
    "✔ Leather/Fabric Conditioning – Soft, protected seats",
    "✔ Interior UV & Dust Protection – Long-lasting cleanliness",
  ],
  price: ["$300", "$330", "$360"],
  carsSize: carTypes,
  link: SPOTLESS_FINISH_PATH,
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by spotless tires and wheels. After protecting the windows, we perform a clay bar treatment and iron decontamination. We finish with a durable ceramic coating for long-lasting gloss and protection. We vacuum and steam the interior, carpets, and trunk to remove pet hair and sand. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service. Both Shine & Shield and Steam & Guard services included in full detailing package with up to $80 savings.",
  duration: ["5 hours 30 mins", "6 hours", "6 hours 30 mins"],
  background: "bg-gray",
  bestValue: "Best Value",
};

export const baseWash = {
  title: "Base Wash",
  type: "Exterior Service",
  image: regularExteriorWashImage,
  services: [
    "✔ Vehicle Hand Washed & Dried",
    "✔ Door Jambs Cleaned",
    "✔ Gas Cap and Valve Cleaned",
    "✔ Tires & Wheels Cleaned",
    "✔ Tire Shine Applied",
    "✔ Windows Cleaned",
  ],
  steps: [
    "✔ Precision Hand Wash & Dry – Gentle care for your vehicle’s exterior",
    "✔ Detailed Door Jamb Cleaning – Keeping every corner spotless",
    "✔ Gas Cap & Valve Cleaning – Often overlooked, thoroughly cleaned",
    "✔ Tires & Wheels Restored – Rims and rubber brought back to life",
    "✔ Tire Shine Applied – For that just-detailed, glossy look",
    "✔ Crystal Clear Windows – Streak-free, inside and out",
  ],
  price: ["$60", "$80", "$100"],
  carsSize: carTypes,
  link: BASE_WASH_PATH,
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve, and clean the door jambs. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish.",
  duration: ["45 mins", "1 hour", "1 hour 15 mins"],
  background: " ",
};

export const washAndWax = {
  title: "Wash & Wax",
  type: "Exterior Service",
  image: essentialExteriorWashImage,
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
  steps: [
    "✔ Complete Hand Wash & Dry – No spots, no scratches",
    "✔ Gas Cap & Valve Cleaning – A deeper level of clean",
    "✔ Door Jambs – Tidy, residue-free edges",
    "✔ Thorough Tires & Wheels Cleaning – Ready for the road",
    "✔ Tire Shine Applied – Finishing with a clean, dark shine",
    "✔ Clay Bar Decontamination – Smooth, flawless finish",
    "✔ Protective Wax – Adding a rich, lasting layer",
    "✔ Hand Polishing – Enhanced gloss and color depth",
    "✔ Windows Cleaned & Protected – Clear, safe, and streak-free",
  ],
  price: ["$100", "$120", "$140"],
  carsSize: carTypes,
  link: WASH_AND_WAX_PATH,
  description:
    "After a complete hand wash and dry of the paintwork, including the gas cap and valve, we clean the door jambs and ensure the tires and wheels are spotless. We follow with a clay bar treatment to decontaminate the paint and apply a premium spray wax for lasting protection. Finally, the windows are treated with a water repellent for clarity.",
  duration: ["1 hour 30 mins", "1 hour 45 mins", "2 hours"],
  background: " ",
  bestValue: "Most Popular",
};

export const shineAndShield = {
  title: "Shine & Shield",
  type: "Exterior Service",
  image: primeExteriorWashImage,
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
    "✔ 6-months Ceramic Coating Applied",
  ],
  steps: [
    "✔ Gentle Hand Wash & Dry – Ultimate care for your paintwork",
    "✔ Door & Trunk Jamb Cleaning – Clean and gleaming all around",
    "✔ Gas Cap & Valve Cleaned – Removing residue for a clean look",
    "✔ Wheels, Wells, & Tires – Cleaned, protected, and shined",
    "✔ Windows – Streak-free clarity and added protection",
    "✔ Clay Bar & Chemical Decontamination – Smooth, contaminant-free paint",
    "✔ Premium Gloss Enhancer – Deep shine that lasts",
    "✔ Ceramic Protection for Door Jambs & Wheels – Long-lasting shield",
    "✔ 6-Month Ceramic Coating – Superior protection for your paint",
  ],
  price: ["$160", "$180", "$200"],
  carsSize: carTypes,
  link: SHINE_AND_SHIELD_PATH,
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by spotless tires and wheels. After protecting the windows, we perform a clay bar treatment and iron decontamination. We finish with a durable ceramic coating for long-lasting gloss and protection.",
  duration: ["2 hours 30 mins", "2 hours 45 mins", "3 hours"],
  background: " ",
};

export const baseClean = {
  title: "Base Clean",
  type: "Interior Service",
  image: regularInteriorWashImage,
  services: [
    "✔ Interior & Floor Mats Vacuumed",
    "✔ Leather Seats Wiped",
    "✔ Door Panels & Jambs Cleaned",
    "✔ Surfaces & Plastics Cleaned",
    "✔ Vents, Cracks & Crevices Cleaned",
    "✔ Cup Holders Cleaned",
    "✔ Glasses & Mirrors Cleaned",
  ],
  steps: [
    "✔ Interior & Floor Mats Vacuumed – A thorough clean for a tidy look",
    "✔ Leather Seats Wiped – Keeping them fresh and maintained",
    "✔ Door Panels & Jambs Cleaned – Every detail attended to",
    "✔ Surfaces & Plastics Refreshed – For a complete clean feel",
    "✔ Vents & Crevices – Dust and debris, gone",
    "✔ Cup Holders – Pristine and ready for use",
    "✔ Windows & Mirrors – Spotless and crystal clear",
  ],
  link: BASE_CLEAN_PATH,
  description:
    "We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.\n\n",
  price: ["$80", "$100", "$120"],
  carsSize: carTypes,
  duration: ["1 hour", "1 hour 30 mins", "2 hours"],
};

export const wipeAndClean = {
  title: "Wipe & Clean",
  type: "Interior Service",
  image: essentialInteriorWashImage,
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
  steps: [
    "✔ Interior & Trunk Vacuumed – Total interior care",
    "✔ Floor Mats Shampooed – Fresh and stain-free",
    "✔ Door Panels & Jambs – Thorough cleaning for a fresh look",
    "✔ Seats Steamed & Cleaned – Fresh, clean seating",
    "✔ Plastics & Surfaces Refreshed – Dust-free and like new",
    "✔ Vents & Crevices – Deep clean for every nook and cranny",
    "✔ Cup Holders – Clean and residue-free",
    "✔ Touch Points Steamed – Extra care for handles, knobs, and more",
    "✔ Windows & Mirrors – Clear and streak-free",
  ],
  link: WIPE_AND_CLEAN_PATH,
  description:
    "We vacuum the interior and trunk, shampoo the mats, and clean the door panels and jambs. Using steam, we sanitize the fabric or leather seats and touch points to eliminate germs and bacteria. The surfaces, plastics, and cup holders get a deep clean, and we finish with spotless glass and mirrors.\n\n",
  price: ["$140", "$160", "$180"],
  carsSize: carTypes,
  duration: ["2 hours", "2 hours 30 mins", "3 hours"],
  background: " ",
  bestValue: "Most Popular",
};

export const steamAndGuard = {
  title: "Steam & Guard",
  type: "Interior Service",
  image: primeInteriorWashImage,
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
  steps: [
    "✔ Interior & Trunk Vacuumed – Ready for anything",
    "✔ Carpet & Floor Mats Cleaned & Steamed – Stain-free and spotless",
    "✔ Trunk Space – Steamed and fully refreshed",
    "✔ Pet Hair & Sand Removed – Cleaned to perfection",
    "✔ Door Panels & Jambs – Full steam cleaning",
    "✔ Surfaces & Plastics – Deep steam clean and refreshed",
    "✔ Seats Steamed – Clean and refreshed for a new-car feel",
    "✔ Minor Stains Removed – Tackling those stubborn spots",
    "✔ Vents & Crevices – Thorough clean for every edge",
    "✔ Cup Holders Steamed – Pristine and ready to use",
    "✔ Windows & Mirrors – Clean and streak-free",
    "✔ Fabric/Leather Conditioning – Keep seats soft and conditioned",
    "✔ Interior UV & Dust Protection – For long-lasting freshness",
  ],
  link: STEAM_AND_GUARD_PATH,
  description:
    "We vacuum and steam the interior, carpets, and trunk to remove pet hair and sand. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service.",
  price: ["$200", "$220", "$240"],
  carsSize: carTypes,
  duration: ["3 hours", "3 hours 30 mins", "4 hours"],
  background: " ",
};

export const exteriorDetailingServices = [baseWash, washAndWax, shineAndShield];
export const interiorDetailingServices = [
  baseClean,
  wipeAndClean,
  steamAndGuard,
];
export const fullDetailingServices = [baseDetail, deepCleaning, spotlessFinish];

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
