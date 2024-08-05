import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid';
import React from 'react';
import iconFeatureSection from "../../../public/Images/language.png"

const FeatureCard = ({ title, description }) => (
    <Grid item md={12}
        sx={{
            width: "auto",
            height: "216px",
            background: "#FFFFFF",
            boxShadow: "0px 20px 36px 0px #8785FF38",
            display: 'flex',
            gap: "20px",
        }}>
        <Box sx={{ width: "96px", height: "100%" }}>
            <Box sx={{
                width: "96px", height: "96px",
                background: `linear-gradient(136.4deg, #36BBF4 -11.38%, #3677F4 106.14%)`,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}>
                <img src={iconFeatureSection} alt="Feature Icon" style={{ width: "56px", height: "56px" }} />
            </Box>
        </Box>
        <Box sx={{
            width: "auto",
            height: "132px",
            display: "flex",
            flexDirection: "column",
            gap: {md:"20px",xs:"10px"},
            padding: "15px"
        }}>
            <Typography sx={{
                width: "auto",
                height: "auto",
                color: "#000000",
                fontSize: {lg:"24px",md:"20px",sm:"16px",xs:"14px"},
                lineHeight: {md:"30px",xs:"20px"}
            }}>
                {title}
            </Typography>
            <Typography sx={{
                width: "auto",
                height: "auto",
                color: "#3D5A84",
                fontSize: {lg:"18px",md:"16px",sm:"14px",xs:"12px"},
                lineHeight:  {md:"30px",xs:"20px"}
            }}>
                {description}
            </Typography>
        </Box>
    </Grid>
);

const Index = () => {
    return (
        <Box sx={{
            maxWidth: "1440px",
            height: "auto",
            minHeight: "944px",
            display: "flex",
            flexDirection: "column",
            gap: "50px",
            alignItems: "center",
            background: `linear-gradient(122.45deg, #D7E2FF 12.33%, #D2ECFF 88.06%)`
        }}>
            <Typography sx={{
                fontWeight: 600,
                width: "77%",
                maxWidth: "1120px",
                color: "black",
                textAlign: "center",
                marginTop: "100px",
                fontSize: {lg:"36px",md:"30px",sm:"26px",xs:"24px"},
                lineHeight: {md:"47px",xs:"30px"}
            }}>
                Cutting-Edge Features for a Seamless Experience! <br /> <span style={{ color: "#0066FF" }}>Explore What Sets Us Apart</span>
            </Typography>

            <Grid container direction="row" sx={{
                maxWidth: "1120px",
                width: "77%",
                height: "auto",
                minHeight: "563px",
                background: `linear-gradient(109.45deg, #0024A5 2.67%, #0075FF 94.91%)`,
                padding: "20px",
                marginBottom:"100px"
            }}>
                <Grid item lg={6} xs={12} sm={12} md={6} sx={{ padding: "10px" }}>
                    <Typography sx={{
                        fontSize: {lg:"40px",md:"35px",sm:"30px",xs:"25px"},
                        color: "white",
                        lineHeight: {md:"48.41px",xs:"30px"},
                        padding: "10px"
                    }}>
                        Work With a Web Development Company You can Trust
                    </Typography>
                    <Typography sx={{
                        fontSize:{lg:"20px",md:"18px",sm:"16px",xs:"14px"},
                        color: "#FFFFFF",
                        padding: "10px",
                        lineHeight: {md:"30px",xs:"20px"}
                    }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus dolor, fringilla sit amet massa eu, mattis scelerisque tellus. Cras a lorem ut lorem porttitor varius justo odio, finibus quis aliquam condimentum.
                    </Typography>
                </Grid>

                <Grid item lg={6} xs={12} sm={12} md={6}>
                    <Grid container sx={{ gap: "32px" }}>
                        <FeatureCard
                            title="18+ Years in the Business"
                            description="We have completed thousands of projects for agencies since 2005. Many of our clients come to us on recommendation from their colleagues."
                        />
                        <FeatureCard
                            title="Global Recognition"
                            description="We have completed thousands of projects for agencies since 2005. Many of our clients come to us on recommendation from their colleagues."
                        />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Index;
