import { Row, Col } from "reactstrap";
export default function Footer(props) {
 
    return (
        <footer className="footer bg-primary text-light " id="footer" >
            <div style={{ width: "100%" }}>
                <Row>
                    <Col md="4" className="offset-8 d-flex justify-center">
                        <h4 className="bg-primary text-light d-flex text-center ml-3">{"@Powered by tech Inovation private Limited"}</h4>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}