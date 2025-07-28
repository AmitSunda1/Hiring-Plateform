import React from "react";
import { Box, Typography } from "@mui/material";

const Assignment = () => {
  return (
    <Box
      sx={{
        padding: "20px",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography
        variant="h4"
        sx={{ mb: 2, fontFamily: "Poppins", fontWeight: 600 }}
      >
        Assignment
      </Typography>
      <Typography variant="body1" sx={{ fontFamily: "Poppins", color: "#666" }}>
        This page is under development. Assignment management features will be
        available soon.
      </Typography>
    </Box>
  );
};

export default Assignment;
