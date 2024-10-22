import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import { ReactComponent as Tiktok } from "../../assets/icons/tik-tok.svg";
import { ReactComponent as Youtube } from "../../assets/icons/youtube.svg";
import {
  FACEBOOK_URL,
  INSTAGRAM_URL,
  TIKTOK_URL,
  YOUTUBE_URL,
} from "../../utils/constants";

const SocialButtons = () => {
  return (
    <div className="w-32 xs:w-40 md:min-w-48 flex justify-start items-center gap-4">
      <Link to={FACEBOOK_URL} target="_blank">
        <Facebook />
      </Link>
      <Link to={INSTAGRAM_URL} target="_blank">
        <Instagram />
      </Link>
      <Link to={TIKTOK_URL} target="_blank">
        <Tiktok />
      </Link>
      <Link to={YOUTUBE_URL} target="_blank">
        <Youtube />
      </Link>
    </div>
  );
};

export default SocialButtons;
