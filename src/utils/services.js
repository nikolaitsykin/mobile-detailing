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
];

export const detailingServicesTypes = [
  exteriorDetailingService,
  interiorDetailingService,
  fullDetailingService,
  ceramicCoatingService,
];
