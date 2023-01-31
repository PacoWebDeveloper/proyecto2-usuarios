const express = require('express')
const usersController = require ('./users.controllers')

const router = express.Router()

router.get('/', usersController.welcome)
router.get('/users', usersController.getAllUsers)
router.get('/users/:id', usersController.getUserById)
router.post('/users', usersController.createUser)

module.exports = router