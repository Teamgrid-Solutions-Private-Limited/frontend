import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import windows from "../../../public/Images/window.png";

const ServiceCard = ({ title, description }) => (
  <Grid item sx={{
    width: { lg: "352px", md: "330px", sm: "300px", xs: "290px" },
    height: { lg: "389px", md: "370px", sm: "350px", xs: "330px" },
    background: `linear-gradient(180deg, #DEE8FF 0%, #FAFBFF 84.93%)`,
    boxShadow: "0px 20px 36px 0px #8785FF38",
    display: "flex",
    flexDirection: "column"
  }}>
    <Box sx={{
      width: "100%",
      height: "144px",
      background: `linear-gradient(174.43deg, #007FF4 -21.36%, #07CFEB 128.37%)`,
      display: "flex",
      alignItems: "center",
      gap: "10px"
    }}>
      <img src={windows} alt="" style={{ width: "56px", height: "56px", marginLeft: "10px" }} />
      <Typography sx={{
        fontSize: { xs: '16px', md: '20px' },
        color: "white"
      }}>
        {title}
      </Typography>
    </Box>
    <Box sx={{ display: 'flex', flexGrow: 1, width: "100%", justifyContent: "center", alignItems: "center", padding: "10px" }}>
      <Typography sx={{
        width: "289px",
        height: "auto",
        fontSize: { xs: '14px', md: '18px' },
        color: "#2A4874"
      }}>
        {description}
      </Typography>
    </Box>
  </Grid>
);

const Index = () => {
  const services = [
    {
      title: "Design to HTML/CSS Conversion",
      description: "Give us a design in any modern graphic file format (PSD, Sketch, Figma, XD, AI, etc.) and get back a pixel-perfect web page made in compliance with your precise requirements."
    },
    {
      title: "WordPress & WooCommerce Development",
      description: "Give us a design in any modern graphic file format (PSD, Sketch, Figma, XD, AI, etc.) and get back a pixel-perfect web page made in compliance with your precise requirements."
    },
    {
      title: "Shopify Development",
      description: "Give us a design in any modern graphic file format (PSD, Sketch, Figma, XD, AI, etc.) and get back a pixel-perfect web page made in compliance with your precise requirements."
    }
  ];

  return (
    <Box sx={{
      maxWidth: "1440px",
      minHeight: "928px",
      height: "auto",
      background: "#FAFBFF",
      display: "flex",
      gap: "50px",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Typography sx={{
        width: "77%",
        maxWidth: "1120px",
        height: "auto",
        fontWeight: "bold",
        textAlign: "center",
        marginTop: "100px",
        fontSize: { xs: '24px', md: '36px' },
        color: "black",
        lineHeight: { xs: '30px', md: '47px' }
      }}>
        Accelerate Growth, Cut Costs, and Deliver Excellence with
       <span style={{color:"#0066FF"}}>"On Demand"</span> Software Development Services.
      </Typography>

      <Grid container
        sx={{
          height: "auto",
          width: "83%",
          maxWidth: "1120px",
          display: "flex",
          flexDirection: "row",
          gap: "22px",
          justifyContent: "center"
        }}>
        {services.map((service, index) => (
          <ServiceCard key={index} title={service.title} description={service.description} />
        ))}
      </Grid>

      <Typography sx={{
        fontSize: { xs: '16px', md: '20px' },
        color: "black",
        width: "60%",
        maxWidth: "736px",
        textAlign: "center",
      }}>
        Not finding what you are looking for? Reach out to us so that we can provide the perfect solution.
      </Typography>

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
