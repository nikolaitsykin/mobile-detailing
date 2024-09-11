import React from "react";
import { autoDetailingQuestions, generalQuestions } from "../../utils/data";
import FaqItem from "../FaqItem";

const FAQs = () => {
  return (
    <div className="bg-white py-8">
      <section className="w-[90%] md:w-[80%] mx-auto mb-16">
        <h1 className="text-4xl text-center text-black my-3 font-syne font-bold">
          FAQ's
        </h1>
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
