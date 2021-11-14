import { Alert, Button, Container, TextField } from '@mui/material';
import Grid from '@mui/material/Grid';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
const MakeAdmin = () => {
    const [success, setSuccess] = useState(false)
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const user = data
        fetch('https://arcane-savannah-11922.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(result => {
                if (result.modifiedCount) {
                    setSuccess(true)
                }
                reset();
            })
    };
    return (

        <Container>
            <Grid container spacing={2}>
                <Grid xs={12} md={6}>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <TextField {...register("email")} placeholder="Email" variant="outlined" sx={{ width: "75%", mt: 2 }} />
                        <br />

                        <Button sx={{ width: "75%", mt: 2, backgroundColor: '#fc6432' }} type="submit" variant='contained'>Make Admin</Button>
                    </form>
                    <br />
                    {success && <Alert severity="success">You have made Admin Successfully</Alert>}
                </Grid>
            </Grid>
        </Container>

    );
};

export default MakeAdmin;