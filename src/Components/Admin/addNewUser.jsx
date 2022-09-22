import React, { Component } from "react";
import AdminFooter from "./include/adminFooter";
import AdminLogOutAlert from "./include/adminLogOutAlert";
import AdminTemplate from "./include/adminTemplate";
import UserRegistration from "./include/userRegistration";

class AddNewUser extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <UserRegistration />
        <AdminFooter />
        <AdminLogOutAlert />
      </div>
    );
  }
}

export default AddNewUser;
