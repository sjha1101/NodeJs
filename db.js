const mongoose = require('mongoose');

mongoose.connect('mongoDb url', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
module.exports = db;