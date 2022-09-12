import {
  Box,
  Button,
  Step,
  StepLabel,
  Stepper,
  TextField,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { DateTime } from "luxon";
import React, { useState } from "react";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import "./popup.css";

const steps = ["Personal Details", "Contact Details", "Professional Details"];

function AddStudent({ setOpen }) {
  const [activeStep, setActiveStep] = useState(0);
  const [value, setValue] = useState(() => DateTime.now());

  const handleClose = () => {
    setOpen(false);
  };

  const handleStepper = (index) => {
    setActiveStep(index);
  };

  const handleNextStepper = () => {
    setActiveStep((state) => Math.min(state + 1, steps.length - 1));
  };
  return (
    <div className="popup-body-cont">
      <Box sx={{ width: "100%" }}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, i) => (
            <Step key={label} onClick={() => handleStepper(i)}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </Box>
      <div className="popup-prof">
        {activeStep === 0 ? (
          <React.Fragment>
            <TextField label="Student Name" />
            <TextField label="Email" />
            <TextField label="Phone Number" />
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <DesktopDatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                label="Date of Birth"
                // inputFormat="MM/DD/YYYY"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField label="Gender" />
            <TextField label="Age" />
            <TextField label="Father Name" />
            <TextField label="Mother Name" />
          </React.Fragment>
        ) : activeStep === 1 ? (
          <React.Fragment>
            <TextField label="Residential Phone Number" />
            <TextField label="Personal Number" />
            <TextField label="Permanent Address" multiline />
            <TextField label="Current Address" multiline />
          </React.Fragment>
        ) : (
          <React.Fragment>
            <TextField label="USN" />
            <TextField label="Program" />
            <TextField label="Batch Name" />
            <LocalizationProvider dateAdapter={AdapterLuxon}>
              <DesktopDatePicker
                value={value}
                onChange={(newValue) => {
                  setValue(newValue);
                }}
                label="Date of Joining"
                // inputFormat="MM/DD/YYYY"
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
            <TextField label="Password" />
            <TextField label="Confirm Password" />

            <TextField label="Department" />
            <TextField label="Course" />
          </React.Fragment>
        )}
      </div>
      <div className="popup-but">
        <Button onClick={handleClose} variant="contained" className="but">
          Cancel
        </Button>
        {activeStep === steps.length - 1 ? (
          <Button variant="contained" className="but submit">
            Submit
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleNextStepper}
            className="but submit"
          >
            Next
          </Button>
        )}
      </div>
    </div>
  );
}

export default AddStudent;
