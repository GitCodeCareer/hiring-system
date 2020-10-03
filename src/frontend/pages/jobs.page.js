import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Container,
  ListGroup,
  ListGroupItem,
  Input
} from 'reactstrap';
import Navbar from '../components/navbar.component';

const listOfJob = [
  {
    id: '1',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Addison',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '2',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Berkeley County',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '3',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Cambridge',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '4',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Chandler',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '5',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Clarksville',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '6',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Detroit',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '7',
    title: 'Senior backend developer',
    company: 'Google.inc',
    location: 'Dallas',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '8',
    title: 'Senior backend developer',
    company: 'Facebook',
    location: 'Salt Lake City',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '9',
    title: 'Senior backend developer',
    company: 'Netflix',
    location: 'Sunnyvale',
    jobType: "Full-time",
    date: '20, Sept 2020',
  },
  {
    id: '10',
    title: 'Senior backend developer',
    company: 'Amazon',
    location: 'Washington D.C.',
    jobType: "Full-time",
    date: '20, Sept 2020',
  }
]

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: listOfJob
    }
    this.handleChange = this.handleChange.bind(this);
    this.filterWithPropery = this.filterWithPropery.bind(this);
  }

  filterWithPropery(properyName, value) {
    let filteredJobs = this.state.jobs.filter((item) => {
      return item[properyName].toLowerCase().includes(value.toLowerCase())
    })
    this.setState({ jobs: filteredJobs })
  }

  handleChange = (e) => {
    if(e.target.value.length >= 3) {
      this.filterWithPropery(e.target.name, e.target.value)
    }else {
      this.setState({ jobs: listOfJob })
    }
  }

  render = () => {
    const { jobs } = this.state;
    return (
      <div>
        <Navbar />
        <Container className="mt-4 mb-4">
          <h1>List of aviable jobs</h1>
          <div className="d-flex justify-content-end mt-3">
            <div className="w-25 mr-2">
              <Input
                name="company"
                onChange={this.handleChange}
                placeholder="Search with company name"
              />
            </div>
            <div className="w-25">
              <Input
                name="location"
                onChange={this.handleChange}
                placeholder="Search with location"
              />
            </div>
          </div>
          {jobs.length == 0 && (
            <h3 className="text-center mt-5">No result found</h3>
          )}
          <ListGroup className="mt-3">
            {jobs.map((item, index) => (
              <ListGroupItem disabled tag="a" href="#">
                <div className="d-flex flex-row">
                  <div className="mr-auto">
                    <h4 className="text-dark">{item.title}</h4>
                  </div>
                  <div>
                    {item.location}
                  </div>
                  <div className="ml-auto">
                    <Button color="primary">See details</Button>
                  </div>
                </div>
                <span className="text-muted">{item.company}</span> <br />
                <span className="text-tiny">{item.date} - {item.jobType}</span> 
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    )
  }
}

export default HomePage;