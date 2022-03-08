const database = require('../infra/database');

exports.getUsers = function(){
    return database.query('select * from educacao.users');
};