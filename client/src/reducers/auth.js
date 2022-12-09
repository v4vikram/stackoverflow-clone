export const  authReducer = (state = {}, actions) =>{
    switch (actions.type) {
        case "AUTH":
        localStorage.setItem('profile', JSON.stringify({...actions?.data}));
            return {...state, data: actions?.data}
        case "LOGOUT":
            localStorage.clear();
            return { ...state, data: null };
    
        default: 
        return state
    }
}


