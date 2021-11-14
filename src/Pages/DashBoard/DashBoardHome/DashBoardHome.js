import { Typography } from '@mui/material';
import React from 'react';
import welcome from '../../../images/rsz_welcome.jpg'
const DashBoardHome = () => {
    return (
        <div>
            <Typography sx={{ fontWeight: 'bold' }} variant='h4'>
                Welcome to Dash Board
            </Typography>
            <img style={{ width: "60%", height: '450px' }} src={welcome} alt="" />
        </div>
    );
};

export default DashBoardHome;