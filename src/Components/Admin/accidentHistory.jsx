import React, { Component } from "react";
import AcccidentList from "./include/accidentList";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";

export default class accidentHistory extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <AcccidentList />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}
