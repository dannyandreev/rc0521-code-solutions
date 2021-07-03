const pg = require('pg');

// only create ONE pool for your whole server
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');

const app = express();
app.use(express.json());

app.get('/api/grades/:gradeId', (req, res, next) => {
  const gradeId = parseInt(req.params.gradeId, 10);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }
  const sql = `
  select
    "gradeId",
    "name",
    "course",
    "score",
    "createdAt"
  from
    "grades"
  where "gradeId" = $1
  `;

  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        res.json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.post('/api/grades', (req, res) => {
  // console.log(req.body)

  const course = req.body.course;
  const name = req.body.name;
  const score = parseInt(req.body.score, 10);

  if (!name) {
    res.status(400).json({
      error: 'missing "name"'
    });
    return;
  } else if (!course) {
    res.status(400).json({
      error: 'missing "score"'
    });
    return;
  } else if (!Number.isInteger(score) || score <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
  insert into "grades"
    ("course","name","score")
  values
    ($1,$2,$3)
  returning *
  `;

  const params = [course, name, score];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {

  // console.log(req.body)

  const gradeId = parseInt(req.params.gradeId, 10);

  const course = req.body.course;
  const name = req.body.name;
  const score = parseInt(req.body.score, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  } else if (!name) {
    res.status(400).json({
      error: 'missing "name"'
    });
    return;
  } else if (!course) {
    res.status(400).json({
      error: 'missing "score"'
    });
    return;
  } else if (!Number.isInteger(score) || score <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
  update
    "grades"
  set
    "course" = $1,
    "name" = $2,
    "score" = $3
  where
    "gradeId" = $4
  returning *
  `;
  const params = [course, name, score, gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${gradeId}` });
      } else {
        res.status(201).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {

  // console.log(req.body)

  const gradeId = parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({
      error: '"gradeId" must be a positive integer'
    });
    return;
  }

  const sql = `
  delete from "grades"
  where
    "grades"."gradeId" = $1
  returning *
  `;
  const params = [gradeId];

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      if (!grade) {
        res.status(404).json({ error: `Cannot find grade with "gradeId" ${grade}` });
      } else {
        res.status(201).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occured.' });
    });
});

app.listen(3000, () => {
  // console.log('listening on port 3000')
});
