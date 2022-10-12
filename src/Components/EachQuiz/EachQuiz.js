import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const EachQuiz = ({ option , correctAnswer }) => {
  const handleClickRightAnswer = (correctAnswer) => {
    toast.warning(correctAnswer, {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };




  return (
    <div>
      <div>
        <p onClick={() => handleClickRightAnswer(correctAnswer)} className="border-2 list	border-sky-600	border-solid mr-5 p-4 text-lg hover:cursor-pointer rounded-lg">
          {option}
        </p>
        <ToastContainer/>
      </div>
    </div>
  );
};

export default EachQuiz;


