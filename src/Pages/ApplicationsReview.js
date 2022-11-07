import { useEffect, useState } from "react";
import * as _ from "lodash"
import update from 'immutability-helper';
import { Table, Button,Row,Col } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import * as applicationActions from "../redux/Actions/ApplicationForm"
function ApplicationsReview() {
    let dispatch=useDispatch();
  let [apiData, setapiData] = useState([]);
  let filterd= useSelector((state) => state.Carrer)

  useEffect(()=>{
    dispatch({type:applicationActions.CAREER_FETCH_ALL_APPLICATION_DATA_REQUEST})
  },[])

  useEffect(()=>{
    if(filterd && filterd.allApplicants){   
        setapiData(filterd.allApplicants)
      }
  },[filterd])
  
  
  
  return (
    <>
    {
        JSON.stringify(apiData)
    }
         <Table>

         </Table>
    </>
  );
}

export default ApplicationsReview;
