const { Router } = require('express');
const { check } = require('express-validator');
const {
    addtasting,
    intasting,
    showtasting,
    addClient,
    findYourtasting,
} = require('./tasting.microservice');
const { validarCampos } = require('../../middlewares/validadr-campos');

const router = Router();

router.post('/add',
[
    check('name','You must add name').not().isEmpty(),
    check('taster','You must add a taster').not().isEmpty(),

    validarCampos
],
addtasting);

router.post('/yourTasting',findYourtasting);

router.get('/all',showtasting);

router.post('/addClient',addClient);

module.exports = router;