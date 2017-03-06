const express = require('express');
const app = express();

const myLogger = (req, res, next) => {
  console.log('LOGGED');
  next();
}

const printTime = (req, res, next) => {
  console.log(Date.now());
  next();
}

app.use(myLogger);
app.use('/time',printTime);

app.get('/aaa', (req, res) => {
  res.send('Hello World!');
})

app.listen(3000)