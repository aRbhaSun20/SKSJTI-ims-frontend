import React, { useState } from "react";
import MapDetails from "../Professors/MapDetails";
import "../Professors/professor.css";
import StudentDetailBar from "./StudentDetailBar";

function StudentDetailLeftBar() {
  const [position, setPosition] = useState([51.505, -0.09]);
  return (
    <div className="professor-left-bar">
      <MapDetails position={position} setPosition={setPosition} />
      <StudentDetailBar />
    </div>
  );
}

export default StudentDetailLeftBar;
