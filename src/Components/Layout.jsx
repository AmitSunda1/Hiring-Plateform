import React from "react";
import Header from "./Header";
import Sidebar from "./SideBar";

function Layout({ children }) {
  return (
    <div
      style={{
        backgroundColor: "#F5F6FA",
        // minHeight: "100vh",
        // width: "fit-content",
        paddingLeft: "272.78px", // Add padding to account for fixed sidebar
      }}
    >
      <Header />
      <Sidebar />
      <div style={{ paddingTop: "0px" }}>
        {" "}
        {/* Add padding for header */}
        {children}
      </div>
    </div>
  );
}

export default Layout;
