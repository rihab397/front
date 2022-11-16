import { useEffect, useMemo, useState } from "react";
import * as _ from "lodash"
import update from 'immutability-helper';
import { Table, Button, Row, Col, Card, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, InputGroup, Collapse, CardBody, Label, CardFooter } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import * as dashboardActions from "../redux/Actions/dashboard"
import Header from "./utils/header";
import { PersonBoundingBox, GenderAmbiguous, Calendar2, CalendarEventFill, ChevronDoubleRight, ChevronDoubleDown, } from 'react-bootstrap-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { toastr } from "react-redux-toastr";





function Dashboard() {
    let dispatch = useDispatch();
    let [collapse1, setCollapse1] = useState(true);
    let [collapse2, setCollapse2] = useState(true);
    let { data } = useSelector((state) => state.dashboardData);
    ChartJS.register(ArcElement, Tooltip, Legend);
    let [labels, setLabels] = useState([])
    let [dataAll, setdataAll] = useState([])
    let [dataCards, setDataCards] = useState([])

    useEffect(() => {
        if (!(data && data.chartData)) {
            dispatch({ type: dashboardActions.FETCH_DASHBOARD_DATA_REQUEST });
        }
        toastr.error("error", "something is wrong")

    }, [])
    useEffect(() => {
        if (data && Object.keys(data).length) {
            setLabels(data.chartData[0])
            setdataAll(data.chartData[1]);
            let temp = (Object.entries(_.cloneDeep(data))).filter(val => val[0] != "chartData").map(([key, value], i) => {

                return {
                    id: i + 1, name: key,
                    label: keys[key][0],
                    icon: keys[key][1],
                    value: value

                }

            })
            setDataCards(temp)
        }
    }, [data]);

    useEffect(() => {
        return () => {
            dispatch({ type: dashboardActions.FETCH_DASHBOARD_DATA_SUCCESS, payload: {} })
        }
    }, [])

    const data2 = {
        labels: labels,
        datasets: [
            {
                label: labels,
                data: dataAll,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };
    function retControl(label,value) {
        if (typeof value != "object") {
            return (
                <p className="text-light">{label} :{value &&  value}      </p>
            )
        }
        if (typeof value == "object") {
            return (
                <p className="text-light">{value && Object.keys(value).length &&
                    Object.entries(value).map(([ke, val], i) => (
                        <span>&nbsp;&nbsp;{ke}:{val}</span>
                    ))
                }</p>
            )
        }

    }
    let keys = { allApplicants: ["Total Applicant", <Calendar2 size={100} />], currentMonthApplier: ["Current Month Applier", <CalendarEventFill size={100} />], todayApplier: ["Today Applier", <Calendar2 size={100} />], gender: ["Gender", <GenderAmbiguous size={100} />] }
    return (<>
        <Header headerName="Dashboard" />
      
        <br />
        <Card >
            <CardHeader className="bg-secondary" > <Row><Col md={7} className="text-light" onClick={() => setCollapse1(!collapse1)}>
                <span style={{ fontSize: "20px" }}>Dashboard Data</span> &nbsp;&nbsp;
                {collapse1 ? <ChevronDoubleDown onClick={() => setCollapse1(!collapse1)} /> : <ChevronDoubleRight onClick={() => setCollapse1(!collapse1)} />}

            </Col></Row></CardHeader>
            <Collapse isOpen={collapse1} style={{ width: "100%" }} >
                <CardBody>
                    <Row>
                        {dataCards.length > 0 &&
                            dataCards.map(val => (
                                <Col>
                                    <Card className="bg-secondary border-0 mt-5">
                                        <CardBody className="bg-light text-center">
                                            {
                                                val.icon
                                            }
                                        </CardBody>
                                        <CardFooter>{
                                            retControl(val.label,val.value)
                                        }</CardFooter>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
                </CardBody>
            </Collapse>
        </Card>
        <br />

        <Card>
            <CardHeader className="bg-secondary" > <Row><Col md={7} className="text-light" onClick={() => setCollapse2(!collapse2)}>
                <span style={{ fontSize: "20px" }}>Dashboard Charts</span> &nbsp;&nbsp;
                {collapse2 ? <ChevronDoubleDown onClick={() => setCollapse2(!collapse2)} /> : <ChevronDoubleRight onClick={() => setCollapse2(!collapse2)} />}

            </Col></Row></CardHeader>
            <Collapse isOpen={collapse2} style={{ width: "100%" }} >
                <CardBody>

                    {labels.length>0 && dataAll.length>0 &&
                        <Row>
                            <Col md="3" className="offset-1" >
                                {
                                    <Pie data={data2} />
                                }
                                <p className="text-center  bg-secndary">Category Analysis</p>
                            </Col>
                            <Col md="4"></Col>

                            <Col md="3" offset="1">
                                {
                                    <Pie data={data2} />
                                }
                                <p className="text-center  bg-secndary">Category Analysis</p>
                            </Col>
                        </Row>
                    }</CardBody></Collapse>
        </Card>


    </>)
}

export default Dashboard;