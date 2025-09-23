const express = require('express');
const app = express();
require("./db");
const studentsRoute = require('./routes/studentRoute');
const port = 3000;

app.use(express.json());
app.use('/students', studentsRoute);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

