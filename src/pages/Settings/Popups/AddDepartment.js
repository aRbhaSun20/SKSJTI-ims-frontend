import { Button, TextField } from "@mui/material";
import React from "react";
import "./popup.css";

function AddDepartment({setOpen}) {

    const handleClose = () => {
        setOpen(false);
      };

  return (
    <div className="popup-body-cont">
      <div className="popup-top">
        <TextField label="Department Name" />
        <TextField label="Select Hod " />
        <TextField label="Course Name" />
      </div>
      <div className="popup-but">
        <Button onClick={handleClose} variant="contained" className="but">
          Cancel
        </Button>
        <Button variant="contained" className="but submit">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default AddDepartment;
