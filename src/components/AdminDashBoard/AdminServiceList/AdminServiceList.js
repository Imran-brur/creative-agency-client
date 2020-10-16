import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const AdminServiceList = () => {

    const [userOrders, setUserOrders] = useState([]);

    useEffect(() => {
        fetch('https://serene-depths-71399.herokuapp.com/users/userServices')
        .then(res => res.json())
        .then(data => setUserOrders(data))
    }, [])


    return (
        <div>
            <h3>Order List</h3>
            <div className="user-list">
                <table className="table bg-light">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email Address</th>
                            <th>Service</th>
                            <th>Project Details</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userOrders.map(order => 
                                <tr>
                                    <td>{order.name}</td>
                                    <td>{order.email}</td>
                                    <td>{order.user.title}</td>
                                    <td>{order.user.description}</td>
                                </tr>
                                )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AdminServiceList;