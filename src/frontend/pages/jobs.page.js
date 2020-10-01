import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  ListGroup,
  ListGroupItem
} from 'reactstrap';
import Navbar from '../components/navbar.component';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          id: '1',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '2',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '3',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '4',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '5',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '6',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '7',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '8',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '9',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        },
        {
          id: '10',
          title: 'Senior backend developer',
          company: 'Goggle.inc',
          date: '20, Sept 2020',
        }
      ]
    }
  }

  render = () => {
    const { jobs } = this.state;
    return (
      <div>
        <Navbar />
        <Container className="mt-4 mb-4">
          <h1>List of aviable jobs</h1>
          <ListGroup className="mt-5">
            {jobs.map((item, index) => (
              <ListGroupItem disabled tag="a" href="#">
                <div className="d-flex flex-row">
                  <div className="mr-auto">
                    <h4 className="text-dark">{item.title}</h4>
                  </div>
                  <div className="ml-auto">
                    <Button color="primary">See details</Button>
                  </div>
                </div>
                <span className="text-muted">{item.company}</span> <br />
                <span className="text-tiny">{item.date}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    )
  }
}

export default HomePage;