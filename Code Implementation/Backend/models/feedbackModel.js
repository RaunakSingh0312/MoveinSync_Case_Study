const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
    rideId: { type: mongoose.Schema.Types.ObjectId, ref: 'Ride', required: true },
    travelerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companionId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    feedbackText: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Feedback', feedbackSchema);
