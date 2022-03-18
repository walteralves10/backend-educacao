const express = require('express');
const router = express.Router();
const professoresService = require('../service/professoresService');

router.get('/professores', async function(req, res){
    const professores = await professoresService.getProfessores();
    res.json(professores);
});

router.get('/professores/:id', async function(req, res){

});

router.post('/professores', async function(req, res){
    const professor = req.body;
    const novoProfessor = await professoresService.postProfessores(professor);
    console.log(novoProfessor);
    res.json(novoProfessor);
});

router.put('/professores/:id', async function(req, res){

});

router.delete('/professores/:id', async function(req, res){

});

module.exports = router;
