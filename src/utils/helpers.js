
export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const currentYear = new Date().getFullYear();

