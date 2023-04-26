const {MongoClient}= require("mongodb")

const url ="mongodb://127.0.0.1:27017"
const client =new MongoClient(url);



const inserToDB =async (data)=>{
    const database=client.db("student")
    const collection =database.collection("information")
    await client.connect()
    const dbResponse=await collection.insertOne(data)
    await client.close()
    return dbResponse
    // await client.close()
}

const findToDB =async (data)=>{
    const database=client.db("student")
    const collection =database.collection("information")
    await client.connect()
    const dbResponse=await collection.findOne(data)
    await client.close()
    return dbResponse

}
const update =async (data)=>{
    const database=client.db("student")
    const collection =database.collection("information")
    await client.connect()
    const dbResponse=await collection.updateMany(data,{$set:{"salary":"35000"}})
    await client.close()
    return dbResponse

}

const greaterThanSalary =async (data)=>{
    const database=client.db("student")
    const collection =database.collection("information")
    await client.connect()
    const dbResponse=await collection.find({"salary":{$gt:"35000"}})
    await client.close()
    return dbResponse

}

const expToDB =async (data)=>{
    const database=client.db("student")
    const collection =database.collection("information")
    await client.connect()
    const dbResponse=await collection.find({"overallExp":{$gte:"2"}},{"yearGrad":{$gt:"2015"}})
    await client.close()
    return dbResponse

}

const deleteData =async (data)=>{
    const database=client.db("student")
    const collection =database.collection("information")
    await client.connect()
    const dbResponse=await collection.deleteOne({"lastcompany":"Y"})
    await client.close()
    return dbResponse

}



module.exports ={
    inserToDB,findToDB,update,greaterThanSalary,expToDB,deleteData
}

