const express = require('express');
const { submitFeedback, getUserFeedback } = require('../controllers/feedbackController');
const { authenticate } = require('../middleware/authMiddleware'); // JWT authentication middleware
const router = express.Router();

router.post('/submit', authenticate, submitFeedback);
router.get('/:userId', authenticate, getUserFeedback);

module.exports = router;
