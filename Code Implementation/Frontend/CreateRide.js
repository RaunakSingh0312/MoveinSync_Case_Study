import React, { useState } from 'react';
import axios from 'axios';

const CreateRide = () => {
    const [driverName, setDriverName] = useState('');
    const [driverPhone, setDriverPhone] = useState('');
    const [cabNumber, setCabNumber] = useState('');
    const [destination, setDestination] = useState('');

    const handleCreateRide = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/rides/create', 
                { driverName, driverPhone, cabNumber, destination }, 
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Ride created successfully');
        } catch (error) {
            console.error('Ride creation failed', error);
            alert('Ride creation failed');
        }
    };

    return (
        <form onSubmit={handleCreateRide}>
            <div>
                <label>Driver Name</label>
                <input type="text" value={driverName} onChange={(e) => setDriverName(e.target.value)} />
            </div>
            <div>
                <label>Driver Phone</label>
                <input type="text" value={driverPhone} onChange={(e) => setDriverPhone(e.target.value)} />
            </div>
            <div>
                <label>Cab Number</label>
                <input type="text" value={cabNumber} onChange={(e) => setCabNumber(e.target.value)} />
            </div>
            <div>
                <label>Destination</label>
                <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} />
            </div>
            <button type="submit">Create Ride</button>
        </form>
    );
};

export default CreateRide;
