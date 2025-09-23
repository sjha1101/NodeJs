const mongoose = require("mongoose");

mongoose.connect(
  "mongoDB url",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
module.exports = db;