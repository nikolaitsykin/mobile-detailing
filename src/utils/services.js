import {
  maintenanceFullDetail,
  ceramicCoatingService,
  expressFullDetail,
  ultimateFullDetail,
  exteriorDetailingService,
  fullDetailingService,
  interiorDetailingService,
  ultimateExterior,
  ceramicCoating,
  ultimateInterior,
  expressExterior,
  expressInterior,
  paintCorrectionService,
} from "./detailingPackages";

export const mobileDetailingServices = [
  expressExterior,
  expressInterior,
  maintenanceFullDetail,
  expressFullDetail,
  ultimateExterior,
  ultimateInterior,
  ultimateFullDetail,
];

export const ceramicCoatingServices = [ceramicCoating];

export const exteriorServices = [expressExterior, ultimateExterior];
export const interiorServices = [expressInterior, ultimateInterior];
export const fullDetailingServices = [expressFullDetail, ultimateFullDetail];

export const detailingServices = [
  mobileDetailingServices,
  ceramicCoatingServices,
  paintCorrectionService
];

export const detailingServicesTypes = [
  exteriorDetailingService,
  interiorDetailingService,
  fullDetailingService,
  ceramicCoatingService,
];
