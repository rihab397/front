import * as types from "../Actions/dashboard";

const initialState = {   
    data: [],    
    error: '',
    msg: '',
}


export function dashboardData(state=initialState,actions) {
    switch(actions.type){
        case types.FETCH_DASHBOARD_DATA_SUCCESS :return {
                ...state,
                data:actions.payload
            }
        case types.FETCH_DASHBOARD_DATA_FAILURE :return {
                ...state,
                error:actions.payload
            }
        default :  return {
            ...state,
        }  

    }
}