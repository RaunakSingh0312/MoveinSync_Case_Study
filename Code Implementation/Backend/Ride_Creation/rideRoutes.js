const express = require('express');
const { createRide } = require('../controllers/rideController');
const router = express.Router();
const { authenticate } = require('../middleware/authMiddleware'); // JWT authentication middleware

router.post('/create', authenticate, createRide);

module.exports = router;
