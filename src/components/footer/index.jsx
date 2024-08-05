import React from 'react';
import { Container, Grid, Typography, Link, Box } from '@mui/material';
import { Facebook, WhatsApp, Telegram } from '@mui/icons-material';
import Logo from '../logo/Logo';

const Footer = () => {
  return (
    <Box
      sx={{
        background: `linear-gradient(113.06deg, #040A29 10.83%, #0C154D 93.94%)`,
        color: 'white',
        width: '100%',
        maxWidth: '100%',
        height: 'auto',
        minHeight: '704px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        pb: 5, 
      }}
    >
      <Container sx={{ width: '77%', maxWidth: '1120px', height: 'auto', mt: 12 }}>
        <Grid container spacing={6} sx={{ borderBottom: '1px solid #1F2D71', pb: 4 }}>
          {/* Navigate Section */}
          <Grid item xs={12} md={3} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h6" sx={{ color: "#32C1FF" }}>
              Navigate
            </Typography>
            <Link href="#" color="inherit" display="block" style={{ color: "#BABFDF" }}>
              WHAT WE DO
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }}>
              CORE SERVICES
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }}>
              FEATURES
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }}>
              FAQ
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }} >
              TESTIMONIALS
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }} >
              CONTACT US
            </Link>
          </Grid>

          {/* Services Section */}
          <Grid item xs={12} md={3} sx={{ display: "flex", flexDirection: "column", gap: "20px", textDecoration: "none" }}>
            <Typography variant="h6" sx={{ color: "#32C1FF" }}>
              Services
            </Typography>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }}>
              WEB DEVELOPMENT
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }} >
              PSD TO WORDPRESS
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }} >
              PSD TO SHOPIFY
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }}>
              PSD TO BOOTSTRAP
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }}>
              FIGMA TO WORDPRESS
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }} >
              FIGMA TO SHOPIFY
            </Link>
            <Link href="#" color="inherit" display="block" style={{ textDecoration: "none", color: "#BABFDF" }}>
              MORE...
            </Link>
          </Grid>

          {/* Get in Touch Section */}
          <Grid item xs={12} md={3} sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            <Typography variant="h6" sx={{ color: "#32C1FF" }}>
              Get in touch
            </Typography>
            <Typography variant="body1" style={{ color: "#BABFDF" }}>
              mahtab@teamgrid.io
            </Typography>
            <Typography variant="body1" style={{ color: "#BABFDF" }}>
              98304 42666
            </Typography>
            <Typography variant="body1" style={{ color: "#BABFDF" }}>
              Unit No. 306, Stesalit Towers, E2-3, Block EP & GP, Salt Lake, Sector V, Kolkata 700091
            </Typography>
          </Grid>

          {/* Logo and Social Media Section */}
          <Grid item xs={12} md={3} sx={{ alignItems: { md: 'center', xs: 'flex-start' }, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Logo />
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <Link href="#" color="inherit">
                <Facebook />
              </Link>
              <Link href="#" color="inherit">
                <WhatsApp />
              </Link>
              <Link href="#" color="inherit">
                <Telegram />
              </Link>
            </Box>
          </Grid>
        </Grid>
        {/* Footer Bottom  */}
        <Box sx={{ width: "100%",display:"grid",gridTemplateColumns:"auto auto" }} mt={5}>
          <Box display="flex" gap="30px">
            <Link href="#" color="inherit" style={{color:"#36C6F4",textDecoration:"none"}}>
              Terms and Conditions
            </Link>
            <Link href="#" color="inherit" style={{color:"#36C6F4",textDecoration:"none"}}>
              Privacy Policy
            </Link>
          </Box>

          <Box textAlign="right" >
            <Typography variant="body2" style={{color:"#36C6F4"}}>
              2005–2023 All Rights Reserved Inc.
            </Typography>
          </Box>
        </Box>

      </Container>
    </Box>
  );
};

export default Footer;
