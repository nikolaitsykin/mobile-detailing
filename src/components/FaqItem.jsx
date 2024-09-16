import React from "react";

const FaqItem = ({ title, questions }) => {
  return (
    <div className="">
      <h3 className="text-black text-xl md:text-2xl text-center p-5 font-syne font-bold">
        {title}
      </h3>
      {questions.map((question, index) => (
        <div
          key={"div" + index}
          className="text-black text-sm md:text-sm w-full flex flex-col justify-center my-4"
        >
          <h4
            key={"header" + index}
            className="text-black text-base md:text-lg font-syne font-semibold"
          >
            {question.title}
          </h4>
          <p
            key={"question" + index}
            className="text-black text-sm md:text-base"
          >
            {question.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FaqItem;
