const express = require('express')
const { SignIn, getAllForm, acceptForm, getAllUser, acceptUser } = require('../controllers/admin')
const   { auth }  = require('../controllers/auth')

const route = express.Router()
route.post('/signin',SignIn)

route.get('/get/form',getAllForm)
route.put('/get/form/:id',acceptForm)


route.get('/get/form',getAllUser)
route.put('/get/form/:id',acceptUser)

module.exports = route