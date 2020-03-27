const express = require('express')

const routes = express.Router()

const controller = require('../controllers/IncidentController')

routes.get('/incidents', controller.getIncidents)
routes.post('/incidents', controller.createIncident)
routes.delete('/incidents/:id', controller.deleteIncidents)

module.exports = routes
