const express = require('express');

const books = require('./book');
const orders = require('./order');

app = express();

app.use('/books_page', books);

app.use('/my_order', orders);

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})