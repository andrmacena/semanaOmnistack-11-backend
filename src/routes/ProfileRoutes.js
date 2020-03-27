const express = require('express')

const routes = express.Router()

const controller = require('../controllers/ProfileController')

routes.get('/ong/incidents', controller.getSpecificIncidentOng)

module.exports = routes
