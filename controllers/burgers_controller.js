var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// creates a burger
router.post("/", function (req, res) {
    burger.insertOne([
        req.body.name
    ], function (result) {
        // passes new quote ID
        res.json({ id: result.insertId });
    });
});

// devours a burger
router.put("/:id", function (req, res) {
    var condition = "id = " + req.params.id;
    console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function (result) {
        if (result.changedRows == 0) {
        // Error 404: If no rows are changed, then ID doesn't exist            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

// deletes a burger
router.delete("/:id", function (req, res) {
    var condition = "id = " + req.params.id;

    burger.deleteOne(condition, function (result) {
        if (result.affectedRows == 0) {
            // Error 404: If no rows are changed, then ID doesn't exist
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;