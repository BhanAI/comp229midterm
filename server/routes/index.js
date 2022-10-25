/*File Name: index.js   Student: Betty Han    Student ID:301202325   Date: 2022.10.25  Web App: Faculty List*/

// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

// define the game model
let faculty = require("../models/faculties");

/* GET home page. wildcard */
router.get("/", (req, res, next) => {
  res.render("content/index", {
    title: "Home",
    faculties: "",
  });
});

module.exports = router;
