const fs = require('fs');
fs.readFile('./dijkstra.txt', 'utf8', (err, data) => {
  if (err) {
    throw err;
  }
  const content = data;

  console.log(content);
});
