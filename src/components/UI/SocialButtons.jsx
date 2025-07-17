import { Link } from "react-router-dom";
import { ReactComponent as Facebook } from "../../assets/icons/facebook.svg";
import { ReactComponent as Google } from "../../assets/icons/google-black-icon.svg";
import { ReactComponent as Instagram } from "../../assets/icons/instagram.svg";
import {
  FACEBOOK_URL,
  GOOGLE_BUSINESS_URL,
  INSTAGRAM_URL
} from "../../utils/constants";

const SocialButtons = () => {
  return (
    <div className=" flex items-center gap-4">
      <Link to={FACEBOOK_URL} target="_blank">
        <Facebook />
      </Link>
      <Link to={INSTAGRAM_URL} target="_blank">
        <Instagram />
      </Link>
      <Link to={GOOGLE_BUSINESS_URL} target="_blank">
        <Google />
      </Link>
      {/* <Link to={TIKTOK_URL} target="_blank">
        <Tiktok />
      </Link>
      <Link to={YOUTUBE_URL} target="_blank">
        <Youtube />
      </Link> */}
    </div>
  );
};

export default SocialButtons;
