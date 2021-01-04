import React from "react";
import PropTypes from "prop-types";
import { ListGroupItem } from "reactstrap";

const Job = ({ job }) => {
  const {
    userId,
    jobTitle,
    jobCreatorLogo,
    jobLocation,
    jobApplyURL,
    jobCreator,
    dateModified,
    jobWorkType,
  } = job;

  return (
    <ListGroupItem key={userId}>
      <div className="d-flex flex-row">
        <div className="mr-auto">
          <h4 className="text-dark">{jobTitle}</h4>
        </div>
        <div>
          <img className="img-fluid" src={jobCreatorLogo} alt={jobCreator} />
        </div>
        <div>{jobLocation}</div>
        <div className="ml-auto">
          <a href={jobApplyURL} color="primary">
            See details
          </a>
        </div>
      </div>
      <span className="text-muted">{jobCreator}</span> <br />
      <span className="text-tiny">
        {dateModified} - {jobWorkType}
      </span>
    </ListGroupItem>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
