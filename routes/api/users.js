// Express
const express = require('express');
const router = express.Router();

// Imports User model
const User = require('../../modules/User');


// Test route
router.get('/test', 
    (req, res) => res.json({
        message: "Test route for users route works"
    })
)

// @route   POST api/users/signup
// @desc    Enables user signup
// @access  Public

// Check if user exists by email. 
// TODO:    Check if user exists by email, username or password
router.post('/signup', (req, res) => {
    User.findone({email: req.body.email})
        .then(user => {
            if(user){
                return res.status(400).json({
                    email: "A user with this email already exists."
                })
            } else {
                const newUser = new User({
                    email: req.body.email,
                    mobileNumber: req.body.mobileNumber,
                    fullName: req.body.fullName,
                    username: req.body.username,
                    password: req.body.password
                })

            }
        });
})

module.exports = router;