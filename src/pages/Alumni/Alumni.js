import React from "react";
import Layout from "../../components/Layout/Layout";
import HomeRightBar from "../Home/HomeRightBar";
import AlumniLeftBar from "./AlumniLeftBar";

function Alumni() {
  return (
    <Layout>
      <div className="home-main">
        <AlumniLeftBar />
        <HomeRightBar />
      </div>
    </Layout>
  );
}

export default Alumni;
