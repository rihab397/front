import axios from "axios";
import { call, takeEvery, put } from "redux-saga/effects";
import * as type from "../Actions/dashboard"
import * as loaderActions from "../Actions/Loader"

import Axios from '../../axiosInterceptor';
<<<<<<< HEAD
import _, { values } from "lodash";
=======
import _ from "lodash";
import { useDispatch } from "react-redux";
>>>>>>> 684381817d4a5d02befe980d2b51853d69c183b0
// import { Label } from "reactstrap";


function* callapi(action) {
    // let dispatch=useDispatch();
    // let x=action;
    try {
        let {data} = yield yield Axios(`/dashBoardData`);
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
                 if( String(new Date(`${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`))==String( new Date(val.Date))){
                    return(val)
                 }
             }).length


           let chartData= [Object.entries(_.groupBy(data.data,"Category")).map(([key,value])=>{
            return({[key]:value.length})
          })].map(val=>{let label=[]; let data=[]; val.forEach(v=>{ label.push(Object.keys(v)[0]);data.push(Object.values(v)[0])});return([label,data])})[0]
             result ={allApplicants,currentMonthApplier,gender,todayApplier,chartData}

            //  setInterval(() => {
                yield put({type:loaderActions.LOADING_END,payload:false})
          


        yield put({ type: type.FETCH_DASHBOARD_DATA_SUCCESS, payload:result})
        
    }
    catch (er) {
        yield put({ type: type.FETCH_DASHBOARD_DATA_FAILURE, payload: er })
        yield put({type:loaderActions.LOADING_END,payload:false})
    }
}

export function* dashboardData() {
    yield takeEvery(type.FETCH_DASHBOARD_DATA_REQUEST, callapi)
}