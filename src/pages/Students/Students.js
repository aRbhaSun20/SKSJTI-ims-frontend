import React from "react";
import Layout from "../../components/Layout/Layout";
import HomeRightBar from "../Home/HomeRightBar";
import "../Home/Home.css";
import StudentsLeftBar from "./StudentsLeftBar";

function Students() {
  return (
    <Layout>
      <div className="home-main">
        <StudentsLeftBar />
        <HomeRightBar />
      </div>
    </Layout>
  );
}

export default Students;
