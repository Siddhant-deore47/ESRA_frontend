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
const drawerWidth = 240;

function PoliceStation() {
  return (
    // const navigate = useNavigate();
    <>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h4" noWrap component="div">
              <strong>ESRA</strong> Dashboard{" "}
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
        >
          <Toolbar />
          <Box sx={{ overflow: "auto" }}>
            <List>
              <ListItem button disablePadding>
                <ListItemButton Link to="/dashboard">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem button disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="My Profile" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem button disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Change Password" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem button disablePadding>
                <ListItemButton Link to="/dashboard">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Vehicle Information" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem
                button
                disablePadding
                // onClick={useNavigate("/hospital")}
              >
                <ListItemButton Link to="/hospital">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText
                    primary="Find Hospital"
                    // onClick={<Link to={"/hospital"} />}
                    // {/* {useNavigate("/hospital")} */}
                  />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem button disablePadding>
                <ListItemButton Link to="/policestation">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Find Police Station" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem button disablePadding>
                <ListItemButton link to="/accident">
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Report Accident" />
                </ListItemButton>
              </ListItem>
            </List>
            <List>
              <ListItem button disablePadding>
                <ListItemButton>
                  <ListItemIcon></ListItemIcon>
                  <ListItemText primary="Accident History" />
                </ListItemButton>
              </ListItem>
            </List>
            <Divider />
            <List>
              <ListItem button disablePadding className="text-danger">
                <ListItemButton>
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
          <h1 className="p-3">
            <strong>
              <i>Police Station Page</i>
            </strong>{" "}
          </h1>
        </Box>
      </Box>
    </>
  );
}

export default PoliceStation;
