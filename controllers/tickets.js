const Ticket = require('../models/ticket');
const Flight = require('../models/flight');

module.exports = {
    new: newTicket,
    create
};

function newTicket(req, res) {
    res.render('tickets/new', {
        title: 'Add ticket', 
        id: req.params.id 
    });        
};

function create(req, res) {
    req.body.flight = req.params.id;
    
    Ticket.create(req.body, function (err, ticket) {
        res.redirect(`/flights/${req.body.flight}`);
        console.log(ticket);
    });
};