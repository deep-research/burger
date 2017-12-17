var express = require("express")
var bodyParser = require("body-parser");

// Choose a port number
var PORT = process.env.PORT || 3000;

// Initialize Express
var app = express();

// Use the public folder
app.use(express.static("public"));

// Intialize body parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Initialize handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Initialize the routing file
var routes = require("./controllers/burgers_controller");

app.use("/", routes);

// Start the server
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});