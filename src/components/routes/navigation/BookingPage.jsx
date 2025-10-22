import { Helmet } from "react-helmet-async";
import { BASE_URL, BOOKING_PATH } from "../../../utils/constants";
import Booking from "../../Booking";

const BookingPage = () => {

  return (
    <div id="booking" className="w-full z-20 bg-white font-poppins">
      <Helmet>
        <link rel="canonical" href={BASE_URL + BOOKING_PATH} />
        <title>Book Mobile Car Detailing in Raleigh NC | Spotless Auto Detailing</title>
        <meta
          name="description"
          content="Schedule your mobile car detailing in Raleigh NC today. Quick online booking for ceramic coating, paint correction, and interior detailing."
        />
      </Helmet>

      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          Book Your Mobile Detailing Appointment{" "}
        </h1>
      </div>
      <Booking />
    </div>
  );
};

export default BookingPage;
