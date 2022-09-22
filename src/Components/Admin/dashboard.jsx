import React, { Component } from "react";
import AdminCards from "./include/adminCards";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";

export default class Dashboard extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <AdminCards />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}
