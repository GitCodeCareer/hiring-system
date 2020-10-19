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
                                <th scope="col">Job Titel</th>
                                <th scope="col">Company</th>
                                <th scope="col">Skills</th>
                                <th scope="col" className="w-25">Actions</th>
                            </tr>
                        </thead>
                    <tbody >
                    <tr >
                        <th scope="row" >1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary mr-3">Edit</button>
                            <button type="button" class="btn btn-secondary mr-3">View</button>
                            <button type="button" class="btn btn-danger mr-3">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary mr-3">Edit</button>
                            <button type="button" class="btn btn-secondary mr-3">View</button>
                            <button type="button" class="btn btn-danger mr-3">Delete</button>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                        <td>@twitter</td>
                        <td>
                            <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-primary mr-3">Edit</button>
                            <button type="button" class="btn btn-secondary mr-3">View</button>
                            <button type="button" class="btn btn-danger mr-3">Delete</button>
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