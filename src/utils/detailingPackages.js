import {
  MOBILE_DETAILING_PATH,
  CERAMIC_COATING_PATH,
  EXPRESS_EXTERIOR_PATH,
  EXPRESS_FULL_DETAILING_PATH,
  EXPRESS_INTERIOR_PATH,
  MAINTENANCE_FULL_DETAILING_PATH,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  ULTIMATE_EXTERIOR_PATH,
  ULTIMATE_FULL_DETAILING_PATH,
  ULTIMATE_INTERIOR_PATH,
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

const expressExteriorPrices = ["$125", "$140", "$155"];
const expressInteriorPrices = ["$165", "$180", "$195"];
const expressFullDetailPrices = ["$225", "$260", "$295"];
const ultimateExteriorPrices = ["$155", "$175", "$195"];
const ultimateInteriorPrices = ["$235", "$255", "$275"];
const ultimateFullDetailPrices = ["$375", "$410", "$445"];
const ceramicCoatingPrices = ["$350", "375", "$400"];

export const expressExterior = {
  title: "Express Exterior",
  type: "Exterior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/car-front-foglight.jpg",
  alt: "Express Exterior Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Meticulous Wheels & Tires Cleaning & Shine" },
    { text: "Luxurious Foam Hand Wash" },
    { text: "Gas Cap & Valve Cleaning" },
    { text: "Spotless Air & Towel Drying" },
    { text: "Crystal Clear Windows Cleaning" },
    { text: "Premium Wax Application" },
  ],
  price: expressExteriorPrices,
  carsSize: carTypes,
  link: EXPRESS_EXTERIOR_PATH,
  shortDescription: `Experience the shine of a professional car detailing with Spotless Detailing’s Express Exterior service. \n\nFrom ${expressExteriorPrices[0]}. Up to 2 hours.`,
  description:
    "Clean your car in no time with Spotless Detailing's Express Exterior service. We use high quality detailing products that are designed to quickly and effectively remove dirt, grime and other contaminants from the exterior of your car. Our experienced team of professionals will make sure that your car looks like new again.",
  duration: ["1 hour", "1 hour 15 mins", "1 hour 30 mins"],
  background: " ",
};

export const ultimateExterior = {
  title: "Ultimate Exterior",
  type: "Exterior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_273206890.jpeg",
  alt: "Ultimate Exterior Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Meticulous Wheels & Tires Cleaning & Shine" },
    { text: "Luxurious Foam Hand Wash" },
    { text: "Gas Cap & Valve Cleaning" },
    { text: "Spotless Air & Towel Drying" },
    { text: "Crystal Clear Windows Cleaning" },
    { text: "Detailed Door & Trunk Jambs Cleaning" },
    { text: "Exterior Black Plastic Dressing" },
    { text: "Precision Clay Bar Treatment" },
    { text: "Powerful Chemical Bug & Tar Removal" },
    { text: "Ultra Ceramic Sealant (up to 6-Month Protection)" },
  ],
  price: ultimateExteriorPrices,
  carsSize: carTypes,
  link: ULTIMATE_EXTERIOR_PATH,
  shortDescription: `Get your car looking new again with Spotless Detailing’s Ultimate Exterior service. \n\nFrom ${ultimateExteriorPrices[0]}. Up to 2 hours 45 mins.`,
  description:
    "Get your car looking like new again with Spotless Detailing’s Ultimate Exterior service. Our professional team of detailers will bring your car back to its showroom shine with a full exterior detail. We’ll wash, clay and finish up with a ceramic based paint sealant for a deep, glossy shine. Make sure your car is looking its best with our Ultimate Exterior package.",
  duration: ["2 hours mins", "2 hours 15 mins", "2 hours 30 mins"],
};

export const ceramicCoating = {
  title: "Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  alt: "Ceramic Coating Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Meticulous Wheels & Tires Cleaning & Shine" },
    { text: "Luxurious Foam Hand Wash" },
    { text: "Gas Cap & Valve Cleaning" },
    { text: "Spotless Air & Towel Drying" },
    { text: "Crystal Clear Windows Cleaning" },
    { text: "Precision Clay Bar Treatment" },
    { text: "Powerful Chemical Bug & Tar Removal" },
    { text: "24 months Graphene Ceramic Coating Applied" },
  ],
  price: ceramicCoatingPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  shortDescription: `Superior hydrophobic, shiny and resistant protection for your vehicle paint. Includes: Shine & Shield service, and 24 months graphene ceramic coating application for long-lasting protection. \n\nFrom  ${ceramicCoatingPrices[0]}. Up to 4 hours.`,
  description:
    "To prepare for a ceramic coating we begin with a full hand wash and dry, followed by tires and wheels detailing. Then we perform a clay bar treatment, iron decontamination and bug & tar removal. We finish with a durable ceramic coating for extended protection, lasting up to 24 months, ensuring long-lasting defense against various contaminants.",
  duration: ["3 hours", "3 hours 30 mins", "4 hours"],
  background: " ",
};

export const expressInterior = {
  title: "Express Interior",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/man-polish-salon-car-garage_1157-36595.jpg",
  alt: "Express Interior Detailing Services in Raleigh | Spotless Auto Detailing.",
  interiorServices: [
    { text: "Thorough Interior & Trunk Vacuuming" },
    { text: "Interior Surfaces & Plastics Cleaning" },
    { text: "Thorough Floor Mats Cleaning" },
    { text: "Meticulous Door Panels & Jambs Cleaning" },
    { text: "Comprehensive Seats Vacuuming & Cleaning" },
    { text: "Detailed Dashboard and Console Cleaning" },
    { text: "Vents and Crevices Detailing" },
    { text: "Crystal Clear Glasses & Mirrors Cleaning" },
  ],
  link: EXPRESS_INTERIOR_PATH,
  shortDescription:
    `Get your vehicle interior looking refreshed and shiny with Spotless Detailing’s Express Interior service.\n\nFrom ${expressInteriorPrices[0]}. Up to 2.5 hours.`,
  description:
    "Quickly freshen up your car's interior with Spotless Detailing's Express Interior service. Designed to get your car looking its best in no time, this service includes a thorough vacuuming of all interior surfaces, a detailed wipe-down of all plastics, leather, and vinyl, and a window cleaning. Get your car looking like new again in no time with this express service.\n\n",
  price: expressInteriorPrices,
  carsSize: carTypes,
  duration: ["2 hours", "2 hours 15 mins", "2 hours 30 mins"],
  background: " ",
};

export const ultimateInterior = {
  title: "Ultimate Interior",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_539555302.jpeg",
  alt: "Ultimate Interior Detailing Services in Raleigh | Spotless Auto Detailing.",
  interiorServices: [
    { text: "Thorough Interior & Trunk Vacuuming & Steaming" },
    { text: "Interior Surfaces & Plastics Cleaned with Steaming" },
    { text: "Thorough Floor Mats Cleaning with Steaming" },
    { text: "Meticulous Door Panels & Jambs Cleaning with Steaming" },
    { text: "Surfaces and Plastics Cleaned & Steamed" },
    { text: "Fabric Seats Vacuuming & Steaming" },
    { text: "Leather Seats Wiping, Steaming & Conditioning" },
    { text: "Vents, Cracks & Crevices Cleaning & Steaming" },
    { text: "Interior UV & Dust Protection Application" },
    { text: "Crystal Clear Glasses & Mirrors Cleaning" },
  ],
  link: ULTIMATE_INTERIOR_PATH,
  shortDescription:
    `Experience the luxury of Spotless Detailing's Ultimate Interior service. \n\nFrom ${ultimateInteriorPrices[0]}. Up to 4 hours.`,
  description:
    "Experience the luxury of Spotless Detailing's Ultimate Interior service. We use the latest techniques and top-of-the-line products to give your car a deep clean and protect it from the elements. Our detailing technicians are highly trained and experienced in providing superior service, making sure your car looks and feels like new. Schedule an appointment today and let us turn your car into a masterpiece.",
  price: ultimateInteriorPrices,
  carsSize: carTypes,
  duration: ["2 hours 30 mins", "3 hours", "3 hours 30 mins"],
  background: " ",
};

export const maintenanceFullDetail = {
  title: "Maintenance Detailing",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_399584907.jpeg",
  alt: "Maintenance Full Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Vehicle Hand Washed" },
    { text: "Gas Cap Cleaned" },
    { text: "Tires & Wheels Cleaned" },
    { text: "Tire Shine Applied" },
    { text: "Bodywork Air Dried and Finished with Towel" },
    { text: "Windows Cleaned" },
  ],
  interiorServices: [
    { text: "Carpet & Mats Vacuumed" },
    { text: "Fabric Seats Vacuumed" },
    { text: "Leather Seats Wiped" },
    { text: "Door Panels & Jambs Cleaned" },
    { text: "Interior Surfaces & Plastics Cleaned" },
    { text: "Cup Holders Cleaned" },
    { text: "Glasses & Mirrors Cleaned" },
  ],
  price: ["$155", "$175", "$195"],
  carsSize: carTypes,
  link: MAINTENANCE_FULL_DETAILING_PATH,
  shortDescription:
    "This service designed as maintenance detailing for cars which was detailed not more that 4 weeks ago. Includes: Hand wash and dry of body and wheels, tire shine, interior vacuum, cleaned mats, doors and jambs wiping, seats, interior surfaces and plastics wiping, and spotless glass and mirrors. \nFrom $155. Up to 2.5 hours.",
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish. We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.",
  duration: ["2 hours", "2 hours 15 mins", "2 hours 30 mins"],
  background: " ",
};

export const expressFullDetail = {
  title: "Express Detail",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_243325383.jpeg",
  alt: "Express Full Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: expressExterior.exteriorServices,
  interiorServices: expressInterior.interiorServices,
  price: expressFullDetailPrices,
  carsSize: carTypes,
  link: EXPRESS_FULL_DETAILING_PATH,
  shortDescription: `Professional-grade detailing without the wait with Spotless Detailing’s Express Full Detail Package. \n\nFrom ${expressFullDetailPrices[0]}. Up to 4.5 hours.`,
  description:
    "Experience the Ultimate Car Care with Spotless Detailing’s Express Full Detail! This luxurious service includes a complete interior and exterior cleaning, deep vacuum, hand wax, and more—all done in just 3-4 hours! Get your car looking its absolute best with our professional team giving it the attention it truly deserves.",
  duration: ["4 hours", "4 hours 15 mins", "4 hours 30 mins"],
  background: "gray",
};

export const ultimateFullDetail = {
  title: "Ultimate Detail",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/pexels-khunkorn-laowisit-1359149-5233285.jpg",
  alt: "Ultimate Full Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: ultimateExterior.exteriorServices,
  interiorServices: ultimateInterior.interiorServices,
  price: ultimateFullDetailPrices,
  carsSize: carTypes,
  link: ULTIMATE_FULL_DETAILING_PATH,
  shortDescription:
    `Complete car rejuvenation, exterior and interior detailing, top-of-the-line products. \n\nFrom ${ultimateFullDetailPrices[0]}. Up to 7 hours.`,
  description:
    "Complete car rejuvenation, exterior and interior detailing, top-of-the-line products. Experience the executive car rejuvenation with Spotless Detailing's Ultimate Full Detail. This top-of-the-line service includes exterior and interior detailing to bring your car back to showroom-quality shine. Our technicians use only the best products and ensure every square inch of your car is looking its best.",
  duration: ["6 hours", "6 hours 30 mins", "7 hours"],
  background: "bg-gray",
};

export const exteriorDetailingServices = [expressExterior, ultimateExterior];
export const interiorDetailingServices = [expressInterior, ultimateInterior];
export const fullDetailingServices = [expressFullDetail, ultimateFullDetail];

export const ceramicCoatingServices = [ceramicCoating];

export const mobileDetailingServices = [
  expressExterior,
  expressInterior,
  expressFullDetail,
  ultimateExterior,
  ultimateInterior,
  ultimateFullDetail,
];

export const mobileDetailingService = {
  title: "Mobile Detailing",
  shortDescription:
    "Mobile detailing is a fast and convenient way to keep your car looking its best. Professional auto detailing techs will come to your home or office in Raleigh and detail your car using premium products that will make it look like new again.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_198465715.jpeg",
  link: MOBILE_DETAILING_PATH,
  options: mobileDetailingServices,
};

export const ceramicCoatingService = {
  title: "Ceramic Coating",
  shortDescription:
    "Ceramic coatings are a durable, long lasting form of paint protection that can be applied to your vehicle's clear coat finish. These materials provide more gloss than waxes and sealants while also providing an additional layer to better protect your cars paint and clear coat.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  link: CERAMIC_COATING_PATH,
  options: ceramicCoatingServices,
};

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
  title: "Full Car Detailing",
  description:
    "Our full detailing packages include a thorough hand wash, decontamination, deep cleaning, vacuuming, and upholstery care, leaving your exterior and interior both shining, and comfortable.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_273206890.jpeg",
  link: MOBILE_FULL_DETAILING_PATH,
  options: fullDetailingServices,
};

export const detailingServices = [
  // exteriorDetailingService,
  // interiorDetailingService,
  // fullDetailingService,
  mobileDetailingService,
  ceramicCoatingService,
];

export const detailingPackages = [
  exteriorDetailingService,
  interiorDetailingService,
  fullDetailingService,
];
