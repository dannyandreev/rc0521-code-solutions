const fs = require('fs')

let files = [];

for(let i = 2; i < process.argv.length; i++) {
  files[i-2] = process.argv[i]
}


let output = '';
let callBackCounter = 1;
console.log(files)

for(file of files){
  console.log("test")
  fs.readFile(`./${file}`, "utf8", handleFileRead)
}

function handleFileRead(err, data){
  if(err) {
    throw err
  }
  output += data
  console.log(callBackCounter)
  callBackCounter++

  const promiseA = new Promise( (resolutionFunc,rejectionFunc) => {
    resolutionFunc(777);
});
}
