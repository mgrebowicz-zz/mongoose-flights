const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');


//RESTful routes
router.get('/', flightsCtrl.index);


module.exports = router;
