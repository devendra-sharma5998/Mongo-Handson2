const database=require("../database/connection")

const deleteEnrollment=async (req,res)=>{
    const humanbody=req.body

    try {
        
        const result=await database.deleteData(humanbody)
        console.log("The result of database operation =>",result)
        return res.status(200).send(result)
    } catch (error) {
        
        console.log("Something went wrong while performing db operation")
        return res.status(500).send(message,"Hi from express app")
    }

}

module.exports={
    deleteEnrollment
}