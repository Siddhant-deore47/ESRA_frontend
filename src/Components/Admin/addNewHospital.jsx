import React, { Component } from "react";
import AddHospital from "./include/addHospital";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";

export default class AddNewHospital extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <AddHospital />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}
