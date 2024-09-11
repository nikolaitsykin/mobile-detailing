import React from "react";

const FaqItem = ({ title, questions }) => {
  return (
    <div>
      <h2 className="text-black text-2xl text-center p-5 mt-5 font-syne font-bold">
        {title}
      </h2>
      {questions.map((question) => (
        <div className="text-black text-sm md:text-sm w-full flex flex-col justify-center my-1">
          <h3 className="text-black text-base md:text-lg font-syne font-semibold">
            {question.title}
          </h3>
          <p>{question.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqItem;
