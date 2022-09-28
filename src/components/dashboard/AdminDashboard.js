import React, { Component } from "react";
import { Navigate, NavLink, useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();
  //   let { adminId, firstName } = this.state;
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="col-sm-6">
            <h2 className="text-capitalize">Hello </h2>
          </div>
          <div className="col-sm-6"></div>
        </div>

        <div className="row">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add New Hospital</h5>
                <p className="card-text">
                  Register a new Hospital to database.
                </p>
                <button
                  onClick={() => {
                    navigate("/admin/addnewhospital");
                  }}
                  className="btn btn-primary"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Hospital List</h5>
                <p className="card-text">
                  View details of all registered Hospital.
                </p>
                <button
                  onClick={() => {
                    navigate("/admin/viewhospital");
                  }}
                  className="btn btn-warning"
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Police Station</h5>
                <p className="card-text">Add Police Station to database.</p>
                <button
                  onClick={() => {
                    navigate("/admin/addpolicestation");
                  }}
                  className="btn btn-info"
                >
                  ADD
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Police Station List</h5>
                <p className="card-text">
                  View details of all registered Police Station.
                </p>
                <button
                  className="btn btn-success"
                  onClick={() => {
                    navigate("/admin/viewpolicestation");
                  }}
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Feedback List</h5>
                <p className="card-text">View list of Feedback</p>
                <button
                  onClick={() => {
                    navigate("/admin/viewfeedback");
                  }}
                  className="btn btn-warning"
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">View Reported Accident</h5>
                <p className="card-text">Reported Accident list</p>
                <button
                  onClick={() => {
                    navigate("/admin/viewreportlist");
                  }}
                  className="btn btn-danger"
                >
                  VIEW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
// }

export default AdminDashboard;
