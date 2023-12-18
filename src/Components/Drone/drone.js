import './drone.css';
import drone from '../../images/drone.png';

function Drone({ id, name, status, statusUpdate, capacity, onStatusChange }) {

    const handleStatusChange = (e) => {
        onStatusChange(id, e.target.value);
    };

    return (
        <div className='drone'>
            <img src={drone} className='drone_image' alt="droneImage" />
            <div className='information'>
                <p>Name: {name}</p>
                <p>Capacity: {capacity}</p>
                <p>Availability: {status}</p>
                <p>Status: {statusUpdate}</p>
                <select value={statusUpdate} onChange={handleStatusChange}>
                    <option value="Available">Picking up</option>
                    <option value="Picked up">Picked up</option>
                    <option value="In Delivery">In Delivery</option>
                    <option value="Arrived">Arrived</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Coming back">Coming back</option>
                </select>
            </div>
        </div>
    );
}

export default Drone;