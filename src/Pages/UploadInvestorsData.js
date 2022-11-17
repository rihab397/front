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
    Label
} from 'reactstrap';
import Header from "../Pages/utils/header";
import * as investorActions from "../redux/Actions/unPaidInvestor"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toastr } from "react-redux-toastr";
function UploadInvestor(props) {
    let dispatch = useDispatch();
    let [file, setFile] = useState({});
    function handleSubmit(e) {
        e.preventDefault();
        dispatch({ type: investorActions.UPLOAD_FILEDATA_REQUEST, payload: file })
    }
    function addFileData(e) {
        if (e.target.files.length) {
            setFile({ [e.target.name]: e.target.files[0] });
        }
    }

    return (<>
        <Header headerName="Upload Investor Data" />
        <br />
        <Card>
            <CardHeader className="bg-secondary text-light" >
                <Label for="Please choose a filetype Excel Json or CSV" style={{fontSize:"20px"}} >Please choose a filetype Excel Json or CSV</Label>
                </CardHeader>
                <CardBody>
                    <div style={{ height: "30%", width: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Form action="#"method="post" enctype="multipart/form-data">
                          <Row><Col md="7"> <input accept=".xlsx,application/JSON" type="file" name="investorFile" className="form-control" required onChange={e => addFileData(e)} /></Col>
                            <Col><Button id="btn" class="btn btn-primary"  onClick={(e) =>{e.preventDefault(); handleSubmit(e)}} >submit</Button></Col>
                            </Row> 
                        </Form>
                    </div>
                </CardBody>
          
        </Card>
    </>)
}

export default UploadInvestor;