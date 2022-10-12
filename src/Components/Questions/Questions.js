import { faEye } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import EachQuiz from "../EachQuiz/EachQuiz";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Questions = ({ eachquiz }) => {
  const { question, options, correctAnswer } = eachquiz;
  const handleViewRightAnswer = (correctAnswer) => {
    toast.error(correctAnswer, {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div className="p-10 border-2	border-gray-500	border-solid mx-10 mb-5">
      <h1 className="text-lg font-semibold">
        {question}{" "}
        <small>
          {" "}
          [See the Correct Answer{" "}
          <FontAwesomeIcon
            onClick={() => handleViewRightAnswer(correctAnswer)}
            icon={faEye}
          ></FontAwesomeIcon>{" "}
          ]
          <ToastContainer />
        </small>{" "}
      </h1>
      <div className="grid md:grid-cols-2 m-5 p-15 gap-4">
        {options.map((option) => (
          <EachQuiz
            key={option.id}
            option={option}
            correctAnswer={correctAnswer}
          ></EachQuiz>
        ))}
      </div>
    </div>
  );
};

export default Questions;

/* 

const EachTopic = ({ eachTopic }) => {
    const { question, options, correctAnswer } = eachTopic;

    return (
        <div className='p-10 border-2	border-cyan-500	border-solid mx-10 mb-5'>
            <h1 className='text-white text-lg font-semibold'>{question} <small> [See the Answer <FontAwesomeIcon icon={faEye}></FontAwesomeIcon> ]</small> </h1>
            <div className='grid md:grid-cols-2 m-5 p-15 gap-4'>
                {
                    options.map(option => <EachQuestion
                        key={option.id}
                        option={option}
                        correctAnswer={correctAnswer}
                    ></EachQuestion>)
                }
            </div>
        </div>
    );
};
export default EachTopic;

*/
