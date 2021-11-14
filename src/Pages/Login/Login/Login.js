import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LoginImage from '../../../images/login.jpg'
import { Alert, Button, CircularProgress, Container, TextField } from '@mui/material';
import { useForm } from "react-hook-form";
import Typography from '@mui/material/Typography';
import { Link, useHistory, useLocation } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Navigation from '../../Shared/Navigation/Navigation.js'
const Login = () => {
    const { register, handleSubmit, reset } = useForm();
    const { loginUser, isLoading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const onSubmit = data => {
        if (data.password !== data.password2) {
            alert('your password did not match');
            return;
        }
        loginUser(data.email, data.password, location, history)
        reset();
    };
    return (
        <>
            <Navigation></Navigation>
            <Box sx={{ flexGrow: 1 }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} sx={{ mt: 8 }}>
                            <Typography variant="h4" sx={{ fontWeight: 'bold' }}> Please Login</Typography>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField {...register("email")} label="email" type="email" variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <br />
                                <TextField {...register("password")} label="password" variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <br />
                                <TextField {...register("password2")} label="confirm password" variant="outlined" sx={{ width: "75%", mt: 2 }} />
                                <br />

                                <Button type="submit" variant='contained' sx={{ width: "75%", my: 2 }} >Login</Button>
                                <Link
                                    style={{ textDecoration: "none" }}
                                    to="/register"><Button variant="text">New User? Please Register</Button></Link>
                            </form>
                            {isLoading && <CircularProgress />}
                            {authError && <Alert severity="error">{authError}</Alert>}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <img src={LoginImage} style={{ width: '100%' }} alt="" />
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default Login;