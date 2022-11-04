import { all } from 'redux-saga/effects';
import {myapi} from './investors'
import {CityStates} from './CityStates'
import {Carrer} from "./ApplicationForm"



export default function* rootSaga() {
    yield all([
       myapi(),
       CityStates(),
       Carrer()
    ])
}