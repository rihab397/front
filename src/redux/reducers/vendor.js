import * as types from "../Actions/vendor";

const initialState = {   
    vendors: [],    
    error: '',
    msg: '',
}


export function fetchVendor(state=initialState,actions) {
    switch(actions.type){
        case types.SET_VENDORS :return {
                ...state,
                vendors:actions.payload
            }
        case types.GET_VENDORS :return {
                ...state,
            }
     
        default :  return {
            ...state,
        }  

    }
}