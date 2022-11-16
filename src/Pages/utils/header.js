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
        
               <header className="header bg-primary text-light" id="header">
                <div  style={{width:"100%"}}>
                    <Row>
                        <Col md="5" style={{display:"flex",flexDirection:"row"}}>
                            {
                                !props.external && <button className=" bg-danger text-light "  style={{height:"80%",width:"6%"}} onClick={() => dispatch({ type :isOpen? types.HEADER_CLOSE_SIDEBAR:types.SET_HEADER_OPEN_SIDEBAR})}> <List /> </button>
                            }
                              &nbsp; &nbsp; {props.headerName && <h2>{props.headerName}</h2>}   
                   </Col>
                    <Col md="4" >
                 
                     </Col> 
                     <Col md="1" className="offset-2">
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