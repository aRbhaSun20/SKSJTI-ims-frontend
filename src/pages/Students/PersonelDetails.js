import React from "react";
import { Info } from "@mui/icons-material";
import { IconButton, Paper, Typography } from "@mui/material";
import "../Professors/professor.css";

function PersonelDetails() {
  return (
    <Paper elevation={3} className="detail-bar">
      <div className="det-header">
        <Typography variant="h5" className="first-part">
          <b>Personal Details</b>
        </Typography>
        <IconButton>
          <Info />
        </IconButton>
      </div>
      <div className="det-body">
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Gender:</b>
          </Typography>
          <Typography>Male</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Age:</b>
          </Typography>
          <Typography>AX940-30430</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Father Name:</b>
          </Typography>
          <Typography>Demo Demo</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Mother Name:</b>
          </Typography>
          <Typography>Demo Demo</Typography>
        </div>
      </div>
    </Paper>
  );
}

export default PersonelDetails;
