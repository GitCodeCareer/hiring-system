import React ,{useState} from "react"
import {Link} from "react-router-dom"
import Navbar from '../components/navbar.component';

const AdminPanel = ()=>{
    return(
    <div>
        <Navbar />
        <div className="container-fluid">
            <div className="card mt-5 ml-5 mr-5">
                <div className="card-header">
                Admin - Job Listing
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr className="table-active">
                                <th scope="col">#</th>
                                <th scope="col">Job Listing</th>
                                <th scope="col">Applicant Name</th>
                                <th scope="col">Applicant Email</th>
                                <th scope="col" className="w-25">Actions</th>
                            </tr>
                        </thead>
                    <tbody >
                    <tr >
                        <th scope="row" >1</th>
                        <td>Front-end Developer</td>
                        <td>Tom Jacobs</td>
                        <td>tjacobs@gmail.com</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary mr-3">Edit</button>
                            <button type="button" className="btn btn-secondary mr-3">View</button>
                            <button type="button" className="btn btn-danger mr-3">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Full-Stack Developer</td>
                        <td>Sam Wise</td>
                        <td>swise-lotr@gmail.com</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary mr-3">Edit</button>
                            <button type="button" className="btn btn-secondary mr-3">View</button>
                            <button type="button" className="btn btn-danger mr-3">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>UI/UX Developer</td>
                        <td>John Smith</td>
                        <td>jsmith@gmail.com</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-primary mr-3">Edit</button>
                            <button type="button" className="btn btn-secondary mr-3">View</button>
                            <button type="button" className="btn btn-danger mr-3">Delete</button>
                            </div>
                        </td>
                    </tr>
                    </tbody>
                    </table>

                </div>
            </div>
        </div>
    </div>
    );
};
export default AdminPanel;
