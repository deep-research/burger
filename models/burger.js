var orm = require("../config/orm.js");

var table = "burgers"

var burger = {
    all: function(cb) {
        orm.selectAll(table, function(res) {
            cb(res);
        });
    },
    new: function(burgerName, cb) {
        orm.insertOne(table,
                      "burger_name", "date_created", "date_updated",
                      burgerName, null, null, function(res) {
            cb(res);
        });
    },
    eat: function(idNumber, cb) {
        orm.updateOne(table, "devoured", 1, "id", idNumber, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;