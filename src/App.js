import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import DronePage from './Pages/Drones/drones';
import OrderPage from './Pages/Orders/orders';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/drones">Drones</Link>
            </li>
            <li>
              <Link to="/orders">Orders</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/drones" element={<DronePage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;