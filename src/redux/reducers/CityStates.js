import * as types from "../Actions/CityStates";

const initialState = {
    City: [],
    States: [],
    error: '',
    msg: '',
}


export function fetchcitystates(state = initialState, actions) {
    switch (actions.type) {
        case types.FETCH_STATES: return {
            ...state,
        }
        case types.FETCH_STATES_REQUEST: return {
            ...state,
        }
        case types.FETCH_STATES_SUCCESS: return {
            ...state,
            States: actions.payload
        }
        case types.FETCH_STATES_FAILURE: return {
            ...state,
            States: actions.payload
        }
        case types.FETCH_CITY_REQUEST: return {
            ...state,
        }
        case types.FETCH_CITY_SUCCESS: return {
            ...state,
            City: actions.payload
        }
        case types.FETCH_CITY_FAILURE: return {
            ...state,
            City: actions.payload
        }
        default: return {
            ...state,
        }

    }
}