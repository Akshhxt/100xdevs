const express = require('express');
const app = express();

let numberOfRequestsForUser = {};

// Global middleware to rate limit requests from a user to 5 requests per second
app.use((req, res, next) => {
    const userId = req.headers['user-id'];

    // Initialize the count for the user if not present
    numberOfRequestsForUser[userId] = numberOfRequestsForUser[userId] || 0;

    // Check if the user has exceeded the limit
    if (numberOfRequestsForUser[userId] >= 5) {
        return res.status(404).json({ error: 'Rate limit exceeded' });
    }

    // Increment the request count for the user
    numberOfRequestsForUser[userId]++;

    // Call the next middleware or route handler
    next();
});

app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

module.exports = app;
