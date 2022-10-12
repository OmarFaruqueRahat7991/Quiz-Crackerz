import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// const EachQuiz = ({ option , correctAnswer }) => {
//   const handleClickRightAnswer = (correctAnswer) => {
//     toast.warning(correctAnswer, {
//       position: "top-center",
//       autoClose: 1000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "colored",
//     });
//   };

const EachQuiz = ({ option, correctAnswer }) => {
  const answer = (option) => {
    if (option === correctAnswer) {
      toast.success('Good Job!Your Answer is correct!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });


        // "Good job!Your Answer is correct!"
    } else {
      toast.error('Sorry!Your Answer is wrong!', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  };

  return (
    <div>
      <div>
        <p
          onClick={() => answer(option)}
          className="border-2 list	border-sky-600	border-solid mr-5 p-4 text-lg hover:cursor-pointer rounded-lg"
        >
          {option}
        </p>
        <ToastContainer />
      </div>
    </div>
  );
};

export default EachQuiz;

/* 

import React from 'react';
import './Options.css'
import Swal from "sweetalert2";

const Options = ({ option, correctAnswer }) => {
  
  const answer = (option) => {
    
    if (option === correctAnswer) {
      Swal.fire("Good job!", "Your Answer is correct!", "success");
    }
    else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
        footer: '<a href="">Why do I have this issue?</a>',
      });
    }
  };
  
  return (
    <div className="optn  bg-gray-700">
      <p onClick={()=>answer(option)} className="text-1xl font-semibold ">
        {option}
      </p>
    </div>
  );
};

export default Options;


*/
