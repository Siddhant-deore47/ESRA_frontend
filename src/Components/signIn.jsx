import React, { Component } from "react";

class SignIn extends Component {
  render() {
    return (
      <div>
        <h3 className="text-center">User SignIn</h3>
        <form className="box">
          <input type="text" name="email" placeholder="Email" />
          <input type="password" name="password" placeholder="Password" />
          <input type="submit" value="Sign In" />
        </form>

        <div class="footer">
          <p>All Rights Reserved for @2022 DevLoopers</p>
        </div>
      </div>
    );
  }
}

export default SignIn;
