// modules required for routing
let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");
const faculties = require("../models/faculties");

// define the faculty model
let Faculty = require("../models/faculties");

/* GET faculties List page. READ */
router.get("/", (req, res, next) => {
  // find all faculties in the faculties collection
  Faculty.find((err, faculties) => {
    if (err) {
      return console.error(err);
    } else {
      res.render("faculties/index", {
        title: "Faculties",
        faculties: faculties,
      });
    }
  });
});

//  GET the faculty Details page in order to add a new faculty
router.get("/add", (req, res, next) => {
  res.render("faculties/add", {
    title: "Add Faculty",
  });
});

// POST process the faculty  Details page and create a new faculty  - CREATE
router.post("/add", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
  let newFaculty = Faculty({
    Facultyid: req.body.Facultyid,
    Facultyname: req.body.Facultyname,
    Department: req.body.Department,
    Subject: req.body.Subject,
  })

  Faculty.create(newFaculty, (err, Faculty) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      
      res.redirect("/faculties");
    }
  });
});

// GET the faculty  Details page in order to edit an existing faculty
router.get("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id;
   Faculty.findById(id, (err, facultytoupdate) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the update view
      res.render("faculties/details", {
        title: "Edit Faculty",
        faculties: facultytoupdate,
      });
    }
  });
});

// POST - process the information passed from the details form and update the document
router.post("/:id", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let id = req.params.id;
   let updatefaculty = Faculty({
    _id: id,
    Facultyid: req.body.Facultyid,
    Facultyname: req.body.Facultyname,
    Department: req.body.Department,
    Subject: req.body.Subject,
  });
  Faculty.updateOne({ _id: id }, updatefaculty, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the contact list
      res.redirect("/faculties");
    }
  });

});

// GET - process the delete
router.get("/delete/:Facultyname", (req, res, next) => {
  /*****************
   * ADD CODE HERE *
   *****************/
   let facultyname = req.params.Facultyname;
   Faculty.remove({ Facultyname: facultyname }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh contact list
      res.redirect("/faculties");
    }
  });
});

module.exports = router;
