import {
  Box,
  Typography,
  Button,
  Divider,
  CircularProgress,
  Alert,
} from "@mui/material";
import React, { useMemo } from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { useGetAllEventsQuery } from "../../store/api/eventsApi";

function Schedule() {
  const { data: events = [], isLoading, error } = useGetAllEventsQuery();

  // Function to check if an event is today
  const isToday = (eventDate) => {
    const today = new Date();
    const event = new Date(eventDate);
    return (
      event.getDate() === today.getDate() &&
      event.getMonth() === today.getMonth() &&
      event.getFullYear() === today.getFullYear()
    );
  };

  // Function to check if an event is upcoming (after today)
  const isUpcoming = (eventDate) => {
    const today = new Date();
    today.setHours(23, 59, 59, 999); // End of today
    const event = new Date(eventDate);
    return event > today;
  };

  // Process events and categorize them
  const categorizedEvents = useMemo(() => {
    const colors = [
      "#F8BBD0",
      "#B39DDB",
      "#AED581",
      "#FFD54F",
      "#FFAB91",
      "#80CBC4",
    ];

    const todayEvents = events
      .filter((event) => isToday(event.date))
      .map((event, index) => ({
        role: event.title,
        type: event.description,
        color: colors[index % colors.length],
        time: event.time,
      }));

    const upcomingEvents = events
      .filter((event) => isUpcoming(event.date))
      .slice(0, 4) // Limit to 4 upcoming events
      .map((event, index) => ({
        role: event.title,
        type: event.description,
        color: colors[(index + todayEvents.length) % colors.length],
        time: event.time,
        date: new Date(event.date).toLocaleDateString(),
      }));

    return {
      today: todayEvents,
      upcoming: upcomingEvents,
    };
  }, [events]);

  const renderEvents = (data, showDate = false) =>
    data.map((event, i) => (
      <Box key={i} sx={{ display: "flex", alignItems: "center", mb: 2 }}>
        <Box
          sx={{
            width: "4px",
            height: "40px",
            backgroundColor: event.color,
            borderRadius: "4px",
            mr: 2,
          }}
        />
        <Box sx={{ flex: 1 }}>
          <Typography fontWeight={500}>{event.role}</Typography>
          <Typography fontSize="13px" color="text.secondary">
            {event.type}
          </Typography>
          {showDate && event.date && (
            <Typography fontSize="12px" color="text.secondary">
              {event.date} at {event.time}
            </Typography>
          )}
          {!showDate && event.time && (
            <Typography fontSize="12px" color="text.secondary">
              {event.time}
            </Typography>
          )}
        </Box>
      </Box>
    ));

  if (isLoading) {
    return (
      <Box
        sx={{
          width: "350px",
          height: "401px",
          position: "absolute",
          top: "620px",
          left: "1000px",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box
        sx={{
          width: "350px",
          height: "401px",
          position: "absolute",
          top: "620px",
          left: "1000px",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
          padding: "20px",
        }}
      >
        <Alert severity="error">
          Failed to load events. Please try again later.
        </Alert>
      </Box>
    );
  }

  return (
    <div>
      <Box
        sx={{
          width: "350px",
          height: "401px",
          position: "absolute",
          top: "620px",
          left: "1000px",
          borderRadius: "8px",
          backgroundColor: "#FFFFFF",
          padding: "20px",
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 2 }}>
          <Typography fontWeight={600}>Calendar</Typography>
          <Button
            variant="outlined"
            size="small"
            sx={{
              borderColor: "#673ab7",
              color: "#6B4FC8",
              textTransform: "none",
            }}
            endIcon={<KeyboardArrowRightIcon />}
          >
            View All
          </Button>
        </Box>

        <Typography fontWeight={600} sx={{ mb: 1 }}>
          Today
        </Typography>
        {categorizedEvents.today.length > 0 ? (
          renderEvents(categorizedEvents.today)
        ) : (
          <Typography fontSize="14px" color="text.secondary" sx={{ mb: 2 }}>
            No events scheduled for today
          </Typography>
        )}

        <Typography fontWeight={600} sx={{ mt: 2, mb: 1 }}>
          Upcoming
        </Typography>
        {categorizedEvents.upcoming.length > 0 ? (
          renderEvents(categorizedEvents.upcoming, true)
        ) : (
          <Typography fontSize="14px" color="text.secondary">
            No upcoming events
          </Typography>
        )}
      </Box>
    </div>
  );
}

export default Schedule;
