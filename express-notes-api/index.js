const express = require('express');
const fs = require('fs');
const app = express();

require('./data.json');

app.get('/api/notes/', (req, res) => {

  const notesArray = [];

  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      res.status(500).json('unexpected error');
    }
    const newJSON = JSON.parse(data);
    for (const note in newJSON.notes) {
      notesArray.push(newJSON.notes[note]);
    }
    res.status(200).json(notesArray);
  });
});

app.get('/api/notes/:id', (req, res) => {
  if (req.params.id > 0) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).json('unexpected error');
      }
      const newJSON = JSON.parse(data);

      if (newJSON.notes[req.params.id]) {
        res.status(200).json(newJSON.notes[req.params.id]);
      } else {
        res.status(400).json(`Could not find a note with id ${req.params.id}`);
      }
    });
  } else {
    res.status(200).json('Invalid id');
  }
});

app.delete('/api/notes/:id', (req, res) => {
  if (req.params.id) {
    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).json('unexpected error');
      }
      const newJSON = JSON.parse(data);

      if (newJSON.notes[req.params.id]) {
        delete newJSON.notes[req.params.id];
        writeNote(newJSON, error => {
          if (error) {
            return res.status(500).json({ error: 'An unexpected server error occurred' });
          }
        });
        res.status(204).json();
      } else {
        res.status(400).json(`Could not find a note with id ${req.params.id}`);
      }
    });
  } else {
    res.status(404).json('No ID specified');
  }
});

app.use(express.json());

app.post('/api/notes/', (req, res) => {
  if (req.body.content) {

    fs.readFile('./data.json', 'utf8', (err, data) => {
      if (err) {
        res.status(500).json('unexpected error');
      }
      const newJSON = JSON.parse(data);

      newJSON.notes[newJSON.nextId] = {};
      newJSON.notes[newJSON.nextId].content = req.body.content;
      newJSON.notes[newJSON.nextId].id = newJSON.nextId;
      newJSON.nextId++;
      writeNote(newJSON, error => {
        if (error) {
          return res.status(500).json({ error: 'An unexpected server error occurred' });
        }
      });
      res.status(201).json(req.body);

    });
  } else {
    res.status(400).json('Please include a content property in the body of your post request');
  }
});

app.listen(3000, () => {
  // console.log('listening on 3000')
});

function writeNote(obj, callback) {
  fs.writeFile('./data.json', JSON.stringify(obj), callback);
}
