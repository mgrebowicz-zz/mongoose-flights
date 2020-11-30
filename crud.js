require('./config/database')
const Flight = require('./models/flight');

let f;

Flight.findOne({}, function(err, flight){
    f = flight;
});