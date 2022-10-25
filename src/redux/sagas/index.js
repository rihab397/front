import { all } from 'redux-saga/effects';
import {myapi} from './investors'


export default function* rootSaga() {
    yield all([
       myapi()
    ])
}