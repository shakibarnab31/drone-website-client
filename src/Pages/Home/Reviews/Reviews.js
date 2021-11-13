import React, { useEffect, useState } from 'react';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => console.log(data))

    }, [])
    return (
        <div>
            <h2>reviews</h2>
        </div>
    );
};

export default Reviews;