const express = require('express')
const { SignUp, SignIn } = require('../controllers/Login')

const route = express.Router()


route.post('/signup',SignUp)
route.post('/signin',SignIn)


module.exports= route