const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const rideRoutes = require('./routes/rideRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/ridesharing', { useNewUrlParser: true, useUnifiedTopology: true });

app.use('/api/auth', authRoutes);
app.use('/api/rides', rideRoutes);
app.use('/api/feedback', feedbackRoutes);

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
