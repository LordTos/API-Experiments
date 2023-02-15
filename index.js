
// Atividade comentar cada linha do código, resumo de cada linha do código.
//Comentátio aqui
const express = require('express')

const conf = require('dotenv').config().parsed;
console.log(conf);

//Comentátio aqui
const app = express()

//Comentátio aqui
const port = conf.HTTPPORT;

//Objeto que será executado quando houver uma requisição.
const controller = {
    resJson: async (req, res) =>{

        //Lista com alguns atributos uteis da requisição (req) HTTP.
        data = {
            "method": req.method,
            "url": req.url,
            "baseURL": req.baseURL,
            "query": res.query,
            "params": req.params,
            "body":req.body,
            "headers": req.headers
        }

        //Envia JSON com os dados acima para o cliente, como texto plano.
        // res.send(data);

        //Envia JSON com os dados acima para o cliente, como texto plano JSON.
        res.json(data);
    }
}

// Recebe os dados do body HTTP e valida em JSON.
const bodyParser = require('body-parser').json();

// Rota para GET → getAll() → Recebe, por exemplo, todos os registros.
app.get('/', controller.resJson);

// Rota para GET → get(id) → Recebe apenas o registro identificado.
app.get('/:id', controller.resJson);

//Rota para DELETE.
app.delete('/:id', controller.resJson);

// Rota para POST → bodyParser (no hook) é usado para garantir a chegada de um JSON.
app.post('/', bodyParser, controller.resJson);

// Rota para PUT → bodyParser (no hook) é usado para garantir a chegada de um JSON.
app.put('/:id', bodyParser, controller.resJson);

//Comentátio aqui
app.listen(port, () => {

    //Comentátio aqui
    console.log(`Example app listening on port ${port}`)
})