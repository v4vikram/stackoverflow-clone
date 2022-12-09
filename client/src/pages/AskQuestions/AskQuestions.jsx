import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./askquestions.css";
import { askQuestion} from "../../actions/question";



const AskQuestions = () => {
  const [question, setQuestion] = useState({
    questionTitle: "",
    questionBody: "",
    questionTags: "",
  });

  const dispatch = useDispatch();
  const user = useSelector((state) => state.currentUserReducer);
  // console.log(user.result.name)
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      askQuestion({ ...question, userPosted: user.data.name, userId: user.data._id }, navigate)
    );
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      setQuestion(question + "\n");
    }
  };

  return (
    <div className="ask-question-container" style={{ marginTop: "100px" }}>
      <div className="ask-question">
        <h3 style={{ margin: "20px 0px" }}>Ask a public question</h3>
        <form onSubmit={handleSubmit}>
          <div className="ask-form-continaer">
            <label htmlFor="" className="ask-question-title">
              <h4>Tiile</h4>
              <p>
                Be specific and imagine you’re asking a question to another
                person
              </p>
              <input
                type="text"
                name="questionTitle"
                onChange={(e) =>
                  setQuestion({ ...question, questionTitle: e.target.value })
                }
                placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
              />
            </label>
            <label htmlFor="" className="ask-question-title">
              <h4>Body</h4>
              <p>
                Include all the information someone would need to answer your
                question
              </p>
              <textarea
                type="text"
                name="questionBody"
                onChange={(e) =>
                  setQuestion({ ...question, questionBody: e.target.value })
                }
                onKeyPress={handleEnter}
              />
            </label>
            <label htmlFor="" className="ask-question-title">
              <h4>Tags</h4>
              <p>Add up to 5 tags to describe what your question is about</p>
              <input
                type="text"
                name="questionTags"
                placeholder="e.g. (xml typescript wordpress)"
                onChange={(e) =>
                  setQuestion({
                    ...question,
                    questionTags: e.target.value.split(" "),
                  })
                }
              />
            </label>
          </div>
          <input
            type="submit"
            value="Review your question"
            className="auth-btn"
            style={{ marginTop: "20px" }}
          />
        </form>
      </div>
    </div>
  );
};

export default AskQuestions;
