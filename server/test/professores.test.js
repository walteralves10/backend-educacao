const crypto = require('crypto');
const axios = require('axios');
const professoresService = require('../service/professoresService');

const generate = (tamanho) => {
    return crypto.randomBytes(tamanho).toString('hex');
};

const request = function (url, method, data) {
    return axios({url, method, data});
}

const formataData = (data) => {
    return (data.getFullYear() + "-" + ((data.getMonth() + 1)) + "-" + (data.getDate() )) ;
}

test('deve OBTER get professores', async ()=>{
    // given - dado que
    const professor1 = await professoresService.postProfessores({
        //controle_professor: 2,
        nome_professor: generate(5),
        sobrenome_professor: generate(12),
        dt_nascimento_professor: formataData(new Date()),
        dt_formacao_professor: formataData(new Date()),
        instituicao_formacao_professor: generate(12),
        tipo_perfil_professor: 1,
        status_professor: 1,
        email_professor: generate(12),
        senha_professor: '123' 
    });
    const professor2 = await professoresService.postProfessores({
        //controle_professor: 2,
        nome_professor: generate(5),
        sobrenome_professor: generate(12),
        dt_nascimento_professor: formataData(new Date()),
        dt_formacao_professor: formataData(new Date()),
        instituicao_formacao_professor: generate(12),
        tipo_perfil_professor: 1,
        status_professor: 1,
        email_professor: generate(12),
        senha_professor: '123' 
    });
    const professor3 = await professoresService.postProfessores({
        //controle_professor: 2,
        nome_professor: generate(5),
        sobrenome_professor: generate(12),
        dt_nascimento_professor: formataData(new Date()),
        dt_formacao_professor: formataData(new Date()),
        instituicao_formacao_professor: generate(12),
        tipo_perfil_professor: 1,
        status_professor: 1,
        email_professor: generate(12),
        senha_professor: '123' 
    });
    // when - quando acontecer
    const resposta = await request('http://localhost:3000/professores', 'get');
    const professores = resposta.data.length;
    // then - então
    expect(professores).toBe(3); 

    await professoresService.deleteProfessores(professor1.insertId);
    await professoresService.deleteProfessores(professor2.insertId);
    await professoresService.deleteProfessores(professor3.insertId);
});

test('deve OBTER UNICO get professores', async ()=>{

    const id = {
        controle_professor: 97
    };

    const resposta = await request(`http://localhost:3000/professores/${id.controle_professor}`, 'get');
    const resJson = JSON.stringify(resposta.data); 
    expect(resJson.nome_professor).toString('Joao das neves');
});

test('deve GRAVAR post professores', async ()=>{
    
    const data = {
        nome_professor: generate(5),
        sobrenome_professor: generate(12),
        dt_nascimento_professor: formataData(new Date()), //.toLocaleDateString().replaceAll('/','-'),
        dt_formacao_professor: formataData(new Date()), //.toLocaleDateString(),
        instituicao_formacao_professor: generate(12),
        tipo_perfil_professor: 1,
        status_professor: 1,
        email_professor: generate(12),
        senha_professor: '123' 
    };

    const resposta = await request('http://localhost:3000/professores', 'post', data);

    const professor = resposta.data;
    //console.log(professor);

    expect(professor.serverStatus).toBe(2);
    //expect(professor.email_professor).toBe(data.email_professor);

    await professoresService.deleteProfessores(professor.insertId);
});

test.only('deve ATUALIZAR put professores', async ()=>{
    
    const dado = {
        nome_professor: generate(5),
        sobrenome_professor: generate(12),
        dt_nascimento_professor: formataData(new Date()), //.toLocaleDateString().replaceAll('/','-'),
        dt_formacao_professor: formataData(new Date()), //.toLocaleDateString(),
        instituicao_formacao_professor: generate(12),
        tipo_perfil_professor: 1,
        status_professor: 1,
        email_professor: generate(12),
        senha_professor: '123' 
    };
    const professor = await professoresService.postProfessores(dado);
    
    dado.nome_professor = "dale";
    dado.sobrenome_professor = "doly";

    await request(`http://localhost:3000/professores/${professor.insertId}`, 'put', dado);

    const id = parseInt(professor.insertId);
    delete professor.insertId
    expect(dado).toEqual(professor);

    // await professoresService.deleteProfessores(professor.insertId);
});