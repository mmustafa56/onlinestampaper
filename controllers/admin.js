const jwt = require('jsonwebtoken')
const Joi = require('joi')
const jwtKey = process.env.jwtKey || 'LogIn'
const forgetKey = process.env.jwtKey || 'forgetKey'
const mongoose = require('mongoose')

const User = require('../Models/User')
const Form = require('../Models/Form')

module.exports = {
    SignIn:async(req,res)=>{
        const value = Joi.object({
            uid: Joi.string().required(),
            password: Joi.string().required()
        }).validate(req.body)
        if(value.error){
            return res.status(400).json({
                 success: false, 
                 message:value.error.message
            })
        }
        try{
            const user = await User.findOne({uid:req.body.uid,admin:true})
            if(user){
                const isPsswordcorrect = bcrypt.compareSync(req.body.password, user.password)
                if(isPsswordcorrect){
                    const UserData = user.toObject()
                    delete UserData.password
                    const token = jwt.sign(UserData,jwtKey)
                    return res.json({
                        success:true,
                        message:'Successfully LogIn',
                        token
                    })
                }else{
                    return res.status(400).json({
                        success:false,
                        message:'wrong password'
                    })
                }
            }else{
                //user not found
                return res.status(404).json({
                    success:false,
                    message:'user not found'
                })
            }
        }catch(err){
            //error message
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later'
            })
        }
    },
    getAllForm:async(req,res)=>{
        try{
            const allform = await Form.find({})
            return res.status(500).json({
                success:true,
                data:allform
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later',
                err
            })
        }
    },
    acceptForm:async(req,res)=>{
        try{
            // const allform = await Form.find({})
            await Form.updateOne({_id:req.params.id},{
                $set:{
                    accepted:true
                }
            })
            return res.status(500).json({
                success:true,
                message:'Accepted Successfully'
            })
        }catch(err){
            console.log(err);
            return res.status(500).json({
                success:false,
                message:'server issue try again later',
                err
            })
        }
    }
}