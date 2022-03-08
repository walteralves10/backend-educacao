const pgp = require('pg-promise')();
const db = pgp({
    user:'',
    password:'',
    host:'',
    port:5432,
    database:'educacao'
});

module.exports.db;