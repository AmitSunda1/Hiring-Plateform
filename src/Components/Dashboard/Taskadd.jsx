import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  MenuItem,
  Select,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  IconButton,
  Paper,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider, TimePicker } from "@mui/x-date-pickers";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AddIcon from "@mui/icons-material/Add";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import dayjs from "dayjs";

const Taskadd = () => {
  const [selectedDay, setSelectedDay] = useState("Today");
  const [taskList, setTaskList] = useState([
    { start: "11:00 AM", end: "11:30 AM", color: "#B497FF" },
    { start: "12:30 PM", end: "01:30 PM", color: "#FFB6C1" },
    { start: "02:30 PM", end: "03:00 PM", color: "#FFD700" },
    { start: "04:30 PM", end: "05:30 PM", color: "#ADFF2F" },
    { start: "06:00 PM", end: "06:30 PM", color: "#A8C5FF" },
  ]);

  const [openDialog, setOpenDialog] = useState(false);
  const [startTime, setStartTime] = useState(dayjs().hour(9).minute(0));
  const [endTime, setEndTime] = useState(dayjs().hour(10).minute(0));
  const colorOptions = ["#B497FF", "#FFB6C1", "#FFD700", "#ADFF2F", "#A8C5FF"];
  const [selectedColor, setSelectedColor] = useState(colorOptions[0]);

  const handleAddTask = () => {
    setTaskList([
      ...taskList,
      {
        start: startTime.format("hh:mm A"),
        end: endTime.format("hh:mm A"),
        color: selectedColor,
      },
    ]);
    setOpenDialog(false);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          width: "605px",
          height: "350px",
          position: "absolute",
          top: "620px",
          left: "303px",
          borderRadius: "9px",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography fontWeight={600}>My Task</Typography>
          <Box display="flex" gap={2} alignItems="center">
            <Select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              size="small"
              sx={{ borderRadius: 2, border: "2px solid #6B4FC8" }}
            >
              <MenuItem value="Today">Today</MenuItem>
              <MenuItem value="Tomorrow">Tomorrow</MenuItem>
            </Select>
            <Box
              display="flex"
              alignItems="center"
              sx={{
                px: 2,
                py: 1,
                borderRadius: 2,
                border: "2px solid #6B4FC8",
                fontSize: "14px",
                fontWeight: 500,
              }}
            >
              <CalendarTodayIcon sx={{ mr: 1, fontSize: 18 }} />
              Feb 18–May 18
            </Box>
            <Button
              startIcon={<AddIcon />}
              onClick={() => setOpenDialog(true)}
              variant="outlined"
              sx={{
                borderRadius: 2,
                border: "2px solid #6B4FC8",
                fontWeight: 600,
              }}
            >
              Add Task
            </Button>
          </Box>
        </Box>

        {/* Task List */}
        {taskList.map((task, index) => (
          <Box
            key={index}
            display="flex"
            alignItems="center"
            border="1px solid #E0E0E0"
            borderRadius={1}
            mb={2}
          >
            <Box
              sx={{
                width: "5px",
                backgroundColor: task.color,
                height: "40px",
                borderTopLeftRadius: 4,
                borderBottomLeftRadius: 4,
              }}
            />
            <Box display="flex" alignItems="center" px={2} py={1} flexGrow={1}>
              <AccessTimeIcon sx={{ mr: 1, fontSize: 20 }} />
              <Typography sx={{ fontSize: "14px" }}>
                {task.start} – {task.end}
              </Typography>
            </Box>
            <CheckCircleOutlineIcon sx={{ mr: 2 }} />
          </Box>
        ))}

        {/* Add Task Dialog */}
        <Dialog open={openDialog} onClose={() => setOpenDialog(false)}>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}
          >
            <TimePicker
              label="Start Time"
              value={startTime}
              onChange={(val) => setStartTime(val)}
              renderInput={(params) => <TextField {...params} />}
            />
            <TimePicker
              label="End Time"
              value={endTime}
              onChange={(val) => setEndTime(val)}
              renderInput={(params) => <TextField {...params} />}
            />
            <Select
              label="Color"
              value={selectedColor}
              onChange={(e) => setSelectedColor(e.target.value)}
              fullWidth
            >
              {colorOptions.map((color, idx) => (
                <MenuItem key={idx} value={color}>
                  <Box
                    sx={{
                      display: "inline-block",
                      width: 20,
                      height: 20,
                      backgroundColor: color,
                      mr: 1,
                    }}
                  />
                  {color}
                </MenuItem>
              ))}
            </Select>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button onClick={handleAddTask} variant="contained">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </Paper>
    </LocalizationProvider>
  );
};

export default Taskadd;
