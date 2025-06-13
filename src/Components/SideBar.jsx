import React from 'react'
import {Box, Typography} from '@mui/material'
import DashboardIcon from '@mui/icons-material/Dashboard';
import { assets } from '../assets/assets';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import AssignmentAddIcon from '@mui/icons-material/AssignmentAdd';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div style={{
        width:"272.78px",
        height:"1041px",
        left:"2.22px",
        backgroundColor:"#FFFFFF",
    }}>
      <Box sx={{
            width:"26.61px",
            height:"26.61px",
            position:"absolute",
            top:"150px",
            left:"38.74px",
      }}>
        <DashboardIcon/>
      </Box>
       <Typography sx={{
             width:"125.3px",
            height:"30px",
            position:"absolute",
            top:"147px",
            left:"77.55px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"150%",
              linespacing:"0%",
           color:"#6B4FC8",

        }}>Dashboard</Typography>
        
        <Box sx={{
            width:"24px",
            height:"24px",
            position:"absolute",
            top:"217px",
            left:"39px",
        }}>
            <img src={assets.image_3} alt="" />
        </Box>
        <Typography sx={{
            width:"156.35px",
            height:"30px",
            position:"absolute",
            top:"212px",
            left:"77.55px",
            fontFamily:"poppins",
            fontWeight:"500",
            fontSize:"20px",
            lineHeight:"150%", 
           color:"#1E1E1E",
           linespacing:"-1.1%",
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
           linespacing:"0%",
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
           linespacing:"0%",
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
           linespacing:"0%",
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
           linespacing:"0%",
        }}>Logout</Typography>
    </div>
    
  )
}

export default Sidebar
