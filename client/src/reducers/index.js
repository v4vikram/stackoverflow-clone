import { combineReducers } from "redux";
import {authReducer} from './auth';
import currentUserReducer from "./currentUser";
import questionReducer from './question'
import usersReducer from "./users";
// console.log(usersReducer())

export default combineReducers({
    authReducer,
    currentUserReducer,
    questionReducer,
    usersReducer
});