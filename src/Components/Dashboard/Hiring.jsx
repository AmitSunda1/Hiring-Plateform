import {
  Box,
  MenuItem,
  Select,
  Typography,
  Button,
  CircularProgress,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useGetJobsByDepartmentQuery } from "../../store/api/jobsApi";

const stageTitles = [
  "New Applied",
  "Screening",
  "Assignment",
  "Interview",
  "Hired",
];
const stageColors = ["#FCE0EA", "#F7E9CE", "#E1F5FC", "#FAFBDA", "#ECE1FC"];

function Hiring() {
  const [role, setRole] = useState("Design");

  // RTK Query hook to fetch job data
  const {
    data: jobsResponse,
    error,
    isLoading,
  } = useGetJobsByDepartmentQuery(role);

  // Extract job data from response
  const jobData = jobsResponse?.data || [];

  return (
    <div>
      <Box
        sx={{
          width: "650px",
          height: "401px",
          position: "absolute",
          top: "186px",
          left: "303px",
          borderRadius: "9px",
          color: "#FFFFFF",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              width: "77px",
              height: "29px",
              fontFamily: "poppins",
              fontWeight: "600",
              fontSize: "20px",
              lineHeight: "100%",
              color: "#000000",
              letterSpacing: "0%",
              padding: "20px",
            }}
          >
            Hiring
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              size="small"
              IconComponent={KeyboardArrowDownIcon}
              sx={{
                border: "2px solid #6B4FC8",
                borderRadius: "8px",
                fontFamily: "Poppins",
                fontWeight: 300,
                width: "229px",
                height: "36px",
                position: "absolute",
                top: "15px",
                left: "150px",
                backgroundColor: "#FFFFFF",
              }}
            >
              <MenuItem value="Design">Design</MenuItem>
              <MenuItem value="Web Development">Web Development</MenuItem>
              <MenuItem value="Engineering">Engineering</MenuItem>
              <MenuItem value="Marketing">Marketing</MenuItem>
            </Select>

            <Button
              variant="outlined"
              endIcon={<KeyboardArrowRightIcon />}
              sx={{
                width: "135px",
                height: "38px",
                border: "2px solid #6B4FC8",
                borderRadius: "8px",
                backgroundColor: "#FFFFFF",
                fontFamily: "Poppins",
                fontWeight: 500,
                fontSize: "14px",
                color: "#000000",
                textTransform: "none",
                left: "-30px",
              }}
            >
              VIEW ALL
            </Button>
          </Box>
        </Box>

        <Box sx={{ mt: 3 }}>
          {/* Header Row */}
          <Box sx={{ display: "flex", mb: 2 }}>
            <Box
              sx={{
                width: "20%",
                fontWeight: 600,
                fontFamily: "Poppins",
                color: "black",
                paddingLeft: "10px",
              }}
            >
              Jobs
            </Box>
            {stageTitles.map((stage, i) => (
              <Box
                key={i}
                sx={{
                  width: "16%",
                  fontWeight: 600,
                  fontFamily: "Poppins",
                  fontSize: "14px",
                  color: "#000000",
                  paddingLeft: "20px",
                }}
              >
                {stage}
              </Box>
            ))}
          </Box>

          {/* Loading State */}
          {isLoading && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <CircularProgress />
            </Box>
          )}

          {/* Error State */}
          {error && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <Typography color="error">
                Error loading data: {error.message || "Something went wrong"}
              </Typography>
            </Box>
          )}

          {/* Job Data Rows */}
          {!isLoading &&
            !error &&
            jobData.map((job, i) => (
              <Box
                key={job.id || i}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  mb: 2,
                  rowGap: "13px",
                  columnGap: "12px",
                }}
              >
                <Box sx={{ width: "20%" }}>
                  <Typography
                    sx={{
                      fontWeight: 600,
                      fontFamily: "Poppins",
                      fontSize: "12px",
                      color: "black",
                      paddingLeft: "10px",
                    }}
                  >
                    {job.title}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      fontFamily: "Poppins",
                      color: "#A0A0A0",
                      fontSize: "8px",
                      paddingLeft: "10px",
                    }}
                  >
                    Total Applications {job.totalApplications || 0}
                  </Typography>
                </Box>

                {job.stages.map((val, j) => (
                  <Box
                    key={j}
                    sx={{
                      width: "16%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "90%",
                        py: 0.5,
                        backgroundColor: val ? stageColors[j] : "#E0E0E0",
                        borderRadius: "2px",
                        textAlign: "center",
                        fontFamily: "Poppins",
                        fontSize: "10px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      {val || "-"}
                    </Box>
                  </Box>
                ))}
              </Box>
            ))}

          {/* No Data State */}
          {!isLoading && !error && jobData.length === 0 && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "200px",
              }}
            >
              <Typography color="textSecondary">
                No jobs found for {role} department
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </div>
  );
}

export default Hiring;
