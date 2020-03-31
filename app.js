// libraries
const express = require('express');

// app setup
const app = express();

// middleware

// routes
app.get('/', (req, res) => {
    res.send('Hello world')
});

// start server
app.listen(3000, () => {
    console.log('gif search listening on port localhost:3000')
});