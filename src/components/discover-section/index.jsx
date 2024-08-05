import { Box, Typography, Button } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Grid';
import iconDiscoverSection from "../../../public/Images/alarm.png";
import discoverOrnament from "../../../public/Images/Ornament 61.png";
import group139 from "../../../public/Images/Group 139.png";

const InfoCard = ({ title, description }) => (
  <Grid
    item
    xs={12}
    md={6}
    sx={{
      display: 'flex',
      width: "544px",
      height: "272px",
      justifyContent: "center",
    }}
  >
    <Box
      sx={{
        width: '100%',
        height: 'auto',
        background: `linear-gradient(109.45deg, #0734A7 2.67%, #0049FF 94.91%)`,
        display: 'flex',
      }}
    >
      <Box sx={{ width: "96px", height: "100%" }}>
        <Box sx={{
          width: "96px", height: "96px", background: " #2D61E2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <img src={iconDiscoverSection} alt="" style={{ width: "56px", height: "56px" }} />
        </Box>
      </Box>

      <Box sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "20px"
      }}>
        <Typography sx={{
          width: "100%",
          height: "auto",
          color: "#D2EFFF",
          fontSize: { xs: "18px", md: "16px", lg: "24px" },
        }}>
          {title}
        </Typography>
        <Typography sx={{
          width: "100%",
          height: "auto",
          color: "#BBCFFF",
          fontSize: { xs: "16px", lg: "18px", md: "14px" }
        }}>
          {description}
        </Typography>
      </Box>
    </Box>
  </Grid>
);

const Index = () => {
  const infoCardsData = [
    {
      title: "Get Multiple Projects Handled at the Same Time",
      description: "With a team of 500+ pros, we can develop any number of projects in parallel. Free up your in-house devs, take on more orders, and make more money.",
    },
    {
      title: "Accept Orders for Any Tech Stack",
      description: "Our custom web development company has top-level developers to cover any tech stack, from markup to eCommerce.",
    },
    {
      title: "Save Time and Money Hiring",
      description: "We can hop on your website development/web app development project at any stage and start working almost immediately.",
    },
    {
      title: "Attract More Clients With a Stellar Reputation Backing You",
      description: "Forget about shady developers who put your reputation at stake. With 18+ years in the business, we always produce the exact results your clients expect.",
    },
  ];

  return (
    <Box sx={{
      width: "100%",
      maxWidth: "1440px",
      minHeight: "1208px",
      height: "auto",
      border: "1px solid #002174",
      background: `linear-gradient(136.25deg, #071537 6.39%, #001D66 94.32%)`,
      display: "flex",
      gap: "50px",
      flexDirection: "column",
      alignItems: "center",
    }}>
      <Typography variant="h3" sx={{
        width: "77%",
        maxWidth: "1120px",
        height: "auto",
        color: "#D2EFFF",
        textAlign: "center",
        lineHeight: { xs: "35px", md: "47px" },
        marginTop: "100px",
        fontSize: { xs: "24px", md: "36px" },
      }}>
        Discover How Our Tailored Web <br /> Development Services Can Significantly <br /> <span style={{ color: "#007BED" }}> Enhance Your Earnings</span>
      </Typography>

      <Typography sx={{
        width: "60%",
        maxWidth: "736px",
        height: "auto",
        color: "#A9C2FF",
        textAlign: "center",
        lineHeight: "30px",
        fontSize: { xs: "16px", md: "20px" },
      }}>
        We are not looking for a quick buck. Our primary goal is to establish a long-term relationship with your agency, help you meet your web development needs, expand your offerings, serve more clients, and widen your profit margins.
      </Typography>

      <Grid container spacing={4} sx={{ width: '77%', maxWidth: "1120px" }}>
        {infoCardsData.map((card, index) => (
          <InfoCard key={index} title={card.title} description={card.description} />
        ))}
      </Grid>

      {/* <img src={group139} alt="" style={{ width: "128px", height: "58px", marginTop: "50px", marginLeft: "64px" }} /> */}
      <Button sx={{
        background: `linear-gradient(99.52deg, #00A7DC 6.4%, #376EFC 92.95%)`,
        width: { xs: "160px", md: "209px" },
        height: "60px",
        textTransform: "uppercase",
        color: "white",
        fontSize: { xs: "16px", md: "18px" },
        marginBottom: { xs: "100px" },
      }}>
        Get Started
      </Button>
    </Box>
  );
}

export default Index;
