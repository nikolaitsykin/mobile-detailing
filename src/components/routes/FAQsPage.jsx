import React from "react";
import { autoDetailingQuestions, generalQuestions } from "../../utils/data";
import FaqItem from "../FaqItem";
import carImage from "../../assets/images/pexels-khunkorn-laowisit-1359149-5233285.jpg";

const FAQs = () => {
  return (
    <div className="w-full z-20 bg-white font-poppins">
      <div className="relative">
        <div className="w-[80%] mx-auto z-10 absolute top-40 md:top-40 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-white animate-slidein300 opacity-0 text-4xl sm:text-5xl md:text-6xl w-full flex justify-center tracking-widest font-syne font-bold">
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
          <h2 className="text-2xl text-center text-black font-syne font-bold">
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
