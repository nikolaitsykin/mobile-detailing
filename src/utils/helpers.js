import { BASE_URL } from "./constants";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const currentYear = new Date().getFullYear();

export const setCanonical = (pathname) => {
  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + pathname);
  return canonical;
};
