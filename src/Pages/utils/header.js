import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { Row ,Col} from "reactstrap";
import * as types from "../../redux/Actions/header";
import {List } from 'react-bootstrap-icons';

export default function Header(props) {
    let dispatch=useDispatch()
    // let [isOpen,setIsOpen]=useState(false)
    let {isOpen}=useSelector((state) => state.header)
   
    return(
        
               <header className="header" id="header">
                <div  style={{width:"100%"}}>
                    <Row>
                        <Col md="1">
                    <button onClick={() => dispatch({type:types.SET_HEADER_OPEN_CLOSE_SIDEBAR,payload:!isOpen})}>
                   <List />
                    </button></Col>
                    <Col>
                    {props.headerName && <h2>{props.headerName}</h2>}   
                     </Col>  
                </Row>      
                </div>
                </header>
          
     
    )
}