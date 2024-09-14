import React from "react";
import { autoDetailingQuestions, generalQuestions } from "../../utils/data";
import FaqItem from "../FaqItem";
import carImage from "../../assets/images/man-washing-his-car-garage_1157-26072.jpg";

const FAQs = () => {
  return (
    <div className="w-full z-20 bg-white pb-8 font-poppins">
      <div className="relative">
        <div className="w-[90%] mx-auto z-10 absolute top-36 md:top-36 left-1/2 -translate-x-1/2 text-center">
          <h1 className="text-white animate-slidein300 opacity-0 text-4xl lg:text-6xl w-full flex justify-center tracking-widest font-syne font-bold">
            Detailing Guys FAQs
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
      <section className="w-[90%] md:w-[80%] mx-auto mb-16">
        <h2 className="text-3xl md:text-4xl text-center text-black mt-12 font-syne font-bold">
          Everything You Need to Know
        </h2>
        <FaqItem title="General Questions" questions={generalQuestions} />
        <FaqItem
          title="Detailing Questions"
          questions={autoDetailingQuestions}
        />
      </section>
    </div>
  );
};

export default FAQs;
