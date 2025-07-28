import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { assets } from "../assets/assets";
import RecordVoiceOverIcon from "@mui/icons-material/RecordVoiceOver";
import AssignmentAddIcon from "@mui/icons-material/AssignmentAdd";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");

  return (
    <Box
      sx={{
        width: "272.78px",
        height: "1041px",
        left: "2.22px",
        backgroundColor: "#FFFFFF",
        position: "fixed",
        zIndex: 1000,
      }}
    >
      <Box
        sx={{
          width: "143.46",
          height: "48.79px",
          top: "18px",
          left: "3.22px",
          radius: "8px",
          position: "absolute",
        }}
      >
        <img src={assets.image_2} alt="" />
      </Box>
      <Box
        sx={{
          width: "26.61px",
          height: "26.61px",
          position: "absolute",
          top: "150px",
          left: "38.74px",
          backgroundColor:
            activeItem === "Dashboard" ? "#6B4FC8" : "transparent",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <DashboardIcon
          sx={{ color: activeItem === "Dashboard" ? "#FFFFFF" : "#000000" }}
        />
      </Box>
      <Typography
        component={Link}
        to="/"
        onClick={() => setActiveItem("Dashboard")}
        sx={{
          width: "125.3px",
          height: "30px",
          position: "absolute",
          top: "147px",
          left: "77.55px",
          fontFamily: "poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "150%",
          letterSpacing: "0%",
          color: activeItem === "Dashboard" ? "#6B4FC8" : "#000000",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Dashboard
      </Typography>

      <Box
        sx={{
          width: "24px",
          height: "24px",
          position: "absolute",
          top: "217px",
          left: "39px",
          backgroundColor:
            activeItem === "Recruiter" ? "#6B4FC8" : "transparent",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src={assets.image_3}
          alt=""
          style={{
            filter:
              activeItem === "Recruiter" ? "brightness(0) invert(1)" : "none",
          }}
        />
      </Box>
      <Typography
        component={Link}
        to="/recruit"
        onClick={() => setActiveItem("Recruiter")}
        sx={{
          width: "156.35px",
          height: "30px",
          position: "absolute",
          top: "212px",
          left: "77.55px",
          fontFamily: "poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "150%",
          color: activeItem === "Recruiter" ? "#6B4FC8" : "#000000",
          letterSpacing: "-1.1%",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Recruiter Desk
      </Typography>

      <Box
        sx={{
          width: "26.61px",
          height: "26.61px",
          position: "absolute",
          top: "281px",
          left: "42.07px",
          backgroundColor:
            activeItem === "Interviews" ? "#6B4FC8" : "transparent",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RecordVoiceOverIcon
          sx={{ color: activeItem === "Interviews" ? "#FFFFFF" : "#000000" }}
        />
      </Box>
      <Typography
        component={Link}
        to="/interview"
        onClick={() => setActiveItem("Interviews")}
        sx={{
          width: "114.21px",
          height: "30px",
          position: "absolute",
          top: "277px",
          left: "77.55px",
          fontFamily: "poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "150%",
          color: activeItem === "Interviews" ? "#6B4FC8" : "#000000",
          letterSpacing: "0%",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Interviews
      </Typography>

      <Box
        sx={{
          width: "26.61px",
          height: "26.61px",
          position: "absolute",
          top: "342px",
          left: "38.74px",
          backgroundColor:
            activeItem === "Assignment" ? "#6B4FC8" : "transparent",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <AssignmentAddIcon
          sx={{ color: activeItem === "Assignment" ? "#FFFFFF" : "#000000" }}
        />
      </Box>
      <Typography
        component={Link}
        to="/assign"
        onClick={() => setActiveItem("Assignment")}
        sx={{
          width: "134.17px",
          height: "30px",
          position: "absolute",
          top: "342px",
          left: "77.55px",
          fontFamily: "poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "100%",
          color: activeItem === "Assignment" ? "#6B4FC8" : "#000000",
          letterSpacing: "0%",
          cursor: "pointer",
          textDecoration: "none",
        }}
      >
        Assignment
      </Typography>

      <Box
        sx={{
          width: "26.61px",
          height: "26.61px",
          position: "absolute",
          top: "407px",
          left: "38.74px",
        }}
      >
        <img src={assets.img4} alt="" />
      </Box>
      <Typography
        sx={{
          width: "177.42px",
          height: "30px",
          position: "absolute",
          top: "407px",
          left: "77.55px",
          fontFamily: "poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "150%",
          color: "#000000",
          letterSpacing: "0%",
          cursor: "pointer",
        }}
      >
        Job/Internships
      </Typography>

      <Box
        sx={{
          width: "22.18px",
          height: "18px",
          position: "absolute",
          top: "981px",
          left: "39px",
          color: "#000000",
        }}
      >
        <LogoutIcon />
      </Box>
      <Typography
        sx={{
          width: "85.38px",
          height: "30px",
          position: "absolute",
          top: "975px",
          left: "74.48px",
          fontFamily: "poppins",
          fontWeight: "500",
          fontSize: "20px",
          lineHeight: "160%",
          color: "#000000",
          letterSpacing: "0%",
          cursor: "pointer",
        }}
      >
        Logout
      </Typography>
    </Box>
  );
}

export default Sidebar;
