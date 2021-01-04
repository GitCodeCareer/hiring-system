import React from "react";
import PropTypes from "prop-types";
import { Badge, Button, ListGroupItem } from "reactstrap";

import "../Job/job.styles.css";

const Job = ({ job }) => {
  const {
    userId,
    jobTitle,
    jobCreatorLogo,
    jobLocation,
    jobApplyURL,
    jobCreator,
    dateModified,
    jobDescription,
    jobWorkType,
  } = job;

  return (
    <ListGroupItem className="job-card" tag="a" href={jobApplyURL} key={userId}>
      <div className="d-flex flex-column">
        <div className="mb-3">
          <img className="job-image" src={jobCreatorLogo} alt={jobCreator} />
          <span className="text-tiny">{dateModified}</span>
          <span>...</span>
        </div>
        <div className="mr-auto">
          <h4 className="job-card--title text-dark">{jobTitle}</h4>
          <h6 className="text-muted">{jobLocation}</h6>

          <p>
            {jobDescription.replace(/(<([^>]+)>)/gi, "").substring(0, 100)} ...
          </p>
          <Badge className="p-2 mt-1 mr-2" color="primary">
            {jobWorkType}
          </Badge>
        </div>
      </div>

      {/* <span className="text-muted">{jobCreator}</span> */}
      <br />
    </ListGroupItem>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
