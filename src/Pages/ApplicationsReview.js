import { useEffect, useState } from "react";
import * as _ from "lodash"
import update from 'immutability-helper';
import { Table, Button, Row, Col, Card, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, InputGroup } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import * as applicationActions from "../redux/Actions/ApplicationForm"
// import ApplicantpdfComponent from "./ApplicantpdfComponent";
import jsPDF from 'jspdf';
import { renderToString } from "react-dom/server"
import axios from 'axios';
// import _ from "lodash"


async function ApplicantpdfComponent(applicantData, flag) {
  let src;
  // const [src, setsrc] = useState();
  let appData = applicantData[0]
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
            data && data.length && Object.keys(_.head(data)[name][0]).map(val => (
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
            // setsrc(blob);
            window.source = blob;
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
    if (appData && appData['Photograph']) {
      getDataUri(`http://localhost:4000/images/${appData['Photograph']}`, createPDF);

    }

  }

  create(flag)
  if (window.source) {
    return window.source
  }
}


function ApplicationsReview(props) {
  let dispatch = useDispatch();

  let [source, setsouce] = useState("")
  let [modalView, setmodalView] = useState(false)
  let filterd = useSelector((state) => state.Carrer)
  let [flag, setflag] = useState()


  useEffect(() => {
    dispatch({ type: applicationActions.CAREER_FETCH_ALL_APPLICATION_DATA_REQUEST })
  }, [])
  useEffect(() => {
    if (filterd.webData.length && flag) {
      // if (source && flag==1) {
      //   setmodalView(true);
      // }

      if (flag == 1) {
        (async () => {
          await ApplicantpdfComponent(filterd.webData, flag).then(val => {
            if (val) {
              setsouce(val)
              window.open(val)
              setmodalView(true);
            }
          })

        })()
      }
      if (flag == 2) { ApplicantpdfComponent(filterd.webData, flag) }

    }
  }, [filterd])


  let applicantData = filterd.webData;
  let apiData = filterd.allApplicants;
  let [FromEndDate, setFromEndDate] = useState({});

  function getSingleApplicant(id) {
    dispatch({ type: applicationActions.CAREER_APPLICATION_GET_DATA, payload: id })
  }

  function setDates(e) {
    setFromEndDate({ ...FromEndDate, [e.target.name]: e.target.value })
  }
function downloadFile(fileName){
  axios.get("http://localhost:4000/Career/downloadFile",
      {
          params: {
              fileName: fileName
          },
          responseType: 'arraybuffer'
      }).then(res => { // then print response status
          var blob = new Blob([res.data]);
          var url = URL.createObjectURL(blob);
          var a = document.createElement("a");
          document.body.appendChild(a);
          a.href = url;
          a.download = fileName;
          a.click();
          window.URL.revokeObjectURL(url);
      });
}

  async function fetchAndSaveExcelDataOfApplicants() {
    if (Object.keys(FromEndDate).length > 0) {
      let {data} =await axios.post("http://localhost:4000/Career/ApplicationCount", FromEndDate)
      if(data && data.fileName){
        downloadFile(data.fileName)        
      }
      console.log(data);
    }
  }

  function returnControl(type, name, label, md, functn, error) {
    if (type == ("datetime-local")) {
      return (<>
        <Col md={md}> <input type={type}
          name={name}
          placeholder={label}
          className="form-control"
          onChange={e => {
            functn(e)
          }}
        /></Col>
        {error && <p className='text-danger'>{error}</p>}
      </>)
    }
  }

  return (
    <>
      <Card>
        <CardHeader><h2>filter Applicant</h2></CardHeader>
        <Row>
          <Row>
            <Col>
              <label for="setDates">Find Applicants of a particular Date</label>
              <Row>
                 <Col><Row><InputGroup className="formControl">
                  {returnControl("datetime-local", "fromDate", "fromDate", 3, setDates)}
                  <Col>&nbsp;</Col>
                <Col><p>To</p></Col>
                {returnControl("datetime-local", "EndDate", "EndDate", 3, setDates)}
                </InputGroup></Row></Col>
                <Col><Button color="danger" onClick={() => fetchAndSaveExcelDataOfApplicants()}>Save</Button></Col>
              </Row>
            </Col>
          </Row>
          <Row><Col>
            <label for="setDates">Find Applicants between a Date Range</label>
            <Row> <Col>{returnControl("datetime-local", "fromDate", "fromDate", 3, setDates)}
            </Col>
            <Col><Button color="danger" onClick={() => fetchAndSaveExcelDataOfApplicants()}>Save</Button></Col>
            </Row>
          </Col>
          </Row>
        </Row>
      </Card>

      <br />
      <Card>
        <CardHeader><h2>Applicant Data</h2></CardHeader>
        {apiData.length &&
          <table className="table table-borderd">
            <thead className="bg-primary text-light"><tr>{
              Object.keys(_.head(_.cloneDeep(apiData).filter((val)=>delete val["Resume"]))).map(val => (
                <td>{val}</td>
              ))
            }<td>options</td></tr></thead>
            {
            _.cloneDeep(apiData).filter((val)=>delete val["Resume"]).map((row,index) => {
                return (<tr>
                  {
                    Object.values(row).map(colValue => (
                      <td>{colValue}</td>
                    ))}
                  <td>
                    <button className="btn btn-primary text-dark" onClick={() => { setflag(1); getSingleApplicant(row["_id"]); console.log("helllo") }}>view</button>
                    <button className="btn btn-primary text-dark" onClick={() => { setflag(2); getSingleApplicant(row["_id"]); }}>download</button>
                    <button className="btn btn-danger text-dark" onClick={()=>downloadFile(apiData[index]["Resume"])}>Resume</button>
                  </td>
                </tr>)
              })
            }

          </table>
        }


      </Card>
      <Col md="3"><Button onClick={() => setmodalView(!modalView)}>Back</Button></Col>

      {/* <Modal isOpen={modalView}  {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" toggle={() => setmodalView(!modalView)} centered>
        <ModalHeader>Applicant Pdf</ModalHeader>
        <ModalBody>
          {applicantData.length && source && <iframe src={source} height={500} title="pdfViewer" width={800} />}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => setmodalView(!modalView)}>Close</button>
        </ModalFooter>
      </Modal>      */}

    </>
  );
}

export default ApplicationsReview;
