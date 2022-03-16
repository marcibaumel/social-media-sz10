/*
VAN AZ OLDALÁN JEGYZET
*/

const fs = require("fs");
const filePath = "./browserslistrc";

fs.exists(filePath, (exists) => {
  if(exists){
    console.log("file exists: ", exists);
    return
  }

  fs.lstat(filePath, (err, stats)=> {
    if(err){
      console.log(err);
    }
    if(stats.isFile()){
      fs.readFile(filePath), (err, data) => {
        if(err){
          console.log(err);
          return;
        }
        console.log(data.toString('utf8'));
      }
    }
  })

});

for(let i = 0; i< 10; i++){
  console.log(i);
}
