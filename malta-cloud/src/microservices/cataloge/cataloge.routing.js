const { Router } = require('express');
const { check } = require('express-validator');
const{
allBeer,
addBeer,
findTaste,
allTypeBier,
addTasteNotes

} = require('./cataloge.microservice');
const { validarCampos } = require('../../middlewares/validadr-campos');

const router = Router();

router.post('/new',
[
    check('name','You must add name').not().isEmpty(),
    check('priceUni','you must add priceUni').not().isEmpty(),
    check('biertype', 'you must add a type').not().isEmpty(),
    check('image', 'you must add a image').not().isEmpty(),
    check('stock', 'you must add a stock').not().isEmpty(),
    validarCampos,
],
    addBeer
);
router.get('/all',allBeer);

router.get('/type',allTypeBier);

router.get('/taste/:tip',findTaste);

router.post('/tastingtNotes', addTasteNotes)

module.exports = router;