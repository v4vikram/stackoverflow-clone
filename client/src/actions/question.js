import * as api from '../api/index';

export const askQuestion = (question, navigate) => async (dispatch) => {
  console.log(question)
  try {
    const { data } = await api.postQuestion(question);
    dispatch({ type: "POST_QUESTION", payload: data });
    dispatch(fetchAllQuestions())
    navigate('/');
  } catch (error) {
    console.log(error);
  }
}

export const fetchAllQuestions = () => async (dispatch) => {
  try {
    const { data } = await api.getAllquestions();
    dispatch({ type: 'FETCH_ALL_QUESTIONS', payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deleteQuestion = (id, navigate) => async (dispatch) =>{
  try {
      await api.deleteQuestion(id);
      dispatch(fetchAllQuestions());
      navigate('/');
  } catch (error) {
    console.log(error);
  }
}

export const voteQuestion = (id, value, userId) => async (dispatch) => {
  console.log(userId)
  try {
      await api.voteQuestion(id, value,userId)
      dispatch(fetchAllQuestions())
  } catch (error) {
      console.log(error)
  }
}

export const postAnswer = (answerData) => async (dispatch) => {
  // console.log("answerData",answerData)
  try {
    const { id, noOfAnswers, answerBody, userAnswered,userId } = answerData;
    console.log("id",id)
    // console.log("answerBody, answerBody",answerBody)
    const { data } = await api.postAnswer(id, noOfAnswers, answerBody, userAnswered, userId);
    dispatch({ type: 'POST_ANSWER', payload: data });
    dispatch(fetchAllQuestions());
  } catch (error) {
    console.log(error)
  }
}

export const deleteAnswer = (id, answerId, noOfAnswers) => async (dispatch) => {
  try {
    const {data} = await api.deleteAnswer(id, answerId, noOfAnswers);
    dispatch(fetchAllQuestions())
  } catch (error) {
    console.log(error)
  }
}




