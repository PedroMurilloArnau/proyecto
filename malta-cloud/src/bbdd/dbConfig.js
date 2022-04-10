const mongoose = require('mongoose');

const url = 'mongodb://localhost:27017/proyectBeer';

mongoose.connect(url);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error MongoDB'))

module.exports = db;