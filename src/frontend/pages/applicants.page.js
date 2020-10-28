import React from "react";
import { Jumbotron, Container } from "reactstrap";

import { Card, Button, CardTitle, CardText, Row, Col, Table } from "reactstrap";
import { ButtonToggle } from "reactstrap";
const ApplicantsPage = () => {
  return (
    <div className="container mt-4">
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-5">Applicants</h1>
          <p className="lead float-right">
            <strong>Position</strong>: Senior Developer
          </p>
        </Container>
      </Jumbotron>
      <div>
        <Row>
          <Col sm="6 mt-3">
            <Card body>
              <CardTitle>
                <h3>Alex Hales</h3>
                <hr />
              </CardTitle>

              <CardText>
                <Row className="mt-2">
                  <Col sm="6">
                    <strong>Email:</strong>
                  </Col>
                  <Col>alex71@gmail.com</Col>
                </Row>
                <Row className="mt-2">
                  <Col sm="6">
                    <strong>Contact:</strong>
                  </Col>
                  <Col>789456123</Col>
                </Row>
                <Row className="mt-2">
                  <Col sm="6">
                    <strong>Time Zone</strong>
                  </Col>
                  <Col>(GMT -7:00) Mountain Time(US & Canada)</Col>
                </Row>
                <Row className="mt-2">
                  <Col sm="6">
                    <strong>Availibility</strong>
                  </Col>
                  <Col>8:00 - 18:00</Col>
                </Row>
              </CardText>
              <ButtonToggle color="primary">View Resume</ButtonToggle>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ApplicantsPage;
