  const express = require("express");
  const router = express.Router();
  const studentController = require("../controllers/studentController");

  router.get("/index", studentController.index);

  module.exports = router;
