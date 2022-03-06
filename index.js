const bodyParser = require('body-parser');
const express = require("express");

const jsonParser = bodyParser.json();

const server = express();

server.use(express.json());

const usuarios = [{id:1, nome:"Rodrigo",sobrenome:"Santos"},{id:2, nome:"Aline",sobrenome:"Rocha"}];

server.get( "/" , function (req, res) {
    res.send(usuarios)
});

server.get( "/:id" , function (req, res) {
    const {id} = req.params
    const aux = usuarios.find((usuario) => usuario.id == id)
    res.send(aux)
});

server.post("/",jsonParser,(req,res) => {
    console.log(req.body)
    const aux = req.body
    usuarios.push(aux)
    res.send(usuarios)
});

server.delete("/:index",(req,res) => {
    const {index} = req.params;
    usuarios.splice(index,1)
    res.send(usuarios)
});

server.listen(3000);

