var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create
}


function create(req, res) {
    const flight = new Flight(req.body);
    flight.save(function(err) {
        if (err) return res.render('flights/new');
        console.log(flight);
        res.redirect('flights/new');
    });
};

function show(req, res) {

};

function newFlight(req, res) {    
    res.render('flights/new');
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { title: 'All Flights', flights});
    });
};
