const { Router } = require('express');
const { check } = require('express-validator');
const {
    addtasting,
    intasting,
    showtasting,
    addClient,
    findYourtasting,
    addDocumentation,
    showAllDocumentation,
    showThetasting
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

router.get('/yourTasting/:tip',findYourtasting);

router.get('/all',showtasting);

router.post('/addClient',addClient);

router.post('/documentation/add',addDocumentation);

router.get('/documentation/all',showAllDocumentation);

router.get('/theTasting/:tip',showThetasting);



module.exports = router;