import {combineReducers}from "redux";
import {fetchinvestor} from "../reducers/investor"
import { fetchVendor } from "./vendor"; 
import { fetchcitystates} from "./CityStates"; 

export default combineReducers({
  fetchinvestor,
  fetchVendor,
  fetchcitystates
})