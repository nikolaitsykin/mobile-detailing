import { Link } from "react-router-dom";
import logo from "../../assets/images/logo_for_web.png";
import { HOME_PATH } from "../../utils/constants";
import ConntactsButtons from "./ConntactsButtons";

const Topbar = () => {
  return (
    <div className="flex justify-between items-center w-full ">
      <div className="flex justify-start items-center ml-6 md:ml-9 w-20 md:w-32 h-16 md:h-20">
        <Link to={HOME_PATH}>
          <div className="">
            <img
              loading="lazy"
              className="h-full w-full object-contain"
              src={logo}
              alt="Spotless Logo"
            />
          </div>
        </Link>
      </div>
      <div className="flex justify-start items-center mr-5 md:mr-14">
        <ConntactsButtons />
      </div>
    </div>
  );
};

export default Topbar;
