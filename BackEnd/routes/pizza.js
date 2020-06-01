var express = require('express');
var router = express.Router();
var controller = require('../controller/pizza')

router.post('/', controller.novo);
router.get('/', controller.listar);

module.exports = router;