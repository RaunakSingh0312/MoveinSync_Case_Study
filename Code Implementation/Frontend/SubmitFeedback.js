import React, { useState } from 'react';
import axios from 'axios';

const SubmitFeedback = ({ rideId, companionId }) => {
    const [feedbackText, setFeedbackText] = useState('');
    const [rating, setRating] = useState(5);

    const handleFeedbackSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('/api/feedback/submit', 
                { rideId, companionId, feedbackText, rating }, 
                { headers: { Authorization: `Bearer ${token}` } }
            );
            alert('Feedback submitted successfully');
        } catch (error) {
            console.error('Feedback submission failed', error);
            alert('Feedback submission failed');
        }
    };

    return (
        <form onSubmit={handleFeedbackSubmit}>
            <div>
                <label>Feedback</label>
                <textarea value={feedbackText} onChange={(e) => setFeedbackText(e.target.value)} />
            </div>
            <div>
                <label>Rating</label>
                <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                    <option value={5}>5 - Excellent</option>
                    <option value={4}>4 - Good</option>
                    <option value={3}>3 - Average</option>
                    <option value={2}>2 - Poor</option>
                    <option value={1}>1 - Very Poor</option>
                </select>
            </div>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default SubmitFeedback;
