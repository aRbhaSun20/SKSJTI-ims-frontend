import React from "react";
import Layout from "../../components/Layout/Layout";
import HomeRightBar from "../Home/HomeRightBar";
import "../Home/Home.css";
import ProfessorLeftBar from "./ProfessorLeftBar";
// import { useQueryLocation } from "../Home/PersonCard";

function Professor() {
  // const queryData = useQueryLocation();
  // console.log(queryData.get("kgId"))
  return (
    <Layout>
      <div className="home-main">
        <ProfessorLeftBar />
        <HomeRightBar />
      </div>
    </Layout>
  );
}

export default Professor;
