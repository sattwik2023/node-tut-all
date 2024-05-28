const express = require('express')
const app = express();
const dbConnect  = require('./mongodb');
app.get('/',async(req,resp)=>{
    const db= await dbConnect();
    const data = await db.find({}).toArray();
    // console.log(data)
    resp.send(data)
})

app.post('/',async (req,resp)=>{
    const body = req.body;
    const db =await dbConnect();
    const data = await db.insertOne({name:"demo ",brand:"demo",price:234,catagory:"mobile"})
    console.log(data)
    resp.send(data)
})
app.listen(5000);