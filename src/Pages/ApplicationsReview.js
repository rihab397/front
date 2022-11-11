import { useEffect, useMemo, useState } from "react";
import * as _ from "lodash"
import update from 'immutability-helper';
import { Table, Button, Row, Col, Card, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, InputGroup, Collapse, CardBody, Label, CardFooter } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import * as dashboardActions from "../redux/Actions/dashboard"
import * as applicationActions from "../redux/Actions/ApplicationForm"
// import ApplicantpdfComponent from "./ApplicantpdfComponent";
import jsPDF from 'jspdf';
import { renderToString } from "react-dom/server"
import "./utils/css/main.css"
import axios from 'axios';
import {ChevronDoubleRight,ChevronDoubleDown } from 'react-bootstrap-icons';
// import _ from "lodash"
import Header from "../Pages/utils/header"


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
            window.open(window.source)
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
    // return window.source
    // window.open(window.source)
  }
}


function ApplicationsReview(props) {
  let dispatch = useDispatch();

  let [source, setsouce] = useState("")
  let [modalView, setmodalView] = useState(false)
  let filterd = useSelector((state) => state.Carrer)
  let [flag, setflag] = useState()
  let [pageNationCount, setPagenationCount] = useState(2);
  let [pageNationArray, setpageNationArray] = useState([])
  let [pageIndex, setPageIndex] = useState(0);
  let [collapse1, setCollapse1] = useState(true);
  let [collapse2, setCollapse2] = useState(true);



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
              // window.open(val)
              setmodalView(true);
            }
          })

        })()
      }
      if (flag == 2) { ApplicantpdfComponent(filterd.webData, flag) }


    }
  }, [filterd])
  let [selectedRow, setSelectedRow] = useState([])
  function pageNation(filterd) {
    if (filterd && filterd.allApplicants && filterd.allApplicants.length) {
      let data = filterd.allApplicants
      let arr = [];
      for (let i = 0; i < data.length; i += pageNationCount) {
        if (data.length - i >= pageNationCount) {
          arr.push(data.slice(i, i + pageNationCount))
        }
        else {
          arr.push(data.slice(i, data.length))
          break;
        }
      }

      setpageNationArray(arr)
      setSelectedRow(arr[pageIndex])
      setPageIndex(0)

    }
  }
  useEffect(() => {
    pageNation(filterd)
  }, [filterd, pageNationCount])

  function searchFilter(e) {    //throtal function
    let timer;
    return function filter2(e) {
      if (timer) timer = 0
      else timer = setTimeout(() => {
        if (e.target.value) {
          let temp = _.cloneDeep(pageNationArray[pageIndex]).filter(v => {
            let expr = new RegExp(e.target.value, "i")
            if (expr.test(v.Company_Name) || expr.test(v.First_Name) || expr.test(v.Post_Applied) || expr.test(v.Category) || expr.test(v._id)) {
              return v
            }
          })
          setSelectedRow(temp)
        }
        else {
          setSelectedRow(_.cloneDeep(pageNationArray)[0])
        }
      }, 1000);
    }
  }




  // let applicantData = filterd.webData;
  // let apiData = filterd.allApplicants;
  let [FromEndDate, setFromEndDate] = useState({});


  function getSingleApplicant(id) {
    dispatch({ type: applicationActions.CAREER_APPLICATION_GET_DATA, payload: id })
  }

  function setDates(e) {
    setFromEndDate({ ...FromEndDate, [e.target.name]: e.target.value })
  }
  function downloadFile(fileName) {
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
      let { data } = await axios.post("http://localhost:4000/Career/ApplicationCount", FromEndDate)
      if (data && data.fileName) {
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
        <Header headerName="Applicant Review Page" />
    <br/>
        <Card>
          <CardHeader className="bg-secondary" > <Row><Col md={7} className="text-light">
              <span style={{fontSize:"15px"}}>Filters and Excel Data</span> &nbsp;&nbsp;
              {collapse1?<ChevronDoubleDown onClick={()=>setCollapse1(!collapse1)}/>:<ChevronDoubleRight onClick={()=>setCollapse1(!collapse1)}/>}
            
            </Col></Row></CardHeader>
      <Collapse isOpen={collapse1} style={{width:"100%"}} >
            <CardBody>
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
          </CardBody>
      </Collapse >
        </Card>
      <br />
   
        <Card>
          <Row>

          </Row>
          <CardHeader className="bg-secondary" >
            <Row>
            <Col md={7} className="text-light">
              <span style={{fontSize:"15px"}}>Applicant Data</span> &nbsp;&nbsp;
              {collapse2?<ChevronDoubleDown onClick={()=>setCollapse2(!collapse2)}/>:<ChevronDoubleRight onClick={()=>setCollapse2(!collapse2)}/>}
            
            </Col>
         
             <Col md="2"><input type={"range"} min={0} max={filterd.allApplicants.length} value={pageNationCount} onChange={(e) => {
                if (e.target.value > 0) {
                  setPagenationCount(e.target.value)
                }
                else {
                  e.target.value = 1;
                  setPagenationCount(1);

                }
              }} />{pageNationCount}</Col>
              <Col md="3"> <input type={"text"} onChange={(e) => {
                let filter = searchFilter();
                filter(e)
              }} placeholder="search" className="form-control" /></Col>
           </Row>
          </CardHeader>
         
          <Collapse isOpen={collapse2}  style={{width:"100%"}}>
          <CardBody style={{width:"100%"}}>
            {selectedRow && selectedRow.length &&
              <table className="table table-borderd">
                <thead className="bg-primary text-light"><tr>{
                  Object.keys(_.head(_.cloneDeep(selectedRow).filter((val) => delete val["Resume"]))).map(val => (
                    <td>{val}</td>
                  ))
                }<td>options</td></tr></thead>
                {
                  _.cloneDeep(selectedRow).filter((val) => delete val["Resume"]).map((row, index) => {
                    return (<tr>
                      {
                        Object.values(row).map(colValue => (
                          <td>{colValue}</td>
                        ))}
                      <td>
                        <button
                          className="btn btn-primary text-dark"
                          onClick={() => { setflag(1); getSingleApplicant(row["_id"]); console.log("helllo") }}
                        >view</button>
                        <button
                          className="btn btn-primary text-dark"
                          onClick={() => { setflag(2); getSingleApplicant(row["_id"]); }}>
                          download</button>
                        <button
                          className="btn btn-danger text-dark"
                          onClick={() => downloadFile(selectedRow[index]["Resume"])}>
                          Resume</button>
                      </td>
                    </tr>)
                  })
                }

              </table>
            } 
          </CardBody>
          <CardFooter >
            
      {
        pageNationArray.length && <nav aria-label="Page navigation example " >
          <ul class="pagination">
            {pageNationArray.map((val, i) => (
              <li class={pageIndex == i ? "page-item active" : "page-item"} onClick={() => { setPageIndex(i); setSelectedRow(pageNationArray[i]) }}><a class="page-link" href="#">{i}</a></li>
            ))
            }
          </ul>
        </nav>
      }
          </CardFooter>
           </Collapse>
        
        </Card>
     
  
<Button onClick={()=>{dispatch({type:dashboardActions.FETCH_DASHBOARD_DATA_REQUEST});console.log("dd")}}>test</Button>

    </>
  );
}

export default ApplicationsReview;


{/* <Col md="3"><Button onClick={() => setmodalView(!modalView)}>Back</Button></Col> */ }

{/* <Modal isOpen={modalView}  {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" toggle={() => setmodalView(!modalView)} centered>
        <ModalHeader>Applicant Pdf</ModalHeader>
        <ModalBody>
          {applicantData.length && source && <iframe src={source} height={500} title="pdfViewer" width={800} />}
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => setmodalView(!modalView)}>Close</button>
        </ModalFooter>
      </Modal>      */}