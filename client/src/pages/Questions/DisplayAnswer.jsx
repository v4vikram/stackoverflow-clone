import React from 'react';
import { Link, useParams } from 'react-router-dom';
import moment from 'moment';
import { useDispatch,useSelector } from 'react-redux';
import { deleteAnswer } from '../../actions/question';

const DisplayAnswer = ({question, handleShare}) => {

    const user = useSelector((state) => state.currentUserReducer);
    const dispatch= useDispatch();
    const {id} = useParams();

    const handleDelete =(answerId, noOfAnswers)=>{
        dispatch(deleteAnswer(id, answerId, noOfAnswers -1))
    }
// console.log(user.result._id,question.answer.userId)

  return (
    <div>
        
        {
            question.answer.map((ans, key)=>(
                <div className="display-ans" key={key}>
                    <p style={{margin: '0.7rem 0'}}>Answer: {ans.answerBody}</p>
                    <div className="question-actions-user">
                        <div>
                            <button type='button' className='nav-btn' onClick={handleShare}>Share</button>
                            {
                                user.data[0]._id === ans.userId ? 
                                <button type='button' className='nav-btn' onClick={()=> handleDelete(question.userId, question.noOfAnswers)}>delete</button>
                                :""
                            }
                            
                        </div>
                        <div>
                            <p>Answered: {moment(question.askedOn).fromNow()}</p>
                            <Link to={`/User/${question.userId}`}>
                                <button className='auth-btn' style={{margin: '0px'}}>
                                {
                                    question.userPosted
                                }
                                <div>
                                    {/* {question.userPost} */}
                                </div>
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default DisplayAnswer