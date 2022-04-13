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

const addBeer = async(req,res) => {
  const { name } = req.body;

  try{
    const beer = await Beers.findOne({name: name});

    if(beer){
      return res.status(400).json({
        ok: false,
        msg: 'Beer exist you mast implement the stock.'
      });
    }
    const beeradd = new Beers(req.body)

    await beeradd.save();

    return res.status(201).json({
      ok:true,
      name: name,
    })
  }
  catch (error){
    return res.status(500).json({
      ok:false,
      msg: 'Ask for tecnical asistance.'
    });
}};

module.exports = {
    allBeer,
    addBeer,
}