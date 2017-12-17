var orm = require("../config/orm.js");

// The data is in the burgers table
var table = "burgers";

var burger = {
    // Select all of the burger data
    all: function(cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },
    // Add a new burger with a name from the parameter
    new: function(burgerName, cb) {
        // The data columns take `null`
        orm.insertOne(table,
                      "burger_name", "date_created", "date_updated",
                      burgerName, null, null, function(res) {
            cb(res);
        });
    },
    // Use the id number to declare that a burger has been eaten
    eat: function(idNumber, cb) {
        // `1` means that the burger has been eaten
        orm.updateOne(table, "devoured", 1, "id", idNumber, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;