import { styled } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import sksjti from "../../assets/sksjti.jpeg";

import React from "react";
import "./Layout.css";
import { Tooltip } from "@mui/material";
import {
  CollectionsBookmark,
  Diversity3,
  GroupAdd,
  Groups,
  Person,
  PriorityHigh,
  Settings,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RUNNING_ACTIONS } from "../../Context/reduxStore/RunTimeStates";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(9)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  margin: "0 auto",
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const LEFT_DRAWER_TABS = [
  { name: "Attendance", icons: <GroupAdd />, path: "/" },
  { name: "Professors", icons: <Diversity3 />, path: "/" },
  { name: "Current Students", icons: <Person />, path: "/currentStudents" },
  { name: "Alumni", icons: <Groups />, path: "/alumni" },
  { name: "Internals", icons: <CollectionsBookmark />, path: "/" },
];

const LEFT_DRAWER_BOTTOM_TABS = [
  { name: "Help", icons: <PriorityHigh />, path: "/" },
  { name: "Settings", icons: <Settings />, path: "/settings" },
];

function LeftBar({ open, handleDrawerToggle }) {
  const navigate = useNavigate();
  const selected = useSelector((state) => state.runTime);
  const dispatch = useDispatch();

  const setSelected = (value) => {
    dispatch({
      type: RUNNING_ACTIONS.CHANGE_STATE,
      payload: { leftCurrent: value },
    });
  };
  return (
    <React.Fragment>
      <Drawer className="drawer" elevation={3} variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton className="logo-button" onClick={handleDrawerToggle}>
            <img alt="sksjti" className="logo" src={sksjti} />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <div className="list-icons">
          <List>
            {LEFT_DRAWER_TABS.map((text, index) => (
              <ListItem
                className={`icons ${
                  selected.leftCurrent === text.name ? "icon-select" : ""
                }`}
                key={index}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  setSelected(text.name);
                  navigate(text.path);
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <Tooltip placement="right" arrow title={text.name}>
                    <ListItemIcon
                      className="icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icons}
                    </ListItemIcon>
                  </Tooltip>

                  {open && (
                    <ListItemText primary={text.name} sx={{ pl: "1rem" }} />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          {/* <Divider /> */}
          <List>
            {LEFT_DRAWER_BOTTOM_TABS.map((text, i) => (
              <ListItem
                className={`icons ${
                  selected.leftCurrent === text.name ? "icon-select" : ""
                }`}
                key={i}
                disablePadding
                sx={{ display: "block" }}
                onClick={() => {
                  setSelected(text.name);
                }}
              >
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                  onClick={() => {
                    navigate(text.path);
                  }}
                >
                  <Tooltip placement="right" arrow title={text.name}>
                    <ListItemIcon
                      className="icons"
                      sx={{
                        minWidth: 0,
                        mr: open ? 3 : "auto",
                        justifyContent: "center",
                      }}
                    >
                      {text.icons}
                    </ListItemIcon>
                  </Tooltip>

                  {open && (
                    <ListItemText primary={text.name} sx={{ pl: "1rem" }} />
                  )}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </React.Fragment>
  );
}

export default LeftBar;
