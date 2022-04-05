const express = require('express');
const router = express.Router();
const professoresService = require('../service/professoresService');

router.get('/professores', async function(req, res){
    const professores = await professoresService.getProfessores();
    res.json(professores);
});

router.get('/professores/:id', async function(req, res){
    const id = req.params.id;
    const professor = await professoresService.getUnicoProfessor(id);
    res.json(professor);
});

router.get('/login', async function(req, res){
    const login = req.body;
    const professor = await professoresService.getAutenticacaoLogin(login);
    console.log(professor);
    res.json(professor);
});

router.post('/professores', async function(req, res){
    const professor = req.body;
    const novoProfessor = await professoresService.postProfessores(professor);
    res.json(novoProfessor);
});

router.put('/professores/:id', async function(req, res){
    const professor = req.body;
    await professoresService.putProfessores(req.params.id, professor);
    res.end();
});

router.delete('/professores/:id', async function(req, res){
    await professoresService.deleteProfessores(req.params.id);
    res.end();
});

module.exports = router;
