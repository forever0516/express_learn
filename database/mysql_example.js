var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : '127.0.0.1',
  user     : 'root',
  password : 'node123',
  database : 'todo',
  port : 3306
});

connection.connect()

connection.query('SELECT * FROM Projects', function (err, rows, fields) {
  if (err) throw err

  console.log('result', rows)
})

connection.end()