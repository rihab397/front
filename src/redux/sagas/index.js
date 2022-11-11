import { all } from 'redux-saga/effects';
import {myapi} from './investors'
import {CityStates} from './CityStates'
import {Carrer,ApplicantDataGet,FetchAllApplicantData} from "./ApplicationForm"
import { dashboardData } from './dashboard';



export default function* rootSaga() {
    yield all([
       myapi(),
       CityStates(),
       Carrer(),
       ApplicantDataGet(),
       FetchAllApplicantData(),
       dashboardData()
    ])
}