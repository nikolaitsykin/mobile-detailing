import React from "react";

const FaqItem = ({ title, questions }) => {
  return (
    <div className="">
      <h3 className="text-center p-5 ">
        {title}
      </h3>
      {questions.map((question, index) => (
        <div
          key={"div" + index}
          className=" w-full  my-4"
        >
          <h5
            key={"header" + index}
            className=""
          >
            {question.title}
          </h5>
          <p
            key={"question" + index}
            className=""
          >
            {question.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default FaqItem;
