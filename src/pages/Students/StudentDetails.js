import React from "react";
import Layout from "../../components/Layout/Layout";
import HomeRightBar from "../Home/HomeRightBar";
import StudentDetailLeftBar from "./StudentDetailLeftBar";

function StudentDetails() {
  return (
    <Layout>
      <div className="home-main">
        <StudentDetailLeftBar />
        <HomeRightBar />
      </div>
    </Layout>
  );
}

export default StudentDetails;
