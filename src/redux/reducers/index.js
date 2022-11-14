import {combineReducers}from "redux";
import {fetchinvestor} from "../reducers/investor"
import { fetchVendor } from "./vendor"; 
import { fetchcitystates} from "./CityStates"; 
import {Carrer} from "./ApplicationForm"
import {header} from "./header"
import { dashboardData } from "./dashboard";
import Loader from "./Loader";
import { Auth } from "./auth";

export default combineReducers({
  fetchinvestor,
  fetchVendor,
  fetchcitystates,
  Carrer,
  header,
  dashboardData,
  Loader,
  Auth
})