
// Atividade comentar cada linha do código, resumo de cada linha do código.
//Comentátio aqui
const express = require('express')

const conf = require('dotenv').config().parsed;
console.log(conf);

//Comentátio aqui
const app = express()

//Comentátio aqui
const port = 3000

//Comentátio aqui
app.get('/', (req,res) => {

    //Comentátio aqui
    res.send('Biel next instrutor')
})

//Comentátio aqui
app.listen(port, () => {

    //Comentátio aqui
    console.log(`Example app listening on port ${port}`)
})