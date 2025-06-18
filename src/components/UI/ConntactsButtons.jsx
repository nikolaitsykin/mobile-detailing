import { Link } from "react-router-dom";
import { ReactComponent as MessageSms } from "../../assets/icons/message-sms.svg";
import { ReactComponent as PhoneCall } from "../../assets/icons/phone-call.svg";
import {
  BOOKING_URL,
  CALL_NUMBER,
  TEXT_NUMBER
} from "../../utils/constants";
import Button from "./Button";

const ConntactsButtons = () => {
  return (
    <div className="flex h-12 gap-2">
      <div className="md:flex hidden justify-center items-center px-1">
        <span className="text-3xl font-semibold text-white font-stretch-ultra-condensed ">
          919-906-0099
        </span>
      </div>
      <div className="flex md:hidden justify-center items-center active:scale-110 duration-300 ">
        <Link to={CALL_NUMBER}>
          <div className="hover:scale-110 duration-700">
            <PhoneCall />
          </div>
        </Link>
      </div>
      <div className="flex md:hidden justify-center items-center active:scale-110 duration-300 px-1">
        <Link to={TEXT_NUMBER}>
          <div className="hover:scale-110 duration-700">
            <MessageSms />
          </div>
        </Link>
      </div>
      <div className="flex items-center h-12 ">
        <Link to={BOOKING_URL} target={"_blank"}>
          <Button
            children={"BOOK NOW"}
            color={"primary"}
            border="border"
            header
          />
        </Link>
      </div>
    </div>
  );
};

export default ConntactsButtons;
