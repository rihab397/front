
import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../redux/Actions/header";
import {
    useNavigate,
    NavLink
} from "react-router-dom";
import "./css/style.css";
import  {HouseDoorFill, EyeFill,Upload } from "react-bootstrap-icons";

export default function Sidebar() {
    let navigate=useNavigate()
    let dispatch=useDispatch();
    // let [isOpen, setIsOpen] = useState(false)
    document.addEventListener("DOMContentLoaded", function (event) {

        const showNavbar = (toggleId, navId, bodyId, headerId) => {
            const toggle = document.getElementById(toggleId),
                nav = document.getElementById(navId),
                bodypd = document.getElementById(bodyId),
                headerpd = document.getElementById(headerId)

            if (toggle && nav && bodypd && headerpd) {
                toggle.addEventListener('click', () => {
                    nav.classList.toggle('show')
                    toggle.classList.toggle('bx-x')
                    bodypd.classList.toggle('body-pd')
                    headerpd.classList.toggle('body-pd')
                })
            }
        }

        showNavbar('header-toggle', 'nav-bar', 'body-pd', 'header')

        /*===== LINK ACTIVE =====*/
        const linkColor = document.querySelectorAll('.nav_link')

        function colorLink() {
            if (linkColor) {
                linkColor.forEach(l => l.classList.remove('active'))
                this.classList.add('active')
            }
        }
        linkColor.forEach(l => l.addEventListener('click', colorLink))

    });

    let {isOpen}=useSelector((state) => state.header)

    return (

        <>
    
            <div className="l-navbar " id="nav-bar" style={{ width: isOpen ? "16rem" : "1rem", marginRight: isOpen ? "0rem" : "4rem" }}>
                <nav className="nav " style={{background:"#34475F"}}>
                    <div>
                        {/* <img src="http://localhost:4000/images/imagess.jpg" width={"240"} /> */}
                        <div className="nav_list mt-0">
                            <div>
                             <NavLink className="nav_link " to="/Dashboard">
                                <span className="nav_name d-flex justify-content-between"> <HouseDoorFill size="20" color="black" /> &nbsp; Dashboard</span>
                            </NavLink>
                            </div>
                            <NavLink className="nav_link" to="/ApplicationsReview">
                                <span className="nav_name d-flex justify-content-between"> <EyeFill size="20" color="black" /> &nbsp;ApplicationsReview</span>
                            </NavLink>
                            <NavLink className="nav_link" to="/uploadInvestor">
                                <span className="nav_name d-flex justify-content-between"> <Upload size="20" color="black" />&nbsp; uploadInvestor</span>
                            </NavLink>
                        </div>
                    </div> <a href="#" className="nav_link" onClick={()=>{
                          localStorage.clear("token");
                          dispatch({type:types.HEADER_CLOSE_SIDEBAR})
                          navigate("/Login")
                    }}> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
                </nav>
            </div>


        </>
    )

}

