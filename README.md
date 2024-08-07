🚖 Ride-Sharing Platform
A case study/analysis on how to build full-stack ride-sharing platform built with code snippets from MERN stack (MongoDB, Express.js, React.js, Node.js) that allows users to share rides, track trips, and provide feedback. The platform includes three distinct user roles: Traveler, Traveler Companion, and Admin, each with specific functionalities.

✨ Features

Traveler:
Share ride details (e.g., Trip ID, Driver Name, Driver Phone Number, cab number) through SMS.
Review the audit trail of the rides they have shared.
Give Feedback for each ride.

Traveler Companion:
Track the ride of the traveler.
Receive notifications when the trip is complete and when the cab hits the geofence of the traveler drop.
Share feedback on the experience with the Admin.

Admin:
View all the rides shared by users.
Access overall experience feedback of the users.

Security and Scalability:
Robust authentication measures to ensure user account security.
Scalable architecture to accommodate an expanding user base.

🛠️ Technologies Used

Frontend: React.js
Backend: Node.js, Express.js
Database: MongoDB, Mongoose
Authentication: JWT (JSON Web Token)
Notifications: Twilio API for SMS notifications
