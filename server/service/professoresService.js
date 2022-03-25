const professoresData = require('../data/professoresData');

exports.getProfessores = function () {
    return professoresData.getProfessores();
};

exports.getUnicoProfessor = (controle_professor) => {
    return professoresData.getUnicoProfessor(controle_professor);
};

exports.postProfessores = (professor) => {
    return professoresData.postProfessores(professor);
};

exports.putProfessores = (controle_professor, professor) => {
    return professoresData.putProfessores(controle_professor, professor);
};

exports.deleteProfessores = (controle_professor) => {
    return professoresData.deleteProfessores(controle_professor);
}