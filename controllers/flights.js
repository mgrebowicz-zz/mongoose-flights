var Flight = require('../models/flight');

module.exports = {
    index,
    new: newFlight,
    show,
    create
}


function create(req, res) {

};

function show(req, res) {

};

function newFlight(req, res) {

};

function index(req, res) {
    res.render('flights/index');
};
