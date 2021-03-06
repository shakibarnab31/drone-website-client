import React, { useEffect } from 'react';
import Box from '@mui/material/Box';

import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import './Banner.css'
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Banner = () => {
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <Box className="banner" sx={{ flexGrow: 1 }}>
            <Container>
                <Grid container spacing={2} sx={{ textAlign: 'left' }}>
                    <Grid item xs={12} md={6}>

                        <Typography data-aos="zoom-in" variant="h2" sx={{ fontWeight: 'bold', color: '#fc6432' }}>
                            <span style={{ border: '7px solid white', padding: "10px" }}>
                                DRONA
                            </span>
                        </Typography>

                        <Typography data-aos="zoom-in" variant="h3" sx={{ fontWeight: 'bold', mt: 5, color: "#06264b" }}>
                            SEE THE WORLD <br />
                            DIFFERENTLY NOW
                        </Typography>
                        <Typography data-aos="zoom-in" variant="h6" sx={{ fontSize: 14, my: 3, color: 'black' }}>
                            Drona is the one of the best drone shops in the word.Our unique designed products and quality always satisfies the consumer.visit our website and explore more.
                        </Typography>
                        <Link style={{ textDecoration: 'none' }} to="/products"><Button sx={{ backgroundColor: '#fc6432' }} variant="contained">Explore more</Button></Link>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;