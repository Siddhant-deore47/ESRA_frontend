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

import { useNavigate } from "react-router";
import { Container } from "@mui/system";
//import FormFragment from "../fragments/FormFragment";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";

function MyProfile() {
  const navigate = useNavigate();

  return (
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
                    navigate("/admin/dashboard");
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
                    navigate("/admin/myprofile");
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
        <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
          <Toolbar />

          <div>
            <section className="bg-light">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 mb-4 mb-sm-5">
                    <div className="card card-style1 border-0">
                      <div className="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7">
                        <div className="row align-items-end">
                          <div className="col-lg-6 mb-4 mb-lg-0">
                            {/* <img
                              src="https://bootdey.com/img/Content/avatar/avatar7.png"
                              alt="img"
                            /> */}
                          </div>
                          <div className="col-lg-6 px-xl-10">
                            <div className="bg-secondary d-lg-inline-block py-1-9 px-1-9 px-sm-6 mb-1-9 rounded">
                              <h3 className="h2 text-white mb-0">
                                John mark Doe Kyzer
                              </h3>
                              <span className="text-danger">Coach</span>
                            </div>
                            <ul className="list-unstyled mb-1-9">
                              <li className="mb-2 mb-xl-3 display-28">
                                <span className="display-26 text-danger me-2 font-weight-600">
                                  Position:
                                </span>
                                Coach
                              </li>
                              <li className="mb-2 mb-xl-3 display-28">
                                <span className="display-26 text-secondary me-2 font-weight-600">
                                  Experience:
                                </span>
                                10 Years
                              </li>
                              <li className="mb-2 mb-xl-3 display-28">
                                <span className="display-26 text-secondary me-2 font-weight-600">
                                  Email:
                                </span>
                                edith@mail.com
                              </li>
                              <li className="mb-2 mb-xl-3 display-28">
                                <span className="display-26 text-secondary me-2 font-weight-600">
                                  Website:
                                </span>
                                www.example.com
                              </li>
                              <li className="display-28">
                                <span className="display-26 text-secondary me-2 font-weight-600">
                                  Phone:
                                </span>
                                507 - 541 - 4567
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </Box>
      </Box>
    </>
  );
}

export default MyProfile;
