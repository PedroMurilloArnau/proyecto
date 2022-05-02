const bcrypt = require('bcryptjs');
const { respones, request } = require('express');
const { validationResult } = require('express-validator');
const { generateJWT } = require('../../helpers/jwt.mudule');
const  Beers  = require('../../bbdd/beer');
const Type = require('../../bbdd/typeBier')
const tasteNote = require('../../bbdd/tasteNote');


const allTypeBier = async(req, res) =>{
  try{
    const type = await Type.find();
    return res.json(type);
  }
  catch (err) {
    return  res.json({ error: err.message})
  };
}

const allBeer = async(req, res) => {
    try{
        const beers = await Beers.find();
      return  res.json(beers);
    }
    catch (err) {
      return  res.json({ error: err.message})
    };
};
const addTasteNotes = async(req,res) =>{
  try{
    const tastingtNotesadd = new tasteNote(req.body)

    await tastingtNotesadd.save();
    return res.status(201).json({
      ok:true,
    })    

  }
  catch(error){
    return res.status(500).json({
      ok:false,
      msg: 'Ask for tecnical asistance.'
    });
}
}
const findTaste = async(req, res) =>{
  const beername = req.params.tip;

  try{
    const taste = await tasteNote.find({beername: beername})

    if(!taste){
      return res.status(400).json({
        ok: false,
        msg: `We don't have a taste note for that beer.`,
      });
      
    }
    return res.json(taste);
  }
    catch (err){
      return res.json({ error: err.message})
    
    }
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
    findTaste,
    allTypeBier,
    addTasteNotes
}