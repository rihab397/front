
import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import {
    useNavigate,
    NavLink
} from "react-router-dom";
import "./css/style.css"

export default function Sidebar() {
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
                <nav className="nav bg-secondary">
                    <div>
                        {/* <a href="#" className="nav_logo"> <i className='bx bx-layer nav_logo-icon'></i> <span className="nav_logo-name">BBBootstrap</span> </a> */}
                        <div className="nav_list ">
                            <NavLink className="nav_link" to="/Dashboard">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">Dashboard</span>
                            </NavLink>
                            {/* <NavLink className="nav_link" to="/ApplicationForm">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">ApplicationForm</span>
                            </NavLink> */}
                            <NavLink className="nav_link" to="/ApplicationsReview">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">ApplicationsReview</span>
                            </NavLink>
                            <NavLink className="nav_link" to="/uploadInvestor">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">uploadInvestor</span>
                            </NavLink>
                            {/* <NavLink className="nav_link" to="/Applicantpdf">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">Applicantpdf</span>
                            </NavLink> */}
                        </div>
                    </div> <a href="#" className="nav_link"> <i className='bx bx-log-out nav_icon'></i> <span className="nav_name">SignOut</span> </a>
                </nav>
            </div>


        </>
    )

}






















  {/* <NavLink className="nav_link" to="/">
                                <i className='bx bx-grid-alt nav_icon'></i>
                                <span className="nav_name">Dashboard</span>
                            </NavLink>
                            <NavLink className="nav_link" to="/expenses">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">Expenses</span>
                            </NavLink>
                            <NavLink className="nav_link" to="/invoices">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">invoices</span>
                            </NavLink>
                            <NavLink className="nav_link" to="/DynamicTable">
                                <i className='bx bx-user nav_icon'></i>
                                <span className="nav_name">DynamicTable</span>
                            </NavLink> */}