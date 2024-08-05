import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import "./styles.css";
import Grid from '@mui/material/Grid';
import Background from "../../../public/Images/Mask group.png";
import Group from "../../../public/Images/Group 217.png";

const ChallengeCard = ({ text, highlight }) => (
  <Grid
    item
    xs={12}
    sm={12}
    md={6}
    lg={6}
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'flex-start'
    }}
  >
    <Box
      sx={{
        width: '100%',
        maxWidth: '540px',
        height: { xs: "80px", sm: "100px", lg: '160px', md: "120px" },
        background: '#FFFFFF',
        boxShadow: '0px 20px 36px 0px #8785FF38',
        display: 'flex',
        alignItems: 'center',
        gap: "20px"
      }}
    >
      <Box
        sx={{
          width: { xs: '80px', sm: "100px", md: "150px", lg: '196px' },
          height: '100%',
          background: 'linear-gradient(111.88deg, #FF1E6F -1.34%, #FF906D 103.77%)',
        }}
      >
        <Box sx={{ backgroundImage: `url(${Background})`, width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
          <img src={Group} alt="" className='group-image' />
        </Box>
      </Box>
      <Box sx={{
        width: { xs: 'calc(100% - 80px)', sm: 'calc(100% - 100px)', lg: "282px", md: 'calc(100% - 150px)' },
        height: "auto",
      }}>
        <Typography variant='h5' sx={{ fontSize: { xs: '16px', sm: "18px", md: '16px', lg: "24px" }, color: "#000000" }}>
          {text} <span style={{ color: "#E00252" }}>{highlight}</span>?
        </Typography>
      </Box>
    </Box>
  </Grid>
);

const Index = () => {
  const challenges = [
    "Your development team is overloaded with work way too often",
    "Dealing with vendors who consistently overpromise and underdeliver ?",
    "Narrow profit margins due to expensive in-house developers?",
    "You don't have the expertise needed for a specific tech stack?"
  ];

  return (
    <Box sx={{
      width: "100%",
      maxWidth: "1440px",
      height: "auto",
      minHeight: "991px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "50px",
      backgroundColor: "#FAFBFF",
    }}>
      <Typography sx={{
        width: "77%",
        maxWidth: "1121px",
        height: "auto",
        marginTop: "100px",
        fontFamily: "Inter, sans-serif",
        fontSize: { xs: "20px", md: "28px", lg: "36px" },
        fontWeight: "600",
        lineHeight: { xs: "22px", md: "37px", lg: "47px" },
        textAlign: "center",
        color: "black"
      }}>
        Have you encountered these <span style={{backgroundColor:"#E00252",color:"white"}}>challenges</span> while striving to boost growth and revenue?
      </Typography>

      <Grid container spacing={4} sx={{ width: "77%", maxWidth: '1140px' }}>
        {challenges.map((challenge, index) => (
          <ChallengeCard key={index} text={challenge.split(' ')[0] + " " + challenge.split(' ')[1]} highlight={challenge.split(' ').slice(2).join(' ')} />
        ))}
      </Grid>

      <Typography sx={{
        width: "60%",
        maxWidth: "736px",
        minHeight: "56px",
        color: "#000000",
        fontFamily: "Roboto, sans-serif",
        fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "20px" },
        fontWeight: "400",
        lineHeight: { xs: "24px", md: "30px" },
        textAlign: "center"
      }}>
        You are just a step away from leaving those troubles behind and turning your agency into a revenue-generating machine.
      </Typography>

      <Button variant='contained' sx={{
        background: `linear-gradient(100.3deg, #001F6C -12.86%, #E7256A -12.85%, #F25959 107.53%)`,
        width: { xs: "110px", md: "140px", lg: "171px" },
        height: { xs: "35px", sm: "35px", md: "45px", lg: "60px" },
        textTransform: "uppercase",
        fontSize: { xs: "12px", lg: "18px", sm: "14px", md: "16px" },
      }}>
        Get Help
      </Button>
    </Box>
  );
};

export default Index;
