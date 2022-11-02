// import { Table } from 'bootstrap'
import { useEffect, useState } from 'react'
import { Row, Col, Table, Input, Button } from 'reactstrap'
import update from "immutability-helper";
import _ from "lodash";
import * as types from "../redux/Actions/CityStates"
import { useDispatch, useSelector } from 'react-redux';


let QualificationRowformat =
    [
        { type: "text", md: 1, label: "Qualification", name: "Qualification", validate: true, disable: false, set: true },
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
    { type: "text", md: 1, label: "Experince Year", name: "ExperinceYear", validate: true, disable: false, set: true },
    { type: "text", md: 1, label: "Responsiblilites", name: "Responsiblilites", validate: true, disable: false, set: true },
];
function ApplicationForm(props) {
    
    var [vendorform1, setVendorform1] = useState([
        //disable:false { set: true, type: "text", md: 3, label: "SAP ID", name: "SapId", function: "", sectionTilte: "General Information",  validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "First Name", name: "First_Name", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Middle Name", name: "Middle_Name", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Last Name", name: "Last_Name", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Former First Name", name: "Former_First_Name", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Former Middle Name", name: "Former_Middle_Name", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Former Last Name", name: "Former_Last_Name", function: "", validate: true },
        { disable: false, set: true, type: "multi2", md: 3, label: "Guardian", name: "Guardian", function: "", validate: true, options: [{ id: 0, label: "Husband", value: "Husband" }, { id: 1, label: "Father", value: "Father" }] },
        { disable: false, set: false, type: "text", md: 3, label: "Guardian First Name", name: "Guardian_First_Name", Parent: "Guardian", function: "", validate: true },
        { disable: false, set: false, type: "text", md: 3, label: "Guardian Middle Name", name: "Guardian_Middle_Name", Parent: "Guardian", function: "", validate: true },
        { disable: false, set: false, type: "text", md: 3, label: "Guardian Last Name", name: "Guardian_Last_Name", Parent: "Guardian", function: "", validate: true },

        { disable: false, set: true, type: "datetime-local", md: 3, label: "Date Of Birth", name: "DOB", function: "", validate: true },
        { disable: false, set: true, type: "Number", md: 3, label: "Age", name: "Age", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Gender", name: "Gender", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Nationality", name: "Nationality", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Martial Status", name: "MartialStatus", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Alternative Mobile Number ", name: "AlternativeMobile", function: "", validate: true },
        { disable: false, set: true, type: "text", md: 3, label: "Category", name: "Category", function: "", validate: true },
        {
            disable: false, set: true, type: "multi2", md: 3, label: "Person Disabilities", name: "Person_Disabilities", function: "", validate: true, options: [{ id: 1, label: "Genral", value: "Genral" },
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
        { disable: false, set: true, type: "multi2", md: 8, SectionTitle: "Other Details", label: "Are you currently under service agreement/bond with your existing employer? ", name: "UnderServiceBond", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { disable: false, set: true, type: "multi2", md: 8, label: "Have you ever been charged or convicted for any criminal offense in India or abroad?", name: "CriminalCase", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { disable: false, set: true, type: "multi2", md: 8, label: "Are you related to anyone who works for IFCI Ltd/IFCI Group Campanies?", name: "ReltatedToIfci", validate: true, options: [{ id: 1, label: "true", value: true }, { id: 1, label: "false", value: false }] },
        { disable: false, set: true, type: "textarea", md: 3, label: "Academic Achievements", name: "AcademicAchievements", validate: true },
        { disable: false, set: true, type: "textarea", md: 3, label: "ProfessionalAchievements", name: "ProfessionalAchievements", validate: true },
        { disable: false, set: true, type: "datetime-local", md: 3, label: "JoiningTime", name: "JoiningTime", validate: true },
        { disable: false, set: true, type: "file", md: 3, label: "Photograph", name: "Photograph", validate: true },
        { disable: false, set: true, type: "file", md: 3, label: "Signature", name: "Signature", validate: true },
        { disable: false, set: true, type: "file", md: 3, label: "Resume", name: "Resume", validate: true },
    ])
    let dispatch = useDispatch()

    let [filtered, setFiltered] = useState({})
    useEffect(() => {
        dispatch({ type: types.FETCH_STATES_REQUEST })
    }, [])
   


    let CityStates = useSelector((state) => state.fetchcitystates)
    useEffect(() => {
        dispatch({ type: types.FETCH_STATES_REQUEST,payload:filtered["State"] })
    }, [filtered["ContactDetails"]["State"]])


   

    let setChildData = (i, SectionTitle, e) => {
        let filtered2 = _.cloneDeep(filtered);
        let final;
        if (filtered && filtered[SectionTitle] && filtered[SectionTitle][i]) {
            final = update(filtered2, {
                [SectionTitle]: {
                    [i]: {
                        [e.target.name]: { $set: e.target.value }
                    }
                }
            })
        }
        else {
            final = update(filtered2, {
                [SectionTitle]: {
                    $push: [{ [e.target.name]: e.target.value }]
                }
            })
        }

    }
    useEffect(() => {
        let states = CityStates.States;
        // let vendorform2=_.cloneDeep(vendorform1)
        if(Array.isArray(vendorform1) && states.length){
        vendorform1.map((v) => {
            if (v.name == "State") {
                v.options = states
                return v
            }
            return v
        })
    }
        setVendorform1([ ...vendorform1 ])
    }, [CityStates])
    function setValues(v, e) {
        let filtered2 = _.cloneDeep(filtered)
        if (v.Parent && v.Parent != "Guardian") {
            let temp = {};
            if (filtered2[v.Parent]) {

                // filtered2[v.Parent] = { ...filtered2[v.Parent], [e.target.name]: e.target.value }
                // setFiltered({ ...filtered2 })

                let newd = update(filtered2, {
                    [v.Parent]: {
                        [e.target.name]: { $set: e.target.value }
                    }
                })
                setFiltered(newd)
            }

            else {
                // temp[v.Parent] = { [e.target.name]: e.target.value }
                // setFiltered({ ...filtered2, ...temp })

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
            setFiltered({ ...filtered2, [e.target.name]: e.target.value })
        }
    }
    function copyContactDetails() {
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
                        v.SectionTitle == "PermanentDetails" && <button className='bg-secondary text-light' onClick={() => copyContactDetails()}>copy</button>

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
                                    ((v.Parent == "PermanentDetails" || v.Parent == "ContactDetails") && filtered[v.Parent] && filtered[v.Parent][v.name] ? filtered[v.Parent][v.name] :
                                        filtered[v.name] ? filtered[v.name] : ""
                                    ) :
                                    ""
                            }

                            disabled={v.disable}

                            onChange={e => {
                                setValues(v, e)

                            }}
                        /></Col>
                    <span>{v.error ? v.error : null}</span>
                </Col>}</>)
        }

        if (v.type == ("file")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><h2 className='bg-primary color-light'>{v.SectionTitle}</h2></Col>
                }
                <Col md={v.md}>{!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col><input type={v.type}
                        name={v.name}
                        placeholder={v.label}
                        required={v.validate}
                        className="form-control"
                        onChange={e => setFiltered({ ...filtered, [e.target.name]: e.target.files[0] })}
                    /></Col>
                    <span>{v.error ? v.error : null}</span>
                </Col></>)
        }

        if (v.type == ("multi2")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><h2 className='bg-primary color-light'>{v.SectionTitle}</h2></Col>
                }
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
                    </select></Col>
                    <span>{v.error ? v.error : null}</span>
                </Col></>)
        }

        if (v.type == ("datetime-local")) {
            return (<>
                {
                    v.SectionTitle && <Col md={12}><h2 className='bg-primary color-light'>{v.SectionTitle}</h2></Col>
                }
                <Col md={v.md}> {!SectionTitle && (!i || i == 0) && <Col><label for={v.label}>{v.label}</label></Col>}
                    <Col> <input type={v.type}
                        name={v.name}
                        placeholder={v.label}
                        className="form-control"
                        required={v.validate}
                        onChange={e => setFiltered({ ...filtered, [e.target.name]: e.target.value })}
                    /></Col>
                    <span>{v.error ? v.error : null}</span>
                </Col></>)
        }


    }


    let returnRows = (intaialCount, rowFormat, SectionTitle) => {
        // let TotalRows = []
        // for (let i = 0; i < intaialCount; i++) {
        //     TotalRows.push[rowFormat]
        // }
        return (<><tr>
            {
                rowFormat.length && rowFormat.map((Data, i) => {
                    return (<Row>
                        <Col md="1">{Data.Name ? Data.Name : <input className='form-control' onChange={(e => {
                            vendorform1.map(val => {
                                if (val.SectionTitle == SectionTitle) {
                                    val.rowFormat[i].Name = e.target.value
                                }
                            })
                            setVendorform1(vendorform1)
                        })} />}</Col>
                        {
                            Data.rowData.map(val => (
                                <Col>
                                    {
                                        returnControl(val, i, SectionTitle, Data.Name)
                                    }
                                </Col>
                            ))

                        }</Row>)

                })
            }
        </tr> </>)
    }
    function addRow(SectionTitle) {
        let vendorform2 = _.cloneDeep(vendorform1);
        vendorform2.map(val => {
            if (val.SectionTitle == SectionTitle) {
                val.rowFormat = [...val.rowFormat, { id: 0, Name: "", rowData: SectionTitle == "Qualification" ? QualificationRowformat : EmployementRowFormat }]
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
                    controlObj.SectionTitle && <Col md="12"><h2 className='bg-primary color-light'>{controlObj.SectionTitle}</h2></Col>
                }
                <Col md="12"><Table>

                    <Row><Col md="1"></Col>{
                        controlObj.rowFormat[0].rowData.map((val, i) => <Col md="1"><label>{val.label}</label></Col>)
                    }</Row>

                    <tbody> {
                        returnRows(controlObj.intaialCount, controlObj.rowFormat, controlObj.SectionTitle)
                    }
                    </tbody> </Table>

                    <Button className='btn-primary color-light' onClick={() => addRow(controlObj.SectionTitle)}>+</Button>
                </Col></>)
        }
        else {
            return returnControl(controlObj)
        }
    }



    return (<>
        {
            JSON.stringify(filtered)
        }
        <Row><h1 style={{ textAlign: "center" }}>Application Form</h1></Row>
        <Row>
            {
                vendorform1 && vendorform1.length && vendorform1.map(controlObj => (returnControls(controlObj)))
            }
        </Row>
    </>)
}

export default ApplicationForm;