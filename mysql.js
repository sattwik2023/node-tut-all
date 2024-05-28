const mysql = require('mysql');
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "smart_edge_packaging"
});

// con.query("select * from enquiry",(err,result,fields)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result);
//     }
// });

// const data = {Name: 'demo',
// Address: 'demo address',
// Email: 'demo@gmail.com',
// Contact: '000000000000',
// Fax: '2423235',
// Comment: 'thie is demo comment'}
// con.query("insert into enquiry set ?",data,(err,result,fields)=>{
//     console.log(result);
// })

// const data = [
//     {
//         Name: 'demo 1',
//         Address: 'demo 1 address',
//         Email: 'demo1@gmail.com',
//         Contact: '0000000000001',
//         Fax: '12423235',
//         Comment: 'thie is demo 1 comment'
//     },
//     {
//         Name: 'demo 2',
//         Address: 'demo 2 address',
//         Email: 'demo2@gmail.com',
//         Contact: '0000000000002',
//         Fax: '22423235',
//         Comment: 'thie is demo 2 comment'
//     }
// ]
// const db = con.query("insert into enquiry set ?", data,(err,result,fields)=>{
//     console.log(result);
// })

// const data = {
//             Name: 'demo 2',
//             Address: 'demo 2 address',
//             Email: 'demo2@gmail.com',
//             Contact: '0000000000002',
//             Fax: '22423235',
//             Comment: 'thie is demo 2 comment'
//         };
// con.query("update from enquiry set ? where Name = 'demo 1'",data,(err,result,fields)=>{
//     console.log(result);
// })

con.query("delete from enquiry set ?",{Name:"demo 1"},(err,result,fields)=>{
    console.log(result);
})




