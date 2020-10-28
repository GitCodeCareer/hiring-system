import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar.component';

function LoginPage(props) {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Test Log --1', userName, password);
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-12 min-vh-100 d-flex flex-column justify-content-center">
            <div className="row">
              <div className="col-lg-6 col-md-8 mx-auto">
                <div className="card rounded shadow shadow-sm">
                  <div className="card-header d-flex  justify-content-center">
                    <h3 className="mb-0">Login</h3>
                  </div>
                  <div className="card-body">
                    <form className="form" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <label htmlFor="user">Username</label>
                        <input
                          id="user"
                          type="text"
                          className="form-control form-control-md rounded-0"
                          name="userName"
                          value={userName}
                          onChange={(e) => setUserName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label htmlFor="pwd">Password</label>
                        <input
                          id="pwd"
                          type="password"
                          className="form-control form-control-md rounded-0"
                          name="password"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)}
                          required
                          autoComplete="new-password"
                        />
                        <div className="invalid-feedback">
                          Enter your password too!
                        </div>
                      </div>
                      <div className="col-md-12 d-flex flex-column justify-content-center mt-2">
                        <button
                          type="submit"
                          className="btn btn-primary btn-sm justify-content-center"
                          id="btnLogin"
                        >
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="d-flex justify-content-center mb-2">
                    <div>
                      New User?{' '}
                      <Link to="/register" className="card-link mx-2">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
