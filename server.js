// server.js

var express = require("express");
// var methodOverride = require("method-override");
var bodyParser = require("body-parser");

// Server access via import routes 
var burgerController = require("./controllers/burgers_controller.js");
// Import burger.js model to access database functions
var burger = require("./models/burger.js");

var PORT = process.env.PORT || 5000;

var app = express();

// Serve static content from the "public" directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

// Introduce / require Handlebars.
var exphbs = require("express-handlebars");

// app.use(methodOverride('_method'));

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

app.use("/api/burgers", burgerController);

app.listen(PORT, () => {
    console.log('Listening')
});