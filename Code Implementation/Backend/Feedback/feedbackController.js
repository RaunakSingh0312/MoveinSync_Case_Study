const express = require('express');
const Feedback = require('../models/feedbackModel'); // Assume a Mongoose model

const submitFeedback = async (req, res) => {
    try {
        const { rideId, travelerId, companionId, feedbackText, rating } = req.body;
        const newFeedback = new Feedback({ rideId, travelerId, companionId, feedbackText, rating });
        await newFeedback.save();
        res.status(201).json({ message: 'Feedback submitted successfully', feedback: newFeedback });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserFeedback = async (req, res) => {
    try {
        const { userId } = req.params;
        const feedbacks = await Feedback.find({ travelerId: userId });
        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = { submitFeedback, getUserFeedback };
