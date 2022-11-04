import {combineReducers}from "redux";
import {fetchinvestor} from "../reducers/investor"
import { fetchVendor } from "./vendor"; 
import { fetchcitystates} from "./CityStates"; 
import {Carrer} from "./ApplicationForm"

export default combineReducers({
  fetchinvestor,
  fetchVendor,
  fetchcitystates,
  Carrer
})