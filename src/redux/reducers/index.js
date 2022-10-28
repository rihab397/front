import {combineReducers}from "redux";
import {fetchinvestor} from "../reducers/investor"
import { fetchVendor } from "./vendor"; 

export default combineReducers({
  fetchinvestor,
  fetchVendor
})