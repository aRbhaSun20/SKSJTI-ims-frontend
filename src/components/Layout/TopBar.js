import React, { useState } from "react";

import { styled } from "@mui/material/styles";
import MuiAppBar from "@mui/material/AppBar";
import {
  Avatar,
  Badge,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Paper,
  Popper,
  TextField,
  Typography,
} from "@mui/material";
import {
  CalendarMonth,
  KeyboardArrowDown,
  Message,
  Notifications,
  Search,
} from "@mui/icons-material";
import { deepPurple } from "@mui/material/colors";
import "./Layout.css";

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  background: "transparent",
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SEMESTERS = [
  "All",
  "1st Semester",
  "2nd Semester",
  "3rd Semester",
  "4th Semester",
  "5th Semester",
  "6th Semester",
  "7th Semester",
  "8th Semester",
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
export const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 2.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function TopBar({ open }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const openBool = Boolean(anchorEl);
  const id = openBool ? "simple-popper" : undefined;
  const [selectedSemester, setSelectedSemester] = useState("All");

  const handleChangeSemester = (e) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <React.Fragment>
      <AppBar className="app-bar" elevation={0} position="fixed" open={open}>
        <div className="first-row-app">
          <Typography variant="h6">
            <b>Select Semester:</b>
          </Typography>
          <TextField
            select
            SelectProps={{ MenuProps }}
            label="Available Semester"
            sx={{ width: "12rem" }}
            value={selectedSemester}
            onChange={handleChangeSemester}
          >
            {SEMESTERS.map((ele, i) => (
              <MenuItem key={i} value={ele}>
                <ListItemText primary={ele} />
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="h6">
            <b>Good morning, Arbhasun Banerjee !</b>
          </Typography>
        </div>
        <div className="icon-cont">
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            label="Search here"
            sx={{ width: "20rem" }}
          />
          <IconButton className="icons">
            <CalendarMonth />
          </IconButton>
          <IconButton className="icons">
            <Badge
              color="secondary"
              variant="dot"
              badgeContent={10}
              invisible={false}
            >
              <Notifications />
            </Badge>
          </IconButton>

          <IconButton className="icons">
            <Badge
              color="secondary"
              variant="dot"
              badgeContent={10}
              invisible={false}
            >
              <Message />
            </Badge>
          </IconButton>

          <div className="avatar">
            <Avatar
              sx={{ bgcolor: deepPurple[500], width: "3rem", height: "3rem" }}
            >
              OP
            </Avatar>
            <IconButton onClick={handleClick}>
              <KeyboardArrowDown />
            </IconButton>
            <Popper
              placement="bottom-start"
              id={id}
              open={openBool}
              anchorEl={anchorEl}
            >
              <Paper elevation={1} className="popper-top">
                  <ListItemText className="popper-desc"  primary="Profile" />
                  <ListItemText className="popper-desc" primary="Log Out" />
              </Paper>
            </Popper>
          </div>
        </div>
      </AppBar>
    </React.Fragment>
  );
}

export default TopBar;
