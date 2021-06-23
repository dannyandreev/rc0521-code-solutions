
const fs = require('fs');

fs.writeFile('random.txt', Math.random().toString(), function (err, data) {
  if (err) {
    throw err;
  }
});
