const dbConnect = require('./mongodb');

const update  =async ()=>{
    const db = await dbConnect();
    const result = await db.updateOne({name:"max 1"},{$set:{brand:"micromax"}});
    // const result = await db.updateMany({brand:"micromax"},{$set:{name:"micromax pro"}});
    // console.log(result);
    if(result.acknowledged){
        console.log("update date perfectly");
    }
}
update();