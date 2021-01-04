import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Input } from "reactstrap";
import Navbar from "../components/navbar.component";

import JobCard from "../components/Job/Job.component";

import { listOfJob } from "../data/jobs";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: listOfJob.splice(0, 2),
    };
    this.handleChange = this.handleChange.bind(this);
    this.filterWithPropery = this.filterWithPropery.bind(this);
  }

  filterWithPropery(properyName, value) {
    let filteredJobs = this.state.jobs.filter((item) => {
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
            {jobs.map((job, index) => (
              <JobCard job={job} />

              // <ListGroupItem key={item.userId}>
              //   <div className="d-flex flex-row">
              //     <div className="mr-auto">
              //       <h4 className="text-dark">{item.jobTitle}</h4>
              //     </div>
              //     <div>
              //       <img
              //         className="img-fluid"
              //         src={item.jobCreatorLogo}
              //         alt=""
              //       />
              //     </div>
              //     <div>{item.jobLocation}</div>
              //     <div className="ml-auto">
              //       <a href={item.jobApplyURL} color="primary">
              //         See details
              //       </a>
              //     </div>
              //   </div>
              //   <span className="text-muted">{item.jobCreator}</span> <br />
              //   <span className="text-tiny">
              //     {item.dateModified} - {item.jobWorkType}
              //   </span>
              // </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  };
}

export default HomePage;
