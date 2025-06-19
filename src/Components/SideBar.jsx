import React, { useState } from 'react'
import {Box, Typography} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { assets } from '../assets/assets';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

function Sidebar() {
    const [color,setColor]=useState("Dashboard");
  
  return (
    <Box onClick={()=>setColor("#6B4FC8")}
     sx={{
        width:"272.78px",
        height:"1041px",
        left:"2.22px",
        backgroundColor:"#FFFFFF",
        
        
    }}>
      <Box sx={{
               width:"143.46",
              height:"48.79px",
              top:"18px",
              left:"3.22px",
              radius:"8px",
              position:"absolute",
              }}>
                  <img src={assets.image_2} alt="" />
              </Box>
      <Box sx={{
            width:"26.61px",
            height:"26.61px",
            position:"absolute",
            top:"150px",
            left:"38.74px",
           backgroundColor:"color",
      }}>
        <DashboardIcon/>
      </Box>
       <Typography  component={Link} to="/" sx={{
             width:"125.3px",
            height:"30px",
            position:"absolute",
            top:"147px",
            left:"77.55px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"150%",
             letterSpacing:"0%",
            backgroundColor:"color",
           cursor:"pointer",
       

        }}>Dashboard</Typography>
        
        <Box sx={{
            width:"24px",
            height:"24px",
            position:"absolute",
            top:"217px",
            left:"39px",
             backgroundColor:"color",
        }}>
            <img src={assets.image_3} alt="" />
        </Box>
        <Typography component={Link} to="/recruit"  sx={{
            width:"156.35px",
            height:"30px",
            position:"absolute",
            top:"212px",
            left:"77.55px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"150%", 
           backgroundColor:"color",
            letterSpacing:"-1.1%",
            cursor:"pointer",
        }}>Recruiter Desk</Typography>


        <Box sx={{
             width:"26.61px",
            height:"26.61px",
            position:"absolute",
            top:"281px",
            left:"42.07px",
        }}>
        <RecordVoiceOverIcon/>
        </Box>
        <Typography sx={{
             width:"114.21px",
            height:"30px",
            position:"absolute",
            top:"277px",
            left:"77.55px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"150%", 
           color:"#000000",
            letterSpacing:"0%",
            cursor:"pointer",
        }}>Interviews</Typography>


        <Box sx={{
             width:"26.61px",
            height:"26.61px",
            position:"absolute",
            top:"342px",
            left:"38.74px",
        }}>
            <AssignmentAddIcon/>
        </Box>
        <Typography sx={{
            width:"134.17px",
            height:"30px",
            position:"absolute",
            top:"342px",
            left:"77.55px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"100%", 
           color:"#000000",
            letterSpacing:"0%",
            cursor:"pointer",
        }}>Assignment</Typography>

        <Box sx={{
             width:"26.61px",
            height:"26.61px",
            position:"absolute",
            top:"407px",
            left:"38.74px",
        }}>
        <img src={assets.img4} alt="" />
        </Box>
        <Typography sx={{
             width:"177.42px",
            height:"30px",
            position:"absolute",
            top:"407px",
            left:"77.55px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"150%", 
           color:"#000000",
            letterSpacing:"0%",
            cursor:"pointer",
        }}>Job/Internships</Typography>

        <Box sx={{
             width:"22.18px",
            height:"18px",
            position:"absolute",
            top:"981px",
            left:"39px",
            color:"#000000",
        }}>
        <LogoutIcon/>
        </Box>
        <Typography sx={{
             width:"85.38px",
            height:"30px",
            position:"absolute",
            top:"975px",
            left:"74.48px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"160%", 
           color:"#000000",
          letterSpacing:"0%",
          cursor:"pointer",
        }}>Logout</Typography>
    </Box>
    
  )
}

export default Sidebar
