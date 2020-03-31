const express = require('express')
const { celebrate, Segments, Joi } = require('celebrate')

const routes = express.Router()

const controller = require('../controllers/ProfileController')

routes.get('/ong/incidents', celebrate({
   [Segments.HEADERS]: Joi.object().keys({
      authorization: Joi.string().required()
   })
}), controller.getSpecificIncidentOng)

module.exports = routes
