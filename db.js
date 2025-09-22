const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://Surbhi_1101:12345@cluster0.rr6b6ga.mongodb.net/pratice_exam?retryWrites=true&w=majority&appName=Cluster0",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
module.exports = db;