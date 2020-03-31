const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

const controller = require('../controllers/IncidentController')

routes.get('/incidents', celebrate({
   [Segments.QUERY]: Joi.object().keys({
      page: Joi.number()
   })
}), controller.getIncidents)

routes.post('/incidents', celebrate({
   [Segments.HEADERS]: Joi.object({
      authorization: Joi.string().required()
   }).unknown(),
   [Segments.BODY]: Joi.object().keys({
      title: Joi.string().required(),
      description: Joi.string().required(),
      value: Joi.number().required()
   })
}),controller.createIncident)

routes.delete('/incidents/:id', celebrate({
   [Segments.PARAMS]: Joi.object().keys({
      id: Joi.number().required()
   })
}), controller.deleteIncidents)

module.exports = routes
