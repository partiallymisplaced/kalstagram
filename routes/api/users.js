const express = require('express');
const router = express.Router();

router.get('/test', 
    (req, res) => res.json({
        message: "Test route for users route works"
    })
)

module.exports = router;