import { Typography,Box, Divider, IconButton, Paper, InputBase } from '@mui/material'
import React, { useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { assets } from '../assets/assets';

function Header() {

    const [search, setSearch] = useState(false);
  return (
    
    <div>
        <Box sx={{
         width:"143.46",
        height:"48.79px",
        top:"18px",
        left:"2.22px",
        radius:"8px",
        position:"absolute",
        }}>
            <img src={assets.image_2} alt="" />
        </Box>
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
     
    <div>

        <Box sx={
            {
             width:"24px",
            height:"24px",
            position:"absolute",
            top:"22px",
            left:"509px", 
            }
        }>
            <IconButton sx={{
                position:"relative",
            }} onClick={()=>setSearch(!search)}>
                <SearchIcon/>
            </IconButton>
                 {setSearch && (
        <Paper
          sx={{
            position: 'absolute',
            top: '40px',
            right: 0,
            p: '5px 10px',
            display: 'flex',
            alignItems: 'center',
            width: 250,
            boxShadow: 3,
          }}
        >
          <InputBase
            placeholder="Search…"
            fullWidth
            autoFocus
          />
        </Paper>
      )}
        
        </Box>
        <Box sx={{
            width:"30px",
            height:"30px",
            position:"absolute",
            top:"20px",
            left:"1107px",
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
        left: "1158px",
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
            left:"1209px", 
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
      </div>
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
