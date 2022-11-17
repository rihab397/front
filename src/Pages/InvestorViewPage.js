import "./utils/css/Login.css"


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
import { useNavigate } from "react-router-dom";
import { toastr } from "react-redux-toastr";
function InvestorViewPage(props) {
    let dispatch = useDispatch();
    useEffect(()=>{
     dispatch({type:investorActions.FETCH_ALL_INVESTOR_COLLECTION_RECORD_REQUEST})
    },[])
    let {investors}=useSelector((state)=>state.unPaidInvestor)
    function fetchSingleRecord(id) {
        
    }

    return (<>
        <Header headerName="Investor View Page" />
        <br />
        <Card>
            <CardHeader className="bg-secondary text-light" >
                <Label for="Please Click on the Link to View Record" style={{fontSize:"20px"}} >Please Click on the Link to View Record</Label>
                </CardHeader>
                <CardBody>
                    {
                        investors && investors.length>0 && investors.map(invRecord=>{
                            <Row>
                               <NavLink  onClick={(e)=>{fetchSingleRecord(invRecord["_id"])}}>{invRecord.Name}</NavLink>
                            </Row>
                        })
                    }                               
                </CardBody>
          
        </Card>
    </>)
}

export default InvestorViewPage;