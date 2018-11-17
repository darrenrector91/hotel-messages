var express = require('express');
var router = express.Router();


// Guests
$.getJSON("./json/guests.json", function (guest) {
    console.log(guest);

});


// Companies
$.getJSON("./json/companies.json", function (company) {
    console.log(company);
});

module.exports = router;