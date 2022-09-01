import { Box, Tab, Tabs, Typography } from "@mui/material";
import React, { useMemo, useState } from "react";
import BatchTable from "./BatchTable";
import DepartmentTable from "./DepartmentTable";
import ProfessorTable from "./ProfessorTable";
import StudentTable from "./StudentTable";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      className="simple-tabpanel-settings"
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 1 }}>{children}</Box>}
    </div>
  );
}

function SettingsLeftBar() {
  const [tabValue, setTabValue] = useState(0);
  const handleChange = (e, newValue) => {
    setTabValue(newValue);
  };

  const TABS_TYPES = useMemo(() => {
    return ["Department", "Professors", "Batch", "Students"];
  }, []);

  return (
    <div className={`left-bar expanded-lt`}>
      <Typography variant="h5">
        <b>Admin Settings</b>
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
      <TabPanel value={tabValue} index={0}>
        <DepartmentTable />
      </TabPanel>
      <TabPanel value={tabValue} index={1}>
        <ProfessorTable />
      </TabPanel>
      <TabPanel value={tabValue} index={2}>
        <BatchTable />
      </TabPanel>
      <TabPanel value={tabValue} index={3}>
        <StudentTable />
      </TabPanel>
    </div>
  );
}

export default SettingsLeftBar;

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
