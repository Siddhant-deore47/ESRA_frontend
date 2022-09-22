import React, { Component } from "react";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";
import UserList from "./include/userList";

export default class AvailableUser extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <UserList />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}
