import {
  baseDetail,
  ceramicCoatingService,
  completeDetail,
  deepClean,
  exteriorDetailingService,
  fullDetailingService,
  interiorDetailingService,
  shineAndShield,
  ceramicCoating,
  steamAndGuard,
  washAndWax,
  wipeAndClean,
} from "./detailingPackages";

// export const paintCorrectionService = {
//   title: "Paint Correction",
//   description: `"Our paint correction service at ${businessName} carefully removes swirl marks, scratches, and imperfections, restoring your vehicle’s paint to a flawless, showroom-quality finish.  image: paintCorrectionServiceImage."`,
//   image: paintCorrectionServiceImage,
//   link: "paint-correction",
// };
// export const headlightRestorationService = {
//   title: "Headlight Restoration",
//   description: `    "Our headlight restoration service at ${businessName} removes oxidation and haze, restoring clarity and brightness to your headlights. We improve visibility and enhance your vehicle’s overall appearance."`,
//   image: headlightRestorationServiceImage,
//   link: "headlight-restoration",
// };

// export const ppfService = {
//   title: "Paint Protection Film",
//   description: `"Our paint protection film service at ${businessName} applies a nearly invisible layer of durable film to your vehicle's exterior, safeguarding the paint from chips, scratches, and road debris while preserving its flawless finish."`,
//   image: ppfServiceImage,
//   link: "paint-protection-film",
// };

export const exteriorServices = [
  washAndWax,
  shineAndShield,
  ceramicCoating,
];
export const interiorServices = [wipeAndClean, steamAndGuard];

export const fullDetailingServices = [baseDetail, completeDetail, deepClean];

export const popularDetailingServices = [
  ceramicCoating,
  deepClean,
  washAndWax,
  wipeAndClean,
];

export const otherDetailingServices = [
  shineAndShield,
  steamAndGuard,
  baseDetail,
  completeDetail,
];

export const detailingServicesTypes = [
  exteriorDetailingService,
  interiorDetailingService,
  fullDetailingService,
  // paintCorrectionService,
  // headlightRestorationService,
  // ppfService,
  ceramicCoatingService,
];

// export const oneStepPaintCorrection = {
//   title: "1-step paint correction",
//   description: "1-step paint correction",
//   image: paintCorrectionServiceImage,
// };

// export const twoStepPaintCorrection = {
//   title: "2-step paint correction",
//   description: "2-step paint correction",
//   image: twoStepPaintCorrectionImage,
// };

// export const basicHeadlightRestorationServices = [
//   "✔ Clean Headlight",
//   "✔ Heavy Cutting Compound",
//   "✔ Rotary Wool Polish",
//   "✔ UV protection",
//   "✘ 1-Step Wet Sand",
//   "✘ 2-Step Grit Wet Sand",
// ];

// export const primeHeadlightRestorationServices = [
//   "✔ Clean Headlight",
//   "✔ Heavy Cutting Compound",
//   "✔ Rotary Wool Polish",
//   "✔ UV protection",
//   "✔ 1-Step Wet Sand",
//   "✔ 2-Step Grit Wet Sand",
// ];

// export const basicHeadlightRestoration = {
//   title: "Basic Headlight Restoration",
//   description:
//     "You can choose this service as an add-on to any of our other services.",
//   services: basicHeadlightRestorationServices,
//   image: headlightRestorationServiceImage,
//   price: ["$150"],
//   backgroung: "none",
// };

// export const primeHeadlightRestoration = {
//   title: "Prime Headlight Restoration",
//   description:
//     "You can choose this service as an add-on to any of our other services.",
//   services: primeHeadlightRestorationServices,
//   image: primeHeadlightRestorationImage,
//   price: ["$200"],
//   backgroung: "none",
// };

// export const basicCeramicCoatingServices = [
//   "✔ Clean Headlight",
//   "✔ Heavy Cutting Compound",
//   "✔ Rotary Wool Polish",
//   "✔ UV protection",
//   "✘ 1-Step Wet Sand",
//   "✘ 2-Step Grit Wet Sand",
// ];

// export const primeCeramicCoatingServices = [
//   "✔ Clean Headlight",
//   "✔ Heavy Cutting Compound",
//   "✔ Rotary Wool Polish",
//   "✔ UV protection",
//   "✔ 1-Step Wet Sand",
//   "✔ 2-Step Grit Wet Sand",
// ];

// export const basicCeramicCoating = {
//   title: "Basic Ceramic Coating",
//   description: "Description",
//   services: basicCeramicCoatingServices,
//   image: ceramicCoatingServiceImage,
//   price: ["$550"],
//   backgroung: "none",
// };

// export const primeCeramicCoating = {
//   title: "Prime Ceramic Coating",
//   description: "Description",
//   services: primeCeramicCoatingServices,
//   image: primeCeramicCoatingImage,
//   price: ["$800"],
//   backgroung: "none",
// };
