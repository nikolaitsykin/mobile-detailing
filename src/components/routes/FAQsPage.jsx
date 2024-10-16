import React from "react";
import { autoDetailingQuestions, generalQuestions } from "../../utils/faq";
import image from "../../assets/images/AdobeStock_399584907.jpeg";
import FaqItem from "../FaqItem";
import { Link } from "react-router-dom";
import { BOOKING_URL, CALL_NUMBER, CONTACT_PATH } from "../../utils/constants";

const FAQs = () => {
  return (
    <div className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        <img
          className="w-full object-cover h-[300px] md:h-[450px] mx-auto opacity-50"
          src={image}
          alt="car"
        />
      </div>
      <div className="w-full object-cover h-[300px] md:h-[450px] flex justify-center items-center absolute top-16 md:top-28">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="animate-slidein500 text-center opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            FAQs
          </h1>
        </div>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article>
          <h2 className=" ">Everything You Need to Know</h2>
          <h3 className="text-center py-0 mb-4">General Questions</h3>
          <h5>How Can I Book A Detail?</h5>
          <p>
            You can call us at {" "}
            <a href={CALL_NUMBER} className="underline text-blue">
              (919) 906-0099
            </a>
            , request a quote through our contact page or just simply book
            online. Click the{" "}
            <Link to={CONTACT_PATH} className="underline text-blue">
              Request a quote
            </Link>{" "}
            to visit our contact page to request a quote. Click the{" "}
            <Link
              to={BOOKING_URL}
              target="_blank"
              className="underline text-blue"
            >
              Book now
            </Link>{" "}
            button to visit our appointments page to book online.
          </p>{" "}
          <FaqItem questions={generalQuestions} />
          <h3 className="text-center py-0">Detailing Questions</h3>
          <FaqItem questions={autoDetailingQuestions} />
        </article>
      </section>
    </div>
  );
};

export default FAQs;
