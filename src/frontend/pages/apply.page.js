import React, { useState } from 'react';

function ApplyPage(props) {
  const [appName, setAppName] = useState({
    firstName: "",
    lastName: ""
  })
  const [appEmail, setAppEmail] = useState("");
  const [appPhone, setAppPhone] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [appResume, setAppResume] = useState([]);
  const tempTimezone = [
    {
      id: 0,
      value: "-08:00",
      content: "(GMT -7:00) Mountain Time (US & Canada)"
    },
    {
      id: 1,
      value: "-07:00",
      content: "(GMT -7:00) Mountain Time (US & Canada)"
    }, 
    {
      id: 2,
      value: "-06:00",
      content: "(GMT -6:00) Central Time (US & Canada), Mexico City"
    },
    {
      id: 3,
      value: "-05:00",
      content: "(GMT -5:00) Eastern Time (US & Canada), Bogota, Lima"
    }
  ]

  var mapTimezone = (arrayOfObjects) => {
    return arrayOfObjects.map(o => (
      <option key={o.id} value={o.value}>{o.content}</option>
    ))
  }

  const handleNameChange = (e) => {
    const nameValue = e.target.value;
    setAppName({
      ...appName,
      [e.target.name]: nameValue
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Apply log", appName, appEmail, appPhone, startTime, endTime, appResume);
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
          <div className="row">
            <div className="col-lg-6 col-md-8 mx-auto">
              <div className="card-header d-flex justify-center">
                <h3 className="mb-0">Apply</h3>
              </div>
              <div className="card-body">
                <form className="form needs-validation" onSubmit={handleSubmit} novalidate>
                  <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input 
                      id="firstName"
                      type="text"
                      className="form-control form-control-md rounded-0"
                      name="firstName"
                      value={appName.firstName}
                      onChange={handleNameChange}
                      autofocus
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input 
                      id="lastName"
                      type="text"
                      className="form-control form-control-md rounded-0"
                      name="lastName"
                      value={appName.lastName}
                      onChange={handleNameChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input 
                      id="email"
                      type="text"
                      className="form-control form-control-md rounded-0"
                      name="appEmail"
                      value={appEmail}
                      onChange={(e) => setAppEmail(e.target.value)}
                      pattern='[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$'
                      required
                    />
                  </div>
                  <div classNam="form-group">
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input 
                      id="phoneNumber"
                      type="text"
                      className="form-control form-control-md rounded-0"
                      name="appPhone"
                      value={appPhone}
                      onChange={(e) => setAppPhone(e.target.value)}
                      pattern='^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$'
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="timezone">Timezone</label>
                    <select className="form-control form-control-md rounded-0" required>
                      <option></option>
                      {mapTimezone(tempTimezone)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="availability"><strong>Availability</strong></label>
                    <div className="form-inline">
                      <input 
                        id="time" 
                        className="form-control rounded-0" 
                        type="time" 
                        name="startTime"
                        value={startTime}
                        onChange={(e) => setStartTime(e.target.value)}
                      />
                      <label>-</label>
                      <input 
                        id="time" 
                        className="form-control rounded-0" 
                        type="time" 
                        name="endTime"
                        value={endTime}
                        onChange={(e) => setEndTime(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <lable htmlFor="resume">Attach resume</lable>
                    <input 
                      id="resumeFile"
                      className="form-control-file"
                      type="file"
                      name="appResume"
                      value={appResume}
                      onChange={(e) => setAppResume(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-primary">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ApplyPage;