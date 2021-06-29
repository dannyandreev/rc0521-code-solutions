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

// console.log(grades)

app.delete('/api/grades/:id', (req, res) => {

  delete grades['12'];

  // console.log(grades)
  const gradeArray = [];
  for (const id in grades) {
    gradeArray.push(grades[id]);
  }

  // res.sendStatus(204)
  res.json(gradeArray);
  res.send(res.params);
});

app.listen(3000);
