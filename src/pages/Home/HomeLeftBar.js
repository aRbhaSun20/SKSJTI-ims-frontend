import { Tab, Tabs, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import PersonCard from "./PersonCard";
import "./Home.css";

function HomeLeftBar() {
  const runTime = useSelector((state) => state.runTime);
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const TABS_TYPES = useMemo(() => {
    return [
      "All Professors",
      "IoT",
      "Cloud Computing",
      "Database Management",
      "Big Data Analytics",
    ];
  }, []);

  return (
    <div className={`left-bar  ${runTime.toggleMode ? "expanded-lt" : ""}`}>
      <Typography variant="h5">
        <b>Professors</b>
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
          <Tab className="tab-left" label={ele} key={i} {...a11yProps(i)} />
        ))}
      </Tabs>
      <div className="person-card-collect">
        {new Array(10).fill("").map((ele, i) => (
          <PersonCard
            key={i}
            name="Arbhasun Banerjee"
            email="demo@demo.com"
            kgId="kgId1020"
            position="Lecturer"
            department="Physics"
            phone="04020-30403"
            type="Contract"
            path={`/professor?kgId=kgId1020`}
          />
        ))}
      </div>
    </div>
  );
}

export default React.memo(HomeLeftBar);

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
