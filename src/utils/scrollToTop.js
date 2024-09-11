import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaAngleDoubleUp } from "react-icons/fa";
import { classNames } from "./helpers";

const ScrollToTop = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    scrollToTop();
  }, [pathname]);

  return <div className=""></div>;
};

export default ScrollToTop;
