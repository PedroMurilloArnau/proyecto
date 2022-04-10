const { Router } = require('express');
const { check } = require('express-validator');
const{
    verUsuario,
    crearUsuario,
    loginUsuario,
} = require('./auth.microservice');
const { validarCampos } = require('../../middlewares/validadr-campos');

const router = Router();

router.post('/new',
[
    check('name','You must add name').not().isEmpty(),
    check('email','you must add email').isEmail(),
    check('password', 'you must add password').isLength({ min: 8 }),
    validarCampos,
],
    crearUsuario
);
router.post('/login',
[
    check('email', 'you must add email').isEmail(),
    check('password', 'you must add password').isLength({ min: 6 }),
    validarCampos,
],
loginUsuario
);

router.get('/all',verUsuario);

module.exports = router;