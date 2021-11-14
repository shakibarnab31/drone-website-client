import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import { Button, Container, Hidden } from '@mui/material';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Divider from '@mui/material/Divider';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import logo from '../../../images/logo.png'
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Navigation = () => {
    const [open, setOpen] = React.useState(false)
    const { logOut, user } = useAuth();

    return (
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static" sx={{ backgroundColor: '#fc6432' }}>
                    <Toolbar>
                        <Hidden smDown>
                            <Box>
                                <img style={{}} src={logo} alt="" />
                            </Box>
                            <Container sx={{ display: 'flex', justifyContent: 'right' }} >
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/home"><Button color="inherit" >Home</Button></Link>
                                <Link style={{ textDecoration: 'none', color: 'white' }} to="/products"><Button color="inherit" >Products</Button></Link>
                                {user.email && <Link style={{ textDecoration: 'none', color: 'white' }} to="/dashboard"><Button color="inherit" >Dash Board</Button></Link>}
                                {user.email ? <Button onClick={logOut} variant="contained"> Logout</Button> : <Link style={{ textDecoration: 'none', color: 'white' }} to="/login"><Button color="inherit" >login</Button></Link>}
                                <Typography sx={{ ml: 2 }} variant="h6">
                                    {user.email ? user.displayName : ''}
                                </Typography>

                            </Container>
                        </Hidden>
                        <Hidden smUp>
                            <IconButton
                                size="large"
                                edge="start"
                                color="inherit"
                                aria-label="open drawer"
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon onClick={() => setOpen(true)} />
                            </IconButton>
                        </Hidden>

                        <SwipeableDrawer

                            anchor="left"
                            open={open}
                            onOpen={() => setOpen(true)}
                            onClose={() => setOpen(false)}>

                            <div sx={{ ml: 2 }}>
                                <IconButton >
                                    <ChevronRightIcon onClick={() => setOpen(false)} />
                                </IconButton>
                            </div>

                            <Divider />
                            <Box sx={{ mr: 5 }}>

                                <Link style={{ textDecoration: 'none', color: 'orange' }} to="/home"><Button color="inherit" >Home</Button></Link>
                                <br />
                                <Link style={{ textDecoration: 'none', color: 'orange' }} to="/products"><Button color="inherit" >Products</Button></Link>
                                <br />
                                {user.email && <Link style={{ textDecoration: 'none', color: 'orange' }} to="/dashboard"><Button color="inherit" >Dash Board</Button></Link>}
                                <br />
                                {user.email ? <Button onClick={logOut} variant="contained"> Logout</Button> : <Link style={{ textDecoration: 'none', color: 'orange' }} to="/login"><Button color="inherit" >login</Button></Link>}
                                <br />
                                <Typography sx={{ color: 'orange', ml: 2 }} variant="h6">
                                    {user.email ? user.displayName : ''}
                                </Typography>
                            </Box>

                        </SwipeableDrawer>

                    </Toolbar>
                </AppBar>

            </Box >
        </div >
    );
};

export default Navigation;