import React from "react";
import "./HomeMainbar.css";
import { useLocation, useNavigate } from "react-router-dom";
import QuestionsList from "./QuestionsList";
import threeDots from "../../asserts/img/three-dots.svg";
import { useSelector } from "react-redux";

const HomeMainbar = () => {

  const user = useSelector((state) => state.currentUserReducer);
  const navigate = useNavigate();
  const location = useLocation();

  const checkAuth = () => {
    if (user === null) {
      alert("pls signup");
      navigate("/auth");
    } else {
      navigate("/askquestions");
    }
  };
  
  const questionList = useSelector(state => state.questionReducer);

  // let questionList = [
  //   {
  //     id: 1,
  //     votes: 3,
  //     upVotes: 10,
  //     downVotes: 20,
  //     noOfAnswer: 2,
  //     questionTitle: "what is funtion",
  //     questionBody: "It is ?",
  //     questionTags: ["js", "css", "react.js"],
  //     views: 3,
  //     userPost: "tusesday",
  //     askedOn: "1 jan",
  //     userId: 3,
  //     answer: [
  //       {
  //         answerBody: "answer body",
  //         userAnswer: "er",
  //         answererOn: "no",
  //       },
  //     ],
  //   },
  // ];


  return (
    <div className="main-header">
      <div className="main-bar-header">
        {location.pathname === "/" ? (
          <h1>Top Questions</h1>
        ) : (
          <h1>All Questions</h1>
        )}

        <button onClick={checkAuth} className="auth-btn">
          Ask Questions
        </button>
      </div>
      <div>
        {questionList.data === null ? (
          <span style={{ display: "flex" }}>
            <h1>Loading</h1>
            <img src={threeDots} alt="" />
          </span>
        ) : (
          <>
            <p className="questions">{questionList.data.length} question</p>
            <QuestionsList questionList={questionList.data} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeMainbar;
