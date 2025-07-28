import React from "react";
import Hiring from "../Components/Dashboard/Hiring";
import JobSummery from "../Components/Dashboard/JobSummery";
import DashBoardMain from "../Components/Dashboard/DashBoardMain";
import Taskadd from "../Components/Dashboard/Taskadd";
import Schedule from "../Components/Dashboard/Schedule";

function DashBoard() {
  return (
    <div style={{ position: "relative", width: "100%", minHeight: "100vh" }}>
      <DashBoardMain />
      <Hiring />
      <JobSummery />
      <Taskadd />
      <Schedule />
    </div>
  );
}

export default DashBoard;
