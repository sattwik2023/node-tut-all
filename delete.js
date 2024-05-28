const dbConnect = require("./mongodb")

const dellet = async ()=>{
    const db = await dbConnect();
    const result = await db.deleteOne({name:"Max 3"})
    if(result.deletedCount > 0){
        console.log('record was deleted successfully');
    }else{
        console.log('record not found!');
    }
}
dellet();