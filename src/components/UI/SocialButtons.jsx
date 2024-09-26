import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FACEBOOK_URL, INSTAGRAM_URL } from "../../utils/constants";

const SocialButtons = () => {
  return (
    <div className="w-32 xs:w-40 md:min-w-48 flex justify-between">
      <IconContext.Provider value={{ className: "social-icon" }}>
        <Link to={FACEBOOK_URL} target="_blank">
          <FaFacebook />
        </Link>
        <Link to={INSTAGRAM_URL} target="_blank">
          <FaInstagram />
        </Link>
        <Link to="" target="_blank">
          <FaYoutube />
        </Link>
        <Link to="" target="_blank">
          <FaTiktok />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default SocialButtons;
