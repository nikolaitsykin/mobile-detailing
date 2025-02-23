import React from "react";
import { Link } from "react-router-dom";
import {
  CALL_NUMBER,
  FAQS_PATH,
  SERVICES_PATH,
  THANK_YOU_PATH,
} from "../../utils/constants";
import SEO from "../SEO";

const ThankYouPage = () => {
  return (
    <div
      id="thank-you"
      className="h-screen z-20 bg-white font-poppins w-full mx-auto"
    >
      <SEO
        title="Thank You | Spotless Auto Detailing"
        canonical={THANK_YOU_PATH}
        description="Thank you for booking with Spotless Auto Detailing! We’ll be in touch soon to confirm your mobile detailing appointment in Raleigh."
        name="Thank You for Booking"
        type="WebPage"
      />

      <div className="w-full bg-black h-[250px] flex justify-center items-center mx-auto text-white">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
          Thank You!{" "}
        </h1>
      </div>
      <div className="mx-auto">
        <section className="my-32">
          <h3 className="text-center my-5">
            Thank you for submitting your quote request!
          </h3>
          <p className="text-center my-5">
            Our team will review your details and get back to you shortly with a
            personalized estimate. In the meantime, feel free to explore our{" "}
            <Link
              target={"_blank"}
              to={SERVICES_PATH}
              className="text-blue underline font-semibold"
            >
              services
            </Link>{" "}
            or visit our{" "}
            <Link
              target={"_blank"}
              to={FAQS_PATH}
              className="text-blue underline font-semibold"
            >
              FAQ
            </Link>{" "}
            page for more information.
          </p>
          <p className="text-center my-5">
            If you have any questions, please don't hesitate to call us at{" "}
            <Link
              target={"_blank"}
              to={CALL_NUMBER}
              className="text-blue underline font-semibold"
            >
              (919) 906-0099.
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
};

export default ThankYouPage;
