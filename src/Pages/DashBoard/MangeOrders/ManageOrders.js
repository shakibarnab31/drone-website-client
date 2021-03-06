import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";




const ManageOrders = () => {

    const [allOrders, setAllOrders] = useState([]);
    const [control, setControl] = useState(false);
    const [orderId, setOrderId] = useState("");

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        fetch(`https://arcane-savannah-11922.herokuapp.com/statusUpdate/${orderId}`, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    setControl(!control)
                }
                else {
                    setControl(false)
                }
            });
    };



    const handleOrderId = (id) => {
        setOrderId(id);
        console.log(id);
    };

    useEffect(() => {
        fetch('https://arcane-savannah-11922.herokuapp.com/allorders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [control])

    const handleDelete = (id) => {
        const proceed = window.confirm('Are you sure you want to delete this?');
        if (proceed) {
            fetch(`https://arcane-savannah-11922.herokuapp.com/deleteOrder/${id}`, {
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
                            <TableCell align="left">Status</TableCell>
                            <TableCell align="left">Cancel</TableCell>
                            <TableCell align="left">Status Action</TableCell>
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
                                <TableCell sx={{ fontWeight: 'bold', fontSize: 20, color: 'blue' }} align="left">{row.status}</TableCell>
                                <TableCell align="left"><Button onClick={() => handleDelete(row._id)} variant="contained" sx={{ backgroundColor: 'crimson' }}>Delete</Button></TableCell>
                                <TableCell align="left"><form onSubmit={handleSubmit(onSubmit)}>
                                    <select onClick={() => handleOrderId(row?._id)} {...register("status")}>
                                        <option value="shipped">shipped</option>
                                    </select>
                                    <input type="submit" />
                                </form></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageOrders;