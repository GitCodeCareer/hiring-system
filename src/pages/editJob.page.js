import React, { useEffect, useState } from "react";
import {
  Card,
  Form,
  FormGroup,
  CardBody,
  CardTitle,
  Label,
  FormText,
  CardText,
  Row,
  Col,
  Button,
  Input,
} from "reactstrap";
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";
import DatePicker from "react-date-picker";

const skills = [
  { value: "html", label: "HTML" },
  { value: "css", label: "CSS" },
  { value: "js", label: "Javascript" },
];

const benefits = [
  { value: "medical", label: "Medical" },
  { value: "insurance", label: "Insurance" },
  { value: "loans", label: "Loans" },
];

const visaSelection = [
  { value: "yes", label: "Yes" },
  { value: "no", label: "No" },
];

const EditJob = () => {
  const { handleSubmit, watch, errors, control, getValues } = useForm({
    mode: "all",
    reValidateMode: "onChange",
  });

  const [selectedPostDate, setSelectedPostDate] = useState();
  const watchDate = watch("jobPostDate");

  const onSubmit = (data) => {
    // code to submit form
    console.log(data);
  };

  return (
    <div className="container">
      <div className="p-1 rounded-top border-bottom" style={styles.heading}>
        <h1 className="text-center">Edit Job</h1>
      </div>

      <div className="mt-4">
        <Card body className="shadow-sm p-3 mb-5 bg-white rounded border-0">
          <CardTitle className="text-center">
            <h3>Job Title: Senior Developer</h3>
          </CardTitle>
          <CardText>
            <Row className="mt-2">
              <Col sm="3">
                <strong>Job Description:</strong>
              </Col>
              <Col>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col sm="3">
                <strong>Skills:</strong>
              </Col>
              <Col>
                <span class="badge badge-danger p-2 mr-2">Javascript</span>
                <span class="badge badge-primary p-2 mr-2">HTML</span>
                <span class="badge badge-success p-2">CSS</span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm="3">
                <strong>Company Name:</strong>
              </Col>
              <Col>Google.com</Col>
            </Row>
            <Row className="mt-2">
              <Col sm="3">
                <strong>Job Post Date:</strong>
              </Col>
              <Col>Wed Sep 30 2020</Col>
            </Row>
            <Row className="mt-2">
              <Col sm="3">
                <strong>Work Location:</strong>
              </Col>
              <Col>New York</Col>
            </Row>
            <Row className="mt-3">
              <Col sm="3">
                <strong>Benefits:</strong>
              </Col>
              <Col>
                <span class="badge badge-warning p-2 mr-2">Insurance</span>
                <span class="badge badge-info p-2 mr-2">Medical</span>
                <span class="badge badge-secondary p-2">Loan</span>
              </Col>
            </Row>
            <Row className="mt-3">
              <Col sm="3">
                <strong>Will sponsor work visa:</strong>
              </Col>
              <Col>
                <span class="badge badge-success p-3">Yes</span>
              </Col>
            </Row>
          </CardText>
        </Card>
      </div>
      {/* End of Section */}

      {/* Form Section */}

      <div className="mt-4">
        <div className="create-job-container" style={styles.pageContainer}>
          <div>
            <Card style={styles.cardContainer}>
              <CardBody>
                <CardTitle style={styles.section}>
                  <h3> Create New Job</h3>
                </CardTitle>
                <Form
                  style={styles.formContainer}
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <FormGroup>
                    <Controller
                      as={Input}
                      type="text"
                      name="jobTitle"
                      control={control}
                      rules={{ required: true }}
                      placeholder="Enter Job Title"
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
                      control={control}
                      rules={{ required: true }}
                      placeholder="Enter Job Description"
                    />
                    {errors.jobDesc && (
                      <span className="error-text">This field is required</span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Controller
                      name="skills"
                      as={Select}
                      options={skills}
                      control={control}
                      rules={{ required: true }}
                      isMulti
                      placeholder="Select Skills"
                    />
                    {errors.skills && (
                      <span className="error-text">This field is required</span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Controller
                      as={Input}
                      type="text"
                      name="companyName"
                      control={control}
                      rules={{ required: true }}
                      placeholder="Enter Company Name"
                    />
                    {errors.companyName && (
                      <span className="error-text">This field is required</span>
                    )}
                  </FormGroup>
                  <FormGroup style={styles.relativeEle}>
                    <Input
                      type="text"
                      name="jobPostDateInput"
                      placeholder="Select Job Post Date"
                      value={selectedPostDate}
                    />
                    {errors.jobPostDate && (
                      <span className="error-text">This field is required</span>
                    )}
                    <Controller
                      name="jobPostDate"
                      as={DatePicker}
                      control={control}
                      rules={{ required: true }}
                      maxDate={new Date()}
                      clearIcon={null}
                      className="app-date-custom-style"
                    />
                  </FormGroup>
                  <FormGroup>
                    <Controller
                      as={Input}
                      type="text"
                      name="workLocation"
                      control={control}
                      rules={{ required: true }}
                      placeholder="Enter Work Location"
                    />
                    {errors.workLocation && (
                      <span className="error-text">This field is required</span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Controller
                      name="benefits"
                      as={Select}
                      options={benefits}
                      control={control}
                      rules={{ required: true }}
                      placeholder="Select Benefits"
                      isMulti
                    />
                    {errors.benefits && (
                      <span className="error-text">This field is required</span>
                    )}
                  </FormGroup>
                  <FormGroup>
                    <Controller
                      name="workVisa"
                      as={Select}
                      options={visaSelection}
                      control={control}
                      rules={{ required: true }}
                      placeholder="Will Sponsor Work Visa"
                    />
                    {errors.workVisa && (
                      <span className="error-text">This field is required</span>
                    )}
                  </FormGroup>

                  <div style={styles.section}>
                    <Button type="submit" variant="success" color="success">
                      Edit Job
                    </Button>
                  </div>
                </Form>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  heading: {
    background: "rgb(223, 232, 226)",
  },
  relativeEle: {
    position: "relative",
  },
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    margin: "0",
  },
  cardContainer: {
    width: "500px",
    padding: "0 30px",
  },
  formContainer: {
    margin: "20px 0",
  },
};

export default EditJob;
