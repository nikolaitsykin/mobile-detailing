import React from "react";
import { IconContext } from "react-icons";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "../../utils/constants";

const SocialButtons = () => {
  return (
    <div className="w-32 xs:w-40 md:min-w-48 flex justify-start items-center gap-4">
      <IconContext.Provider value={{ className: "social-icon" }}>
        <Link to={FACEBOOK_URL} target="_blank">
          <FaFacebook size="1em" />
        </Link>
        <Link to={INSTAGRAM_URL} target="_blank">
          <FaInstagram size="1em" />
        </Link>
        <Link to={TIKTOK_URL} target="_blank">
          <FaTiktok size="0.9em" />
        </Link>
        <Link to={YOUTUBE_URL} target="_blank">
          <FaYoutube size="1.1em" />
        </Link>
      </IconContext.Provider>
    </div>
  );
};

export default SocialButtons;
