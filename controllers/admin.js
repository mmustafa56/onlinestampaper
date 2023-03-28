const jwt = require('jsonwebtoken')
const Joi = require('joi')
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10);
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
            // const user = await User.findOne({uid:req.body.uid,admin:true})
            const user = await User.findOne({uid:req.body.uid})
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
            return res.json({
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
    }
    ,
    acceptForm:async(req,res)=>{
        try{
            // const allform = await Form.find({})
            await Form.updateOne({_id:req.params.id},{
                $set:{
                    accepted:true
                }
            })
            return res.json({
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
    ,
    DeleteForm:async(req,res)=>{
        try{
            // const allform = await Form.find({})
            await Form.deleteOne({_id:req.params.id})
            return res.json({
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
    },
    getAllUser:async(req,res)=>{
        try{
            const allUser = await User.find({})
            return res.json({
                success:true,
                data:allUser
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
    ,
    acceptUser:async(req,res)=>{
        try{

            await User.updateOne({_id:req.params.id},{
                $set:{
                    verify:true
                }
            })
            return res.json({
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
    ,
    deleteUser:async(req,res)=>{
        try{
            await User.deleteOne({_id:req.params.id})
            return res.json({
                success:true,
                message:'Deleted Successfully'
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