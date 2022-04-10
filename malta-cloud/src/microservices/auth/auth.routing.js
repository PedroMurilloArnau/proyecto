const { Router } = require('express');
const { check } = require('express-validator');
const{
    verUsuario,
} = require('./auth.microservice')

const router = Router();

router.get('/all',verUsuario);

module.exports = router;