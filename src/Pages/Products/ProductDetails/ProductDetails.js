import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Alert, Button, Container, TextField, Typography } from '@mui/material';
import Navigation from '../../Shared/Navigation/Navigation';
import { useForm } from "react-hook-form";
import useAuth from '../../../hooks/useAuth';
const ProductDetails = () => {
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState({});
    const { user } = useAuth();
    const [successOrder, setSuccessOrder] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        let orderedProduct = data;
        orderedProduct.productName = singleProduct.name;
        orderedProduct.price = singleProduct.price;
        orderedProduct.img = singleProduct.img;
        orderedProduct.status = 'pending'
        fetch('http://localhost:5000/orderedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(orderedProduct)
        })
            .then(res => res.json())
            .then(result => {
                if (result.insertedId) {
                    setSuccessOrder(true)

                }
                reset()
            })
    };

    useEffect(() => {
        const url = `http://localhost:5000/products/${productId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1, my: 5 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}>
                            <img style={{ width: '80%' }} src={singleProduct.img} alt="" />
                            <Typography sx={{ fontWeight: 'bold', color: '#fc6432' }} gutterBottom variant="h4" component="div">
                                $ {singleProduct.price}
                            </Typography>
                            <Typography sx={{ fontWeight: 'bold' }} gutterBottom variant="h4">
                                {singleProduct.name}
                            </Typography>
                            <Typography gutterBottom variant="body2">
                                {singleProduct.info}
                            </Typography>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {successOrder && < Alert severity="success" > Your order is placed successfully</Alert >}
                            <Typography sx={{ fontWeight: 'bold', mt: 5 }} gutterBottom variant="h4">
                                Order Form
                            </Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField {...register("name")} defaultValue={user.displayName} variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <br />
                                <TextField {...register("email")} defaultValue={user.email} variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <br />
                                <TextField {...register("address")} placeholder="Address" variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <TextField {...register("city")} placeholder="City" variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <br />
                                <TextField {...register("phone")} placeholder="Phone Number" type="number" variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <br />


                                <Button sx={{ width: "75%", mt: 2, backgroundColor: '#fc6432' }} type="submit" variant='contained'>Place Order</Button>
                            </form>
                        </Grid>

                    </Grid>
                </Container>
            </Box >
        </>
    );
};

export default ProductDetails;