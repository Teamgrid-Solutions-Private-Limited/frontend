import { Box } from '@mui/material';
import React from 'react';
import "./styles.css";
import techhtml from "../../../public/Images/html5.png";


const TechLogo = ({ src }) => (
    <Box sx={{
        width: { xs: "70px", sm: "80px", md: "90px", lg: "96px" },
        height: { xs: "70px", sm: "80px", md: "90px", lg: "96px" },
        background: "#FFFFFF",
        borderRadius: "16px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "16px"
    }}>
        <img src={src} alt="Tech Logo" className="tech-logo" />
    </Box>
);

const Index = () => {
    const techLogos = Array(8).fill(techhtml); 

    return (
        <Box sx={{
            maxWidth: "1440px",
            width: "100%",
            height: "auto",
            minHeight: "133px",
            background: "#E8EEFF",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "15px"
        }}>
            <Box sx={{
                width: "77%",
                maxWidth: "1120px",
                minHeight: "96px",
                height: "auto",
                columnGap: "40px",
                display: "flex",
                flexWrap: { lg: "nowrap", sm: "wrap", xs: "wrap", md: "wrap" },
                justifyContent: "flex-start",
                alignItems: "center"
            }}>
                {techLogos.map((logo, index) => (
                    <TechLogo key={index} src={logo} />
                ))}
            </Box>
        </Box>
    );
}

export default Index;
