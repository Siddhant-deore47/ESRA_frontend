import React, { Component } from "react";
import FeedbackList from "./include/feedbackList";

export default class Feedback extends Component {
  render() {
    return (
      <div>
        <AdminTemplate />
        <FeedbackList />
        <AdminLogOutAlert />
      </div>
    );
  }
}
