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
    showThetasting,
    finshYourTasting,
    showTastingTaster
} = require('./tasting.microservice');
const { validarCampos } = require('../../middlewares/validadr-campos');

const router = Router();

router.post('/add',addtasting);

router.get('/yourTasting/:tip',findYourtasting);

router.get('/all',showtasting);

router.post('/addClient',addClient);

router.post('/documentation/add',addDocumentation);

router.get('/documentation/all',showAllDocumentation);

router.get('/theTasting/:tip',showThetasting);

router.post('/finsh',finshYourTasting);

router.get('/taster/:tip',showTastingTaster);






module.exports = router;