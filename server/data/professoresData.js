const db = require('../infra/database');

exports.getProfessores = async function(){
    const [rows, fields] = await db.promise().query('select * from cadastro_professor');
    return rows;
};

exports.postProfessores = async (professor) => {
    const [rows, fields] = await db.promise().query('INSERT INTO cadastro_professor SET ?', professor);
    console.log(rows);
    return rows;
};

exports.deleteProfessores = async (controle_professor) => {
    return db.promise().query('delete from cadastro_professor ' + 
                        'where controle_professor = ?', [controle_professor]);
};