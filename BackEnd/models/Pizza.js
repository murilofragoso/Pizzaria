const mongoose = require('mongoose');

const esquemaPizza  = mongoose.Schema({
    sabor:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Pizza', esquemaPizza, 'pizzas');