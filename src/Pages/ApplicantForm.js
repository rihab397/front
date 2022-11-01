// import { Table } from 'bootstrap'
import { useState } from 'react'
import { Row, Col, Table, Input } from 'reactstrap'
import update from "immutability-helper";
import _ from "lodash";
function ApplicationForm(props) {
    var vendorform1 = [
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
        {
            set: true, type: "multi2", md: 3, label: "Person Disabilities", name: "Person_Disabilities", function: "", validate: true, options: [{ id: 1, label: "Genral", value: "Genral" },
            { id: 2, label: "SC", value: "SC" },
            { id: 3, label: "ST", value: "ST" },
            { id: 4, label: "OBC", value: "OBC" },
            { id: 5, label: "EWS", value: "EWS" }
            ]
        },
        { set: true, type: "text", SectionTitle: " ContactDetail", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
        { set: true, type: "text", md: 3, label: "City", name: "City", function: "", Parent: "ContactDetails", validate: true },
        { set: true, type: "text", md: 3, label: "State", name: "State", function: "", Parent: "ContactDetails", validate: true },
        { set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "ContactDetails", validate: true },
        { set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", Parent: "ContactDetails", validate: true },
        { set: true, type: "text", md: 3, label: "Phone", name: "Phone", function: "", Parent: "ContactDetails", validate: true },
        { set: true, type: "text", SectionTitle: " PermanentDetails", md: 3, label: "Correspondence Address", name: "Correspondence_Address", function: "", validate: true },
        { set: true, type: "Multi2", md: 3, label: "City", name: "City", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { set: true, type: "Multi2", md: 3, label: "State", name: "State", function: "", Parent: "PermanentDetails", validate: true, options: [{ id: 0, label: "New Delhi", value: "New Delhi" }] },
        { set: true, type: "Number", md: 3, label: "Pin", name: "Pin", function: "", Parent: "PermanentDetails", validate: true },
        { set: true, type: "text", md: 3, label: "Mobile", name: "Mobile", function: "", Parent: "PermanentDetails", validate: true },
        { set: true, type: "text", md: 3, label: "Phone", name: "Phone", function: "", Parent: "PermanentDetails", validate: true },
        {
            set: true, type: "text", SectionTitle: "Qualification", md: 12, label: "Qualification", name: "Qualification", function: "", validate: true, fields: [], intaialCount: 4, rowFormat: [
                { type: "text", md: 3, label: "Qualification", name: "Qualification", validate: true },
                { type: "text", md: 3, label: "Collage/School Name", name: "Collage_School_Name", validate: true },
                { type: "text", md: 3, label: "Qualification Name", name: "Qualification_Name", validate: true },
                { type: "text", md: 3, label: "Univerersity Or Board", name: "UniverersityOrBoard", validate: true },
                { type: "datetime-local", md: 3, label: "Passing Year", name: "Passing Year", validate: true },
                { type: "Number", md: 3, label: "Percantage", name: "Percantage", validate: true },
                { type: "text", md: 3, label: "Division", name: "Division", validate: true },
                { type: "Mutlti2", md: 3, label: "Program", name: "Program", validate: true, options: [{ id: 1, label: "Regular", value: "Regular" }, { id: 1, label: "Part Time", value: "Part Time" }, { id: 1, label: "Full Time", value: "Full Time" }, { id: 1, label: "Correspondence", value: "Correspondence" },] },
            ]
        },
        {
            set: true, type: "text", SectionTitle: "EmployementDetail", md: 12, label: "Qualification", name: "Qualification", function: "", validate: true, fields: [], intaialCount: 4, rowFormat: [
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
    ]

    let [filtered, setFiltered] = useState({})

    let setChildData = (i, SectionTitle, e) => {
        let filtered2 = _.cloneDeep(filtered);
        let final;
        if (filtered && filtered[SectionTitle] && filtered[SectionTitle][i]) {
            final = update(filtered2, {
                [SectionTitle]:{
                    [i]:{
                        [e.target.name]:{$set:e.target.value}
                    }
                }
              })
         }
        else {
            final = update(filtered2, {
              [SectionTitle]:{$push:[{[e.target.name]:e.target.value}]
              }
            })
        }

    }

    let returnControl = (v, i, SectionTitle) => {
        if ((v.type == "text") || (v.type == "Number") || (v.type == "textarea")) {
            return (<Col md={v.md}>
                {
                    v.SectionTitle && <h1 style={{ backgrond: "grey" }}>{v.SectionTitle}</h1>
                }
                <label for={v.label}>{v.label}</label>
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
        }

        if (v.type == ("file")) {
            return (<Col md={v.md}>
                {
                    v.SectionTitle && <h1 style={{ backgrond: "grey" }}>{v.SectionTitle}</h1>
                }
                <label for={v.label}>{v.label}</label>
                <input type={v.type}
                    name={v.name}
                    placeholder={v.label}
                    required={v.validate}
                    onChange={e => setFiltered({ ...filtered, [e.target.name]: e.target.files[0] })}
                />
                <span>{v.error ? v.error : null}</span>
            </Col>)
        }

        if (v.type == ("multi2")) {
            return (<Col md={v.md}>
                {
                    v.SectionTitle && <h1 style={{ backgrond: "grey" }}>{v.SectionTitle}</h1>
                }
                <label for={v.label}>{v.label}</label>
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
        }

        if (v.type == ("datetime-local")) {
            return (<Col md={v.md}>
                {
                    v.SectionTitle && <h1 style={{ backgrond: "grey" }}>{v.SectionTitle}</h1>
                }
                <label for={v.label}>{v.label}</label>
                <input type={v.type}
                    name={v.name}
                    placeholder={v.label}
                    required={v.validate}
                    onChange={e => setFiltered({ ...filtered, [e.target.name]: e.target.value })}
                />
                <span>{v.error ? v.error : null}</span>
            </Col>)
        }


    }


    let returnRows = (intaialCount, rowFormat, SectionTitle) => {
        // let TotalRows = []
        // for (let i = 0; i < intaialCount; i++) {
        //     TotalRows.push[rowFormat]
        // }
        return (<><tr>
            {
                rowFormat.length && rowFormat.map((rowData, i) => {
                    return (

                        <td>
                            {
                                returnControl(rowData, i, SectionTitle)
                            }
                        </td>

                    )
                })
            }
        </tr> </>)
    }

    let returnControls = (controlObj) => {
        if (controlObj.SectionTitle == "Qualification" || controlObj.SectionTitle == "EmployementDetail") {
            return (<>
                {
                    controlObj.SectionTitle && <h1 style={{ backgrond: "grey" }}>{controlObj.SectionTitle}</h1>
                }
                <Table>
                    <tbody>
                        <tr> {
                            controlObj.rowFormat.map((val, i) => <td>{val.label}</td>)
                        }</tr>
                    </tbody>
                    {
                        returnRows(controlObj.intaialCount, controlObj.rowFormat, controlObj.SectionTitle)
                    }
                </Table></>)
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