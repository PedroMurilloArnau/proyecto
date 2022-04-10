const bcrypt = require('bcryptjs');
const { respones } = require('express');
const { validationResult } = require('express-validator');
const { generateJWT } = require('../../helpers/jwt.mudule');
const  Users  = require('../../bbdd/users');

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

    return res.status(201).json({
      ok:true,
      name: user.name,
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

module.exports = {
    verUsuario,
    crearUsuario,
    loginUsuario,
};
