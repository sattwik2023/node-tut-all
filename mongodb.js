const {MongoClient, Collection} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017/e-comm';
const client  = new MongoClient(url);

async function dbConnect(){
    const connect = await client.connect();
    const db = connect.db();
    return db.collection('products');

    // const data = await collection.find({name:"m 40"}).toArray();
    // console.log(data)
}

module.exports = dbConnect;