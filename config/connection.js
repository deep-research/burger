var mysql = require("mysql");

// Database connection info
var connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: "burgers_db"
});


// Connect to the database
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
});
  
module.exports = connection;