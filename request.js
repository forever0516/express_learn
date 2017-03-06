const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// parameter
app.get('/order/item', (req, res) => {
  res.send(req.query.id);

  console.log(req.originalUrl); // /order/item
  console.log(req.baseUrl); 	// /order
  console.log(req.path);		// /item
  console.log('request path:', req.path);
})

// payload
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.post('/profile', (req, res, next) => {
  res.send(req.body);
});


app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})