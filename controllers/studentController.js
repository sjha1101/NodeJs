const Student = require("../models/Student");

exports.index = (req,res)=>{
  Student.find()
    .then((allStudents)=>{
    console.log("All students are retirved",allStudents);
    res.send(allStudents);
  })
  .catch((err)=>{
    console.log("Error",err);
  })
}

