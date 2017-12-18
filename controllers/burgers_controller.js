var express = require("express")
var burger = require("../models/burger")
var router = express.Router();

// Get request for the index page
router.get('/index', function (req, res) {
    // Select all of the burgers
    burger.all(function(data) {
        // Make the data into an object
        var hbsObject = { burgers: data };

        // Send the data to the handlebars index page
        res.render('index', hbsObject);
    });
});

// Post request for the API
router.post("/api/burgers", function(req, res) {
    // Take the burger name from the web page and send it to the database
    burger.new(req.body.burgerName.trim(), function(result) {
    // refresh the page
        res.redirect("/index")
    });
});

// Put request for the API
router.put("/api/burgers/:id", function(req, res) {
    // Update a specific burger to being eaten based upon the URL query
    burger.eat(req.params.id, function(result) {
        // Error if the update doesn't go through
        if (result.changedRows == 0) {
            return res.status(404).end();
        // Success if the update works
        } else {
            res.status(200).end();
        }
    });
});

// Put request for the API
router.delete("/api/burgers/:id", function(req, res) {
    // Delete a specific burger based upon the URL query
    burger.trash(req.params.id, function(result) {
        res.end()
    });
});

// Send any other url back to the index page
router.get("/*", function(req, res) {
    res.redirect("/index")
});

module.exports = router