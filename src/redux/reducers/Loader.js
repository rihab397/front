// import { actions } from "react-redux-toastr";
import * as loaderActions from "../Actions/Loader"
let intialState = {
    loader: false
}


let Loader = (state = intialState, actions) => {
    switch (actions.type) {
        case loaderActions.LOADING_START: return {
            ...state,
            loader: actions.payload
        }
        case loaderActions.LOADING_END: return {
            ...state,
            loader: actions.payload
        }
        default: return {
            ...state
        }

    }
}

export default Loader;