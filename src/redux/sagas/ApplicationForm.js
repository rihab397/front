import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import Axios from '../../axiosInterceptor';
import * as type from "../Actions/ApplicationForm";
import * as loaderActions from "../Actions/Loader"



function* callapi(action) {
    // let x=action;
    try {
        let data=action.payload;
        data["ContactDetails"]=JSON.stringify(data.ContactDetails)
          let fd=new FormData();
          Object.entries(data).forEach(([key,value])=>{
            if(key==="Signature" || key==="Photopgraph" ||key==="Resume" ){
                fd.set(key,value,value.fileName)
            }
            if(  key==="PermanentDetails" || key === "Qualification" || key === "EmployementDetail"){
                fd.set(key,JSON.stringify(value))
            }
            else{
                fd.set(key,value)
            }
          })
         
            let result = yield Axios(`/Career/Save`,fd);
            
            yield put({ type: type.CAREER_APPLICATION_SUBMIT_SUCCESS, payload:result.data})
            yield put({type:loaderActions.LOADING_END,payload:false})
    }
    catch (er) {
        yield put({ type: type.CAREER_APPLICATION_SUBMIT_FAILURE, payload: er })
    }
}

function* callapi2(action) {
    // let x=action;
    try {
        let data={}
        data.auth_token=""
          let fd=new FormData();
          if(action.payload){
           let  id=action.payload
     
            let result = yield axios.post(`http://localhost:4000/Career/ApplicationGet`,{id:id});
              
            yield put({ type: type.CAREER_APPLICATION_GET_DATA_SUCCESS, payload:result.data})
          }
          else{
            let result = yield axios.get(`http://localhost:4000/Career/fetchAllApplicant`);
            yield put({ type: type.CAREER_FETCH_ALL_APPLICATION_DATA_SUCCESS, payload:result.data})
          }
    }
    catch (er) {
        yield put({ type: type.CAREER_APPLICATION_SUBMIT_FAILURE, payload: er })
    }
}




export function* Carrer() {
    yield takeEvery(type.CAREER_APPLICATION_SUBMIT_SAGA_REQUEST, callapi)
}

export function* ApplicantDataGet() {
    yield takeEvery(type.CAREER_APPLICATION_GET_DATA, callapi2)
}

export function* FetchAllApplicantData() {
    yield takeEvery(type.CAREER_FETCH_ALL_APPLICATION_DATA_REQUEST, callapi2)
}