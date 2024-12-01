import {
  BASE_DETAILING_PATH,
  CERAMIC_COATING_PATH,
  COMPLETE_DETAILING_PATH,
  DEEP_CLEANING_PATH,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  SHINE_AND_SHIELD_PATH,
  STEAM_AND_GUARD_PATH,
  WASH_AND_WAX_PATH,
  WIPE_AND_CLEAN_PATH,
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
export const washAndWax = {
  title: "Wash & Wax",
  type: "Exterior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/car-front-foglight.jpg",
  alt: "Mobile Wash & Wax Exterior Detailing Services in Raleigh | Spotless Detailing.",
  exteriorServices: [
    "Vehicle Hand Washed",
    "Gas Cap and Valve Cleaned",
    "Bodywork Air Dried and Finished with Towel",
    "Windows Cleaned and Protected",
    "Tires & Wheels Cleaned",
    "Tire Shine Applied",
    "Clay Bar Decontamination",
    "Premium Wax Applied",
    "Polished by Hand",
  ],
  price: ["$115", "$145", "$175"],
  carsSize: carTypes,
  link: WASH_AND_WAX_PATH,
  shortDescription:
    "Experience exterior detailing and premium wax protection for your vehicle. Includes: Hand wash and dry of body and wheels, tire shine, clay bar decontamination, and premium wax protection. \nFrom $115. Up to 3 hours.",
  description:
    "After a complete hand wash and dry of the paintwork, including the gas cap and valve, we ensure the tires and wheels are looking it's best. We follow with a clay bar treatment to decontaminate the paint and apply a premium wax for lasting protection. Finally, the windows are treated with a water repellent for clarity.",
  duration: ["2 hours", "2 hours 30 mins", "3 hours"],
  background: " ",
  bestValue: "Most Popular",
};

export const shineAndShield = {
  title: "Shine & Shield",
  type: "Exterior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_273206890.jpeg",
  alt: "Mobile Shine & Shield Exterior Detailing Services in Raleigh | Spotless Detailing.",
  exteriorServices: [
    "Wheels & Wells Cleaned",
    "Vehicle Hand Washed",
    "Gas Cap and Valve Cleaned",
    "Bodywork Air Dried and Finished with Towel",
    "Windows Cleaned and Protected",
    "Door & Trunk Jambs Cleaned",
    "Tires Cleaned & Shine Applied",
    "Black Textured Plastics Dressed",
    "Clay Bar Decontamination",
    "Chemical Bug & Target Removal",
    "Premium Wax Applied",
    "Polished by Hand",
    "Upgrade to Ceramic Coating Application for just $75",
  ],
  price: ["$155", "$175", "$195"],
  carsSize: carTypes,
  link: SHINE_AND_SHIELD_PATH,
  shortDescription:
    "This service offers a thorough exterior wash, with a premium wax for protection. Includes: Wash & Wax service, and in addition chemical decontamination, bug & target removal, and exterior plastic dressing. \nFrom $155. Up to 3 hours.",
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by shiny tires and wheels. After protecting the windows, we perform a clay bar treatment and bug & tar decontamination. We finish with a premium wax application for gloss and protection. ",
  duration: ["2 hours 45 mins", "3 hours", "3 hours 15 mins"],
};

export const sixMonthsCeramicCoating = {
  title: "Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  alt: "Ceramic Coating Services in Raleigh | Spotless Detailing.",
  exteriorServices: [
    "Wheels & Wells Cleaned",
    "Vehicle Hand Washed",
    "Bodywork Air Dried and Finished with Towel",
    "Windows Cleaned and Protected",
    "Door & Trunk Jambs Cleaned",
    "Tires Cleaned & Shine Applied",
    "Black Textured Plastics Dressed",
    "Clay Bar Decontamination",
    "Chemical Bug & Target Removal",
    "Ceramic Coating Applied",
  ],
  price: ["$225", "$250", "$275"],
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  shortDescription:
    "Superior hydrophobic, shiny and resistant protection for your vehicle paint. Includes: Shine & Shield service, and premium ceramic coating application for long-lasting protection. \nFrom $225. Up to 4 hours.",
  description:
    "To prepate for a ceramic coating we begin with a full hand wash and dry, followed tires and wheels detailing. Then we perform a clay bar treatment, iron decontamination and bug & tar removal. We finish with a durable ceramic coating for extended protection, lasting up to six months or more, ensuring long-lasting defense against various contaminants.",
  duration: ["3 hours", "3 hours 30 mins", "4 hours"],
  background: " ",
  bestValue: "Most Popular",
};

export const wipeAndClean = {
  title: "Wipe & Clean",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/man-polish-salon-car-garage_1157-36595.jpg",
  alt: "Wipe & Clean Interior Detailing Services in Raleigh | Spotless Detailing.",

  interiorServices: [
    "Trunk Carpet Vacuumed",
    "Trunk Space Plastics Cleaned",
    "Interior Carpet Vacuumed",
    "Floor Mats Shaampooed",
    "Door Panels & Jambs Cleaned",
    "Fabric Seats Vacuumed",
    "Leather Seats Wiped",
    "Interior Surfaces & Plastics Cleaned",
    "Vents, Cracks & Crevices Cleaned",
    "Cup Holders Cleaned",
    "Glasses & Mirrors Cleaned",
  ],
  link: WIPE_AND_CLEAN_PATH,
  shortDescription:
    "Interior detailing that leaves your car looking spotless and refreshed. Includes: Interior and trunk vacuum, shampooed mats, doors and jambs wiping, seats, interior surfaces and plastics wiping, and spotless glass and mirrors.\nFrom $115. Up to 3 hours.",
  description:
    "We vacuum the interior and trunk, shampoo the mats, and clean the door panels and jambs. The surfaces, plastics, and cup holders get a thorough wipedown, and we finish with spotless glass and mirrors.\n\n",
  price: ["$115", "$145", "$175"],
  carsSize: carTypes,
  duration: ["2 hours", "2 hours 30 mins", "3 hours"],
  background: " ",
  bestValue: "Most Popular",
};

export const steamAndGuard = {
  title: "Steam & Guard",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_539555302.jpeg",
  alt: "Steam & Guard Interior Detailing Services in Raleigh | Spotless Mobile Auto Detailing.",

  interiorServices: [
    "Trunk Carpet Vacuumed & Steamed",
    "Trunk Space Plastics Cleaned",
    "Interior Carpet Vacuumed & Steamed",
    "Floor Mats Shaampooed",
    "Door Panels, Jambs Cleaned & Steamed",
    "Surfaces and Plastics Cleaned & Steamed",
    "Fabric Seats Vacuumed & Steamed",
    "Leather Seats Wiped & Steamed",
    "Leather Conditioning Applied",
    "Vents, Cracks & Crevices Cleaned & Steamed",
    "Cup Holders Cleaned & Steamed",
    "Interior UV & Dust Protection Applied",
    "Glasses & Mirrors Cleaned",
  ],
  link: STEAM_AND_GUARD_PATH,
  shortDescription:
    "This interior service offers a thorough interior cleaning, with conditioning and protection. Includes: Wipe & Clean service and in addition interior and trunk steam cleaning, and interior conditioning and UV protection. \nFrom $175. Up to 4 hours.",
  description:
    "We vacuum and steam the interior, carpets, and trunk. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service.",
  price: ["$175", "$205", "$235"],
  carsSize: carTypes,
  duration: ["3 hours", "3 hours 30 mins", "4 hours"],
  background: " ",
};

export const baseDetail = {
  title: "Base Detailing",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_399584907.jpeg",
  alt: "Base Detailing Services in Raleigh | Spotless Detailing.",
  exteriorServices: [
    "Vehicle Hand Washed",
    "Gas Cap and Valve Cleaned",
    "Bodywork Air Dried and Finished with Towel",
    "Windows Cleaned",
    "Door Jambs Cleaned",
    "Tires & Wheels Cleaned",
    "Tire Shine Applied",
  ],
  interiorServices: [
    "Carpet Vacuumed",
    "Floor Mats Shaampooed",
    "Fabric Seats Vacuumed",
    "Leather Seats Wiped",
    "Door Panels Cleaned",
    "Interior Surfaces & Plastics Cleaned",
    "Cup Holders Cleaned",
    "Glasses & Mirrors Cleaned",
  ],
  price: ["$115", "$145", "175"],
  carsSize: carTypes,
  link: BASE_DETAILING_PATH,
  shortDescription:
    "This service includes a thorough exterior and interior detailing. Includes: Hand wash and dry of body and wheels, tire shine, interior vacuum, shampooed mats, doors and jambs wiping, seats, interior surfaces and plastics wiping, and spotless glass and mirrors. \nFrom $115. Up to 3 hours.",
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish. We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.",
  duration: ["2 hours", "2 hours 30 mins", "3 hours"],
  background: " ",
};

export const completeDetail = {
  title: "Complete Detailing",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_243325383.jpeg",
  alt: "Complete Detailing Services in Raleigh | Spotless Detailing.",
  exteriorServices: washAndWax.exteriorServices,
  interiorServices: wipeAndClean.interiorServices,
  price: ["$195", "$225", "$245"],
  carsSize: carTypes,
  link: COMPLETE_DETAILING_PATH,
  shortDescription:
    "This service includes a complete exterior and interior detailing with the following protection. Includes: Base Detailing and in addition clay bar decontamination, premium wax protection, vents, cracks & crevices, trunk jambs, trunk vacuum and cleaning. \nFrom $195. Up to 5 hours.",
  description:
    "After a complete hand wash and dry of the paintwork, including the gas cap and valve, we clean tires and wheels are spotless. We follow with a clay bar treatment to decontaminate the paint and apply a premium wax for lasting protection. Finally, the windows are treated with a water repellent for clarity. We vacuum the interior and trunk, shampoo the mats, and clean the door panels and jambs. Using steam, we sanitize the fabric or leather seats and touch points to eliminate germs and bacteria. The surfaces, plastics, and cup holders get a deep clean, and we finish with spotless glass and mirrors.",
  duration: ["4 hours", "4 hours 30 mins", "5 hours"],
  background: "gray",
  bestValue: "Most Popular",
};

export const deepClean = {
  title: "Deep Cleaning",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/pexels-khunkorn-laowisit-1359149-5233285.jpg",
  alt: "Deep Cleaning Services in Raleigh | Spotless Detailing.",
  exteriorServices: shineAndShield.exteriorServices,
  interiorServices: steamAndGuard.interiorServices,
  price: ["$295", "$325", "$345"],
  carsSize: carTypes,
  link: DEEP_CLEANING_PATH,
  shortDescription:
    "Our most comprehensive detailing package for your vehicle. Includes: Complete Detailing and in addition addition chemical decontamination, bug & target removal, exterior plastic dressing, interior and trunk steam cleaning, and interior conditioning and UV protection. \nFrom $295. Up to 7 hours.",
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by spotless tires and wheels. After protecting the windows, we perform a clay bar treatment and iron decontamination. We finish with a premium wax application for gloss and protection. We vacuum and steam the interior, carpets, and trunk. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service.",
  duration: ["6 hours", "6 hours 30 mins", "7 hours "],
  background: "bg-gray",
  bestValue: "Best Value",
};



// export const baseWash = {
//   title: "Base Wash",
//   type: "Exterior Service",
//   image: regularExteriorWashImage,
//   exteriorServices: [
//     "Vehicle Hand Washed & Dried",
//     "Door Jambs Cleaned",
//     "Gas Cap and Valve Cleaned",
//     "Tires & Wheels Cleaned",
//     "Tire Shine Applied",
//     "Windows Cleaned",
//   ],
//   price: ["$60", "$80", "$100"],
//   carsSize: carTypes,
//   link: BASE_WASH_PATH,
//   description:
//     "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve, and clean the door jambs. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish.",
//   duration: ["45 mins", "1 hour", "1 hour 15 mins"],
//   background: " ",
// };

// export const baseClean = {
//   title: "Base Clean",
//   type: "Interior Service",
//   image: regularInteriorWashImage,
//   interiorServices: [
//     "Interior & Floor Mats Vacuumed",
//     "Leather Seats Wiped",
//     "Door Panels & Jambs Cleaned",
//     "Surfaces & Plastics Cleaned",
//     "Vents, Cracks & Crevices Cleaned",
//     "Cup Holders Cleaned",
//     "Glasses & Mirrors Cleaned",
//   ],
//   link: BASE_CLEAN_PATH,
//   description:
//     "We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.\n\n",
//   price: ["$80", "$100", "$120"],
//   carsSize: carTypes,
//   duration: ["1 hour", "1 hour 30 mins", "2 hours"],
// };

export const exteriorDetailingServices = [
  // baseWash,
  washAndWax,
  shineAndShield,
];
export const interiorDetailingServices = [
  // baseClean,
  wipeAndClean,
  steamAndGuard,
];
export const fullDetailingServices = [baseDetail, completeDetail, deepClean];

export const ceramicCoatingService = [sixMonthsCeramicCoating];

export const exteriorDetailingService = {
  title: "Exterior Detailing",
  description:
    "Our exterior detailing includes a thorough hand wash, decontamination, and precision drying for a spotless, protected finish.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_397247724.jpeg",
  link: MOBILE_EXTERIOR_DETAILING_PATH,
  options: exteriorDetailingServices,
};
export const interiorDetailingService = {
  title: "Interior Detailing",
  description:
    "Our interior detailing offers deep cleaning, vacuuming, and upholstery care, ensuring a fresh, and comfortable interior.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_539555302.jpeg",
  link: MOBILE_INTERIOR_DETAILING_PATH,
  options: interiorDetailingServices,
};

export const fullDetailingService = {
  title: "Full Detailing",
  description:
    "Our full detailing packages include a thorough hand wash, decontamination, deep cleaning, vacuuming, and upholstery care, leaving your exterior and interior both shining, and comfortable.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_273206890.jpeg",
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
