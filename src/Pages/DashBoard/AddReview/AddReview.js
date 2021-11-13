import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { Button, Container, TextField, Alert } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import useAuth from '../../../hooks/useAuth';
const AddReview = () => {
    const [success, setSuccess] = useState(false)
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch('http://localhost:5000/addReview', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                }
                reset();
            })
    };
    return (
        <div>
            {success && < Alert severity="success" > You've reviewed successfully</Alert >}
            <h2>Please Review</h2>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField {...register("name")} defaultValue={user?.displayName} variant="outlined" sx={{ width: "50%", my: 2 }} />
                    <br />

                    <TextareaAutosize
                        {...register("comment")}
                        minRows={6}
                        placeholder="Your Comment"
                        style={{ width: '50%', }}
                        variant="outlined"
                    />
                    <br />
                    <TextField {...register("city")} placeholder="Your City" variant="outlined" sx={{ width: "50%", mt: 2 }} />
                    <br />
                    <TextField {...register("country")} placeholder="Your Country" variant="outlined" sx={{ width: "50%", mt: 2 }} />
                    <br />
                    <TextField {...register("rating", { min: 1, max: 5 })} placeholder="Give your rating with maximum 5" type="number" variant="outlined" sx={{ width: "50%", mt: 2 }} />
                    <br />


                    <Button sx={{ width: "50%", mt: 2, backgroundColor: '#fc6432' }} type="submit" variant='contained'>Place Order</Button>
                </form>
            </Container>
        </div>
    );
};

export default AddReview;