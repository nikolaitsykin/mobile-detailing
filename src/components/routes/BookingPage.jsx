import React from "react";
import BookButtons from "../UI/BookButtons";
import { whatToExpect } from "../../utils/sustainability";
import carSpacingNeeded from "../../assets/images/car_spacing.png";
import { Link } from "react-router-dom";
import { CALL_NUMBER } from "../../utils/constants";

const BookingPage = () => {
  return (
    <div className="bg-white py-8">
      <section className="w-[90%] md:w-[80%] mx-auto">
        <h1 className=" text-3xl text-center text-black my-3">
          BOOK YOUR APPOINTMENT TODAY
        </h1>
        <article className="py-3">
          <p className="py-1">
            Detailing Guys has been proudly serving our community, offering the
            convenience of mobile detailing right at your doorstep. We
            understand that life gets busy, so we bring our eco-friendly,
            high-quality services to you.{" "}
            <strong>
              Products we use are environmentally safe, based on advanced
              polymer technologies, without the use of aggressive chemicals and
              produced exclusively in the USA.{" "}
            </strong>
            If you're looking for availability, check out our appointment
            options. And if you don't see your preferred day or time, give us a
            call – we’ll do our best to accommodate you.{" "}
            <Link className="underline text-blue" to="/services">
              Browse our services
            </Link>
          </p>
        </article>
        <BookButtons color={"secondary"} />
        <article className="py-3">
          <h3 className="text-center p-3">What to Expect</h3>
          <ul>
            <li>
              ✔ Book your appointment online or give us a call at {" "}
              <a href={CALL_NUMBER} className="underline text-blue">
                (919) 906-0099
              </a>
              . Be sure to include your address when scheduling!
            </li>
            {whatToExpect.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </article>
        <div>
          <img src={carSpacingNeeded} alt="Space required for service" />
        </div>
      </section>
    </div>
  );
};

export default BookingPage;
