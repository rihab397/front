import * as types from "../Actions/header";

const initialState = {   
    isOpen:true
}


export function header(state=initialState,actions) {
    switch(actions.type){
        case types.SET_HEADER_OPEN_CLOSE_SIDEBAR :return {
                ...state,
                isOpen:actions.payload
            }
        case types.HEADER_OPEN_CLOSE_SIDEBAR :return {
                ...state,
            }
        default :  return {
            ...state,
        }  

    }
}