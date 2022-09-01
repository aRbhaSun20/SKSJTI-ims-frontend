import React from "react";
import { Info } from "@mui/icons-material";
import { IconButton, Paper, Typography } from "@mui/material";
import "../Professors/professor.css";

function ProfessionalDetails() {
  return (
    <Paper elevation={3} className="detail-bar">
      <div className="det-header">
        <Typography variant="h5" className="first-part">
          <b>Professional Details</b>
        </Typography>
        <IconButton>
          <Info />
        </IconButton>
      </div>

      <div className="det-body">
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>USN:</b>
          </Typography>
          <Typography>AIH102901</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Program :</b>
          </Typography>
          <Typography>Bachelor of Engineering</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Course :</b>
          </Typography>
          <Typography>Computer Science Engineering</Typography>
        </div>

        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Date of Birth:</b>
          </Typography>
          <Typography>16, January 2000</Typography>
        </div>
        <div className="det-indi-body">
          <Typography variant="h6" className="first-part">
            <b>Date of Joining:</b>
          </Typography>
          <Typography>16, January 2020</Typography>
        </div>

      </div>
    </Paper>
  );
}

export default ProfessionalDetails;
