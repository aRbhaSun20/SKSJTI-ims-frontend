import React, { useState } from "react";
import DetailsBar from "./DetailsBar";
import MapDetails from "./MapDetails";
import "./professor.css";

function ProfessorLeftBar() {
  const [position, setPosition] = useState([51.505, -0.09]);

  return (
    <div className="professor-left-bar">
      <MapDetails position={position} setPosition={setPosition} />
      <DetailsBar />
    </div>
  );
}

export default ProfessorLeftBar;
