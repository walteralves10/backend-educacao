const mysql      = require('mysql');
const db = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'Aguabeba10',
  database: 'educasoft'
});

// db.connect();

// db.query('select * from cadastro_professor', function(err, res, fields){
//   if (err) throw err;
//   console.log(res);
// });

// db.end();

module.exports = db;