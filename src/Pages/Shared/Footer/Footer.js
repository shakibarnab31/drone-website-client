import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import logo from '../../../images/logo.png'
import { Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import MailIcon from '@mui/icons-material/Mail';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: 'skyBlue', py: 10, px: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                    <img src={logo} alt="" />
                    <Typography sx={{ fontWeight: 'bold', color: 'saddlebrown', my: 2 }} variant="h4">
                        Drona Drone Shop
                    </Typography>
                    <Typography sx={{ fontWeight: 'bold', color: 'gray' }} variant="body">
                        Drona is the one of the best drone shops in the word.Our unique designed products and quality always satisfies the consumer.visit our website and explore more.
                    </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ fontWeight: 'bold', color: 'white' }} variant="h5">
                        Information
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <Link style={{ textDecoration: 'none', color: 'gray', marginTop: 10, fontWeight: 'bold' }} to="/products">Products</Link>

                        <Link style={{ textDecoration: 'none', color: 'gray', marginTop: 10, fontWeight: 'bold' }} to="login">Login</Link>

                        <Link style={{ textDecoration: 'none', color: 'gray', marginTop: 10, fontWeight: 'bold' }} to="/about">About</Link>
                    </Box>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Typography sx={{ fontWeight: 'bold', color: 'white' }} variant="h5">
                        Contact
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <LocationOnIcon sx={{ mr: 2, color: 'gray' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'gray' }}
                            variant="body">
                            12/40, Charles Street,
                            <br />
                            London,England
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center', my: 2 }}>
                        <MailIcon sx={{ mr: 2, color: 'gray' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'gray' }}
                            variant="body">
                            Drona@yahoo.com
                        </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                        <PhoneInTalkIcon sx={{ mr: 2, color: 'gray' }} />
                        <Typography sx={{ fontWeight: 'bold', color: 'gray' }}
                            variant="body">
                            01341414131
                        </Typography>
                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
};

export default Footer;