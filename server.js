const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const index = require('./routes/api/index');
const profile = require('./routes/api/profile');
const db = require('./db/db');
const createProfile = require('./queries/createProfile');
const app = express();
//connect to db
    mongoose
    .connect(db,{useNewUrlParser: true})
    .then(() => {
        console.log('Connected to mongoDB.....!!!');
    }).catch(() =>console.log('unable to connect to mongoDB....!!!'));
//createProfile
createProfile();
//bodyparser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
//settings
app.set('views', './views');
app.set('view engine', 'pug');
//routing 
app.use('/', index);
app.use('/profile', profile);

const port = 8989;
app.listen(port, () => console.log(`Server running on port:${port}`));