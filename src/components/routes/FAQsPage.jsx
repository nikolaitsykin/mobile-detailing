import React from "react";
import { autoDetailingQuestions, generalQuestions } from "../../utils/faq";
import FaqItem from "../FaqItem";
import carImage from "../../assets/images/pexels-khunkorn-laowisit-1359149-5233285.jpg";

const FAQs = () => {
  return (
    <div className="w-full z-20 bg-white">
      <div className="relative">
        <div className="w-[80%] mx-auto z-10 absolute top-40 md:top-40 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-white animate-slidein300 opacity-0  drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
            FAQs
          </h1>
        </div>
        <div className="bg-black">
          <img
            className="w-full object-cover h-[450px] mx-auto opacity-40"
            src={carImage}
            alt="car"
          />
        </div>
      </div>
      <section className="w-[90%] md:w-[80%] mx-auto pb-16">
        <article>
          <h2 className=" ">
            Everything You Need to Know
          </h2>
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
