// import primeExteriorWashImage from "../assets/images/AdobeStock_273206890.jpeg";
// import primeInteriorWashImage from "../assets/images/AdobeStock_539555302.jpeg";
// import ultimateExteriorWashImage from "../assets/images/AdobeStock_799868847.jpeg";
// import essentialExteriorWashImage from "../assets/images/car-front-foglight.jpg";
// import fullDetailInteriorWashImage from "../assets/images/AdobeStock_243325383.jpeg";
// import fullDetailExteriorWashImage from "../assets/images/pexels-tima-miroshnichenko-6872146.jpg";
// import essentialInteriorWashImage from "../assets/images/man-polish-salon-car-garage_1157-36595.jpg";
// import ultimateInteriorWashImage from "../assets/images/pexels-khunkorn-laowisit-1359149-5233285.jpg";
import { BOOKING_PATH } from "./constants";

export const washAndWaxExteriorServices = [
  "✔ Vehicle Hand Washed & Dried",
  "✔ Door Jambs Cleaned",
  "✔ Gas Cap and Valve Cleaned",
  "✔ Tires & Wheels Cleaned",
  "✔ Tire Shine Applied",
  "✔ Windows Cleaned",
  "✔ Spray Wax Applied",
  "✔ Windows Protection Applied",
];
export const wipeAndCleanInteriorServices = [
  "✔ Interior & Trunk Vacuumed",
  "✔ Floor Mats Shampooed",
  "✔ Fabric/Leather Seats Wiped",
  "✔ Door Panels & Jambs Cleaned",
  "✔ Surfaces & Plastics Cleaned",
  "✔ Cracks & Crevices Cleaned",
  "✔ Cup Holders Cleaned",
  "✔ Glasses & Mirrors Cleaned",
];
export const shineAndShieldExteriorServices = [
  "✔ Vehicle Hand Washed & Dried",
  "✔ Door & Trunk Jambs Cleaned",
  "✔ Gas Cap and Valve Cleaned",
  "✔ Wheels & Wells Cleaned",
  "✔ Tires Cleaned & Shine Applied",
  "✔ Windows Cleaned and Protected",
  "✔ Clay Bar Decontamination",
  "✔ Chemical Decontamination",
  "✔ Premium Spray Gloss Enhancer Applied",
  "✔ Door Jambs Ceramic Protection Applied",
  "✔ Wheels Ceramic Protection Applied",
  "✔ Ultra Ceramic Coating Applied",
];
export const steamAndGuardInteriorServices = [
  "✔ Interior & Trunk Vacuumed",
  "✔ Carpet & Floor Mats Steamed",
  "✔ Trunk Space Steamed",
  "✔ Pet hair/Sand removal",
  "✔ Door Panels, Jambs Cleaned & Steamed",
  "✔ Surfaces and Plastics Cleaned & Steamed",
  "✔ Fabric/Leather Seats Steamed",
  "✔ Vents, Cracks & Crevices Cleaned & Steamed",
  "✔ Cup Holders Cleaned & Steamed",
  "✔ Glasses & Mirrors Cleaned",
  "✔ Fabric/Leather Conditioning Applied",
  "✔ Interior UV & Dust Protection Applied",
];

export const fullDetailPackage = {
  title: "Full Detail",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  // exteriorImage: fullDetailExteriorWashImage,
  // interiorImage: fullDetailInteriorWashImage,
  exteriorServices: washAndWaxExteriorServices,
  interiorServices: wipeAndCleanInteriorServices,
  exteriorDescription:
    "We start with a complete hand wash and dry, clean the door and trunk jambs, and make sure your tires and wheels are shining. After that, we apply a premium spray wax for long-lasting protection and treat the windows with a water repellent for a crystal-clear finish.",
  interiorDescription:
    "For the interior, we’ll vacuum the entire space, including the trunk, shampoo the mats, and wipe down the seats. Door panels, jambs, surfaces, and cup holders get a thorough clean, and we finish up with spotless glass and mirrors for a fresh and clean look.",
  link: BOOKING_PATH,
  button: "Get Started",
  price: ["$220", "$240", "$260", "$280"],
  duration: "Duration: Up to 4 hours depending on vehicle size and condition.",
};

export const specialPackage = {
  title: "Full Detail Package",
  exteriorTitle: "Exterior",
  interiorTitle: "Interior",
  // exteriorImage: ultimateExteriorWashImage,
  // interiorImage: ultimateInteriorWashImage,
  exteriorServices: shineAndShieldExteriorServices,
  interiorServices: steamAndGuardInteriorServices,
  exteriorDescription:
    "We hand wash and dry your vehicle, clean the wheels, tires, and door jambs, and apply tire shine. Your windows are protected, and we finish with clay bar treatment, iron decontamination, and a lasting ceramic coating for long-term gloss and protection.",
  interiorDescription:
    "We vacuum and steam the interior, carpets, mats and trunk, removing pet hair and sand*. Seats, vents, and surfaces get a steam clean, followed by conditioning and UV protection. We finish with spotless glass and mirrors for a polished look.\n*Excessive pet hair or sand may require additional service.",
  link: BOOKING_PATH,
  button: "Get Started",
  price: ["$400", "$420", "$440", "$460"],
  duration: "Duration: Up to 6 hours depending on vehicle size and condition.",
};

export const washAndWax = {
  title: "Wash & Wax",
  // image: essentialExteriorWashImage,
  services: washAndWaxExteriorServices,
  price: ["$100", "$115", "$130", "$150"],
  link: BOOKING_PATH,
  description:
    "We start with a full hand wash and dry, clean up the door jambs, and get your tires and wheels shining. Then, we apply a premium spray wax for long-lasting protection and treat the windows with a water repellent for a crystal-clear finish.",
  duration: "Duration: Up to 2 hours depending on vehicle size and condition.",
};

export const wipeAndClean = {
  title: "Wipe & Clean",
  // image: essentialInteriorWashImage,
  services: wipeAndCleanInteriorServices,
  description:
    "We vacuum the interior and trunk, shampoo the mats, and wipe down the fabric or leather seats. The door panels, jambs, surfaces and plastics, and cup holders get a full clean, and we’ll finish with spotless glass and mirrors for a fresh look.",
  price: ["$150", "$165", "$180", "$200"],
  duration: "Duration: Up to 2 hours depending on vehicle size and condition.",
};

export const shineAndShield = {
  title: "Shine & Shield",
  // image: primeExteriorWashImage,
  services: shineAndShieldExteriorServices,
  price: ["$220", "$240", "$260", "$280"],
  link: BOOKING_PATH,
  description:
    "We hand wash and dry your car, clean the wheels, tires, door and trunk jambs, apply tire shine. Windows get protected, and we finish with clay bar treatment, iron decontamination, and a durable ceramic coating for long-lasting gloss and protection",
  duration: "Duration: Up to 3 hours depending on vehicle size and condition.",
};

export const steamAndGuard = {
  title: "Steam & Guard",
  // image: primeInteriorWashImage,
  services: steamAndGuardInteriorServices,
  link: BOOKING_PATH,
  description:
    "We vacuum and steam the interior, carpets, and trunk, taking care of pet hair and sand*. Seats, vents, and surfaces get a deep steam treatment, followed by conditioning and UV protection. Finally, we ensure the glass and mirrors are spotless for a polished finish.\n*Excessive pet hair or sand may require additional service.",
  price: ["$260", "$280", "$300", "$320"],
  duration: "Duration: Up to 3 hours depending on vehicle size and condition.",
};
