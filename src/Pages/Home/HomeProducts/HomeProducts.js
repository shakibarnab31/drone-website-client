import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://arcane-savannah-11922.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, [])
    return (

        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography data-aos="zoom-in-up" sx={{ fontWeight: 'bold', my: 8, color: 'crimson' }} gutterBottom variant="h3" component="div">
                    Our Popular Drone
                </Typography>
                <Grid container spacing={2}>
                    {products.slice(0, 6).map(product => (
                        <Grid key={product._id} item xs={12} md={4}>
                            <Card className="product-card" data-aos="zoom-in-up" sx={{ maxWidth: 360, textAlign: 'left', my: 2 }}>
                                <CardMedia
                                    component="img"
                                    height="250"
                                    image={product.img}
                                    alt=""
                                />
                                <CardContent>
                                    <Typography sx={{ fontWeight: 'bold', color: '#fc6432' }} gutterBottom variant="h5" component="div">
                                        $ {product.price}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'bold', color: 'gray' }} gutterBottom variant="h5" component="div">
                                        {product.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.info.slice(0, 108)}...
                                    </Typography>

                                    <Link style={{ textDecoration: 'none' }} to={`/productDetails/${product._id}`}>
                                        <Button sx={{ mt: 2, backgroundColor: '#fc6432' }} size="small" variant="contained">Purchase</Button>
                                    </Link>
                                </CardContent>

                            </Card>
                        </Grid>
                    ))}

                </Grid>
            </Container>
        </Box>

    );
};

export default HomeProducts;