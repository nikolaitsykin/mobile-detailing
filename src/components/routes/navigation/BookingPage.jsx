import React from "react";
import Banner from "../../Banner";
import Booking from "../../Booking";

const BookingPage = () => {

  return (
    <div id="booking" className="w-full z-20 bg-white font-poppins">
      <Banner
        image="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/man-polish-salon-car-garage_1157-36595.jpg"
        header="Booking"
        alt={"Mobile Detailing Service Technician performing car detailing | Spotless Auto Detailing"}

      />
      <Booking />
    </div>
  );
};

export default BookingPage;
