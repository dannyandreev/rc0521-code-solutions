const fs = require('fs');

const arg1 = process.argv[2];

if (arg1 === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    console.log(data);
  });
} else if (arg1 === 'create') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const arg2 = process.argv[3];

    const newJSON = JSON.parse(data);
    newJSON.notes[newJSON.nextId.toString()] = arg2;
    newJSON.nextId++;
    fs.writeFile('./data.json', JSON.stringify(newJSON), function (err) {
      if (err) throw err;
    });
  });
} else if (arg1 === 'update') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const arg2 = process.argv[3];
    const arg3 = process.argv[4];

    const newJSON = JSON.parse(data);
    newJSON.notes[arg2.toString()] = arg3;
    fs.writeFile('./data.json', JSON.stringify(newJSON), function (err) {
      if (err) throw err;
    });
  });

} else if (arg1 === 'delete') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const arg2 = process.argv[3];

    const newJSON = JSON.parse(data);
    delete newJSON.notes[arg2.toString()];
    fs.writeFile('./data.json', JSON.stringify(newJSON), function (err) {
      if (err) throw err;
    });
  });
}
