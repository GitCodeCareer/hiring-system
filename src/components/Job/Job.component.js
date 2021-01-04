import React from "react";
import PropTypes from "prop-types";

import moment from "moment";

import { Badge, ListGroupItem } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisV, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";

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
        <div className="job-card--header mb-3">
          {jobCreatorLogo ? (
            <>
              <img
                className="job-image mr-4"
                src={jobCreatorLogo}
                alt={jobCreator}
              />
              <span className="text-tiny ">
                {moment(dateModified).fromNow()}
              </span>
              <span className="drop-down-icon">
                <FontAwesomeIcon icon={faEllipsisV} />
              </span>
            </>
          ) : (
            <>
              <h3 className="company mr-4">{jobCreator}</h3>
              <span className="text-tiny">
                {moment(dateModified).fromNow()}
              </span>
              <span className="drop-down-icon">
                <FontAwesomeIcon icon={faEllipsisV} />
              </span>
            </>
          )}
        </div>

        <div className="mr-auto">
          <h4 className="job-card--title text-dark">{jobTitle}</h4>
          <h6 className="text-muted">
            <FontAwesomeIcon icon={faMapMarkerAlt} />
            <span className="ml-2">{jobLocation}</span>
          </h6>

          <p>
            {jobDescription.replace(/(<([^>]+)>)/gi, "").substring(0, 100)} ...
          </p>

          <Badge className="p-2 mt-1 mr-2" color="primary">
            {jobWorkType}
          </Badge>
        </div>
      </div>
    </ListGroupItem>
  );
};

Job.propTypes = {
  job: PropTypes.object.isRequired,
};

export default Job;
