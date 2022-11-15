import { useEffect, useMemo, useState } from "react";
import * as _ from "lodash"
import update from 'immutability-helper';
import { Table, Button, Row, Col, Card, Modal, ModalHeader, ModalBody, ModalFooter, CardHeader, InputGroup, Collapse, CardBody, Label, CardFooter } from "reactstrap"
import { useDispatch, useSelector } from "react-redux"
import * as dashboardActions from "../redux/Actions/dashboard"
import Header from "./utils/header";
import { PersonBoundingBox, GenderAmbiguous, Calendar2, CalendarEventFill } from 'react-bootstrap-icons';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { toastr } from "react-redux-toastr";




function Dashboard() {
    let dispatch = useDispatch();
    let { data } = useSelector((state) => state.dashboardData);
    ChartJS.register(ArcElement, Tooltip, Legend);
    let [labels, setLabels] = useState([])
    let [dataAll, setdataAll] = useState([])
    useEffect(() => {
        if (!(data && data.chartData)) {
            dispatch({ type: dashboardActions.FETCH_DASHBOARD_DATA_REQUEST });
        }
        toastr.error("error", "something is wrong")

    }, [])
    useEffect(() => {
        if (data && Object.keys(data).length) {
            setLabels(data.chartData[0])
            setdataAll(data.chartData[1])
        }
    }, [data]);

    useEffect(() => {
        return () => {
            dispatch({ type: dashboardActions.FETCH_DASHBOARD_DATA_SUCCESS, payload:{}})
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

    return (<>
        <Header headerName="Dashboard" />
        <Card className="border-0" >
            <Row>
                <Col md="3">
                    <Card className="bg-secondary border-0 mt-5">
                        <CardBody className="bg-light text-center">
                            <CalendarEventFill size={100} color="grey" />
                        </CardBody>
                        <CardFooter>
                            <p className="text-light">Total Applicant :{data && Object.keys(data).length && data.allApplicants}       <p>&nbsp;</p></p>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="bg-secondary border-0 mt-5">
                        <CardBody className="bg-light text-center">
                            <Calendar2 size={100} color="grey" />
                        </CardBody>
                        <CardFooter>
                            <p className="text-light">Today Applicant :{data && Object.keys(data).length && data.todayApplier}       <p>&nbsp;</p></p>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="bg-secondary border-0 mt-5">
                        <CardBody className="bg-light text-center">
                            <PersonBoundingBox size={100} color="grey" />
                        </CardBody>
                        <CardFooter>
                            <p className="text-light">Current Month Applier :{data && Object.keys(data).length && data.currentMonthApplier}       <p>&nbsp;</p></p>
                        </CardFooter>
                    </Card>
                </Col>
                <Col md="3">
                    <Card className="bg-secondary border-0 mt-5">
                        <CardBody className="bg-light text-center">
                            <GenderAmbiguous size={100} color="grey" />
                        </CardBody>
                        <CardFooter>
                            <p className="text-light">{data && Object.keys(data).length &&
                                Object.entries(data.gender).map(([key, value], i) => (
                                    <Row>{key}:{value}</Row>
                                ))

                            }</p>
                        </CardFooter>
                    </Card>
                </Col>
            </Row>
        </Card>
        <br />

        <Card>
            <Row>
                <Col md="3" className="offset-1" >
                    
                        <Pie data={data2} />
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
        </Card>


    </>)
}

export default Dashboard;