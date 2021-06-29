const express = require('express');

const app = express();

let nextId = 1;

const grades = {};

app.get('/api/grades', (req, res) => {
  const array = [];
  for (const id in grades) {
    array.push(grades[id]);
  }
  res.json(array);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const obj = req.body;

  grades[nextId] = obj;
  grades[nextId].id = nextId;
  nextId++;
  // console.log(grades)
  res.status(201).json(obj);
});

app.listen(3000, () => {
  // console.log('Listening on port 3000')
});
