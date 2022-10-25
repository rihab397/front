import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers/index";
// import thunk from "redux-thunk";
import rootSaga from "./sagas/index";
import createSagaMiddleware from 'redux-saga';

const composeEnhancers =  compose;
const sagaMiddleware = createSagaMiddleware();


const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);

export default store;
