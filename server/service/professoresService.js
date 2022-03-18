const professoresData = require('../data/professoresData');

exports.getProfessores = function () {
    return professoresData.getProfessores();
};

exports.postProfessores = (professor) => {
    return professoresData.postProfessores(professor);
};

exports.deleteProfessores = (controle_professor) => {
    return professoresData.deleteProfessores(controle_professor);
}