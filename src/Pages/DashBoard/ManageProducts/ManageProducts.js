import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';



const ManageProducts = () => {

    const [products, setProducts] = useState([]);
    const [control, setControl] = useState(false);
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this?');
        if (proceed) {
            fetch(`http://localhost:5000/deleteProduct/${id}`, {
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
            <h2>Manage All Products</h2>
            <TableContainer component={Paper}>
                <Table sx={{ width: '100%' }} aria-label="Appointments Table">
                    <TableHead>
                        <TableRow>
                            <TableCell >Drone</TableCell>
                            <TableCell align="left">Product</TableCell>
                            <TableCell align="left">Price</TableCell>
                            <TableCell align="left">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {products?.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <img style={{ width: '50%' }} src={row.img} alt="" />
                                </TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 25 }} align="left">{row.name}</TableCell>
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 35, color: 'blue' }} align="left">${row.price}</TableCell>
                                <TableCell align="left"><Button onClick={() => handleDelete(row._id)} variant="contained" sx={{ backgroundColor: 'crimson' }}>Delete</Button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageProducts;