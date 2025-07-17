import { useEffect } from "react";
import { BASE_URL } from "../../utils/constants";
import Hero from "../Hero";
import { MetaTags } from "../MetaTags";

const Root = () => {
  useEffect(() => {
    localStorage.setItem("location", "Raleigh");
  }, []);

  const currentCity = localStorage.getItem("location");

  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL);

  return (
    <main className="w-full bg-white">
      <MetaTags city={currentCity} />
      <div className="z-100">
        <Hero city={currentCity} />={" "}
      </div>
    </main>
  );
};

export default Root;
