import React, { Component } from "react";
import { Container, ListGroup, Input } from "reactstrap";
import Navbar from "../components/navbar.component";

import JobCard from "../components/Job/Job.component";

import { listOfJob } from "../data/jobs";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: listOfJob,
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterWithPropery = this.filterWithPropery.bind(this);
  }

  filterWithPropery(properyName, value) {
    let filteredJobs = this.state.jobs.filter((item) => {
      console.log(item);
      return item[properyName].toLowerCase().includes(value.toLowerCase());
    });
    this.setState({ jobs: filteredJobs });
  }

  handleChange = (e) => {
    if (e.target.value.length >= 3) {
      this.filterWithPropery(e.target.name, e.target.value);
    } else {
      this.setState({ jobs: listOfJob });
    }
  };

  render = () => {
    const { jobs } = this.state;
    return (
      <div>
        <Navbar />
        <Container className="mt-4 mb-4">
          <h1>List of available jobs</h1>
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

          {jobs.length === 0 && (
            <h3 className="text-center mt-5">No result found</h3>
          )}

          <ListGroup className="mt-3">
            {jobs.map((job) => (
              <JobCard job={job} />
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  };
}

export default HomePage;
