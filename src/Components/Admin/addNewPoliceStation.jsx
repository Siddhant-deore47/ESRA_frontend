import React, { Component } from "react";
import AddPoliceStation from "./include/AddPoliceStation";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";

export default class AddNewPoliceStation extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <AddPoliceStation />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}
