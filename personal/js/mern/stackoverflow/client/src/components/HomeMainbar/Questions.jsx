import React from "react";
import moment from 'moment'
import { Link } from "react-router-dom";

const Questions = ({ question }) => {
  // console.log("id",question.answer);
  return (
    <div className="display-ans-container">
      <div>
        <p>Votes {question.upVote.length - question.downVote.length}</p>
        <p>Answers {question.noOfAnswer}</p>
        <p>Views {question.views}</p>
      </div>

      <div>
        <Link to={`/displayquestions/${question._id}`}>{question.questionTitle}</Link>
        <p>Answers {question.questionBody}</p>
        <p>
          <span>tags: </span>
          {question.questionTags.map((tag, key) => (
            <Link key={key} className="tag-links">{`${tag} `}</Link>
          ))}
        </p>
        <p>
        asked {moment(question.askedOn).fromNow()} { question.userPosted }
        </p>
        <p>{question.userPost}</p>
      </div>
    </div>
  );
};

export default Questions;
