import { Box, Typography } from '@mui/material';
import React from 'react';

const FAQItem = ({ number, question, details, isOpen }) => (
    <Box sx={{ backgroundColor: isOpen ? "#FFFFFF" : "#EAEEFF", width: "100%", minHeight: isOpen ? "507px" : "96px", boxShadow: isOpen ? "0px 20px 36px 0px #8785FF38" : "none", display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ width: "100%", height: "96px", background: isOpen ? `linear-gradient(109.45deg, #0734A7 2.67%, #0049FF 94.91%)` : "none", flexBasis: "row", display: "flex", gap: "20px", alignItems: "center" }}>
            <Box sx={{ height: "100%", width: "64px" }}>
                <Box sx={{ height: "64px", width: "100%", backgroundColor: isOpen ? "#2D61E2" : "#C0D2FF", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography sx={{ color: isOpen ? "white" : "#094AAB", fontWeight: "bold" }}>
                        {number}
                    </Typography>
                </Box>
            </Box>
            <Typography sx={{ color: isOpen ? "white" : "#094AAB", fontWeight: isOpen ? "normal" : "bold" }}>
                {question}
            </Typography>
        </Box>
        {isOpen && (
            <Box sx={{ padding: "40px", display: "flex" }}>
                <Typography sx={{ color: "#3D5A84", fontWeight: "bold" }}>
                    {details}
                </Typography>
            </Box>
        )}
    </Box>
);

const FAQPage = () => {
    const faqDetails = (
        <>
            Our custom web development services cover a broad range of needs. Among the rest, we specialize in:
            <ul style={{ display: "flex", flexDirection: "column", gap: "5px", margin: "30px", fontWeight: "normal" }}>
                <li>Design-to-code conversion</li>
                <li>Front-end development with React, Vue, Angular, and other JavaScript frameworks</li>
                <li>CMS development based on WordPress, Drupal, HubSpot, and other platforms</li>
                <li>E-commerce development with Shopify, Magento, WooCommerce, and more</li>
                <li>Low-code/no-code development (Webflow, Squarespace, Wix, etc.)</li>
                <li>Email template development</li>
                <li>All our services are white-labeled by default.</li>
                <li>HTML5 banner coding</li>
                <li>Web application development (SPA, PWA, etc.)</li>
            </ul>
        </>
    );

    const faqs = [
        { number: "01", question: "What custom web development services do you provide?", details: faqDetails, isOpen: true },
        { number: "02", question: "What custom web development services do you provide?", isOpen: false },
        { number: "03", question: "What custom web development services do you provide?", isOpen: false },
        { number: "04", question: "What custom web development services do you provide?", isOpen: false },
        { number: "05", question: "What custom web development services do you provide?", isOpen: false },
    ];

    return (
        <Box sx={{ background: "#FAFBFF", width: "100%", maxWidth: "1440px", minHeight: "1272px", height: "auto", display: "flex", flexDirection: "column", alignItems: "center", gap: "50px" }}>
            <Typography sx={{ marginTop: "100px", width: "77%", color: "black", textAlign: "center", fontSize: { lg: "36px", md: '30px', sm: "26px", xs: "24px" } ,fontWeight:"bold"}}>
                Frequently Asked <span style={{ color: "#0066FF" }}>Questions</span>
            </Typography>
            <Typography sx={{ fontSize: { lg: "20px", md: "18px", sm: "16px", xs: "14px" }, color: "black", width: "60%", textAlign: "center" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec lectus dolor, fringilla sit amet massa eu, mattis scelerisque tellus.
            </Typography>

            <Box sx={{ width: "70%", display: "flex", flexDirection: "column", gap: "10px",marginBottom:"100px" }}>
                {faqs.map((faq, index) => (
                    <FAQItem key={index} {...faq} />
                ))}
            </Box>
        </Box>
    );
}

export default FAQPage;
