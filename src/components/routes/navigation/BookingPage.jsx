import React from "react";
import { BOOKING_PATH } from "../../../utils/constants";
import Banner from "../../Banner";
import Booking from "../../Booking";
import SEO from "../../SEO";

const BookingPage = () => {

  return (
    <div id="booking" className="w-full z-20 bg-white font-poppins">
      <SEO
        title="Book Your Mobile Detailing Appointment | Spotless Auto Detailing"
        canonical={BOOKING_PATH}
        description="Schedule your mobile car detailing service in Raleigh with Spotless Auto Detailing. Easy online booking for interior, exterior, and ceramic coating services."
        name="Book a Mobile Detailing Service"
        type="BookingPage"
      />
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
