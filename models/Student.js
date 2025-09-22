const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  title: String,
  artist: String,
});

module.exports = mongoose.model("Student", studentSchema);
