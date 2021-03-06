const bcrypt = require('bcryptjs');
const { respones, response } = require('express');
const session = require('express-session')
const { validationResult } = require('express-validator');
const { generateJWT } = require('../../helpers/jwt.mudule');
const  Users  = require('../../bbdd/users');
const superagent = require('superagent');

const findusUario = async(req,res) => {
  const email = req.params.tip;
  try{
    const user = await Users.findOne({email:email});
    if(!user){
      return res.status(400).json({
        ok:false,
        msg: 'User not found!'
    });
    }
    return res.status(201).json({user});
  }
  catch (error){
    return res.status(500).json({
        ok:false,
        msg: 'Ask for tecnical asistance.'
    })

}
}

const crearUsuario = async(req, res)=>{
  const { name,email, password} = req.body;

  try{
  
    const user = await Users.findOne({email: email});

    if(user) {
      return res.status(400).json({
        ok: false,
        msg: 'User exist with this email.'
      });
    }
    const useradd = new Users(req.body);
    const salt = bcrypt.genSaltSync(10);

    useradd.password = bcrypt.hashSync(password, salt);
  
    if(req.body.code == 37161){
      useradd.type = "Prog";
    }
    else{
    if(req.body.code == 92524){
      useradd.type = "Shop";
    }
    else{
    if(req.body.code == 84131){
      useradd.type = "Test";
    }
    else{
      useradd.type = "Client";
    }
  }}
    const token = await generateJWT(useradd.name, useradd.email);

    await useradd.save();
 
  return res.status(201).json({
    ok:true,
    name: name,
    email: email,
    token,
  });
}
catch (error) {
  return res.status(500).json({
    ok:false,
    msg: 'Ask for tecnical asistance.'
  });
}
};
const loginUsuario = async (req, res) => {
	const { email, password } = req.body;
  const emailg = req.body.email
  try{
    const user = await Users.findOne({ email: email });

    if(!user){
      return res.status(400).json({
        ok: false,
        msg: `The email: ${emailg} not exist in Beer`,
      });
    }

    const validPassword = bcrypt.compareSync(password, user.password);
  
    if(!validPassword){
      return res.status(400).json({
        ok:false,
        msg: 'El password no es valido',
      });
    }
    const token = await generateJWT(user.name, user.email);
    

    req.session.regenerate
      
      req.session.user = user.email;
      req.session.date = new Date();
      req.session.token = token;
      req.session.cookie.expires = new Date(Date.now() + 86400000);
    

    return res.status(200).json({
      ok:true,
      type: user.type,
      email: user.email,
      token,
    });
    
  } catch(error){
    return res.status(500).json({
      ok: false,
      msg: 'Ask for tecnical asistance.'
    });
  }
};

const verUsuario = async (req, res) => {
    try{
        const users = await Users.find();
      return  res.json(users);
    }
    catch (err) {
      return  res.json({ error: err.message})
    };
};
const destinoFinal = async (req,res,next) => {
  
  return ('https://www.google.com/');
}

module.exports = {
    verUsuario,
    crearUsuario,
    loginUsuario,
    findusUario,
    destinoFinal
};
