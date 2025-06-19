import { Box,Typography, Button, Divider } from '@mui/material'
import React from 'react'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

function Schedule() {

  
  const events = {
    today: [
      { role: 'UI/UX Design', type: 'Interview', color: '#F8BBD0' }, // pink
      { role: 'Front End Developer', type: 'Interview', color: '#B39DDB' }, // purple
    ],
    upcoming: [
      { role: 'UI Designer', type: 'Interview', color: '#AED581' }, // green
      { role: 'Developer', type: 'Interview', color: '#FFD54F' }, // yellow
    ],
  };

  const renderEvents = (data) =>
    data.map((event, i) => (
      <Box key={i} sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        <Box sx={{
          width: '4px',
          height: '40px',
          backgroundColor: event.color,
          borderRadius: '4px',
          mr: 2,
          
          
        }} />
        <Box>
          <Typography fontWeight={500}>{event.role}</Typography>
          <Typography fontSize="13px" color="text.secondary">{event.type}</Typography>
        </Box>
      </Box>
    ));
  return (
    <div>
      <Box sx={{
        width:"350px",
            height:"401px",
            position:"absolute",
            top:"620px",
            left:"1000px",
            borderRadius:"8px",
            backgroundColor:"#FFFFFF",
            padding:"20px",
            
      }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 ,  }}>
        <Typography fontWeight={600}>Calendar</Typography>
        <Button
          variant="outlined"
          size="small"
          sx={{ borderColor: '#673ab7', color: '#6B4FC8', textTransform: 'none' }}
          endIcon={<KeyboardArrowRightIcon />}
        >
          View All
        </Button>
      </Box>

      <Typography fontWeight={600} sx={{ mb: 1,  }}>Today</Typography>
      {renderEvents(events.today)}

      <Typography fontWeight={600} sx={{ mt: 2, mb: 1 }}>Upcoming</Typography>
      {renderEvents(events.upcoming)}
      </Box>
    </div>
  )
}


export default Schedule
