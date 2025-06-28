import { BASE_URL, BOOKING_PATH } from "../../../utils/constants";
import Booking from "../../Booking";

const BookingPage = () => {
  const canonical = document.querySelector("link[rel=canonical]");
  canonical.setAttribute("href", BASE_URL + BOOKING_PATH);

  return (
    <div id="booking" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          Booking{" "}
        </h1>
      </div>
      <Booking />
    </div>
  );
};

export default BookingPage;
