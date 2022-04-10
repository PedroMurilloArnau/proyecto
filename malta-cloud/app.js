const express = require('express');
require('./src/bbdd/dbConfig.js');
require('dotenv').config();
require('./src/bbdd/dbConfig')
const Usuarios = require('./src/bbdd/users')
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());

app.use('/beer/users',require('./src/microservices/auth/auth.routing'))

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor escuchando en htt://localhost:${process.env.PORT}`)
})