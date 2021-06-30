const express = require('express');

const grades = {
  12: {
    id: 12,
    name: 'Tim Berners-Lee',
    course: 'HTML',
    score: 95
  },
  47: {
    id: 47,
    name: 'Brendan Eich',
    course: 'JavaScript',
    score: 100
  },
  273: {
    id: 273,
    name: 'Forbes Lindsay',
    course: 'JavaScript',
    score: 92
  }
};

const app = express();

app.get('/api/grades/', (req, res) => {
  // console.log('get')

  const gradeArray = [];

  for (const id in grades) {
    gradeArray.push(grades[id]);
  }

  res.json(gradeArray);
});

app.delete('/api/grades/:id', (req, res) => {
  // console.log('delete')
  const idToDelete = req.params.id;
  // console.log(idToDelete)

  delete grades[idToDelete];
  // console.log(grades)
  res.status(204).send();
});

app.listen(3000, () => {
  // console.log('listening at 3000')
});
