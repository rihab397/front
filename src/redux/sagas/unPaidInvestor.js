import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import * as type from "../Actions/unPaidInvestor"
import Axios from '../../axiosInterceptor';


async function callAPI({url,method,data}){
return await axios({
    url,
    method,
    data
}) 

}

function* callapi(action) {
    // let x=action;
    try{
        let fd = new FormData();
        Object.entries(action.payload).forEach(([key, file]) => {
            fd.set(key, file, key);
            fd.set("Name",file.fileName);

        });
        let result = yield Axios.post("/investors/uploadInvestorFile",fd);
        yield put({type:type.UPLOAD_FILEDATA_SUCCESS,payload:result})
    }
    catch(er){
       yield put({type:type.UPLOAD_FILEDATA_FAILURE,payload:er})
    }
}
function* callapi2() {
    // let x=action;
    try{
        let result = yield Axios.get("/investors/fetchAllInvestors");
    //   console.log(result)
        yield put({type:type.FETCH_ALL_INVESTOR_COLLECTION_RECORD_FAILURE,payload:result})
    }
    catch(er){
       yield put({type:type.FETCH_ALL_INVESTOR_COLLECTION_RECORD_SUCCESS,payload:er})
    }
}

export function* unPaidInvestorUpload(){
yield takeEvery(type.UPLOAD_FILEDATA_REQUEST,callapi)
}
export function* fetchInvestorsRecords(){
yield takeEvery(type.FETCH_ALL_INVESTOR_COLLECTION_RECORD_REQUEST,callapi2)
}