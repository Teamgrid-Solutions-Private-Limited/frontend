import React from 'react';
import { Box, Typography, TextField, Button } from '@mui/material';

const ContactForm = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: 'center',
                background: `linear-gradient(109.45deg, #00208F 2.67%, #0075FF 94.91%)`, width: "100%", maxWidth: "1440px", minHeight: "916px", height: "auto",

            }}
        >

            <Box sx={{
                width: "77%", flexDirection: { xs: 'column', md: 'row' }, display: 'flex', marginTop: "100px",
                justifyContent: 'center', alignItems: { xs: "center", sm: "center", lg: "unset", md: "unset" }
            }}>
                <Box
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: { xs: 'center', md: 'flex-start' },
                        textAlign: { xs: 'center', md: 'left' },
                        color: 'white',
                        marginBottom: { xs: '20px', md: '0' },
                        padding: '20px'
                    }}
                >
                    <Typography sx={{ fontWeight: 'bold', marginBottom: '20px', fontSize: { lg: "36px", md: "26px", sm: "26px", xs: "22px" } }}>
                        We’d Love To <br /><Typography sx={{ color: '#00BFFF', fontWeight: 'bold', fontSize: { lg: "56px", md: "40px", sm: "36px", xs: "30px" } }}>Hear From You</Typography>
                    </Typography>
                    <Typography sx={{ marginBottom: '20px', fontSize: { lg: "36px", md: "26px", sm: "26px", xs: "22px" } }}>
                        Get Custom Solutions, Recommendations, Resumes, or Estimates. Confidentiality & Same Day Response Guaranteed!
                    </Typography>
                </Box>
                <Box
                    component="form"
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '20px',
                        width: '100%',
                        maxWidth: '500px',
                        padding: '20px',
                        borderRadius: '10px'
                    }}
                >
                    <TextField label="Name" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#152591' } }} sx={{ input: { color: '#6682E6' }, backgroundColor: "white" }} />
                    <TextField label="Phone" variant="outlined" fullWidth InputLabelProps={{ style: { color: '#6682E6' } }} sx={{ input: { color: '#6682E6' }, backgroundColor: "white" }} />
                    <TextField label="Email" variant="filled" fullWidth InputLabelProps={{ style: { color: '#6682E6' } }} sx={{ input: { color: '#6682E6' }, backgroundColor: "white" }} />
                    <TextField label="Message" variant="filled" multiline rows={8} fullWidth InputLabelProps={{ style: { color: '#6682E6' } }} sx={{ textarea: { color: '#6682E6' }, backgroundColor: "white" }} />
                    <Button variant="outlined" sx={{ borderColor: 'white', '&:hover': { backgroundColor: '#00A3CC' }, color: "white", padding: "10px" }}>
                        Submit
                    </Button>
                </Box>
            </Box>
        </Box>
    );
};

export default ContactForm;
