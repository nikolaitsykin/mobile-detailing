import {
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
  ONE_STEP_PAINT_CORRECTION_BOOKING_PATH,
  PAINT_CORRECTION_PATH,
  PAINT_ENHANCEMENT_BOOKING_PATH,
  SEATS_SHAMPOO_BOOKING_PATH,
  SHAMPOO_PATH,
  SIX_YEARS_CERAMIC_COATING_BOOKING_PATH,
  TEN_YEARS_CERAMIC_COATING_BOOKING_PATH,
  THREE_YEARS_CERAMIC_COATING_BOOKING_PATH,
  THREE_YEARS_CERAMIC_PATH,
  TWO_STEP_PAINT_CORRECTION_BOOKING_PATH,
  ULTIMATE_EXTERIOR_BOOKING_PATH,
  ULTIMATE_EXTERIOR_PATH,
  ULTIMATE_FULL_DETAILING_BOOKING_PATH,
  ULTIMATE_FULL_DETAILING_PATH,
  ULTIMATE_INTERIOR_BOOKING_PATH,
  ULTIMATE_INTERIOR_PATH,
} from "./constants";

export const carsSizes = [
  {
    title: "Standard ",
    description: "Sedans, and coupes (e.g., Subaru Impreza, Ford Mustang)",
  },
  {
    title: "Mid-Size",
    description: "SUVs, and small trucks (e.g., Hyundai Tucson, Toyota Tacoma)",
  },
  {
    title: "Large/XL ",
    description:
      "Third-row SUVs and vans (e.g., Chevy Suburban, Honda Odyssey)",
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
const maintenanceFullDetailPrices = ["$140", "$150", "$160"];
const ultimateExteriorPrices = ["$175", "$195", "$215"];
const ultimateInteriorPrices = ["$235", "$255", "$275"];
const odorRemovalPrices = ["$205", "225", "$245"];
const shampooPrices = ["$150", "$175", "$200"];
const ultimateFullDetailPrices = ["$395", "$430", "$465"];
const threeYearsCeramicCoatingPrices = ["$595", "$695", "$795"];
const sixYearsCeramicCoatingPrices = ["$795", "$895", "$995"];
const tenYearsCeramicCoatingPrices = ["$995", "$1095", "$1195"];
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
    { text: "• Wheels and tires thoroughly cleaned and dressed" },
    { text: "• Full hand wash using foam to lift dirt safely" },
    { text: "• Gas cap and fuel area carefully cleaned" },
    { text: "• Dried with air blowers and soft towels to avoid scratches" },
    { text: "• Glass and mirrors cleaned for clear visibility" },
    { text: "• Protective wax for up to 3 months shine and protection" },
    { text: "• Hand-polished to enhance smoothness and finish" },
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
    { text: "Evetrything in Express Service:", bold: true },
    { text: "• Wheels and tires cleaned and dressed" },
    { text: "• Full hand wash with foam to safely lift dirt" },
    { text: "• Gas cap and fuel area cleaned" },
    { text: "• Blow-dried and towel-dried to prevent water spots" },
    { text: "• Windows cleaned streak free" },
    { text: "Plus:", bold: true },
    { text: "• Paint decontaminated with clay bar treatment" },
    { text: "• Bugs removed with chemical treatment" },
    { text: "• Ceramic sealant for up to 6 months of protection" },
    { text: "• Paint polished by hand to boost shine" },
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
  title: "3 Year Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_799868847.jpeg",
  alt: "Ceramic Coating Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "• Thorough exterior detailing" },
    { text: "• Bug and tar removal (if applicable)" },
    { text: "• Clay bar paint decontamination " },
    { text: "• Iron decontamination" },
    { text: "• Paint preparation " },
    { text: "• Application of ceramic to paint and body work" },
    { text: "• Exterior vinyl and plastics coated" },
    { text: "• Headlights and taillights coated" },
  ],
  additional: [
    { text: "For a best results add Paint Correction with up to $200 off" },
  ],
  price: threeYearsCeramicCoatingPrices,
  carsSize: carTypes,
  link: THREE_YEARS_CERAMIC_PATH,
  bookingLink: THREE_YEARS_CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Superior hydrophobic, shiny and resistant protection for your vehicle paint. Includes: Exterior detailing, paint preparation, and 3 years ceramic coating application for long-lasting protection.`,
  description:
    "Protect your vehicle’s finish with Spotless Auto Detailing’s 3 Year Ceramic Coating. This durable coating forms a glossy, water-repelling barrier that shields against UV rays, road grime, and everyday contaminants. It’s the perfect entry into long-term protection, keeping your car easier to clean and looking sharp year after year.",
  duration: ["5 hours", "5 hours 30 mins", "6 hours"],
};

export const sixYearsCeramicCoating = {
  title: "6 Year Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/1398-hero-what-is-ceramic-coating.avif",
  alt: "Ceramic Coating Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "• Thorough exterior detailing" },
    { text: "• Bug and tar removal (if applicable)" },
    { text: "• Clay bar paint decontamination " },
    { text: "• Iron decontamination" },
    { text: "• Paint preparation " },
    { text: "• Application of ceramic to paint and body work" },
    { text: "• Exterior vinyl and plastics coated" },
    { text: "• Headlights and taillights coated" },
  ],
  additional: [
    { text: "For a best results add Paint Correction with up to $200 off" },
  ],
  price: sixYearsCeramicCoatingPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: SIX_YEARS_CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Enhanced hydrophobic, glossy, and durable protection for your vehicle paint. Includes: Exterior detailing, paint preparation, and 6 Year ceramic coating application for extended protection.`,
  description:
    "Get long-lasting protection with Spotless Auto Detailing’s 6-Year Ceramic Coating. This advanced nano-ceramic layer creates a tough, glossy shield that bonds to your vehicle’s paint. It delivers strong hydrophobic properties while resisting UV rays, chemicals, and light scratches—keeping your car’s finish shining and protected for years to come.",
  duration: ["6 hours", "6 hours 30 mins", "7 hours"],
};
export const tenYearsCeramicCoating = {
  title: "10 Years Ceramic Coating",
  type: "Ceramic Coating",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/What-If-It-Rains-After-Getting-A-Ceramic-Coating-Applied-Daylans-Mobile-Detailing-Sea-Girt-NJ-1.jpg.webp",
  alt: "Ceramic Coating Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "• Thorough exterior detailing" },
    { text: "• Bug and tar removal (if applicable)" },
    { text: "• Clay bar paint decontamination " },
    { text: "• Iron decontamination" },
    { text: "• Paint preparation " },
    { text: "• Application of ceramic to paint and body work" },
    { text: "• Exterior vinyl and plastics coated" },
    { text: "• Headlights and taillights coated" },
  ],
  additional: [
    { text: "For a best results add Paint Correction with $150 off" },
  ],
  price: tenYearsCeramicCoatingPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: TEN_YEARS_CERAMIC_COATING_BOOKING_PATH,
  shortDescription: `Ultimate hydrophobic, mirror-like shine and maximum resistance for your vehicle paint. Includes: Exterior detailing, paint preparation, and 10+ years ceramic coating application with lifetime protection.`,
  description:
    "Experience the ultimate in long-term protection with Spotless Auto Detailing’s 10 Year Ceramic Coating. This premium nano-ceramic shield is our most durable option, designed to bond permanently with your vehicle’s paint. It forms a rock-solid, hydrophobic barrier that resists scratches, UV damage, chemicals, and environmental contaminants—keeping your car’s finish deep, glossy, and protected for a decade",
  duration: ["7 hours", "7 hours 30 mins", "8 hours"],
};
export const oneStepPaintCorrection = {
  title: "One Step Paint Correction",
  type: "Paint Correction",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/Paint-Buffer-768x512.avif",
  alt: "Paint Correction Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "• Thorough exterior detailing" },
    { text: "• Bug and tar removal (if applicable)" },
    { text: "• Clay bar paint decontamination " },
    { text: "• Iron decontamination" },
    { text: "• Paint preparation " },
    { text: "• One-step paint correction for high-gloss finish" },
    { text: "• 6 months Ceramic Sealant Protection" },
  ],
  additional: [
    { text: "For a best results add Ceramic Coating with $200 off" },
  ],
  price: oneStepPaintCorrectionPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: ONE_STEP_PAINT_CORRECTION_BOOKING_PATH,
  shortDescription: `Take the first step toward perfect paintwork. 1-Step Paint Correction safely removes light swirls, haze, and surface imperfections, restoring clarity and luster to your vehicle’s finish. A noticeable transformation for paint that’s lost its sparkle.`,
  description:
    "Step up your car's shine with Spotless Auto Detailing's 1-Step Paint Correction service. This service includes a detailed clay bar, iron remover to remove surface contaminants, and polishing to remove scratches and minor defects from your car's paint. Afterwards, your car will look better than ever with a deep, glossy shine. Removes 50-70% of imperfections. Get the best finish for your car with Spotless Auto Detailing.",
  duration: ["5 hours", "5 hours 30 mins", "6 hours"],
};

export const twoStepPaintCorrection = {
  title: "Two Step Paint Correction",
  type: "Paint Correction",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/Men-doing-paint-correction-with-polisher-Budget-Auto-Detailing-Burlington-ON-1-1.avif",
  alt: "Paint Correction Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "• Thorough exterior detailing" },
    { text: "• Bug and tar removal (if applicable)" },
    { text: "• Clay bar paint decontamination " },
    { text: "• Iron decontamination" },
    { text: "• Paint preparation " },
    { text: "• Cutting compound to remove any scratches and swirls" },
    { text: "• Two-step polishing to a perfect high-gloss finish" },
    { text: "• 6 months Ceramic Sealant Protection" },
  ],
  additional: [
    { text: "For a best results add Ceramic Coating with $200 off" },
  ],
  price: twoStepPaintCorrectionPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: TWO_STEP_PAINT_CORRECTION_BOOKING_PATH,
  shortDescription: `For those who demand perfection. 2-Step Paint Correction goes deeper, eliminating moderate scratches, oxidation, and blemishes while refining the finish to a flawless, mirror-like gloss. The ultimate process to bring out your paint’s true potential.`,
  description:
    "Not all paint imperfections can be solved with just polishing. Our 2-Step Paint Correction at Spotless Auto Detailing is designed for vehicles that need more than a quick touch-up. This advanced process removes deeper defects, revives faded paint, and restores the rich, vibrant color your car once had. It’s the difference between “clean” and jaw-dropping shine. Removes up to 90% of imperfections. Ready to bring your paint back to life? Book your appointment today and turn heads wherever you go.",
  duration: ["7 hours", "7 hours 30 mins", "8 hours"],
};

export const paintEnchancement = {
  title: "Paint Enchancement",
  type: "Paint Correction",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/process-polishing-white-car-hood-600nw-2459901539.webp",
  alt: "Paint Correction Services in Raleigh | Spotless Auto Detailing.",
  exteriorServices: [
    { text: "• Thorough exterior detailing" },
    { text: "• Bug and tar removal (if applicable)" },
    { text: "• Clay bar paint decontamination " },
    { text: "• Iron decontamination" },
    { text: "• Paint preparation " },
    { text: "• Machine polishing for a gloss finish" },
    { text: "• 6 months Ceramic sealant protection" },
  ],
  additional: [
    { text: "For a best results add Ceramic Coating with $200 off" },
  ],
  price: paintEnchancementPrices,
  carsSize: carTypes,
  link: CERAMIC_COATING_PATH,
  bookingLink: PAINT_ENHANCEMENT_BOOKING_PATH,
  shortDescription: `Give your car’s paint a new lease on life. Our Paint Enhancement service boosts depth, gloss, and smoothness, restoring a vibrant shine that turns heads while adding an extra layer of protection.`,
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
    { text: "• Interior and trunk vacuumed" },
    { text: "• Interior plastics and surfaces cleaned" },
    { text: "• Floor mats shampooed" },
    { text: "• Door panels and jambs cleaned" },
    { text: "• Seats vacuumed and cleaned" },
    { text: "• Dashboard and console cleaned" },
    { text: "• Vents and small areas detailed" },
    { text: "• Glass and mirrors cleaned" },
  ],
  link: EXPRESS_INTERIOR_PATH,
  bookingLink: EXPRESS_INTERIOR_BOOKING_PATH,
  shortDescription: `Get your vehicle interior looking refreshed and shiny with Spotless Detailing’s Express Interior service.\n\nFrom ${expressInteriorPrices[0]}. Up to 1.5 hours.`,
  description:
    "Give your car's interior a quick refresh with Spotless Detailing's Express Interior. This is meant to get your car in its best condition in an instant and involves a full vacuum of all the interior surfaces, thorough wipe-down of all plastics, leather, and vinyl, and window wash. Give your car a like-new look in an instant with this express service.\n\n",
  price: expressInteriorPrices,
  carsSize: carTypes,
  duration: ["2 hours", "2 hours 15 mins", "2 hours 30 mins"],
  suggestionHeader: "Great for light interior cleanup and tidy-up.",
  suggestion:
    "If the inside of your car just needs some care — vacuuming, wiping down surfaces, and removing dust from the interior.",
};

export const ultimateInterior = {
  title: "Ultimate Interior Detailing",
  type: "Interior Service",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_539555302.jpeg",
  alt: "Ultimate Interior Detailing Services in Raleigh | Spotless Auto Detailing.",
  interiorServices: [
    { text: "Evetrything in Express Service:", bold: true },
    { text: "• Interior and trunk carpet vacuumed " },
    { text: "• Interior plastics and surfaces cleaned " },
    { text: "• Floor mats cleaned" },
    { text: "• Door panels and jambs cleaned" },
    { text: "• Surfaces and plastics cleaned" },
    { text: "• Seats vacuumed & wiped" },
    { text: "• Vents, cracks, and crevices cleane" },
    { text: "• Glass and mirrors cleaned" },
    { text: "Plus:", bold: true },
    { text: "• Steam clealing for carpet, seats, and surfaces" },
    { text: "• Floor mats steamed & shampoed" },
    { text: "• UV and dust protection applied to interior" },
    { text: "• Leather seats and panels conditioned to prevent cracking" },
  ],
  link: ULTIMATE_INTERIOR_PATH,
  bookingLink: ULTIMATE_INTERIOR_BOOKING_PATH,
  shortDescription: `Experience the luxury of Spotless Detailing's Ultimate Interior service.\n\nFrom ${ultimateInteriorPrices[0]}. Up to 2.5 hours.`,
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
    { text: "• Headliner Steam Cleaning" },
    { text: "• Carpet Shampoo/Extraction" },
    { text: "• Seats Shampoo/Extraction" },
    { text: "• Ozone Odor Removal" },
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
    { text: "• Carpet Shampoo/Extraction" },
    { text: "• Seats Shampoo/Extraction" },
  ],
  link: SHAMPOO_PATH,
  bookingLink: SEATS_SHAMPOO_BOOKING_PATH,
  shortDescription: `Refresh and restore your upholstery with deep steam and shampoo cleaning. \n\nFrom ${shampooPrices[0]}. Up to 3 hours.`,
  description:
    "Our upholstery steam and shampoo service is designed to lift embedded dirt, stains, mold and odors from your seats or carpet. Using high-temperature steam and premium fabric-safe shampoo, we break down grime and extract deep-seated contaminants, leaving your seats or carpet looking cleaner and smelling fresher. Ideal for cloth seats and carpet needing a serious refresh. Book now to bring life back to your interior.",
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
    { text: "• Vehicle Hand Washed" },
    { text: "• Gas Cap Cleaned" },
    { text: "• Tires & Wheels Cleaned" },
    { text: "• Tire Shine Applied" },
    { text: "• Bodywork Air Dried and Finished with Towel" },
    { text: "• Windows Cleaned" },
  ],
  interiorServices: [
    { text: "• Carpet & Mats Vacuumed" },
    { text: "• Fabric Seats Vacuumed" },
    { text: "• Leather Seats Wiped" },
    { text: "• Door Panels & Jambs Cleaned" },
    { text: "• Interior Surfaces & Plastics Cleaned" },
    { text: "• Cup Holders Cleaned" },
    { text: "• Glasses & Mirrors Cleaned" },
  ],
  price: maintenanceFullDetailPrices,
  carsSize: carTypes,
  link: MAINTENANCE_FULL_DETAILING_PATH,
  shortDescription: `"This service designed as maintenance detailing for cars which was detailed not more that 4 weeks ago. \nFrom ${maintenanceFullDetailPrices[0]}. Up to 2 hours."`,
  description:
    "We start with a thorough hand wash and dry of all the paintwork, including the gas cap and valve. Tires and wheels are left spotless and shining. We finish by treating the windows with a water repellent for a crystal-clear finish. We vacuum the interior and mats, wipe down the leather seats, and thoroughly clean the door panels, jambs, plastics, and cup holders. The service ends with spotless glass and mirrors for a refreshed look.",
  duration: ["1 hour 30 mins", "1 hour 45 min", "2 hours"],
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
  exteriorServices: [
    { text: "• Wheels and tires thoroughly cleaned and dressed" },
    { text: "• Full hand wash using foam to lift dirt safely" },
    { text: "• Gas cap and fuel area carefully cleaned" },
    { text: "• Dried with air blowers and soft towels to avoid scratches" },
    { text: "• Glass and mirrors cleaned for clear visibility" },
    { text: "• Protective wax for up to 3 months shine and protection" },
    { text: "• Hand-polished to enhance smoothness and finish" },
  ],
  interiorServices: [
    { text: "• Interior and trunk carpet vacuumed " },
    { text: "• Interior plastics and surfaces cleaned " },
    { text: "• Floor mats cleaned" },
    { text: "• Door panels and jambs cleaned" },
    { text: "• Surfaces and plastics cleaned" },
    { text: "• Seats vacuumed & wiped" },
    { text: "• Vents, cracks, and crevices cleaned" },
    { text: "• Glass and mirrors cleaned" },
  ],
  price: expressFullDetailPrices,
  carsSize: carTypes,
  link: EXPRESS_FULL_DETAILING_PATH,
  bookingLink: EXPRESS_FULL_DETAILING_BOOKING_PATH,
  shortDescription: `Professional-grade detailing without the wait with Spotless Detailing’s Express Full Detail Package. \n\nFrom ${expressFullDetailPrices[0]}. Up to 3 hours.`,
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
  exteriorServices: [
    { text: "Evetrything in Express Service:", bold: true },
    { text: "• Wheels and tires cleaned and dressed" },
    { text: "• Full hand wash with foam to safely lift dirt" },
    { text: "• Gas cap and fuel area cleaned" },
    { text: "• Blow-dried and towel-dried to prevent water spots" },
    { text: "• Windows cleaned streak free" },
    { text: "• Interior and trunk carpet vacuumed " },
    { text: "• Interior plastics and surfaces cleaned " },
    { text: "• Floor mats cleaned" },
    { text: "• Door panels and jambs cleaned" },
    { text: "• Surfaces and plastics cleaned" },
    { text: "• Seats vacuumed & wiped" },
    { text: "• Vents, cracks, and crevices cleaned" },
    { text: "• Glass and mirrors cleaned" },
  ],
  interiorServices: [
    { text: "Plus:", bold: true },
    { text: "• Paint decontaminated with clay bar treatment" },
    { text: "• Bugs removed with chemical treatment" },
    { text: "• Ceramic sealant for up to 6 months of protection" },
    { text: "• Paint polished by hand to boost shine" },
    { text: "• Steam clealing for carpet, seats, and surfaces" },
    { text: "• Floor mats steamed & shampoed" },
    { text: "• UV and dust protection applied to interior" },
    { text: "• Leather seats and panels conditioned to prevent cracking" },
  ],
  price: ultimateFullDetailPrices,
  carsSize: carTypes,
  link: ULTIMATE_FULL_DETAILING_PATH,
  bookingLink: ULTIMATE_FULL_DETAILING_BOOKING_PATH,
  shortDescription: `Complete car rejuvenation, exterior and interior detailing, top-of-the-line products. \n\nFrom ${ultimateFullDetailPrices[0]}. Up to 5 hours.`,
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
  sixYearsCeramicCoating,
  tenYearsCeramicCoating,
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
  threeYearsceramicCoating,
  sixYearsCeramicCoating,
  tenYearsCeramicCoating,
  paintEnchancement,
  oneStepPaintCorrection,
  twoStepPaintCorrection,
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

export const paintCorrectionService = {
  title: "Paint Correction",
  shortDescription:
    "Paint correction is a professional process that removes surface imperfections like swirl marks, light scratches, oxidation, and dullness from your vehicle’s clear coat. Performed by skilled detailers, paint correction restores depth, clarity, and a mirror-like gloss to your car’s finish, making it look better than new while preparing it for lasting protection.",
  image:
    "https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/shutterstock_1073921648_1200x.avif",
  link: PAINT_CORRECTION_PATH,
  options: paintCorrectionServices,
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
  paintCorrectionService,
];

export const detailingPackages = [
  exteriorDetailingService,
  interiorDetailingService,
  fullDetailingService,
];
