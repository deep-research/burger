var connection = require("./connection.js");

var orm = {
    selectAll: function(tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function(err, result) {
            if (err) {
                throw err;
            }
                cb(result);
        });
    },
    insertOne: function(tableName, colOneName, colTwoName, colThreeName,
                        colOneData, colTwoData, colThreeData, cb) {
        var queryString = "INSERT INTO ?? (??, ??, ??) VALUES (?, ?, ?)";
        connection.query(queryString, [tableName, colOneName, colTwoName, colThreeName,
                                       colOneData, colTwoData, colThreeData], function(err, result) {
            if (err) {
                throw err;
            }
                cb(result);
        });
    },
    updateOne: function(tableName, columnName, newValue, idColumn, idNumber, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableName, columnName, newValue, idColumn, idNumber], function(err, result) {
            if (err) {
                throw err;
            }
                cb(result);
        });
    },
};

module.exports = orm;