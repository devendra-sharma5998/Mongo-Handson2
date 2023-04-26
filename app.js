const express=require("express")
const bodyParser = require("body-parser")
const studentRouter=require("./routes/student")
// const { humanEnrollment } = require("./controllers/student")

const app=express()


app.use(bodyParser.json())
app.use(studentRouter);

app.listen(5050,()=>{
    console.log("working")
})