const express = require('express')

const routes = express.Router()

const controller = require('../controllers/SessionController')

routes.post('/session', controller.createSession)

module.exports = routes
