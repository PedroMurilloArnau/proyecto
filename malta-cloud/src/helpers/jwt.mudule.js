const jwt = require('jsonwebtoken');
const { resolve } = require('path');

const generateJWT = (name,email) =>{
    const payload ={name, email};

    return new Promise((resolve,reject)=> {
        jwt.sign(
            payload,
            process.env.SECRET_JWT_SEED,
            {
                expiresIn: '24h',
            },
            (err,token)=>{
                if(err){
                    console.log(err);
                    reject(err);
                }
                else{
                    resolve(token);
                }
            }
        );
    });
};

module.exports = {
    generateJWT
};