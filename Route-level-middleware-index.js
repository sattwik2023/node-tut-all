const express = require('express');
const app = express();
const route = express.Router();
const reqFilter = require('./middleware');
/* This is single level middleware*/
// app.get('/',(req,resp)=>{
//     resp.send(`<h1>This is home page!`);
// })
// app.get('/about',(req,resp)=>{
//     resp.send(`<h1>This is about page!`);
// })
// app.get('/users',reqFilter,(req,resp)=>{
//     resp.send(`<h1>This is user page!`);
// })


/*Route level Middleware */
route.use(reqFilter);
app.get('/',(req,resp)=>{
    resp.send(`<h1>This is home page!`);
})
app.get('/about',(req,resp)=>{
    resp.send(`<h1>This is about page!`);
})
route.get('/contact',(req,resp)=>{
    resp.send(`<h1>This is contact page!`);
})
route.get('/users',(req,resp)=>{
    resp.send(`<h1>This is user page!`);
})
app.use('/',route);
app.listen(5000);