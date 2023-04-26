// const { MongoClient } = require("../database/connection");
const database=require("../database/connection")

const studentEnrollment =async (req,res)=>{
const humanData=req.body;
// return res.status(200).send({message:humanData})
// console.log(humanData)
try {
    const result =await database.inserToDB(humanData);
    
    console.log("The result of database operation =>", result);
    return res.status(200).send(result);

} catch (error) {
    console.log("Something went wrong while performing db operation")
    return res.status(500).send({message:"Hi from express app"})
    
}

}





module.exports ={
    studentEnrollment,
}