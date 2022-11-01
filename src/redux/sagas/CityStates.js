import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import * as type from "../Actions/CityStates"
import Axios from '../../axiosInterceptor';
// import { Label } from "reactstrap";
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
        let {data} = yield axios.get("https://www.universal-tutorial.com/api/getaccesstoken", {
            headers: {
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                "Accept": "application/json",
                "api-token": token,
                "user-email": "porwalrishab49@gmail.com",
              
              }
        });
        let result = yield axios.get(" https://www.universal-tutorial.com/api/states/India", {
            headers: {
                "Authorization": "Bearer "+data.auth_token,
                "Accept": "application/json",
                'Access-Control-Allow-Origin' : '*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            }
        });
          
        yield put({ type: type.FETCH_STATES_SUCCESS, payload:result.data.map((val,i)=>{return({id:i,["label"]:val.state_name,["value"]:val.state_name})}) })
    }
    catch (er) {
        yield put({ type: type.FETCH_STATES_FAILURE, payload: er })
    }
}

export function* CityStates() {
    yield takeEvery(type.FETCH_STATES_REQUEST, callapi)
}