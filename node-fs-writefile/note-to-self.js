const fs = require('fs');

fs.writeFile('note.txt', process.argv[2], function (err, data) {
  if (err) {
    throw err;
  }
});
