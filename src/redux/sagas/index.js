import { all } from 'redux-saga/effects';
import {myapi} from './investors'
import {CityStates} from './CityStates'



export default function* rootSaga() {
    yield all([
       myapi(),
       CityStates()
    ])
}