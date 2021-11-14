import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {

    Switch,
    Route,
    Link,

    useRouteMatch
} from "react-router-dom";
import { Button } from '@mui/material';
import MyOrders from '../MyOrders/MyOrders';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import ManageOrders from '../MangeOrders/ManageOrders';
import AddProduct from '../AddProduct/AddProduct';
import ManageProducts from '../ManageProducts/ManageProducts';
import AddReview from '../AddReview/AddReview';
import Payment from '../Payment/Payment';
import './DashBoard.css'
import DashBoardHome from '../DashBoardHome/DashBoardHome';




const drawerWidth = 200;

function DashBoard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { user, logOut, admin } = useAuth();




    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <Box sx={{ textAlign: 'left', ml: 2 }}>
                <Link className='nav-item' to="/products"><Button color="inherit">Products</Button></Link>
            </Box>
            {!admin && <Box sx={{ textAlign: 'left', ml: 2 }}>
                <Link className='nav-item' to={`${url}`}><Button color="inherit">DashBoard</Button></Link>
                <br />
                <Link className='nav-item' to={`${url}/myOrders`}><Button color="inherit">My Orders</Button></Link>
                <br />
                <Link className='nav-item' to={`${url}/payment`}><Button color="inherit">Payment</Button></Link>
                <br />
                <Link className='nav-item' to={`${url}/addReview`}><Button color="inherit">Add Review</Button></Link>
            </Box>}
            {admin && <Box sx={{ textAlign: 'left', ml: 2 }} >
                <Link className='nav-item' to={`${url}`}><Button color="inherit">DashBoard</Button></Link>
                <Link className='nav-item' to={`${url}/makeAdmin`}><Button color="inherit">Make Admin</Button></Link>
                <Link className='nav-item' to={`${url}/manageOrders`}><Button color="inherit">Manage Orders</Button></Link>
                <Link className='nav-item' to={`${url}/addProduct`}><Button color="inherit">Add Product</Button></Link>
                <Link className='nav-item' to={`${url}/manageProducts`}><Button color="inherit">Manage Products</Button></Link>
            </Box>}
            {user.email && <Box sx={{ textAlign: 'left', ml: 2 }}><Button onClick={logOut} variant="contained"> Logout</Button></Box>}
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar sx={{ backgroundColor: '#fc6432' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        {user?.displayName}' DashBoard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashBoardHome></DashBoardHome>
                    </Route>

                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/addReview`}>
                        <AddReview></AddReview>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Payment></Payment>
                    </Route>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageOrders`}>
                        <ManageOrders></ManageOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

DashBoard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default DashBoard;
