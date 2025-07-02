import { useLocation } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";
import { localAreas } from "../../utils/data";
import Hero from "../Hero";

const Root = () => {
  const location = useLocation();

  const currentCity = localAreas.includes(location.pathname.split("/")[1])
    ? location.pathname
        .split("/")[1]
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()) // Capitalize first letter of each word
    : "Raleigh";

  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + location.pathname);

  return (
    <main className="w-full bg-white">
      <div className="z-100">
        <Hero city={currentCity} />={" "}
      </div>
    </main>
  );
};

export default Root;
