const express = require('express')
const app = express()

const router = require('./users/users.router')
//Middleware to allow json files
app.use(express.json())
//Ruutes
app.use('/', router)
//Port
app.listen(7000, () => {
    console.log('Server running on: http://localhost:7000')
})

module.exports = app
