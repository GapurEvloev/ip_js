import {Container, Row, Col} from "react-bootstrap";
import IndividualIntervalsExample from "./BootstrapCarousel";
import FormBasicExample from "./BootstrapForm";

const BootstrapGrid = () => {
  return (
    <Container className="mt-5 mb-5">
      <Row>
        <Col>
          <FormBasicExample/>
        </Col>
        <Col>2 of 2</Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col>2 of 3</Col>
        <Col>3 of 3</Col>

        <IndividualIntervalsExample/>
      </Row>
    </Container>
  );
}

export default BootstrapGrid;
