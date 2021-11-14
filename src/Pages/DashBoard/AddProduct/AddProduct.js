
import { Button, Container, TextField, Alert } from '@mui/material';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const AddProduct = () => {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const product = data;
        fetch('https://arcane-savannah-11922.herokuapp.com/addProduct', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess(true)
                }
                reset()

            })
    };
    return (
        <div>
            {success && < Alert severity="success" > Your order is placed successfully</Alert >}
            <h2>Add a Product</h2>
            <Container>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField {...register("name")} variant="outlined" sx={{ width: "50%", my: 2 }} />
                    <br />

                    <TextareaAutosize
                        {...register("info")}
                        minRows={6}
                        placeholder="Description"
                        style={{ width: '50%', }}
                        variant="outlined"
                    />
                    <br />
                    <TextField {...register("img")} placeholder="Image Url" variant="outlined" sx={{ width: "50%", mt: 2 }} />
                    <br />
                    <TextField {...register("price")} placeholder="Price" type="number" variant="outlined" sx={{ width: "50%", mt: 2 }} />
                    <br />


                    <Button sx={{ width: "50%", mt: 2, backgroundColor: '#fc6432' }} type="submit" variant='contained'>Submit</Button>
                </form>
            </Container>
        </div>
    );
};

export default AddProduct;