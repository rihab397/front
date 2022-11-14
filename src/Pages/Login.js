import "./utils/css/Login.css"


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
function Login(props){
    let dispatch=useDispatch();
    let navigate=useNavigate()
        let [authData,setAuthData]=useState({})
        function Submit(e){
            e.preventDefault();
            dispatch({type:authActions.USER_LOGIN_REQUEST,payload:authData});
            dispatch({type:loaderActions.LOADING_START,payload:true})
        }
        let user=useSelector((state)=>state.Auth)
        useEffect(()=>{
            let token=localStorage.getItem("token");
      if(user && user.userInfo.length && token){
       navigate("/ApplicationsReview")
      }
        },[user])
    return (<>
     {/* <Header headerName="Sign In" /> */}
      <div className="App" >
        <div style={{position:"relative",width:"100%",overflowX:"hidden",textAlign:"center",borderTopLeftRadius:"5px",borderTopRightRadius:"5px"}}>
        <h2 className="bg-primary text-light">Please Fill this form first</h2>
        </div>
        {/* <Form className="form" > */}
          <FormGroup>
            <Label for="exampleEmail">Username</Label>
            <Input
              type="email"
              name="Email"
              id="exampleEmail"
              placeholder="example@example.com"
              onChange={(e)=>setAuthData({...authData,[e.target.name]:e.target.value})}
              />
          </FormGroup>
          <FormGroup>
            <Label for="examplePassword">Password</Label>
            <Input
              type="password"
              name="Password"
              onChange={(e)=>setAuthData({...authData,[e.target.name]:e.target.value})}
              id="examplePassword"
              placeholder="********"
            />
          </FormGroup>
        <Button onClick={(e)=>Submit(e)}>Submit</Button>
      {/* </Form> */}
    </div>
    </>)
}

export default Login;