import Drone from '../../Components/Drone/drone';
import { useState, useEffect } from 'react';
import './drones.css';

function DronePage() {
    const [drones, setDrones] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const responses = await Promise.all([
                fetch('http://localhost:8083/drone'),
                fetch('http://localhost:8084/drone')
            ]);
            const jsonData = await Promise.all(responses.map(response => response.json()));
            setDrones(jsonData.flat()); // Flatten the array as each response is an array
        } catch (error) {
            console.error('Fetch error:', error);
        }
    };

    const handleStatusChange = async (droneId, newStatus) => {
        // Determine the correct port based on the droneId
        const port = droneId === 1 ? 8083 : 8084;

        try {
            await fetch(`http://localhost:${port}/drone/status/${newStatus}`, {
                method: 'PATCH'
            });
            fetchData(); // Refetch drones to update the UI
        } catch (error) {
            console.error('Error updating drone status:', error);
        }
    };

    return (
        <>
            <div>
                <h3 style={{ paddingLeft: '5vw' }}>Drones</h3>
                <div>
                    {drones.map(drone => (
                        <Drone
                            key={drone.id}
                            id={drone.id}
                            name={drone.name}
                            status={drone.status}
                            statusUpdate={drone.statusUpdate}
                            capacity={drone.capacity}
                            onStatusChange={handleStatusChange}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}

export default DronePage;
