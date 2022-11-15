import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Row ,Col} from "reactstrap";
import * as types from "../../redux/Actions/header";
import {List } from 'react-bootstrap-icons';
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    let dispatch=useDispatch()
    // let [isOpen,setIsOpen]=useState(false)
    let {isOpen}=useSelector((state) => state.header)
    let token=localStorage.getItem("token");
   let navigate= useNavigate();
   if(!token ){
    if(!props.external){
        navigate("/Login");
        dispatch({type:types.HEADER_CLOSE_SIDEBAR})
    }   
   }
   
    return(
        
               <header className="header bg-secondary text-light" id="header">
                <div  style={{width:"100%"}}>
                    <Row>
                        <Col md="1">
                            {
                                !props.external && <button onClick={() => dispatch({ type :isOpen? types.HEADER_CLOSE_SIDEBAR:types.SET_HEADER_OPEN_SIDEBAR})}> <List /> </button>
                            }
                   </Col>
                    <Col md="4" >
                    {props.headerName && <h2>{props.headerName}</h2>}   
                     </Col> 
                     <Col md="1" className="offset-6">
                     {
                                !props.external &&  <button className="btn btn-danger" onClick={()=>{
                            localStorage.clear("token");
                            dispatch({type:types.HEADER_CLOSE_SIDEBAR})
                            navigate("/Login")
                        }}>Logout</button>
                    }
                     </Col> 

                </Row>      
                </div>
                </header>
          
     
    )
}