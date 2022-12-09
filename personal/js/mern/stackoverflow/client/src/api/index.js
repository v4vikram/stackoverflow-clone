
import axios from 'axios';
const API = axios.create({ baseURL: `http://localhost:5000` });

// API.interceptors.request.use((req) => {
//     if(localStorage.getItem('profile')){
//         req.headers.authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`
//     }
//     return req;
// })


export const login = async (authData) => await API.post(`/login`, authData);
export const signup = async (authData) => await API.post(`/user/signup`, authData);
export const postQuestion = async (questtionData) => await API.post(`/askquestions`, questtionData);

export const getAllquestions = async () => await API.get(`/questions/get`);
export const voteQuestion = async (id, value, userId) => await API.patch(`/questions/vote/${id}`, { value, userId})

export const deleteQuestion = async (id) => await API.delete(`/questions/delete/${id}`);
export const postAnswer = async (id, noOfAnswers, answerBody, userAnswered, userId) => await API.patch(`/answer/post/${id}`, { noOfAnswers, answerBody, userAnswered,userId });
export const deleteAnswer = async (id, answerId, noOfAnswers) => await API.patch(`/answer/delete/${id}`, {id, answerId, noOfAnswers});

export const fetchUsers = async () => await API.get(`/getallusers`);

export const updateProfile = async(id, updateData) => {
    // console.log(updateData)
    await API.patch(`/updatedprofile/${id}`, updateData)
}
