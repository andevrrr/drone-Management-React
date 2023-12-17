import './drone.css';
import drone from '../../images/drone.png';

function Drone({ name, status, capacity }) {

    return (
        <div className='drone'>
            <img src={drone} className='drone_image' alt="droneImage" />
            <div className='information'>
                <p>Name: {name}</p>
                <p>Capacity: {capacity}</p>
                <p>Status: {status}</p>
            </div>
        </div>
    );
}

export default Drone;