const express = require('express');
const app = express();
const path  = require('path');
const filepath = path.join(__dirname,'views');
app.set('view engine','ejs');

app.get('/',(req,resp)=>{
    resp.render('index');
})

app.get('/profile',(req,resp)=>{
    let user={
        name:"anil sidhu",
        email:"anil@gmail.com",
        country:"anil@gmail.com",
        skills:['php','js','C++']
    }
    resp.render('profile',{user});
})

app.listen(5000);