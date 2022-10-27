import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import * as type from "../Actions/investors"
import Axios from '../../axiosInterceptor';


async function callAPI({url,method,data}){
return await axios({
    url,
    method,
    data
}) 

}

function* callapi(action) {
    let x=action;
    try{
        let result = yield Axios.get("todos/1");
    //   console.log(result)
        yield put({type:type.FETCH_INVESTORS_SUCCESS,payload:result})
    }
    catch(er){
       yield put({type:type.FETCH_INVESTORS_FAILURE,payload:er})
    }
}

export function* myapi(){
yield takeEvery(type.FETCH_INVESTORS_REQUEST,callapi)
}