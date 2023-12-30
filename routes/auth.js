const express = require('express')
const { 
     register,
     login,
     getUsers,
     forgotPassword,
     resetPassword
    } = require('../controller/auth')
const authRauter = express.Router()

authRauter.post('/register', register)
authRauter.post('/login', login)
authRauter.post('/forgotpassword', forgotPassword)
authRauter.put('/resetpassword/:resettoken', resetPassword)
authRauter.get('/users', getUsers)

module.exports = authRauter