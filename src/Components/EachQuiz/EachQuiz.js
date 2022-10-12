import React from "react";

const EachQuiz = ({ option }) => {
  return (
    <div>
      <div>
        <p className="border-2 list	border-sky-600	border-solid mr-5 p-4 text-lg hover:cursor-pointer rounded-lg">
          {option}
        </p>
      </div>
    </div>
  );
};

export default EachQuiz;


