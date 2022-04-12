const bcrypt = require('bcryptjs');
const { respones } = require('express');
const { validationResult } = require('express-validator');
const { generateJWT } = require('../../helpers/jwt.mudule');
const  Beers  = require('../../bbdd/beer');

const allBeer = async(req, res) => {
    try{
        const beers = await Beers.find();
      return  res.json(beers);
    }
    catch (err) {
      return  res.json({ error: err.message})
    };
};

module.exports = {
    allBeer,
};