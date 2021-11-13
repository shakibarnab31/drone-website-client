import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import featured from '../../../images/bg-featured.png'
import featured1 from '../../../images/featured-1.png'
import featured2 from '../../../images/featured-2.png'
import featured5 from '../../../images/featured-5.png'
import featured6 from '../../../images/featured-6.png'
import { Container, Typography } from '@mui/material';
import './Featured.css'
const Featured = () => {
    return (
        <Box sx={{ flexGrow: 1, backgroundColor: '#f2f2f2', py: 5, mt: 8 }}>
            <Typography sx={{ fontWeight: 'bold', my: 8 }} variant="h3">Our Featured</Typography>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={8}>
                        <img style={{ width: '100%' }} src={featured} alt="" />
                    </Grid>
                    <Grid item xs={12} md={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <Box className="featured" sx={{ backgroundColor: 'white', width: '75%', borderRadius: 2 }}>
                            <Box>
                                <img style={{}} src={featured1} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ mb: 1, fontWeight: 'bold' }} variant="h5">
                                    HD Video 4K
                                </Typography>
                                <Typography variant="body">
                                    Get the drone with a spectacular 4k camera
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="featured" sx={{ backgroundColor: 'white', width: '75%', borderRadius: 2, my: 3 }}>
                            <Box>
                                <img style={{}} src={featured2} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ mb: 1, fontWeight: 'bold' }} variant="h5">
                                    Easy to Control
                                </Typography>
                                <Typography variant="body">
                                    Superior remote control system up to 1 km
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="featured" sx={{ backgroundColor: 'white', width: '75%', borderRadius: 2, mb: 3 }}>
                            <Box>
                                <img style={{}} src={featured5} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ mb: 1, fontWeight: 'bold' }} variant="h5">
                                    Energy Saving
                                </Typography>
                                <Typography variant="body">
                                    Reserve feature helps Drone use more than 10 hours
                                </Typography>
                            </Box>
                        </Box>
                        <Box className="featured" sx={{ backgroundColor: 'white', width: '75%', borderRadius: 2 }}>
                            <Box>
                                <img style={{}} src={featured6} alt="" />
                            </Box>
                            <Box sx={{ textAlign: 'left', ml: 3 }}>
                                <Typography sx={{ mb: 1, fontWeight: 'bold' }} variant="h5">
                                    GPS Navigation
                                </Typography>
                                <Typography variant="body">
                                    Avoid obstacles and go straight to the wave direction of control
                                </Typography>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box >
    );
};

export default Featured;