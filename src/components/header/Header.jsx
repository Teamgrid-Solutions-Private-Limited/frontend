import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Logo from '../logo/Logo';
import call from "../../../public/Images/Style6.png";
import sms from "../../../public/Images/sms.png";
import './styles.css';

const pages = ['What We Do', 'Core Services', 'Features', 'FAQ', 'Testimonials', 'Contact Us'];

function Header() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [mobileOpen, setMobileOpen] = React.useState(false);


    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <List>
                {pages.map((page) => (
                    <ListItem key={page} disablePadding>
                        <ListItemButton sx={{ textAlign: 'center' }}>
                            <ListItemText primary={page} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar sx={{
                gap: "0px",
                boxShadow: "none",
                position: "absolute",
                top: "42px",
                width: "100%",
                padding: "0px",
                display:"flex",
                justifyContent:"center",
                alignItems:"center"
            }} color='transparent'>
                <Toolbar sx={{ justifyContent: 'space-between', padding: "0px",width:"77%" }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
                        <Logo />
                    </Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: '24px', alignItems: 'center' }}>
                        {pages.map((page) => (
                            <Typography
                                key={page}
                                onClick={handleCloseNavMenu}
                                component="a"
                                href="#"
                                sx={{
                                    textDecoration: 'none',
                                    color: 'white',
                                    fontSize: '16px',
                                    lineHeight: '18.75px'
                                }}
                            >
                                {page}
                            </Typography>
                        ))}
                        <img src={call} alt="Call" className="header-icon" />
                        <img src={sms} alt="SMS" className="header-icon" />
                    </Box>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ display: { md: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{ keepMounted: true }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240,backgroundColor: 'rgba(0, 0, 0, 0.25)',color:"white"},
                   
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
}

export default Header;
