//write ,read,append,rename,delete
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'curd');

// console.log(path);
// console.log(`${dirPath}\apple.js`);
// console.log(__filename);

// fs.writeFileSync(`${dirPath}/apple.txt`,"this is apple file");
// fs.readFile(`${dirPath}/apple.txt`,'utf8',(err,result)=>{
//     (!err)?console.log(result):console.log(err);
// })
// fs.appendFileSync(`${dirPath}/apple.txt`," appended text here.",(err,result)=>{
//     (!err)?console.log(result):console.log(err);
// })

// fs.rename(`${dirPath}/apple.txt`,`${dirPath}/fruit.txt`,(err,result)=>{
//     (!err)?console.log(result):console.log(err);
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)