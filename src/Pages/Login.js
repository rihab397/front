import "./utils/css/login.css"


// import { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Label
} from 'reactstrap';
// import Header from "../Pages/utils/header";
import * as authActions from "../redux/Actions/auth"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as loaderActions from "../redux/Actions/Loader"
import { useNavigate } from "react-router-dom";
import { toastr } from "react-redux-toastr";
function Login(props) {
  let dispatch = useDispatch();
  let navigate = useNavigate()
  let [authData, setAuthData] = useState({});
  let loginErr = useState({});
  function Submit(e) {
    let valid=true;
    e.preventDefault();
    if(!valid){
      console.log("error in the application");
    }
    ["Password", "Email"].map(val => {
      if (!authData[val]){ 
        document.getElementById(val).innerText = "Please fill this field"
        valid=false
        toastr.error("please fill this field");
      }
      else{
        document.getElementById(val).innerText = ""
      }
    })
    if(valid){
      dispatch({ type: authActions.USER_LOGIN_REQUEST, payload: authData });
      dispatch({ type: loaderActions.LOADING_START, payload: true })
    }
   
  }
  let user = useSelector((state) => state.Auth)
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (user && user.userInfo.length && token) {
      navigate("/Dashboard")
    }
  }, [user])
  return (<>
    {/* <Header headerName="Sign In" /> */}
    <div className="App" >
      <div style={{ position: "relative", width: "100%", overflowX: "hidden", textAlign: "center", borderTopLeftRadius: "5px", borderTopRightRadius: "5px" }}>
        <h2 className="bg-primary text-light">Please Fill this form first</h2>
      </div>
      {/* <Form className="form" > */}
      <FormGroup>
        <Label for="exampleEmail">Username</Label>
        <Input
          type="email"
          name="Email"
          placeholder="example@example.com"
          onChange={(e) => setAuthData({ ...authData, [e.target.name]: e.target.value })}
        />
        <span id="Email" ></span>
      </FormGroup>
      <FormGroup>
        <Label for="examplePassword">Password</Label>
        <Input
          type="password"
          name="Password"
          onChange={(e) => setAuthData({ ...authData, [e.target.name]: e.target.value })}
          placeholder="********"
        />
        <span id="Password" ></span>
      </FormGroup>
      <Button onClick={(e) => Submit(e)}>Submit</Button>
      {/* </Form> */}
    </div>
  </>)
}

export default Login;