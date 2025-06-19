import { Box, Typography } from '@mui/material'
import React from 'react'
import Hiring from './Hiring'
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';


function DashBoardMain() {
  return (
    <div>
      <Box>
    <Typography  sx={{
           width:"187px",
            height:"46px",
            position:"absolute",
            top:"101px",
            left:"303px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"28px",
            lineHeight:"100%",
            letterSpacing:"0%",
           color:"#000000",
           
    }}>Dashboard</Typography>

    <Typography
    sx={{
            width:"309px",
            height:"27px",
            position:"absolute",
            top:"142px",
            left:"303px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"100%",
            letterSpacing:"0%",
           color:"#000000",
    }}>Today is Saturday, 14th June 2025</Typography>
      </Box>
      
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
          position: 'absolute',
          top: '134px',
          left: '1180px',
          border: '1px solid #6B4FC8',
          borderRadius: '6px',
          padding: '5px 10px',
          backgroundColor:"#FFFFFF",
          
        }}
      >
  
        <CalendarTodayIcon sx={{ fontSize: '18px', color: '#000000' }} />
        <Typography
          sx={{
            fontFamily: 'Poppins',
            fontWeight: 300,
            fontSize: '14px',
            color: '#000000',
          }}
        >
          Feb 18–May 18
        </Typography>
      </Box>
      
    </div>
  )
}

export default DashBoardMain
