import React from "react";
import Layout from "../../components/Layout/Layout";
import "./Home.css";
import HomeLeftBar from "./HomeLeftBar";
import HomeRightBar from "./HomeRightBar";

function Home() {
  return (
    <Layout>
      <div className="home-main">
        <HomeLeftBar />
        <HomeRightBar />
      </div>
    </Layout>
  );
}

export default Home;
