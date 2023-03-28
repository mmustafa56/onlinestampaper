const express = require('express')
const { SignIn, getAllForm, acceptForm, getAllUser, acceptUser, DeleteForm, deleteUser } = require('../controllers/admin')
const   { auth }  = require('../controllers/auth')

const route = express.Router()
route.post('/signin',SignIn)

route.get('/get/form',getAllForm)
route.put('/get/form/:id',acceptForm)
route.delete('/get/form/:id',DeleteForm)


route.get   ('/get/user',getAllUser)
route.put   ('/get/user/:id',acceptUser)
route.delete('/get/user/:id',deleteUser)

module.exports = route