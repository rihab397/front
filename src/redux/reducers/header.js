import * as types from "../Actions/header";

const initialState = {   
    isOpen:false
}


export function header(state=initialState,actions) {
    switch(actions.type){
        case types.SET_HEADER_OPEN_SIDEBAR:return {
                ...state,
                isOpen:true
            }
        case types.HEADER_CLOSE_SIDEBAR :return {
                ...state,
                isOpen:false
            }
        default :  return {
            ...state,
        }  

    }
}