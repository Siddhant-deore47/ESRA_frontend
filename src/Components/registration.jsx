import React, { Component } from "react";


class RegisterUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      email: "",
      password: "",
      mobileNo: "",
      imgUtility: "",
      image: "",
      userAddress: {
        city: "",
        district: "",
        state: "",
        country: "",
        streetLine: "",
        pinCode: "",
      },
      status: "",
      vehicle: [],
    }

    this.onChangeNameHandler = this.onChangeNameHandler.bind(this);
    this.onChangeEmailHandler = this.onChangeEmailHandler.bind(this);
    this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
    this.onChangeMobileNoHandler = this.onChangeMobileNoHandler.bind(this);
    this.onChangeCityHandler = this.onChangeCityHandler.bind(this);
    this.onChangeStateHandler = this.onChangeStateHandler.bind(this);
    this.onChangeCountryHandler = this.onChangeCountryHandler.bind(this);
    this.onChangeStreetHandler = this.onChangeStreetHandler.bind(this);
    this.onChangepinCodeHandler = this.onChangepinCodeHandler.bind(this);
    this.registerUser = this.registerUser.bind(this);
  }
  onChangeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  }
  onChangeEmailHandler = (event) => {
    this.setState({ email: event.target.value });
  }
  onChangePasswordHandler = (event) => {
    this.setState({ password: event.target.value });
  }
  onChangeMobileNoHandler = (event) => {
    this.setState({ mobileNo: event.target.value });
  }
  onChangeCityHandler = (event) => {
    this.setState({ city: event.target.value });
  }
  onChangeStateHandler = (event) => {
    this.setState({ district: event.target.value });
  }
  onChangeCountryHandler = (event) => {
    this.setState({ state: event.target.value });
  }
  onChangeStreetHandler = (event) => {
    this.setState({ streetLine: event.target.value });
  }
  onChangepinCodeHandler = (event) => {
    this.setState({ pinCode: event.target.value });
  }

  registerUser = (e) => {
    e.preventDefault();
    let user = {
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
      mobileNo: this.state.mobileNo,
      imgUtility: this.state.imgUtility,
      image: this.state.image,
      userAddress: {
        city: this.state.city,
        district: this.state.district,
        state: this.state.state,
        country: this.state.country,
        streetLine: this.state.streetLine,
        pinCode: this.state.pinCode,
      },
      status: this.state.status,
      vehicle: this.state.vehicle,
    }

    console.log("User =>" + JSON.stringify(user))
  }
  render() {
    return (
        <div>
          <h3 className="text-center">User Registration</h3>
        </div>
    );
  }
}

export default RegisterUser;
