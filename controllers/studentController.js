const Student = require('../models/student');

exports.index = (req, res) => {
  Student.find()
    .then((allStudents)=>{
        console.log("Student Retirved",allStudents);
        res.json(allStudents);
    })
    .catch((err)=>{
        console.log("Error",err);
    })

};
exports.show = (req,res) =>{
    Student.findById(req.params.id)
  .then((allStudents)=>{
        console.log("Student Data",allStudents);
        res.send({Message:"Student",Data:allStudents});
    });
};

exports.store = (req, res) => {
  const newStudent = new Student({
     name:req.body.name,
    age:req.body.age,   
    grade:req.body.grade
});
    newStudent.save()
    .then((student)=>{
        console.log("Student Created",student);
    })
    .catch((err)=>{
        console.log("Error",err);
    })
};

exports.update = (req, res) => {
    Student.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((student)=>{
        console.log("Student Updated",student);
        res.send({Message:"Student Updated",Data:student});
    })
    .catch((err)=>{
        console.log("Error",err);
    });
};

exports.delete = (req, res) => {
    Student.findByIdAndDelete(req.params.id)
    .then((student)=>{ 
        console.log("Student Deleted",student);
        res.send({Message:"Student Deleted",Data:student});
    })
    .catch((err)=>{
        console.log("Error",err);
    });     
};