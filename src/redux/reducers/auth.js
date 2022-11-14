import * as types from "../Actions/auth";

const initialState = {   
    userInfo:false,
    er:""
}


export function Auth(state=initialState,actions) {
    switch(actions.type){
        case types.USER_LOGIN_SUCCESS :return {
                ...state,
                userInfo:actions.payload
            }
        case types.USER_LOGIN_FAILURE :return {
            ...state,
            er:actions.payload,
            }
        default :  return {
            ...state,
        }  

    }
}