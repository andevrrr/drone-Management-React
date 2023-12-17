import Drone from '../../Components/Drone/drone';
import { useState, useEffect } from 'react';
import './drones.css';

function DronePage() {
    const [drones, setDrones] = useState(null);
    const [newDrone, setNewDrone] = useState({
        name: '',
        capacity: '',
        status: ''
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch('http://localhost:8080/dronora/drones');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const jsonData = await response.json();
            setDrones(jsonData);
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const handleChange = (event) => {
        setNewDrone({ ...newDrone, [event.target.name]: event.target.value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/dronora/drones', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newDrone)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            fetchData();
            setNewDrone({ name: '', capacity: '', status: '' }); // Reset form
        } catch (error) {
            console.error('POST error:', error);
        }
    };

    return (
        <>
            <div>
                <h3 style={{ paddingLeft: '5vw' }}>Drones</h3>
                <form onSubmit={handleSubmit}>
                    <input type="text" name="name" value={newDrone.name} onChange={handleChange} placeholder="Name" required />
                    <input type="number" name="capacity" value={newDrone.capacity} onChange={handleChange} placeholder="Capacity" required />
                    <input type="text" name="status" value={newDrone.status} onChange={handleChange} placeholder="Status" required />
                    <button type="submit">Create Drone</button>
                </form>
                <div>
                    {drones && drones.map((drone, i) => (
                        <Drone
                            key={i}
                            name={drone.name}
                            status={drone.status}
                            capacity={drone.capacity}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DronePage;
