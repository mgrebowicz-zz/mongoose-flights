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
    Flight.findById(req.params.id, function(err, flight){
        res.render('flights/show', { title: 'Flight details', flight})
    })
};

function newFlight(req, res) {    
    res.render('flights/new', { title: 'Add flight' });
};

function index(req, res) {
    Flight.find({}, function (err, flights) {
        res.render('flights/index', { title: 'All flights', flights});
    });
};
