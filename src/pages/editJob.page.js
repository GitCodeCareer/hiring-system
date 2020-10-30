import React from "react";
import {
  Jumbotron,
  Container,
  Card,
  CardTitle,
  CardText,
  Row,
  Col,
  ButtonToggle,
} from "reactstrap";

const EditJob = () => {
  return (
    <div className="container mt-4">
      <div className="p-1 rounded-top border-bottom" style={style.heading}>
        <h1 className="text-center">Edit Job</h1>
      </div>
      <div>
        <div className="mt-4">
          <Card body className="shadow-sm p-3 mb-5 bg-white rounded border-0">
            <CardTitle className="text-center">
              <h3>Job Title: Senior Developer</h3>
            </CardTitle>
            <CardText>
              <Row className="mt-2">
                <Col sm="2">
                  <strong>Job Description:</strong>
                </Col>
                <Col>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </Col>
              </Row>
              <Row className="mt-2">
                <Col sm="2">
                  <strong>Skills:</strong>
                </Col>
                <Col>
                  <span class="badge badge-danger p-2 mr-2">Javascript</span>
                  <span class="badge badge-primary p-2 mr-2">HTML</span>
                  <span class="badge badge-success p-2">CSS</span>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm="2">
                  <strong>Company Name:</strong>
                </Col>
                <Col>Google.com</Col>
              </Row>
              <Row className="mt-2">
                <Col sm="2">
                  <strong>Job Post Date:</strong>
                </Col>
                <Col>Wed Sep 30 2020</Col>
              </Row>
              <Row className="mt-2">
                <Col sm="2">
                  <strong>Work Location:</strong>
                </Col>
                <Col>New York</Col>
              </Row>
              <Row className="mt-3">
                <Col sm="2">
                  <strong>Benefits:</strong>
                </Col>
                <Col>
                  <span class="badge badge-warning p-2 mr-2">Insurance</span>
                  <span class="badge badge-info p-2 mr-2">Medical</span>
                  <span class="badge badge-secondary p-2">Loan</span>
                </Col>
              </Row>
              <Row className="mt-3">
                <Col sm="2">
                  <strong>Will sponsor work visa:</strong>
                </Col>
                <Col>
                  <span class="badge badge-success p-3">Yes</span>
                </Col>
              </Row>
            </CardText>
          </Card>
        </div>
        <div className="mt-4">
          <Card
            body
            className="shadow-sm p-3 mb-5 bg-white rounded border-0 mt-4"
          >
            <CardTitle>Special Title Treatment</CardTitle>
            <CardText>
              With supporting text below as a natural lead-in to additional
              content.
            </CardText>
            <ButtonToggle>Go somewhere</ButtonToggle>
          </Card>
        </div>
      </div>
    </div>
  );
};

const style = {
  heading: {
    background: "rgb(223, 232, 226)",
  },
};

export default EditJob;
