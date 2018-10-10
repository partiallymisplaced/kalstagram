// Mongoose
const mongoose = require('mongoose');
// Mongoose Schema
const Schema = mongoose.Schema;

// App User schema
const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    }, 
    mobileNumber: {
        type: String,
    },
    fullName: {
        type: String,
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }, 
    dateCreated: {
        type: Date(),
        default: Date.now
    }
});

module.exports = User = mongoose.model('users', UserSchema);