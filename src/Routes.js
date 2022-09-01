import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Alumni from "./pages/Alumni/Alumni";
import Home from "./pages/Home/Home";
import Professor from "./pages/Professors";
import Settings from "./pages/Settings/Settings";
import StudentDetails from "./pages/Students/StudentDetails";
import Students from "./pages/Students/Students";

function Router() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/professor" element={<Professor />} />

          <Route path="/currentStudents" element={<Students />} />
          <Route path="/alumni" element={<Alumni />} />
          
          <Route path="/students" element={<StudentDetails />} />

          <Route path="/settings" element={<Settings />} />
          
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default Router;
