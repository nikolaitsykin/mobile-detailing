import interiorDetailingServiceImage from "../assets/images/AdobeStock_243325383.jpeg";
import primeExteriorWashImage from "../assets/images/AdobeStock_273206890.jpeg";
import exteriorDetailingServiceImage from "../assets/images/AdobeStock_397247724.jpeg";
import regularInteriorWashImage from "../assets/images/AdobeStock_399584907.jpeg";
import primeInteriorWashImage from "../assets/images/AdobeStock_539555302.jpeg";
import ultimateExteriorWashImage from "../assets/images/AdobeStock_799868847.jpeg";
import essentialExteriorWashImage from "../assets/images/car-front-foglight.jpg";
import regularExteriorWashImage from "../assets/images/car-wash-detailing-station_1.jpg";
import essentialInteriorWashImage from "../assets/images/man-polish-salon-car-garage_1157-36595.jpg";
import ultimateInteriorWashImage from "../assets/images/pexels-khunkorn-laowisit-1359149-5233285.jpg";
import { MOBILE_DETAILING_PATH } from "./constants";

export const carsSizes = [
  {
    title: "Small",
    description: "VW Jetta,\nFord Focus",
  },
  {
    title: "Middle",
    description: "Hyundai Tucson,\nChevrolet Impala",
  },
  {
    title: "Large",
    description: "Toyota Tacoma,\n Dodge Durango",
  },
  {
    title: "XL",
    description: "GMC Yukon,\nHonda Odyssey",
  },
];

export const essentialExteriorServices = [
  "✔ Vehicle Hand Washed & Dried",
  "✔ Door & Trunk Jambs Cleaned",
  "✔ Gas Cap and Valve Cleaned",
  "✔ Tires & Wheels Cleaned",
  "✔ Tire Shine Applied",
  "✔ Windows Cleaned",
  "✔ Spray Wax Applied",
  "✔ Windows Protection Applied",
  "✖ Iron Removed",
  "✖ Bug & Tar Removed",
  "✖ Clay Bar Treatment",
  "✖ Premium Spray Gloss Enhancer Applied",
  "✖ Door Jambs Ceramic Protection Applied",
  "✖ Wheels Ceramic Protection Applied",
  "✖ Ultra Ceramic Coating Applied",
];
export const essentialInteriorServices = [
  "✔ Interior & Trunk Vacuumed",
  "✔ Floor Mats Shampooed",
  "✔ Fabric/Leather Seats Wiped",
  "✔ Door Panels Wiped",
  "✔ Surfaces & Plastics Wiped",
  "✔ Cracks & Crevices Cleaned",
  "✔ Cup Holders Cleaned",
  "✔ Glasses & Mirrors Cleaned",
  "✖ Carpet & Floor Mats Steamed",
  "✖ Trunk Space Steamed",
  "✖ Vents, Cracks & Crevices Steamed",
  "✖ Fabric/Leather Seats Steamed",
  "✖ Cup Holders Steamed",
  "✖ Fabric/Leather Conditioning Applied",
  "✖ Interior UV & Dust Protection Applied",
];

export const primeExteriorServices = [
  "✔ Vehicle Hand Washed & Dried",
  "✔ Door & Trunk Jambs Cleaned",
  "✔ Gas Cap and Valve Cleaned",
  "✔ Wheels Cleaned",
  "✔ Tire Shine Applied",
  "✔ Windows Cleaned",
  "✔ Spray Wax Applied",
  "✔ Windows Protection Applied",
  "✔ Iron Removed",
  "✔ Bug & Tar Removed",
  "✔ Clay Bar Treatment",
  "✔ Premium Spray Gloss Enhancer Applied",
  "✖ Door Jambs Ceramic Protection Applied",
  "✖ Wheels Ceramic Protection Applied",
  "✖ Ultra Ceramic Coating Applied",
];
export const primeInteriorServices = [
  "✔ Interior & Trunk Vacuumed",
  "✔ Floor Mats Shampooed",
  "✔ Fabric/Leather Seats Wiped",
  "✔ Door Panels Wiped",
  "✔ Surfaces & Plastics Wiped",
  "✔ Vents, Cracks & Crevices Cleaned",
  "✔ Cup Holders Cleaned",
  "✔ Glasses & Mirrors Cleaned",
  "✔ Carpet & Floor Mats Steamed",
  "✔ Trunk Space Steamed",
  "✔ Vents, Cracks & Crevices Steamed",
  "✔ Fabric/Leather Seats Steamed",
  "✔ Cup Holders Steamed",
  "✖ Fabric/Leather Conditioning Applied",
  "✖ Interior UV & Dust Protection Applied",
];

export const ultimateExteriorServices = [
  "✔ Vehicle Hand Washed & Dried",
  "✔ Door & Trunk Jambs Cleaned",
  "✔ Gas Cap and Valve Cleaned",
  "✔ Wheels Cleaned",
  "✔ Tire Shine Applied",
  "✔ Windows Cleaned",
  "✔ Spray Wax Applied",
  "✔ Windows Protection Applied",
  "✔ Iron Removed",
  "✔ Bug & Tar Removed",
  "✔ Clay Bar Treatment",
  "✔ Premium Spray Gloss Enhancer Applied",
  "✔ Door Jambs Ceramic Protection Applied",
  "✔ Wheels Ceramic Protection Applied",
  "✔ Ultra Ceramic Coating Applied",
];

export const ultimateInteriorServices = [
  "✔ Interior & Trunk Vacuumed",
  "✔ Floor Mats Shampooed",
  "✔ Fabric/Leather Seats Wiped",
  "✔ Door Panels Wiped",
  "✔ Surfaces & Plastics Wiped",
  "✔ Cracks & Crevices Cleaned",
  "✔ Cup Holders Cleaned",
  "✔ Glasses & Mirrors Cleaned",
  "✔ Carpet & Floor Mats Steamed",
  "✔ Trunk Space Steamed",
  "✔ Vents, Cracks & Crevices Steamed",
  "✔ Fabric/Leather Seats Steamed",
  "✔ Cup Holders Steamed",
  "✔ Fabric/Leather Conditioning Applied",
  "✔ Interior UV & Dust Protection Applied",
];

export const regularExteriorServices = [
  "☑ Hand Exterior Wash & Dry",
  "☑ Quick Finish Shine",
  "☑ Tire/rim Degreaser & Shine",
  "☑ Windows Cleaning",
  "☑ Exterior Bug Removal",
  "☑ Spray Wax",
];
export const regularInteriorServices = [
  "☑ Door Seals and Door Jamb Cleaning",
  "☑ Deep Vacuum",
  "☑ Floor Mats Cleaned",
  "☑ Glass Cleaning",
  "☑ Air Freshener",
  "☑ Degrease leather seats, ​dash, doors, cup holders",
];

export const essentialPackage = {
  title: "Essential Package",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  exteriorImage: essentialExteriorWashImage,
  interiorImage: essentialInteriorWashImage,
  exteriorServices: essentialExteriorServices,
  interiorServices: essentialInteriorServices,
  price: ["$175", "$200", "$225", "$250"],
  duration: "Duration: Up to 3 hours depending on vehicle size and condition.",
};

export const primePackage = {
  title: "Prime Package",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  exteriorImage: primeExteriorWashImage,
  interiorImage: primeInteriorWashImage,
  exteriorServices: primeExteriorServices,
  interiorServices: primeInteriorServices,
  price: ["$325", "$350", "$375", "$400"],
  duration: "Duration: Up to 5 hours depending on vehicle size and condition.",
};

export const ultimatePackage = {
  title: "Ultimate Package",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  exteriorImage: ultimateExteriorWashImage,
  interiorImage: ultimateInteriorWashImage,
  exteriorServices: ultimateExteriorServices,
  interiorServices: ultimateInteriorServices,
  price: ["$425", "$450", "$475", "$500"],
  duration: "Duration: Up to 6 hours depending on vehicle size and condition.",
};


export const regularWash = {
  title: "Regular Wash",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  exteriorImage: regularExteriorWashImage,
  interiorImage: regularInteriorWashImage,
  exteriorServices: regularExteriorServices,
  interiorServices: regularInteriorServices,
  price:
    "Small Cars $90 | Midsize SUVs/Trucks $110 | Large SUVs/Trucks/Vans $130",
  prices: ["$90", "$110", "$130"],
  cars: ["Small Cars", "Midsize SUVs/Trucks", "Large SUVs/Trucks/Vans"],
  duration: "for Members Only",
};
export const exteriorDetailingService = {
  title: "Exterior Detailing",
  description:
    "Our exterior wash includes a thorough hand wash, decontamination, and precision drying for a spotless, protected finish.",
  image: exteriorDetailingServiceImage,
  link: MOBILE_DETAILING_PATH,
};
export const interiorDetailingService = {
  title: "Interior Detailing",
  description:
    "Our interior detailing offers deep cleaning, vacuuming, and upholstery care, ensuring a fresh, spotless, and comfortable interior.",
  image: interiorDetailingServiceImage,
  link: MOBILE_DETAILING_PATH,
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
