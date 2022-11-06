import { all } from 'redux-saga/effects';
import {myapi} from './investors'
import {CityStates} from './CityStates'
import {Carrer,ApplicantDataGet} from "./ApplicationForm"



export default function* rootSaga() {
    yield all([
       myapi(),
       CityStates(),
       Carrer(),
       ApplicantDataGet()
    ])
}