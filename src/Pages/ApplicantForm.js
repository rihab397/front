// import { Table } from 'bootstrap'
<<<<<<< HEAD
import { useState } from 'react'
import { Row, Col, Table, Input ,Card,CardBody, Button} from 'reactstrap'
=======
import { useEffect, useState } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
import update from "immutability-helper";
import _ from "lodash";
import * as types from "../redux/Actions/CityStates"
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';


let QualificationRowformat =
    [
        { type: "text", md: 1, label: "Qualification", name: "qualification", validate: true, disable: false, set: false },
        { type: "text", md: 1, label: "Collage/School Name", name: "Collage_School_Name", validate: true, disable: false, set: true },
        { type: "text", md: 1, label: "Qualification Name", name: "Qualification_Name", validate: true, disable: false, set: true },
        { type: "text", md: 1, label: "Univerersity Or Board", name: "UniverersityOrBoard", validate: true, disable: false, set: true },
        { type: "datetime-local", md: 1, label: "Passing Year", name: "Passing Year", validate: true, disable: false, set: true },
        { type: "Number", md: 1, label: "Percantage", name: "Percantage", validate: true, disable: false, set: true },
        { type: "text", md: 1, label: "Division", name: "Division", validate: true, disable: false, set: true },
        { type: "multi2", md: 1, label: "Program", name: "Program", validate: true, disable: false, set: true, options: [{ id: 1, label: "Regular", value: "Regular" }, { id: 1, label: "Part Time", value: "Part Time" }, { id: 1, label: "Full Time", value: "Full Time" }, { id: 1, label: "Correspondence", value: "Correspondence" },] },
    ]

let EmployementRowFormat = [
    { type: "text", md: 1, label: "Organisation Name", name: "OrganisationName", validate: true, disable: false, set: true },
    { type: "text", md: 1, label: "Organisation Address", name: "OrganisationAddress", validate: true, disable: false, set: true },
    { type: "text", md: 1, label: "Employer Type", name: "EmployerType", validate: true, disable: false, set: true },
    { type: "text", md: 1, label: "Post Held", name: "PostHeld", validate: true, disable: false, set: true },
    { type: "text", md: 1, label: "Department", name: "Department", validate: true, disable: false, set: true },
    { type: "datetime-local", md: 1, label: "Start From", name: "From", validate: true, disable: false, set: true },
    { type: "datetime-local", md: 1, label: "To", name: "To", validate: true, disable: false, set: true },
    { disable: true, type: "text", md: 1, label: "Experince Year", name: "ExperinceYear", validate: true, disable: false, set: true },
    { type: "text", md: 1, label: "Responsiblilites", name: "Responsiblilites", validate: true, disable: false, set: true },
];
function ApplicationForm(props) {
<<<<<<< HEAD

=======
<<<<<<< HEAD
    var empoymentRowFormat=[
        { type: "text", md: 3, label: "Organisation Name", name: "OrganisationName", validate: true },
        { type: "text", md: 3, label: "Organisation Address", name: "OrganisationAddress", validate: true },
        { type: "text", md: 3, label: "Employer Type", name: "EmployerType", validate: true },
        { type: "text", md: 3, label: "Post Held", name: "PostHeld", validate: true },
        { type: "text", md: 3, label: "Department", name: "Department", validate: true },
        { type: "datetime-local", md: 3, label: "Start From", name: "From", validate: true },
        { type: "datetime-local", md: 3, label: "To", name: "To", validate: true },
        { type: "text", md: 3, label: "Experince Year", name: "ExperinceYear", validate: true },
        { type: "text", md: 3, label: "Responsiblilites", name: "Responsiblilites", validate: true },
    ]
    var  QualificationRowFormat= [
        { type: "text", md: 3, label: "Qualification", name: "Qualification", validate: true },
        { type: "text", md: 3, label: "Collage/School Name", name: "Collage_School_Name", validate: true },
        { type: "text", md: 3, label: "Qualification Name", name: "Qualification_Name", validate: true },
        { type: "text", md: 3, label: "Univerersity Or Board", name: "UniverersityOrBoard", validate: true },
        { type: "datetime-local", md: 3, label: "Passing Year", name: "Passing Year", validate: true },
        { type: "Number", md: 3, label: "Percantage", name: "Percantage", validate: true },
        { type: "text", md: 3, label: "Division", name: "Division", validate: true },
        { type: "Multi2", md: 3, label: "Program", name: "Program", validate: true, options: [{ id: 1, label: "Regular", value: "Regular" }, { id: 1, label: "Part Time", value: "Part Time" }, { id: 1, label: "Full Time", value: "Full Time" }, { id: 1, label: "Correspondence", value: "Correspondence" },] },
    ]
    var [vendorform1,setVendorForm1] = useState( [
        // { set: true, type: "text", md: 3, label: "SAP ID", name: "SapId", function: "", sectionTilte: "General Information",  validate: true },
        { set: true, type: "text", md: 3, label: "First Name", name: "First_Name", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Middle Name", name: "Middle_Name", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Last Name", name: "Last_Name", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Former First Name", name: "Former_First_Name", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Former Middle Name", name: "Former_Middle_Name", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Former Last Name", name: "Former_Last_Name", function: "", validate: true },
        { set: true, type: "multi2", md: 3, label: "Guardian", name: "Guardian", function: "", validate: true, options: [{ id: 0, label: "Husband", value: "Husband" }, { id: 1, label: "Father", value: "Father" }] },
        { set: true, type: "datetime-local", md: 3, label: "Date Of Birth", name: "DOB", function: "", validate: true },
        { set: true, type: "Number", md: 3, label: "Age", name: "Age", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Gender", name: "Gender", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Nationality", name: "Nationality", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Martial Status", name: "MartialStatus", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Alternative Mobile Number ", name: "AlternativeMobile", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "Category", name: "Category", function: "", validate: true },
=======
    
>>>>>>> b190aa790f1c811e4dca656c3f1d1c5d35422346
    var [vendorform1, setVendorform1] = useState([
        //disable:false { set: true, type: "text", md: 3, label: "SAP ID", name: "SapId", function: "", sectionTilte: "General Information",  validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Company Name", name: "Company_Name", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "Post Applied", name: "Post Applied", function: "", validate: true, options: [{ id: 0, label: "C.E.O", value: "C.E.O" }, { id: 1, label: "M.D", value: "M.D" }] },
        { disable: false, set: true, type: "text", md: 3, label: "First Name", name: "First_Name", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Middle Name", name: "Middle_Name", function: "", validate: false },
        { disable: false, set: true, type: "text", md: 3, label: "Last Name", name: "Last_Name", function: "", validate: false },
        { disable: false, set: true, type: "text", md: 3, label: "Former First Name", name: "Former_First_Name", function: "", validate: false },
        { disable: false, set: true, type: "text", md: 3, label: "Former Middle Name", name: "Former_Middle_Name", function: "", validate: false },
        { disable: false, set: true, type: "text", md: 3, label: "Former Last Name", name: "Former_Last_Name", function: "", validate: false },
        { disable: false, set: true, type: "multi2", md: 3, label: "Guardian", name: "Guardian", function: "", validate: true, options: [{ id: 0, label: "Husband", value: "Husband" }, { id: 1, label: "Father", value: "Father" }] },
        { disable: false, set: false, type: "text", md: 3, label: "Guardian First Name", name: "Guardian_First_Name", Parent: "Guardian", function: "", validate: true },
        { disable: false, set: false, type: "text", md: 3, label: "Guardian Middle Name", name: "Guardian_Middle_Name", Parent: "Guardian", function: "", validate: false },
        { disable: false, set: false, type: "text", md: 3, label: "Guardian Last Name", name: "Guardian_Last_Name", Parent: "Guardian", function: "", validate: false },

        { disable: false, set: true, type: "datetime-local", md: 3, label: "Date Of Birth", name: "DOB", function: "", validate: true },
        { disable: true, set: true, type: "text", md: 3, label: "Age", name: "Age", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "Gender", name: "Gender", function: "", validate: true, options: [{ id: 0, label: "Male", value: "Male" }, { id: 1, label: "Female", value: "Female" }, { id: 2, label: "Trans-Gender", value: "Trans-Gender" }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "Nationality", name: "Nationality", function: "", validate: true, options: [{ id: 0, label: "Indian", value: "Indian" }, { id: 1, label: "NRI", value: "NRI" }, { id: 2, label: "Other", value: "Other" }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "Martial Status", name: "MartialStatus", function: "", validate: true, options: [{ id: 0, label: "Married", value: "Married" }, { id: 1, label: "Unmarried", value: "Unmarried" },] },
        { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Alternative Mobile Number ", name: "AlternativeMobile", function: "", validate: true },
<<<<<<< HEAD
        { disable: false, set: true, type: "multi2", md: 3, label: "Person Disabilities", name: "Person_Disabilities", function: "", validate: true, options: [{ id: 0, label: "Yes", value: "Yes" }, { id: 1, label: "No", value: "No" }] },
=======
        { disable: false, set: true, type: "text", md: 3, label: "Category", name: "Category", function: "", validate: true },
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
>>>>>>> b190aa790f1c811e4dca656c3f1d1c5d35422346
        {
            disable: false, set: true, type: "multi2", md: 3, label: "Category", name: "Category", function: "", validate: true, options: [{ id: 1, label: "Genral", value: "Genral" },
            { id: 2, label: "SC", value: "SC" },
            { id: 3, label: "ST", value: "ST" },
            { id: 4, label: "OBC", value: "OBC" },
            { id: 5, label: "EWS", value: "EWS" }
            ]
        },
        { disable: false, set: true, type: "text", SectionTitle: "ContactDetails", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "City", name: "City", function: "", Parent: "ContactDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "State", name: "State", function: "", Parent: "ContactDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "ContactDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", Parent: "ContactDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Phone", name: "Phone", function: "", Parent: "ContactDetails", validate: true },
        { disable: false, set: true, type: "text", SectionTitle: "PermanentDetails", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "City", name: "City", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "State", name: "State", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "PermanentDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", Parent: "PermanentDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Phone", name: "Phone", function: "", Parent: "PermanentDetails", validate: true },
        {
<<<<<<< HEAD
            set: true, type: "text", SectionTitle: "Qualification", md: 12, label: "Qualification", name: "Qualification", function: "", validate: true, fields: [], intaialCount: ["Matric","PostMatric","Graduation","PostGraduation"], rowFormat:QualificationRowFormat
        },
        {
            set: true, type: "text", SectionTitle: "EmployementDetail", md: 12, label: "Qualification", name: "Qualification", function: "", validate: true, fields: [], intaialCount: ["Comapny1","Comapny2","Comapny3","Comapny4"], rowFormat: empoymentRowFormat
        },
        { type: "multi2", md: 8, SectionTitle: "Other Details", label: "Are you currently under service agreement/bond with your existing employer? ", name: "UnderServiceBond", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { type: "multi2", md: 8, label: "Have you ever been charged or convicted for any criminal offense in India or abroad?", name: "CriminalCase", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { type: "multi2", md: 8, label: "Are you related to anyone who works for IFCI Ltd/IFCI Group Campanies?", name: "ReltatedToIfci", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { type: "textarea", md: 3, label: "Academic Achievements", name: "AcademicAchievements", validate: true },
        { type: "textarea", md: 3, label: "ProfessionalAchievements", name: "ProfessionalAchievements", validate: true },
        { type: "datetime-local", md: 3, label: "JoiningTime", name: "JoiningTime", validate: true },
        { type: "file", md: 3, label: "Photograph", name: "Photograph", validate: true },
        { type: "file", md: 3, label: "Signature", name: "Signature", validate: true },
        { type: "file", md: 3, label: "Resume", name: "Resume", validate: true },
    ])


   
=======
            disable: false, set: true, type: "text", SectionTitle: "Qualification", md: 12, label: "Qualification", name: "Qualification", function: "", validate: true, fields: [], intaialCount: 4, rowFormat: [
                { id: 0, Name: "Matric", rowData: QualificationRowformat },
                { id: 1, Name: "PostMatric", rowData: QualificationRowformat },
                { id: 2, Name: "Graduation", rowData: QualificationRowformat },
                { id: 3, Name: "PostGraduation", rowData: QualificationRowformat }
            ]
        },
        {
            disable: false, set: true, type: "text", SectionTitle: "EmployementDetail", md: 12, label: "Qualification", name: "Qualification", function: "", validate: true, fields: [], intaialCount: 4, rowFormat: [
                { id: 0, Name: "Ex1", rowData: EmployementRowFormat },
                { id: 1, Name: "Ex2", rowData: EmployementRowFormat },
                { id: 2, Name: "Ex3", rowData: EmployementRowFormat },
                { id: 3, Name: "Ex4", rowData: EmployementRowFormat }
            ]
        },
        { disable: false, set: true, type: "multi2", md: 3, SectionTitle: "Other Details", label: "Are you currently under service agreement/bond with your existing employer? ", name: "UnderServiceBond", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "Have you ever been charged or convicted for any criminal offense in India or abroad?", name: "CriminalCase", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "Are you related to anyone who works for IFCI Ltd/IFCI Group Campanies?", name: "ReltatedToIfci", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { disable: false, set: true, type: "textarea", md: 3, label: "Academic Achievements", name: "AcademicAchievements", validate: false },
        { disable: false, set: true, type: "textarea", md: 3, label: "ProfessionalAchievements", name: "ProfessionalAchievements", validate: false },
        { disable: false, set: true, type: "datetime-local", md: 3, label: "JoiningTime", name: "JoiningTime", validate: true },
        { disable: false, set: true, type: "file", md: 3, label: "Photograph", name: "Photograph", validate: true },
        { disable: false, set: true, type: "file", md: 3, label: "Signature", name: "Signature", validate: true },
        { disable: false, set: true, type: "file", md: 3, label: "Resume", name: "Resume", validate: true },
    ])
    let dispatch = useDispatch()
<<<<<<< HEAD
    let ExpreinceRequired=5;
=======
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
>>>>>>> b190aa790f1c811e4dca656c3f1d1c5d35422346

    let [filtered, setFiltered] = useState({})
    let [tempString, setTempString] = useState()
    useEffect(() => {
        dispatch({ type: types.FETCH_STATES_REQUEST })
    }, [])



    let CityStates = useSelector((state) => state.fetchcitystates)
    // useEffect(() => {
    //     dispatch({ type: types.FETCH_STATES_REQUEST,payload:filtered["State"] })
    // }, [filtered["ContactDetails"]["State"]])

    let validate = () => {
        vendorform1.map((row,index) => {
            if(row.Parent && row.Parent!=="Guardian" && row.validate){
                if(filtered && filtered[row.Parent] &&filtered[row.Parent][row.name])  {
                    vendorform1[index]["error"] =false
                }
<<<<<<< HEAD
                else{ 
                    vendorform1[index]["error"] =`Please fill the ${row.label} `
                    setVendorform1([...vendorform1])
                    toast(`Please fill ${row.label}`)
                    return;
               }
            }
            if(!row.rowFormat && row.validate){
                if(!filtered[row.name]){
                    vendorform1[index]["error"] =`Please fill the ${row.label} `
                    setVendorform1([...vendorform1])
                    toast(`Please fill ${row.label}`)
                    return;
                }
                else{
                    vendorform1[index]["error"] =false
                }
            }
            if(row.rowFormat && row.validate){
                  row.rowFormat.forEach((val,indx)=>{
                        val.rowData.forEach((row2,i)=>{
                            if(filtered[row.name] && filtered[row.name].some(v=>v.Name==val.Name) && filtered[row.name].some(obj=>obj[row2.name])){
                                vendorform1[index].rowFormat[indx]["rowData"][i]["error"]=false
                            }
                            else {
                                vendorform1[index].rowFormat[indx]["rowData"][i]["error"]=`Please fill the ${row2.label} `
                                setVendorform1([...vendorform1])
                                return;
                            }
                        })
                  })
            }
           
        })
        if(filtered["EmployementDetail"] && filtered["EmployementDetail"] && filtered["EmployementDetail"].some(v=>Object.keys(v).some(val=>val=="ExperinceYear"))  ){
          let exp= filtered["EmployementDetail"].filter(v=>v["ExperinceYear"]).map(v=>v["ExperinceYear"][0]).reduce((a,b)=>parseInt(a)+parseInt(b));
          if(exp<ExpreinceRequired){
            document.getElementById("experienceError").innerHTML=`Expreince Should have atleast ${ExpreinceRequired} `
          }
        }
=======
            })
        }
        else {
            final = update(filtered2, {
<<<<<<< HEAD
              [SectionTitle]:{
                [i]:{
                    [e.target.name]:{$set:e.target.value}
                }
                // $set:[{[e.target.name]:e.target.value}]
              }
=======
                [SectionTitle]: {
                    $push: [{ [e.target.name]: e.target.value }]
                }
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
            })
        }
        setFiltered({...filtered2})

>>>>>>> b190aa790f1c811e4dca656c3f1d1c5d35422346
    }

    useEffect(() => {
        let states = CityStates.States;
        // let vendorform2=_.cloneDeep(vendorform1)
        if (Array.isArray(vendorform1) && states.length) {
            vendorform1.map((v) => {
                if (v.name == "State") {
                    v.options = states
                    return v
                }
                return v
            })
        }
        setVendorform1([...vendorform1])
    }, [CityStates])
    function findDateDiffrence(EnteredDate, SecondDate) {
        EnteredDate = new Date(EnteredDate);
        SecondDate = new Date(SecondDate)
        let year = 0, month = 0;
        let m = (12 - parseInt(EnteredDate.getMonth())) + parseInt(SecondDate.getMonth())
        year = parseInt(SecondDate.getFullYear()) - parseInt(EnteredDate.getFullYear());
        if (m > 12) {
            month = m - 12
        }
        else if (m < 12) {
            year -= 1
            month = m
        }
        return { year, month }
    }

    function setValues(v, e) {
        let filtered2 = _.cloneDeep(filtered)
        if (v.Parent && v.Parent != "Guardian") {
            let temp = {};
            if (filtered2[v.Parent]) {
<<<<<<< HEAD
=======

<<<<<<< HEAD
    let returnControl = (v, i, SectionTitle) => {
        if ((v.type == "text") || (v.type == "Number") || (v.type == "textarea")) {
            return (<Col md={i?12: v.md}>
                {
                    v.SectionTitle && <h1 style={{ backgrond: "grey" }}>{v.SectionTitle}</h1>
                }
              {!SectionTitle && !(i || i==0)  &&  <p><label for={v.label}>{v.label}</label></p>}
                <input type={v.type}
                    name={v.name}
                    placeholder={v.label}
                    required={v.validate}
                    onChange={e => {
                        if (i, SectionTitle) {
                            setChildData(i, SectionTitle, e)
                        }
                        else {
                            setFiltered({ ...filtered, [e.target.name]: e.target.value })
                        }
                    }}
                />
                <span>{v.error ? v.error : null}</span>
            </Col>)
=======
                // filtered2[v.Parent] = { ...filtered2[v.Parent], [e.target.name]: e.target.value }
                // setFiltered({ ...filtered2 })

>>>>>>> b190aa790f1c811e4dca656c3f1d1c5d35422346
                let newd = update(filtered2, {
                    [v.Parent]: {
                        [e.target.name]: { $set: e.target.value }
                    }
                })
                setFiltered(newd)
            }
            else {
                let newd = update(filtered2, {
                    [v.Parent]: {
                        $set: { [e.target.name]: { $set: e.target.value } }
                    }
                })
                setFiltered(newd)
            }
        }

        else {
            if (e.target.name == "Guardian") {
                vendorform1.map(v => {
                    if (v.Parent == "Guardian") {
                        v.set = true
                        return v
                    }
                    return v
                })
                setVendorform1([...vendorform1])
            }
            if (e.target.name == "DOB") {   // count the age according to dob and put into filtered
                let dob = new Date(e.target.value);
                let today = new Date();
                let { year, month } = findDateDiffrence(dob, today);
                let age = `${year}Y ${month}M`
                filtered2["Age"] = age
            }
            setFiltered({ ...filtered2, [e.target.name]: e.target.value })
        }
    }
    function setRowValues(e, index, SectionTitle, rowName) {
        let filtered2 = _.cloneDeep(filtered)
        let tempObj = {};
        let tempArr = [];
        tempObj[e.target.name] = e.target.value;

        if (!filtered[SectionTitle]) {      //when any record array or object is not present 
            tempObj["Name"] = rowName
            tempArr.push(tempObj);
            filtered2[SectionTitle] = tempArr;
        }
        if (filtered[SectionTitle] && filtered[SectionTitle].some(val => val.Name === rowName)) {  //when record present but update the key value
            let obj = filtered2[SectionTitle].find(val => val.Name == rowName);
            let objIndex = filtered2[SectionTitle].findIndex(val => val.Name == rowName);
            if (e.target.name == "From" || obj["To"]) {
                if (e.target.name == "From" && obj["To"]) {
                    let { year, month } = findDateDiffrence(e.target.value, obj['To'])
                    let exp = `${year}Y ${month}M`
                    tempObj["ExperinceYear"] = exp
                } else if (e.target.name == "To" && obj["From"]) {
                    let { year, month } = findDateDiffrence(obj["From"], e.target.value)
                    let exp = `${year}Y ${month}M`
                    tempObj["ExperinceYear"] = exp
                }
            }
            obj = { ...obj, ...tempObj };
            filtered2[SectionTitle][objIndex] = obj
        }
        else if (filtered[SectionTitle] && !filtered[SectionTitle].some(val => val.Name === rowName)) { // when object is not present
            tempObj["Name"] = rowName
            filtered2[SectionTitle].push(tempObj)
        }
        setFiltered({ ...filtered2 });
    }


    function copyContactDetails(e) {
        e.preventDefault()
        if (filtered["ContactDetails"]) {
            filtered["PermanentDetails"] = filtered["ContactDetails"];
            setFiltered({ ...filtered })
            vendorform1.map(v => {
                if (v.Parent == "PermanentDetails") {
                    v.disable = true
                }
            })
            setVendorform1([...vendorform1])
        }
    }
    let returnControl = (v, i, SectionTitle, Name) => {
        if ((v.type == "text") || (v.type == "Number") || (v.type == "textarea")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><h2 className='bg-primary color-light'>{v.SectionTitle}{
                        v.SectionTitle == "PermanentDetails" && <button className='bg-secondary text-light' onClick={(e) => copyContactDetails(e)}>copy</button>

                    }</h2></Col>
                }
                {v.set && <Col md={v.md}>   {!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col>
                        <input type={v.type}
                            name={v.name}
                            placeholder={v.label}
                            required={v.validate}
                            className="form-control"
                            value={
                                filtered && Object.keys(filtered).length ?
                                    SectionTitle && filtered[SectionTitle] && filtered[SectionTitle].some(val => val.Name == Name) ?
                                        filtered[SectionTitle].find(val => val.Name == Name)[v.name] :
                                        (((v.Parent == "PermanentDetails" || v.Parent == "ContactDetails") && filtered[v.Parent] && filtered[v.Parent][v.name] ? filtered[v.Parent][v.name] :
                                            filtered[v.name] ? filtered[v.name] : ""
                                        )) : ""
                            }

                            disabled={v.disable}

                            onChange={e => {
                                if (SectionTitle && (i || i == 0)) { setRowValues(e, i, SectionTitle, Name) }
                                else { setValues(v, e) }
                            }}
                        /></Col>
                        {v.error && <p className='text-danger'>{v.error}</p>}
                
                </Col>}</>)
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
        }

        if (v.type == ("file")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><h2 className='bg-primary color-light'>{v.SectionTitle}</h2></Col>
                }
<<<<<<< HEAD
              {!SectionTitle && !(i || i==0)  &&   <p><label for={v.label}>{v.label}</label></p>}
                <input type={v.type}
                    name={v.name}
                    placeholder={v.label}
                    required={v.validate}
                    onChange={e => setFiltered({ ...filtered, [e.target.name]: e.target.files[0] })}
                />
                <span>{v.error ? v.error : null}</span>
            </Col>)
=======
                <Col md={v.md}>{!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col><input type={v.type}
                        name={v.name}
                        placeholder={v.label}
                        required={v.validate}
                        className="form-control"
                        onChange={e => setFiltered({ ...filtered, [e.target.name]: e.target.files[0] })}
                    /></Col>
                  {v.error && <p className='text-danger'>{v.error}</p>}
                </Col></>)
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
        }

        if (v.type == ("multi2")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><h2 className='bg-primary color-light'>{v.SectionTitle}</h2></Col>
                }
<<<<<<< HEAD
               {!SectionTitle && !(i || i==0)  &&  <p><label for={v.label}>{v.label}</label></p>}
                <select type={"select"}
                    name={v.name}
                    onChange={(e) => { setFiltered({ ...filtered, [e.target.name]: e.target.value }) }}
                >
                    {v.options.map((val) => (
                        <option>{val.label}</option>
                    ))
                    }
                </select>
                <span>{v.error ? v.error : null}</span>
            </Col>)
=======
                <Col md={v.md}>  {!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col>  <select type={"select"}
                        name={v.name}
                        className="form-control"
                        onChange={(e) => { setValues(v, e) }}
                    >
                        {v.options.map((val) => (
                            <option>{val.label}</option>
                        ))
                        }
                    </select>
                    {v.error && <p className='text-danger'>{v.error}</p>}
                    </Col>
                </Col></>)
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
        }

        if (v.type == ("datetime-local")) {
            return (<>
                {
<<<<<<< HEAD
                    v.SectionTitle  && <h1 style={{ backgrond: "grey" }}>{v.SectionTitle}</h1>
                }
                {!SectionTitle && !(i || i==0)  &&  <p><label for={v.label}>{v.label}</label></p>}
                <input type={v.type}
                    name={v.name}
                    placeholder={v.label}
                    required={v.validate}
                    onChange={e => setFiltered({ ...filtered, [e.target.name]: e.target.value })}
                />
                <span>{v.error ? v.error : null}</span>
            </Col>)
=======
                    v.SectionTitle && <Col md={12}><h2 className='bg-primary color-light'>{v.SectionTitle}</h2></Col>
                }
                <Col md={v.md}> {!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col> <input type={v.type}
                        name={v.name}
                        placeholder={v.label}
                        className="form-control"
                        required={v.validate}
                        onChange={e => {
                            if (SectionTitle && (i || i == 0)) { setRowValues(e, i, SectionTitle, Name) }
                            else { setValues(v, e) }
                        }}
                    /></Col>
                  {v.error && <p className='text-danger'>{v.error}</p>}
                </Col></>)
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
        }


    }


<<<<<<< HEAD
    let returnRows = (intaialCount, rowFormat, SectionTitle) => {
        return (<tr>
            {
                rowFormat.length && rowFormat.map((Data, rowIndex) => {
=======
    let returnRows = (intaialCount, rowFormat, SectionTitle,i) => {
        // let TotalRows = []
        // for (let i = 0; i < intaialCount; i++) {
        //     TotalRows.push[rowFormat]
        // }
        return (<><tr>
            {
<<<<<<< HEAD
                rowFormat.length && rowFormat.map((rowData, index) => {
                    return (
=======
                rowFormat.length && rowFormat.map((Data, i) => {
>>>>>>> b190aa790f1c811e4dca656c3f1d1c5d35422346
                    return (<Row>
                        <Col md="1">{Data.Name && !Data.Name.includes("specify") ? Data.Name : <input className='form-control'


                            onChange={(e => { setTempString(e.target.value) })}
                            onBlur={(e => {
                                let vendorform2 = _.cloneDeep(vendorform1)
                                vendorform2.map(val => {
                                    if (val.SectionTitle == SectionTitle) {
                                        val.rowFormat[rowIndex].Name = tempString
                                        return val
                                    }
                                    return val
                                })
                                setTempString("");
                                setVendorform1([...vendorform2])
                            })} />}</Col>
                        {
                            Data.rowData.map(val => (
                                <Col>
                                    {
                                        returnControl(val, rowIndex, SectionTitle, Data.Name)
                                    }
                                </Col>
                            ))
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca

                        }</Row>)

                })
            }
        </tr>)
    }
    // add a row inside qualification or  employement details
    function addRow(SectionTitle) {
        let vendorform2 = _.cloneDeep(vendorform1);
        vendorform2.map(val => {
            if (val.SectionTitle == SectionTitle) {
                val.rowFormat = [...val.rowFormat, { id: val.rowFormat.length + 1, Name: `specify${val.rowFormat.length + 1}`, Name: `specify${val.rowFormat.length + 1}`, rowData: SectionTitle == "Qualification" ? QualificationRowformat : EmployementRowFormat }]
                return val;
            }
            return val
        })
        setVendorform1(vendorform2)
    }
    let returnControls = (controlObj) => {
        if (controlObj.SectionTitle == "Qualification" || controlObj.SectionTitle == "EmployementDetail") {
           let arr=[]
            for(let i=0;i<controlObj.intaialCount.length;i++){
            arr.push(controlObj.rowFormat);
            }
            return (<Card className='bg-light'><CardBody>
                {
                    controlObj.SectionTitle && <Col md="12"><h2 className='bg-primary color-light'>{controlObj.SectionTitle}</h2></Col>
                }
<<<<<<< HEAD
                <Table>
                    <tbody>
                        <tr> {
                            controlObj.rowFormat.map((val, i) => <td>{val.label}</td>)
                        }</tr>
                    </tbody>
                    {
                        arr.map((controlObj2,i)=>{
                            return(
                                returnRows(controlObj2.intaialCount, controlObj2, controlObj.SectionTitle,i)
                            )
                        })
                    }
                </Table></CardBody>
                
                <Button onClick={()=>{
                    let index=vendorform1.findIndex(val=>val.SectionTitle==controlObj.SectionTitle);
                    vendorform1[index].intaialCount.push("new")
                    setVendorForm1(vendorform1)
                }}>Add</Button>
                </Card>)
=======
                <Col md="12"><Table>

                    <Row><Col md="1"></Col>{
                        controlObj.rowFormat[0].rowData.filter(val=>val.set==true).map((val, i) => <Col md="1"><label>{val.label}</label></Col>)
                    }</Row>

                    <tbody> {
                        returnRows(controlObj.intaialCount, controlObj.rowFormat, controlObj.SectionTitle)
                    }
                    </tbody> </Table>
                     
                    <Button className='btn-primary color-light' onClick={() => addRow(controlObj.SectionTitle)}>+</Button>
                    {controlObj.SectionTitle == "EmployementDetail" && <span id="experienceError"></span>}
                </Col></>)
>>>>>>> bd5c71abdc4b5cf444c98363b5c4ca6fb22e65ca
        }
        else {
            return returnControl(controlObj)
        }
    }



    return (<>
        {
            JSON.stringify(filtered)
        }
        <form encType='muptipart/form-data'><Row><h1 style={{ textAlign: "center" }}>Application Form</h1></Row>
            <Row>
                {
                    vendorform1 && vendorform1.length && vendorform1.map(controlObj => (returnControls(controlObj)))
                }
            </Row></form><br />
        <Button className='btn btn-primary ml-5 position-absolute' onClick={() => validate()}>Submit</Button>

    </>)
}

export default ApplicationForm;