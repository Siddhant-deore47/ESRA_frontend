import React, { Component } from "react";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";
import HospitalList from "./include/hospitalList";

export default class AvailableHospitals extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <HospitalList />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}
