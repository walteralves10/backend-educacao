const express = require('express');
const router = express.Router();
const usersService = require('../service/usersService');

router.get('/users', async function(req, res){
    res.json([{
        id: 1,
        name: 'Walter prof'
    }]);
    //const users = await usersService.getUsers();
    //res.json(users);
});
router.get('/users/:id', async function(req, res){

});
router.post('/users', async function(req, res){

});
router.put('/users/:id', async function(req, res){

});
router.delete('/users/:id', async function(req, res){

});

module.exports = router;
