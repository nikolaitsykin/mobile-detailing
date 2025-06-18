import React from "react";
import { Link } from "react-router-dom";
import {
  BOOKING_URL,
  CALL_NUMBER,
  CONTACT_PATH
} from "../../../utils/constants";
import { autoDetailingQuestions, generalQuestions } from "../../../utils/faq";
import FaqItem from "../../FaqItem";
import BookButtons from "../../UI/BookButtons";

const FAQs = () => {
  return (
    <div id="faq" className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black h-[250px] md:h-[450px] flex justify-center items-center mx-auto text-white top-20">
        <h1 className="text-center drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] mt-28">
          FAQs{" "}
        </h1>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article>
          <h2 className=" ">Everything You Need to Know</h2>
          <h3 className="text-center py-0 mb-4">General Questions</h3>
          <h5>How Can I Book A Detail?</h5>
          <p>
            You can call us at{" "}
            <Link to={CALL_NUMBER} className="underline text-blue font-semibold">
              (919) 906-0099
            </Link>
            , request a quote through our contact page or just simply book
            online. Click the{" "}
            <Link
              target={"_blank"}
              to={CONTACT_PATH}
              className="underline text-blue font-semibold"
            >
              Request a quote
            </Link>{" "}
            to visit our contact page to request a quote. Click the{" "}
            <Link
              to={BOOKING_URL}
              target="_blank"
              className="underline text-blue font-semibold"
            >
              Book now
            </Link>{" "}
            button to visit our appointments page to book online.
          </p>{" "}
          <FaqItem questions={generalQuestions} />
          <h3 className="text-center py-0">Detailing Questions</h3>
          <FaqItem questions={autoDetailingQuestions} />
        </article>
        <BookButtons color={"secondary"} />
      </section>
    </div>
  );
};

export default FAQs;
