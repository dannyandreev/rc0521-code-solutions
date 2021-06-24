const fs = require('fs');

const arg1 = process.argv[2];

if (arg1 === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const newJSON = JSON.parse(data);

    for (const note in newJSON.notes) {
      console.log(`Note ${note}: ${newJSON.notes[note]}`);
    }
    // console.log(data);
  });
} else if (arg1 === 'create') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const note = process.argv[3];

    const newJSON = JSON.parse(data);
    newJSON.notes[newJSON.nextId.toString()] = note;
    newJSON.nextId++;
    writeNote(newJSON);
  });
} else if (arg1 === 'update') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const id = process.argv[3];
    const note = process.argv[4];

    const newJSON = JSON.parse(data);
    newJSON.notes[id] = note;
    writeNote(newJSON);
  });

} else if (arg1 === 'delete') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      throw err;
    }
    const id = process.argv[3];

    const newJSON = JSON.parse(data);
    delete newJSON.notes[id];

    writeNote(newJSON);
  });
}

function writeNote(obj) {
  fs.writeFile('./data.json', JSON.stringify(obj), function (err) {
    if (err) throw err;
  });
}
