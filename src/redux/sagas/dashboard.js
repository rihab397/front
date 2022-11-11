import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import * as type from "../Actions/dashboard"
import Axios from '../../axiosInterceptor';
import _ from "lodash";
// import { Label } from "reactstrap";


function* callapi(action) {
    // let x=action;
    try {
        let {data} = yield axios.get(`http://localhost:4000/Career/dashBoardData`);
        let result={}
             let allApplicants=data.data.length;
             let dataCopy=_.cloneDeep(data.data);
             let date=new Date();
             let dates={month:date.getMonth(),year:date.getFullYear()};
             let currentMonthApplier=dataCopy.filter(applier=>{
                if((new Date(applier.Date)).getMonth()==dates.month || (new Date(applier.Date)).getFullYear==dates.year){
                    return applier
                }
             }).length;

            let gender={male:0,Female:0,Trans_Gender:0}
              dataCopy.forEach(element => {
                if(element.Gender=="Male")   gender={...gender,male:gender["male"]+1}
                if(element.Gender=="Female")   gender={...gender,Female:gender["Female"]+1}
                if(element.Gender=="Trans-Gender" )  gender={...gender,Trans_Gender:gender["Trans_Gender"]+1}
             });

             let todayApplier=dataCopy.filter((val)=>{
                 if((new Date(`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`))==new Date(val.Date)){
                    return(val)
                 }
             }).length
             result ={allApplicants,currentMonthApplier,gender,todayApplier}

        yield put({ type: type.FETCH_DASHBOARD_DATA_SUCCESS, payload:result})
        
    }
    catch (er) {
        yield put({ type: type.FETCH_DASHBOARD_DATA_FAILURE, payload: er })
    }
}

export function* dashboardData() {
    yield takeEvery(type.FETCH_DASHBOARD_DATA_REQUEST, callapi)
}