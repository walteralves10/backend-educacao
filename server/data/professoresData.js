const db = require('../infra/database');

exports.getProfessores = async function(){
    const [rows, fields] = await db.promise().query('SELECT * FROM cadastro_professor');
    return rows;
};

exports.getUnicoProfessor = async (controle_professor) => {
    const [rows, fields] = await db.promise().query('SELECT * FROM cadastro_professor WHERE controle_professor = ?', [controle_professor]);
    return rows;
};

exports.getAutenticacaoLogin = async (login) => {
    const [rows, fields] = await db.promise().query('SELECT * FROM cadastro_professor WHERE email_professor = ? and senha_professor = ?', [login.email_professor, login.senha_professor]);
}

exports.postProfessores = async (professor) => {
    const [rows, fields] = await db.promise().query('INSERT INTO cadastro_professor SET ?', [professor]);
    return rows;
};

exports.putProfessores = async (controle_professor, professor) => {
    const [rows, fields] = await db.promise().query('UPDATE cadastro_professor SET ? WHERE controle_professor = ?', [professor, controle_professor]);
    return rows;
};

exports.deleteProfessores = async (controle_professor) => {
    return await db.promise().query('delete from cadastro_professor ' + 
                        'where controle_professor = ?', [controle_professor]);
};