import "./utils/css/Login.css"

import * as loaderAction from "../redux/Actions/Loader";
// import { Component } from 'react';
import {
    Button,
    Card,
    CardBody,
    CardHeader,
    Form,
    Row,
    Col,
    Label,
    NavLink
} from 'reactstrap';
import Header from "../Pages/utils/header";
import * as investorActions from "../redux/Actions/unPaidInvestor"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Axios from "../axiosInterceptor";
import _ from "lodash";
function ShowInvestorData(props) {
    let dispatch = useDispatch();
    let [folio, setFolio] = useState("");
    let [flag, setFlag] = useState(false)
    let { id } = useParams();
    let [investorData, setinvestorData] = useState([]);
   let navigate= useNavigate()

    function findInvestor() {
        // dispatch({type:loaderAction.LOADING_END,payload:true})
        Axios.post(`/investors/fetchinvestor`, {
            id, folio
        })
            .then(data => {
                console.log(data);
                // dispatch({type:loaderAction.LOADING_END,payload:false})
                if (!data.data.data.length) {
                    let folioerror = document.getElementById("folioerror");
                    folioerror.innerHTML = "<p>please enter a valid folio Number<p>";
                    folioerror.style = "display:block"
                }
                else {
                    // dispatch({type:loaderAction.LOADING_END,payload:false})
                    setinvestorData(data.data.data)
                    setFlag(!flag);
                    setFolio("")
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (<>
        <Header headerName="Investor Record" external={true} />
        <br />
        <Card>
            <CardHeader className="bg-secondary text-light" >
                <Label for="Please Click on the Link to View Record" style={{ fontSize: "20px" }} >{flag ? "Investor Data" : "Enter Folio number and click on the Search Button"}</Label>
            </CardHeader>

            {!flag ?
                <CardBody>
                    {
                     <>   <Row>
                            <Col md="6" className="offset-3">
                                <p className="text-center " style={{fontSize:"30px" ,fontWeight:"800"}}>Enter Folio Number</p>
                                <input type={"text"} className="form-control" onChange={(e) => setFolio(e.target.value)} />
                                <span id="folioerror"></span>
                            </Col>
                            </Row>
                            <Row>                               
                            <Col className="d-flex justify-content-center mt-3">
                                <>
                                <button className="btn btn-primary text-light" onClick={() => findInvestor()}>Search</button>
                                <p>&nbsp;</p> <p>&nbsp;</p>
                                <p>&nbsp;</p> <p>&nbsp;</p>
                                <button className="btn btn-danger text-light" onClick={() => navigate("/investorViewPage")}>Back</button>
                                <span id="2"></span></>
                            </Col>
                        </Row></>
                    }
                </CardBody>
                :
                <CardBody style={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                    {
                        
                            <div className="w-50"  >{investorData.length &&
                                Object.entries(_.head(investorData)).map(([key, value]) => (
                                    <div className="d-flex justify-content-between p-1">
                                        <label className="w-40" style={{fontWeight:"bold",fontSize:"20px"}}>{key} </label>  <label style={{fontSize:"20px"}}> {value}</label>
                                    </div>
                                ))
                            }
                            </div>
                    }

                    <Button className="btn btn-danger text-light" onClick={() => setFlag(!flag)}>Back</Button>

                </CardBody>

            }

        </Card>



    </>)
}

export default ShowInvestorData;