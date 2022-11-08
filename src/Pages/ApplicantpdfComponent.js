import React, { useState, useEffect } from 'react';
// import "./App.css";
import jsPDF from 'jspdf';
import { renderToString } from "react-dom/server"
import { Row, Col, Table, Input, Button } from 'reactstrap'
import axios from 'axios';
import _ from "lodash"



function ApplicantpdfComponent({ applicantData }) {
    const [src, setsrc] = useState();
    let appData=applicantData[0]
    let Personal_Details = [{ Company_Name: 'Company Name' }, { Post_Applied: 'Post Applied' }, { First_Name: 'First Name' }, { Middle_Name: 'Middle Name' }, { Last_Name: 'Last Name' }, { Former_First_Name: 'Former First Name' }, { Former_Middle_Name: 'Former Middle Name' }, { Former_Last_Name: 'Former Last Name' }, { Guardian: 'Guardian' }, { Guardian_First_Name: 'Guardian First Name' }, { Guardian_Middle_Name: 'Guardian Middle Name' }, { Guardian_Last_Name: 'Guardian Last Name' }, { DOB: 'Date Of Birth' }, { Age: 'Age' }, { Gender: 'Gender' }, { Nationality: 'Nationality' }, { MartialStatus: 'Martial Status' }, { Mobile: 'Mobile' }, { AlternativeMobile: 'Alternative Mobile Number ' }, { Person_Disabilities: 'Person Disabilities' }]
    let otherInfo = [{ "UnderServiceBond": "Are you currently under service agreement/bond with your existing employer?" }, { "CriminalCase": "Have you ever been charged or convicted for any criminal offense in India or abroad?" }, { "ReltatedToIfci": "Are you related to anyone who works for IFCI Ltd/IFCI Group Campanies?" }, { "AcademicAchievements": "Academic Achievements" }, { "ProfessionalAchievements": "Professional Achievements" }, { "JoiningTime": "Joining Time" }]
    function returnTable(data, width, fontSize) {
        return (
            <table style={{ marginLeft: "10px", fontSize: fontSize + "px", width: `${width}px`, }} >
                <tr ><td colSpan={3}><span style={{ fontSize: "10px", color: "green" }}>Contact Details</span><hr /></td></tr>
                {
                    Object.entries(data).map(([key, value]) => (
                        <tr><td>{`${key}: `}</td><td>:</td><td>{`${value}`}</td></tr>
                    ))
                }</table>
        )

    }
    function returnDeepTable(data, name) {
        return (
            <table style={{ width: "30px", border: "1px solid black", marginLeft: "10px", fontSize: "7px" }} cellPadding={0} cellSpacing={0}>
                <tr style={{ background: "blue", color: "white" }}>
                    {
                        data && data.length && Object.keys(-_.head(data)[name][0]).map(val => (
                            <td>{val}</td>
                        ))
                    }
                </tr>
                {data && data.length && data[0][name]?.map(val => {
                    return (
                        <tr>{
                            Object.entries(val).map(([key, value]) => (
                                <td style={{ textOverflow: "ellipsis" }}>{key != "Responsiblilites" ? value : "sdlkhfskhflk salkhfashl kfhoiashf oihasiofh iohashiofhaihoia"}</td>
                            ))
                        }</tr>
                    )
                })
                }

            </table>
        )
    }
    function retutnSingleTable(data, title) {
        return (
            <table className='table ' style={{ marginLeft: "10px", fontSize: "7px", width: "300px", }}  >
                <tr><td colSpan={3}><span style={{ fontSize: "10px", marginLeft: "5px", color: "green" }}>{title}</span><hr /></td></tr>
                {
                    data.map(val => {
                        let [key, value] = Object.entries(val)[0];
                        if (appData[key]) {
                            return (<tr ><td>{`${value}: `}</td><td>:</td><td>{`${appData[key]}`}</td></tr>)
                        }
                    })
                }</table>
        )
    }
    function create(flag) {
        var doc = new jsPDF("2", "px", "a4");

        function getDataUri(url, callback) {
            var image = new Image();
            image.setAttribute('crossOrigin', 'anonymous'); //getting images from external domain
            image.onload = function () {
                var canvas = document.createElement('canvas');
                canvas.width = 100;
                canvas.height = 100
                var ctx = canvas.getContext('2d');
                ctx.fillStyle = '#fff';  /// set white fill style
                ctx.fillRect(0, 0, canvas.width, canvas.height);
                canvas.getContext('2d').drawImage(this, 0, 0);
                // resolve(canvas.toDataURL('image/jpeg'));
                callback(canvas.toDataURL('image/jpeg'));
            };
            image.src = url;
        }
        function createPDF(logo) {
            doc.addImage(logo, 'jpg', 320, 5, 100, 120);
            doc.setFontSize(12)
            doc.text(`${"Application for the post of"}: ${appData["Post_Applied"]}`, 10, 50)
            doc.text(`${"Application Id"}: ${appData["_id"]}`, 10, 70)
            doc.text(`${"Company For"}: ${appData["Company_Name"]}`, 10, 90)
            let contactDetails = appData["ContactDetails"];
            let PermanentDetails = appData["PermanentDetails"]
            otherInfo.map(val => {
                let key = Object.keys(val);
                let value = Object.values(val);
                return ({ [key]: [value, appData[key]] })
            })
            function rs() {
                return (
                    <div  >
                        {
                            retutnSingleTable(Personal_Details, "Personal Details")
                        }
                        {
                            returnTable(contactDetails, 300, 7)
                        }
                        {
                            returnTable(PermanentDetails, 300, 7)
                        }
                        <p style={{ marginLeft: "10px", fontSize: "10px", width: "300px", color: "green" }}>Qualification Details</p>
                        {
                            returnDeepTable(applicantData, 'Qualification')
                        }
                        <br />
                        <p style={{ marginLeft: "10px", fontSize: "10px", width: "300px", color: "green" }}>Employement Details</p>
                        {
                            returnDeepTable(applicantData, 'EmployementDetail')
                        }
                        <br />
                        {
                            retutnSingleTable(otherInfo, "Other Details")
                        }

                    </div>
                )
            }
            let x = renderToString(rs());
            // doc.addImage(logo, 'jpg', 320, 5, 100, 320);
            doc.html(x, {
                margin: [130, 500, 0, 0], //  [left, top, right ,bottom]  the default is [0, 0, 0, 0]
                callback: async function (pdf) {
                    if (flag == 1) {
                        let blob = pdf.output('bloburl')
                        setsrc(blob);
                        let fd = new FormData();
                        // let x=new File(pdf.output(),"userProfilePdf")
                        fd.set("userProfilePdf", blob)
                        fd.set("id", String(appData["_id"]));
                        let result = await axios.post(`http://localhost:4000/Career/SaveUserProfilePdf`, fd);
                    
                    }
                    else {
                        pdf.save("firstpdf.pdf");
                    }

                }
            })
        }
        if(appData && appData['Photograph'] ){
        getDataUri(`http://localhost:4000/images/${appData['Photograph']}`, createPDF);
    }
}
    useEffect(() => {
        create(1)
    }, [])
    return (
        <>
         {/* {
                JSON.stringify(applicantData)
         } */}
            {
                src && <iframe src={src} height={500} title="pdfViewer" width={800} />
            }
        </>
    )

}

export default ApplicantpdfComponent;
