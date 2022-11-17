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
import { useNavigate, useParams } from "react-router-dom";
import Axios from "../axiosInterceptor";
import _ from "lodash";
function ShowInvestorData(props) {
    let dispatch = useDispatch();
    let [folio, setFolio] = useState("");
    let [flag, setFlag] = useState(false)
    let { id } = useParams();
    let [investorData, setinvestorData] = useState([]);

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
                    setFlag(!flag)
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (<>
        <Header headerName="Investor Record" />
        <br />
        <Card>
            <CardHeader className="bg-secondary text-light" >
                <Label for="Please Click on the Link to View Record" style={{ fontSize: "20px" }} >{flag? "Record Found":"Enter Folion number and click on the start button"}</Label>
            </CardHeader>
         
            {!flag ?
                <CardBody>
                    {
                        <Row>
                            <Col>
                                <label>Enter Folio Number</label>
                                <input type={"text"} className="form-control" onChange={(e) => setFolio(e.target.value)} />
                                <span id="folioerror"></span>
                            </Col>
                            <Col>
                              <label>&nbsp;</label>
                                <button className="btn btn-danger text-light" onClick={()=>findInvestor()}>Search</button>
                            </Col>
                        </Row>
                    }
                </CardBody>
                :
                <CardBody>
                    {
                        <Row>{investorData.length &&
                            Object.entries(_.head(investorData)).map(([key, value]) => (
                                <div class="block m-b borpad">
                                    <label class="control-label col-md-4">{key} :</label> {value}
                                </div>
                            ))
                        } </Row>
                    }
                    <Button className="btn btn-danger text-light" onClick={() => setFlag(!flag)}>Back</Button>
                </CardBody>

            }

        </Card>



    </>)
}

export default ShowInvestorData;