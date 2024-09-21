import React from "react";
import { autoDetailingQuestions, generalQuestions } from "../../utils/faq";
import image from "../../assets/images/AdobeStock_378443659.jpeg";
import FaqItem from "../FaqItem";

const FAQs = () => {
  return (
    <div className="w-full z-20 bg-white font-poppins">
      <div className="w-full bg-black">
        <img
          className="w-full object-cover h-[450px] mx-auto opacity-50"
          src={image}
          alt="car"
        />
      </div>
      <div className="w-full object-cover h-[450px] flex justify-center items-center absolute top-24 md:top-28">
        <div className="w-[90%] flex flex-col justify-center text-white">
          <h1 className="animate-slidein500 text-center opacity-0 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] ">
            FAQs
          </h1>
        </div>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article>
          <h2 className=" ">Everything You Need to Know</h2>
          <FaqItem title="General Questions" questions={generalQuestions} />
          <FaqItem
            title="Detailing Questions"
            questions={autoDetailingQuestions}
          />
        </article>
      </section>
    </div>
  );
};

export default FAQs;
