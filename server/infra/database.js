const mysql      = require('mysql2');

const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Aguabeba10',
  database: 'educasoft'
});

module.exports = db;