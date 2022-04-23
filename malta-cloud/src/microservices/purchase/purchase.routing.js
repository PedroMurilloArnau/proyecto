const { Router } = require('express');
const { check } = require('express-validator');
const {
    addPurchase,
    showPurchase,
} = require('./purchase.microservice');
const { validarCampos } = require('../../middlewares/validadr-campos');

const router = Router();

router.post('/add/:tip',addPurchase);

module.exports = router;