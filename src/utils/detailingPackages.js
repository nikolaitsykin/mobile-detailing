import {
  CERAMIC_COATING_BOOKING_PATH,
  CERAMIC_COATING_PATH,
  EXPRESS_EXTERIOR_BOOKING_PATH,
  EXPRESS_EXTERIOR_PATH,
  EXPRESS_FULL_DETAILING_BOOKING_PATH,
  EXPRESS_FULL_DETAILING_PATH,
  EXPRESS_INTERIOR_BOOKING_PATH,
  EXPRESS_INTERIOR_PATH,
  MAINTENANCE_FULL_DETAILING_PATH,
  MOBILE_DETAILING_PATH,
  MOBILE_EXTERIOR_DETAILING_PATH,
  MOBILE_FULL_DETAILING_PATH,
  MOBILE_INTERIOR_DETAILING_PATH,
  ODOR_REMOVAL_BOOKING_PATH,
  ODOR_REMOVAL_PATH,
  ONE_STEP_CERAMIC_COATING_BOOKING_PATH,
  SEATS_SHAMPOO_BOOKING_PATH,
  SHAMPOO_PATH,
  THREE_YEARS_CERAMIC_PATH,
  TWO_STEP_CERAMIC_COATING_BOOKING_PATH,
  ULTIMATE_EXTERIOR_BOOKING_PATH,
  ULTIMATE_EXTERIOR_PATH,
  ULTIMATE_FULL_DETAILING_BOOKING_PATH,
  ULTIMATE_FULL_DETAILING_PATH,
  ULTIMATE_INTERIOR_BOOKING_PATH,
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
      "Third-row SUVs, large trucks, and vans (e.g., Chevy Suburban, Ford F-150, Honda Odyssey)",
  },
];

const carTypes = [
  "Sedans, compact cars, and coupes (e.g., Subaru Impreza, Kia Soul, Ford Mustang)",
  "SUVs, crossovers, and small trucks (e.g., Kia Sorento, Hyundai Tucson, Toyota Tacoma)",
  "Third-row SUVs, large trucks, and vans (e.g., Chevy Suburban, Ford F-150, Honda Odyssey)",
];

const expressExteriorPrices = ["$125", "$145", "$165"];
const expressInteriorPrices = ["$165", "$185", "$205"];
const expressFullDetailPrices = ["$225", "$260", "$295"];
const ultimateExteriorPrices = ["$175", "$195", "$215"];
const ultimateInteriorPrices = ["$235", "$255", "$275"];
const odorRemovalPrices = ["$205", "225", "$245"];
const shampooPrices = ["$150", "$175", "$200"];
const ultimateFullDetailPrices = ["$395", "$430", "$465"];
const threeYearsCeramicCoatingPrices = ["$595", "$695", "$795"];
const oneStepCeramicCoatingPrices = ["$995", "$1095", "$1195"];
const twoStepCeramicCoatingPrices = ["$1195", "$1295", "$1395"];
const oneStepPaintCorrectionPrices = ["$495", "$595", "$695"];
const twoStepPaintCorrectionPrices = ["$695", "$795", "$895"];
const paintEnchancementPrices = ["$345", "$445", "$545"];

export const expressExterior = {
  title: "Express Exterior Detailing",
  type: "Exterior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/car-front-foglight.jpg",
  alt: "Express Exterior Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Wheels and tires thoroughly cleaned and dressed" },
    { text: "Full hand wash using foam to lift dirt safely" },
    { text: "Gas cap and fuel area carefully cleaned" },
    { text: "Dried with air blowers and soft towels to avoid scratches" },
    { text: "Glass and mirrors cleaned for clear visibility" },
    { text: "Protective wax for up to 3 months shine and protection" },
    { text: "Hand-polished to enhance smoothness and finish" },
  ],
  price: expressExteriorPrices,
  carsSize: carTypes,
  link: EXPRESS_EXTERIOR_PATH,
  bookingLink: EXPRESS_EXTERIOR_BOOKING_PATH,
  shortDescription: `Experience the shine of a professional car detailing with Spotless Detailing’s Express Exterior service. \n\nFrom ${expressExteriorPrices[0]}. Up to 2 hours.`,
  description:
    "Detail your car in a flash with Spotless Detailing's Express Exterior. We use high-quality detailing products designed to rapidly and effectively remove dirt, grime, and other pollutants from the exterior of your car. Our experienced team of professionals will have your car look like new again.",
  duration: ["1 hour", "1 hour 15 mins", "1 hour 30 mins"],
  background: " ",
  suggestionHeader: "Good for a quick refresh and adding shine.",
  suggestion:
    "Perfect if your car needs a fast but thorough clean — ideal before a trip, an event, or just when you want it looking sharp without a full detail.",
};

export const ultimateExterior = {
  title: "Ultimate Exterior Detailing",
  type: "Exterior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_273206890.jpeg",
  alt: "Ultimate Exterior Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Wheels and tires cleaned and dressed" },
    { text: "Full hand wash with foam to safely lift dirt" },
    { text: "Gas cap and fuel area cleaned" },
    { text: "Blow-dried and towel-dried to prevent water spots" },
    { text: "Windows cleaned streak free" },
    { text: "Paint decontaminated with clay bar treatment" },
    { text: "Bugs removed with chemical treatment" },
    { text: "Ceramic sealant for up to 6 months of protection" },
    { text: "Paint polished by hand to boost shine" },
  ],
  price: ultimateExteriorPrices,
  carsSize: carTypes,
  link: ULTIMATE_EXTERIOR_PATH,
  bookingLink: ULTIMATE_EXTERIOR_BOOKING_PATH,
  shortDescription: `Get your car looking new again with Spotless Detailing’s Ultimate Exterior service. \n\nFrom ${ultimateExteriorPrices[0]}. Up to 2 hours 45 mins.`,
  description:
    "Get your car looking like new again with Spotless Detailing’s Ultimate Exterior service. Our professional team of detailers will bring your car back to its showroom shine with a full exterior detail. We’ll wash, clay and finish up with a ceramic based paint sealant for a deep, glossy shine. Make sure your car is looking its best with our Ultimate Exterior package.",
  duration: ["2 hours", "2 hours 15 mins", "2 hours 30 mins"],
  suggestionHeader: "Best for deep cleaning and long-lasting protection.",
  suggestion:
    "Great if you want to go beyond the basics — includes clay bar, bug and tar removal, and ceramic sealant for added shine and protection.",
};

export const threeYearsceramicCoating = {
  title: "3 year Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  alt: "Ceramic Coating Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Thorough exterior detailing" },
    { text: "Bug and tar removal (if applicable)" },
    { text: "Clay bar paint decontamination " },
    { text: "Iron decontamination" },
    { text: "Paint preparation " },
    { text: "Application of ceramic to paint and body work" },
    { text: "Exterior vinyl and plastics coated" },
    { text: "Headlights and taillights coated" },
  ],
  price: threeYearsCeramicCoatingPrices,
  carsSize: carTypes,
  link: THREE_YEARS_CERAMIC_PATH,
  bookingLink: CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Superior hydrophobic, shiny and resistant protection for your vehicle paint. Includes: Ultimate Exterior service, and 3 years ceramic coating application for long-lasting protection.`,
  description:
    "To prepare for a ceramic coating we begin with a full hand wash and dry, followed by tires and wheels detailing. Then we perform a clay bar treatment, iron decontamination and bug & tar removal. We finish with a durable ceramic coating for extended protection, lasting up to 3 years, ensuring long-lasting defense against various contaminants.",
  duration: ["5 hours", "5 hours 30 mins", "6 hours"],
};

export const oneStepCeramicCoating = {
  title: "One Step Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/1398-hero-what-is-ceramic-coating.avif",
  alt: "Ceramic Coating Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Thorough exterior detailing" },
    { text: "Bug and tar removal (if applicable)" },
    { text: "Clay bar paint decontamination " },
    { text: "Iron decontamination" },
    { text: "Paint preparation " },
    { text: "One-step Polishing to a high-gloss finish" },
    { text: "Application of ceramic to paint and body work" },
    { text: "Exterior vinyl and plastics coated" },
    { text: "Headlights and taillights coated" },
  ],
  price: oneStepCeramicCoatingPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: ONE_STEP_CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Get the ultimate protection for your car with Step 1 Polishing followed by 3 years Ceramic Coating.`,
  description:
    "Get long-lasting protection and a stunning finish with our 1-Step Paint Correction plus 3-Year Ceramic Coating. We polish the paint to remove light defects and restore depth and gloss. Then, we lock in that finish with a professional-grade ceramic coating that shields your vehicle from UV rays, water spots, dirt, and daily wear. It enhances shine, repels grime, and makes maintenance effortless.This is the perfect package to revive and protect your car’s appearance for years to come.  ",
  duration: ["6 hours", "6 hours 30 mins", "7 hours"],
};
export const twoStepCeramicCoating = {
  title: "Two Step Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/What-If-It-Rains-After-Getting-A-Ceramic-Coating-Applied-Daylans-Mobile-Detailing-Sea-Girt-NJ-1.jpg.webp",
  alt: "Ceramic Coating Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Thorough exterior detailing" },
    { text: "Bug and tar removal (if applicable)" },
    { text: "Clay bar paint decontamination " },
    { text: "Iron decontamination" },
    { text: "Paint preparation " },
    { text: "One-step Polishing to a high-gloss finish" },
    { text: "Application of ceramic to paint and body work" },
    { text: "Exterior vinyl and plastics coated" },
    { text: "Headlights and taillights coated" },
  ],
  price: twoStepCeramicCoatingPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: TWO_STEP_CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Take your car's protection to the next level with Step 2 Polishing followed by Ceramic Coating from Spotless Auto Detailing.`,
  description:
    "Take your car's protection to the next level with Step 2 Ceramic Coating from Spotless Auto Detailing. Our ceramic coating is a long-term nano-ceramic coating that provides a strong layer of protection for your car's paint. This coating will create a durable, hydrophobic layer that resists contamination, scratches, and fading, keeping your car looking its best.",
  duration: ["7 hours", "7 hours 30 mins", "8 hours"],
};
export const oneStepPaintCorrection = {
  title: "One Step Paint Correction",
  type: "Paint Correction",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  alt: "Paint Correction Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Exterior detailing" },
    { text: "Paint preparation" },
    { text: "Polishing to a high-gloss finish" },
    { text: "3 years Ceramic Coating Applied" },
  ],
  price: oneStepPaintCorrectionPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: TWO_STEP_CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Polish and restore paintwork with Spotless Auto Detailing's Step 1 Paint Correction.`,
  description:
    "Step up your car's shine with Spotless Auto Detailing's Step 1 Paint Correction service. This service includes a detailed clay bar, iron remover to remove surface contaminants, and polishing to remove scratches and minor defects from your car's paint. Afterwards, your car will look better than ever with a deep, glossy shine. Get the best finish for your car with Spotless Auto Detailing.",
  duration: ["8 hours", "8 hours 30 mins", "9 hours"],
};

export const twoStepPaintCorrection = {
  title: "Two Step Paint Correction",
  type: "Paint Correction",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  alt: "Paint Correction Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Exterior detailing" },
    { text: "Paint preparation" },
    { text: "Cutting compound to remove any scratches and swirls" },
    { text: "Polishing to a high-gloss finish" },
    { text: "3 years Ceramic Coating Applied" },
  ],
  price: twoStepPaintCorrectionPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Polish and refine your car’s paint with Spotless Auto Detailing’s Step 2 Paint Correction.`,
  description:
    "Not all paint imperfections can be solved with just polishing. Our 2-Step Paint Correction at Spotless Auto Detailing is designed for vehicles that need more than a quick touch-up. This advanced process removes deeper defects, revives faded paint, and restores the rich, vibrant color your car once had. It’s the difference between “clean” and jaw-dropping shine. Ready to bring your paint back to life? Book your appointment today and turn heads wherever you go.",
  duration: ["7 hours", "7 hours 30 mins", "8 hours"],
};

export const paintEnchancement = {
  title: "Paint Enchancement",
  type: "Paint Correction",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  alt: "Paint Correction Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "Thorough exterior detailing" },
    { text: "Bug and tar removal (if applicable)" },
    { text: "Clay bar paint decontamination " },
    { text: "Iron decontamination" },
    { text: "Paint preparation " },
    { text: "Machine polishing" },
    { text: "6 months Ceramic Sealant" },
  ],
  price: paintEnchancementPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Boost your car's shine with Spotless Auto Detailing's Paint Enchancement.`,
  description:
    "If your car’s paint looks dull or tired but doesn’t need full correction, a Paint Enhancement is the perfect in-between. This service uses a single-stage polishing process to boost gloss, deepen color, and reduce light swirls—giving your vehicle a noticeably cleaner, richer finish without the time or cost of multi-step correction. It’s ideal before a coating or just to refresh the look.",
  duration: ["3 hours", "3 hours 30 mins", "4 hours"],
};

export const expressInterior = {
  title: "Express Interior Detailing",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/man-polish-salon-car-garage_1157-36595.jpg",
  alt: "Express Interior Detailing Services in Raleigh | Spotless Auto Detailing.",
  interiorServices: [
    { text: "Interior and trunk vacuumed" },
    { text: "Interior plastics and surfaces cleaned" },
    { text: "Floor mats shampooed" },
    { text: "Door panels and jambs cleaned" },
    { text: "Seats vacuumed and cleaned" },
    { text: "Dashboard and console cleaned" },
    { text: "Vents and small areas detailed" },
    { text: "Glass and mirrors cleaned" },
  ],
  link: EXPRESS_INTERIOR_PATH,
  bookingLink: EXPRESS_INTERIOR_BOOKING_PATH,
  shortDescription: `Get your vehicle interior looking refreshed and shiny with Spotless Detailing’s Express Interior service.\n\nFrom ${expressInteriorPrices[0]}. Up to 2.5 hours.`,
  description:
    "Give your car's interior a quick refresh with Spotless Detailing's Express Interior. This is meant to get your car in its best condition in an instant and involves a full vacuum of all the interior surfaces, thorough wipe-down of all plastics, leather, and vinyl, and window wash. Give your car a like-new look in an instant with this express service.\n\n",
  price: expressInteriorPrices,
  carsSize: carTypes,
  duration: ["2 hours", "2 hours 15 mins", "2 hours 30 mins"],
  suggestionHeader: "Great for light interior cleanup and tidy-up.",
  suggestion:
    "Il if the inside of your car just needs some care — vacuuming, wiping down surfaces, and removing dust from the interior.",
};

export const ultimateInterior = {
  title: "Ultimate Interior Detailing",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_539555302.jpeg",
  alt: "Ultimate Interior Detailing Services in Raleigh | Spotless Auto Detailing.",
  interiorServices: [
    { text: "Interior and trunk carpet vacuumed and steamed" },
    { text: "Interior plastics and surfaces cleaned with steaming" },
    { text: "Floor mats cleaned with steaming" },
    { text: "Door panels and jambs cleaned with steaming" },
    { text: "Surfaces and plastics cleaned and steamed" },
    { text: "Seats vacuumed, wiped and steamed" },
    { text: "Vents, cracks, and crevices cleaned and steamed" },
    { text: "UV and dust protection applied to interior" },
    { text: "Leather seats and panels conditioned to prevent cracking" },
    { text: "Glass and mirrors cleaned" },
  ],
  link: ULTIMATE_INTERIOR_PATH,
  bookingLink: ULTIMATE_INTERIOR_BOOKING_PATH,
  shortDescription: `Experience the luxury of Spotless Detailing's Ultimate Interior service.`,
  description:
    "Give your car the care it deserves with our Ultimate Interior Detailing. We use high-quality tools and materials to clean deep into every corner of your vehicle and help protect it from daily wear. Our detailers are well-trained and have years of hands-on experience making cars look and feel like new. Schedule your appointment today and see how great your car can feel inside.",
  price: ultimateInteriorPrices,
  carsSize: carTypes,
  duration: ["2 hours 30 mins", "3 hours", "3 hours 30 mins"],
  suggestionHeader: "Perfect for deep cleaning and restoring the interior.",
  suggestion:
    "If your car’s interior feels worn, stained, or just overdue for serious attention — this is the one. Deep steam cleaning, stain treatment, leather care, and more.",
};

export const odorRemoval = {
  title: "Odor Removal",
  type: "Interior Service",
  image: "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/7.webp",
  alt: "Odor Removal Services in Raleigh | Spotless Auto Detailing.",
  interiorServices: [
    { text: "Headliner Steam Cleaning" },
    { text: "Carpet Shampoo/Extraction" },
    { text: "Seats Shampoo/Extraction" },
    { text: "Ozone Odor Removal" },
  ],
  link: ODOR_REMOVAL_PATH,
  bookingLink: ODOR_REMOVAL_BOOKING_PATH,
  shortDescription: `Eliminate stubborn smells with our deep Odor Removal treatment. \n\nFrom ${odorRemovalPrices[0]}. Up to 4 hours.`,
  description:
    "We go beyond surface cleaning to eliminate odors at the source. Our process includes enzyme-based cleaners to break down organic residue, steam and deep shampooing to lift contaminants from carpets, seats, and headliners, and a hydrogen peroxide-based finisher to sanitize and neutralize lingering odors. For severe cases, we finish with a professional ozone treatment to fully purify the cabin air. Our trained technicians don’t just mask the smell — they eliminate it. Schedule your appointment today and enjoy a car that smells as clean as it looks.",
  price: odorRemovalPrices,
  carsSize: carTypes,
  duration: ["2 hours", "2 hours 15 mins", "2 hours 30 mins"],
  suggestionHeader: "Great for getting rid of strong or stubborn smells.",
  suggestion:
    "Whether it’s smoke, food, pets, or musty odors — this treatment targets and neutralizes smells at the source, leaving your car’s interior clean and fresh.",
};

export const steamAndShampoo = {
  title: "Steam and Shampoo",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_262763320.avif",
  alt: "Steam and Shampoo Seats Services in Raleigh | Spotless Auto Detailing.",
  interiorServices: [
    { text: "Carpet Shampoo/Extraction" },
    { text: "Seats Shampoo/Extraction" },
  ],
  link: SHAMPOO_PATH,
  bookingLink: SEATS_SHAMPOO_BOOKING_PATH,
  shortDescription: `Refresh and restore your upholstery with deep steam and shampoo cleaning. \n\nFrom ${shampooPrices[0]}. Up to 3 hours.`,
  description:
    "Our upholstery steam and shampoo service is designed to lift embedded dirt, stains, and odors from your seats or carpet. Using high-temperature steam and premium fabric-safe shampoo, we break down grime and extract deep-seated contaminants, leaving your seats or carpet looking cleaner and smelling fresher. Ideal for cloth seats and carpet needing a serious refresh. Book now to bring life back to your interior.",
  price: shampooPrices,
  carsSize: carTypes,
  duration: ["1 hour", "1 hour 15 mins", "1 hour 30 mins"],
  suggestionHeader: "Perfect for deep-cleaning stained or smelly upholstery.",
  suggestion:
    "Whether it’s food spills or dropings, dirt or pet messes — this service lifts stains and refreshes your vehicle upholstery using high-heat steam and deep shampoo extraction.",
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
  price: ["$165", "$180", "$195"],
  carsSize: carTypes,
  link: MAINTENANCE_FULL_DETAILING_PATH,
  shortDescription:
    "This service designed as maintenance detailing for cars which was detailed not more that 4 weeks ago. Includes: Hand wash and dry of body and wheels, tire shine, interior vacuum, cleaned mats, doors and jambs wiping, seats, interior surfaces and plastics wiping, and spotless glass and mirrors. \nFrom $155. Up to 2.5 hours.",
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish. We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.",
  duration: ["2 hours", "2 hours 15 mins", "2 hours 30 mins"],
  suggestionHeader: "Best for a keeping your car looking its best.",
  suggestion:
    "A full vehicle clean, inside and out. Available for cars which were detailed not more than 4 weeks ago by Spotless Detailing.",
};

export const expressFullDetail = {
  title: "Express Full Detailing",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_243325383.jpeg",
  alt: "Express Full Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: expressExterior.exteriorServices,
  interiorServices: expressInterior.interiorServices,
  price: expressFullDetailPrices,
  carsSize: carTypes,
  link: EXPRESS_FULL_DETAILING_PATH,
  bookingLink: EXPRESS_FULL_DETAILING_BOOKING_PATH,
  shortDescription: `Professional-grade detailing without the wait with Spotless Detailing’s Express Full Detail Package. \n\nFrom ${expressFullDetailPrices[0]}. Up to 4.5 hours.`,
  description:
    "Experience the Ultimate Car Care with Spotless Detailing’s Express Full Detail! This luxurious service includes a complete interior and exterior cleaning, deep vacuum, hand wax, and more—all done in just 3-4 hours! Get your car looking its absolute best with our professional team giving it the attention it truly deserves.",
  duration: ["4 hours", "4 hours 15 mins", "4 hours 30 mins"],
  suggestionHeader: "Best for a quick inside-and-out reset.",
  suggestion:
    "A full vehicle clean, inside and out, when you want everything looking fresh but don’t need deep restoration.",
};

export const ultimateFullDetail = {
  title: "Ultimate Full Detailing",
  type: "Full Detailing",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/pexels-khunkorn-laowisit-1359149-5233285.jpg",
  alt: "Ultimate Full Detailing Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: ultimateExterior.exteriorServices,
  interiorServices: ultimateInterior.interiorServices,
  price: ultimateFullDetailPrices,
  carsSize: carTypes,
  link: ULTIMATE_FULL_DETAILING_PATH,
  bookingLink: ULTIMATE_FULL_DETAILING_BOOKING_PATH,
  shortDescription: `Complete car rejuvenation, exterior and interior detailing, top-of-the-line products. \n\nFrom ${ultimateFullDetailPrices[0]}. Up to 7 hours.`,
  description:
    "Complete car rejuvenation, exterior and interior detailing, top-of-the-line products. Experience the executive car rejuvenation with Spotless Detailing's Ultimate Full Detail. This top-of-the-line service includes exterior and interior detailing to bring your car back to showroom-quality shine. Our technicians use only the best products and ensure every square inch of your car is looking its best.",
  duration: ["6 hours", "6 hours 30 mins", "7 hours"],
  suggestionHeader:
    "Like-new, inside and out.Top-to-bottom restoration — our most complete detail.",
  suggestion:
    "Best for anyone who wants their car looking and feeling as close to new as possible, inside and out. Great for resale, special occasions, or just treating yourself.",
};

export const exteriorDetailingServices = [expressExterior, ultimateExterior];
export const interiorDetailingServices = [
  expressInterior,
  ultimateInterior,
  odorRemoval,
  steamAndShampoo,
];
export const fullDetailingServices = [
  expressFullDetail,
  ultimateFullDetail,
  maintenanceFullDetail,
];

export const ceramicCoatingServices = [
  threeYearsceramicCoating,
  oneStepCeramicCoating,
  twoStepCeramicCoating,
];

export const paintCorrectionServices = [
  paintEnchancement,
  oneStepPaintCorrection,
  twoStepPaintCorrection,
];

export const mobileDetailingServices = [
  expressFullDetail,
  ultimateFullDetail,
  expressExterior,
  expressInterior,
  ultimateExterior,
  ultimateInterior,
  steamAndShampoo,
  odorRemoval,
];

export const mobileDetailingService = {
  title: "Mobile Detailing",
  shortDescription:
    "Mobile detailing is a convenient, time-saving way to maintain your car’s appearance without leaving your driveway. Our professional auto detailers come to your home or office, using premium, eco-friendly products to restore your vehicle’s shine and protect its finish—making it look like new again.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_198465715.jpeg",
  link: MOBILE_DETAILING_PATH,
  options: mobileDetailingServices,
};

export const ceramicCoatingService = {
  title: "Ceramic Coating",
  shortDescription:
    "Ceramic coatings offer long-lasting, high-performance paint protection for your vehicle's clear coat. Applied by professional detailers, ceramic coatings deliver superior gloss and shine compared to traditional waxes or sealants, while creating a strong, protective layer that shields your car’s paint from UV rays, oxidation, and environmental contaminants.",
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
