import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";
import { classNames } from "./helpers";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    window.scrollY > 200 ? setIsVisible(true) : setIsVisible(false);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Toggles visibility
  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="z-50 fixed bottom-10 right-20">
      <button
        type="button"
        onClick={scrollToTop}
        className={classNames(
          isVisible ? "opacity-100" : "opacity-0",
          "bg-pink-600 hover:bg-pink-700 focus:ring-pink-500 inline-flex items-center rounded-full p-3 text-white shadow-sm transition-opacity focus:outline-none focus:ring-2 focus:ring-offset-2"
        )}
      >
        <FaAngleDoubleUp size="2rem" color="fffafa" />
      </button>
    </div>
  );
};

export default ScrollToTop;
