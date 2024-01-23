const express = require('express');
const app = express();
let requestCount = 0;

// Global middleware to increment the request count on each request
app.use((req, res, next) => {
    requestCount++;
    next();
});

app.get('/user', (req, res) => {
    res.status(200).json({ name: 'john' });
});

app.get('/requestCount', (req, res) => {
    res.status(200).json({ requestCount });
});

app.post('/user', (req, res) => {
    res.status(200).json({ msg: 'created dummy user' });
});

app.get('/requestCount', (req, res) => {
    res.status(200).json({ requestCount });
});

module.exports = app;
