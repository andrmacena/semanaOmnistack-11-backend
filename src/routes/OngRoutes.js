const express = require('express')

const routes = express.Router()

const controller = require('../controllers/OngController')

routes.get('/ongs', controller.getOng)

routes.post('/ongs', controller.createOng)

module.exports = routes
