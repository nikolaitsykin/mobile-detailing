import { GOOGLE_API, GOOGLE_LOCATIONS } from "./constants";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const currentYear = new Date().getFullYear();

export const getReviews = () => {
  fetch(GOOGLE_API)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
};
