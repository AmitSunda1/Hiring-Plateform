import { Box, Typography } from '@mui/material'
import React from 'react'
import MoreVertIcon from '@mui/icons-material/MoreVert';

function JobSummery() {


  return (
    <div>
      <Box sx={{
        width:"350px",
            height:"401px",
            position:"absolute",
            top:"186px",
            left:"1000px",
            borderRadius:"8px",
            backgroundColor:"#FFFFFF",
      }}></Box>
      <Typography sx={{
        width:"164px",
            height:"29px",
            position:"absolute",
            top:"210px",
            left:"1020px",
            fontFamily:"poppins",
            fontWeight:"600",
            fontSize:"20px",
            lineHeight:"100%", 
           color:"#000000",
          letterSpacing:"0%",
      }}>Job Summary</Typography>

      <Box>
        <MoreVertIcon sx={{
           width:"32.01px",
            height:"29px",
            position:"absolute",
            top:"210px",
            left:"1290.01px",
            rotate:"-89.97 deg"
            
        }}/>
      </Box>

       <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box
              sx={{
                width: '196px',
                height: '196px',
                position:"absolute",
            top:"261px",
            left:"1070px",
                borderRadius: '50%',
                border: '8px solid #C8A9FD',
                cursor:"pointer",
              }}
            ></Box>
          </Box>

           <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
            <Box sx={{
              width: "8px",
              height: "31px",
              borderRadius: "2px",
              position:"absolute",
              top:"495px",
              left:"1050px",
              backgroundColor:"#C2AAFF",
            }}>
          </Box>
          <Box sx={{
              width: "8px",
              height: "31px",
              borderRadius: "2px",
              position:"absolute",
              top:"495px",
              left:"1190px",
              backgroundColor:"#D7F289",
            }}>
          </Box>
          <Box sx={{
              width: "8px",
              height: "31px",
              borderRadius: "2px",
              position:"absolute",
              top:"534px",
              left:"1050px",
              backgroundColor:"#FEC1D6",
            }}>
          </Box>
          <Box sx={{
              width: "8px",
              height: "31px",
              borderRadius: "2px",
              position:"absolute",
              top:"534px",
              left:"1190px",
              backgroundColor:"#FED55A",
            }}>
          </Box>
          
          <Typography  sx={{ 
            width:"90px",
            height:"24px",
            position:"absolute",
            top:"500px",
            left:"1070px",
            fontFamily:"poppins",
            fontWeight:"600",
            fontSize:"16px",
            lineHeight:"100%", 
           color:"#000000",
          letterSpacing:"0%",
           }}>
          40 Published  
          </Typography>
          <Typography sx={{
             width:"100px",
            height:"24px",
            position:"absolute",
            top:"500px",
            left:"1210px",
            fontFamily:"poppins",
            fontWeight:"600",
            fontSize:"16px",
            lineHeight:"100%", 
           color:"#000000",
          letterSpacing:"0%",
          }}>20 On Hold</Typography>
          <Typography sx={{
             width:"70px",
            height:"24px",
            position:"absolute",
            top:"540px",
            left:"1070px",
            fontFamily:"poppins",
            fontWeight:"600",
            fontSize:"16px",
            lineHeight:"100%", 
           color:"#000000",
          letterSpacing:"0%",
          }}>05 Hired</Typography>
          <Typography sx={{
              width:"70px",
            height:"24px",
            position:"absolute",
            top:"540px",
            left:"1210px",
            fontFamily:"poppins",
            fontWeight:"600",
            fontSize:"16px",
            lineHeight:"100%", 
           color:"#000000",
          letterSpacing:"0%",
          }}>15 Closed</Typography>
          </Box>
        
     
    </div>
  )
}

export default JobSummery
