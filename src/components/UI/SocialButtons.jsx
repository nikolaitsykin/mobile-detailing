import React from "react";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "../../utils/constants";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

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
