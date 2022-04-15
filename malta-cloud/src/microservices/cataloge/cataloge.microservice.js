const bcrypt = require('bcryptjs');
const { respones, request } = require('express');
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
    //console.log(req.session.list.length);
    if(req.session.list === undefined){
    const final = [];
    final.push(beeradd)
    req.session.list = final;
    }
    else{
    this.final = req.session.list;
    this.final.push(beeradd);
    }
    console.log(req.session);

    return res.status(201).json({
      ok:true,
      name: name,
      user: req.session.user,
      lista: req.session.list,
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