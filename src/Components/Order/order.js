import './order.css';

function Order({ customerName, pizzaType, orderTime, status,  street, city, state, zip }) {

    return (
        <div className='order'>
            <div className='information'>
                <p>Pizza Type: {pizzaType}</p>
                <p>Order time: {orderTime}</p>
                <p>Status: {status}</p>
                <p>Customer: {customerName}</p>
                <p>Address: {street}, {city}, {state}, {zip}</p>
            </div>
        </div>
    );
}

export default Order;