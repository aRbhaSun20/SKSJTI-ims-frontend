import { Tab, Tabs, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PersonCard from "../Home/PersonCard";
import "../Home/Home.css";

function AlumniLeftBar() {
  const runTime = useSelector((state) => state.runTime);
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const TABS_TYPES = useMemo(() => {
    return ["2022", "2021", "2020", "2019", "2018"];
  }, []);

  return (
    <div className={`left-bar  ${runTime.toggleMode ? "expanded-lt" : ""}`}>
      <Typography variant="h5">
        <b>Alumni Students</b>
      </Typography>

      <Tabs
        value={tabValue}
        variant="scrollable"
        scrollButtons="auto"
        style={{ width: "100%" }}
        onChange={handleChange}
        aria-label="basic tabs example"
      >
        {TABS_TYPES.map((ele, i) => (
          <Tab className="tab-left" label={`${ele} batch`} key={i} {...a11yProps(i)} />
        ))}
      </Tabs>
      <div className="person-card-collect">
        {new Array(10).fill("").map((ele, i) => (
          <PersonCard
            key={i}
            name="Arbhasun Banerjee"
            email="demo@demo.com"
            kgId="1SK18CS004"
            position="student"
            department="Computer Science Engineering"
            phone="04020-30403"
            IdName="USN"
            path={`/students?usn=1SK18CS004`}
          />
        ))}
      </div>
    </div>
  );
}

export default AlumniLeftBar;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
