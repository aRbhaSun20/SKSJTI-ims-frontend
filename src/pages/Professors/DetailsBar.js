import { CalendarMonth, Mail, Phone } from "@mui/icons-material";
import { Chip, Typography } from "@mui/material";
import React from "react";
import PersonelDetails from "./PersonelDetails";
import ProfessionalDetails from "./ProfessionalDetails";
import "./professor.css";

function DetailsBar() {
  return (
    <div className="details-cont">
      <div className="top-cont-det">
        <Typography variant="h4" className="h4">
          <span>
            <b>Arbhasun Banerjee</b>
            {/* <IconButton>
              <Edit />
            </IconButton> */}
          </span>
          <span>
            <Chip label="Lecturer" color="success" sx={{ ml: "1rem" }} />
            <Chip label="Deputation" color="primary" sx={{ ml: "1rem" }} />
          </span>
        </Typography>
        <div className="detail-top">
          <div className="detail-indi-top">
            <Mail />
            <Typography variant="subtitle2">arbhasun1606@gmail.com</Typography>
          </div>
          |
          <div className="detail-indi-top">
            <Phone />
            <Typography variant="subtitle2">+91-80736-29055</Typography>
          </div>
          |
          <div className="detail-indi-top">
            <CalendarMonth />
            <Typography variant="subtitle2">16 Jun, 2000</Typography>
          </div>
        </div>
      </div>
      <div className="detail-bar-collect">
        <PersonelDetails />
        <ProfessionalDetails />
      </div>
    </div>
  );
}

export default DetailsBar;
