import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  Button,
  Form,
  FormGroup,
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

const CreateJob = () => {
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

  useEffect(() => {
    if (!getValues("jobPostDate")) {
      return;
    }
    const selectedDate = new Date(getValues("jobPostDate"));
    setSelectedPostDate(selectedDate.toDateString());
  }, [watchDate]);

  return (
    <>
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
                  <Button type="submit" variant="primary">
                    Create New Job
                  </Button>
                </div>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

const styles = {
  pageContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  section: {
    display: "flex",
    justifyContent: "center",
    margin: "10px 0",
  },
  cardContainer: {
    width: "500px",
    padding: "0 30px",
  },
  formContainer: {
    margin: "20px 0",
  },
  relativeEle: {
    position: "relative",
  },
};

export default CreateJob;
