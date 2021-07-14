const express = require('express');
const path = require('path');

const app = express();

const myPath = path.join(__dirname, './public');
console.log(myPath);

app.use(express.static(myPath));

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
