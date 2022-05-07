const express = require('express');
require('./src/bbdd/dbConfig.js');
require('dotenv').config();
require('./src/bbdd/dbConfig')

const app = express();
const cors = require('cors');
const session = require('express-session');

app.use(cors());
app.use(express.json());
app.use(session({
    secret: 'frase secreta',
    resave: true,
    saveUninitialized: true,
}));

app.use('/beer/users',require('./src/microservices/auth/auth.routing'));
app.use('/beer/cataloge',require('./src/microservices/cataloge/cataloge.routing'));
app.use('/beer/purchase',require('./src/microservices/purchase/purchase.routing'));
app.use('/beer/tasting',require('./src/microservices/tasting/tasting.routing'));
app.use('/beer/game',require('./src/microservices/game/game.routing'));

app.listen(process.env.PORT, ()=>{
    console.log(`Servidor escuchando en htt://localhost:${process.env.PORT}`)
})