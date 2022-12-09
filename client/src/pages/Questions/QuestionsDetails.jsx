import React, { useState } from "react";
import "./question.css";
import ArrowUpLg from "../../asserts/img/ArrowUpLg.svg";
import ArrowDownLg from "../../asserts/img/ArrowDownLg.svg";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import DisplayAnswer from "./DisplayAnswer";
import { useDispatch, useSelector } from "react-redux";
import { postAnswer,deleteQuestion,voteQuestion } from "../../actions/question";
import moment from "moment";
import copy from "copy-to-clipboard";



const QuestionsDetails = () => {
  const [answer, setAnswer] = useState("");
  const { id } = useParams();
  const location = useLocation();
  const url = `http://localhost:3000`;

  const questionList = useSelector((state) => state.questionReducer);
  // console.log("questionList",questionList.data);

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

  const handleShare = () => {
    copy(url + location.pathname);
    alert(`url copied : ${url + location.pathname}`);
  };

  const user = useSelector((state) => state.currentUserReducer);
  console.log(user)
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePostAns = (e, answerLength) => {
    e.preventDefault();
    if (user === null) {
      alert("Login and Singup to answer a question");
      navigate("auth");
    } else {
      if (answer === "") {
        alert("Enter a answer befor submit ");
      } else {
        dispatch(
          postAnswer({
            id,
            noOfAnswers: answerLength + 1,
            answerBody: answer,
            userAnswered: user.data.name,
            userId:user.data._id
          })
        );
      }
    }
  };
  const handleDelete = () =>{
    dispatch(deleteQuestion(id,navigate))
  }


  const handleUpVote = () => {
    dispatch(voteQuestion(id, 'upVote',user.data[0]._id))
}

const handleDownVote = () => {
    dispatch(voteQuestion(id, 'downVote', user.data[0]._id))
}
  // console.log("user.result._id", user.data[0]._id);
  // console.log("questionList", questionList.data[0]._id);

  return (
    <div className="question-details-page">
    {questionList.data === null ? (
      <h1>Loading...</h1>
    ) : (
      <>
        {questionList.data.filter(questionList => questionList._id === id).map((quesList, key)=>
          // quesList._id
          // user.data[0]._id
          (
            <div key={key}>
           <section className="question-details-container">
             <h1>
               {quesList.questionTitle}
               {}
             </h1>
             <div style={{}}>
               <div className="question-details-container">
                 <img src={ArrowUpLg} alt="" onClick={handleUpVote}/>
                 <p>{quesList.upVote.length - quesList.downVote.length}</p>
                 <img src={ArrowDownLg} alt="" onClick={handleDownVote}/>
               </div>
    
               <div>
                 <p className="question-body">{quesList.questionBody}</p>
                 <div style={{ display: "flex" }}>
                   {quesList.questionTags.map((tags, key) => (
                     <p key={key} className="tag-links">
                       {tags}
                     </p>
                   ))}
                 </div>
    
                 <div className="question-actions-user">
                   <div>
                     <button
                       type="button"
                       className="auth-btn"
                       onClick={handleShare}
                     >
                       Share
                     </button>
                     <button type="button" className="auth-btn" onClick={handleDelete}>
                       Delete
                       </button>
                     {
                      // console.log(user.data[0]._id,quesList.userId)
                      // user.data[0]._id === quesList.userId ?
                      //    <button type="button" className="auth-btn" onClick={handleDelete}>
                      //  Delete
                      //  </button>
                      //  :""
                       
                     }
                     
                
                     
                   </div>
                   <div>
                     <p style={{ margin: "5px 0px" }}>
                       Asked: {moment(quesList.askedOn).fromNow()}
                     </p>
                     <Link
                       to={`/user/${quesList.id}`}
                       className="nav-btn"
                       style={{ margin: "0px" }}
                     >
                      {
                        console.log('quesList.userPosted',questionList)
                      }
                       {quesList.userPosted}
                     </Link>
                     {/* <div>
                     {quesList.userPost}
                   </div> */}
                   </div>
                 </div>
               </div>
             </div>
             <hr />
           </section>
                  
           {quesList !== 0 && (
             <section style={{ marginLeft: "0.8rem" }}>
               <h3 style={{ margin: "0.7rem 0" }}>
                 Answer: {quesList.answer.length}
               </h3>
    
               <DisplayAnswer
                 key={quesList.id}
                 question={quesList}
                 handleShare={handleShare}
               />
             </section>
           )}
           <section
             className="post-ans-container"
             style={{ marginLeft: "0.8rem" }}
           >
             <h3>Your Answer</h3>
             <form
               action=""
               onSubmit={(e) => {
                 handlePostAns(e, quesList.answer.lenght);
               }}
             >
               <div>
                 {" "}
                 <textarea
                   name=""
                   id=""
                   cols="30"
                   rows="10"
                   onChange={(e) => setAnswer(e.target.value)}
                 />
               </div>
               <input
                 type="submit"
                 value="Post Your Answer"
                 className="auth-btn"
               />
             </form>
             <p style={{ margin: "0.7rem 0" }}>
               Browse other questions tagged javscript or ask your own
               question.
               {quesList.questionTags.map((tags, key) => (
                 <Link key={key} className="tag-links">
                   {tags}
                 </Link>
               ))}
             </p>
             or
             <Link to="askquestions" className="nav-btn">
               Ask Your OWn Questions
             </Link>
           </section>
         </div>
          )
        )}
      </>
    )}
    </div>
  );
};

export default QuestionsDetails;
