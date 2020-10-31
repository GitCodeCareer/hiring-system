import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  FormGroup,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-date-picker";
import { jobData } from "../data/jobData";

const skillOptions = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "js", label: "Javascript" },
];

const benefitOptions = [
  { value: "medical", label: "Medical" },
  { value: "insurance", label: "Insurance" },
  { value: "loans", label: "Loans" },
];

const visaSelectionOptions = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const EditJob = () => {
  //Data Management
  const { handleSubmit, watch, errors, control, getValues } = useForm();
  const [selectedPostDate, setSelectedPostDate] = useState();
  const watchDate = watch("jobPostDate");

  useEffect(() => {
    if (!getValues("jobPostDate")) {
      return;
    }
    const selectedDate = new Date(getValues("jobPostDate"));
    setSelectedPostDate(selectedDate.toDateString());
  }, [watchDate]);

  const onSubmit = (data) => console.log(data);
  //sample data
  const {
    jobTitle,
    jobDesc,
    jobPostDate,
    workLocation,
    visaSelection,
    skills,
    benefits,
    companyName,
  } = jobData;

  //Display output
  const displaySection = () => (
    <Card body className="shadow-sm p-3 mb-5 bg-white rounded border-0">
      <CardTitle className="text-center">
        <h3>Job Title: {jobTitle}</h3>
      </CardTitle>
      <CardText>
        <Row className="mt-2">
          <Col sm="3">
            <strong>Job Description:</strong>
          </Col>
          <Col>
            <p>{jobDesc}</p>
          </Col>
        </Row>
        <Row className="mt-2">
          <Col sm="3">
            <strong>Skills:</strong>
          </Col>
          <Col>
            {skills.map((skill, index) => (
              <span id={index} class="badge badge-danger p-2 mr-2">
                {skill.label}
              </span>
            ))}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm="3">
            <strong>Company Name:</strong>
          </Col>
          <Col>{companyName}</Col>
        </Row>
        <Row className="mt-2">
          <Col sm="3">
            <strong>Job Post Date:</strong>
          </Col>
          <Col>{jobPostDate}</Col>
        </Row>
        <Row className="mt-2">
          <Col sm="3">
            <strong>Work Location:</strong>
          </Col>
          <Col>{workLocation}</Col>
        </Row>
        <Row className="mt-3">
          <Col sm="3">
            <strong>Benefits:</strong>
          </Col>
          <Col>
            {benefits.map((benefit, index) => (
              <span key={index} class="badge badge-warning p-2 mr-2">
                {benefit.label}
              </span>
            ))}
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm="3">
            <strong>Will sponsor work visa:</strong>
          </Col>
          <Col>
            <span class="badge badge-dark p-3">{visaSelection.label}</span>
          </Col>
        </Row>
      </CardText>
    </Card>
  );

  //Form Section
  const formSection = () => (
    <Card>
      <CardBody>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Controller
              as={Input}
              defaultValue={jobTitle}
              name="jobTitle"
              placeholder="Job Title"
              control={control}
              rules={{ required: true }}
            />
            {errors.jobTitle && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <Controller
              as={Input}
              type="text"
              name="jobDesc"
              defaultValue={jobDesc}
              placeholder="Job Description"
              control={control}
              rules={{ required: true }}
            />
            {errors.jobDesc && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <Controller
              as={Select}
              control={control}
              defaultValue={skills}
              isMulti
              name="skills"
              options={skillOptions}
              className="basic-multi-select"
              classNamePrefix="select"
              rules={{ required: true }}
            />
            {errors.skills && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <Controller
              as={Input}
              control={control}
              defaultValue={companyName}
              name="companyName"
              placeholder="Company Name"
              rules={{ required: true }}
            />
            {errors.companyName && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <FormGroup style={styles.relativeEle}>
            <Input
              name="jobPostDateInput"
              placeholder="Job Post Date"
              defaultValue={jobPostDate}
              value={selectedPostDate}
            />
            <Controller
              name="jobPostDate"
              as={DatePicker}
              control={control}
              rules={{ required: true }}
              maxDate={new Date()}
              clearIcon={null}
              className="app-date-custom-style"
            />
            {errors.jobPostDate && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <Controller
              as={Input}
              control={control}
              defaultValue={workLocation}
              name="workLocation"
              placeholder="Work Location"
              rules={{ required: true }}
            />
            {errors.workLocation && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <Controller
              as={Select}
              control={control}
              isMulti
              options={benefitOptions}
              name="benefits"
              defaultValue={benefits}
              rules={{ required: true }}
            />
            {errors.benefits && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <FormGroup>
            <Controller
              as={Select}
              name="workVisa"
              defaultValue={visaSelection}
              options={visaSelectionOptions}
              control={control}
              rules={{ required: true }}
              placeholder="Will Sponsor Work Visa"
            />
            {errors.workVisa && (
              <span className="error-text">This field is required</span>
            )}
          </FormGroup>
          <Button color="success" className="mx-auto p-2">
            Edit Job
          </Button>
        </Form>
      </CardBody>
    </Card>
  );

  //Render
  return (
    <div className="container mt-4 mb-4">
      <div className="p-1 rounded-top border-bottom" style={styles.heading}>
        <h1 className="text-center">Edit Job</h1>
      </div>
      {/* Display Section */}
      <div className="mt-4">{displaySection()}</div>
      {/* End of Section */}

      {/* Form Section */}
      <div className="mt-4 edit-job-container">{formSection()}</div>
      {/* End of Section */}
    </div>
  );
};

//Custom Styles
const styles = {
  heading: {
    background: "rgb(223, 232, 226)",
  },
  relativeEle: {
    position: "relative",
  },
};

export default EditJob;
