var mysql = require('mysql');

var connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  database: 'signal_injector'
});

/*
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'mysql'
})
*/

/*
connection.connect();
connection.query('SHOW DATABASES;', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)
});
*/

/*
connection.query('SELECT * from `si_1_di`;', function (err, rows, fields) {
  if (err) throw err

  console.log(rows)
});
*/

connection.end();
