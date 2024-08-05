import React from 'react'
import { Box, Button, Typography } from '@mui/material'
const Home = () => {
  return (
    <Box sx={{
      width: "100%",
      maxWidth: "1440px",
      minHeight: "936px",
      background: `linear-gradient(128.54deg, #001F6C 6.3%, #1752EB 87.19%)`,
      display: "flex",
      justifyContent: "center",
    }}>
      <Box sx={{
        width: "80%",
        maxWidth: "1009px",
        height:"auto",
        display:"flex",
        flexDirection:"column",
        gap:"20px",
        marginTop:"200px"
      }}>

        <Typography sx={{
          width: "100%",
          height:"auto",
          fontSize: { xs: "38px", sm: "44px", md: "56px",  },
          lineHeight: { xs: "40px", sm: "50px", md: "60px", lg: "77.45px" },
          fontWeight: "bold"
        }}>
          <span style={{ color: "#36E9F4" }}>Count on our dependable web developers </span> to handle workloads with precision and fuel your grid-ready growth
        </Typography>
        <Typography sx={{
          width: "80%",
          maxWidth: "707px",
          height:"auto",
          marginTop:{ xs: "5px", sm: "10px", md: "15px" },
          fontSize: { xs: "16px", sm: "18px", md: "20px",lg:"20px" },
          lineHeight: { xs: "24px", sm: "26px", md: "30px" },
          color: "#8CE3FF"
        }}>
          Tap into a team of highly skilled and experienced web developers with diverse expertise. They can complement your in-house staff, accelerate your agency's expansion, and optimize your revenue potential.
        </Typography>
        <Button sx={{
          width:{xs:"140px",sm:"170px",md:"242px"},
          height:{xs:'40px',sm:"50px",md:"60px"},
          gap: "8px",
          border: "2px solid white",
          textTransform: "none",
          color: "white",
          
        }}>
          <Typography sx={{fontSize: { xs: "14px", sm: "16px" ,md:"18px"},
          lineHeight: { xs: "16px", sm: "20px",md:"24px" },}}>
            Take the First Step
          </Typography>
        </Button>
      </Box>
    </Box>
  )
}

export default Home