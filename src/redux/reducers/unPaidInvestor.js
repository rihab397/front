import * as types from "../Actions/unPaidInvestor";

const initialState = {   
    investors: [],    
    error: '',
    msg: '',
    investorData:{}
}


export function unPaidInvestor(state=initialState,actions) {
    switch(actions.type){
        case types.FETCH_SINGLE_INVESTOR_RECORD_SUCCESS :return {
                ...state,
                investorData:actions.payload
            }
        case types.FETCH_SINGLE_INVESTOR_RECORD_FAILURE :return {
                ...state,
                error:actions.payload
            }
        case types.FETCH_ALL_INVESTOR_COLLECTION_RECORD_SUCCESS :return {
                ...state,
                investors:actions.payload
            }
        case types.FETCH_ALL_INVESTOR_COLLECTION_RECORD_FAILURE :return {
                ...state,
                error:actions.payload
            }
        case types.UPLOAD_FILEDATA_SUCCESS :return {
                ...state,
                msg:actions.payload
            }
        case types.UPLOAD_FILEDATA_FAILURE :return {
                ...state,
                error:actions.payload
            }
        default :  return {
            ...state,
        }  

    }
}