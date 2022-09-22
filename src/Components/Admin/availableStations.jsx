import React, { Component } from "react";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";
import StationList from "./include/stationList";

export default class AvailableStations extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <StationList />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}
