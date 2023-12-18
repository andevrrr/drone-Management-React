import './drone.css';
import drone from '../../images/drone.png';

function Drone({ id, name, status, capacity, onStatusChange }) {

    const handleStatusChange = (e) => {
        onStatusChange(id, e.target.value);
    };

    return (
        <div className='drone'>
            <img src={drone} className='drone_image' alt="droneImage" />
            <div className='information'>
                <p>Name: {name}</p>
                <p>Capacity: {capacity}</p>
                <p>Status: {status}</p>
                <select value={status} onChange={handleStatusChange}>
                    <option value="Available">Available</option>
                    <option value="Unavailable">Unavailable</option>
                    <option value="In Flight">In Flight</option>
                    <option value="Maintenance">Maintenance</option>
                </select>
            </div>
        </div>
    );
}

export default Drone;