const { Router } = require('express');
const { check } = require('express-validator');
const{
allBeer,

} = require('./cataloge.microservice');
const { validarCampos } = require('../../middlewares/validadr-campos');

const router = Router();

router.get('/all',allBeer);

module.exports = router;