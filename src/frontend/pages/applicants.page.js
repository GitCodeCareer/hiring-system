import React from "react";
//Reactstrap Components
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
//Data
import { listOfApplicants } from "../data/applicants";

const ApplicantsPage = () => {
  return (
    <div className="container mt-4 mb-4">
      <Jumbotron fluid className="border-bottom rounded-top">
        <Container fluid>
          <h1 className="display-5">Applicants</h1>
          <p className="lead float-right font-weight-bold">
            <strong>Position</strong>: Senior Developer
          </p>
        </Container>
      </Jumbotron>
      <div>
        <Row>
          {/* Map through all the data */}
          {listOfApplicants.map((applicant) => (
            <Col sm="6 mt-4" key={applicant.id}>
              <Card body>
                <CardTitle>
                  <h3>{applicant.name}</h3>
                  <hr />
                </CardTitle>

                <CardText>
                  <Row className="mt-2">
                    <Col sm="6">
                      <strong>Email:</strong>
                    </Col>
                    <Col>{applicant.email}</Col>
                  </Row>
                  <Row className="mt-2">
                    <Col sm="6">
                      <strong>Contact:</strong>
                    </Col>
                    <Col>7{applicant.contact}</Col>
                  </Row>
                  <Row className="mt-2">
                    <Col sm="6">
                      <strong>Time Zone</strong>
                    </Col>
                    <Col>{applicant.timeZone}</Col>
                  </Row>
                  <Row className="mt-2">
                    <Col sm="6">
                      <strong>Availibility</strong>
                    </Col>
                    <Col>{applicant.availability}</Col>
                  </Row>
                </CardText>
                <ButtonToggle color="primary">View Resume</ButtonToggle>
              </Card>
            </Col>
          ))}
          {/* end of data mapping */}
        </Row>
      </div>
    </div>
  );
};

export default ApplicantsPage;
