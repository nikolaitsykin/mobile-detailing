import React from "react";
import { Link } from "react-router-dom";
import { CALL_NUMBER } from "../utils/constants";
import { fullBusinessName } from "../utils/data";
import { whatToExpect } from "../utils/sustainability";
import BookButtons from "./UI/BookButtons";

const Booking = () => {
  return (
    <section id="booking" className="w-[90%] md:w-[80%] mx-auto">
      <h1 className="py-10">Book your appointment today</h1>
      <article className="pb-3">
        <p className="pb-1">
          {fullBusinessName} has been proudly serving our community, offering
          the convenience of mobile detailing right at your doorstep. We
          understand that life gets busy, so we bring our eco-friendly,
          high-quality services to you.{" "}
          <strong>
            Products we use are environmentally safe, based on advanced polymer
            technologies, without the use of aggressive chemicals and produced
            exclusively in the USA.{" "}
          </strong>
          If you're looking for availability, check out our appointment options.
          And if you don't see your preferred day or time, give us a call –
          we’ll do our best to accommodate you.{" "}
          <Link
            target={"_blank"}
            className="underline text-blue"
            to="/services"
          >
            Browse our services.
          </Link>
        </p>
      </article>
      <BookButtons color={"secondary"} />
      <article className="py-3">
        <h2 className="text-center p-3 py-10">What to Expect</h2>
        <ul>
          <li>
            ✔ Book your appointment online by clicking the "Book Online" button
            or contact us by clicking the "Request a Quote" button or give us a
            call at{" "}
            <a href={CALL_NUMBER} className="underline text-blue">
              (919)&nbsp;906&#8209;0099
            </a>
            . Be sure to include your address when scheduling!
          </li>
          {whatToExpect.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </article>
      <div>
        <img
          loading="lazy"
          src="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/car_spacing_spotless.avif"
          alt="Space required for service"
        />
      </div>
      <script src="https://square.site/appointments/buyer/widget/t25pubegvfjcw1/LDK47FK18Z9GH.js"></script>
    </section>
  );
};

export default Booking;
