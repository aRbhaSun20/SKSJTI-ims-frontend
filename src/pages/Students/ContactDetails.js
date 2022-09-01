import React from "react";
import { Info } from "@mui/icons-material";
import { IconButton, Paper, Typography } from "@mui/material";
import "../Professors/professor.css";

function ContactDetails() {
  return (
    <Paper elevation={3} className="detail-bar">
      <div className="det-header">
        <Typography variant="h5" className="first-part">
          <b>Contact Details</b>
        </Typography>
        <IconButton>
          <Info />
        </IconButton>
      </div>
      <div className="det-body">
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Residential Phone Number:</b>
          </Typography>
          <Typography>+080-8745-7852</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Personal Phone Number:</b>
          </Typography>
          <Typography>+91-78451-96582</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Permanent Address:</b>
          </Typography>
          <Typography>
            Fugiat dolore sit proident officia commodo eiusmod occaecat mollit.
          </Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Current Address:</b>
          </Typography>
          <Typography>
            Fugiat dolore sit proident officia commodo eiusmod occaecat mollit.
          </Typography>
        </div>
      </div>
    </Paper>
  );
}

export default ContactDetails;
