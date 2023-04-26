const express =require("express")
const studentController=require("../controllers/student")
const findController=require("../controllers/findController")
const updateController=require("../controllers/updateController")
const greaterController=require("../controllers/greaterControllers")
const experienceController=require("../controllers/experinceController")
const deleteController=require("../controllers/deleterControllers")
// const  findStudent  = require("../controllers/findController")
// const { expToDB } = require("../database/connection")

const router =express.Router()

router.post("/student",studentController.studentEnrollment)

router.post("/find",findController.findStudent)

router.put("/update",updateController.updateStudent)

router.post("/salary",greaterController.greaterSalary)

router.post("/experience",experienceController.findExp)

router.delete("/delete",deleteController.deleteEnrollment)

module.exports=router
