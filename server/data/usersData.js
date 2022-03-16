const db = require('../infra/database');

exports.getUsers = function(){
    db
    return db.query('select * from cadastro_professor');
};