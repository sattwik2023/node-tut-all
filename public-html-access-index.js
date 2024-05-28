const express = require('express');
const app = express();
const path=require('path');
const publicpath = path.join(__dirname,'public');
// console.log(filepath)
// app.use(express.static(publicpath));
app.get('',(req,resp)=>{
    resp.sendFile(`${publicpath}/index.html`)
})
app.get('/about',(req,resp)=>{
    resp.sendFile(`${publicpath}/about.html`)
})
app.get('*',(req,resp)=>{
    resp.sendFile(`${publicpath}/nopage.html`)
})
app.listen(5000);