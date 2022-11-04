import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import Axios from '../../axiosInterceptor';
// import { Label } from "reactstrap";
import * as type from "../Actions/ApplicationForm";
let token="ZbbH9UKC8mzyWiB_Svge9VmJrysm2ZxgygbOlXucRzxdYgHD043Dn740blhCPmRwivc"

async function callAPI({ url, method, data }) {
    return await axios({
        url,
        method,
        data
    })

}

function* callapi(action) {
    // let x=action;
    try {
        let data={}
        data.auth_token=""
            let result = yield axios.get(`https://www.universal-tutorial.com/api/cities/${action.payload}`, {
                headers: {
                    "Authorization": "Bearer "+data.auth_token,
                    "Accept": "application/json",
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }
            });
              
            yield put({ type: type.CAREER_APPLICATION_SUBMIT_SUCCESS, payload:result})
    }
    catch (er) {
        yield put({ type: type.CAREER_APPLICATION_SUBMIT_FAILURE, payload: er })
    }
}

export function* Carrer() {
    yield takeEvery(type.CAREER_APPLICATION_SUBMIT_SAGA_REQUEST, callapi)
}