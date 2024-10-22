import React from "react";
import detailingImage from "../../../assets/images/man-polish-salon-car-garage_1157-36595.jpg";
import Booking from "../../Booking";

const BookingPage = () => {
  return (
    <div id="booking" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        <img
          className="w-full object-cover h-[300px] md:h-[450px] mx-auto opacity-50"
          src={detailingImage}
          alt="car"
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-16 md:top-24">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className=" text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            Booking
          </h1>
        </div>
      </div>
      <Booking />
    </div>
  );
};

export default BookingPage;
