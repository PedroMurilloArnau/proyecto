const express = require('express');
require('./src/bbdd/dbConfig.js');
require('dotenv').config();
require('./src/bbdd/dbConfig')
const Usuarios = require('./src/bbdd/users')
const app = express();
const cors = require('cors');
const session = require('express-session');

app.use(cors())
app.use(express.json());
app.use(session({
    secret: 'frase secreta',
    resave: true,
    saveUninitialized: true,
}));

app.use('/beer/users',require('./src/microservices/auth/auth.routing'));
app.use('/beer/cataloge',require('./src/microservices/cataloge/cataloge.routing'));
app.use('/beer/purchase',require('./src/microservices/purchase/purchase.routing'));

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor escuchando en htt://localhost:${process.env.PORT}`)
})