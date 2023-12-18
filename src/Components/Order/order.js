import React from 'react';
import './order.css';

function Order({ id, customerName, pizzaType, orderTime, status, street, city, state, zip, onStatusChange }) {
    const readableOrderTime = new Date(orderTime).toLocaleString();

    const handleStatusChange = (e) => {
        onStatusChange(id, e.target.value);
    };

    

    return (
        <div className='order'>
            <div className='information'>
                <p>Pizza Type: {pizzaType}</p>
                <p>Order time: {readableOrderTime}</p>
                <select value={status} onChange={handleStatusChange}>
                    <option value="pending">Pending</option>
                    <option value="accepted">Accepted</option>
                    <option value="preparing">Preparing</option>
                    <option value="ready">Ready</option>
                    <option value="in Delivery">In Delivery</option>
                    <option value="delivered">Delivered</option>
                </select>
                <p>Customer: {customerName}</p>
                <p>Address: {street}, {city}, {state}, {zip}</p>
            </div>
        </div>
    );
}

export default Order;
