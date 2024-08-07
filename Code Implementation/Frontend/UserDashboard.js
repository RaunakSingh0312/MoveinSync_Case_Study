import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserDashboard = () => {
    const [feedbacks, setFeedbacks] = useState([]);

    useEffect(() => {
        const fetchFeedbacks = async () => {
            try {
                const token = localStorage.getItem('token');
                const userId = localStorage.getItem('userId');
                const response = await axios.get(`/api/feedback/${userId}`, {
                    headers: { Authorization: `Bearer ${token}` }
                });
                setFeedbacks(response.data);
            } catch (error) {
                console.error('Failed to fetch feedbacks', error);
            }
        };
        fetchFeedbacks();
    }, []);

    return (
        <div>
            <h2>User Feedback</h2>
            {feedbacks.length > 0 ? (
                <ul>
                    {feedbacks.map(feedback => (
                        <li key={feedback._id}>
                            <p><strong>Ride ID:</strong> {feedback.rideId}</p>
                            <p><strong>Feedback:</strong> {feedback.feedbackText}</p>
                            <p><strong>Rating:</strong> {feedback.rating}</p>
                            <p><strong>Submitted At:</strong> {new Date(feedback.createdAt).toLocaleString()}</p>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No feedbacks available</p>
            )}
        </div>
    );
};

export default UserDashboard;
