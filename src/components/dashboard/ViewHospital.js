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
import { Container } from "@mui/system";
import { useNavigate } from "react-router";

function ViewHospital() {
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
              <h1 className="text-align-center display-6">
                <strong> Hospital List</strong>
              </h1>
              <div className="pt-2 mt-2">
                <table class="table table-primary table-striped">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Hospital Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Mobile No.</th>
                      <th scope="col">Alt No.</th>
                      <th scope="col">Address</th>
                      <th scope="col">State</th>
                      <th scope="col">District</th>
                      <th scope="col">City</th>
                      <th scope="col">Country</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Container>
          </Box>
        </Box>
      </>
    </div>
  );
}

export default ViewHospital;
