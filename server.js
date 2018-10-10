const express = require('express');
const app = express();

const mongoose = require('mongoose');
const db = require('./keys').mongoURI;

mongoose
    .connect(db)
    .then(() => console.log("Connected to mongoDB."))
    .catch(err => console.log(err));

const port = 8989;
app.listen(port, () => console.log(`Server running on port:${port}`));