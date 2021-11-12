import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';

const ManageOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/allorders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteOrder/${id}`, {
                method: "DELETE",
                headers: {
                    'content-type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount) {
                        setControl(!control)
                    }
                    else {
                        setControl(false)
                    }
                })
        }

    }
    return (
        <div>
            <h2>manage orders</h2>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="Appointments Table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Drone</TableCell>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Email</TableCell>
                            <TableCell align="left">Address</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Cancel</TableCell>
                            <TableCell align="left">Approve</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {allOrders?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img style={{ width: '100%' }} src={row.img} alt="" />
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 20 }} align="left">{row.productName}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 15 }} align="left">{row.name}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 15 }} align="left">{row.email}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 15 }} align="left">{row.address}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 15 }} align="left">{row.phone}</TableCell>
                                <TableCell align="left"><Button onClick={() => handleDelete(row._id)} variant="contained" sx={{ backgroundColor: 'crimson' }}>Delete</Button></TableCell>
                                <TableCell align="left"><Button variant="contained">Approve</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;