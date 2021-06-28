const express = require('express');

const app = express();

app.use(function (req, res, next) {
  // console.log('Time:', Date.now())
  // console.log(req.method)
  // console.log(res.method)
  res.send('test send');
  next();
});

app.listen(3000, () => {
  // console.log("listening on port 3000")
});
