const database=require("../database/connection")

const updateStudent =async (req,res)=>{
const humanData=req.body;


try {
    const result =await database.update(humanData); 
    console.log("The result of database operation =>", result);
    return res.status(200).send(result);

} catch (error) {
    console.log("Something went wrong while performing db operation")
    return res.status(500).send({message:"Hi from express app"})
    
}
}

module.exports={
    updateStudent
}