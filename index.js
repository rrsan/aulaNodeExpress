const express = require("express")

const server = express()

const usuarios = [{id:1, nome:"Rodrigo",sobrenome:"Santos"},{id:2, nome:"Aline",sobrenome:"Rocha"}]

server.get( "/" , function (req, res) {
    res.send(usuarios)
})

server.get( "/:id" , function (req, res) {
    const {id} = req.params
    const aux = usuarios.find((usuario) => usuario.id == id)
    res.send(aux)
})

server.listen(3000)

