// import { useDispatch } from "react-redux";
import * as types from "../Actions/ApplicationForm"

const initialState = {
    Data: {},
    error: '',
    msg: '',
    id:"",
    webData:[],
    allApplicants:[]
}


export function Carrer(state = initialState, actions) {
    switch (actions.type) {
        case types.CAREER_APPLICATION_SUBMIT_DATA: return {
            ...state,
            Data: actions.payload
        }
        case types.CAREER_APPLICATION_SUBMIT_REQUEST:{ 
            return {
            ...state,
        }
    }
        case types.CAREER_APPLICATION_SUBMIT_SUCCESS: return {
            ...state,
            msg: actions.payload.message,
            id:actions.payload.id
        }
        case types.CAREER_APPLICATION_SUBMIT_FAILURE: return {
            ...state,
            error: actions.payload
        }
        case types.CAREER_APPLICATION_GET_DATA_SUCCESS: return {
            ...state,
            webData:actions.payload.data,
        }
        case types.CAREER_FETCH_ALL_APPLICATION_DATA_SUCCESS: return {
            ...state,
            allApplicants:actions.payload.data,
        }
        default: return {
            ...state,
        }

    }
}