import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const { user } = useAuth()

    useEffect(() => {
        const url = `http://localhost:5000/orderedProducts?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [])
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {myOrders.map(myOrder => (
                    <Grid key={myOrder._id} item xs={12} md={3}>
                        <Card className="product-card" sx={{ maxWidth: 360, textAlign: 'left', my: 2 }}>
                            <CardMedia
                                component="img"
                                height="220"
                                image={myOrder.img}
                                alt=""
                            />
                            <CardContent>
                                <Typography sx={{ fontWeight: 'bold', color: '#fc6432' }} gutterBottom variant="h5" component="div">
                                    $ {myOrder.price}
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold', color: 'gray' }} gutterBottom variant="h5" component="div">
                                    {myOrder.productName}
                                </Typography>
                                <Typography sx={{ fontWeight: 'bold' }} variant="body2">
                                    Status: {myOrder.status}
                                </Typography>
                            </CardContent>

                        </Card>
                    </Grid>
                ))}

            </Grid>
        </Box>
    );
};

export default MyOrders;