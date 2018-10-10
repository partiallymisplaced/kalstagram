const mongoose = require('mongoose');
const Schema = mongoose.Schema;
//schema
const ProfileSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName:
    {
        type: String,
        required: true,

    },
    profilePicture:
    {
         type: String
        
    },
    followers:
    {
        type: Number
    },
    following:
    {
        type: Number,
    },
    posts:
    {
        type: String
    }
});
//model
const Profile = mongoose.model('profile', ProfileSchema);
module.exports = {Profile};