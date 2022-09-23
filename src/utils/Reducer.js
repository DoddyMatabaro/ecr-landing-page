import { reducerCases } from "./constants";

export const initialState = {
    faq: false,
}

const reducer =(state, action) =>{
    switch(action.type){
        case reducerCases.SET_FAQ: 
            return{
                ...state,
                faq: action.value
            }
        default:  
            return state;
    }
};

export default reducer;