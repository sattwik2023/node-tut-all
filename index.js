const dbConnect = require('./mongodb');

// dbConnect().then((db)=>{
//     const result = db.find({}).toArray();
//     result.then((resp)=>{
//         console.log(resp);
//     })
// })

const main = async()=>{
    const db = await dbConnect();
    const result = await db.find({}).toArray();
    console.log(result);
}
main();