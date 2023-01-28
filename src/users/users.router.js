const express = require('express')
const usersController = require ('./users.controllers')

const router = express.Router()

router.get('/', usersController.welcome)
router.get('/users', usersController.getAllUsers)
router.get('/abc/:id', usersController.getUserById)
router.post('/users', usersController.createUser)

module.exports = router