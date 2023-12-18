import React, { useState, useEffect } from 'react';
import Flight from '../../Components/Flight/flight';

function FlightPage() {
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8081/dronora/flights')
            .then(response => response.json())
            .then(data => {
                setFlights(data);
            })
            .catch(error => {
                console.error('There was an error fetching the flights!', error);
            });
    }, []);

    return (
        <div className="flight-page">
            <h1>Flights</h1>
            {flights.map(flight => <Flight key={flight.id} flight={flight} />)}
        </div>
    );
}

export default FlightPage;
