import React from "react";
import Layout from "../../components/Layout/Layout";
import "../Home/Home.css";
import SettingsLeftBar from "./SettingsLeftBar";

function Settings() {
  return (
    <Layout>
      <div className="home-main">
        <SettingsLeftBar />
      </div>
    </Layout>
  );
}

export default Settings;
