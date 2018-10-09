// Express
const express = require('express');
const app = express();

// Mongoose
const mongoose = require('mongoose');
const db = require('./keys').mongoURI;

// Routes
const users = require('./routes/api/users');

// App
app.use('/api/users', users);


mongoose
    .connect(db)
    .then(() => console.log("Connected to mongoDB."))
    .catch(err => console.log(err));

// Port
const port = 8989;
app.listen(port, () => console.log(`Server running on port:${port}`));