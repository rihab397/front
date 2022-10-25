import * as types from "../Actions/investors";

const initialState = {   
    investors: [],    
    error: '',
    msg: '',
}


export function fetchinvestor(state=initialState,actions) {
    switch(actions.type){
        case types.FETCH_INVESTORS_REQUEST :return {
                ...state,
            }
        case types.FETCH_INVESTORS_SUCCESS :return {
                ...state,
                investors:actions.payload
            }
        case types.FETCH_INVESTORS_FAILURE :return {
                ...state,
                investors:actions.payload
            }
        default :  return {
            ...state,
        }  

    }
}