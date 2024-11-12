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
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/car-front-foglight.avif",
  alt: "Mobile Wash & Wax Exterior Detailing Services in Raleigh | Spotless Mobile Auto Detailing.",
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
  price: ["$125", "$150", "$175"],
  carsSize: carTypes,
  link: WASH_AND_WAX_PATH,
  shortDescription:
    "Experience exterior detailing and premium wax protection for your vehicle.",
  description:
    "After a complete hand wash and dry of the paintwork, including the gas cap and valve, we ensure the tires and wheels are looking it's best. We follow with a clay bar treatment to decontaminate the paint and apply a premium wax for lasting protection. Finally, the windows are treated with a water repellent for clarity.",
  duration: ["1 hour 30 mins", "1 hour 45 mins", "2 hours"],
  background: " ",
  bestValue: "Most Popular",
};

export const shineAndShield = {
  title: "Shine & Shield",
  type: "Exterior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_273206890.avif",
  alt: "Mobile Shine & Shield Exterior Detailing Services in Raleigh | Spotless Mobile Auto Detailing.",
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
    "Upgrade to 6 Months Ceramic Coating for just $60",
  ],
  price: ["$175", "$200", "$225"],
  carsSize: carTypes,
  link: SHINE_AND_SHIELD_PATH,
  shortDescription:
    "This service offers a thorough exterior wash, with a premium wax for protection.",
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by shiny tires and wheels. After protecting the windows, we perform a clay bar treatment and bug & tar decontamination. We finish with a premium wax application for gloss and protection. ",
  duration: ["2 hours 30 mins", "2 hours 45 mins", "3 hours"],
  background: " ",
};

export const wipeAndClean = {
  title: "Wipe & Clean",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/man-polish-salon-car-garage_1157-36595.avif",
  alt: "Mobile Wipe & Clean Interior Detailing Services in Raleigh | Spotless Mobile Auto Detailing.",

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
    "Interior detailing that leaves your car looking spotless and refreshed.",
  description:
    "We vacuum the interior and trunk, shampoo the mats, and clean the door panels and jambs. The surfaces, plastics, and cup holders get a thorough wipedown, and we finish with spotless glass and mirrors.\n\n",
  price: ["$145", "$170", "$195"],
  carsSize: carTypes,
  duration: ["2 hours", "2 hours 30 mins", "3 hours"],
  background: " ",
  bestValue: "Most Popular",
};

export const steamAndGuard = {
  title: "Steam & Guard",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_539555302.avif",
  alt: "Mobile Steam & Guard Interior Detailing Services in Raleigh | Spotless Mobile Auto Detailing.",

  interiorServices: [
    "Trunk Carpet Vacuumed",
    "Trunk Space Plastics Cleaned",
    "Interior Carpet Vacuumed & Steamed",
    "Floor Mats Shaampooed",
    "Carpet Shaampooed & Steamed",
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
    "Our interior package includes carpet, trunk and interior cleaning and steam treatment.",
  description:
    "We vacuum and steam the interior, carpets, and trunk. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service.",
  price: ["$215", "$240", "$265"],
  carsSize: carTypes,
  duration: ["3 hours", "3 hours 30 mins", "4 hours"],
  background: " ",
};

export const baseDetail = {
  title: "Base Detailing",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_399584907.avif",
  alt: "Mobile Base Detailing Services in Raleigh | Spotless Mobile Auto Detailing.",
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
    "Carpet & Floor Mats Vacuumed",
    "Fabric Seats Vacuumed",
    "Leather Seats Wiped",
    "Door Panels Cleaned",
    "Interior Surfaces & Plastics Cleaned",
    "Vents, Cracks & Crevices Cleaned",
    "Cup Holders Cleaned",
    "Glasses & Mirrors Cleaned",
  ],
  price: ["$155", "$180", "205"],
  carsSize: carTypes,
  link: BASE_DETAILING_PATH,
  shortDescription:
    "This service includes a thorough exterior and interior detailing.",
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish. We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.",
  duration: ["2 hours", "2 hours 30 mins", "3 hours"],
  background: " ",
};

export const completeDetail = {
  title: "Complete Detailing",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_243325383.avif",
  alt: "Mobile Complete Detailing Services in Raleigh | Spotless Mobile Auto Detailing.",
  exteriorServices: washAndWax.exteriorServices,
  interiorServices: wipeAndClean.interiorServices,
  price: ["$245", "$270", "$295"],
  carsSize: carTypes,
  link: COMPLETE_DETAILING_PATH,
  shortDescription:
    "This service includes a complete exterior and interior detailing with the following protection.",
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
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/pexels-khunkorn-laowisit-1359149-5233285.avif",
  alt: "Mobile Deep Cleaning Services in Raleigh | Spotless Mobile Auto Detailing.",
  exteriorServices: shineAndShield.exteriorServices,
  interiorServices: steamAndGuard.interiorServices,
  price: ["$345", "$370", "$395"],
  carsSize: carTypes,
  link: DEEP_CLEANING_PATH,
  shortDescription:
    "Our most comprehensive detailing package for your vehicle.",
  description:
    "We begin with a full hand wash and dry, including detailed cleaning of the gas cap and valve, followed by spotless tires and wheels. After protecting the windows, we perform a clay bar treatment and iron decontamination. We finish with a premium wax application for gloss and protection. We vacuum and steam the interior, carpets, and trunk. Door panels, seats, vents, and surfaces receive a thorough cleaning with steam, followed by conditioning and UV protection. We ensure the glass and mirrors are spotless, leaving your vehicle looking polished.* Excessive pet hair or sand may require additional service.",
  duration: ["6 hours", "6 hours 30 mins", "7 hours "],
  background: "bg-gray",
  bestValue: "Best Value",
};

export const sixMonthsCeramicCoating = {
  title: "6 Months Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.avif",
  alt: "Mobile 6 Months Ceramic Coating Services in Raleigh | Spotless Mobile Auto Detailing.",
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
    "6 Months Ceramic Coating Applied",
  ],
  price: ["$225", "$250", "$275"],
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  shortDescription:
    "Superior 6 month hydrophobic, shiny and resistant protection for your vehicle paint.",
  description:
    "To prepate for a ceramic coating we begin with a full hand wash and dry, followed tires and wheels detailing. Then we perform a clay bar treatment, iron decontamination and bug & tar removal. We finish with a durable ceramic coating for long-lasting gloss and protection.",
  duration: ["2 hours 30 mins", "2 hours 45 mins", "3 hours"],
  background: " ",
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
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_397247724.avif",
  link: MOBILE_EXTERIOR_DETAILING_PATH,
  options: exteriorDetailingServices,
};
export const interiorDetailingService = {
  title: "Interior Detailing",
  description:
    "Our interior detailing offers deep cleaning, vacuuming, and upholstery care, ensuring a fresh, and comfortable interior.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_539555302.avif",
  link: MOBILE_INTERIOR_DETAILING_PATH,
  options: interiorDetailingServices,
};

export const fullDetailingService = {
  title: "Full Detailing",
  description:
    "Our full detailing packages include a thorough hand wash, decontamination, deep cleaning, vacuuming, and upholstery care, leaving your exterior and interior both shining, and comfortable.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_273206890.avif",
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
