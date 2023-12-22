import React from 'react';

function Flight({ flight }) {

    const formatDestination = (destination) => {
        return `${destination.street}, ${destination.city}, ${destination.state}, ${destination.zip}`;
    };

    const inProgressText = flight.inProgress ? 'Yes' : 'No';

    return (
        <div className="flight">
            <h2>Flight ID: {flight.id}</h2>
            <p>Drone ID: {flight.droneId}</p>
            <p>Order ID: {flight.orderId}</p>
            <p>Destination: {formatDestination(flight.destination)}</p>
            <p>Status: {flight.status}</p>
            <p>In progress: {inProgressText}</p>
        </div>
    );
}


export default Flight;
