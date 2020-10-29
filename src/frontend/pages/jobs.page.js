import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, ListGroup, ListGroupItem, Input} from 'reactstrap';
import Navbar from '../components/navbar.component';
import { listOfJob } from '../data/jobs';

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: listOfJob,
      isOpen: false
    };
    this.toggle = this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.filterWithPropery = this.filterWithPropery.bind(this);
  }

  toggle = () => {
    this.setState({isOpen: !this.state.isOpen})
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
          <div className="d-flex justify-content-center mt-3">
                    <div className="input-group  ">
                      <Input
                      className="inputsearch "
                      name="company"
                      onChange={this.handleChange}
                      placeholder="Search with company name"
                      />

                      <Input
                       className="inputsearch "
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
              <ListGroupItem key={item.id} disabled tag="a" href="#">
                <div className="d-flex flex-row">
                  <div className="mr-auto">
                    <h4 className="text-dark">{item.title}</h4>
                  </div>
                  <div>{item.location}</div>
                  <div className="ml-auto">
                    <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-three-dots-vertical" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                    </svg>
                  </div>
                </div>
                <span className="text-muted">{item.company}</span> <br />
                <span className="text-tiny">
                  {item.date} - {item.jobType}
                </span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Container>
      </div>
    );
  };
}

export default HomePage;
