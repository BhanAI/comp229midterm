/*File Name: faculties.js   Student: Betty Han    Student ID:301202325   Date: 2022.10.25  Web App: Faculty List*/
let mongoose = require("mongoose");

// create a model class
let Faculty = mongoose.Schema(
  {
    Facultyid: Number,
    Facultyname: String,
    Department: String,
    Subject: String,
  },
  {
    collection: "faculties",
  }
);

module.exports = mongoose.model("Faculty", Faculty);
