import './drone.css';
import droneImage from '../../images/drone.png';

function Drone({ id, name, status, statusUpdate, capacity, onStatusChange }) {

    const handleStatusChange = (e) => {
        onStatusChange(id, e.target.value);
    };

    return (
        <div className='drone'>
            <img src={droneImage} className='drone_image' alt="drone" />
            <div className='information'>
                <p>Name: {name}</p>
                <p>Capacity: {capacity}</p>
                <p>Availability: {status}</p>
                <p>Status: {statusUpdate}</p>
                <select value={statusUpdate} onChange={handleStatusChange}>
                    <option value="Picking up">Picking up</option>
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

