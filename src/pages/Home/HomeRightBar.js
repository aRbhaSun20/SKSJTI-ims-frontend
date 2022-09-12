import { LocalizationProvider, StaticDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import "./Home.css";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { DateTime } from "luxon";
import { IconButton, TextField } from "@mui/material";
import ToDo from "./ToDo";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { RUNNING_ACTIONS } from "../../Context/reduxStore/RunTimeStates";

function HomeRightBar() {
  const runTime = useSelector((state) => state.runTime);
  const dispatch = useDispatch();

  const [value, setValue] = useState(() => DateTime.now());

  const handleModeChange = () => {
    dispatch({
      type: RUNNING_ACTIONS.CHANGE_STATE,
      payload: { toggleMode: !runTime.toggleMode },
    });
  };

  return (
    <div className={`right-bar ${runTime.toggleMode ? "expanded" : ""}`}>
      <LocalizationProvider dateAdapter={AdapterLuxon}>
        <StaticDatePicker
          orientation="portrait"
          openTo="day"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <ToDo />
      <IconButton className="expand" onClick={handleModeChange}>
        {!runTime.toggleMode ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
    </div>
  );
}

export default React.memo(HomeRightBar);
