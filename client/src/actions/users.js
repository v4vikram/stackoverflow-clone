import * as api from '../api/index';


export const fetchAllUsers = () => async (dispatch) => {
    try {
        const { data } = await api.fetchUsers()
        // console.log('data', data)
        dispatch({ type: 'FETCH_USERS', payload: data})
    } catch (error) {
        console.log(error)
    }
}

export const updateProfile = (id, updateData) => async (dispatch) =>{
    // console.log('update Profile', id, updateData)
    try {
        const {data} = await api.updateProfile(id, updateData);
        dispatch({type: 'UPDATE_CURRENT_USER',payload: data});
        dispatch(fetchAllUsers())
    } catch (error) {
        console.log(error)
    }
}


