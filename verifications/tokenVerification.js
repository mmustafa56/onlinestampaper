const jwt = require('jsonwebtoken');
const User = require('../models/User');


const verifyToken = async (req,res,next) =>{

    const token = req.header('token');
    if(!token) return res.status(400).send("You have not any token:)");

    try{
        const userFull = await User();
        const verified = jwt.verify(token);
           verified =  req.userFull;
            next();
        }catch(error){
             res.status(400).send(error)
        }
}

module.exports = verifyToken;