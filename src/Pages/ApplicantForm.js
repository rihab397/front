import { useEffect, useState } from 'react'
import { Row, Col, Table, Input, Button ,} from 'reactstrap'
import update from "immutability-helper";
import _ from "lodash";
import * as types from "../redux/Actions/CityStates"
import { useDispatch, useSelector } from 'react-redux';
import * as applicationActions from "../redux/Actions/ApplicationForm"
// import { toast } from 'react-toastify';
import ReactTooltip from "react-tooltip";
// v.SectionTitle == "PermanentDetails" &&<Clipboard size={5} color="balck"  onClick={(e) => copyContactDetails(e)} /> 
import { Clipboard } from 'react-bootstrap-icons';
import { json, Navigate, useNavigate } from 'react-router-dom';
import Header from "../Pages/utils/header"
import * as loaderActions from "../redux/Actions/Loader"
let QualificationRowformat =
    [
        { type: "text", md: 1, label: "Qualification", name: "qualification", validate: true, disable: false, set: false,validate:false },
        { type: "text", md: 2, label: "Collage/School Name", name: "Collage_School_Name", validate: true, disable: false, set: true,validate:true },
        { type: "text", md: 2, label: "Qualification Name", name: "Qualification_Name", validate: true, disable: false, set: true,validate:true },
        { type: "text", md: 2, label: "Univerersity Or Board", name: "UniverersityOrBoard", validate: true, disable: false, set: true,validate:true },
        { type: "datetime-local", md: 2, label: "Passing Year", name: "Passing Year", validate: true, disable: false, set: true,validate:true },
        { type: "Number", md: 1, label: "Percantage", name: "Percantage", validate: true, disable: false, set: true,validate:true },
        { type: "text", md: 1, label: "Division", name: "Division", validate: true, disable: false, set: true,validate:true },
        { type: "multi2", md: 1, label: "Program", name: "Program", validate: true, disable: false, set: true,validate:true, options: [{ id: 1, label: "Regular", value: "Regular" }, { id: 1, label: "Part Time", value: "Part Time" }, { id: 1, label: "Full Time", value: "Full Time" }, { id: 1, label: "Correspondence", value: "Correspondence" },] },
    ]
let EmployementRowFormat = [
    { type: "text", md: 2, label: "Organisation Name", name: "OrganisationName", validate: true, disable: false, set: true,validate:false },
    { type: "text", md: 1, label: "Organisation Address", name: "OrganisationAddress", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 1, label: "Employer Type", name: "EmployerType", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 1, label: "Post Held", name: "PostHeld", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 1, label: "Department", name: "Department", validate: true, disable: false, set: true,validate:true },
    { type: "datetime-local", md: 1, label: "Start From", name: "From", validate: true, disable: false, set: true,validate:true },
    { type: "datetime-local", md: 1, label: "To", name: "To", validate: true, disable: false, set: true,validate:true },
    { disable: true, type: "text", md: 1, label: "Experince Year", name: "ExperinceYear", validate: true, disable: false, set: true,validate:true },
    { type: "text", md: 2, label: "Responsiblilites", name: "Responsiblilites", validate: true, disable: false, set: true,validate:true },
];
function ApplicationForm(props) {
    var [vendorform1, setVendorform1] = useState([
        //disable:false { set: true, type: "text", md: 3, label: "SAP ID", name: "SapId", function: "", sectionTilte: "General Information",  validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Company Name", name: "Company_Name", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "Post Applied", name: "Post_Applied", function: "", validate: true, options: [{ id: 0, label: "C.E.O", value: "C.E.O" }, { id: 1, label: "M.D", value: "M.D" }] },
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
        { disable: false, set: true, type: "multi2", md: 3, label: "Person Disabilities", name: "Person_Disabilities", function: "", validate: true, options: [{ id: 0, label: "Yes", value: "Yes" }, { id: 1, label: "No", value: "No" }] },
        {
            disable: false, set: true, type: "multi2", md: 3, label: "Category", name: "Category", function: "", validate: true, options: [{ id: 1, label: "Genral", value: "Genral" },
            { id: 2, label: "SC", value: "SC" },
            { id: 3, label: "ST", value: "ST" },
            { id: 4, label: "OBC", value: "OBC" },
            { id: 5, label: "EWS", value: "EWS" }
            ]
        },
        { disable: false, set: true, type: "text", SectionTitle: "ContactDetails", Parent: "ContactDetails", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "State", name: "State", function: "", Parent: "ContactDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "City", name: "City", function: "", Parent: "ContactDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "ContactDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "ContactMobile", function: "", Parent: "ContactDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Phone", name: "Phone", function: "", Parent: "ContactDetails", validate: true },
        { disable: false, set: true, type: "text", SectionTitle: "PermanentDetails", Parent: "PermanentDetails", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "State", name: "State", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "multi2", md: 3, label: "City", name: "City", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { disable: false, set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "PermanentDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "PemanentMobile", function: "", Parent: "PermanentDetails", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Phone", name: "PermanentPhone", function: "", Parent: "PermanentDetails", validate: true },
        {
            disable: false, set: true, type: "text", SectionTitle: "Qualification", md: 12, label: "Qualification", name: "Qualification", function: "", validate: false, fields: [], intaialCount: 4, rowFormat: [
                { id: 0, Name: "Matric", rowData:JSON.parse(JSON.stringify( QualificationRowformat)) },
                { id: 1, Name: "PostMatric", rowData: JSON.parse(JSON.stringify( QualificationRowformat)) },
                { id: 2, Name: "Graduation", rowData: JSON.parse(JSON.stringify( QualificationRowformat)) },
                { id: 3, Name: "PostGraduation", rowData: JSON.parse(JSON.stringify( QualificationRowformat)) }
            ]
        },
        {
            disable: false, set: true, type: "text", SectionTitle: "EmployementDetail", md: 12, label: "Qualification", name: "Qualification", function: "", validate: false, fields: [], intaialCount: 4, rowFormat: [
                { id: 0, Name: "Ex1", rowData: JSON.parse(JSON.stringify( EmployementRowFormat))},
                { id: 1, Name: "Ex2", rowData: JSON.parse(JSON.stringify( EmployementRowFormat)) },
                { id: 2, Name: "Ex3", rowData: JSON.parse(JSON.stringify( EmployementRowFormat)) },
                { id: 3, Name: "Ex4", rowData: JSON.parse(JSON.stringify( EmployementRowFormat)) }
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
    let ExpreinceRequired = 5;
    let [filtered, setFiltered] = useState({})
    let [tempString, setTempString] = useState()
    let [valid,setValid]=useState(true);
    let [enableSubmit,setEnableSubmit]=useState(true);
    let navigate=useNavigate();
    useEffect(() => {
        dispatch({ type: types.FETCH_STATES_REQUEST })
    }, [])
    let CityStates = useSelector((state) => state.fetchcitystates)
    
    function finalSubmit(){
        dispatch({type:applicationActions.CAREER_APPLICATION_SUBMIT_SAGA_REQUEST,payload:filtered});
        dispatch({type:loaderActions.LOADING_START,payload:true})
          
     
    }
    
    let validate = () => {
        vendorform1.map((row, index) => {
            if (!row.rowFormat && row.validate && !row.Parent) {
                if (!filtered[row.name]) {
                    setValid(false)
                    vendorform1[index]["error"] = `Please fill the ${row.label} `
                    setVendorform1([...vendorform1])
                    // toast(`Please fill ${row.label}`)

                }
                else {
                    vendorform1[index]["error"] = false
                    setValid(true)
                }
            }

            if (row.Parent && row.Parent !== "Guardian" && row.validate) {
                if (filtered && filtered[row.Parent] && filtered[row.Parent][row.name]) {
                    vendorform1[index]["error"] = false
                    setValid(true)
                }
                else if(filtered && filtered[row.Parent] && !filtered[row.Parent][row.name]){
                    setValid(false)
                    vendorform1[index]["error"] = `Please fill the ${row.label} `
                    setVendorform1([...vendorform1])
                    // toast(`Please fill ${row.label}`)

                }
                else {
                    setValid(false)
                    vendorform1[index]["error"] = `Please fill the ${row.label} `
                    setVendorform1([...vendorform1])
                    // toast(`Please fill ${row.label}`)

                }
               
            }

            
            if (row.rowFormat && row.validate) {
                row.rowFormat.forEach((val, indx) => {

                    val.rowData.forEach((row2, i) => {
                        if (filtered[row.name] && filtered[row.name].some(v => v.Name == val.Name) &&  filtered[row.name][filtered[row.name].findIndex(v => v.Name == val.Name)][row2.name] ) { //if name present and key value presen 
                            vendorform1[index].rowFormat[indx]["rowData"][i]["error"] = false
                            setValid(true)
                        }
                        if (filtered[row.name] && filtered[row.name].some(v => v.Name == val.Name) && row2.validate && !filtered[row.name][filtered[row.name].findIndex(v => v.Name == val.Name)][row2.name] ) { //if name present and key value presen 
                            setValid(false)      
                            vendorform1[index].rowFormat[indx]["rowData"][i]["error"] = `Please fill the ${row2.label} `
                        }
                        else if( !filtered[row.name]){
                            if(val.Name=="Ex1" || val.Name=="Matric"){
                                setValid(false)
                                 vendorform1[index].rowFormat[indx]["rowData"][i]["error"] = `Please fill the ${row2.label} `
                            }
                        }
                    })
                })
                setVendorform1([...vendorform1])
            }
        })
        if (filtered["EmployementDetail"] && filtered["EmployementDetail"] && filtered["EmployementDetail"].some(v => Object.keys(v).some(val => val == "ExperinceYear"))) {
            // let exp = filtered["EmployementDetail"].filter(v => v["ExperinceYear"]).map(v => v["ExperinceYear"][0]).reduce((a, b) => parseInt(a) + parseInt(b));
            let exp =  filtered["EmployementDetail"].filter(v => v["ExperinceYear"]).map(v => v["ExperinceYear"].split(" ")[0].replace("Y",""))
            if (exp < ExpreinceRequired) {
                document.getElementById("experienceError").innerHTML = `Expreince Should have atleast ${ExpreinceRequired} `
                setValid(false)
            }
            else{
                setValid(true)
            }

        }
      
if(valid){
    setEnableSubmit(false)
}
    }
useEffect(()=>{
    dispatch({type:applicationActions.CAREER_APPLICATION_SUBMIT_DATA,payload:filtered})
},[filtered])

let filterd= useSelector((state) => state.Carrer)
useEffect(()=>{
    if(filterd && Object.keys(filterd.Data).length) setFiltered(filterd.Data)
},[])
useEffect(()=>{
    if(filterd && filterd.id){   
       
        navigate(`/Applicantpdf/${filterd.id}`);
      }
},[filterd])


    useEffect(() => {
        let states = CityStates.States;
        let cities = CityStates.City
        // let vendorform2=_.cloneDeep(vendorform1)
        if (Array.isArray(vendorform1) && states.length) {
            vendorform1.map((v) => {
                if (v.name == "State") {
                    v.options = states
                    return v
                }
                if (v.name == "City" && cities.length > 2) {
                    v.options = cities
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
    function setValues(v, e,rowIndex) {
        let filtered2 = _.cloneDeep(filtered);
        if (e.target.name === "State") {
            dispatch({ type: types.FETCH_STATES_REQUEST, payload: e.target.value })
        }
        if (v.Parent && v.Parent != "Guardian") {
            let temp = {};
            if (filtered2[v.Parent]) {
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
                        $set: { [e.target.name]: e.target.value }
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
                    vendorform1[vendorform1.findIndex(v=>v.name=="Age")]["error"]=(year<18 || year >45)?"Age should be between 18 and 45 years":false
                    setVendorform1([...vendorform1])
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
            let filtered2=_.cloneDeep(filtered["ContactDetails"])
            let copyAbleValue=[["Phone","PermanentPhone"],["ContactMobile","PemanentMobile"]]
            filtered["PermanentDetails"] = filtered["ContactDetails"];
            copyAbleValue.map(([key,value])=>{
                if(Object.keys(filtered2).some(val=>val==key)){
                    filtered["PermanentDetails"][value]= filtered["ContactDetails"][key]  
                }
            })     
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
                <ReactTooltip id="registerTip" place="top" effect="solid">
                    Copy from ContactDetails
                </ReactTooltip>
                {
                    v.SectionTitle && <Col md={12}><br/><h2 className='bg-primary text-light'>{v.SectionTitle}{

                        v.SectionTitle == "PermanentDetails" && <span data-tip data-for="registerTip"  style={{ marginLeft: "10px", marginTop: "7px" }}>
                            <Clipboard size={20} color="white" onClick={(e) => copyContactDetails(e)} /> </span>
                    }</h2></Col>
                }
                {v.set && <Col md={v.md}>   {!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col>
                        <input type={v.type}
                            name={v.name}
                            placeholder={v.label}
                            required={v.validate}
                            className="form-control"
                            width={{position:"relative",width:"100%"}}
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
        }
        if (v.type == ("file")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><br/><h2 className='bg-primary text-light'>{v.SectionTitle}</h2></Col>
                }
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
        }
        if (v.type == ("multi2")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><br /><h2 className='bg-primary text-light'>{v.SectionTitle}</h2></Col>
                }
                <Col md={v.md}>  {!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col>  <select type={"select"}
                        name={v.name}
                        className="form-control"
                        onChange={(e) => {
                            
                            if (SectionTitle && (i || i == 0)) { setRowValues(e, i, SectionTitle, Name) }
                            else { setValues(v, e) }
                        
                        }}
                    >
                         <option style={{display:"none"}}></option>
                        {v.options.map((val) => (
                            <option>{val.label}</option>
                        ))
                        }
                    </select>
                        {v.error && <p className='text-danger'>{v.error}</p>}
                    </Col>
                </Col></>)
        }
        if (v.type == ("datetime-local")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><br /><h2 className='bg-primary text-light'>{v.SectionTitle}</h2></Col>
                }
                <Col md={v.md}> {!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col> <input type={v.type}
                        name={v.name}
                        placeholder={v.label}
                        className="form-control"
                        required={v.validate}
                        onChange={e => {
                            if (SectionTitle && (i || i == 0)) { setRowValues(e, i, SectionTitle, Name) }
                            else { setValues(v, e,i) }
                        }}
                    /></Col>
                    {v.error && <p className='text-danger'>{v.error}</p>}
                </Col></>)
        }
    }
    let returnRows = (intaialCount, rowFormat, SectionTitle) => {
        return (<tr>
            {
                rowFormat.length && rowFormat.map((Data, rowIndex) => {
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
                                <>
                                    {
                                        returnControl(val, rowIndex, SectionTitle, Data.Name)
                                    }
                                </>
                            ))
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
            return (<>
                {
                    controlObj.SectionTitle && <Col md="12"><br/><h2 className='bg-primary text-light'>{controlObj.SectionTitle}</h2></Col>
                }
                <Col md="12"><Table>
                    <Row><Col md="1"></Col>{
                        controlObj.rowFormat[0].rowData.filter(val => val.set == true).map((val, i) => <Col md={val.md}><label>{val.label}</label></Col>)
                    }</Row>
                    <tbody> {
                        returnRows(controlObj.intaialCount, controlObj.rowFormat, controlObj.SectionTitle)
                    }
                    </tbody> </Table>
                    <Button className='btn-primary color-light' onClick={() => addRow(controlObj.SectionTitle)}>+</Button>
                    {controlObj.SectionTitle == "EmployementDetail" && <span id="experienceError"></span>}
                </Col></>)
        }
        else {
            return returnControl(controlObj)
        }
    }
    return (<>
    <Header headerName="Appliaction form" />
        
        <form encType='muptipart/form-data'><Row><h1 style={{ textAlign: "center" }}>Application Form</h1></Row>
            <Row>
                {
                    vendorform1 && vendorform1.length && vendorform1.map(controlObj => (returnControls(controlObj)))
                }
            </Row></form><br />
        <Button className='btn btn-primary ml-5' onClick={() => validate()}>validate</Button>
        <Button className='btn btn-primary ml-5 ' disabled={enableSubmit}  onClick={() =>finalSubmit()}>Submit</Button>
    </>)
}
export default ApplicationForm;