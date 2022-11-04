import { useDispatch } from "react-redux";
import * as types from "../Actions/ApplicationForm"

const initialState = {
    Data: [],
    error: '',
    msg: '',
}


export function Carrer(state = initialState, actions) {
    let dispatch=useDispatch()
    switch (actions.type) {
        case types.CAREER_APPLICATION_SUBMIT_DATA: return {
            ...state,
            Data: actions.payload
        }
        case types.CAREER_APPLICATION_SUBMIT_REQUEST:{ 
            dispatch({type:types.CAREER_APPLICATION_SUBMIT_SAGA_REQUEST,payload:state.Data})
            return {
            ...state,
        }
    }
        case types.CAREER_APPLICATION_SUBMIT_SUCCESS: return {
            ...state,
            msg: actions.payload
        }
        case types.CAREER_APPLICATION_SUBMIT_FAILURE: return {
            ...state,
            error: actions.payload
        }
        default: return {
            ...state,
        }

    }
}