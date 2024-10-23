import React from "react";
import detailingImage from "../../../assets/images/man-polish-salon-car-garage_1157-36595.avif";
import Booking from "../../Booking";
import Banner from "../../Banner";

const BookingPage = () => {
  return (
    <div id="booking" className="w-full z-20 bg-white font-poppins">
      <Banner image={detailingImage} header="Booking" />
      <Booking />
    </div>
  );
};

export default BookingPage;
