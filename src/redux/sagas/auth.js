import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import * as auth from "../Actions/auth"

import _ from "lodash";
// import { Label } from "reactstrap";
import * as loaderActions from "../Actions/Loader"
import { toastr } from "react-redux-toastr";


function* callapi(action) {
    // let dispatch=useDispatch();
    // let x=action;
    try {
        let {data} = yield axios.post(`http://localhost:4000/user/Login`,action.payload);          
       
        if(data && data.token){
            localStorage.setItem("token",data.token)
        }        
        yield put({ type: auth.USER_LOGIN_SUCCESS, payload:data.user2})
        yield put({type:loaderActions.LOADING_END,payload:false})
        
    }
    catch (er) {
        yield put({ type: auth.USER_LOGIN_FAILURE, payload: er })
        yield put({type:loaderActions.LOADING_END,payload:false})
    }
}

export function* Login() {
    yield takeEvery(auth.USER_LOGIN_REQUEST, callapi)
}