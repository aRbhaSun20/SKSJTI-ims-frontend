import React from "react";
import "./Layout.css";
import LeftBar, { DrawerHeader } from "./LeftBar";
import TopBar from "./TopBar";

function Layout({ children }) {
  const [open, setOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setOpen((state) => !state);
  };
  return (
    <div className="layoutMain">
      <TopBar open={open} />
      <LeftBar open={open} handleDrawerToggle={handleDrawerToggle} />
      <div className={`contents ${open ? "open" : ""}`}>
        <DrawerHeader />
        <main className="main-content">{children}</main>
      </div>
    </div>
  );
}

export default Layout;
