const express = require('express');
require('./src/bbdd/dbConfig.js');

const app = express();
const port = 3000;

app.listen(()=>{
    console.log(`Servidor escuchando en htt://localhost:${port}`)
})