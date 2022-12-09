 const  questionReducer = (state={data:null}, action ) =>{
    switch (action.type) {
        case "POST_QUESTION":
            return {...state}
            break;

        case "POST_ANSWER":
            return {...state}
            break;
            case "FETCH_ALL_QUESTIONS":
                return {...state, data: action.payload}
    
        default:
            return state;
    }
}
export default questionReducer;