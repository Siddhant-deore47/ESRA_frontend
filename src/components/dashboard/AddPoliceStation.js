import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import AppBar from "@mui/material/AppBar";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { toast } from "react-toastify";
import { useState } from "react";
import { Container } from "@mui/system";
import { useNavigate } from "react-router";
import { register1 } from "../../services/userServices";

function AddPoliceStation() {
  const [data, setData] = useState({
    fullName: "",
    country: "",
    mobileNumber: "",
    alternateNumber: "",
    state: "",
    district: "",
    email: "",
    city: "",
    longitude: "",
    latitude: "",

    pin: "",
    address: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const resetData = () => {
    setData({
      fullName: "",
      country: "",
      mobileNumber: "",
      alternateNumber: "",
      state: "",
      district: "",
      email: "",
      city: "",
      longitude: "",
      latitude: "",

      pin: "",
      address: "",
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(data);

    register1(data)
      .then((resp) => {
        console.log(resp);
        console.log("success log");
        toast.success("user registered");
        setData({
          fullName: "",
          country: "",
          mobileNumber: "",
          alternateNumber: "",
          state: "",
          district: "",
          email: "",
          city: "",
          longitude: "",
          latitude: "",

          pin: "",
          address: "",
        });
      })
      .catch((error) => {
        console.log(error);
        console.log("error log");
        toast.error("error");
      });
  };
  const navigate = useNavigate();

  return (
    <div>
      <>
        <Box sx={{ display: "flex" }}>
          <CssBaseline />
          <AppBar
            position="fixed"
            sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
          >
            <Toolbar>
              <Typography variant="h4" noWrap component="div">
                <strong>ESRA</strong> Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
          <Drawer variant="permanent">
            <Toolbar />
            <Box sx={{ overflow: "auto" }}>
              <List>
                <ListItem button disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/dashboard");
                    }}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Dashboard" />
                  </ListItemButton>
                </ListItem>
              </List>
              <List>
                <ListItem button disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/myprofile");
                    }}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="My Profile" />
                  </ListItemButton>
                </ListItem>
              </List>

              <Divider />
              <List>
                <ListItem button disablePadding>
                  <ListItemButton
                    onClick={() => {
                      navigate("/");
                    }}
                  >
                    <ListItemIcon></ListItemIcon>
                    <ListItemText primary="Logout" />
                  </ListItemButton>
                </ListItem>
              </List>
              <Divider />
            </Box>
          </Drawer>

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <Toolbar />
            <Container>
              <div>
                <p className="p-2"></p>
                <div className="">
                  <section className="vh-80 ">
                    <div className="d-flex align-items-center h-80">
                      <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-80">
                          <div className="col-sm-6">
                            <div
                              className="card"
                              style={{ borderradius: "15px" }}
                            >
                              <div className="card-body p-2">
                                <h2 className="text-uppercase text-center mb-4">
                                  <strong>Add Police Station</strong>
                                </h2>

                                <form onSubmit={formSubmit}>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="fullName1"
                                      >
                                        Police Station Name
                                      </label>
                                      <input
                                        type="text"
                                        id="fullName1"
                                        name="fullName"
                                        value={data.fullName}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="country1"
                                      >
                                        Country
                                      </label>
                                      <input
                                        type="text"
                                        id="country1"
                                        name="country"
                                        value={data.country}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="mobileNumber1"
                                      >
                                        Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        id="mobileNumber1"
                                        name="mobileNumber"
                                        value={data.mobileNumber}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="state1"
                                      >
                                        State
                                      </label>
                                      <input
                                        type="text"
                                        id="state1"
                                        name="state"
                                        value={data.state}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="alternateNumber"
                                      >
                                        Alternate Mobile Number
                                      </label>
                                      <input
                                        type="text"
                                        id="alternateNumber"
                                        name="alternateNumber"
                                        value={data.alternateNumber}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label className="form-label" for="city1">
                                        City
                                      </label>
                                      <input
                                        type="text"
                                        id="city1"
                                        name="city"
                                        value={data.city}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="district1"
                                      >
                                        District
                                      </label>
                                      <input
                                        type="text"
                                        id="district1"
                                        name="district"
                                        value={data.district}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label className="form-label" for="pin1">
                                        Pin
                                      </label>
                                      <input
                                        type="number"
                                        id="pin1"
                                        name="pin"
                                        value={data.pin}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="email1"
                                      >
                                        Email
                                      </label>
                                      <input
                                        type="email"
                                        id="email1"
                                        name="email"
                                        value={data.email}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="address1"
                                      >
                                        Address
                                      </label>
                                      <input
                                        type="text"
                                        id="address1"
                                        name="address"
                                        value={data.address}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>
                                  <div className="row">
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="latitude"
                                      >
                                        Latitude
                                      </label>
                                      <input
                                        type="text"
                                        id="latitude"
                                        name="latitude"
                                        value={data.latitude}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                    <div className="col-5">
                                      <label
                                        className="form-label"
                                        for="longitude"
                                      >
                                        Longitude
                                      </label>
                                      <input
                                        type="text"
                                        id="longitude"
                                        name="longitude"
                                        value={data.longitude}
                                        onChange={InputEvent}
                                        className="form-control form-control-sm"
                                        required
                                      />
                                    </div>
                                  </div>

                                  <div className="d-flex justify-content-center pt-4">
                                    <button
                                      type="submit"
                                      className="btn btn-warning btn-block btn-md text-body mx-3"
                                    >
                                      Add Police Station
                                    </button>
                                    <button
                                      type="reset"
                                      onClick={resetData}
                                      className="btn btn-danger btn-block btn-md text-body"
                                    >
                                      Cancel
                                    </button>
                                  </div>

                                  {/* <p className="text-center text-muted mt-2 mb-0">
                            Have already an account?{" "}
                            <a href="#!" className="fw-bold text-body">
                              <u>Login here</u>
                            </a>
                          </p> */}
                                </form>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
            </Container>
          </Box>
        </Box>
      </>
    </div>
  );
}

export default AddPoliceStation;
