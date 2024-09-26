import React from "react";

const FaqItem = ({ questions }) => {
  return (
    <div className="">
      
      {questions.map((question, index) => (
        <div key={"div" + index} className="w-full  my-4">
          <h5 key={"header" + index}>{question.title}</h5>
          <p key={"question" + index}>{question.description}</p>
        </div>
      ))}
    </div>
  );
};

export default FaqItem;
