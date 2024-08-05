import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import Clients from "../../../public/Images/Clients.png";
import Groupim from "../../../public/Images/Group 183.png";

const CardClient = ({ name, title, testimonial }) => (
  <Grid item xs={10} md={5}
    sx={{
      width: "544px",
      height: "272px",
      backgroundColor: "#F2F4FF",
      boxShadow: "0px 4px 60px 0px #194FD954",
      display: "flex",
      flexDirection: "column"
    }}>
    <Box sx={{
      width: "100%",
      height: "128px",
      background: `linear-gradient(109.45deg, #0024A5 2.67%, #0067DF 94.91%)`,
      position: "relative",
      display: "flex",
      gap: "20px",
      alignItems: "center"
    }}>
      <img src={Clients} alt="" style={{ width: "128px", height: "100%" }} />
      <Box>
        <Typography sx={{ fontSize: { lg: "24px", md: "20px", xs: "16px" }, color: "#D2EFFF" }}>
          {name}
        </Typography>
        <Typography sx={{ fontSize: { lg: "16px", md: "14px", xs: "12px" }, color: "#32C1FF" }}>
          {title}
        </Typography>
      </Box>
      <img src={Groupim} alt="" style={{
        width: "47.94px",
        height: "51.03px",
        position: "absolute",
        top: "0px",
        right: "30px"
      }} />
    </Box>
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
    }}>
      <Typography sx={{
        color: "#002660",
        width: "80%",
        fontSize: { lg: "18px", md: "14px", xs: "16px" },
        display: "flex"
      }}>
        {testimonial}
      </Typography>
    </Box>
  </Grid>
);

const Index = () => {
  const clientTestimonials = [
    {
      name: "Nick Power",
      title: "Director of Marketing at Eezy",
      testimonial: "We were ecstatic with how our website turned out and really pleased with how easy it was to work with the folks at GetDevDone."
    },
    {
      name: "Morgan C.",
      title: "Director of Operations, Web Design & Development Agency",
      testimonial: "We were ecstatic with how our website turned out and really pleased with how easy it was to work with the folks at GetDevDone."
    },
    {
      name: "Clay J.",
      title: "Director of Marketing at Eezy",
      testimonial: "We were ecstatic with how our website turned out and really pleased with how easy it was to work with the folks at GetDevDone."
    },
    {
      name: "Iain T.",
      title: "Design Director, Collaborative Design Co.",
      testimonial: "We were ecstatic with how our website turned out and really pleased with how easy it was to work with the folks at GetDevDone."
    }
  ];

  return (
    <Box sx={{
      width: "100%",
      maxWidth: "1440px",
      minHeight: "1176px",
      height: "auto",
      background: `linear-gradient(112.65deg, #C0D2FF -0.98%, #F0FFFF 96.63%)`,
      display: "flex",
      flexDirection: "column",
      gap: "50px",
      alignItems: "center"
    }}>
      <Typography sx={{
        width: "60%",
        textAlign: "center",
        marginTop: "100px",
        fontSize: { lg: "36px", md: "30px", sm: "26px", xs: "24px" },
        lineHeight: { lg: "46px", md: "40px", sm: "30px", xs: "24px" },
        color: "black",
        fontWeight: "bold"
      }}>
        What Our <span style={{ color: "#0066FF" }}>Clients Say</span>
      </Typography>
      <Typography sx={{
        height: "auto",
        textAlign: "center",
        width: "60%",
        color: "#333861",
        fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "14px" },
        lineHeight: { lg: "30px", md: "26px", sm: "22px", xs: "20px" }
      }}>
        Over the years, thousands of digital & marketing agencies across the globe have grown and become more profitable with our web development services. Here is what some of them liked the most about collaborating with us.
      </Typography>

      <Grid container sx={{
        width: "85%",
        maxWidth: "1120px",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
      }}>
        {clientTestimonials.map((client, index) => (
          <CardClient
            key={index}
            name={client.name}
            title={client.title}
            testimonial={client.testimonial}
          />
        ))}
      </Grid>

      <Button sx={{
        marginBottom: "100px",
        background: `linear-gradient(100.3deg, #052595 -12.85%, #215FFF 107.53%)`,
        color: "white",
        fontSize: { xs: '14px', md: '18px' },
        width: { xs: '150px', md: '203px' },
        height: { xs: '40px', md: '60px' }
      }}>
        Get Started
      </Button>
    </Box>
  );
};

export default Index;
