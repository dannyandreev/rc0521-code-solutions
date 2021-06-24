const file1 = process.argv[2];
const file2 = process.argv[3];

const fs = require('fs');

// console.log(process.argv)
fs.readFileSync(file1, 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  // console.log(data)
  copyOver(data);
});

function copyOver(data) {
  fs.writeFile(file2, data, function (err, data) {
    // console.log(data)
    if (err) {
      throw err;
    }
  });
}
