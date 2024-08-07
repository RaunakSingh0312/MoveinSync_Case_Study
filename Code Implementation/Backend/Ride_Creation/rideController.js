const express = require('express');
const Ride = require('../models/rideModel'); // Assume a Mongoose model
const { sendSmsNotification } = require('../services/notificationService');

const createRide = async (req, res) => {
    try {
        const { travelerId, driverName, driverPhone, cabNumber, destination } = req.body;
        const newRide = new Ride({ travelerId, driverName, driverPhone, cabNumber, destination, status: 'pending' });
        await newRide.save();

        
        const traveler = await User.findById(travelerId); 
        const travelerPhone = traveler.phone;

        
        const message = `Your ride with ${driverName} (${cabNumber}) is created and is on its way to ${destination}.`;
        sendSmsNotification(travelerPhone, message);

        res.status(201).json({ message: 'Ride created and notification sent successfully', ride: newRide });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { createRide };
