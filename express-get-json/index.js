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

app.get('/api/grades', function (req, res) {
  const gradesArray = [];
  for (const grade in grades) {
    gradesArray.push(grades[grade]);
  }

  res.json(gradesArray);
});

app.listen(3000, () => {
  // console.log("listening on port 3000")
});
