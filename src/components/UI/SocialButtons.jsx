import React from "react";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "../../utils/constants";
import { FaFacebook, FaInstagram, FaTiktok, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const SocialButtons = () => {
  return (
    <div className="min-w-44 md:min-w-48 flex justify-between">
      <Link to={FACEBOOK_URL} target="_blank">
        <FaFacebook size="2rem" color="fffafa" />
      </Link>
      <Link to={INSTAGRAM_URL} target="_blank">
        <FaInstagram size="2rem" color="fffafa" />
      </Link>
      <Link to="" target="_blank">
        <FaYoutube size="2rem" color="fffafa" />
      </Link>
      <Link to="" target="_blank">
        <FaTiktok size="2rem" color="fffafa" />
      </Link>
    </div>
  );
};

export default SocialButtons;
