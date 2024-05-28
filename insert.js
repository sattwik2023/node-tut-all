const dbConnect = require('./mongodb');

// const insert =async ()=>{
//     const db = await dbConnect();
//     const result = await db.insertOne({name:"max 1",brand:"micromax",price:220});
//     // console.log(result);
//     if(result.acknowledged){
//         console.log("Data is inserted!")
//     }
// }

const insert =async ()=>{
        const db = await dbConnect();
        const result = await db.insertMany([
            {name:"max 1",brand:'micromax',price:220,catagory:"mobile"},
            {name:"max 2",brand:'micromax',price:420,catagory:"mobile"},
            {name:"max 3",brand:'micromax',price:320,catagory:"mobile"},
        ]);
        // console.log(result);
        if(result.acknowledged){
            console.log("Data is inserted!")
        }
    }
insert();