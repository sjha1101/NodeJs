const express = require("express");
const app = express();
require("./db"); // connect DB
const studentRoutes = require("./routes/studentRoute");

app.use(express.json());
app.use("/students", studentRoutes);

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
