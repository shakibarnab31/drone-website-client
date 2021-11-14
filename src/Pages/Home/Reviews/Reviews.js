import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Rating from '@mui/material/Rating';
import Avatar from '@mui/material/Avatar';


import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay, A11y } from 'swiper';
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/scrollbar/scrollbar.min.css'



SwiperCore.use([Navigation, Pagination, Autoplay, A11y])
const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://arcane-savannah-11922.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [])
    return (
        <div>
            <Typography sx={{ fontWeight: 'bold', color: 'crimson', mt: 10 }} gutterBottom variant="h3" component="div">
                Our Customers Reviews
            </Typography>
            <Swiper
                autoplay={{
                    "delay": 1500,
                    "disableOnInteraction": false
                }}
                navigation
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={'auto'}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >

                {reviews.map(review => (
                    <SwiperSlide key={review._id}>
                        <Container>
                            <Card className="product-card" sx={{ my: 10, px: 5, boxShadow: 0, backgroundColor: '#efefef', py: 10 }}>

                                <CardContent>
                                    <Avatar sx={{ width: 150, height: 100, mx: 'auto' }} alt="Remy Sharp" src="https://i.ibb.co/0Fxg8qL/5907-removebg-preview.png" />

                                    <Typography sx={{ my: 3 }} variant="body2" color="text.secondary">
                                        {review.comment}
                                    </Typography>
                                    <Rating name="read-only" value={review.rating} readOnly />
                                    <Typography sx={{ fontWeight: 'bold', color: '#fc6432' }} gutterBottom variant="h5" component="div">
                                        {review.name}
                                    </Typography>
                                    <Typography sx={{ fontWeight: 'bold' }} variant="body" color="skyBlue">
                                        {review.city},{review.country}
                                    </Typography>


                                </CardContent>
                            </Card>
                        </Container>

                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
};

export default Reviews;