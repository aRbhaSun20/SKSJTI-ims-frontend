import { Phone, ReadMore } from "@mui/icons-material";
import { Avatar, Button, Chip, Paper, Typography } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Home.css";

export function useQueryLocation() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function PersonCard({
  name,
  email,
  kgId,
  position,
  department,
  phone,
  type,
  IdName = "KgId",
  path,
}) {
  const navigate = useNavigate();
  
  const handleProfessorDetails = () => {
    navigate(path);
  };

  return (
    <Paper elevation={3} className="indi-card">
      <div className="top-layer">
        <div className="top-left">
          <Avatar sx={{ bgcolor: deepPurple[500] }}>A</Avatar>
          <div>
            <Typography variant="h6" className="name">
              <b>{name}</b>
            </Typography>
            <Typography variant="overlay" className="email">
              {email}
            </Typography>
          </div>
        </div>
        {type && <Chip label={type} color="primary" />}
      </div>
      <div className="details">
        <div className="indi-det">
          <Typography className="indi-det-title">{IdName}</Typography>
          <Typography
            className="indi-det-value"
            style={{ textTransform: "uppercase" }}
          >
            {kgId}
          </Typography>
        </div>
        <div className="indi-det">
          <Typography className="indi-det-title">Position</Typography>
          <Typography className="indi-det-value">{position}</Typography>
        </div>
        <div className="indi-det">
          <Typography className="indi-det-title">DEPARTMENT</Typography>
          <Typography className="indi-det-value">{department}</Typography>
        </div>
        <div className="indi-det">
          <Typography className="indi-det-title">Phone Number</Typography>
          <Typography className="indi-det-value">
            <Phone /> {phone}
          </Typography>
        </div>
      </div>
      <Button
        onClick={handleProfessorDetails}
        className="but-indi"
        variant="contained"
      >
        View More <ReadMore />
      </Button>
    </Paper>
  );
}

export default PersonCard;
