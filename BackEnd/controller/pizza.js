const Pizza = require("../models/Pizza");

var controller = {};

controller.novo = async (req, res) => {
    try{
        await Pizza.create(req.body);
        res.send(201);
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

controller.listar = async (req, res) => {
    try{
        var pizzas = await Pizza.find();
        res.send(pizzas);
    }catch(erro){
        console.log(erro)
        res.status(500).send(erro)
    }
}

module.exports = controller;