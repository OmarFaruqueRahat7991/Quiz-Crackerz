import React from "react";
import { Link } from "react-router-dom";
import "./Topic.css";

const Topic = ({ topic }) => {
  const { id , name, logo } = topic;
  return (
    <div className="container">
      <div className="topic-container">
        <img src={logo} alt="" />
        <h1 className="text-3xl font-bold">{name}</h1>
        <Link to={`/topic/${id}`} className="btn-quiz">Start Quiz</Link>
      </div>
    </div>
  );
};

export default Topic;
