const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/login', (req, res) => {
  res.send('Got a POST request')
})

app.all('/all', (req, res, next) => {
	console.log('all http method')
  	next() // next handler
})

app.get('/ab*cd', (req, res) => { //string pattern
  res.send('match ab*cd')
})

app.get('/intro(duction)?', (req, res) => { //string pattern
  res.send('match intro(duction)')
})

app.get(/a/, (req, res) => { //regular expression
  res.send('match /a/')
})


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})