const express = require('express');
const app = express();
app.get('/',(req,resp)=>{
    resp.send('<h1>This is Home page</h1><a href="/about">Go To About</a>');
    resp.end();
})
app.get('/about',(req,resp)=>{
    resp.send(`<input type="text" ,placeholder="User name" value="${req.query.name}"/>
    <button>Click Me<button/>`);
    resp.end();
})
app.get('/help',(req,resp)=>{
    resp.send([
        {name:"anila",email:"anil@gmail.com"},
        {name:"sattwik",phone:"3475y38598"}
    ]);
    resp.end();
})
app.listen(5000);