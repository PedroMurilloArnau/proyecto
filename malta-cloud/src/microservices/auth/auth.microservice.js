const bcrypt = require('bcryptjs');
const { respones } = require('express');
const { validationResult } = require('express-validator');
const { generarJWT } = require('../../helpers/jwt.mudule');
const User = require('../../bbdd/users');

const verUsuario = async (req, res) => {
    try{
        const users = await User.find();
      return  res.json(users);
    }
    catch (err) {
      return  res.json({ error: err.message})
    };
};

module.exports = {
    verUsuario,
};
