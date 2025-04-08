import React from "react";
import { Link } from "react-router-dom";
import {
  BOOKING_URL,
  CALL_NUMBER,
  CONTACT_PATH,
  FAQS_PATH
} from "../../../utils/constants";
import { autoDetailingQuestions, generalQuestions } from "../../../utils/faq";
import Banner from "../../Banner";
import FaqItem from "../../FaqItem";
import SEO from "../../SEO";
import BookButtons from "../../UI/BookButtons";

const FAQs = () => {

  return (
    <div id="faq" className="w-full z-20 bg-white font-poppins">
      <SEO
        type="FAQPage"
        name="FAQs | Spotless Auto Detailing - Your Questions Answered"
        title="Contact Us | Spotless Auto Detailing in Raleigh, NC"
        description="Find answers to common questions about mobile detailing, ceramic coating, pricing, and service areas in Raleigh. Learn more about Spotless Auto Detailing."
        canonical={FAQS_PATH}
      />
      <Banner
        image="https://pub-47230ec8befa4d53953b33b120822d8f.r2.dev/AdobeStock_399584907.jpeg"
        header="FAQ"
      />
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article>
          <h1 className=" ">Everything You Need to Know</h1>
          <h3 className="text-center py-0 mb-4">General Questions</h3>
          <h5>How Can I Book A Detail?</h5>
          <p>
            You can call us at{" "}
            <a href={CALL_NUMBER} className="underline text-blue font-semibold">
              (919) 906-0099
            </a>
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
