import { Typography,Box, Divider, IconButton, Paper, InputBase } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { assets } from '../assets/assets';

function Header() {

    const[search,setSearch]=useState(false);
  return (
    
    <div>
      <Typography sx={{
        fontFamily:"poppins",
        fontWeight: "400",
        fontSize:"16px",
        color:"#000000",
        lineHeight:"100%",
        width:"134px",
        height:"23px",
        position:"absolute",
        top:"23px",
        left:"303px",
        
      }}>
        Fat Secret Team
      </Typography>
    
     <Box sx={{
 
  width: '61px',
  backgroundColor: '#E1E1E1',
  position: 'absolute',
  left:"498px",
  border:"1px",
  rotate:"-90 deg",
}} />

        <Box sx={
            {
             width:"24px",
            height:"24px",
            position:"absolute",
            top:"22px",
            left:"509px", 
            }
        }>
          {!search ?(
            <IconButton onClick={()=>setSearch(true)}>
               <SearchIcon/>
            </IconButton>
          ):
          <Paper
            component="form"
            sx={{
              display: 'flex',
              alignItems: 'center',
              width: 200,
              height: 36,
              px: 1,
              borderRadius: '20px',
              backgroundColor: '#f0f0f0',
            }}
          >
            <InputBase
              placeholder="Search here"
              sx={{ ml: 1, flex: 1, fontFamily: 'Poppins' }}
              autoFocus
            />
            <IconButton >X</IconButton>
          </Paper>
       
          }
               
         
          
        
        </Box>
        <Box sx={{
            width:"30px",
            height:"30px",
            position:"absolute",
            top:"20px",
            left:"1311px",
            backgroundColor:"#D9D9D9",
            borderRadius:"50%",
             display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
        <AddIcon sx={{
            width:"19px",
            height:"19px",
            top:"26px",
            left:"1113px",
            
        }}/>
        </Box>
        <Box sx={{
         width: "30px",
          height: "30px",
         top: "20px",
        left: "1355px",
         position:"absolute",
        backgroundColor:"#D9D9D9",
        borderRadius:"50%",
         display: 'flex',
         justifyContent: 'center',
         alignItems: 'center',

        }}>
    <NotificationsActiveIcon sx={{
            width:"21px",
            height:"21px",
            top:"26px",
            left:"1164px",           
            
        }}/>
        </Box>
        <Box  sx={{
            width:"31px",
            height:"30px",
            top:"20px",
            left:"1400px", 
            position:"absolute",
            backgroundColor:" #D9D9D9",
            borderRadius:"50%",
            
        }}>
            <img src={assets.profile} alt=""  style={{
            width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '50%',
            }}/>
        </Box>

          <Box sx={{
  height: '1px',
  width: '100%',
  backgroundColor: '#E0E0E0',
  position: 'absolute',
  top: '65px',
}} />


    </div>
    
    
  )
}

export default Header
