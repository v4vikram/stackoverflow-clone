import React from "react";
import Questions from "./Questions";

const QuestionsList = ({ questionList }) => {
  return (
    <>
      {
      questionList.map((question, key) => (
        <Questions question={question} key={key} />
      ))
      }
    </>
  );
};

export default QuestionsList;
