import * as api from '../api/index';
import { setCurrentUser } from './currentUser';

export const authSignup = (authData, navigate) => async (dispatch) => {
    // console.log(authData, navigate);
    try {
        const { data } = await api.signup(authData)
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const authLogin = (authData, navigates) => async (dispatch) => {
    try {
        const { data } = await api.login(authData)
        dispatch({ type: 'AUTH', data });
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem('profile'))))
        navigates('/')
    } catch (error) {
        console.log(error)
    }
}
